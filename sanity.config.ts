import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Mitra Service',

  projectId: 'ozyqsoog',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  cors: {
    origin: ['http://localhost:3000', 'https://localhost:3000'],
    credentials: true,
  },

  api: {
    projectId: 'ozyqsoog',
    dataset: 'production',
  },
})
