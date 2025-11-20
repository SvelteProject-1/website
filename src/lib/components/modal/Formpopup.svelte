<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{
		close: void;
		submit: { name: string; email: string; contactNo: string };
	}>();

	// Form data
	let formData: { name: string; email: string; contactNo: string } = {
		name: '',
		email: '',
		contactNo: ''
	};

	// Form validation
	let errors: { [key: string]: string } = {};
	let isSubmitting = false;
	let showConfirmation = false;

	// Animation states
	let modalVisible = false;
	let formStep = 0;
	let fieldFocus: { [key: string]: boolean } = {
		name: false,
		email: false,
		contactNo: false
	};

	// Initialize modal animation
	import { onMount } from 'svelte';
	onMount(() => {
		setTimeout(() => {
			modalVisible = true;
		}, 50);
	});

	// Close modal with animation
	function closeModal() {
		modalVisible = false;
		setTimeout(() => {
			dispatch('close');
		}, 300);
	}

	// Handle overlay click
	function handleOverlayClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}

	// Handle confirmation overlay click
	function handleConfirmationOverlayClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closeConfirmation();
		}
	}

	// Handle form submission
	async function handleSubmit() {
		// Reset errors
		errors = {};

		// Validate form
		if (!formData.name.trim()) {
			errors.name = 'Name is required';
		}

		if (!formData.email.trim()) {
			errors.email = 'Email is required';
		} else if (!isValidEmail(formData.email)) {
			errors.email = 'Please enter a valid email address';
		}

		if (!formData.contactNo.trim()) {
			errors.contactNo = 'Contact number is required';
		} else if (!isValidPhone(formData.contactNo)) {
			errors.contactNo = 'Please enter a valid contact number';
		}

		// If there are errors, don't submit
		if (Object.keys(errors).length > 0) {
			return;
		}

		isSubmitting = true;

		try {
			// Send data to your SvelteKit API endpoint
			const response = await fetch('/api/submit-form', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData)
			});

			const result = await response.json();

			if (result.success) {
				// Dispatch success event
				dispatch('submit', formData);

				// Show confirmation modal
				showConfirmation = true;

				// Reset form
				formData = { name: '', email: '', contactNo: '' };
			} else {
				// Handle validation errors
				if (result.error) {
					alert(`Error: ${result.error}`);
				} else {
					alert('Failed to submit form. Please try again.');
				}
			}
		} catch (error) {
			console.error('Form submission error:', error);
			alert('Network error. Please check your connection and try again.');
		} finally {
			isSubmitting = false;
		}
	}

	// Email validation
	function isValidEmail(email: string): boolean {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	// Phone validation (basic)
	function isValidPhone(phone: string): boolean {
		const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
		return phoneRegex.test(phone.replace(/\s/g, ''));
	}

	// Handle escape key
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			if (showConfirmation) {
				showConfirmation = false;
			} else {
				closeModal();
			}
		}
	}

	// Close confirmation modal
	function closeConfirmation() {
		showConfirmation = false;
	}

	// Close form after confirmation
	function closeFormAfterConfirmation() {
		showConfirmation = false;
		closeModal();
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Modal Overlay -->
<div
	class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300"
	class:opacity-0={!modalVisible}
	class:opacity-100={modalVisible}
	on:click={handleOverlayClick}
	on:keydown={handleKeydown}
	role="dialog"
	aria-modal="true"
	aria-labelledby="form-title"
	tabindex="-1"
>
	<!-- Modal Content Container -->
	<div class="w-full max-w-[90vw] sm:max-w-lg mx-auto py-4 sm:py-6">
		<div
			class="relative w-full rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl max-h-[80vh] sm:max-h-[90vh] overflow-y-auto px-4 transform transition-all duration-300"
			class:scale-95={!modalVisible}
			class:scale-100={modalVisible}
			class:translate-y-4={!modalVisible}
			class:translate-y-0={modalVisible}
			role="document"
		>
			<!-- Close Button -->
			<button
				on:click={closeModal}
				class="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 text-gray-400 transition-all duration-300 hover:text-white hover:scale-110 hover:rotate-90 rounded-full p-1 hover:bg-gray-800/50"
				aria-label="Close form"
			>
				<svg class="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>

			<!-- Form Header -->
			<div class="relative px-4 sm:px-6 py-6 sm:py-8">
				<!-- Animated background gradient -->
				<div class="absolute inset-0 bg-gradient-to-r from-[#831b33]/10 via-transparent to-[#831b33]/10 rounded-t-3xl"></div>

				<!-- Header icon -->
				<div class="relative flex justify-center mb-4">
					<div class="w-16 h-16 bg-gradient-to-br from-[#831b33] to-[#a62b4a] rounded-full flex items-center justify-center shadow-lg animate-pulse">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
						</svg>
					</div>
				</div>

				<h2 id="form-title" class="text-center mb-3 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Get in Touch</h2>
				<p class="text-center text-sm text-gray-400">Fill out the form below and we'll get back to you soon.</p>

				<!-- Progress indicator -->
				<div class="flex justify-center mt-4 space-x-2">
					<div class="w-2 h-2 rounded-full bg-[#831b33] transition-all duration-300"></div>
					<div class="w-2 h-2 rounded-full bg-gray-600 transition-all duration-300"></div>
					<div class="w-2 h-2 rounded-full bg-gray-600 transition-all duration-300"></div>
				</div>
			</div>

			<!-- Form -->
			<form on:submit|preventDefault={handleSubmit} class="space-y-5 px-4 sm:px-6 py-4 sm:py-6">
				<!-- Name Field -->
				<div class="group">
					<label for="name" class="mb-2 block text-sm font-medium text-white flex items-center gap-2">
						<svg class="w-4 h-4 text-[#831b33]" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
						</svg>
						Full Name *
					</label>
					<div class="relative">
						<input
							id="name"
							type="text"
							bind:value={formData.name}
							class="w-full rounded-xl border-2 border-gray-700 bg-gray-900/50 backdrop-blur-sm px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 focus:border-[#831b33] focus:ring-2 focus:ring-[#831b33]/20 focus:outline-none hover:border-gray-600"
							placeholder="Enter your full name"
							class:border-red-500={errors.name}
							class:border-[#831b33]={fieldFocus.name}
						/>
						{#if formData.name}
							<div class="absolute right-3 top-1/2 -translate-y-1/2 text-green-400">
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
								</svg>
							</div>
						{/if}
					</div>
					{#if errors.name}
						<p class="mt-2 text-sm text-red-400 flex items-center gap-1 animate-pulse">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
							</svg>
							{errors.name}
						</p>
					{/if}
				</div>

				<!-- Email Field -->
				<div class="group">
					<label for="email" class="mb-2 block text-sm font-medium text-white flex items-center gap-2">
						<svg class="w-4 h-4 text-[#831b33]" fill="currentColor" viewBox="0 0 24 24">
							<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
						</svg>
						Email Address *
					</label>
					<div class="relative">
						<input
							id="email"
							type="email"
							bind:value={formData.email}
							class="w-full rounded-xl border-2 border-gray-700 bg-gray-900/50 backdrop-blur-sm px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 focus:border-[#831b33] focus:ring-2 focus:ring-[#831b33]/20 focus:outline-none hover:border-gray-600"
							placeholder="Enter your email address"
							class:border-red-500={errors.email}
							class:border-[#831b33]={fieldFocus.email}
						/>
						{#if formData.email && isValidEmail(formData.email)}
							<div class="absolute right-3 top-1/2 -translate-y-1/2 text-green-400">
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
								</svg>
							</div>
						{/if}
					</div>
					{#if errors.email}
						<p class="mt-2 text-sm text-red-400 flex items-center gap-1 animate-pulse">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
							</svg>
							{errors.email}
						</p>
					{/if}
				</div>

				<!-- Contact Number Field -->
				<div class="group">
					<label for="contactNo" class="mb-2 block text-sm font-medium text-white flex items-center gap-2">
						<svg class="w-4 h-4 text-[#831b33]" fill="currentColor" viewBox="0 0 24 24">
							<path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
						</svg>
						Contact Number *
					</label>
					<div class="relative">
						<input
							id="contactNo"
							type="tel"
							bind:value={formData.contactNo}
							class="w-full rounded-xl border-2 border-gray-700 bg-gray-900/50 backdrop-blur-sm px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 focus:border-[#831b33] focus:ring-2 focus:ring-[#831b33]/20 focus:outline-none hover:border-gray-600"
							placeholder="Enter your contact number"
							class:border-red-500={errors.contactNo}
							class:border-[#831b33]={fieldFocus.contactNo}
						/>
						{#if formData.contactNo && isValidPhone(formData.contactNo)}
							<div class="absolute right-3 top-1/2 -translate-y-1/2 text-green-400">
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
								</svg>
							</div>
						{/if}
					</div>
					{#if errors.contactNo}
						<p class="mt-2 text-sm text-red-400 flex items-center gap-1 animate-pulse">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
							</svg>
							{errors.contactNo}
						</p>
					{/if}
				</div>

				<!-- Submit Button -->
				<div class="pt-6">
					<button
						type="submit"
						disabled={isSubmitting}
						class="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#831b33] to-[#a62b4a] px-6 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#831b33]/25 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
					>
						<!-- Animated background -->
						<div class="absolute inset-0 bg-gradient-to-r from-[#a62b4a] to-[#831b33] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

						<!-- Button content -->
						<div class="relative flex items-center justify-center gap-3">
							{#if isSubmitting}
								<div class="relative">
									<svg class="h-5 w-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
										<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
										<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
									</svg>
									<!-- Pulsing ring -->
									<div class="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
								</div>
								<span class="animate-pulse">Submitting...</span>
							{:else}
								<svg class="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
								</svg>
								<span>Contact Us</span>
							{/if}
						</div>

						<!-- Shine effect -->
						<div class="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
					</button>

					<!-- Success particles (shown during submission) -->
					{#if isSubmitting}
						<div class="flex justify-center mt-4 space-x-1">
							<div class="w-2 h-2 bg-[#831b33] rounded-full animate-bounce" style="animation-delay: 0ms"></div>
							<div class="w-2 h-2 bg-[#831b33] rounded-full animate-bounce" style="animation-delay: 150ms"></div>
							<div class="w-2 h-2 bg-[#831b33] rounded-full animate-bounce" style="animation-delay: 300ms"></div>
						</div>
					{/if}
				</div>
			</form>
		</div>
	</div>
</div>

<!-- Confirmation Modal -->
{#if showConfirmation}
	<div
		class="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300"
		on:click={handleConfirmationOverlayClick}
		on:keydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-labelledby="confirmation-title"
		tabindex="-1"
	>
		<!-- Modal Content Container -->
		<div class="w-full max-w-[90vw] sm:max-w-lg mx-auto py-4 sm:py-6">
			<div
				class="relative w-full rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl max-h-[80vh] sm:max-h-[90vh] overflow-y-auto px-4 transform transition-all duration-300 scale-100"
				role="document"
			>
				<!-- Close Button -->
				<button
					on:click={closeConfirmation}
					class="absolute top-3 right-3 z-10 text-gray-400 transition-all duration-300 hover:text-white hover:scale-110 hover:rotate-90 rounded-full p-1 hover:bg-gray-800/50"
					aria-label="Close confirmation"
				>
					<svg class="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
					</svg>
				</button>

				<!-- Confirmation Content -->
				<div class="px-6 py-8 text-center">
					<!-- Animated success icon -->
					<div class="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center">
						<div class="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-600 animate-ping opacity-20"></div>
						<div class="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-lg animate-bounce">
							<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
							</svg>
						</div>
					</div>

					<!-- Animated title -->
					<h2 id="confirmation-title" class="mb-4 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent animate-pulse">
						Form Submitted Successfully!
					</h2>

					<!-- Animated message -->
					<p class="mb-6 text-gray-300 leading-relaxed animate-fade-in" style="animation-delay: 0.3s">
						Thank you for your submission. We'll get back to you soon with more information about our programs.
					</p>

					<!-- Animated particles -->
					<div class="flex justify-center mb-6 space-x-2">
						<div class="w-3 h-3 bg-green-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
						<div class="w-3 h-3 bg-green-500 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
						<div class="w-3 h-3 bg-green-600 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
						<div class="w-3 h-3 bg-green-500 rounded-full animate-bounce" style="animation-delay: 450ms"></div>
						<div class="w-3 h-3 bg-green-400 rounded-full animate-bounce" style="animation-delay: 600ms"></div>
					</div>

					<!-- Action Buttons -->
					<div class="flex flex-col gap-4 sm:flex-row">
						<button
							on:click={closeConfirmation}
							class="flex-1 rounded-xl border-2 border-gray-700 bg-gray-900/50 backdrop-blur-sm px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:border-gray-600 hover:scale-105"
						>
							Submit Another Form
						</button>
						<button
							on:click={closeFormAfterConfirmation}
							class="flex-1 rounded-xl bg-gradient-to-r from-[#831b33] to-[#a62b4a] px-6 py-3 font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#831b33]/25 hover:scale-105"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
<style lang="postcss">
	:global(.navbar-wrapper .bg-orange-500) { background-color: #831b33 !important; }
	:global(.navbar-wrapper .hover\:bg-orange-600:hover) { background-color: #691529 !important; }
	:global(.navbar-wrapper .text-orange-500) { color: #831b33 !important; }
	:global(.footer-wrapper .bg-orange-500) { background-color: #831b33 !important; }

	/* Modal animations */
	@keyframes modalSlideIn {
		from {
			opacity: 0;
			transform: scale(0.9) translateY(-20px);
		}
		to {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}

	@keyframes modalSlideOut {
		from {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
		to {
			opacity: 0;
			transform: scale(0.9) translateY(-20px);
		}
	}

	@keyframes inputFocusGlow {
		0%, 100% {
			box-shadow: 0 0 0 0 rgba(131, 27, 51, 0.4);
		}
		50% {
			box-shadow: 0 0 0 4px rgba(131, 27, 51, 0.1);
		}
	}

	@keyframes successPulse {
		0%, 100% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(1.05);
			opacity: 0.8;
		}
	}

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes shine {
		0% { transform: translateX(-100%) skewX(-12deg); }
		100% { transform: translateX(200%) skewX(-12deg); }
	}

	@keyframes floatUp {
		0% {
			transform: translateY(0px);
			opacity: 1;
		}
		100% {
			transform: translateY(-20px);
			opacity: 0;
		}
	}

	/* Apply animations */
	.animate-modal-in {
		animation: modalSlideIn 0.3s ease-out;
	}

	.animate-modal-out {
		animation: modalSlideOut 0.3s ease-in;
	}

	.animate-focus-glow {
		animation: inputFocusGlow 2s infinite;
	}

	.animate-success-pulse {
		animation: successPulse 2s infinite;
	}

	.animate-fade-in {
		animation: fadeIn 0.6s ease-out;
	}

	.animate-float-up {
		animation: floatUp 1s ease-out forwards;
	}

	.shine-effect {
		animation: shine 1s ease-in-out;
	}

	/* Enhanced focus states */
	input:focus {
		animation: inputFocusGlow 2s infinite;
	}

	/* Smooth transitions for all interactive elements */
	button, input, label {
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	/* Custom scrollbar for modal */
	::-webkit-scrollbar {
		width: 6px;
	}

	::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.1);
		border-radius: 3px;
	}

	::-webkit-scrollbar-thumb {
		background: rgba(131, 27, 51, 0.5);
		border-radius: 3px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: rgba(131, 27, 51, 0.7);
	}
</style>
{/if}