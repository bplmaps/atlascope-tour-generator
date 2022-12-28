<script>
  import { createEventDispatcher } from "svelte";

  let dispatcher = createEventDispatcher();

  export let stopData;
  export let idx;

  let deleteConfirm = false;

  $: viewURL = `https://atlascope.org/#/view:share$base:${stopData.base}$overlay:${stopData.overlay}$zoom:${stopData.zoom}$center:${stopData.center.join(',')}$mode:${stopData.viewMode}`

  function handleURLchange(e) {
    
    const inputURL = e.target.value;
    let s = inputURL.substr(inputURL.indexOf("#")+2);
    let urlParams = {};
    s.split("$").map((kv)=>{const i = kv.indexOf(':'); const k = kv.slice(0,i); const v = kv.slice(i+1); urlParams[k]=v; });

    if( urlParams.view && urlParams.base && urlParams.overlay && urlParams.zoom && urlParams.center && urlParams.mode ) {
      stopData.base = urlParams.base;
      stopData.overlay = urlParams.overlay;
      stopData.zoom = +urlParams.zoom;
      stopData.center = urlParams.center.split(",").map(x=>+x);
      stopData.overlayMode = urlParams.mode;
    } else {
      window.alert("That doesn't seem like a valid Atlascope view link");
      e.target.value = viewURL;
    }

  }

  function handleDelete() {
    if(deleteConfirm) {
      dispatcher('deleteStop',{'idx': idx});
      deleteConfirm = false;
     }
    else {
      deleteConfirm=true;
    }
  }
</script>

<div class="mr-5">
  <button class="bg-green-900 text-white rounded p-2 text-semibold text-sm" on:click="{()=>{dispatcher('addStop',{'idx': idx})}}">+ Add a new stop</button>
</div>

<div class="border border-4 rounded border-black-900 m-3 p-5">

  <div class="font-bold">Stop {idx + 1}</div>

  <div class="my-4">
    <label for="caption" class="block mb-2 text-sm font-medium text-gray-500"
      >Caption</label
    >
    <textarea
      id="caption"
      rows="4"
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      bind:value={stopData.caption}
    />
  </div>

  <label for="viewURL" class="block mb-2 text-sm font-medium text-gray-500"
    >Atlascope view URL <a class="bg-blue-500 p-1 rounded text-white text-xs" target="_blank" href={viewURL}>⏫ Open this view in Atlascope</a></label>
  <input
    id="viewURL"
    class="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
    value={viewURL}
    on:change={handleURLchange}
  />

  <div class="mt-5">
    <button class="{ deleteConfirm ? "bg-red-900 text-white" : "text-red-900" } border-red-900 border border-2 rounded p-2 text-sm" on:click="{handleDelete}">{ deleteConfirm ? "Click again to delete" : "Delete this stop" }</button>
  </div>

</div>
