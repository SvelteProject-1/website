<script lang="ts">
    import { Navbar, Footer } from '$components';
    import { fade, fly } from 'svelte/transition';
    import Formpopup from '$lib/components/modal/Formpopup.svelte';

    // Form modal state
    let showFormModal = false;
    let selectedUniversity: typeof universities[0] | null = null;

    // Handle form submission
    function handleFormSubmit(event: CustomEvent<{ name: string; email: string; contactNo: string }>) {
        console.log('Form submitted:', event.detail);
        // Handle the form submission data here
    }

    // Close form modal
    function handleCloseForm() {
        showFormModal = false;
        selectedUniversity = null;
    }

    // Function to open form with specific university
    function openFormForUniversity(university: typeof universities[0]) {
        selectedUniversity = university;
        showFormModal = true;
    }

    // University Programs Data
const universities = [
  {
    name: "Manipal University",
    logoUrl: "/Images/Manipalimages/manipal01.png",
    rating: 4.8,
    reviews: 428,
    duration: "2 Years",
    fee: "INR 1,75,000",
    specializations: ["NAC A++", "NIRF Ranked 3"],
    features: ["100% placement assistance", "Dual specialization", "Legacy since 1951", "Global Recognition"]
  },
  {
    name: "Shoolini University",
    logoUrl: "/Images/shoolini/shoolini01.png",
    rating: 4.9,
    reviews: 512,
    duration: "2 Years",
    fee: "NAAC A+ Accredited",
    specializations: ["NAAC A+", "PAY AFTER PLACEMENT", "100% PLACEMENT GUARANTEE"],
    features: ["Industry focused", "Research Focus", "Indias first private university"]
  },
  {
    name: "Amity University",
    logoUrl: "/Images/amity/amity01.jpg",
    rating: 4.7,
    reviews: 385,
    duration: "2 Years",
    fee: "INR 1,99,000",
    specializations: ["NAAC A+", "NIRF Ranked 32", "100% PLACEMENT GUARANTEE"],
    features: ["Top Ranked University", "Industrial Collaboration", "Global Alumni Network"]
  },
  {
    name: "DY Patil University",
    logoUrl: "/Images/DY/dy1.jpg",
    rating: 4.8,
    reviews: 456,
    duration: "2 Years",
    fee: "INR 1,45,400",
    specializations: ["NAAC A+", "TOP 50 PRIVATE UNIVERSITY","40 YEAR OF LEGACY"],
    features: ["150,000 + Alumni Network", "Research Excellence", "Top Medical college in india"]
  },
  {
    name: "Lovely Professional University",
    logoUrl: "/Images/LPU/lpu1.jpg",
    rating: 4.6,
    reviews: 342,
    duration: "2 Years",
    fee: "INR 1,46,240",
    specializations: ["NAAC A+", "NIRF Ranked 31", "DUAL SPECIALIZATION"],
    features: ["Advance LMS portal", "100% placement assistance", "Industrial Partnership","Recognized University"]
  },
  {
    name: "Uttranchal University",
    logoUrl: "/Images/Uttranchal/uttranchal1.jpg",
    rating: 4.7,
    reviews: 298,
    duration: "2 Years",
    fee: "INR 98,000",
    specializations: ["NAAC A+", "30% DISCOUNT ON FEES",],
    features: ["100% placement assistance", "Industrial partnership", "affordables fees","Inforces certification free of cost"]
  }
];

</script>

<main class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <div class="p-4">
        <Navbar />
    </div>

    <!-- Main Content -->
    <div class="flex-grow bg-gray-50 px-4 sm:px-6 py-12 md:py-16 pt-24 md:pt-28">
        <div class="max-w-7xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-12 md:mb-16">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Our Partner
                    <span class="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                        Universities
                    </span>
                </h1>
                <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                    Choose from India's top business schools offering online MBA programs designed for working professionals
                </p>
            </div>

            <!-- University Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {#each universities as university}
                    <div 
                        class="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                        transition:fade={{duration: 300}}
                    >
                        <!-- University Header -->
                        <div class="px-6 py-4 border-b border-gray-100">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-xl font-bold text-gray-900">{university.name}</h3>
                                <div class="flex items-center">
                                    <span class="text-yellow-400 mr-1">★</span>
                                    <span class="text-gray-700 font-medium">{university.rating}</span>
                                    <span class="text-gray-400 text-sm ml-1">({university.reviews})</span>
                                </div>
                            </div>
                            <div class="flex justify-between text-sm">
                                <div>
                                    <span class="text-gray-500">Duration:</span>
                                    <span class="text-gray-700 font-medium ml-1">{university.duration}</span>
                                </div>
                                <div>
                                    <span class="text-gray-500">Fee:</span>
                                    <span class="text-gray-700 font-medium ml-1">{university.fee}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Specializations -->
                        <div class="px-6 py-4 border-b border-gray-100">
                            <h4 class="text-sm font-semibold text-gray-700 mb-2">Specializations</h4>
                            <div class="flex flex-wrap gap-2">
                                {#each university.specializations as spec}
                                    <span class="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                                        {spec}
                                    </span>
                                {/each}
                            </div>
                        </div>

                        <!-- Features -->
                        <div class="px-6 py-4">
                            <h4 class="text-sm font-semibold text-gray-700 mb-2">Key Features</h4>
                            <ul class="space-y-2">
                                {#each university.features as feature}
                                    <li class="flex items-center text-sm text-gray-600">
                                        <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                {/each}
                            </ul>
                        </div>

                        <!-- Action Button -->
                        <div class="px-6 py-4 bg-gray-50">
                            <button
                                on:click={() => openFormForUniversity(university)}
                                class="w-full py-2 px-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white font-medium rounded-lg hover:from-red-700 hover:via-orange-600 hover:to-yellow-600 transition-all duration-200"
                            >
                                Request Information
                            </button>
                        </div>
                    </div>
                {/each}
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

<style lang="postcss">
    /* Add any component-specific styles here */
</style>