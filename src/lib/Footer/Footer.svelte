<script lang="ts">
  import Icon from "@iconify/svelte";

  const GITHUB_ICON = "octicon:mark-github-16";
  const LINKEDIN_ICON = "ion:logo-linkedin-outline";
  const ICON_SIZE = 32;
  const GITHUB_URL = "https://github.com/dennismeister93";
  const LINKEDIN_URL = "https://linkedin.com/in/dennismeister93";
</script>

<footer class="p-4 bg-surface-200-800">
  <div class="flex justify-end gap-4">
    <a
      href={GITHUB_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      class="hover:opacity-80 transition-opacity"
    >
      <Icon icon={GITHUB_ICON} width={ICON_SIZE} height={ICON_SIZE} />
    </a>
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      class="hover:opacity-80 transition-opacity"
    >
      <Icon icon={LINKEDIN_ICON} width={ICON_SIZE} height={ICON_SIZE} />
    </a>
  </div>
</footer>
