<script lang="ts">
  import { onMount } from "svelte";

  const frames = [
    "piss.lol",
    "piss.lol",
    "piss.lol",
    "piss.lol",
    "piss.lo",
    "piss.l",
    "piss.",
    "piss",
    "piss",
    "pisss",
    "pissss",
    "pisssss",
    "pissssss",
    "pissssss😋",
    "pisssss",
    "pissss",
    "pisss",
    "piss",
    "piss.",
    "piss.l",
    "piss.lo",
    "piss.lol",
    "piss.lol😆",
  ];

  let currentFrame = 0;
  let direction: "up" | "down" = "up";

  onMount(() => {
    setTimeout(() => {
      setInterval(() => {
        if (currentFrame === frames.length - 1) {
          direction = "down";
        } else if (currentFrame === 0) {
          direction = "up";
        }

        if (direction === "up") currentFrame++;
        else currentFrame--;
      }, 300);
    }, 5000);
  });
</script>

<svelte:head>
  <title>{frames[currentFrame]}</title>
</svelte:head>

<h1 class="mt-14 text-center font-serif text-6xl font-medium">{frames[currentFrame]} UGH</h1>
