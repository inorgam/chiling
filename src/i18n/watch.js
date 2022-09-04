import { watch } from 'vue'
import store from '@/store'

export const watchLang = (...cbs) => {
  watch(
    () => store.state_use.lang,
    () => {
      cbs.forEach((cb) => cb(store.state_use.lang))
    },
    { deep: true }
  )
}
