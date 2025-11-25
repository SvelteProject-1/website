<script lang="ts">
  export let title: string = 'Our Top Global University Partners';
  export let logos: { src: string; alt: string }[] = [
    { src: '/Images/logos/manipallogo.jpg', alt: 'Manipal University' },
    { src: '/Images/logos/amitylogo.jpg', alt: 'Amity University' },
    { src: '/Images/logos/shoolini logo.png', alt: 'Shoolini University' },
    { src: '/Images/logos/DYpatil.png', alt: 'University of Sydney' },
    { src: '/Images/logos/nmims.png', alt: 'NMIMS University' },
    { src: '/Images/logos/lpu-logo.png', alt: 'LPU University' },
    { src: '/Images/logos/uttranchal-logo.png', alt: 'Uttranchal University' },
    { src: '/Images/logos/mahilogo.jpg', alt: 'Mahila University' },
    { src: '/Images/logos/jainlogo.png', alt: 'Jain University' },
    { src: '/Images/logos/galgotiaslogo.jpeg', alt: 'Galgotias University' },
    { src: '/Images/logos/chandigarhlogo.png', alt: 'Chandigarh University' },
    { src: '/Images/logos/noidalogo.png', alt: 'Noida International University' },
    { src: '/Images/logos/andhralogo.png', alt: 'Andhra University' }
  ];

  export let speedSeconds: number = 25; // lower is faster

  // Duplicate list for seamless loop
  $: repeated = [...logos, ...logos];
</script>

<section class="bg-white py-10">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="mb-8 text-center text-2xl font-semibold text-gray-800 md:text-3xl">{title}</h2>

    <div class="relative overflow-hidden">
      <div
        class="marquee-track flex items-center gap-6 will-change-transform"
        style={`--duration: ${speedSeconds}s;`}
        aria-label="Partner logos scrolling marquee"
      >
        {#each repeated as logo}
          <div class="h-20 w-56 flex-shrink-0 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div class="flex h-full w-full items-center justify-center px-4">
              <img src={logo.src} alt={logo.alt} class="max-h-12 w-auto object-contain" loading="lazy" decoding="async" />
            </div>
          </div>
        {/each}
      </div>

      <!-- subtle left/right fades -->
      <div class="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white"></div>
      <div class="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white"></div>
    </div>
  </div>
</section>

<style>
  .marquee-track {
    width: max-content;
    animation: marquee var(--duration, 25s) linear infinite;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
</style>


