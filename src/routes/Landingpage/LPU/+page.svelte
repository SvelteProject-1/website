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

	const lpuImages = [
		'/Images/LPU/lpu1.jpg',
		'/Images/LPU/lpu2.jpg',
        '/Images/LPU/lpu3.jpg'
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
				entries.forEach(entry => {
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
		<HeroSection images={lpuImages} overlayOpacity={30}>
			<div class="text-center max-w-4xl px-4 animate-fade-in">
				<div class="inline-block text-black px-6 py-2 rounded-full mb-4 font-bold text-xl shadow-lg animate-bounce" style="background-color: #d32f2f;">PAY-AFTER-PLACEMENT</div>
				<h1 class="text-4xl md:text-6xl font-bold mb-4 animate-slide-up" style="animation-delay: 0.2s">Online MBA</h1>
				<p class="text-2xl md:text-3xl mb-2 animate-slide-up" style="animation-delay: 0.4s">Professional Development Programs</p>
				<p class="text-3xl md:text-4xl font-bold mb-6 animate-slide-up" style="color: #d32f2f; animation-delay: 0.6s">LPU - India's Largest University</p>
				<div class="flex justify-center gap-4 mb-8 animate-slide-up" style="animation-delay: 0.8s"></div>
				<button
					on:click={openForm}
					class="text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 inline-block hover:bg-[#b71c1c] hover:scale-105 hover:shadow-2xl animate-pulse"
					style="background-color: #d32f2f; animation-delay: 1s"
				>
					Apply Now
				</button>
			</div>
		</HeroSection>

		<div class="pointer-events-none absolute inset-x-0 top-0 z-20">
			<div class="pointer-events-auto navbar-wrapper">
				<Navbar />
			</div>
		</div>
	</div>

	<section class="py-16 bg-white" use:inView={{ callback: (visible) => universityVisible = visible }}>
		<div class="container mx-auto px-4">
			<div class="text-center mb-12"
				class:opacity-0={!universityVisible}
				class:translate-y-10={!universityVisible}
				class:opacity-100={universityVisible}
				class:translate-y-0={universityVisible}
				style="transition: all 0.8s ease-out"
			>
				<div class="flex justify-center items-center gap-4 mb-6">
					<img src="/Images/logos/lpu-logo.png" alt="LPU Logo" class="h-16 animate-pulse" />
					<div>
						<h2 class="text-3xl md:text-4xl font-bold text-gray-900">Lovely Professional University</h2>
						<div class="flex items-center justify-center gap-2 mt-2">
							<span class="font-bold" style="color: #d32f2f;">Online Degrees</span>
							<span class="bg-red-600 text-white px-2 py-1 rounded text-sm animate-bounce">NAAC A++</span>
							<span class="text-gray-600">UGC Entitled</span>
						</div>
					</div>
				</div>
				<p class="text-gray-600 max-w-2xl mx-auto">India's largest university offering comprehensive professional education and career-focused programs.</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
				<div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
					class:opacity-0={!universityVisible}
					class:translate-y-10={!universityVisible}
					class:opacity-100={universityVisible}
					class:translate-y-0={universityVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.2s"
				>
					<div class="w-12 h-12 bg-gradient-to-br from-[#ffebee] to-[#ffcdd2] rounded-lg flex items-center justify-center mb-4 animate-float">
						<svg class="w-6 h-6" fill="none" stroke="#d32f2f" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
					</div>
					<h3 class="text-xl font-semibold text-gray-900 mb-2">Professional Excellence</h3>
					<p class="text-gray-600">Industry-aligned curriculum designed for professional success and career advancement.</p>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
					class:opacity-0={!universityVisible}
					class:translate-y-10={!universityVisible}
					class:opacity-100={universityVisible}
					class:translate-y-0={universityVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.4s"
				>
					<div class="w-12 h-12 bg-gradient-to-br from-[#ffebee] to-[#ffcdd2] rounded-lg flex items-center justify-center mb-4 animate-float" style="animation-delay: 0.2s">
						<svg class="w-6 h-6" fill="none" stroke="#d32f2f" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
						</svg>
					</div>
					<h3 class="text-xl font-semibold text-gray-900 mb-2">Global Partnerships</h3>
					<p class="text-gray-600">International collaborations and exchange programs for global exposure.</p>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
					class:opacity-0={!universityVisible}
					class:translate-y-10={!universityVisible}
					class:opacity-100={universityVisible}
					class:translate-y-0={universityVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.6s"
				>
					<div class="w-12 h-12 bg-gradient-to-br from-[#ffebee] to-[#ffcdd2] rounded-lg flex items-center justify-center mb-4 animate-float" style="animation-delay: 0.4s">
						<svg class="w-6 h-6" fill="none" stroke="#d32f2f" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
					</div>
					<h3 class="text-xl font-semibold text-gray-900 mb-2">Comprehensive Campus</h3>
					<p class="text-gray-600">State-of-the-art facilities and infrastructure for holistic development.</p>
				</div>
			</div>
		</div>
	</section>

	<section class="py-16 bg-gradient-to-br from-gray-50 to-gray-100" use:inView={{ callback: (visible) => highlightsVisible = visible }}>
		<div class="container mx-auto px-4">
			<div class="text-center mb-12"
				class:opacity-0={!highlightsVisible}
				class:translate-y-10={!highlightsVisible}
				class:opacity-100={highlightsVisible}
				class:translate-y-0={highlightsVisible}
				style="transition: all 0.8s ease-out"
			>
				<h2 class="text-3xl md:text-4xl font-bold mb-4" style="color: #d32f2f;">Program Highlights</h2>
				<p class="text-gray-600 max-w-2xl mx-auto">Comprehensive learning experience with industry mentors and placement support.</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
				<div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
					class:opacity-0={!highlightsVisible}
					class:translate-y-10={!highlightsVisible}
					class:opacity-100={highlightsVisible}
					class:translate-y-0={highlightsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.1s"
				>
					<div class="w-12 h-12 bg-gradient-to-br from-[#ffebee] to-[#ffcdd2] rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
						<svg class="w-6 h-6" fill="none" stroke="#d32f2f" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<h3 class="font-bold mb-2">Duration</h3>
					<p class="font-bold" style="color: #d32f2f;">2 YEARS</p>
					<p class="text-sm text-gray-600">Total of 4 Semesters</p>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
					class:opacity-0={!highlightsVisible}
					class:translate-y-10={!highlightsVisible}
					class:opacity-100={highlightsVisible}
					class:translate-y-0={highlightsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.2s"
				>
					<div class="w-12 h-12 bg-gradient-to-br from-[#ffebee] to-[#ffcdd2] rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style="animation-delay: 0.2s">
						<svg class="w-6 h-6" fill="none" stroke="#d32f2f" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
						</svg>
					</div>
					<h3 class="font-bold mb-2">Mode</h3>
					<p class="font-bold" style="color: #d32f2f;">100% ONLINE</p>
					<p class="text-sm text-gray-600">LIVE + RECORDED Sessions</p>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
					class:opacity-0={!highlightsVisible}
					class:translate-y-10={!highlightsVisible}
					class:opacity-100={highlightsVisible}
					class:translate-y-0={highlightsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.3s"
				>
					<div class="w-12 h-12 bg-gradient-to-br from-[#ffebee] to-[#ffcdd2] rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style="animation-delay: 0.4s">
						<svg class="w-6 h-6" fill="none" stroke="#d32f2f" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<h3 class="font-bold mb-2">Fees</h3>
					<p class="font-bold" style="color: #d32f2f;">₹25,000</p>
					<p class="text-sm text-gray-600">Per Semester</p>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
					class:opacity-0={!highlightsVisible}
					class:translate-y-10={!highlightsVisible}
					class:opacity-100={highlightsVisible}
					class:translate-y-0={highlightsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.4s"
				>
					<div class="w-12 h-12 bg-gradient-to-br from-[#ffebee] to-[#ffcdd2] rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style="animation-delay: 0.6s">
						<svg class="w-6 h-6" fill="none" stroke="#d32f2f" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
					</div>
					<h3 class="font-bold mb-2">Placement</h3>
					<p class="font-bold" style="color: #d32f2f;">100% SUPPORT</p>
					<p class="text-sm text-gray-600">Expert Placement Services</p>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
					class:opacity-0={!highlightsVisible}
					class:translate-y-10={!highlightsVisible}
					class:opacity-100={highlightsVisible}
					class:translate-y-0={highlightsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.5s"
				>
					<div class="w-12 h-12 bg-gradient-to-br from-[#ffebee] to-[#ffcdd2] rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style="animation-delay: 0.8s">
						<svg class="w-6 h-6" fill="none" stroke="#d32f2f" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
						</svg>
					</div>
					<h3 class="font-bold mb-2">Study Abroad</h3>
					<p class="font-bold" style="color: #d32f2f;">INTERNATIONAL</p>
					<p class="text-sm text-gray-600">Options in US/UK/Canada/Australia</p>
				</div>
			</div>
		</div>
	</section>

	<section class="py-16 bg-gradient-to-br from-white to-gray-50" use:inView={{ callback: (visible) => programsVisible = visible }}>
		<div class="container mx-auto px-4">
			<div class="text-center mb-12"
				class:opacity-0={!programsVisible}
				class:translate-y-10={!programsVisible}
				class:opacity-100={programsVisible}
				class:translate-y-0={programsVisible}
				style="transition: all 0.8s ease-out"
			>
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Programs</h2>
				<p class="text-gray-600 max-w-2xl mx-auto">Choose from our extensive range of professional programs designed for career success</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
				<div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 group"
					class:opacity-0={!programsVisible}
					class:translate-y-10={!programsVisible}
					class:opacity-100={programsVisible}
					class:translate-y-0={programsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.1s"
				>
					<div class="h-48 relative overflow-hidden flex items-center justify-center" style="background: linear-gradient(135deg, #d32f2f 0%, #f44336 100%);">
						<div class="text-center text-white">
							<svg class="w-16 h-16 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
								<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
								<polyline points="7.5 4.27 12 6.11 16.5 4.27"/>
								<line x1="12" y1="22.35" x2="12" y2="6.11"/>
								<polyline points="16.5 19.73 12 17.89 7.5 19.73"/>
								<polyline points="16.5 13.73 12 11.89 7.5 13.73"/>
							</svg>
							<h3 class="text-lg font-semibold">Engineering & Technology</h3>
						</div>
					</div>
					<div class="p-6">
						<h3 class="text-xl font-semibold text-gray-900 mb-2">Engineering & Technology</h3>
						<ul class="space-y-2 text-gray-600 mb-4">
							<li class="flex items-center"><span class="mr-2 text-[#d32f2f] animate-pulse">•</span>Advanced technical programs</li>
							<li class="flex items-center"><span class="mr-2 text-[#d32f2f] animate-pulse" style="animation-delay: 0.1s">•</span>Industry partnerships</li>
							<li class="flex items-center"><span class="mr-2 text-[#d32f2f] animate-pulse" style="animation-delay: 0.2s">•</span>Research opportunities</li>
						</ul>
						<button on:click={openForm} class="w-full text-white py-2 rounded-lg hover:bg-[#b71c1c] transition-all duration-300 hover:shadow-lg hover:scale-105" style="background-color: #d32f2f;">Apply Now</button>
					</div>
				</div>

				<div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 group"
					class:opacity-0={!programsVisible}
					class:translate-y-10={!programsVisible}
					class:opacity-100={programsVisible}
					class:translate-y-0={programsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.2s"
				>
					<div class="h-48 relative overflow-hidden flex items-center justify-center" style="background: linear-gradient(135deg, #d32f2f 0%, #f44336 100%);">
						<div class="text-center text-white">
							<svg class="w-16 h-16 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
								<path d="M12 6.5l1.5 3.03L17 10.5l-2.5 2.44.59 3.44L12 14.5l-3.09 1.88.59-3.44L7 10.5l3.5-.97L12 6.5z"/>
							</svg>
							<h3 class="text-lg font-semibold">Management Studies</h3>
						</div>
					</div>
					<div class="p-6">
						<h3 class="text-xl font-semibold text-gray-900 mb-2">Management Studies</h3>
						<ul class="space-y-2 text-gray-600 mb-4">
							<li class="flex items-center"><span class="mr-2 text-[#d32f2f] animate-pulse">•</span>Business leadership programs</li>
							<li class="flex items-center"><span class="mr-2 text-[#d32f2f] animate-pulse" style="animation-delay: 0.1s">•</span>Entrepreneurship focus</li>
							<li class="flex items-center"><span class="mr-2 text-[#d32f2f] animate-pulse" style="animation-delay: 0.2s">•</span>Industry internships</li>
						</ul>
						<button on:click={openForm} class="w-full text-white py-2 rounded-lg hover:bg-[#b71c1c] transition-all duration-300 hover:shadow-lg hover:scale-105" style="background-color: #d32f2f;">Apply Now</button>
					</div>
				</div>

				<div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 group"
					class:opacity-0={!programsVisible}
					class:translate-y-10={!programsVisible}
					class:opacity-100={programsVisible}
					class:translate-y-0={programsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.3s"
				>
					<div class="h-48 relative overflow-hidden flex items-center justify-center" style="background: linear-gradient(135deg, #d32f2f 0%, #f44336 100%);">
						<div class="text-center text-white">
							<svg class="w-16 h-16 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
								<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
							</svg>
							<h3 class="text-lg font-semibold">Professional Programs</h3>
						</div>
					</div>
					<div class="p-6">
						<h3 class="text-xl font-semibold text-gray-900 mb-2">Professional Programs</h3>
						<ul class="space-y-2 text-gray-600 mb-4">
							<li class="flex items-center"><span class="mr-2 text-[#d32f2f] animate-pulse">•</span>Specialized career programs</li>
							<li class="flex items-center"><span class="mr-2 text-[#d32f2f] animate-pulse" style="animation-delay: 0.1s">•</span>Skill development focus</li>
							<li class="flex items-center"><span class="mr-2 text-[#d32f2f] animate-pulse" style="animation-delay: 0.2s">•</span>Industry certification</li>
						</ul>
						<button on:click={openForm} class="w-full text-white py-2 rounded-lg hover:bg-[#b71c1c] transition-all duration-300 hover:shadow-lg hover:scale-105" style="background-color: #d32f2f;">Apply Now</button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden" use:inView={{ callback: (visible) => statsVisible = visible }}>
		<div class="absolute inset-0 bg-gradient-to-r from-[#d32f2f]/10 to-transparent"></div>
		<div class="container mx-auto px-4 relative">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
				<div class="group cursor-pointer"
					class:opacity-0={!statsVisible}
					class:translate-y-10={!statsVisible}
					class:opacity-100={statsVisible}
					class:translate-y-0={statsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.1s"
				>
					<div class="text-4xl font-bold text-[#d32f2f] mb-2 group-hover:scale-110 transition-transform duration-300 animate-pulse">25+</div>
					<div class="text-gray-300 group-hover:text-white transition-colors duration-300">Years of Excellence</div>
				</div>
				<div class="group cursor-pointer"
					class:opacity-0={!statsVisible}
					class:translate-y-10={!statsVisible}
					class:opacity-100={statsVisible}
					class:translate-y-0={statsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.2s"
				>
					<div class="text-4xl font-bold text-[#d32f2f] mb-2 group-hover:scale-110 transition-transform duration-300 animate-pulse" style="animation-delay: 0.2s">2.5L+</div>
					<div class="text-gray-300 group-hover:text-white transition-colors duration-300">Students</div>
				</div>
				<div class="group cursor-pointer"
					class:opacity-0={!statsVisible}
					class:translate-y-10={!statsVisible}
					class:opacity-100={statsVisible}
					class:translate-y-0={statsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.3s"
				>
					<div class="text-4xl font-bold text-[#d32f2f] mb-2 group-hover:scale-110 transition-transform duration-300 animate-pulse" style="animation-delay: 0.4s">1000+</div>
					<div class="text-gray-300 group-hover:text-white transition-colors duration-300">Faculty Members</div>
				</div>
				<div class="group cursor-pointer"
					class:opacity-0={!statsVisible}
					class:translate-y-10={!statsVisible}
					class:opacity-100={statsVisible}
					class:translate-y-0={statsVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.4s"
				>
					<div class="text-4xl font-bold text-[#d32f2f] mb-2 group-hover:scale-110 transition-transform duration-300 animate-pulse" style="animation-delay: 0.6s">200+</div>
					<div class="text-gray-300 group-hover:text-white transition-colors duration-300">Programs Offered</div>
				</div>
			</div>
		</div>
	</section>

	<section class="py-16 bg-gradient-to-br from-gray-50 to-white" use:inView={{ callback: (visible) => admissionVisible = visible }}>
		<div class="container mx-auto px-4">
			<div class="text-center max-w-2xl mx-auto mb-12"
				class:opacity-0={!admissionVisible}
				class:translate-y-10={!admissionVisible}
				class:opacity-100={admissionVisible}
				class:translate-y-0={admissionVisible}
				style="transition: all 0.8s ease-out"
			>
				<h2 class="text-3xl md:text-4xl font-bold text-[#d32f2f] mb-4">Student Admission Process and Assistance from us</h2>
				<p class="text-gray-600">We guide you through every step of your admission journey at Lovely Professional University, ensuring a smooth and hassle-free process.</p>
			</div>

			<div class="grid md:grid-cols-2 gap-8 items-center">
				<div class="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500" class:opacity-0={!admissionVisible} class:translate-x-[-100px]={!admissionVisible} class:opacity-100={admissionVisible} class:translate-x-0={admissionVisible} style="transition: all 0.8s ease-out">
					<img src="/Images/LPU/lpu4.png" alt="LPU University admission process" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
				</div>

				<div class="space-y-6 transform" class:opacity-0={!admissionVisible} class:translate-x-[100px]={!admissionVisible} class:opacity-100={admissionVisible} class:translate-x-0={admissionVisible} style="transition: all 0.8s ease-out">
					<div class="flex items-center gap-4 group cursor-pointer">
						<div class="bg-[#d32f2f] rounded-full p-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 animate-bounce">
							<svg class="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
						</div>
						<span class="text-lg text-gray-800 group-hover:text-[#d32f2f] transition-colors duration-300">Complete application & documents</span>
					</div>
					<div class="flex items-center gap-4 group cursor-pointer">
						<div class="bg-[#d32f2f] rounded-full p-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 animate-bounce" style="animation-delay: 0.2s">
							<svg class="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
						</div>
						<span class="text-lg text-gray-800 group-hover:text-[#d32f2f] transition-colors duration-300">Eligibility verification</span>
					</div>
					<div class="flex items-center gap-4 group cursor-pointer">
						<div class="bg-[#d32f2f] rounded-full p-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 animate-bounce" style="animation-delay: 0.4s">
							<svg class="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
						</div>
						<span class="text-lg text-gray-800 group-hover:text-[#d32f2f] transition-colors duration-300">Fee payment & enrollment</span>
					</div>
					<div class="flex items-center gap-4 group cursor-pointer">
						<div class="bg-[#d32f2f] rounded-full p-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 animate-bounce" style="animation-delay: 0.6s">
							<svg class="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
						</div>
						<span class="text-lg text-gray-800 group-hover:text-[#d32f2f] transition-colors duration-300">Orientation & course commencement</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 relative overflow-hidden" use:inView={{ callback: (visible) => testimonialVisible = visible }}>
		<div class="absolute inset-0 bg-gradient-to-r from-[#d32f2f]/5 to-transparent"></div>
		<div class="container mx-auto px-4 relative">
			<div class="text-center mb-12"
				class:opacity-0={!testimonialVisible}
				class:translate-y-10={!testimonialVisible}
				class:opacity-100={testimonialVisible}
				class:translate-y-0={testimonialVisible}
				style="transition: all 0.8s ease-out"
			>
				<h2 class="text-3xl md:text-4xl font-bold text-[#d32f2f] mb-4">What Our Students Say About Us</h2>
				<p class="text-gray-400 max-w-2xl mx-auto">Hear from our students about their experience with Lovely Professional University and how it transformed their careers.</p>
			</div>

			<div class="max-w-3xl mx-auto relative">
				<button class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-[#d32f2f] hover:text-[#b71c1c] transition-all duration-300 hover:scale-110 z-10" aria-label="Previous testimonial">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
				</button>
				<button class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-[#d32f2f] hover:text-[#b71c1c] transition-all duration-300 hover:scale-110 z-10" aria-label="Next testimonial">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
				</button>

				<div class="text-center px-8 md:px-12 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50"
					class:opacity-0={!testimonialVisible}
					class:scale-95={!testimonialVisible}
					class:opacity-100={testimonialVisible}
					class:scale-100={testimonialVisible}
					style="transition: all 0.8s ease-out; transition-delay: 0.2s"
				>
					<div class="mb-8">
						<img src="/Images/LPU/student.png" alt="Student testimonial" class="w-20 h-20 rounded-full mx-auto object-cover border-4 border-[#d32f2f] shadow-lg animate-pulse" />
					</div>
					<h3 class="text-[#d32f2f] text-xl font-semibold mb-1">Rahul Sharma</h3>
					<p class="text-gray-400 text-sm mb-6">MBA Graduate</p>
					<p class="text-gray-300 leading-relaxed italic">"LPU provided me with the perfect platform to develop both academically and professionally. The comprehensive curriculum and industry exposure helped me secure a great job. The faculty support and placement assistance were exceptional."</p>
					<div class="flex justify-center gap-1 mt-4">
						<span class="text-[#d32f2f] text-lg">★★★★★</span>
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
	<Formpopup bind:this={formPopup} autoOpen={false} on:close={closeForm} on:submit={handleFormSubmit} />
{/if}

<style lang="postcss">
	:global(.navbar-wrapper .bg-orange-500) { background-color: #d32f2f !important; }
	:global(.navbar-wrapper .hover\:bg-orange-600:hover) { background-color: #b71c1c !important; }
	:global(.navbar-wrapper .text-orange-500) { color: #d32f2f !important; }
	:global(.footer-wrapper .bg-orange-500) { background-color: #d32f2f !important; }

	@keyframes float {
		0%, 100% { transform: translateY(0px); }
		50% { transform: translateY(-10px); }
	}

	@keyframes fade-in {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes slide-up {
		from { transform: translateY(30px); opacity: 0; }
		to { transform: translateY(0); opacity: 1; }
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