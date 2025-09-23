<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';

  export let images: string[] = [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1920',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920'
  ];

  export let slideIntervalMs: number = 5000;

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
<section class="relative h-screen w-full overflow-hidden bg-black">
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
        srcset={`${images[activeIndex]}&w=1280 1280w, ${images[activeIndex]}&w=1536 1536w, ${images[activeIndex]}&w=1920 1920w, ${images[activeIndex]}&w=2560 2560w`}
        sizes="100vw"
        in:fade={{ duration: 700 }}
        out:fade={{ duration: 700 }}
      />
    {/key}
  </div>

  <!-- Optional dark overlay for contrast with navbar and content -->
  <div class="pointer-events-none absolute inset-0 bg-black/40"></div>

  <!-- Slot for any centered hero content if needed -->
  <div class="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
    <slot />
  </div>
</section>

<style>
  :global(html, body) {
    /* Ensure the body can host a full-screen section without unexpected gaps */
    height: 100%;
  }
</style>
