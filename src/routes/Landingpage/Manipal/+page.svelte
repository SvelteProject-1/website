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

  const manipalImages = [
    '/Images/Manipalimages/manipal01.png',
    '/Images/Manipalimages/manipal02.png',
    '/Images/Manipalimages/manipal03.png'
  ].map(img => img.split('&')[0]);

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
    <HeroSection images={manipalImages}>
      <div class="text-center max-w-4xl px-4">
      </div>
    </HeroSection>

    <!-- Navbar overlayed on top -->
    <div class="pointer-events-none absolute inset-x-0 top-0 z-20">
      <div class="pointer-events-auto">
        <Navbar />
      </div>
    </div>
  </div>

    <!-- Admission Process Section -->
    <section class="py-16 bg-gray-50 overflow-hidden">
      <div class="container mx-auto px-4" use:inView>
        <div class="text-center max-w-2xl mx-auto mb-12" 
          class:opacity-0={!isVisible}
          class:translate-y-10={!isVisible}
          class:opacity-100={isVisible}
          class:translate-y-0={isVisible}
          style="transition: all 0.8s ease-out"
        >
          <h2 class="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            Student Admission Process and Assistance from us
          </h2>
          <p class="text-gray-600">
            We guide you through every step of your admission journey at Manipal University, ensuring a smooth and hassle-free process.
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
              src="/Images/Manipalimages/manipal04.jpg" 
              alt="Manipal University admission process" 
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
              <div class="bg-orange-500 rounded-full p-2 flex-shrink-0">
                <svg class="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
              </div>
              <span class="text-lg text-gray-800">Complete everything as ordered</span>
            </div>

            <div class="flex items-center gap-4">
              <div class="bg-orange-500 rounded-full p-2 flex-shrink-0">
                <svg class="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
              </div>
              <span class="text-lg text-gray-800">Provide your last exam result</span>
            </div>

            <div class="flex items-center gap-4">
              <div class="bg-orange-500 rounded-full p-2 flex-shrink-0">
                <svg class="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
              </div>
              <span class="text-lg text-gray-800">Choose your desired program</span>
            </div>

            <div class="flex items-center gap-4">
              <div class="bg-orange-500 rounded-full p-2 flex-shrink-0">
                <svg class="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
              </div>
              <span class="text-lg text-gray-800">Get contact with the instructor</span>
            </div>

            <div class="flex items-center gap-4">
              <div class="bg-orange-500 rounded-full p-2 flex-shrink-0">
                <svg class="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
              </div>
              <span class="text-lg text-gray-800">Finally get started your program</span>
            </div>

            <div class="mt-8">
              <button 
                on:click={openForm}
                class="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
              >
                See all our admission
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

          <!-- Why Choose Manipal Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Manipal University?
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Join one of India's most prestigious educational institutions with a legacy of excellence spanning over 70 years
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- NAAC A+ Card -->
          <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">NAAC A+ Accredited</h3>
            <p class="text-gray-600">Highest grade of excellence by National Assessment and Accreditation Council, recognizing our outstanding academic standards.</p>
          </div>

          <!-- Global Rankings Card -->
          <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Global Recognition</h3>
            <p class="text-gray-600">Ranked among top universities globally with strong international collaborations and worldwide alumni network.</p>
          </div>

          <!-- Industry Connection Card -->
          <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Industry Connections</h3>
            <p class="text-gray-600">Strong industry partnerships ensuring high placement rates and internship opportunities with leading companies.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            World-Class Programs
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse range of internationally recognized programs designed for the future
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Engineering Program -->
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div class="h-48 bg-orange-500">
              <img src="/Images/Manipalimages/manipal02.png" alt="Engineering programs" class="w-full h-full object-cover"/>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Engineering & Technology</h3>
              <ul class="space-y-2 text-gray-600 mb-4">
                <li class="flex items-center">
                  <span class="text-orange-500 mr-2">•</span>
                  B.Tech in emerging technologies
                </li>
                <li class="flex items-center">
                  <span class="text-orange-500 mr-2">•</span>
                  Industry-aligned curriculum
                </li>
                <li class="flex items-center">
                  <span class="text-orange-500 mr-2">•</span>
                  State-of-the-art laboratories
                </li>
              </ul>
              <button on:click={openForm} class="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Apply Now
              </button>
            </div>
          </div>

          <!-- Management Program -->
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div class="h-48 bg-orange-500">
              <img src="/Images/Manipalimages/manipal03.png" alt="Management programs" class="w-full h-full object-cover"/>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Management Studies</h3>
              <ul class="space-y-2 text-gray-600 mb-4">
                <li class="flex items-center">
                  <span class="text-orange-500 mr-2">•</span>
                  MBA with specializations
                </li>
                <li class="flex items-center">
                  <span class="text-orange-500 mr-2">•</span>
                  Industry expert faculty
                </li>
                <li class="flex items-center">
                  <span class="text-orange-500 mr-2">•</span>
                  100% placement assistance
                </li>
              </ul>
              <button on:click={openForm} class="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Apply Now
              </button>
            </div>
          </div>

          <!-- Healthcare Program -->
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div class="h-48 bg-orange-500">
              <img src="/Images/Manipalimages/manipal01.png" alt="Healthcare programs" class="w-full h-full object-cover"/>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Healthcare Sciences</h3>
              <ul class="space-y-2 text-gray-600 mb-4">
                <li class="flex items-center">
                  <span class="text-orange-500 mr-2">•</span>
                  Medical & Allied Sciences
                </li>
                <li class="flex items-center">
                  <span class="text-orange-500 mr-2">•</span>
                  Advanced research facilities
                </li>
                <li class="flex items-center">
                  <span class="text-orange-500 mr-2">•</span>
                  Global healthcare exposure
                </li>
              </ul>
              <button on:click={openForm} class="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
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
            <div class="text-4xl font-bold text-orange-500 mb-2">50+</div>
            <div class="text-gray-300">Years of Excellence</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-orange-500 mb-2">25k+</div>
            <div class="text-gray-300">Students</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-orange-500 mb-2">2500+</div>
            <div class="text-gray-300">Faculty Members</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-orange-500 mb-2">100+</div>
            <div class="text-gray-300">Industry Partners</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Placement Partners Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Placement Partners
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Our students are placed in leading companies worldwide
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto items-center justify-items-center">
          <!-- Replace these with actual company logos -->
          <div class="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center p-4">
            <span class="text-gray-500 font-semibold">Company 1</span>
          </div>
          <div class="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center p-4">
            <span class="text-gray-500 font-semibold">Company 2</span>
          </div>
          <div class="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center p-4">
            <span class="text-gray-500 font-semibold">Company 3</span>
          </div>
          <div class="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center p-4">
            <span class="text-gray-500 font-semibold">Company 4</span>
          </div>
        </div>

        <div class="text-center mt-12">
          <button 
            on:click={openForm}
            class="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
          >
            Start Your Career Journey
          </button>
        </div>
      </div>
    </section>

    <!-- Research and Innovation Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Research & Innovation Hub
            </h2>
            <p class="text-gray-600 mb-6">
              At Manipal University, we foster a culture of innovation and research excellence. Our state-of-the-art facilities and expert faculty members guide students in groundbreaking research across multiple disciplines.
            </p>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start">
                <span class="text-orange-500 mr-3">✓</span>
                <span class="text-gray-600">Advanced Research Centers</span>
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-3">✓</span>
                <span class="text-gray-600">International Research Collaborations</span>
              </li>
              <li class="flex items-start">
                <span class="text-orange-500 mr-3">✓</span>
                <span class="text-gray-600">Industry-Sponsored Projects</span>
              </li>
            </ul>
            <button 
              on:click={openForm}
              class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Explore Research Opportunities
            </button>
          </div>
          <div class="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/Images/Manipalimages/manipal04.jpg" 
              alt="Research facilities" 
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="bg-gray-900 py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            What Our Students Say About Us
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            Hear from our students about their experience with Manipal University and how it transformed their careers.
          </p>
        </div>

        <div class="max-w-3xl mx-auto relative">
          <!-- Navigation Buttons -->
          <button 
            class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-orange-500 hover:text-orange-400 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-orange-500 hover:text-orange-400 transition-colors z-10"
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
                src="/Images/Manipalimages/student1.jpg" 
                alt="Student testimonial" 
                class="w-20 h-20 rounded-full mx-auto object-cover border-4 border-orange-500"
              />
            </div>
            <h3 class="text-orange-500 text-xl font-semibold mb-1">Carmen Hodkiewicz</h3>
            <p class="text-gray-400 text-sm mb-6">Global Markets Engineer</p>
            <p class="text-gray-300 leading-relaxed">
              "The education and support I received at Manipal University were exceptional. 
              The faculty's expertise and the practical approach to learning helped me develop 
              the skills I needed for my career. I'm proud to be a Manipal alumnus."
            </p>
          </div>
        </div>
      </div>
    </section>

  <Footer />
</main>

{#if showForm}
  <Formpopup 
    on:close={closeForm}
    on:submit={handleFormSubmit}
  />
{/if}

<style>
  /* Add any component-specific styles here */
</style>
