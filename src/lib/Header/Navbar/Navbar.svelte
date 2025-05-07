<script lang="ts">
  import { handleContactClick } from "../../scripts/mailto.svelte";
  import {
    ABOUT_LITERAL,
    CONTACT_LITERAL,
    RESUME_LITERAL,
  } from "../../scripts/page.svelte";
  import NavbarItem from "./NavbarItem.svelte";
</script>

<nav class="text-center mt-5 text-primary-700 dark:text-secondary-400">
  <ul class="flex justify-center gap-5">
    <NavbarItem text={ABOUT_LITERAL} />
    <NavbarItem text={RESUME_LITERAL} />
    <NavbarItem text={CONTACT_LITERAL} onClick={handleContactClick} />
  </ul>
</nav>
