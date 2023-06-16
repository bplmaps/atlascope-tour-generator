<script>
  import ActionController from "./lib/ActionController.svelte";
  import StoryCreator from "./lib/StoryCreator.svelte";
  import StoryEditor from "./lib/StoryEditor.svelte";
  import ChooseStoryToEdit from "./lib/ChooseStoryToEdit.svelte";
  import HowTo from "./lib/HowTo.svelte";

  let action = "initial";
  let editingStoryId;

  function startEditingStory(id) {
    editingStoryId = id;
    action = "editStory";
  }
</script>

<main>
  {#if action === "readHowTo"}
    <HowTo />
  {:else if action === "createStory"}
    <StoryCreator
      on:editStory={(e) => {
        startEditingStory(e.detail.storyId);
      }}
    />
  {:else if action === "editStory"}
    <StoryEditor storyId={editingStoryId} />
  {:else if action === "chooseStoryToEdit"}
    <ChooseStoryToEdit
      on:editStory={(e) => {
        startEditingStory(e.detail.storyId);
      }}
    />
  {:else if action === "initial"}
    <ActionController
      on:readHowTo={() => {
        action ="readHowTo";
      }}
      on:createStory={() => {
        action = "createStory";
      }}
      on:chooseStoryToEdit={() => {
        action = "chooseStoryToEdit";
      }}
    />
  {/if}
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
