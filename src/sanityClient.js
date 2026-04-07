import {createClient} from '@sanity/client'
import {createImageUrlBuilder} from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: 'vzjsmuxp',
  dataset: 'production',
  apiVersion: '2026-04-06',
  useCdn: false,
})

const builder = createImageUrlBuilder(sanityClient)

export const urlFor = (source) => builder.image(source)
