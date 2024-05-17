<script lang="ts">
  import { setUpCanvas } from "../lib/canvas";
  import { actions } from "astro:actions";

  let formStatus: "initial" | "loading" | "success" | "error" = "initial";
  let isEditing = false;
  let isCopied = false;

  let canvasElement: HTMLCanvasElement;
  let containerElement: HTMLElement;

  let color: string;

  $: {
    if (containerElement && canvasElement) {
      setUpCanvas(containerElement, canvasElement);
    }
  }

  async function onSubmit(event: Event) {
    event.preventDefault();
    const canvas = document.querySelector("canvas")!;
    const badgeImgUrl = canvas.toDataURL();

    formStatus = "loading";

    await actions.submitDrawing({
      variant: "svelte",
      data: badgeImgUrl
    });

    formStatus = "success";
  }
</script>

<form on:submit={onSubmit}>
  <p>{color} {formStatus}</p>
  <div bind:this={containerElement} class="w-fit h-fit border">
    <fieldset>
      <legend class="sr-only">Color</legend>

      <input
        type="radio"
        id="color-purple"
        name="color"
        value="purple"
        checked
        bind:group={color}
      />
      <input type="radio" id="color-orange" name="color" value="orange" 
        bind:group={color}
      />
      <input type="radio" id="color-pink" name="color" value="pink" 
        bind:group={color}
      />
      <input type="radio" id="color-green" name="color" value="green" 
        bind:group={color}
      />
      
      <button type="submit">Submit</button>
    </fieldset>
    <canvas bind:this={canvasElement} width="1080" height="1440" />
  </div>
</form>
