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
                    Frequently Asked Questions
                </h1>
                <div class="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p class="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
                    Our comprehensive FAQ section is coming soon. Get ready to find answers to all your university-related questions.
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
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Smart Search</h3>
                    <p class="text-gray-600">Find answers quickly with our intelligent search system.</p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-lg">
                    <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Community Answers</h3>
                    <p class="text-gray-600">Get insights from students, faculty, and education experts.</p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-lg">
                    <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Regular Updates</h3>
                    <p class="text-gray-600">Stay current with the latest information and changes.</p>
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
