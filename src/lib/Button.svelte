<script>
  /* values assigned to variables above are default values */
  /* undefined are here so that values are not required, which can avoid warnings if don't pass them */
  export let size = "small";
  export let shadow = false;
  export let bgColor = undefined;
  export let textColor = undefined;
  /* code above will override default values in CSS */
  /*style:--buttonBgColor={bgColor}*/
  /*style:--buttonTextColor={textColor}*/
  let isLeftHovered;
</script>

<button
  style:background-color={bgColor}
  style:color={textColor}
  class:size-lg={size === "large"}
  class:size-sm={size === "small"}
  class:has-left={$$slots.leftContent}
  class:shadow
>
  <!--slot "leftContent" is a named slot, it can be populated in a component-->
  {#if $$slots.leftContent}
    <div
      class="left-content"
      on:mouseenter={() => (isLeftHovered = true)}
      on:mouseleave={() => (isLeftHovered = false)}
    >
      <slot name="leftContent" />
    </div>
  {/if}
  <slot isLeftHovered={isLeftHovered}>Fallback</slot>
</button>

<!-- <button class={size === 'large' ? 'size-lg' : 'size-sm'}></button> -->

<style lang="scss">
  button {
    display: flex;
    align-items: center;
    border: none;
    background-color: var(--buttonBgColor);
    color: var(--buttonTextColor);
    padding: 15px 20px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    .left-content {
      margin-right: 10px;
      width: 20px;
    }
    &:hover {
      background-image: linear-gradient(rgba(0, 0, 0, 0.4) 0 0);
    }
    &.size-lg {
      padding: 20px 25px;
      font-size: 20px;
    }

    &.size-sm {
      padding: 15px 20px;
    }
    &.shadow {
      box-shadow: 0 0 10px rgba(1, 1, 1, 0.3);
    }
  }
</style>
