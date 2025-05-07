<script lang="ts">
  import { ABOUT_LITERAL, page, RESUME_LITERAL } from "../scripts/page.svelte";
  import About from "./About/About.svelte";
  import Resume from "./Resume/Resume.svelte";
</script>

<main class="space-y-4 p-4 font-extrabold h-full">
  {#if page.content === ABOUT_LITERAL}
    <About />
  {:else if page.content === RESUME_LITERAL}
    <Resume />
  {/if}
</main>
