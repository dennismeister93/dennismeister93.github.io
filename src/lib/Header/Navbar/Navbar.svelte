<script lang="ts">
  import {
    ABOUT_LITERAL,
    CONTACT_LITERAL,
    RESUME_LITERAL,
  } from "../../scripts/page.svelte";
  import ListItem from "./ListItem.svelte";
</script>

<nav class="text-center mt-5 text-primary-700 dark:text-secondary-400">
  <ul class="flex justify-center gap-5">
    <ListItem text={ABOUT_LITERAL} />
    <ListItem text={RESUME_LITERAL} />
    <ListItem text={CONTACT_LITERAL} onClick={() => {}} />
  </ul>
</nav>
