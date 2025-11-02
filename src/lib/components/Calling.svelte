<script lang="ts">
  export let phoneNumber: string = "+919220549335"; // Replace with your actual phone number
</script>

<a
  href="tel:{phoneNumber}"
  class="fixed bottom-28 right-6 z-50 bg-orange-500 text-white p-3.5 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
  aria-label="Call us"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
</a>

<style>
  /* Add a subtle bounce animation on hover */
  a:hover {
    animation: bounce 0.5s;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0) scale(1.1);
    }
    50% {
      transform: translateY(-5px) scale(1.1);
    }
  }
</style>