<script>
  import Button from './lib/Button.svelte';
  /* let name = 'Svelte';
  let src = 'http://picsum.com/200/299';
  let string = 'Some <strong>string</strong> with HTML' */
  /* import Counter from './lib/Counter.svelte'; */
  /* import Counter2 from './lib/Counter2.svelte'; */

  /* spread operator to use props*/
/* const props = {
    maxCount: 10,
    initialCount: 3
  } */
  import IoIosBulb from 'svelte-icons/io/IoIosBulb.svelte';
  import IoIosCellular from 'svelte-icons/io/IoIosCellular.svelte'
</script> 

<!-- <img {src} alt="An image of {name}">
<h1>Hello {name.toLowerCase()}</h1>
<p>{@html string}</p> -->
<!--pour ajouter des propriétés html dans la structure, on utilise '@html'-->

<!-- <Counter2 initialCount={3} /> -->
<!-- <Counter2 {...props} /> -->

<!--Without any value inside button,
default value will be what 'slot' has defined. But if with text inside 'Button' fallback text won't display-->
<!--We must pass values into bgColor and textColor. If not, default values are "undefined"-->

<!--The directive "let" will grab the value of the prop "x" and put it in a variable-->
<Button let:isLeftHovered size="large" shadow bgColor="red" textColor >
  <div slot="leftContent">
    {#if isLeftHovered}<IoIosBulb />
    {:else}<IoIosCellular />
    {/if}
  </div>
  Button Text
</Button>