<script>
  export let size = "small";
  export let shadow = false;
  export let bgColor = undefined;
  export let textColor = undefined;
  export let disabled = false;

  let isLeftHovered;
</script>

<!--in code above (curly braces), we are passing props to our button (in app.svelte)-->
<!--we can use whether disabled (or {disabled} ) or spead operator to get all unused props - read docs about restProps - being passed as active props in app.svelte-->
<!--{...$$restProps} // add in button props instead of disabled value-->

<button
  on:click
  disabled={disabled}
  style:background-color={bgColor}
  style:color={textColor}
  class:size-lg={size === "large"}
  class:size-sm={size === "small"}
  class:has-left={$$slots.leftContent}
  class:shadow
>

  {#if $$slots.leftContent}
    <div
      class="left-content"
      on:mouseenter={() => (isLeftHovered = true)}
      on:mouseleave={() => (isLeftHovered = false)}
    >
      <slot name="leftContent" />
    </div>
  {/if}
  <slot {isLeftHovered}>Fallback</slot>
</button>


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
    &:disabled {
        opacity: .8;
        cursor: not-allowed;
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
