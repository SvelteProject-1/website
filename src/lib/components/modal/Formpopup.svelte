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

	// Close modal
	function closeModal() {
		dispatch('close');
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
	class="fixed inset-0 z-50 flex items-center bg-black bg-opacity-50"
	on:click={handleOverlayClick}
	on:keydown={handleKeydown}
	role="dialog"
	aria-modal="true"
	aria-labelledby="form-title"
	tabindex="-1"
>
	<!-- Modal Content Container -->
	<div class="w-full max-w-[90vw] sm:max-w-md mx-auto py-4 sm:py-6">
		<div
			class="relative w-full rounded-2xl border border-gray-800 bg-black shadow-2xl max-h-[80vh] sm:max-h-[90vh] overflow-y-auto px-4"
			role="document"
		>
			<!-- Close Button -->
			<button
				on:click={closeModal}
				class="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-gray-400 transition-colors duration-200 hover:text-white"
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
			<div class="border-b border-gray-800 px-4 sm:px-6 py-4 sm:py-6">
				<h2 id="form-title" class="mb-2 text-2xl font-bold text-white">Get in Touch</h2>
				<p class="text-sm text-gray-400">Fill out the form below and we'll get back to you soon.</p>
			</div>

			<!-- Form -->
			<form on:submit|preventDefault={handleSubmit} class="space-y-6 px-4 sm:px-6 py-4 sm:py-6">
				<!-- Name Field -->
				<div>
					<label for="name" class="mb-2 block text-sm font-medium text-white"> Full Name * </label>
					<input
						id="name"
						type="text"
						bind:value={formData.name}
						class="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-orange-500 focus:outline-none"
						placeholder="Enter your full name"
						class:border-red-500={errors.name}
					/>
					{#if errors.name}
						<p class="mt-1 text-sm text-red-400">{errors.name}</p>
					{/if}
				</div>

				<!-- Email Field -->
				<div>
					<label for="email" class="mb-2 block text-sm font-medium text-white">
						Email Address *
					</label>
					<input
						id="email"
						type="email"
						bind:value={formData.email}
						class="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-orange-500 focus:outline-none"
						placeholder="Enter your email address"
						class:border-red-500={errors.email}
					/>
					{#if errors.email}
						<p class="mt-1 text-sm text-red-400">{errors.email}</p>
					{/if}
				</div>

				<!-- Contact Number Field -->
				<div>
					<label for="contactNo" class="mb-2 block text-sm font-medium text-white">
						Contact Number *
					</label>
					<input
						id="contactNo"
						type="tel"
						bind:value={formData.contactNo}
						class="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-orange-500 focus:outline-none"
						placeholder="Enter your contact number"
						class:border-red-500={errors.contactNo}
					/>
					{#if errors.contactNo}
						<p class="mt-1 text-sm text-red-400">{errors.contactNo}</p>
					{/if}
				</div>

				<!-- Submit Button -->
				<div class="pt-4">
					<button
						type="submit"
						disabled={isSubmitting}
						class="flex w-full items-center justify-center rounded-lg bg-orange-500 px-4 sm:px-6 py-2 sm:py-3 font-medium text-white transition-colors duration-200 hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-400"
					>
						{#if isSubmitting}
							<svg
								class="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								></circle>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
							Submitting...
						{:else}
							Submit Form
						{/if}
					</button>
				</div>
			</form>
		</div>
	</div>
</div>

<!-- Confirmation Modal -->
{#if showConfirmation}
	<div
		class="fixed inset-0 z-[60] flex items-center bg-black bg-opacity-50"
		on:click={handleConfirmationOverlayClick}
		on:keydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-labelledby="confirmation-title"
		tabindex="-1"
	>
		<!-- Modal Content Container -->
		<div class="w-full max-w-[90vw] sm:max-w-md mx-auto py-4 sm:py-6">
			<div
				class="relative w-full rounded-2xl border border-gray-800 bg-black shadow-2xl max-h-[80vh] sm:max-h-[90vh] overflow-y-auto px-4"
				role="document"
			>
				<!-- Close Button -->
				<button
					on:click={closeConfirmation}
					class="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-gray-400 transition-colors duration-200 hover:text-white"
					aria-label="Close confirmation"
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

				<!-- Confirmation Content -->
				<div class="px-4 sm:px-6 py-6 sm:py-8 text-center">
					<!-- Success Icon -->
					<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
						<svg
							class="h-8 w-8 text-green-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>

					<!-- Confirmation Message -->
					<h2 id="confirmation-title" class="mb-3 text-2xl font-bold text-white">
						Form Submitted Successfully!
					</h2>
					<p class="mb-4 sm:mb-6 text-gray-400">
						Thank you for your submission. We'll get back to you soon with more information about our
						programs.
					</p>

					<!-- Action Buttons -->
					<div class="flex flex-col gap-3 sm:flex-row">
						<button
							on:click={closeConfirmation}
							class="flex-1 rounded-lg border border-gray-700 bg-gray-900 px-4 sm:px-6 py-2 sm:py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800"
						>
							Submit Another Form
						</button>
						<button
							on:click={closeFormAfterConfirmation}
							class="flex-1 rounded-lg bg-orange-500 px-4 sm:px-6 py-2 sm:py-3 font-medium text-white transition-colors duration-200 hover:bg-orange-600"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}