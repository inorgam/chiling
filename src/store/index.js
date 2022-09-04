import {createStore} from 'vuex' 
import main from './modules/main'
import data_use from './data_use'

export default createStore({
    modules: {
      main
    },
    data_use
  })
  