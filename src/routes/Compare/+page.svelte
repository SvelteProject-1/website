<script lang="ts">
    import { Navbar, Footer } from '$components';
    import { onMount } from 'svelte';

    // Countdown timer
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    // Launch date (set to 30 days from now)
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

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

    // Animation for particles
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
                    Compare Universities
                </h1>
                <div class="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p class="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
                    Our advanced university comparison tool is launching soon. Get ready to make informed decisions about your education journey.
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
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Side-by-Side Comparison</h3>
                    <p class="text-gray-600">Compare universities across multiple parameters in an easy-to-read format.</p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-lg">
                    <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Detailed Rankings</h3>
                    <p class="text-gray-600">Access comprehensive rankings and analytics for each institution.</p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-lg">
                    <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Real-Time Updates</h3>
                    <p class="text-gray-600">Get the latest information and updates about universities in real-time.</p>
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
