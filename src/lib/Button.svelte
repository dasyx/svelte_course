<script>
</script>

<!--Using slot-->
<!--Slots can accept a fallback-->
<button><slot>Fallback</slot></button>

<style>
  button {
    border: none;
    background-color: #ff3e00;
    color: #fff;
    padding: 15px 20px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
