import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PID,
    dataset: process.env.SANITY_STUDIO_DATASET
  }
})