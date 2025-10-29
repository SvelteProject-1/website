<script lang="ts">
    import { Navbar, Footer } from '$components';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    // Review data
    const reviews = [
        {
            id: 1,
            name: 'Sarah Chen',
            role: 'Computer Science Student',
            rating: 5,
            text: 'I really appreciate how comprehensive this platform is! It helped me make an informed decision about my university choice. The detailed program comparisons were invaluable.',
            image: 'https://source.unsplash.com/random/100x100?woman-1'
        },
        {
            id: 2,
            name: 'Michael Ross',
            role: 'Engineering Graduate',
            rating: 5,
            text: 'The platform provided exactly what I needed to evaluate different engineering programs. The alumni insights and career outcome data were particularly helpful.',
            image: 'https://source.unsplash.com/random/100x100?man-1'
        },
        {
            id: 3,
            name: 'Jessica Taylor',
            role: 'Business Major',
            rating: 5,
            text: 'Great user experience! The comparison tools made it easy to analyze different business schools. Really helped in making my final decision.',
            image: 'https://source.unsplash.com/random/100x100?woman-2'
        },
        {
            id: 4,
            name: 'David Kim',
            role: 'Medical Student',
            rating: 5,
            text: 'I was very impressed with the depth of information available about medical programs. The student reviews and program insights were incredibly detailed.',
            image: 'https://source.unsplash.com/random/100x100?man-2'
        },
        {
            id: 5,
            name: 'Emily Wilson',
            role: 'Arts & Design Student',
            rating: 5,
            text: 'The visual portfolio examples from different art programs really helped me understand what each school offers. Excellent resource!',
            image: 'https://source.unsplash.com/random/100x100?woman-3'
        },
        {
            id: 6,
            name: 'James Anderson',
            role: 'Graduate Student',
            rating: 5,
            text: 'The graduate program comparison tools are fantastic. Made my decision-making process much easier and more informed.',
            image: 'https://source.unsplash.com/random/100x100?man-3'
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
    <div class="flex-grow bg-gray-50 px-4 sm:px-6 py-12 md:py-16">
        <div class="max-w-7xl mx-auto" use:inView>
            <!-- Header -->
            <div class="text-center mb-12 md:mb-16">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    What Our Users Are
                    <span class="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                        Saying
                    </span>
                </h1>
                <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover what students and graduates have to say about their experience with our platform
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
                            <div class="flex items-center">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    class="w-12 h-12 rounded-full object-cover"
                                />
                                <div class="ml-3">
                                    <h3 class="font-medium text-gray-900">{review.name}</h3>
                                    <p class="text-sm text-gray-500">{review.role}</p>
                                </div>
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