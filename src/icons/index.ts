import type { App } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

export function importAllSvg(): void {
  const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
    requireContext.keys().forEach(requireContext)
  try {
    importAll(require.context('@/icons/svg', false, /\.svg$/))
  } catch (error) {
    console.log(error)
  }
}

export function registerIcon(app: App) {
  app.component('SvgIcon', SvgIcon)
}
