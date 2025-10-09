<script lang="ts">
    import { Navbar, Formpopup, HeroSection, Footer, Marquee, UniversityCards } from '$components';


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
            <h1 class="mb-4 text-4xl font-bold md:text-6xl">Welcome to Kadaeducation</h1>
            <p class="mx-auto max-w-2xl text-lg opacity-90">
                Get in touch with us to learn more about our programs
            </p>
            <div class="mt-8 flex justify-center">
                <button on:click={openForm} class="rounded-full bg-orange-500 px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-orange-600">Contact Us</button>
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

<!-- Partners Marquee -->
<Marquee />

<!-- University Programs Cards -->
<UniversityCards />

<!-- Footer -->
<Footer />

<!-- Form Popup Modal -->
{#if showForm}
	<Formpopup on:close={closeForm} on:submit={handleFormSubmit} />
{/if}
