<script>
  import { createEventDispatcher } from "svelte";
  import { createNewStory } from "./supabaseFunctions";

  let textFields = [
    { label: "Story Title", identifier: "title", value: "" },
    { label: "Story Subtitle", identifier: "subtitle", value: "" },
    { label: "Author", identifier: "author", value: "" },
  ];

  let processing = false;
  let completed = false;
  let completedId;

  function newStory() {
    processing = true;
    createNewStory({
      title: textFields[0].value,
      subtitle: textFields[1].value,
      author: textFields[2].value,
    }).then((d) => {
      let id = d.data[0].id
      processing = false;
      completed = true;
      completedId = id;
    });
  }

  let dispatcher = createEventDispatcher();
</script>

<section>
  <div class="container mx-auto mt-5">
    <h1 class="text-lg font-bold">Create a new story</h1>

    {#if completed}
      <h2 class="font-bold">Success! Your new story has been created.</h2>
      <p>
        The ID of your new story is <strong>{completedId}</strong>. Save this ID so
        that you can edit your story later.
      </p>

      <button
        class="bg-blue-900 text-white font-bold py-2 px-3 rounded"
        on:click={() => {
          dispatcher("editStory", { storyId: completedId });
        }}>Edit my new story</button
      >
    {:else}
      <form class="w-full mt-5">
        {#each textFields as tf}
          <div class="flex mb-2">
            <label
              class="block text-gray-500 font-bold mb-1 pr-4 w-1/3"
              for={tf.identifier}
            >
              {tf.label}
            </label>
            <input
              class="w-2/3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500"
              id={tf.identifier}
              type="text"
              bind:value={tf.value}
            />
          </div>
        {/each}
      </form>

      <div>
        <button
          class="{processing
            ? 'bg-blue-200'
            : 'bg-blue-900'} text-white font-bold py-2 px-3 rounded"
          disabled={processing}
          on:click={newStory}
          >{#if processing}Processing ...{:else}Create story{/if}</button
        >
      </div>
    {/if}
  </div>
</section>
