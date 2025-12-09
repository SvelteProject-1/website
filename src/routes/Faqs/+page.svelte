<script lang="ts">
    import { Navbar, Footer } from '$components';
    import { slide } from 'svelte/transition';

    // FAQ data
    let faqs = [
    {
        question: 'What is Kada Education?',
        answer: 'Kada Education is an online learning and career-guidance platform that helps students explore accredited programs, enroll in online or blended courses, and build industry-ready skills.',
        isOpen: false
    },
    {
        question: 'Are the programs recognized and accredited?',
        answer: 'Yes. All programs offered through Kada Education come from authorized and recognized institutions or universities. Accreditation details are provided for each course.',
        isOpen: false
    },
    {
        question: 'What types of courses do you offer?',
        answer: 'We offer Undergraduate and Postgraduate Degrees, Diploma and PG Diploma Programs, Professional Certification Courses, Skill-Based Short-Term Courses, and Career-focused Industry Programs.',
        isOpen: false
    },
    {
        question: 'Are the courses fully online?',
        answer: 'Most programs are 100% online. Some may offer hybrid (online + on-campus) options depending on the university.',
        isOpen: false
    },
    {
        question: 'How do I apply for a course?',
        answer: 'You can fill out the online application form on our website. Our counselor will guide you through eligibility verification, documentation, and enrollment steps.',
        isOpen: false
    },
    {
        question: 'What documents are required for admission?',
        answer: 'Typically required documents include ID proof, 10th and 12th marksheets, graduation documents for PG programs, passport-size photographs, and any additional documents as per course requirements.',
        isOpen: false
    },
    {
        question: 'What is the fee structure?',
        answer: 'The fee varies by course and university. Each course page displays complete fee details including registration and examination charges.',
        isOpen: false
    },
    {
        question: 'Do you offer EMI or installment payment options?',
        answer: 'Yes. Attractive EMI and installment plans are available for many programs.',
        isOpen: false
    },
    {
        question: 'Are scholarships or discounts available?',
        answer: 'Yes. Some partner institutions provide scholarships or special fee waivers based on eligibility and academic profile.',
        isOpen: false
    },
    {
        question: 'How will I attend online classes?',
        answer: 'You receive access to recorded lectures, live classes, e-books, study materials, assignments, quizzes, and discussion forums.',
        isOpen: false
    },
    {
        question: 'Do I need special equipment to study?',
        answer: 'You only need a smartphone or laptop, a stable internet connection, and a basic headset or microphone for live sessions.',
        isOpen: false
    },
    {
        question: 'What if I miss a live class?',
        answer: 'All live sessions are recorded and available for you to watch anytime.',
        isOpen: false
    },
    {
        question: 'How are exams conducted?',
        answer: 'Exams may be conducted online or offline depending on the university’s policy. Details are provided after enrollment.',
        isOpen: false
    },
    {
        question: 'Will I receive a certificate or degree?',
        answer: 'Yes. After successful completion, you will receive a recognized certificate or degree from the offering institution.',
        isOpen: false
    },
    {
        question: 'Do you provide academic support?',
        answer: 'Yes. Students get continuous support from faculty, mentors, and counselors throughout the program.',
        isOpen: false
    },
    {
        question: 'Is technical support available?',
        answer: 'Yes. We provide dedicated technical assistance for login issues, LMS access, and content-related problems.',
        isOpen: false
    },
    {
        question: 'Do you offer placement assistance?',
        answer: 'Yes. We offer resume building, interview training, internship guidance, and job referrals where applicable.',
        isOpen: false
    },
    {
        question: 'What are the career opportunities after completing a course?',
        answer: 'Career opportunities depend on the selected program, but all courses are designed to improve job readiness and industry-relevant skills.',
        isOpen: false
    },
    {
        question: 'Can I study at my own pace?',
        answer: 'Most programs are self-paced with flexible deadlines. Some may have fixed schedules for live sessions.',
        isOpen: false
    },
    {
        question: 'Can I pause or defer my course?',
        answer: 'Deferral depends on university policies. Our team will assist you with the process if needed.',
        isOpen: false
    },
    {
        question: 'What is your refund policy?',
        answer: 'Refund policies vary by university. Generally, refunds are allowed only before final enrollment confirmation.',
        isOpen: false
    },
    {
        question: 'Can I switch to another course?',
        answer: 'Course changes may be allowed based on university guidelines and program timelines.',
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
    <div class="w-full sticky top-0 z-50 bg-white shadow-sm">
        <Navbar />
    </div>

    <!-- Main Content -->
    <div class="flex-grow bg-gray-50 px-4 sm:px-6 py-20 sm:py-24 md:py-28">
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
                        href="https://www.instagram.com/kada_education/"
                        class="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium text-sm sm:text-base break-all"
                    >
                        instagram.com/kada_education
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