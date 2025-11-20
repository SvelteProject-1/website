<script lang="ts">
	import '../app.css';
	import Whatsapp from '$lib/components/Whatsapp.svelte';
	import Calling from '$lib/components/Calling.svelte';
	import Formpopup from '$lib/components/modal/Formpopup.svelte';
	// import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	let showForm = $state(false);

	function openForm() {
		showForm = true;
	}

	function closeForm() {
		showForm = false;
	}

	function handleFormSubmit(
		event: CustomEvent<{ name: string; email: string; contactNo: string }>
	) {
		console.log('Form submitted with data:', event.detail);
		// Here you can handle the form data, e.g., send to your backend
		// The confirmation modal is now handled within the Formpopup component
	}

	// Listen for popup form open event
	import { onMount } from 'svelte';
	onMount(() => {
		window.addEventListener('openFormPopup', openForm);

		// Auto-dispatch the open event for first-time visitors only.
		// We do this here because `Formpopup` is mounted conditionally in this
		// layout; its own onMount won't run unless it's mounted. Dispatching the
		// event causes `showForm` to become true and the component to mount,
		// where it performs its own localStorage check and animation.
		try {
			let alreadyShown = false;
			if (typeof window !== 'undefined' && window.localStorage) {
				alreadyShown = !!localStorage.getItem('formpopup_auto_shown');
			}
			if (!alreadyShown) {
				// minor delay to ensure listener registration and avoid race conditions
				setTimeout(() => window.dispatchEvent(new Event('openFormPopup')), 150);
			}
		} catch (e) {
			// ignore storage or other errors
		}
	});
</script>

<svelte:head>
	<!-- <link rel="icon" href={favicon} /> -->
	<title>Kada Education - Premier University Admission Consulting in India</title>
	<meta
		name="description"
		content="Kada Education provides expert guidance for university admissions with specialized programs for Amity, Manipal, and Shoolini universities. Get personalized counseling and secure your academic future."
	/>

	<!-- Open Graph meta tags -->
	<meta
		property="og:title"
		content="Kada Education - Premier University Admission Consulting in India"
	/>
	<meta
		property="og:description"
		content="Kada Education provides expert guidance for university admissions with specialized programs for Amity, Manipal, and Shoolini universities. Get personalized counseling and secure your academic future."
	/>
	<meta
		property="og:image"
		content="https://kadaeducation.com/images/logos/kadaeducationlogo.png"
	/>
	<meta property="og:image:alt" content="Kada Education Logo - University Admission Consulting" />
	<meta property="og:url" content="https://kadaeducation.com/" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Kada Education" />
	<meta property="og:locale" content="en_IN" />

	<!-- Twitter Card meta tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Kada Education - Premier University Admission Consulting in India"
	/>
	<meta
		name="twitter:description"
		content="Expert guidance for Amity, Manipal, and Shoolini university admissions with proven success rates."
	/>
	<meta
		property="twitter:image"
		content="https://kadaeducation.com/images/logos/kadaeducationlogo.png"
	/>
	<meta name="twitter:image:alt" content="CollegeWise Logo - University Admission Consulting" />
	<meta name="twitter:site" content="@KadaEducation" />
	<meta name="twitter:creator" content="@KadaEducation" />

	<!-- Additional meta tags for better SEO -->
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<meta name="author" content="Kada Education" />
	<meta
		name="keywords"
		content="university admissions, college consulting, Amity University, Manipal University, Shoolini University, education counseling, admission guidance, higher education, India"
	/>
	<link rel="canonical" href="https://kadaeducation.com/" />

	<!-- Schema.org structured data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "Kada Education",
			"url": "https://kadaeducation.com/",
			"logo": "https://kadaeducation.com/images/logos/kadaeducationlogo.png",
			"description": "Kada Education provides expert guidance for university admissions with specialized programs for Amity, Manipal, and Shoolini universities. Get personalized counseling and secure your academic future.",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "New Delhi",
				"addressRegion": "Delhi",
				"addressCountry": "IN"
			},
			"sameAs": [
				"https://twitter.com/KadaEducation",
				"https://www.facebook.com/KadaEducation",
				"https://www.instagram.com/KadaEducation"
			]
		}
	</script>
	<!-- Meta Pixel Code -->
	<script>
		!(function (f, b, e, v, n, t, s) {
			if (f.fbq) return;
			n = f.fbq = function () {
				n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
			};
			if (!f._fbq) f._fbq = n;
			n.push = n;
			n.loaded = !0;
			n.version = '2.0';
			n.queue = [];
			t = b.createElement(e);
			t.async = !0;
			t.src = v;
			s = b.getElementsByTagName(e)[0];
			s.parentNode.insertBefore(t, s);
		})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
		fbq('init', '2143401096150704');
		fbq('track', 'PageView');
	</script>
	<noscript
		><img
			height="1"
			width="1"
			style="display:none"
			src="https://www.facebook.com/tr?id=2143401096150704&ev=PageView&noscript=1"
		/></noscript
	>
	<!-- End Meta Pixel Code -->
</svelte:head>

{@render children?.()}
<Whatsapp />
<Calling phoneNumber="+919220549335" />

<!-- Form Popup Modal -->
{#if showForm}
	<Formpopup on:close={closeForm} on:submit={handleFormSubmit} />
{/if}
