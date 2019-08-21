<template>
    <div class="outlets-map">
        <Header :eventBus="eventBus" :tags="tags"/>
        <div class="outlets-content">
            <!-- <CustomFilter v-show="showFilters" :tags="tags" :eventBus="eventBus"/> -->
            <Map :outlets="outlets" :center="center" :eventBus="eventBus"/>
            <OutletsList :outlets="outlets" :center="center" :eventBus="eventBus"/>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Map from '../components/Map.vue';
import OutletsList from '../components/OutletsList.vue';

import VueforBus from "vue";
const EventBus = new VueforBus();

import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex'; // одним импортом выдает ошибку

export default {
    name: 'OutletsMap',
    components: {
        Header,
        Map,
        OutletsList
    },
    data() {
        return {
            eventBus: EventBus,
            tags: null,
            center: this.$store.getters.getCenter
        }
    },
    computed: {
        outlets() {
            return this.$store.getters.getFilteredOutlets(this.tags);
        }
    },
    created() {
        this.eventBus.$on('changeTags', (exportModel) => { // тут общаются вью и компонент фильтра
            this.tags = exportModel;
        });
         this.eventBus.$on('changeCenter', (coords) => { // тут общаются вью и list
             this.center = coords;
        });
    }
}
</script>
<style lang="scss">
.outlets-map {
    height: 100%;
}

.outlets-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #dadada;
}

</style>>

