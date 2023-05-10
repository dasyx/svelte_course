<script>
  let count1 = 0;
  let count2 = 0;
  let string;

  /* Using reactive statement */
  /* $: {
    string = `You have clicked ${count1} ${count1 > 1 ? "times" : "time"} `;
  }
  $: {
    if (count1 > 5) {
      console.log("Enough clicks for today");
    }
  } */

  /* In reactive statement, if you use function like below example, you should use arguments in this function so that Svelte could be able to know which values it must be using*/
 /*  function getTotal(x, y) {
    return x + y;
  }

  $: string = `The count total is ${getTotal(count1, count2)}`; */

  function setCount2(x) {
    count2 = x;
  }

  $: setCount2(count1);
  $: string = `Count2 is ${count2}`;

  function increment1() {
    count1 += 1;
  }
  function increment2() {
    count2 += 1;
  }
</script>

<button on:click={increment1}>Clicks {count1}</button>
<!-- <button on:click={increment2}>Clicks {count2}</button> -->
<p>{string}</p>

<style>
  button {
    padding: 10px;
    margin: 30px;
  }
</style>
