<script>
  import { createEventDispatcher } from 'svelte';
  import AtlascopeLogo from "./AtlascopeLogo.svelte";

  let dispatcher = createEventDispatcher();

</script>

<section class="mx-auto">

  <header class="text-xl font-bold mb-3 mt-5">
    <div class="p-0 mx-auto w-48 mb-3 text-center">
      <AtlascopeLogo pulse={true} />
      <h1 class="">Tour Generator</h1>
      <button class="py-1 px-3 bg-blue-900 rounded text-white mb-5 text-sm"><a href="/">Return to Home</a></button>
    </div>
  </header>

  <div class="container mx-auto mt-5">
    <h1 class="text-lg font-bold">How to Make a Tour</h1>
    <ol class="ml-5 pt-2">
      <li>Click the "Create New Story" button and you will be prompted to enter a Title, Subtitle, and Author for your tour. These can be placeholders if you're not ready to commit to a title — you'll be able to edit them later. Hit the "Create Story" button.</li>
      <li><strong>Save the Story ID that is shown on the next screen — this will be how you are able to edit your story in the future.</strong> You can use or download the Tour Building Worksheet below as a place to both save your Tour ID and plan out the content of the tour. You can make a copy of the worksheet by going to File -> Make a Copy.
        <br><button class="bg-blue-900 text-white font-bold py-2 px-3 rounded"><a href="https://docs.google.com/spreadsheets/d/1vawoofb1hLPiVY_LsvqFXyiws-6oR91fMtH_axiKBLc/edit#gid=0" target="_blank" rel="noreferrer">Get Tour Planning Worksheet</a></button>
      </li>
      <li>Click the "Edit my new story" button to begin adding content to the tour.</li>
      <li>For each "stop" on your tour, you'll need to add a caption and a link to a location from <a href="https://www.atlascope.org/" target="_blank" rel="noreferrer">Atlascope</a>. You can get the link to the specific view by using the "Share" tab and then selecting the toggle to "View Link".</li>
      <li>You can preview your tour at any point by clicking the blue preview button ("Open this story in Atlascope app") in the top left of the screen.</li>
    </ol>
  </div>

  <div class="container mx-auto mt-5">
    <h1 class="text-lg font-bold">Generating Tour Ideas</h1>
    <p>If you’re stumped for topics to make tours on, feel free to consult our Tours Wishlist or use the following questions to get started with research.</p>
    <ul class="ml-5 pt-2">
      <li>Think about what places you move through in your daily life that you find interesting. How did they come to be that way?</li>
      <li>What did your neighborhood look like 100 years ago? 150 years ago?</li>
      <li>Pick a current stop on the T — what did that area look like in the past?</li>
      <li>Poke through the <a href="https://www.digitalcommonwealth.org/" target="_blank" rel="noreferrer">Digital Commonwealth</a> photograph collection — is there any subject that interests you?</li>
    </ul>
  </div>

  <div class="container mx-auto mt-5">
    <h1 class="text-lg font-bold">Things to Consider</h1>
    <ul class="ml-5 pt-2">
      <li>Think carefully about what atlas layers can best help tell your story. At each tour stop, which base layer helps complement what's shown in the overlay layer?</li>
      <li>Keeping captions for tour stops between 50-150 words works best. Going much longer than that means that the text might cover the map for a viewer.</li>
    </ul>
  </div>

  <div class="container mx-auto mt-5">
    
  </div>

</section>

<style>

section {
  overflow-y: scroll;
}

p {
  padding-top: 4px;
}

ul { 
   list-style-type: disc; 
   list-style-position: outside;
}
ul li {
  padding-top: 4px;
  padding-left: 5px;
}

ol {
  list-style-type: decimal;
}

ol li {
  padding-top: 4px;
  padding-left: 5px;
}

</style>