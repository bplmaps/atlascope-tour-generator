<script>

import { createEventDispatcher } from 'svelte';


let dispatcher = createEventDispatcher();
let idEntry = "";


</script>

<section>

  <div class="container mx-auto mt-5">
    <h1 class="text-lg font-bold">Choose story to edit</h1>

    <div class="relative">
      <input type="text" bind:value="{idEntry}" class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a story ID" required>
      <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" on:click="{()=>{idEntry.length > 0 ? dispatcher('editStory', {storyId: idEntry}) : window.alert("You must enter a story ID")}}" >Edit</button>
  </div>
  </div>

   

</section>

