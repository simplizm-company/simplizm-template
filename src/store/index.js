import Vue from 'vue';
import Vuex from 'vuex';
import window from './ui/window';

Vue.use(Vuex);

const createStore = () => new Vuex.Store({
    modules: {
        window
    }
});
  
export default createStore;