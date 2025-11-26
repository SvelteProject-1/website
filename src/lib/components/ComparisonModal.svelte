<script lang="ts">
    import { createEventDispatcher } from 'svelte';

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

    export let universities: University[];

    const dispatch = createEventDispatcher();

    function close() {
        dispatch('close');
    }
</script>

<svelte:window on:keydown={(e) => { if (e.key === 'Escape') close(); }} />

<div class="modal-overlay" on:click={close}>
    <div class="modal-content" on:click|stopPropagation>
        <button class="close-button" on:click={close}>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
        <div class="modal-glass-container">
            <!-- Background decorative elements -->
            <div class="absolute inset-0 opacity-20">
                <div class="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl animate-float-slow"></div>
                <div class="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full blur-lg animate-float-medium"></div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-cyan-300 to-indigo-400 rounded-full blur-2xl animate-float-fast"></div>
            </div>

            <div class="relative z-10">
                <div class="modal-header">
                    <div class="flex items-center space-x-2 md:space-x-3">
                        <div class="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center shadow-lg">
                            <svg class="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                        </div>
                        <h2 class="text-lg md:text-2xl font-bold text-gray-900 drop-shadow-lg">University Comparison</h2>
                    </div>
                </div>
                <div class="modal-table-container">
                    <table class="w-full">
                        <thead class="modal-table-header">
                            <tr>
                                <th class="px-2 md:px-4 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-900 uppercase tracking-wider backdrop-blur-sm">Parameter</th>
                                {#each universities as university}
                                    <th class="px-2 md:px-4 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-900 uppercase tracking-wider backdrop-blur-sm">
                                        <div class="flex items-center space-x-3">
                                            <img src={university.logo} alt="{university.name}" class="w-8 h-8 object-contain rounded-lg bg-gray-100 p-1 backdrop-blur-sm" />
                                            <span class="font-bold">{university.name}</span>
                                        </div>
                                    </th>
                                {/each}
                            </tr>
                        </thead>
                        <tbody class="modal-table-body">
                        <tr class="modal-table-row">
                            <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-bold text-gray-900 backdrop-blur-sm">
                                <div class="flex items-center space-x-1 md:space-x-2">
                                    <svg class="w-3 h-3 md:w-4 md:h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <span class="hidden sm:inline">Location</span>
                                    <span class="sm:hidden">Loc</span>
                                </div>
                            </td>
                            {#each universities as university}
                                <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-semibold text-gray-700 backdrop-blur-sm">{university.location}</td>
                            {/each}
                        </tr>
                        <tr class="modal-table-row-alt">
                            <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-bold text-gray-900 backdrop-blur-sm">
                                <div class="flex items-center space-x-1 md:space-x-2">
                                    <svg class="w-3 h-3 md:w-4 md:h-4 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                                    </svg>
                                    <span class="hidden sm:inline">Fees (per year)</span>
                                    <span class="sm:hidden">Fees</span>
                                </div>
                            </td>
                            {#each universities as university}
                                <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-semibold text-gray-700 backdrop-blur-sm">{university.fees}</td>
                            {/each}
                        </tr>
                        <tr class="modal-table-row">
                            <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-bold text-gray-900 backdrop-blur-sm">
                                <div class="flex items-center space-x-1 md:space-x-2">
                                    <svg class="w-3 h-3 md:w-4 md:h-4 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                    </svg>
                                    <span class="hidden sm:inline">Ranking</span>
                                    <span class="sm:hidden">Rank</span>
                                </div>
                            </td>
                            {#each universities as university}
                                <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-semibold text-gray-700 backdrop-blur-sm">{university.ranking}</td>
                            {/each}
                        </tr>
                        <tr class="modal-table-row-alt">
                            <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-bold text-gray-900 backdrop-blur-sm">
                                <div class="flex items-center space-x-1 md:space-x-2">
                                    <svg class="w-3 h-3 md:w-4 md:h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span class="hidden sm:inline">Accreditation</span>
                                    <span class="sm:hidden">Accred</span>
                                </div>
                            </td>
                            {#each universities as university}
                                <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-semibold text-gray-700 backdrop-blur-sm">{university.accreditation}</td>
                            {/each}
                        </tr>
                        <tr class="modal-table-row">
                            <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-bold text-gray-900 backdrop-blur-sm">
                                <div class="flex items-center space-x-1 md:space-x-2">
                                    <svg class="w-3 h-3 md:w-4 md:h-4 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                    <span class="hidden sm:inline">Programs</span>
                                    <span class="sm:hidden">Progs</span>
                                </div>
                            </td>
                            {#each universities as university}
                                <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-semibold text-gray-700 backdrop-blur-sm">
                                    <div class="flex flex-wrap gap-0.5 md:gap-2">
                                        {#each university.programs as program}
                                            <span class="inline-block bg-gray-200 text-gray-800 px-0.5 md:px-2 py-0.5 md:py-1 rounded text-xs font-semibold backdrop-blur-sm border border-gray-300">{program}</span>
                                        {/each}
                                    </div>
                                </td>
                            {/each}
                        </tr>
                        <tr class="modal-table-row-alt">
                            <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-bold text-gray-900 backdrop-blur-sm">
                                <div class="flex items-center space-x-1 md:space-x-2">
                                    <svg class="w-3 h-3 md:w-4 md:h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    <span class="hidden sm:inline">Established</span>
                                    <span class="sm:hidden">Est</span>
                                </div>
                            </td>
                            {#each universities as university}
                                <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-semibold text-gray-700 backdrop-blur-sm">{university.established}</td>
                            {/each}
                        </tr>
                        <tr class="modal-table-row">
                            <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-bold text-gray-900 backdrop-blur-sm">
                                <div class="flex items-center space-x-1 md:space-x-2">
                                    <svg class="w-3 h-3 md:w-4 md:h-4 text-rose-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                    </svg>
                                    <span class="hidden sm:inline">Placement Rate</span>
                                    <span class="sm:hidden">Placement</span>
                                </div>
                            </td>
                            {#each universities as university}
                                <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-semibold text-gray-700 backdrop-blur-sm">{university.placementRate}</td>
                            {/each}
                        </tr>
                        <tr class="modal-table-row-alt">
                            <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-bold text-gray-900 backdrop-blur-sm">
                                <div class="flex items-center space-x-1 md:space-x-2">
                                    <svg class="w-3 h-3 md:w-4 md:h-4 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 11H13m-3 3h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 14H13m-3 3h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 17H13M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span class="hidden sm:inline">Satisfied Students</span>
                                    <span class="sm:hidden">Satisfaction</span>
                                </div>
                            </td>
                            {#each universities as university}
                                <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-semibold text-gray-700 backdrop-blur-sm">{university.satisfiedStudent}</td>
                            {/each}
                        </tr>
                        <tr class="modal-table-row">
                            <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-bold text-gray-900 backdrop-blur-sm">
                                <div class="flex items-center space-x-1 md:space-x-2">
                                    <svg class="w-3 h-3 md:w-4 md:h-4 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span class="hidden sm:inline">Eligibility</span>
                                    <span class="sm:hidden">Eligibility</span>
                                </div>
                            </td>
                            {#each universities as university}
                                <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-semibold text-gray-700 backdrop-blur-sm">{university.eligibility}</td>
                            {/each}
                        </tr>
                        <tr class="modal-table-row-alt">
                            <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-bold text-gray-900 backdrop-blur-sm">
                                <div class="flex items-center space-x-1 md:space-x-2">
                                    <svg class="w-3 h-3 md:w-4 md:h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <span class="hidden sm:inline">Placement Assistance</span>
                                    <span class="sm:hidden">Placement Help</span>
                                </div>
                            </td>
                            {#each universities as university}
                                <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-semibold text-gray-700 backdrop-blur-sm">{university.placementAssistance}</td>
                            {/each}
                        </tr>
                        <tr class="modal-table-row-alt">
                            <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-bold text-gray-900 backdrop-blur-sm">
                                <div class="flex items-center space-x-1 md:space-x-2">
                                    <svg class="w-3 h-3 md:w-4 md:h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                    </svg>
                                    <span class="hidden sm:inline">Online Classes</span>
                                    <span class="sm:hidden">Online Classes</span>
                                </div>
                            </td>
                            {#each universities as university}
                                <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-semibold text-gray-700 backdrop-blur-sm">{university.onlineClasses}</td>
                            {/each}
                        </tr>
                        <tr class="modal-table-row">
                            <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-bold text-gray-900 backdrop-blur-sm">
                                <div class="flex items-center space-x-1 md:space-x-2">
                                    <svg class="w-3 h-3 md:w-4 md:h-4 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                    </svg>
                                    <span class="hidden sm:inline">Placement Companies</span>
                                    <span class="sm:hidden">Companies</span>
                                </div>
                            </td>
                            {#each universities as university}
                                <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-semibold text-gray-700 backdrop-blur-sm">
                                    <div class="max-w-32 md:max-w-48 truncate" title="{university.placementCompanies}">{university.placementCompanies}</div>
                                </td>
                            {/each}
                        </tr>
                        <tr class="modal-table-row-alt">
                            <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-bold text-gray-900 backdrop-blur-sm">
                                <div class="flex items-center space-x-1 md:space-x-2">
                                    <svg class="w-3 h-3 md:w-4 md:h-4 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                    </svg>
                                    <span class="hidden sm:inline">Student Rating</span>
                                    <span class="sm:hidden">Rating</span>
                                </div>
                            </td>
                            {#each universities as university}
                                <td class="px-1 md:px-4 py-2 md:py-4 text-xs md:text-sm font-semibold text-gray-700 backdrop-blur-sm">{university.studentRating}</td>
                            {/each}
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6));
        backdrop-filter: blur(15px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: modalFadeIn 0.3s ease-out;
    }

    @keyframes modalFadeIn {
        from {
            opacity: 0;
            backdrop-filter: blur(0px);
        }
        to {
            opacity: 1;
            backdrop-filter: blur(15px);
        }
    }

    .modal-content {
        border-radius: 16px;
        max-width: 95vw;
        max-height: 95vh;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .close-button {
        position: absolute;
        top: 16px;
        right: 16px;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.9);
        z-index: 1001;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }

    .close-button:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(0,0,0,0.4);
    }

    /* Advanced glass morphism modal styles */
    .modal-glass-container {
        background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.9));
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.8);
        border-radius: 16px;
        box-shadow:
            0 8px 32px rgba(0,0,0,0.1),
            inset 0 1px 0 rgba(255,255,255,0.9),
            inset 0 -1px 0 rgba(0,0,0,0.05);
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .modal-header {
        background: linear-gradient(135deg, rgba(255,165,0,0.9), rgba(255,69,0,0.9));
        backdrop-filter: blur(10px);
        padding: 1.5rem;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        position: relative;
    }

    .modal-table-container {
        padding: 0;
        overflow-x: auto;
        overflow-y: auto;
        flex: 1;
        min-height: 0; /* Allow flex item to shrink */
        max-height: 60vh; /* Limit height on desktop */
    }

    /* Mobile table optimizations */
    @media (max-width: 768px) {
        .modal-table-container table {
            min-width: 600px; /* Ensure table doesn't get too compressed */
        }

        .modal-table-container {
            -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
        }
    }

    .modal-table-header th {
        background: rgba(0,0,0,0.05);
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .modal-table-body {
        background: rgba(0,0,0,0.02);
    }

    .modal-table-row {
        background: rgba(0,0,0,0.02);
        border-bottom: 1px solid rgba(0,0,0,0.1);
        transition: all 0.3s ease;
    }

    .modal-table-row:hover {
        background: rgba(0,0,0,0.05);
    }

    .modal-table-row-alt {
        background: rgba(0,0,0,0.01);
        border-bottom: 1px solid rgba(0,0,0,0.1);
        transition: all 0.3s ease;
    }

    .modal-table-row-alt:hover {
        background: rgba(0,0,0,0.03);
    }

    /* Floating animations for modal background */
    @keyframes float-slow {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(5deg); }
    }

    @keyframes float-medium {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(-3deg); }
    }

    @keyframes float-fast {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(2deg); }
    }

    .animate-float-slow {
        animation: float-slow 6s ease-in-out infinite;
    }

    .animate-float-medium {
        animation: float-medium 4s ease-in-out infinite;
    }

    .animate-float-fast {
        animation: float-fast 3s ease-in-out infinite;
    }

    @media (max-width: 768px) {
        .modal-content {
            width: 100vw;
            height: 100vh;
            max-width: none;
            max-height: none;
            border-radius: 0;
        }

        .modal-glass-container {
            border-radius: 0;
            padding: 0.5rem;
        }

        .modal-header {
            padding: 0.75rem;
        }

        .modal-header h2 {
            font-size: 1.25rem;
        }

        .modal-table-container {
            padding: 0.25rem;
            max-height: calc(100vh - 120px);
            overflow-y: auto;
            flex: 1;
            min-height: 0;
        }

        /* Ensure scrolling works on all screen sizes */
        .modal-content {
            max-height: 95vh;
        }

        /* Hide decorative background elements on mobile for cleaner look */
        .modal-glass-container > div:first-child {
            display: none;
        }
    }
</style>
