import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'vzjsmuxp',
  dataset: 'production',
  apiVersion: '2026-04-06',
  useCdn: false,
})

const query = `{
  "siteSettings": count(*[_type == "siteSettings" && _id == "siteSettings"]),
  "blogPost": count(*[_type == "blogPost"]),
  "event": count(*[_type == "event"]),
  "opportunity": count(*[_type == "opportunity" && active == true]),
  "learningTrack": count(*[_type == "learningTrack"]),
  "resourceItem": count(*[_type == "resourceItem" && active == true]),
  "teamMember": count(*[_type == "teamMember"]),
  "faqItem": count(*[_type == "faqItem" && active == true]),
  "communityLink": count(*[_type == "communityLink" && active == true]),
  "campusChapter": count(*[_type == "campusChapter"]),
  "eventGallery": count(*[_type == "eventGallery"])
}`

try {
  const counts = await client.fetch(query)
  console.log(JSON.stringify(counts, null, 2))
} catch (error) {
  console.error('READINESS_ERROR:', error?.message || String(error))
  process.exit(1)
}
