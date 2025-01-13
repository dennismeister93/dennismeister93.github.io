<script lang="ts">
  import { Switch } from "@skeletonlabs/skeleton-svelte";
  import Icon from "@iconify/svelte";

  let mode = $state(false);

  const MOON_ICON = "solar:moon-outline";
  const SUN_ICON = "solar:sun-outline";
  const ICON_SIZE = 16;

  const ROOT_ELEMENT_DEFAULT_THEME = "dark";
  const ROOT_ELEMENT_ID = "#rootEl";
  const rootEl = document.querySelector(ROOT_ELEMENT_ID);

  function handleModeChange(checked: boolean) {
    if (rootEl) {
      rootEl.classList.toggle(ROOT_ELEMENT_DEFAULT_THEME, mode);
    }
    mode = checked;
  }
</script>

<div class="absolute top-4 right-4">
  <Switch
    compact
    controlWidth="w-8"
    controlActive="bg-surface-200"
    checked={mode}
    onCheckedChange={(e) => handleModeChange(e.checked)}
  >
    {#snippet inactiveChild()}<Icon
        icon={MOON_ICON}
        width={ICON_SIZE}
        height={ICON_SIZE}
      />{/snippet}
    {#snippet activeChild()}<Icon
        icon={SUN_ICON}
        width={ICON_SIZE}
        height={ICON_SIZE}
      />{/snippet}
  </Switch>
</div>
