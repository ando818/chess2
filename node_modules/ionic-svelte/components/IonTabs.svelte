<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  import { goto } from "$app/navigation";

  export let ionTabsDidChange = () => {};
  export let ionTabsWillChange = () => {};
  export let slot = "bottom";
  export let tabs = [];

  let ionTabBarElement;
  let controller;

  // we need relative path for the goto to function properly and to allow for relative tab definitions
  const { pathname } = $page.url;
  let currentTabName = pathname.split("/").at(-1); // we restrict tabs not to have nested paths
  const relativePath = pathname.replace(currentTabName, "");

  onMount(async () => {
    // reassignment needed after onMount
    controller = ionTabBarElement;
    controller.select(currentTabName);
  });

  const tabBarClick = async (selectedTab) => {
    currentTabName = selectedTab;
    await goto(relativePath + selectedTab);
    controller.select(selectedTab);
  };
</script>

<ion-tabs
  on:ionTabsDidChange={ionTabsDidChange}
  on:ionTabsWillChange={ionTabsWillChange}
  bind:this={ionTabBarElement}
>
  <slot />

  {#if slot === "bottom" || slot === ""}
    <ion-tab-bar slot="bottom">
      {#each tabs as tab}
        <ion-tab-button
          tab={tab.tab}
          on:keydown={() => {
            tabBarClick(tab.tab);
          }}
          on:click={() => {
            tabBarClick(tab.tab);
          }}
        >
          <ion-label>{tab.label}</ion-label>
          <ion-icon icon={tab.icon} />
        </ion-tab-button>
      {/each}
    </ion-tab-bar>
  {/if}

  {#if slot === "top"}
    <ion-tab-bar slot="top">
      {#each tabs as tab}
        <ion-tab-button
          tab={tab.tab}
          on:keydown={() => {
            tabBarClick(tab.tab);
          }}
          on:click={() => {
            tabBarClick(tab.tab);
          }}
        >
          <ion-label>{tab.label}</ion-label>
          <ion-icon icon={tab.icon} />
        </ion-tab-button>
      {/each}
    </ion-tab-bar>
  {/if}
</ion-tabs>
