<script lang="ts">
    import { Navbar, Footer } from '$components';
    import { slide } from 'svelte/transition';

    // FAQ data
    let faqs = [
        {
            question: 'Is there a free trial available for the payed options ?',
            answer: 'Yes, we offer a 14-day free trial for all our premium features. You can explore all the features without any commitment during this period.',
            isOpen: false
        },
        {
            question: 'Is it possible to subscribe to the app annually ?',
            answer: 'Yes, we offer both monthly and annual subscription plans. Annual subscriptions come with a significant discount compared to monthly payments.',
            isOpen: false
        },
        {
            question: 'Is it possible to cancel my subscription ?',
            answer: 'Yes of course, just send us an email at contact@collegeapp.com with a little reason of why you want to cancel your subscription and you will get a refund between 1-2 business days.',
            isOpen: false
        },
        {
            question: 'How do I change my account mail ?',
            answer: 'You can change your email address in your account settings. Go to Profile > Settings > Email, and follow the verification process to update your email.',
            isOpen: false
        },
        {
            question: 'How can I change my payment method ?',
            answer: 'To update your payment method, navigate to Settings > Billing & Payments > Payment Methods. You can add a new method or modify existing ones securely.',
            isOpen: false
        }
    ];

    // Toggle FAQ
    function toggleFaq(index: number) {
        faqs[index].isOpen = !faqs[index].isOpen;
        faqs.forEach((faq, i) => {
            if (i !== index) faq.isOpen = false;
        });
        faqs = [...faqs]; // Trigger reactivity
    }
</script>

<main class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <div class="w-full">
        <Navbar />
    </div>

    <!-- Main Content -->
    <div class="flex-grow bg-gray-50 px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div class="max-w-4xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-8 sm:mb-12">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Frequently asked
                    <span class="block sm:inline bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                        questions
                    </span>
                </h1>
                <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
                    Do you need some help with something or do you have questions on some features?
                </p>
            </div>

            <!-- FAQ List -->
            <div class="space-y-3 sm:space-y-4">
                {#each faqs as faq, index}
                    <div class="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md">
                        <button
                            on:click={() => toggleFaq(index)}
                            class="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-start sm:items-center justify-between text-left"
                            aria-expanded={faq.isOpen}
                        >
                            <span class="text-base sm:text-lg font-medium text-gray-900 pr-4">{faq.question}</span>
                            <svg
                                class="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 transition-transform duration-200 flex-shrink-0 mt-1 sm:mt-0"
                                class:rotate-180={faq.isOpen}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {#if faq.isOpen}
                            <div
                                class="px-4 sm:px-6 pb-3 sm:pb-4 text-sm sm:text-base text-gray-600"
                                transition:slide={{ duration: 200 }}
                            >
                                {faq.answer}
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>

            <!-- Contact Section -->
            <div class="mt-8 sm:mt-12 text-center px-2">
                <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Have any other questions?</h2>
                <p class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    Don't hesitate to send us an email with your enquiry or statement at:
                </p>
                <div class="flex items-center justify-center gap-2 sm:gap-4">
                    <a
                        href="mailto:contact@collegeapp.com"
                        class="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium text-sm sm:text-base break-all"
                    >
                        contact@collegeapp.com
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <Footer />
</main>

<style>
    /* Add any component-specific styles here */
</style>