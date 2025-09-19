<script lang="ts">
	import { Navbar, Formpopup } from '$components';

	let showForm = false;

	function openForm() {
		showForm = true;
	}

	function closeForm() {
		showForm = false;
	}

	function handleFormSubmit(
		event: CustomEvent<{ name: string; email: string; contactNo: string }>
	) {
		console.log('Form submitted with data:', event.detail);
		// Here you can handle the form data, e.g., send to your backend
		// The confirmation modal is now handled within the Formpopup component
	}
</script>

<Navbar />

<main class="min-h-screen bg-gray-100 py-12">
	<div class="mx-auto max-w-4xl px-4">
		<div class="mb-12 text-center">
			<h1 class="mb-4 text-4xl font-bold text-gray-900">Welcome to Kadaeducation</h1>
			<p class="mb-8 text-xl text-gray-600">
				Get in touch with us to learn more about our programs
			</p>

			<!-- Button to open the form popup -->
			<button
				on:click={openForm}
				class="rounded-full bg-orange-500 px-8 py-3 font-medium text-white shadow-lg transition-colors duration-200 hover:bg-orange-600 hover:shadow-xl"
			>
				Contact Us
			</button>
		</div>
	</div>
</main>

<!-- Form Popup Modal -->
{#if showForm}
	<Formpopup on:close={closeForm} on:submit={handleFormSubmit} />
{/if}
