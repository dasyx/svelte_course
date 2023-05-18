<script>
  export let todos = [];
</script>

<!--creating a loop in svelte-->
<ul>
  {#each todos as todo, index}
    {@const number = index++}
    <li>{number} - {todo.title}</li>
  {/each}
</ul>
