<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import { Formpopup } from '$components';
	import { onMount } from 'svelte';

	let showForm = false;
	let formPopup: any;

	function openForm() {
		showForm = true;
		// Wait for the component to mount, then open the modal
		setTimeout(() => {
			if (formPopup) {
				formPopup.openModal();
			}
		}, 10);
	}

	function closeForm() {
		showForm = false;
	}

	function handleFormSubmit(event: CustomEvent<{ name: string; email: string; contactNo: string }>) {
		console.log('Form submitted with data:', event.detail);
	}

	const nmImages = [
		'/Images/NMIMS/nmims02.jpg',
		'/Images/NMIMS/nmims03.jpg',
		'/Images/NMIMS/nmims04.jpg'
	];

	let universityVisible = false;
	let highlightsVisible = false;
	let programsVisible = false;
	let statsVisible = false;
	let admissionVisible = false;
	let testimonialVisible = false;

	function inView(node: HTMLElement, params: { callback: (visible: boolean) => void }) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					params.callback(entry.isIntersecting);
				});
			},
			{ threshold: 0.2 }
		);

		observer.observe(node);

		return {
			destroy() {
				observer.unobserve(node);
			}
		};
	}
</script>

<main class="min-h-screen flex flex-col">
	<div class="relative">
		<HeroSection images={nmImages} overlayOpacity={30}>
			<div class="text-center max-w-4xl px-4 animate-fade-in">
				<div
					class="inline-block text-white px-6 py-2 rounded-full mb-4 font-bold text-xl shadow-lg animate-bounce"
					style="background-color: #4b2e83;"
				>
					CAREER SERVICES 2.0
				</div>
				<h1
					class="text-4xl md:text-6xl font-bold mb-4 animate-slide-up"
					style="animation-delay: 0.2s"
				>
					NMIMS Career Services & Job Portal
				</h1>
				<p
					class="text-2xl md:text-3xl mb-2 animate-slide-up"
					style="animation-delay: 0.4s"
				>
					Centre for Distance & Online Education
				</p>
				<p
					class="text-2xl md:text-3xl font-semibold mb-6 animate-slide-up"
					style="color: #f36f21; animation-delay: 0.6s"
				>
					Personalized Career Support for Working Professionals & Students
				</p>
				<div
					class="flex justify-center gap-4 mb-8 animate-slide-up"
					style="animation-delay: 0.8s"
				></div>
				<button
					on:click={openForm}
					class="text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 inline-block hover:bg-[#3b2468] hover:scale-105 hover:shadow-2xl animate-pulse"
					style="background-color: #4b2e83; animation-delay: 1s"
				>
					Enroll for Career Services
				</button>
			</div>
		</HeroSection>

		<div class="pointer-events-none absolute inset-x-0 top-0 z-20">
			<div class="pointer-events-auto navbar-wrapper">
				<Navbar />
			</div>
		</div>
	</div>

	<!-- NMIMS University / CDOE Intro -->
	<section
		class="py-16 bg-white"
		use:inView={{ callback: (visible) => (universityVisible = visible) }}
	>
		<div class="container mx-auto px-4">
			<div
				class="text-center mb-12"
				class:opacity-0={!universityVisible}
				class:translate-y-10={!universityVisible}
				class:opacity-100={universityVisible}
				class:translate-y-0={universityVisible}
				style="transition: all 0.8s ease-out"
			>
				<div class="flex justify-center items-center gap-4 mb-6">
					<img
						src="/Images/logos/nmims.png"
						alt="NMIMS Logo"
						class="h-16 animate-pulse"
					/>
					<div>
						<h2 class="text-3xl md:text-4xl font-bold text-gray-900">
							NMIMS University
						</h2>
						<p class="text-sm text-gray-600 mt-1">
							Centre for Distance & Online Education (CDOE)
						</p>
						<div class="flex items-center justify-center gap-2 mt-2">
							<span class="font-bold" style="color: #4b2e83;">
								Career Services 2.0
							</span>
							<span
								class="bg-[#f36f21] text-white px-2 py-1 rounded text-sm animate-bounce"
							>
								Job Portal & Coaching
							</span>
							<span class="text-gray-600">For Students & Alumni</span>
						</div>
					</div>
				</div>
				<p class="text-gray-600 max-w-2xl mx-auto">
					Structured career support through flexible modules – from assessments and
					coaching to profile building and job search – designed for online and distance
					learners.
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
				<!-- Card 1 -->
				<div
					class="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
					class:opacity-0={!universityVisible}
					class:translate-y-10={!universityVisible}
					class:opacity-100={universityVisible}
					class:translate-y-0={universityVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.2s"
				>
					<div
						class="w-12 h-12 bg-gradient-to-br from-[#ede7ff] to-[#d8ccff] rounded-lg flex items-center justify-center mb-4 animate-float"
					>
						<svg class="w-6 h-6" fill="none" stroke="#4b2e83" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
					<h3 class="text-xl font-semibold text-gray-900 mb-2">
						Multiple Service Modules
					</h3>
					<p class="text-gray-600">
						Assessments, coaching, profile development, practice interviews and job
						support – choose what you need for your career stage.
					</p>
				</div>

				<!-- Card 2 -->
				<div
					class="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
					class:opacity-0={!universityVisible}
					class:translate-y-10={!universityVisible}
					class:opacity-100={universityVisible}
					class:translate-y-0={universityVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.4s"
				>
					<div
						class="w-12 h-12 bg-gradient-to-br from-[#ede7ff] to-[#d8ccff] rounded-lg flex items-center justify-center mb-4 animate-float"
						style="animation-delay: 0.2s"
					>
						<svg class="w-6 h-6" fill="none" stroke="#4b2e83" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
							/>
						</svg>
					</div>
					<h3 class="text-xl font-semibold text-gray-900 mb-2">
						Personalized & Flexible
					</h3>
					<p class="text-gray-600">
						One-on-one sessions and outcome-based modules that can be enrolled and
						re-enrolled as per your changing goals.
					</p>
				</div>

				<!-- Card 3 -->
				<div
					class="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
					class:opacity-0={!universityVisible}
					class:translate-y-10={!universityVisible}
					class:opacity-100={universityVisible}
					class:translate-y-0={universityVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.6s"
				>
					<div
						class="w-12 h-12 bg-gradient-to-br from-[#ede7ff] to-[#d8ccff] rounded-lg flex items-center justify-center mb-4 animate-float"
						style="animation-delay: 0.4s"
					>
						<svg class="w-6 h-6" fill="none" stroke="#4b2e83" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<h3 class="text-xl font-semibold text-gray-900 mb-2">
						Job Portal Integration
					</h3>
					<p class="text-gray-600">
						Profile-based recommendations, NMIMS badging, and visibility to recruiters
						with unlimited job applications for 6 months.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Program Highlights – key features -->
	<section
		class="py-16 bg-gradient-to-br from-gray-50 to-gray-100"
		use:inView={{ callback: (visible) => (highlightsVisible = visible) }}
	>
		<div class="container mx-auto px-4">
			<div
				class="text-center mb-12"
				class:opacity-0={!highlightsVisible}
				class:translate-y-10={!highlightsVisible}
				class:opacity-100={highlightsVisible}
				class:translate-y-0={highlightsVisible}
				style="transition: all 0.8s ease-out"
			>
				<h2
					class="text-3xl md:text-4xl font-bold mb-4"
					style="color: #4b2e83;"
				>
					Career Services 2.0 Highlights
				</h2>
				<p class="text-gray-600 max-w-2xl mx-auto">
					Flexible, modular services that support job change, role growth and
					entrepreneurial aspirations for NMIMS learners.
				</p>
			</div>

			<div
				class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
			>
				<!-- Duration / Access -->
				<div
					class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
					class:opacity-0={!highlightsVisible}
					class:translate-y-10={!highlightsVisible}
					class:opacity-100={highlightsVisible}
					class:translate-y-0={highlightsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.1s"
				>
					<div
						class="w-12 h-12 bg-gradient-to-br from-[#ede7ff] to-[#d8ccff] rounded-full flex items-center justify-center mx-auto mb-4 animate-float"
					>
						<svg class="w-6 h-6" fill="none" stroke="#4b2e83" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<h3 class="font-bold mb-2">Job Portal Access</h3>
					<p class="font-bold" style="color: #4b2e83;">6 MONTHS</p>
					<p class="text-sm text-gray-600">With option to re-enroll any time.</p>
				</div>

				<!-- Mode -->
				<div
					class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
					class:opacity-0={!highlightsVisible}
					class:translate-y-10={!highlightsVisible}
					class:opacity-100={highlightsVisible}
					class:translate-y-0={highlightsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.2s"
				>
					<div
						class="w-12 h-12 bg-gradient-to-br from-[#ede7ff] to-[#d8ccff] rounded-full flex items-center justify-center mx-auto mb-4 animate-float"
						style="animation-delay: 0.2s"
					>
						<svg class="w-6 h-6" fill="none" stroke="#4b2e83" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<h3 class="font-bold mb-2">Mode</h3>
					<p class="font-bold" style="color: #4b2e83;">ONLINE</p>
					<p class="text-sm text-gray-600">Links & sessions via student portal.</p>
				</div>

				<!-- Pricing -->
				<div
					class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
					class:opacity-0={!highlightsVisible}
					class:translate-y-10={!highlightsVisible}
					class:opacity-100={highlightsVisible}
					class:translate-y-0={highlightsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.3s"
				>
					<div
						class="w-12 h-12 bg-gradient-to-br from-[#ede7ff] to-[#d8ccff] rounded-full flex items-center justify-center mx-auto mb-4 animate-float"
						style="animation-delay: 0.4s"
					>
						<svg class="w-6 h-6" fill="none" stroke="#4b2e83" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<h3 class="font-bold mb-2">Fees</h3>
					<p class="font-bold" style="color: #4b2e83;">₹2,200*</p>
					<p class="text-sm text-gray-600">
						Job Portal fee for students (per 6 months).
					</p>
				</div>

				<!-- Placement / Outcomes -->
				<div
					class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
					class:opacity-0={!highlightsVisible}
					class:translate-y-10={!highlightsVisible}
					class:opacity-100={highlightsVisible}
					class:translate-y-0={highlightsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.4s"
				>
					<div
						class="w-12 h-12 bg-gradient-to-br from-[#ede7ff] to-[#d8ccff] rounded-full flex items-center justify-center mx-auto mb-4 animate-float"
						style="animation-delay: 0.6s"
					>
						<svg class="w-6 h-6" fill="none" stroke="#4b2e83" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<h3 class="font-bold mb-2">Profile Boost</h3>
					<p class="font-bold" style="color: #4b2e83;">30–40%*</p>
					<p class="text-sm text-gray-600">
						Profile ranking improvement with NMIMS badge & recruiter text.
					</p>
				</div>

				<!-- Flexibility -->
				<div
					class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
					class:opacity-0={!highlightsVisible}
					class:translate-y-10={!highlightsVisible}
					class:opacity-100={highlightsVisible}
					class:translate-y-0={highlightsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.5s"
				>
					<div
						class="w-12 h-12 bg-gradient-to-br from-[#ede7ff] to-[#d8ccff] rounded-full flex items-center justify-center mx-auto mb-4 animate-float"
						style="animation-delay: 0.8s"
					>
						<svg class="w-6 h-6" fill="none" stroke="#4b2e83" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
							/>
						</svg>
					</div>
					<h3 class="font-bold mb-2">Anytime Enrollment</h3>
					<p class="font-bold" style="color: #4b2e83;">FLEXIBLE</p>
					<p class="text-sm text-gray-600">
						Enroll when you need job change or career support.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- World-Class Programs → Service Categories -->
	<section
		class="py-16 bg-gradient-to-br from-white to-gray-50"
		use:inView={{ callback: (visible) => (programsVisible = visible) }}
	>
		<div class="container mx-auto px-4">
			<div
				class="text-center mb-12"
				class:opacity-0={!programsVisible}
				class:translate-y-10={!programsVisible}
				class:opacity-100={programsVisible}
				class:translate-y-0={programsVisible}
				style="transition: all 0.8s ease-out"
			>
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
					Career Service Modules
				</h2>
				<p class="text-gray-600 max-w-2xl mx-auto">
					Mix and match modules across assessments, coaching, profile development and
					interview practice to create your own success path.
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
				<!-- Card: Assessments -->
				<div
					class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 group"
					class:opacity-0={!programsVisible}
					class:translate-y-10={!programsVisible}
					class:opacity-100={programsVisible}
					class:translate-y-0={programsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.1s"
				>
					<div
						class="h-48 relative overflow-hidden flex items-center justify-center"
						style="background: linear-gradient(135deg, #4b2e83 0%, #6a3fb5 100%);"
					>
						<div class="text-center text-white">
							<svg
								class="w-16 h-16 mx-auto mb-4 opacity-80"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
								/>
								<polyline points="7.5 4.27 12 6.11 16.5 4.27" />
								<line x1="12" y1="22.35" x2="12" y2="6.11" />
								<polyline points="16.5 19.73 12 17.89 7.5 19.73" />
								<polyline points="16.5 13.73 12 11.89 7.5 13.73" />
							</svg>
							<h3 class="text-lg font-semibold">Assessments</h3>
						</div>
					</div>
					<div class="p-6">
						<h3 class="text-xl font-semibold text-gray-900 mb-2">Assessments</h3>
						<ul class="space-y-2 text-gray-600 mb-4">
							<li class="flex items-center">
								<span class="mr-2 text-[#4b2e83] animate-pulse">•</span>Aptitude
								Test (30–40 mins, online)
							</li>
							<li
								class="flex items-center"
							>
								<span
									class="mr-2 text-[#4b2e83] animate-pulse"
									style="animation-delay: 0.1s"
									>•</span
								>Psychometric Test (25–45 mins, online)
							</li>
							<li class="flex items-center">
								<span
									class="mr-2 text-[#4b2e83] animate-pulse"
									style="animation-delay: 0.2s"
									>•</span
								>Understand strengths & career fitment
							</li>
						</ul>
						<button
							on:click={openForm}
							class="w-full text-white py-2 rounded-lg hover:bg-[#3b2468] transition-all duration-300 hover:shadow-lg hover:scale-105"
							style="background-color: #4b2e83;"
						>
							Know More
						</button>
					</div>
				</div>

				<!-- Card: Coaching -->
				<div
					class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 group"
					class:opacity-0={!programsVisible}
					class:translate-y-10={!programsVisible}
					class:opacity-100={programsVisible}
					class:translate-y-0={programsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.2s"
				>
					<div
						class="h-48 relative overflow-hidden flex items-center justify-center"
						style="background: linear-gradient(135deg, #4b2e83 0%, #6a3fb5 100%);"
					>
						<div class="text-center text-white">
							<svg
								class="w-16 h-16 mx-auto mb-4 opacity-80"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
								/>
								<path
									d="M12 6.5l1.5 3.03L17 10.5l-2.5 2.44.59 3.44L12 14.5l-3.09 1.88.59-3.44L7 10.5l3.5-.97L12 6.5z"
								/>
							</svg>
							<h3 class="text-lg font-semibold">Coaching</h3>
						</div>
					</div>
					<div class="p-6">
						<h3 class="text-xl font-semibold text-gray-900 mb-2">
							Coaching & Mentoring
						</h3>
						<ul class="space-y-2 text-gray-600 mb-4">
							<li class="flex items-center">
								<span class="mr-2 text-[#4b2e83] animate-pulse">•</span>Career
								Architecting
							</li>
							<li
								class="flex items-center"
							>
								<span
									class="mr-2 text-[#4b2e83] animate-pulse"
									style="animation-delay: 0.1s"
									>•</span
								>Functional & Executive Coaching
							</li>
							<li
								class="flex items-center"
							>
								<span
									class="mr-2 text-[#4b2e83] animate-pulse"
									style="animation-delay: 0.2s"
									>•</span
								>Coaching for Career Change & Mentoring
							</li>
						</ul>
						<button
							on:click={openForm}
							class="w-full text-white py-2 rounded-lg hover:bg-[#3b2468] transition-all duration-300 hover:shadow-lg hover:scale-105"
							style="background-color: #4b2e83;"
						>
							Request Coaching
						</button>
					</div>
				</div>

				<!-- Card: Profile & Interviews -->
				<div
					class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 group"
					class:opacity-0={!programsVisible}
					class:translate-y-10={!programsVisible}
					class:opacity-100={programsVisible}
					class:translate-y-0={programsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.3s"
				>
					<div
						class="h-48 relative overflow-hidden flex items-center justify-center"
						style="background: linear-gradient(135deg, #4b2e83 0%, #6a3fb5 100%);"
					>
						<div class="text-center text-white">
							<svg
								class="w-16 h-16 mx-auto mb-4 opacity-80"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
								/>
							</svg>
							<h3 class="text-lg font-semibold">
								Profile & Interview Preparation
							</h3>
						</div>
					</div>
					<div class="p-6">
						<h3 class="text-xl font-semibold text-gray-900 mb-2">
							Profile & Interview Preparation
						</h3>
						<ul class="space-y-2 text-gray-600 mb-4">
							<li class="flex items-center">
								<span class="mr-2 text-[#4b2e83] animate-pulse">•</span>CV &
								Social Media Profile Development
							</li>
							<li
								class="flex items-center"
							>
								<span
									class="mr-2 text-[#4b2e83] animate-pulse"
									style="animation-delay: 0.1s"
									>•</span
								>Auto CV through student portal
							</li>
							<li
								class="flex items-center"
							>
								<span
									class="mr-2 text-[#4b2e83] animate-pulse"
									style="animation-delay: 0.2s"
									>•</span
								>Practice interviews for job change, promotion & career change
							</li>
						</ul>
						<button
							on:click={openForm}
							class="w-full text-white py-2 rounded-lg hover:bg-[#3b2468] transition-all duration-300 hover:shadow-lg hover:scale-105"
							style="background-color: #4b2e83;"
						>
							Improve My Profile
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Stats -->
	<section
		class="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
		use:inView={{ callback: (visible) => (statsVisible = visible) }}
	>
		<div class="absolute inset-0 bg-gradient-to-r from-[#4b2e83]/10 to-transparent"></div>
		<div class="container mx-auto px-4 relative">
			<div
				class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center"
			>
				<div
					class="group cursor-pointer"
					class:opacity-0={!statsVisible}
					class:translate-y-10={!statsVisible}
					class:opacity-100={statsVisible}
					class:translate-y-0={statsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.1s"
				>
					<div
						class="text-4xl font-bold text-[#f36f21] mb-2 group-hover:scale-110 transition-transform duration-300 animate-pulse"
					>
						196k+
					</div>
					<div
						class="text-gray-300 group-hover:text-white transition-colors duration-300"
					>
						Total Recruiters
					</div>
				</div>
				<div
					class="group cursor-pointer"
					class:opacity-0={!statsVisible}
					class:translate-y-10={!statsVisible}
					class:opacity-100={statsVisible}
					class:translate-y-0={statsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.2s"
				>
					<div
						class="text-4xl font-bold text-[#f36f21] mb-2 group-hover:scale-110 transition-transform duration-300 animate-pulse"
						style="animation-delay: 0.2s"
					>
						26k+
					</div>
					<div
						class="text-gray-300 group-hover:text-white transition-colors duration-300"
					>
						Yearly Active Recruiters
					</div>
				</div>
				<div
					class="group cursor-pointer"
					class:opacity-0={!statsVisible}
					class:translate-y-10={!statsVisible}
					class:opacity-100={statsVisible}
					class:translate-y-0={statsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.3s"
				>
					<div
						class="text-4xl font-bold text-[#f36f21] mb-2 group-hover:scale-110 transition-transform duration-300 animate-pulse"
						style="animation-delay: 0.4s"
					>
						150k
					</div>
					<div
						class="text-gray-300 group-hover:text-white transition-colors duration-300"
					>
						Annual Job Volume
					</div>
				</div>
				<div
					class="group cursor-pointer"
					class:opacity-0={!statsVisible}
					class:translate-y-10={!statsVisible}
					class:opacity-100={statsVisible}
					class:translate-y-0={statsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.4s"
				>
					<div
						class="text-4xl font-bold text-[#f36f21] mb-2 group-hover:scale-110 transition-transform duration-300 animate-pulse"
						style="animation-delay: 0.6s"
					>
						∞
					</div>
					<div
						class="text-gray-300 group-hover:text-white transition-colors duration-300"
					>
						Unlimited Job Applications
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Admission / How it works -->
	<section
		class="py-16 bg-gradient-to-br from-gray-50 to-white"
		use:inView={{ callback: (visible) => (admissionVisible = visible) }}
	>
		<div class="container mx-auto px-4">
			<div
				class="text-center max-w-2xl mx-auto mb-12"
				class:opacity-0={!admissionVisible}
				class:translate-y-10={!admissionVisible}
				class:opacity-100={admissionVisible}
				class:translate-y-0={admissionVisible}
				style="transition: all 0.8s ease-out"
			>
				<h2
					class="text-3xl md:text-4xl font-bold text-[#4b2e83] mb-4"
				>
					How NMIMS Career Services Works
				</h2>
				<p class="text-gray-600">
					A simple, guided journey – from understanding your aspirations to accessing
					job opportunities via the NMIMS job portal.
				</p>
			</div>

			<div class="grid md:grid-cols-2 gap-8 items-center">
				<div
					class="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500"
					class:opacity-0={!admissionVisible}
					class:translate-x-[-100px]={!admissionVisible}
					class:opacity-100={admissionVisible}
					class:translate-x-0={admissionVisible}
					style="transition: all 0.8s ease-out"
				>
					<img
						src="/Images/NMIMS/nmims03.jpg"
						alt="NMIMS Career Services workflow"
						class="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
					/>
				</div>

				<div
					class="space-y-6 transform"
					class:opacity-0={!admissionVisible}
					class:translate-x-[100px]={!admissionVisible}
					class:opacity-100={admissionVisible}
					class:translate-x-0={admissionVisible}
					style="transition: all 0.8s ease-out"
				>
					<div class="flex items-center gap-4 group cursor-pointer">
						<div
							class="bg-[#4b2e83] rounded-full p-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 animate-bounce"
						>
							<svg
								class="w-5 h-5 text-white"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								/>
							</svg>
						</div>
						<span
							class="text-lg text-gray-800 group-hover:text-[#4b2e83] transition-colors duration-300"
						>
							Choose relevant modules – assessments, coaching, profile or job portal
						</span>
					</div>

					<div class="flex items-center gap-4 group cursor-pointer">
						<div
							class="bg-[#4b2e83] rounded-full p-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 animate-bounce"
							style="animation-delay: 0.1s"
						>
							<svg
								class="w-5 h-5 text-white"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								/>
							</svg>
						</div>
						<span
							class="text-lg text-gray-800 group-hover:text-[#4b2e83] transition-colors duration-300"
						>
							Complete online surveys & profile details on the student portal
						</span>
					</div>

					<div class="flex items-center gap-4 group cursor-pointer">
						<div
							class="bg-[#4b2e83] rounded-full p-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 animate-bounce"
							style="animation-delay: 0.2s"
						>
							<svg
								class="w-5 h-5 text-white"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								/>
							</svg>
						</div>
						<span
							class="text-lg text-gray-800 group-hover:text-[#4b2e83] transition-colors duration-300"
						>
							Access the NMIMS Job Portal & apply to recommended roles
						</span>
					</div>

					<div class="flex items-center gap-4 group cursor-pointer">
						<div
							class="bg-[#4b2e83] rounded-full p-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 animate-bounce"
							style="animation-delay: 0.3s"
						>
							<svg
								class="w-5 h-5 text-white"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								/>
							</svg>
						</div>
						<span
							class="text-lg text-gray-800 group-hover:text-[#4b2e83] transition-colors duration-300"
						>
							Track recruiter actions & application status on your portal dashboard
						</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Testimonials -->
	<section
		class="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 relative overflow-hidden"
		use:inView={{ callback: (visible) => (testimonialVisible = visible) }}
	>
		<div class="absolute inset-0 bg-gradient-to-r from-[#4b2e83]/5 to-transparent"></div>
		<div class="container mx-auto px-4 relative">
			<div
				class="text-center mb-12"
				class:opacity-0={!testimonialVisible}
				class:translate-y-10={!testimonialVisible}
				class:opacity-100={testimonialVisible}
				class:translate-y-0={testimonialVisible}
				style="transition: all 0.8s ease-out"
			>
				<h2
					class="text-3xl md:text-4xl font-bold text-[#4b2e83] mb-4"
				>
					What Learners Say About NMIMS Career Services
				</h2>
				<p class="text-gray-400 max-w-2xl mx-auto">
					Working professionals and students use NMIMS Career Services 2.0 to navigate
					job changes, role shifts and long-term career planning.
				</p>
			</div>

			<div class="max-w-3xl mx-auto relative">
				<button
					class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-[#4b2e83] hover:text-[#3b2468] transition-all duration-300 hover:scale-110 z-10"
					aria-label="Previous testimonial"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>
				<button
					class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-[#4b2e83] hover:text-[#3b2468] transition-all duration-300 hover:scale-110 z-10"
					aria-label="Next testimonial"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>

				<div
					class="text-center px-8 md:px-12 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50"
					class:opacity-0={!testimonialVisible}
					class:scale-95={!testimonialVisible}
					class:opacity-100={testimonialVisible}
					class:scale-100={testimonialVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.2s"
				>
					<div class="mb-8">
						<img
							src="/Images/NMIMS/student.png"
							alt="NMIMS student testimonial"
							class="w-20 h-20 rounded-full mx-auto object-cover border-4 border-[#4b2e83] shadow-lg animate-pulse"
						/>
					</div>
					<h3 class="text-[#f36f21] text-xl font-semibold mb-1">
						Rahul Sharma
					</h3>
					<p class="text-gray-400 text-sm mb-6">
						Working Professional, Online MBA Learner
					</p>
					<p class="text-gray-300 leading-relaxed italic">
						"The NMIMS job portal and career service modules helped me structure my job
						search. Profile-based recommendations and one-on-one coaching made it easier
						to move into the role I wanted while continuing my online studies."
					</p>
					<div class="flex justify-center gap-1 mt-4">
						<span class="text-[#f36f21] text-lg">★★★★★</span>
					</div>
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
		bind:this={formPopup}
		autoOpen={false}
		on:close={closeForm}
		on:submit={handleFormSubmit}
	/>
{/if}

<style lang="postcss">
	:global(.navbar-wrapper .bg-orange-500) {
		background-color: #4b2e83 !important;
	}
	:global(.navbar-wrapper .hover\:bg-orange-600:hover) {
		background-color: #3b2468 !important;
	}
	:global(.navbar-wrapper .text-orange-500) {
		color: #4b2e83 !important;
	}
	:global(.footer-wrapper .bg-orange-500) {
		background-color: #4b2e83 !important;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slide-up {
		from {
			transform: translateY(30px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.animate-float {
		animation: float 3s ease-in-out infinite;
	}

	.animate-fade-in {
		animation: fade-in 1s ease-out;
	}

	.animate-slide-up {
		animation: slide-up 0.8s ease-out forwards;
		opacity: 0;
	}
</style>
