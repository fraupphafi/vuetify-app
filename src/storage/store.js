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
        center: [50.098724, 118.044561],
        // tags: null
    },
    getters: {
        outlets: state => {
            return state.outlets.map((outlet, index) => {
                // координаты конвертируются в coords тут
                outlet.coords = [coordConverter(outlet.latitude), coordConverter(outlet.longitude)];
                return outlet;
            });
        },
        getCenter: (state, getters) => {
            const outlets = getters.outlets;
            let lats = [];
            let lngs = [];
            outlets.forEach(elem => {
                lats.push(elem.latitude);
                lngs.push(elem.longitude);
            });
            return [coordConverter(getAverage(lats)), coordConverter(getAverage(lngs))];
        },
        // Получить точку по ID
        getOutletById: (state) => (id) => {
            return state.outlets.filter((outlet, index) => {
                return +outlet.id === +id
            })
        },
        // Фильтрация всех точек по выбранному тегу
        getFilteredOutlets: (state, getters) => (tags) => {
            if (tags === null) {
                return getters.outlets;
            }

            let filteredOutlets = [];

            tags.forEach((tag) => {
                filteredOutlets = filteredOutlets.concat(
                    state.outlets.filter((outlet, index) => {
                        return +outlet.typett === +tag
                    })
                );
            })
            console.log(filteredOutlets);
            return filteredOutlets;
        },
        // Выбор все typett для фильтров
        getFilters: (state, getters) => {
            const outlets = getters.outlets;
            let typestt = [];
            outlets.forEach(element => {
                typestt.push(element.typett);
            });
            return [... new Set(typestt)];
        }
    },
    mutations: {
        centerUpdate(state, coords) {
            state.center = coords;
        },
        // tagsUpdate(state, updatedTags) {
        //     state.tags = updatedTags;
        // }
    }
});