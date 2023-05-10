<script>
    export let initialCount;
    /* export let maxCount; */

    console.log($$props, $$restProps)

    /* In order to prevent parent from display an error (requiring default value in maxCount) we can pass this into the export */
    export let maxCount = undefined;

    let count = initialCount;

    function increment() {
        if(count == maxCount) return;
        count += 1;
    }
</script>

<button on:click={increment}>Clicks {count}</button>

<style>
    button {
        margin: 30px;
        padding: 15px 20px;
    }
</style>