import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); // vue 에 등록

export default new Vuex.Store({

    state: { // 변수를 저장하는 것
        token: null
    },

    mutations: { // 변수를 조작하는 함수

      increment(state){

      },
      decrement(state){

      }

    }
});
