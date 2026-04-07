import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {deskStructure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'DigitalSphere CMS',
  projectId: 'vzjsmuxp',
  dataset: 'production',
  plugins: [
    structureTool({structure: deskStructure}),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
