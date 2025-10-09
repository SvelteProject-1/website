<script lang="ts">
  import type { UniversityProgram } from '$lib/Universitydetails';
  import { universityPrograms } from '$lib/Universitydetails';

  export let title: string = 'Programs From Top Online Universities';
  let programs: ReadonlyArray<UniversityProgram> = universityPrograms;

  function getCountryLabel(country: string): string {
    return country ? `(${country})` : '';
  }
</script>

<section class="bg-white py-12">
  <div class="mx-auto max-w-6xl px-4">
    <h2 class="mb-8 text-center text-2xl font-semibold text-gray-800 md:text-3xl">{title}</h2>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each programs as p}
        <article class="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
          <!-- Banner -->
          <div class="relative">
            <img src={p.image} alt={`${p.university} banner`} class="h-40 w-full object-cover" loading="lazy" decoding="async" />
            {#if p.badge}
              <span class="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 shadow">
                {p.badge}
              </span>
            {/if}
            {#if p.tag}
              <span class="absolute right-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white shadow">
                {p.tag}
              </span>
            {/if}
          </div>

          <!-- University Name -->
          <div class="border-b border-gray-100 px-5 py-3 text-center text-sm font-semibold text-orange-600">
            {p.university} {getCountryLabel(p.country)}
          </div>

          <!-- Body -->
          <div class="flex-1 px-5 py-4">
            <p class="text-xs font-semibold uppercase text-gray-500">Placement Assistance</p>
            <h3 class="mb-3 line-clamp-2 text-lg font-semibold text-gray-900">{p.title}</h3>

            <ul class="space-y-2 text-sm text-gray-700">
              <li class="flex items-center gap-2">
                <span class="text-orange-500">🎓</span>
                <span>{p.level}</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-orange-500">⏱️</span>
                <span>{p.duration}</span>
              </li>
              {#each p.highlights as h}
                <li class="flex items-center gap-2">
                  <span class="text-orange-500">⭐</span>
                  <span>{h}</span>
                </li>
              {/each}
            </ul>
          </div>

          <!-- CTA -->
          <div class="px-5 pb-5">
            <a 
              href={p.href ?? '#apply'} 
              class="block w-full rounded-lg bg-orange-500 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              {p.cta ?? 'APPLY NOW'}
            </a>
          </div>
        </article>
      {/each}
    </div>
  </div>
  
</section>


