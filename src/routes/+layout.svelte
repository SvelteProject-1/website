<script lang="ts">
	import '../app.css';
	import Whatsapp from '$lib/components/Whatsapp.svelte';
	import Calling from '$lib/components/Calling.svelte';
	// import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<!-- <link rel="icon" href={favicon} /> -->
	<title>Kada Education - Premier University Admission Consulting in India</title>
	<meta name="description" content="Kada Education provides expert guidance for university admissions with specialized programs for Amity, Manipal, and Shoolini universities. Get personalized counseling and secure your academic future." />

	<!-- Open Graph meta tags -->
	<meta property="og:title" content="Kada Education - Premier University Admission Consulting in India" />
	<meta property="og:description" content="Kada Education provides expert guidance for university admissions with specialized programs for Amity, Manipal, and Shoolini universities. Get personalized counseling and secure your academic future." />
	<meta property="og:image" content="https://kadaeducation.com/images/logos/kadaeducationlogo.png" />
	<meta property="og:image:alt" content="Kada Education Logo - University Admission Consulting" />
	<meta property="og:url" content="https://kadaeducation.com/" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Kada Education" />
	<meta property="og:locale" content="en_IN" />

	<!-- Twitter Card meta tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Kada Education - Premier University Admission Consulting in India" />
	<meta name="twitter:description" content="Expert guidance for Amity, Manipal, and Shoolini university admissions with proven success rates." />
	<meta property="twitter:image" content="https://kadaeducation.com/images/logos/kadaeducationlogo.png" />
	<meta name="twitter:image:alt" content="CollegeWise Logo - University Admission Consulting" />
	<meta name="twitter:site" content="@KadaEducation" />
	<meta name="twitter:creator" content="@KadaEducation" />

	<!-- Additional meta tags for better SEO -->
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<meta name="author" content="Kada Education" />
	<meta name="keywords" content="university admissions, college consulting, Amity University, Manipal University, Shoolini University, education counseling, admission guidance, higher education, India" />
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
</svelte:head>

{@render children?.()}

<Whatsapp />
<Calling phoneNumber="+919876543210" />
