import faunadb, { query as q } from "faunadb";

const client = new faunadb.Client({
  secret: "fnAE2BtdXhAAS3-RaZVesaqTQgxNOMRwzUxNjWjm",
  domain: "db.us.fauna.com"
})


export function createNewStory(metadata) {
  return new Promise((resolve, reject) => {
    const d = new Date();
    metadata.creationDate = d.toISOString();

    client.query(
      q.Create(
        q.Collection('tours'),
        { data: { metadata: metadata } },
      )
    )
      .then((ret) => { resolve(ret.ref.value.id); })
      .catch((err) => console.error(
        'Error: [%s] %s: %s',
        err.name,
        err.message,
        err.errors()[0].description,
      ))
  });
}

export function loadStory(id) {
  return new Promise((resolve, reject) => {
    client.query(
      q.Get(q.Ref(q.Collection('tours'), id))
    )
      .then((ret) => { resolve(ret.data); })
      .catch((err) => console.error(
        'Error: [%s] %s: %s',
        err.name,
        err.message,
        err.errors()[0].description,
      ))
  });
}

export function saveStory(id, data) {
  return new Promise((resolve, reject) => {
    client.query(
      q.Update(
        q.Ref(q.Collection('tours'), id),
        { data: data },
      )
    )
      .then((ret) => { resolve(ret.data); })
      .catch((err) => console.error(
        'Error: [%s] %s: %s',
        err.name,
        err.message,
        err.errors()[0].description,
      ))
  });
}