<script>

import { createEventDispatcher } from 'svelte';

let options = [
    {name: "Create New Story", action: "createStory" },
    {name: "Edit Existing Story", action: "chooseStoryToEdit"}
  ]

const dispatcher = createEventDispatcher();

</script>

<section>

  <div class="container mx-auto mt-5">
    <h1 class="text-xl font-bold mb-3">Atlascope Tour Manager</h1>
    <div class="flex">

      {#each options as option }

      <button class="py-1 px-3 bg-blue-900 rounded text-white mr-3" on:click={()=>{dispatcher(option.action)}}>{option.name}</button>
        
      {/each}

    </div>
  </div>

</section>

