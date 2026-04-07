import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'vzjsmuxp',
  dataset: 'production',
  apiVersion: '2026-04-06',
  useCdn: false,
})

const query = `{
  "seedLike": *[_id match "seed-*" || _id match "drafts.seed-*"]{_id,_type,title,name,platformName,question,eventName,universityName},
  "events": *[_type == "event"]{_id,title,dateText,eventStatus},
  "opportunities": *[_type == "opportunity"]{_id,title,category},
  "tracks": *[_type == "learningTrack"]{_id,title,label,trackNumber},
  "resources": *[_type == "resourceItem"]{_id,title,category},
  "posts": *[_type == "blogPost"]{_id,title}
}`

try {
  const data = await client.fetch(query)
  console.log(JSON.stringify(data, null, 2))
} catch (error) {
  console.error('INSPECT_ERROR:', error?.message || String(error))
  process.exit(1)
}
