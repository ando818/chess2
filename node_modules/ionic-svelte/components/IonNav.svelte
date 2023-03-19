<script>
  import { onMount } from "svelte";

  /**
   * @typedef {Object} root: SvelteComponent;
   */
  export let root;

  /**
   * @typedef {Object} animated: boolean | undefined;
   */
  export let animated = true;

  /**
   * @typedef {Object} Animation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
   */
  export let animation; //

  /**
   * @typedef {Object} rootParams: undefined | { [key: string]: any } = undefined;
   */
  export let rootParams;

  /**
   * @typedef {Object} swipeGesture: boolean | undefined = undefined;
   */
  export let swipeGesture;

  let ionNav;
  let rootComponent;

  const createHTMLCompFromSvelte = (component, componentProps = {}) => {
    const divWrapper = document.createElement("div");
    const contentID = "id" + Date.now();
    divWrapper.id = contentID;

    let navContent = document.createElement("div");

    divWrapper.appendChild(navContent);
    document.body.appendChild(divWrapper);

    const props = {
      ...componentProps,
    };

    const svelteComponent = new component({
      target: navContent,
      props,
    });

    return divWrapper;
  };

  onMount(() => {
    rootComponent = createHTMLCompFromSvelte(root, {});
  });
</script>

<ion-nav
  bind:this={ionNav}
  {animated}
  {animation}
  root-params={rootParams}
  swipe-gesture={swipeGesture}
  root={rootComponent}
  on:ionNavDidChange
  on:ionNavWillChange
/>
