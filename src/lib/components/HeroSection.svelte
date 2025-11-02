<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';

  export let images: string[] = [
    '/Images/Manipalimages/manipal01.png',
    '/Images/Manipalimages/manipal02.png',
    '/Images/Manipalimages/manipal03.png',
    '/Images/shoolini/shoolini01.png',
    '/Images/shoolini/shoolini02.png',
    '/Images/shoolini/shoolini03.jpeg'
  ];

  export let slideIntervalMs: number = 5000;
  export let overlayOpacity: number = 40; // 0 to 100, default 40%
  export let showOverlay: boolean = true;

  let activeIndex = 0;
  let intervalId: ReturnType<typeof setInterval> | undefined;
  let isReady = false;

  async function preloadImages(srcs: string[]): Promise<void> {
    await Promise.all(
      srcs.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => resolve();
          })
      )
    );
  }

  function startSlider() {
    stopSlider();
    intervalId = setInterval(() => {
      activeIndex = (activeIndex + 1) % images.length;
    }, slideIntervalMs);
  }

  function stopSlider() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = undefined;
    }
  }

  onMount(() => {
    // Preload to avoid gray flicker between slides
    preloadImages(images).then(() => {
      isReady = true;
      startSlider();
    });
  });

  onDestroy(() => {
    stopSlider();
  });
</script>

<!-- Full viewport hero with cross-fade transitions between images -->
<section class="relative w-full overflow-hidden bg-black">
  <!-- Container with responsive height -->
  <div class="relative h-[60vh] md:h-[80vh] lg:h-screen">
    <!-- Stacked images; only active index is shown, others fade out -->
    <div class="absolute inset-0">
      {#key activeIndex}
        <img
          src={images[activeIndex]}
          alt="Hero slide"
          class="absolute inset-0 h-full w-full object-cover"
          decoding="async"
          loading={activeIndex === 0 ? 'eager' : 'lazy'}
          fetchpriority={activeIndex === 0 ? 'high' : undefined}
          srcset={images[activeIndex].startsWith('http') ? 
            `${images[activeIndex]}&w=1280 1280w, ${images[activeIndex]}&w=1536 1536w, ${images[activeIndex]}&w=1920 1920w, ${images[activeIndex]}&w=2560 2560w` : 
            undefined}
          sizes="100vw"
          in:fade={{ duration: 700 }}
          out:fade={{ duration: 700 }}
        />
      {/key}
    </div>

    <!-- Optional dark overlay for contrast with navbar and content -->
    {#if showOverlay}
      <div 
        class="pointer-events-none absolute inset-0" 
        style="background-color: rgba(0, 0, 0, {overlayOpacity/100})"
      ></div>
    {/if}

    <!-- Slot for any centered hero content with responsive padding -->
    <div class="relative z-10 flex h-full items-center justify-center px-4 py-16 md:px-6 md:py-20 text-center text-white">
      <slot />
    </div>
  </div>
</section>

<style>
  :global(html, body) {
    /* Ensure the body can host a full-screen section without unexpected gaps */
    height: 100%;
  }
</style>
