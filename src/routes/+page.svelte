<script lang="ts">
  import { Github } from "lucide-svelte";
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
  let pissDirection: "up" | "down" = "up";

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
        if (pisses.length === 6) {
          pissDirection = "down";
        } else if (pisses.length === 1) {
          pissDirection = "up";
        }
        if (pissDirection === "up") pisses = [...pisses, "/piss.png"];
        else {
          pisses.shift();
          pisses = [...pisses];
        }
      }, 1000);
    }, 1000);
  });
</script>

<svelte:head>
  <title>{frames[currentFrame]}</title>

  <meta name="description" content="pisssssssss 😋" />
  <meta name="og:title" content="piss" />
  <meta name="og:description" content="pisssssssss 😋" />
  <meta name="og:site_name" content="piss.lol" />
  <meta name="theme-color" content="#f7d748" />
  <meta name="og:image" content="/piss.png" />
  <meta property="og:image:width" content="128" />
  <meta property="og:image:height" content="128" />
</svelte:head>

<div class="flex animate-pulse p-3">
  <a href="https://github.com/tekoh/piss.lol" target="_blank">
    <Github size="32" color="#8b5cf6" />
  </a>
</div>

<h1 class="mt-10 text-center font-serif text-6xl font-medium">{frames[currentFrame]}</h1>

<div class="mt-48 flex w-full justify-center">
  <div class="flex w-full flex-wrap justify-center gap-6 sm:w-[65vw]">
    {#each pisses as piss}
      <img src={piss} alt="" class="h-24" />
    {/each}
  </div>
</div>
