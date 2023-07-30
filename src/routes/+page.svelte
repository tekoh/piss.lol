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
  let pisses: string[] = [];

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

      setInterval(() => {
        pisses = [...pisses, "/piss.png"];
      }, 1000);
    }, 1000);
  });
</script>

<svelte:head>
  <title>{frames[currentFrame]}</title>
</svelte:head>

<h1 class="mt-14 text-center font-serif text-6xl font-medium">{frames[currentFrame]}</h1>

<div class="mt-14 flex w-full justify-center">
  <div class="flex w-full flex-wrap justify-center gap-6 sm:w-[65vw]">
    {#each pisses as piss}
      <img src={piss} alt="" class="h-24" />
    {/each}
  </div>
</div>
