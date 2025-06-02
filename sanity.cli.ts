import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '18ium23p',
    dataset: 'mitra_dev'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
