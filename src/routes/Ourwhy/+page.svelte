<script lang="ts">
    import { Navbar, Footer } from '$components';
    import Formpopup from '$lib/components/modal/Formpopup.svelte';
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';

    // Form modal state
    let showFormModal = false;

    // Handle form submission
    function handleFormSubmit(event: CustomEvent<{ name: string; email: string; contactNo: string }>) {
        console.log('Form submitted:', event.detail);
        // Handle the form submission data here
    }

    // Close form modal
    function handleCloseForm() {
        showFormModal = false;
    }

    // Reasons data
    const reasons = [
        {
            id: 1,
            title: 'Prestigious Programs',
            description: 'Access to top-tier MBA programs from renowned universities, offering the same quality education as on-campus programs with greater flexibility.',
            color: 'bg-yellow-50',
            icon: '🎓',
            iconBg: 'bg-yellow-400'
        },
        {
            id: 2,
            title: 'Flexible Learning',
            description: 'Study at your own pace with our flexible online format, allowing you to balance your education with work and personal commitments.',
            color: 'bg-purple-50',
            icon: '⌚',
            iconBg: 'bg-purple-400'
        },
        {
            id: 3,
            title: 'Career Advancement',
            description: 'Enhance your career prospects with industry-relevant curriculum, networking opportunities, and personalized career guidance services.',
            color: 'bg-pink-50',
            icon: '📈',
            iconBg: 'bg-pink-400'
        },
        {
            id: 4,
            title: 'Comprehensive Support',
            description: 'Benefit from dedicated academic advisors, technical support, and a collaborative learning environment designed for online success.',
            color: 'bg-blue-50',
            icon: '🤝',
            iconBg: 'bg-blue-400'
        }
    ];

    // Animation for sections
    let isVisible = false;
    function inView(element: HTMLElement) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        isVisible = true;
                        observer.unobserve(element);
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(element);
        return {
            destroy() {
                observer.unobserve(element);
            }
        };
    }
</script>

<main class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <div class="w-full">
        <Navbar />
    </div>

    <!-- Main Content -->
    <div class="flex-grow bg-gray-50 px-4 sm:px-6 py-12 md:py-16 relative overflow-hidden">
        <!-- Background Decorations -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute -right-64 top-1/4 w-96 h-96 rounded-full bg-orange-100 opacity-20 blur-3xl"></div>
            <div class="absolute -left-64 top-3/4 w-96 h-96 rounded-full bg-red-100 opacity-20 blur-3xl"></div>
        </div>

        <div class="max-w-7xl mx-auto relative" use:inView>
            <!-- Header -->
            <div class="text-center mb-16 md:mb-24">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Why <span class="text-blue-500">Choose</span> Our Online MBA Platform?
                </h1>
                <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover why thousands of aspiring business leaders choose our platform for their MBA journey:
                </p>
            </div>

            <!-- Reasons Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative">
                {#each reasons as reason, i}
                    <div 
                        class="relative {reason.color} rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                        in:fly={{y: 20, duration: 300, delay: i * 150}}
                    >
                        <!-- Card Content -->
                        <div class="relative z-10">
                            <!-- Icon -->
                            <div class="mb-4">
                                <span class="{reason.iconBg} w-10 h-10 rounded-lg flex items-center justify-center text-white text-xl">
                                    {reason.icon}
                                </span>
                            </div>

                            <!-- Text Content -->
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">
                                {reason.title}
                            </h3>
                            <p class="text-gray-600">
                                {reason.description}
                            </p>
                        </div>

                        <!-- Decorative Elements -->
                        <div class="absolute top-4 right-4 opacity-10 text-4xl">
                            {reason.icon}
                        </div>
                    </div>
                {/each}
            </div>

            <!-- Additional Section -->
            <div class="mt-16 text-center">
                <div class="mb-8">
                    <h2 class="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Ready to Transform Your Career?</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto mb-6">
                        Join thousands of successful professionals who have advanced their careers through our online MBA programs.
                    </p>
                </div>
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="/Program" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 hover:from-red-700 hover:via-orange-600 hover:to-yellow-600 transition-all duration-200 shadow-sm hover:shadow md:text-lg">
                        Explore Programs
                    </a>
                    <button 
                        on:click={() => showFormModal = true}
                        class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow md:text-lg"
                    >
                        Schedule Consultation
                    </button>
                </div>
            </div>

            <!-- Form Popup Modal -->
            {#if showFormModal}
                <Formpopup
                    on:submit={handleFormSubmit}
                    on:close={handleCloseForm}
                />
            {/if}
        </div>
    </div>

    <!-- Footer -->
    <Footer />
</main>

<style>
    /* Add hover effect to cards */
    :global(.reason-card) {
        transition: all 0.3s ease-in-out;
    }
    
    :global(.reason-card:hover) {
        transform: translateY(-4px);
    }
</style>