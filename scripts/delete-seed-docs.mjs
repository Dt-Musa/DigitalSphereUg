import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'vzjsmuxp',
  dataset: 'production',
  apiVersion: '2026-04-06',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
})

const listQuery = '*[_id match "seed-*" || _id match "drafts.seed-*"]{_id,_type,title,name,platformName,question,eventName,universityName}'

try {
  const docs = await client.fetch(listQuery)

  if (!docs.length) {
    console.log('No seed docs found. Nothing to delete.')
    process.exit(0)
  }

  let tx = client.transaction()
  for (const doc of docs) {
    tx = tx.delete(doc._id)
  }

  await tx.commit({autoGenerateArrayKeys: true})

  console.log(`Deleted ${docs.length} seed docs.`)
  console.log(JSON.stringify(docs.map((d) => ({_id: d._id, _type: d._type, title: d.title || d.name || d.platformName || d.question || d.universityName || d.eventName || null})), null, 2))
} catch (error) {
  console.error('DELETE_SEED_ERROR:', error?.message || String(error))
  process.exit(1)
}
