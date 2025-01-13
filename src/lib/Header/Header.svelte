<script lang="ts">
  import { Avatar } from "@skeletonlabs/skeleton-svelte";
  import LightSwitch from "./LightSwitch.svelte";
  import HeroHeader from "./HeroHeader.svelte";
  import Navbar from "./Navbar/Navbar.svelte";
</script>

<header class="p-4 items-center justify-between">
  <LightSwitch />
  <Avatar
    src="dennis.jpeg"
    classes="my-4 m-auto text-center"
    name="Dennis Meister"
    size="size-48"
  ></Avatar>
  <HeroHeader />
  <Navbar />
</header>
