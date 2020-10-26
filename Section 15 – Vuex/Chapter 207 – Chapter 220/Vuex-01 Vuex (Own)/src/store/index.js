import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './counter/index.js';

const store = createStore({
    modules: {
      numbers: counterModule
    },
    state() {
      return {      
        isLoggedIn: false
      };
    },
    mutations: rootMutations,
    // {
    //   setAuth(state, payload) {
    //     state.isLoggedIn = payload.isAuth;
    //   }
    // },
    actions: rootActions,
    // {
       
    // },
    getters: rootGetters,
    // {
     
    // }
  });

  export default store;