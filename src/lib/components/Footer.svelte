<script lang="ts">
	// Footer component matching the design from the image
</script>

<!-- Footer matching the design with orange color scheme -->
<footer class="bg-gray-900 text-white">
	<!-- Top Section - Orange Block -->
	<div class="bg-orange-500 rounded-2xl mx-4 my-8 px-8 py-28 md:py-36">
		<div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
			<!-- Year Founded -->
			<div class="flex items-center space-x-4">
				<div class="rounded-full border border-black/60 bg-black/0 px-3 py-1">
					<span class="text-black text-sm font-medium">YEAR FOUNDED</span>
				</div>
				<span class="text-black text-4xl font-bold">2015</span>
			</div>
			
			<!-- Location -->
			<div class="flex items-center space-x-4">
				<div class="rounded-full border border-black/60 bg-black/0 px-3 py-1">
					<span class="text-black text-sm font-medium">LOCATION</span>
				</div>
				<span class="text-black text-4xl font-bold">Dehradun, India</span>
			</div>
		</div>
		<!-- Thin black divider line under header, matching reference design -->
		<div class="mt-4 h-px w-full bg-black/60"></div>
	</div>

	<!-- Middle Section - Information Columns -->
	<div class="px-8 py-12">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
			<!-- Get in touch -->
			<div>
				<h3 class="text-lg font-semibold text-gray-300 mb-4">Get in touch</h3>
				<div class="space-y-2">
					<p class="text-gray-400">business@kadaeducation.com</p>
					<p class="text-gray-400">info@kadaeducation.com</p>
				</div>
			</div>

			<!-- Connect -->
			<div>
				<h3 class="text-lg font-semibold text-gray-300 mb-4">Connect</h3>
				<div class="space-y-2">
					<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white">LinkedIn</a>
					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white">Instagram</a>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="text-lg font-semibold text-gray-300 mb-4">Quick Links</h3>
				<div class="space-y-2">
					<a href="/compare" class="block text-gray-400 hover:text-white">Compare</a>
					<a href="/program" class="block text-gray-400 hover:text-white">Program</a>
					<a href="/reviews" class="block text-gray-400 hover:text-white">Reviews</a>
					<a href="/faqs" class="block text-gray-400 hover:text-white">FAQs</a>
					<a href="/ourwhy" class="block text-gray-400 hover:text-white">Our Why</a>
				</div>
			</div>

			<!-- Design Services -->
			<div>
				<h3 class="text-lg font-semibold text-gray-300 mb-4">Design Services</h3>
				<div class="space-y-2">
					<p class="text-gray-400">Kada Education</p>
					<p class="text-gray-400">Rajpur Road</p>
					<p class="text-gray-400">Dehradun, India</p>
				</div>
			</div>

			<!-- Ventures -->
			<div>
				<h3 class="text-lg font-semibold text-gray-300 mb-4">Ventures</h3>
				<div class="space-y-2">
					<p class="text-gray-400">Kada Education</p>
					<p class="text-gray-400">Rajpur Road</p>
					<p class="text-gray-400">Dehradun, India</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Bottom Section - Copyright and Navigation -->
	<div class="px-8 py-6 border-t border-gray-800">
		<div class="flex flex-col items-center space-y-6">
			<!-- Navigation Bar - Centered -->
			<div class="bg-gray-800 rounded-full border border-gray-700 px-2 sm:px-4 py-2">
				<nav class="flex flex-wrap justify-center space-x-2 sm:space-x-6">
					<a href="/Compare" class="bg-black text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors">Compare</a>
					<a href="/Program" class="text-gray-400 hover:text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors">Program</a>
					<a href="/Reviews" class="text-gray-400 hover:text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors">Reviews</a>
					<a href="/Faqs" class="text-gray-400 hover:text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors">FAQs</a>
					<a href="/Ourwhy" class="text-gray-400 hover:text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors">Our Why</a>
				</nav>
			</div>

			<!-- Copyright/Legal - Centered below navigation -->
			<div class="text-center space-y-1">
				<p class="text-sm text-gray-400">Typeface</p>
				<p class="text-sm text-gray-400">© 2024 <a href="/privacy" class="hover:text-orange-500 transition-colors">Data Privacy</a> <a href="/imprint" class="hover:text-orange-500 transition-colors">Imprint</a></p>
			</div>
		</div>
	</div>
</footer>
