<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import { Formpopup } from '$components';
  import { onMount } from 'svelte';

  let showForm = false;

  function openForm() {
    showForm = true;
  }

  function closeForm() {
    showForm = false;
  }

  function handleFormSubmit(event: CustomEvent<{ name: string; email: string; contactNo: string }>) {
    console.log('Form submitted with data:', event.detail);
    // Handle the form submission
  }

  const shooliniImages = [
    '/Images/shoolini/shoolini01.png',
    '/Images/shoolini/shoolini03.jpeg'
  ];

  let isVisible = false;

  // Intersection Observer setup
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
      {
        threshold: 0.2 // 20% of the element needs to be visible
      }
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
  <div class="relative">
    <HeroSection images={shooliniImages}>
      <div class="text-center max-w-4xl px-4">
        <div class="inline-block bg-pink-600 text-white px-6 py-2 rounded-full mb-4 font-bold text-xl">PAY-AFTER-PLACEMENT</div>
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Online MBA</h1>
        <p class="text-2xl md:text-3xl mb-2">Master of Business Administration</p>
        <p class="text-3xl md:text-4xl font-bold mb-6 text-pink-600">FROM INDIA'S NO. 1 PRIVATE UNIVERSITY</p>
        <div class="flex justify-center gap-4 mb-8">
          <!-- <img src="/Images/shoolini/THE-rankings-2025.png" alt="THE World University Rankings 2025" class="h-12" />
          <img src="/Images/shoolini/QS-rankings-2025.png" alt="QS World University Rankings 2025" class="h-12" /> -->
        </div>
        <button 
          on:click={openForm}
          class="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-medium text-lg transition-colors duration-200 inline-block"
        >
          Apply Now
        </button>
      </div>
    </HeroSection>

    <!-- Navbar overlayed on top -->
    <div class="pointer-events-none absolute inset-x-0 top-0 z-20">
      <div class="pointer-events-auto navbar-wrapper">
        <Navbar />
      </div>
    </div>
  </div>

  <!-- Why Choose Shoolini Section -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <div class="flex justify-center items-center gap-4 mb-6">
          <img src="/Images/shoolini/shoolini logo.png" alt="Shoolini University Logo" class="h-16" />
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
              Shoolini University
            </h2>
            <div class="flex items-center justify-center gap-2 mt-2">
              <span class="text-pink-600 font-bold">Online Degrees</span>
              <span class="bg-blue-600 text-white px-2 py-1 rounded text-sm">NAAC A+</span>
              <span class="text-gray-600">UGC Entitled</span>
            </div>
          </div>
        </div>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Join India's No. 1 Private University and experience world-class education with our innovative Pay-After-Placement program
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- NAAC A+ Card -->
        <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">NAAC A+ Accredited</h3>
          <p class="text-gray-600">Top-ranked institution recognized for academic excellence and innovative teaching methodologies.</p>
        </div>

        <!-- Global Rankings Card -->
        <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Global Recognition</h3>
          <p class="text-gray-600">Partnerships with leading international universities and research institutions worldwide.</p>
        </div>

        <!-- Research Excellence Card -->
        <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Research Excellence</h3>
          <p class="text-gray-600">Leading research output with state-of-the-art laboratories and innovation centers.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Key Features Section -->
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
          Program Highlights
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Experience world-class education with our industry-leading MBA program
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        <!-- Duration -->
        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
          <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="font-bold mb-2">Duration</h3>
          <p class="text-pink-600 font-bold">2 YEARS</p>
          <p class="text-sm text-gray-600">Total of 4 Semesters</p>
        </div>

        <!-- Mode -->
        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
          <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="font-bold mb-2">Mode</h3>
          <p class="text-pink-600 font-bold">100% ONLINE</p>
          <p class="text-sm text-gray-600">LIVE + RECORDED Sessions</p>
        </div>

        <!-- Fees -->
        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
          <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="font-bold mb-2">Fees</h3>
          <p class="text-pink-600 font-bold">₹30,000</p>
          <p class="text-sm text-gray-600">Per Semester</p>
        </div>

        <!-- Placement -->
        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
          <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="font-bold mb-2">Placement</h3>
          <p class="text-pink-600 font-bold">100% SUPPORT</p>
          <p class="text-sm text-gray-600">Expert Placement Services</p>
        </div>

        <!-- International Options -->
        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
          <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
            </svg>
          </div>
          <h3 class="font-bold mb-2">Free Add on Course</h3>
          <p class="text-pink-600 font-bold">Free Course</p>
          <p class="text-sm text-gray-600">Like Adda 24x7, Study IQ, Preinsta</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Programs Section -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          World-Class Programs
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Choose from our diverse range of internationally recognized programs
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Engineering Program -->
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div class="h-48 bg-pink-600">
            <img src="/Images/shoolini/shoolini03.jpeg" alt="Engineering programs" class="w-full h-full object-cover"/>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Management studies</h3>
            <ul class="space-y-2 text-gray-600 mb-4">
              <li class="flex items-center">
                <span class="text-pink-600 mr-2">•</span>
                MCA, BBA, MBA, MBA
              </li>
              <li class="flex items-center">
                <span class="text-pink-600 mr-2">•</span>
                Research-focused approach
              </li>
              <li class="flex items-center">
                <span class="text-pink-600 mr-2">•</span>
                Industry collaborations
              </li>
            </ul>
            <button on:click={openForm} class="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors">
              Apply Now
            </button>
          </div>
        </div>

        <!-- Management Program -->
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div class="h-48 bg-pink-600">
            <img src="/Images/shoolini/shoolini02.png" alt="Management programs" class="w-full h-full object-cover"/>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Management Studies</h3>
            <ul class="space-y-2 text-gray-600 mb-4">
              <li class="flex items-center">
                <span class="text-pink-600 mr-2">•</span>
                Global business perspective
              </li>
              <li class="flex items-center">
                <span class="text-pink-600 mr-2">•</span>
                Industry partnerships
              </li>
              <li class="flex items-center">
                <span class="text-pink-600 mr-2">•</span>
                Placement assistance
              </li>
            </ul>
            <button on:click={openForm} class="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors">
              Apply Now
            </button>
          </div>
        </div>

        <!-- Research Program -->
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div class="h-48 bg-pink-600">
            <img src="/Images/shoolini/shoolini01.png" alt="Research programs" class="w-full h-full object-cover"/>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Research Programs</h3>
            <ul class="space-y-2 text-gray-600 mb-4">
              <li class="flex items-center">
                <span class="text-orange-500 mr-2">•</span>
                Doctoral programs
              </li>
              <li class="flex items-center">
                <span class="text-orange-500 mr-2">•</span>
                Research funding
              </li>
              <li class="flex items-center">
                <span class="text-orange-500 mr-2">•</span>
                International collaborations
              </li>
            </ul>
            <button on:click={openForm} class="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="py-16 bg-gray-900 text-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
        <div>
          <div class="text-4xl font-bold text-pink-600 mb-2">20+</div>
          <div class="text-gray-300">Years of Excellence</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-pink-600 mb-2">15k+</div>
          <div class="text-gray-300">Students</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-pink-600 mb-2">500+</div>
          <div class="text-gray-300">Faculty Members</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-pink-600 mb-2">50+</div>
          <div class="text-gray-300">Research Centers</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Admission Process Section -->
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4" use:inView>
      <div class="text-center max-w-2xl mx-auto mb-12" 
        class:opacity-0={!isVisible}
        class:translate-y-10={!isVisible}
        class:opacity-100={isVisible}
        class:translate-y-0={isVisible}
        style="transition: all 0.8s ease-out"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
          Student Admission Process and Assistance from us
        </h2>
        <p class="text-gray-600">
          We guide you through every step of your admission journey at Shoolini University, ensuring a smooth and hassle-free process.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 items-center">
        <!-- Image Section -->
        <div 
          class="rounded-lg overflow-hidden shadow-lg transform"
          class:opacity-0={!isVisible}
          class:translate-x-[-100px]={!isVisible}
          class:opacity-100={isVisible}
          class:translate-x-0={isVisible}
          style="transition: all 0.8s ease-out"
        >
          <img 
            src="/Images/shoolini/shoolini02.png" 
            alt="Shoolini University admission process" 
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Process Steps -->
        <div 
          class="space-y-6 transform"
          class:opacity-0={!isVisible}
          class:translate-x-[100px]={!isVisible}
          class:opacity-100={isVisible}
          class:translate-x-0={isVisible}
          style="transition: all 0.8s ease-out"
        >
          <div class="flex items-center gap-4">
            <div class="bg-pink-600 rounded-full p-2 flex-shrink-0">
              <svg class="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
            </div>
            <span class="text-lg text-gray-800">Complete everything as ordered</span>
          </div>

          <!-- Repeat the rest of the steps -->
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonial Section -->
  <section class="bg-gray-900 py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
          What Our Students Say About Us
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Hear from our students about their experience with Shoolini University and how it transformed their careers.
        </p>
      </div>

      <div class="max-w-3xl mx-auto relative">
        <!-- Navigation Buttons -->
        <button 
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-pink-600 hover:text-pink-500 transition-colors z-10"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-pink-600 hover:text-pink-500 transition-colors z-10"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Testimonial Card -->
        <div class="text-center px-8 md:px-12">
          <div class="mb-8">
            <img 
              src="/Images/shoolini/shoolini01.png" 
              alt="Student testimonial" 
              class="w-20 h-20 rounded-full mx-auto object-cover border-4 border-pink-600"
            />
          </div>
          <h3 class="text-pink-600 text-xl font-semibold mb-1">Anshika Pandey</h3>
          <p class="text-gray-400 text-sm mb-6">MBA Graduate</p>
          <p class="text-gray-300 leading-relaxed">
            "Studying at Shoolini University was a transformative experience. The cutting-edge 
            facilities and supportive faculty helped me achieve my career goals. The beautiful 
            campus in the Himalayas provided the perfect environment for learning."
          </p>
        </div>
      </div>
    </div>
  </section>

  <div class="footer-wrapper">
    <Footer />
  </div>
</main>

{#if showForm}
  <Formpopup 
    on:close={closeForm}
    on:submit={handleFormSubmit}
  />
{/if}

<style lang="postcss">
  /* Override Navbar styles specifically for this page */
  :global(.navbar-wrapper .bg-orange-500) {
    background-color: rgb(219 39 119) !important; /* bg-pink-600 */
  }
  
  :global(.navbar-wrapper .hover\:bg-orange-600:hover) {
    background-color: rgb(190 24 93) !important; /* bg-pink-700 */
  }

  :global(.navbar-wrapper .text-orange-500) {
    color: rgb(219 39 119) !important; /* text-pink-600 */
  }

  :global(.navbar-wrapper .hover\:text-orange-600:hover) {
    color: rgb(190 24 93) !important; /* text-pink-700 */
  }

  /* Override Footer styles locally */
  :global(.footer-wrapper .bg-orange-500) {
    background-color: rgb(219 39 119) !important; /* bg-pink-600 */
  }

  :global(.footer-wrapper .hover\:bg-orange-600:hover) {
    background-color: rgb(190 24 93) !important; /* bg-pink-700 */
  }
</style>
