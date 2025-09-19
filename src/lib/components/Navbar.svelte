<script>
  // You can add any navbar logic here
  let isMenuOpen = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<!-- Container with padding to create space around navbar -->
<div class="p-4">
  <nav class="bg-black text-white px-6 py-4 rounded-2xl shadow-2xl relative max-w-6xl mx-auto">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="/" class="text-xl font-bold">
          kadaeducation
        </a>
      </div>

      <!-- Desktop Navigation Links -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="/Compare" class="text-white hover:text-gray-300 transition-colors duration-200">
          Compare
        </a>
        <a href="/Program" class="text-white hover:text-gray-300 transition-colors duration-200">
          Program
        </a>
        <a href="/reviews" class="text-white hover:text-gray-300 transition-colors duration-200">
          Reviews
        </a>
        <a href="/faqs" class="text-white hover:text-gray-300 transition-colors duration-200">
          FAQs
        </a>
        <a href="/our-why" class="text-white hover:text-gray-300 transition-colors duration-200">
          Our Why
        </a>
      </div>

      <!-- Desktop Auth Button -->
      <div class="hidden md:flex items-center">
        <a href="/try-kataeducation" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200">
          Try Kadaeducation
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button
          on:click={toggleMenu}
          class="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
          aria-label="Toggle menu"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {#if !isMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {/if}
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800 z-50 rounded-b-2xl">
        <div class="px-6 py-4 space-y-3">
          <a href="/how-it-works" class="block text-white hover:text-gray-300 py-2">
            How it works
          </a>
          <a href="/what-we-test" class="block text-white hover:text-gray-300 py-2">
            What We Test
          </a>
          <a href="/reviews" class="block text-white hover:text-gray-300 py-2">
            Reviews
          </a>
          <a href="/faqs" class="block text-white hover:text-gray-300 py-2">
            FAQs
          </a>
          <a href="/our-why" class="block text-white hover:text-gray-300 py-2">
            Our Why
          </a>
          <div class="border-t border-gray-800 pt-3 mt-3">
            <a href="/try-kataeducation" class="block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium text-center mt-3 transition-colors duration-200">
              Try Kadaeducation
            </a>
          </div>
        </div>
      </div>
    {/if}
  </nav>
</div>