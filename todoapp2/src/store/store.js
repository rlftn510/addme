import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './moduls/todoApp.js'

Vue.use(Vuex)

export const store = new Vuex.Store({

  modules : {
    todoApp
  }
})