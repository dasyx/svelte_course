<script>
  export let size = "small";
  export let shadow = false;
</script>

<button 
class:size-lg={size === "large"} 
class:size-sm={size === "small"} >
<slot>Fallback</slot></button>

<!-- <button class={size === 'large' ? 'size-lg' : 'size-sm'}></button> -->

<style lang="scss">
  button {
    border: none;
    background-color: #ff3e00;
    color: #fff;
    padding: 15px 20px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;

    &.size-lg {
      padding: 20px 25px;
      font-size: 20px;
    }

    &.size-sm {
      padding: 15px 20px;
    }
  }
</style>
