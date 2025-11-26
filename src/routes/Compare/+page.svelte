<script lang="ts">
    import { Navbar, Footer, ComparisonModal } from '$components';
    import { onMount } from 'svelte';
    import { flip } from 'svelte/animate';
    import universitiesData from '$lib/universities.json';

    interface University {
        id: string;
        name: string;
        location: string;
        fees: string;
        ranking: string;
        accreditation: string;
        programs: string[];
        established: number;
        campusSize: string | null;
        studentPopulation: string | null;
        placementRate: string;
        logo: string | null;
        satisfiedStudent: string;
        eligibility: string;
        placementAssistance: string;
        onlineClasses: string;
        placementCompanies: string;
        studentRating: string;
    }

    let universities: University[] = universitiesData;
    let selectedUniversities: University[] = [];
    let showModal: boolean = false;
    let searchTerm: string = '';
    let filteredUniversities: University[] = universities;

    // Reactive search filtering
    $: filteredUniversities = universities.filter(univ =>
        univ.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        univ.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function toggleSelection(university: University) {
        if (selectedUniversities.find(u => u.id === university.id)) {
            selectedUniversities = selectedUniversities.filter(u => u.id !== university.id);
            if (selectedUniversities.length < 3) {
                showModal = false;
            }
        } else if (selectedUniversities.length < 3) {
            selectedUniversities = [...selectedUniversities, university];
            if (selectedUniversities.length === 3) {
                showModal = true;
            }
        }
    }

    function isSelected(university: University): boolean {
        return selectedUniversities.some(u => u.id === university.id);
    }

    // Animation for content
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

<main class="min-h-screen flex flex-col animated-gradient-bg">
    <!-- Navbar -->
    <Navbar />

    <!-- Main Content -->
    <div class="flex-grow px-4 py-8 pt-24 relative overflow-hidden">
        <!-- Advanced background elements for glass morphism -->
        <div class="absolute inset-0 opacity-40">
            <div class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl animate-float-slow"></div>
            <div class="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl animate-float-medium"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full blur-3xl animate-float-fast"></div>
            <div class="absolute top-10 right-1/4 w-24 h-24 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full blur-2xl animate-float-reverse"></div>
            <div class="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-r from-pink-200 to-red-200 rounded-full blur-3xl animate-float-slow-delayed"></div>
            <div class="absolute top-3/4 right-20 w-28 h-28 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full blur-2xl animate-float-medium-delayed"></div>
        </div>
        <div class="max-w-7xl mx-auto" use:inView>
            <!-- Header -->
            <div
                class="text-center mb-8 transform transition-all duration-1000"
                class:opacity-0={!isVisible}
                class:translate-y-10={!isVisible}
                class:opacity-100={isVisible}
                class:translate-y-0={isVisible}
            >
                <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                    Compare Universities
                </h1>
                <div class="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p class="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
                    Select up to 3 universities to compare them side-by-side across key parameters.
                </p>
            </div>

            <!-- Search Universities -->
            <div class="mb-6 relative">
                <!-- Floating background elements for search -->
                <div class="absolute inset-0 opacity-30 pointer-events-none">
                    <div class="absolute top-2 left-4 w-3 h-3 bg-blue-400 rounded-full blur-sm animate-float-search-1"></div>
                    <div class="absolute top-4 right-6 w-2 h-2 bg-purple-400 rounded-full blur-sm animate-float-search-2"></div>
                    <div class="absolute bottom-2 left-8 w-2.5 h-2.5 bg-orange-400 rounded-full blur-sm animate-float-search-3"></div>
                    <div class="absolute bottom-4 right-4 w-1.5 h-1.5 bg-pink-400 rounded-full blur-sm animate-float-search-4"></div>
                </div>

                <div class="relative max-w-md mx-auto animate-search-entrance">
                    <div class="relative group">
                        <!-- Animated glow ring -->
                        <div class="absolute -inset-1 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-2xl blur opacity-0 group-focus-within:opacity-30 transition duration-500 animate-pulse-glow"></div>

                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg class="w-5 h-5 text-gray-400 group-focus-within:text-orange-500 group-focus-within:animate-pulse transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search universities by name or location..."
                                bind:value={searchTerm}
                                class="w-full pl-12 pr-10 py-4 bg-white/80 backdrop-blur-2xl border border-white/40 rounded-xl shadow-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-orange-400/60 focus:bg-white/90 transition-all duration-500 hover:shadow-orange-200/20 hover:border-orange-300/40"
                            />
                            {#if searchTerm}
                                <button
                                    on:click={() => searchTerm = ''}
                                    class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-red-500 transition-all duration-300 hover:scale-110 animate-bounce-in"
                                >
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            {/if}
                        </div>
                    </div>
                    {#if searchTerm}
                        <p class="text-sm text-gray-600 mt-3 text-center animate-fade-in-up">
                            ✨ Found {filteredUniversities.length} university{filteredUniversities.length !== 1 ? 'ies' : ''} ✨
                        </p>
                    {/if}
                </div>
            </div>

            <!-- University Selection -->
            <div class="mb-8">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">Select Universities ({selectedUniversities.length}/3)</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {#each filteredUniversities as university, i (university.id)}
                        <div
                            class="relative rounded-xl p-5 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 border overflow-hidden"
                            class:selected-card={isSelected(university)}
                            class:unselected-card={!isSelected(university)}
                        >

                            <div class="flex items-center space-x-4 pr-8 cursor-pointer" on:click={() => toggleSelection(university)}>
                                <div class="relative">
                                    <img src={university.logo} alt="{university.name} logo" class="w-14 h-14 object-contain rounded-lg bg-white p-1 shadow-sm" />
                                </div>
                                <div class="flex-1">
                                    <h3 class="font-bold {isSelected(university) ? 'text-white' : 'text-gray-900'} text-lg leading-tight transition-colors duration-300">{university.name}</h3>
                                    <p class="text-sm {isSelected(university) ? 'text-orange-100' : 'text-gray-600'} mt-1 flex items-center transition-colors duration-300">
                                        <svg class="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        {university.location}
                                    </p>
                                </div>
                            </div>
                            {#if isSelected(university)}
                                <div class="mt-3 pt-3 border-t border-orange-200">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                        Selected
                                    </span>
                                </div>
                            {/if}
                        </div>
                    {/each}
                </div>
            </div>

            <!-- Comparison Message -->
            {#if selectedUniversities.length < 3}
                <div class="text-center py-12">
                    <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Select 3 Universities to Compare</h3>
                    <p class="text-gray-600">Choose universities from the list above to see a detailed comparison.</p>
                </div>
            {/if}

            <!-- Comparison Modal -->
            {#if showModal}
                <ComparisonModal universities={selectedUniversities} on:close={() => showModal = false} />
            {/if}
        </div>
    </div>

    <!-- Footer -->
    <Footer />
</main>

<style lang="postcss">
    /* Advanced glass morphism animations */
    @keyframes float-slow {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(5deg); }
    }

    @keyframes float-medium {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(-3deg); }
    }

    @keyframes float-fast {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-25px) rotate(2deg); }
    }

    @keyframes float-reverse {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(15px) rotate(-4deg); }
    }

    @keyframes float-slow-delayed {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-18px) rotate(6deg); }
    }

    @keyframes float-medium-delayed {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-22px) rotate(-2deg); }
    }

    .animate-float-slow {
        animation: float-slow 8s ease-in-out infinite;
    }

    .animate-float-medium {
        animation: float-medium 6s ease-in-out infinite;
    }

    .animate-float-fast {
        animation: float-fast 4s ease-in-out infinite;
    }

    .animate-float-reverse {
        animation: float-reverse 7s ease-in-out infinite reverse;
    }

    .animate-float-slow-delayed {
        animation: float-slow-delayed 9s ease-in-out infinite 2s;
    }

    .animate-float-medium-delayed {
        animation: float-medium-delayed 5s ease-in-out infinite 1s;
    }

    /* Animated gradient background */
    .animated-gradient-bg {
        background: linear-gradient(-45deg, #bfdbfe, #ffffff, #ddd6fe, #c7d2fe, #e9d5ff, #fde68a);
        background-size: 400% 400%;
        animation: gradientFlow 12s ease infinite;
    }

    @keyframes gradientFlow {
        0% { background-position: 0% 50%; }
        25% { background-position: 100% 50%; }
        50% { background-position: 100% 100%; }
        75% { background-position: 0% 100%; }
        100% { background-position: 0% 50%; }
    }

    /* Amazing search bar animations */
    @keyframes search-entrance {
        0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
        }
        50% {
            opacity: 0.7;
            transform: translateY(-5px) scale(1.02);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    @keyframes pulse-glow {
        0%, 100% {
            opacity: 0.3;
            transform: scale(1);
        }
        50% {
            opacity: 0.6;
            transform: scale(1.05);
        }
    }

    @keyframes float-search-1 {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        33% { transform: translateY(-8px) translateX(4px) rotate(120deg); }
        66% { transform: translateY(4px) translateX(-6px) rotate(240deg); }
    }

    @keyframes float-search-2 {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        50% { transform: translateY(-6px) translateX(-4px) rotate(180deg); }
    }

    @keyframes float-search-3 {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        25% { transform: translateY(5px) translateX(3px) rotate(90deg); }
        75% { transform: translateY(-3px) translateX(-5px) rotate(270deg); }
    }

    @keyframes float-search-4 {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        40% { transform: translateY(-4px) translateX(6px) rotate(144deg); }
        80% { transform: translateY(6px) translateX(-2px) rotate(288deg); }
    }

    @keyframes fade-in-up {
        0% {
            opacity: 0;
            transform: translateY(10px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes bounce-in {
        0% {
            opacity: 0;
            transform: scale(0.3);
        }
        50% {
            opacity: 1;
            transform: scale(1.05);
        }
        70% {
            transform: scale(0.9);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    .animate-search-entrance {
        animation: search-entrance 1s ease-out;
    }

    .animate-pulse-glow {
        animation: pulse-glow 3s ease-in-out infinite;
    }

    .animate-float-search-1 {
        animation: float-search-1 4s ease-in-out infinite;
    }

    .animate-float-search-2 {
        animation: float-search-2 5s ease-in-out infinite 0.5s;
    }

    .animate-float-search-3 {
        animation: float-search-3 3.5s ease-in-out infinite 1s;
    }

    .animate-float-search-4 {
        animation: float-search-4 4.5s ease-in-out infinite 1.5s;
    }

    .animate-fade-in-up {
        animation: fade-in-up 0.5s ease-out;
    }

    .animate-bounce-in {
        animation: bounce-in 0.6s ease-out;
    }

    /* University card selection styles */
    .selected-card {
        background: rgba(255, 165, 0, 0.4) !important;
        border-color: rgba(255, 165, 0, 0.6) !important;
        box-shadow: 0 8px 32px rgba(255, 165, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.1) !important;
    }

    .unselected-card {
        background: rgba(255, 255, 255, 0.5) !important;
        border-color: rgba(255, 255, 255, 0.3) !important;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.1) !important;
    }
</style>
