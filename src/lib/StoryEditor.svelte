<script>
  import { createEventDispatcher } from "svelte";
  import { loadStory, saveStory } from "./supabaseFunctions";
  import StoryEditorSingleStop from "./StoryEditorSingleStop.svelte";

  export let storyId;
  let dispatcher = createEventDispatcher();

  let storyLoaded = false;
  let storyData;

  let processingSave = false;

  loadStory(storyId).then((d) => {
    storyData = d;
    storyLoaded = true;
  });

  function addStop(idx) {
    const nakedStop = {
      caption: "",
      base: "",
      overlay: "",
      zoom: 0,
      center: [0, 0],
      viewMode: "",
    }

    if(!storyData[0].stopsJson) {
      storyData[0].stopsJson = [nakedStop]
    } else {
    storyData[0].stopsJson.splice(idx, 0, nakedStop);
    }
    storyData[0].stopsJson = storyData[0].stopsJson;
  }

  function deleteStop(idx) {
    storyData[0].stopsJson.splice(idx, 1);
    storyData[0].stopsJson = storyData[0].stopsJson;
  }

  function save() {
    processingSave = true;
    saveStory(storyId, storyData)
      .then(()=>{ processingSave = false; })
  }

</script>

<section>
  <div class="sticky top-0 bg-red-50 p-5">
    <h1 class="text-lg font-bold">Editing story {storyId}</h1>
    <div>
      <button
        class="py-1 px-3 bg-blue-900 rounded text-white mr-3"
        on:click={() => {
          window.open(`https://atlascope.org/#/view:tour$tour:${storyId}`);
        }}>⏫ Open this story in Atlascope app</button
      >
      <button class="py-1 px-3 bg-green-900 rounded text-white" disabled={processingSave} on:click={save}>
        { processingSave ? "Saving ..." : "💾 Save changes" }
      </button>
    </div>
  </div>




  <div class="container mx-auto mt-5">
    {#if storyLoaded}

    <div class="mx-auto mt-4 bg-gray-50 p-4">
      <h3 class="text-md font-bold">Metadata</h3>
      <div class="mb-6">
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
        <input type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" bind:value={storyData[0].metadataJson.title} required>
      </div>
      <div class="mb-6">
        <label for="subtitle" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subtitle</label>
        <input type="text" id="subtitle" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" bind:value={storyData[0].metadataJson.subtitle}>
  
      </div>
      <div class="mb-6">
        <label for="author" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
        <input type="text" id="author" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" bind:value={storyData[0].metadataJson.author}>
  
      </div>
  
    </div>


      <div>
        {#if storyData[0].stopsJson && storyData[0].stopsJson.length > 0}
          {#each storyData[0].stopsJson as stop, idx}
            <StoryEditorSingleStop
              bind:stopData={stop}
              {idx}
              on:addStop={(e) => {
                addStop(e.detail.idx);
              }}
              on:deleteStop={(e) => {
                deleteStop(e.detail.idx);
              }}
            />
          {/each}
        {:else}
          There are no stops on this story yet. Go ahead and add one!
        {/if}

        <div>
          <button class="bg-green-900 text-white rounded p-2 text-semibold" on:click={()=>{ addStop(storyData[0].stopsJson ? storyData[0].stopsJson.length : 0) }}
            >+ Add a new stop</button
          >
        </div>
      </div>
    {/if}
  </div>
</section>
