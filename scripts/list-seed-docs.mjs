import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'vzjsmuxp',
  dataset: 'production',
  apiVersion: '2026-04-06',
  useCdn: false,
})

const query = '*[_id in path("seed-*")]{_id,_type,title,name,platformName,question,universityName,eventName}'

try {
  const docs = await client.fetch(query)
  console.log(JSON.stringify({count: docs.length, docs}, null, 2))
} catch (error) {
  console.error('LIST_SEED_ERROR:', error?.message || String(error))
  process.exit(1)
}
