<script>
	import { Formpopup } from '$components';
	import { onMount } from 'svelte';

	let isMenuOpen = false;
	let showForm = false;
	let isNavVisible = true;
	let isHovered = false;

	// Initialize visibility timer on mount
	onMount(() => {
		setTimeout(() => {
			if (!isHovered) {
				isNavVisible = false;
			}
		}, 3000); // Hide after 3 seconds
	});

	function handleMouseEnter() {
		isHovered = true;
		isNavVisible = true;
	}

	function handleMouseLeave() {
		isHovered = false;
		if (!isMenuOpen) {
			isNavVisible = false;
		}
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
		if (isMenuOpen) {
			isNavVisible = true;
		} else if (!isHovered) {
			isNavVisible = false;
		}
	}

	function openForm() {
		showForm = true;
	}

	function closeForm() {
		showForm = false;
	}

	function handleFormSubmit() {
		// Handle the form submission
		showForm = false;
	}
</script>

<!-- Container with padding to create space around navbar -->
<div 
	class="p-4 fixed top-0 left-0 right-0 z-50"
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
>
	<nav class="relative mx-auto max-w-6xl rounded-2xl bg-gray-900 px-6 py-4 text-white shadow-2xl">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="text-xl font-bold"> kadaeducation </a>
			</div>

			<!-- Desktop Navigation Links -->
			<div class="hidden items-center space-x-8 md:flex">
				<a href="/Compare" class="text-white transition-colors duration-200 hover:text-gray-300">
					Compare
				</a>
				<a href="/Program" class="text-white transition-colors duration-200 hover:text-gray-300">
					Program
				</a>
				<a href="/Reviews" class="text-white transition-colors duration-200 hover:text-gray-300">
					Reviews
				</a>
				<a href="/Faqs" class="text-white transition-colors duration-200 hover:text-gray-300">
					FAQs
				</a>
				<a href="/Ourwhy" class="text-white transition-colors duration-200 hover:text-gray-300">
					Our Why
				</a>
			</div>

			<!-- Desktop Auth Button -->
			<div class="hidden items-center md:flex">
				<button
					on:click={openForm}
					class="rounded-full bg-orange-500 px-6 py-2 font-medium text-white transition-colors duration-200 hover:bg-orange-600"
				>
					Try Kadaeducation
				</button>
			</div>

			<!-- Mobile Menu Button -->
			<div class="md:hidden">
				<button
					on:click={toggleMenu}
					class="text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none"
					aria-label="Toggle menu"
				>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						{#if !isMenuOpen}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						{/if}
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if isMenuOpen}
			<div
				class="absolute top-full right-0 left-0 z-50 rounded-b-2xl border-t border-gray-800 bg-gray-900 md:hidden"
			>
				<div class="space-y-3 px-6 py-4">
					<a href="/Compare" class="block py-2 text-white hover:text-gray-300">
						Compare
					</a>
					<a href="/Program" class="block py-2 text-white hover:text-gray-300">
						Program
					</a>
					<a href="/Reviews" class="block py-2 text-white hover:text-gray-300"> Reviews </a>
					<a href="/Faqs" class="block py-2 text-white hover:text-gray-300"> FAQs </a>
					<a href="/Ourwhy" class="block py-2 text-white hover:text-gray-300"> Our Why </a>
					<div class="mt-3 border-t border-gray-800 pt-3">
						<button
							on:click={openForm}
							class="mt-3 block w-full rounded-full bg-orange-500 px-6 py-2 text-center font-medium text-white transition-colors duration-200 hover:bg-orange-600"
						>
							Try Kadaeducation
						</button>
					</div>
				</div>
			</div>
		{/if}
	</nav>
</div>

{#if showForm}
	<Formpopup 
		on:close={closeForm}
		on:submit={handleFormSubmit}
	/>
{/if}
