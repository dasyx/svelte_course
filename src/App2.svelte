<script>
    import Button2 from "./lib/Button2.svelte";
    import IoIosBulb from "svelte-icons/io/IoIosBulb.svelte";
    import IoIosCellular from "svelte-icons/io/IoIosCellular.svelte";
  </script>
  
  <!--forwarding & modifiers-->
  <Button2
    on:click|once={(event) => {
      alert(true);
    }}
    let:isLeftHovered
    size="large"
    shadow
    bgColor="red"
    textColor
    disabled
  >
    <div slot="leftContent">
      {#if isLeftHovered}
        <IoIosBulb />
      {:else}
        <IoIosCellular />
      {/if}
    </div>
    Button Text
  </Button2>