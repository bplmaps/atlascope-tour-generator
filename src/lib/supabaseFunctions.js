import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const sb = createClient(supabaseUrl, supabaseAnonKey);

export const newAnnotationId = async () => {
  const {data, error } = await sb.from("tours").select("id").order("id", { ascending: false }).limit(1)
  const oldId = data[0].id
  let newId = parseInt(oldId)+100
  if (error) {
      console.log(error)
  }
  return newId;
};

export const createNewStory = async (metadata) => {
    const id = await newAnnotationId()
    metadata.creationDate = new Date().toISOString();
    const { data, error } = await sb
      .from('tours')
      .insert(
        {
          id: id,
          published: "false",
          metadataJson: metadata,
          timestamp: metadata.creationDate
        }
      )
      .select()
    if (error) { console.log(error) }
    return {data};
}

export const loadStory = async (id) => {
  const { data, error } = await sb
  .from('tours')
  .select()
  .eq('id', id)
  if (error) { console.log(error) }
  return data
}

export const saveStory = async (id, storyData) => {
  const stops = storyData[0]?.stopsJson
  console.log(stops)
  const { error} = await sb 
  .from('tours')
  .update({ stopsJson: stops })
  .eq('id', id)
  .select();
  if (error) {console.log(error)}
}