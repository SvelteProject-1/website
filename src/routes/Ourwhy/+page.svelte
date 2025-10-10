<script lang="ts">
    import { Navbar, Footer } from '$components';
    import { onMount } from 'svelte';

    // Countdown timer
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    // Launch date (set to 30 days from now)
    const launchDate = new Date('2025-11-10');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate.getTime() - now;

        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }

    onMount(() => {
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    });

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
    <div class="p-4">
        <Navbar />
    </div>

    <!-- Main Content -->
    <div class="flex-grow flex items-center justify-center bg-gray-50 px-4">
        <div class="max-w-4xl mx-auto text-center py-16" use:inView>
            <!-- Coming Soon Text with Animation -->
            <div 
                class="transform transition-all duration-1000"
                class:opacity-0={!isVisible}
                class:translate-y-10={!isVisible}
                class:opacity-100={isVisible}
                class:translate-y-0={isVisible}
            >
                <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                    Our Why
                </h1>
                <div class="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p class="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
                    Discover our mission and vision for transforming education. Coming soon with our complete story.
                </p>
            </div>

            <!-- Countdown Timer -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div class="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
                    <div class="text-4xl font-bold text-orange-500 mb-2">{days}</div>
                    <div class="text-gray-600">Days</div>
                </div>
                <div class="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
                    <div class="text-4xl font-bold text-orange-500 mb-2">{hours}</div>
                    <div class="text-gray-600">Hours</div>
                </div>
                <div class="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
                    <div class="text-4xl font-bold text-orange-500 mb-2">{minutes}</div>
                    <div class="text-gray-600">Minutes</div>
                </div>
                <div class="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
                    <div class="text-4xl font-bold text-orange-500 mb-2">{seconds}</div>
                    <div class="text-gray-600">Seconds</div>
                </div>
            </div>

            <!-- Feature Previews -->
            <div class="grid md:grid-cols-3 gap-8 mb-12">
                <div class="bg-white p-6 rounded-xl shadow-lg">
                    <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                    <p class="text-gray-600">Learn about our commitment to transforming education accessibility.</p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-lg">
                    <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                    <p class="text-gray-600">Discover our roadmap for the future of education.</p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-lg">
                    <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
                    <p class="text-gray-600">Explore the core principles that drive our platform.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <Footer />
</main>

<style lang="postcss">
    /* Add any component-specific styles here */
</style>