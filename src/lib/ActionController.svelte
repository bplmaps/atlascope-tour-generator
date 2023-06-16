<script>

import { createEventDispatcher } from 'svelte';
import AtlascopeLogo from "./AtlascopeLogo.svelte";

let options = [
    {name: "How to Get Started", action: "readHowTo"},
    {name: "Create New Story", action: "createStory" },
    {name: "Edit Existing Story", action: "chooseStoryToEdit"}
  ]

const dispatcher = createEventDispatcher();

</script>
<section id="splash" class="ui-top-level-layer">
  <header class="text-xl font-bold mb-3 mt-5">
    <div class="p-0 mx-auto w-48 mb-3 text-center">
      <AtlascopeLogo pulse={true} />
      <h1 class="">Tour Generator</h1>
    </div>
  </header>

  <div id="splash-inner" class="container mx-auto ">
    <p class="max-w-lg mx-auto"><strong>Atlascope Tour Generator</strong> helps create user-generated tours through space and time that explore <strong><a class="" href="https://www.atlascope.org" target="_blank" rel="noreferrer">Atlascope</a></strong> layers.</p>
    <!-- <p class="mt-1 text-xl font-bold">What layers of history will you explore?</p> -->
    <div class="flex-row my-10 mx-auto max-w-lg">

      {#each options as option }

      <div>
        <button class=" py-1 px-3 bg-blue-900 rounded text-white mb-5" on:click={()=>{dispatcher(option.action)}}>{option.name}</button>
      </div>
      
        
      {/each}

    </div>
    <img class="w-5/12 mx-auto" src="/tour-example.png" alt="This is a screenshot of an Atlascope tour of the history of the Central Library of the Boston Public Library.">
  </div>

</section>

<style>
  section#splash {
    background-color: rgba(255, 255, 255, 0.95);
    width: 100%;
    height: 100%;
    overflow: scroll;
    position: absolute;
  }

  #splash-inner {
    padding: 30px;
    text-align: center;
  }

  p a {
    color: maroon;
    background-image: linear-gradient(0deg,rgba(0,102,136,.2) 10%,transparent 0);
  }
</style>