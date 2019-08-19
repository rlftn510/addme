import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './moduls/todoApp.js'

Vue.use(Vuex)
class Abc {
  ttt(){
    console.log('ddd')
  }
}
const te = new Abc()
te.ttt()
export const store = new Vuex.Store({

  modules : {
    todoApp
  }
})