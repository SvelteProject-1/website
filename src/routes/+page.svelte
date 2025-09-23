<script lang="ts">
	import { Navbar, Formpopup, HeroSection } from '$components';


	let showForm = false;

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

	const heroImages = [
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1920&auto=format&fit=crop'
    ];
</script>

<div class="relative">
    <!-- Hero underneath -->
    <HeroSection images={heroImages}>
        <div>
            <h1 class="mb-4 text-4xl font-bold md:text-6xl">The #1 AI Agent</h1>
            <p class="mx-auto max-w-2xl text-lg opacity-90">
                Resolving complex queries with speed and reliability.
            </p>
            <div class="mt-8 flex justify-center gap-4">
                <button on:click={openForm} class="rounded-full bg-orange-500 px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-orange-600">Start free trial</button>
                <a href="#learn-more" class="rounded-full bg-white/10 px-8 py-3 font-medium text-white backdrop-blur transition-colors duration-200 hover:bg-white/20">View demo</a>
            </div>
        </div>
    </HeroSection>

    <!-- Navbar overlayed on top without modifications -->
    <div class="pointer-events-none absolute inset-x-0 top-0 z-20">
        <div class="pointer-events-auto">
            <Navbar />
        </div>
    </div>
</div>

<!-- Rest of the page content below hero -->
<section id="learn-more" class="bg-gray-100 py-12">
    <div class="mx-auto max-w-4xl px-4">
        <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl font-bold text-gray-900">Welcome to Kadaeducation</h2>
            <p class="mb-8 text-lg text-gray-600">Get in touch with us to learn more about our programs</p>

            <button
                on:click={openForm}
                class="rounded-full bg-orange-500 px-8 py-3 font-medium text-white shadow-lg transition-colors duration-200 hover:bg-orange-600 hover:shadow-xl"
            >
                Contact Us
            </button>
        </div>
    </div>
</section>

<!-- Form Popup Modal -->
{#if showForm}
	<Formpopup on:close={closeForm} on:submit={handleFormSubmit} />
{/if}
