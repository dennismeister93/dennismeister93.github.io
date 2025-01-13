<script lang="ts">
  import Icon from "@iconify/svelte";
  import { iconStrings } from "../../scripts/icons.svelte";
  import type { Station } from "../../scripts/types";

  interface Props {
    station: Station;
  }

  let { station }: Props = $props();
  let showTasks = $state(false);
  const ICON_SIZE = "24";
</script>

<div
  role="button"
  tabindex="0"
  aria-expanded={showTasks}
  class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 card-hover divide-surface-200-800 block min-w-screen sm:min-w-[42rem] max-w-md sm:max-w-2xl divide-y overflow-hidden cursor-pointer"
  onclick={() => (showTasks = !showTasks)}
  onkeydown={(e) => e.key === "Enter" && (showTasks = !showTasks)}
>
  <article class="space-y-4 p-4">
    <header>
      <h4 class="h4">{station.jobTitle}</h4>
      <h6 class="h6">{station.company} - {station.location}</h6>
    </header>
    {#if showTasks}
      <ul class="space-y-4">
        {#each station.tasks as task}
          <li class="flex flex-col gap-2">
            <span class="text-opacity-70">{task.summary}</span>
            <div class="flex justify-end gap-2">
              {#each task.technologies as tech}
                <Icon
                  icon={iconStrings[tech]}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  class="text-primary-600 dark:text-secondary-400"
                  aria-label={tech}
                />
              {/each}
            </div>
            <hr class="border-t border-surface-950-50" />
          </li>
        {/each}
      </ul>
    {/if}
  </article>
  <footer class="text-end p-4">
    <small class="opacity-60">{station.time}</small>
  </footer>
</div>
