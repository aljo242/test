// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Aljo242TestTest from './aljo242.test.test'


export default { 
  Aljo242TestTest: load(Aljo242TestTest, 'aljo242.test.test'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}