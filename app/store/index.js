import { createStore } from 'redux'
import reducer from '../reducers'
let store = (initialState) => {
   let result = createStore(reducer, initialState,
    // 触发 redux-devtools
    window.devToolsExtension ? window.devToolsExtension() : undefined
    )
   return result
}
export default store()