<script lang="ts">
  import { page } from "../../scripts/page.svelte";

  interface Props {
    text: string;
    onClick?: () => void;
  }

  let { text, onClick = () => (page.content = text) }: Props = $props();
</script>

<li class="transition-all duration-100 hover:-mt-1">
  <button class="uppercase" onclick={() => onClick()}>
    {text}
  </button>
</li>
