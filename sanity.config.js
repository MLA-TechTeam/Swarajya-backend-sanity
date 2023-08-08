import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'swarajya backend',

  projectId: 'w8ip694h',
  dataset: 'swarajya',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
