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
</script> 

<!-- <img {src} alt="An image of {name}">
<h1>Hello {name.toLowerCase()}</h1>
<p>{@html string}</p> -->
<!--pour ajouter des propriétés html dans la structure, on utilise '@html'-->

<!-- <Counter2 initialCount={3} /> -->
<!-- <Counter2 {...props} /> -->

<!--Without any value inside button,
default value will be what 'slot' has defined. But if with text inside 'Button' fallback text won't display-->
<Button></Button>