import Vue from "vue";
import Vuex from 'vuex';
import { mapState } from 'vuex';
import { coordConverter, getAverage, getAverageCoords } from '../helpers.js';
import fakeAPI from './fakeApi.js';

// fakeAPI.map(item => {
//     item.latitude = coordConverter(item.latitude);
//     item.longitude = coordConverter(item.longitude);
//     console.log(item);
    
//     return item;
// });

Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store({
    state: {
        count: 0,
        outlets: fakeAPI,
        center: [54.731875, 20.518917]
    },
    getters: {
        outlets: state => {
            return state.outlets.map((outlet, index) => {
                outlet.coords = [coordConverter(outlet.latitude), coordConverter(outlet.longitude)];
                return outlet;
            });
        },
        center: state => {
            return getAverageCoords(state.outlets);
        },
        getOutletById: (state) => (id) => {
            return state.outlets.filter((outlet, index) => {
                return +outlet.id === +id
            })
        }
    },
    mutations: {
        centerUpdate(state, coords) {
            state.center = coords;
        }
    }
});