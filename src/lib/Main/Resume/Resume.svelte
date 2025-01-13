<script lang="ts">
  import { onMount } from "svelte";
  import type { Station as StationType } from "../../scripts/types";
  import Station from "./Station.svelte";

  let resumeData: StationType[];

  onMount(async () => {
    const res = await fetch("resume.json");
    resumeData = await res.json();
  });
</script>

<section class="flex flex-col gap-4 items-center">
  {#each resumeData as station}
    <Station {station} />
  {/each}
</section>
