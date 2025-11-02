<script lang="ts">
    import { Navbar, Footer } from '$components';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    // Review data
    const reviews = [
        {
            id: 1,
            name: "Priya Sharma",
            role: "Marketing Director",
            rating: 5,
            text: "The online MBA program exceeded my expectations! I could maintain my executive position while studying. The flexible schedule and real-world case studies helped me immediately apply learning to my work."
        },
        {
            id: 2,
            name: "Rahul Verma",
            role: "Finance Manager",
            rating: 5,
            text: "Choosing this online MBA was the best career decision I've made. The program's focus on financial leadership and global markets perfectly aligned with my career goals. Within months, I secured a promotion."
        },
        {
            id: 3,
            name: "Anjali Patel",
            role: "Entrepreneurship Graduate",
            rating: 5,
            text: "As a startup founder, the entrepreneurship track in the online MBA was invaluable. The networking opportunities with other business leaders and mentorship programs helped me scale my business while studying."
        },
        {
            id: 4,
            name: "Arjun Mehta",
            role: "Operations Manager",
            rating: 5,
            text: "The online MBA's supply chain management specialization transformed my approach to operations. Despite being fully remote, the interactive sessions and group projects provided practical insights I use daily."
        },
        {
            id: 5,
            name: "Neha Gupta",
            role: "Technology Consultant",
            rating: 5,
            text: "Balancing consulting projects with studies seemed daunting, but the program's flexibility made it manageable. The digital business courses were particularly relevant to my consulting work."
        },
        {
            id: 6,
            name: "Aditya Kapoor",
            role: "Project Management Executive",
            rating: 5,
            text: "The online MBA's focus on strategic management and leadership development was exactly what I needed. The international cohort brought diverse perspectives to our virtual discussions, enriching the learning experience."
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
    <div class="flex-grow bg-gray-50 px-4 sm:px-6 py-12 md:py-16 pt-24 md:pt-28">
        <div class="max-w-7xl mx-auto" use:inView>
            <!-- Header -->
            <div class="text-center mb-12 md:mb-16">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Our MBA Success
                    <span class="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                        Stories
                    </span>
                </h1>
                <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                    Hear from our alumni about how our online MBA program transformed their careers while maintaining work-life balance
                </p>
            </div>

            <!-- Reviews Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {#each reviews as review}
                    <div 
                        class="bg-white rounded-xl shadow-sm p-6 flex flex-col"
                        transition:fade={{duration: 300}}
                    >
                        <!-- Review Header -->
                        <div class="flex items-start justify-between mb-4">
                            <div>
                                <h3 class="font-medium text-gray-900 text-lg">{review.name}</h3>
                                <p class="text-sm text-gray-500">{review.role}</p>
                            </div>
                            <!-- Star Rating -->
                            <div class="flex gap-0.5">
                                {#each Array(review.rating) as _}
                                    <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                {/each}
                            </div>
                        </div>

                        <!-- Review Text -->
                        <p class="text-gray-600 flex-grow">{review.text}</p>

                        <!-- Quote Icon -->
                        <div class="mt-4 text-orange-500 opacity-20">
                            <svg class="w-8 h-8 transform rotate-180" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z"/>
                            </svg>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <!-- Footer -->
    <Footer />
</main>

<style>
    :global(.review-card) {
        transition: transform 0.2s ease-in-out;
    }
    
    :global(.review-card:hover) {
        transform: translateY(-4px);
    }
</style>