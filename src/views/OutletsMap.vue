<template>
    <div class="outlets-map">
        <Header/>
        <CustomFilter v-if="showFilters" :outlets="outlets"/>
        <Map :outlets="outlets" :center="center"/>
        <OutletsList :outlets="outlets" :center="center"/>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Map from '../components/Map.vue';
import OutletsList from '../components/OutletsList.vue';
import CustomFilter from '../components/CustomFilter.vue';

import { GlobalBus } from '../GlobalBus.js';
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    name: 'OutletsMap',
    components: {
        Header,
        Map,
        OutletsList,
        CustomFilter
    },
    data() {
        return {
            showFilters: false,
            GlobalBus: GlobalBus
        }
    },
    computed: {
        ...mapGetters([
            'outlets'
        ]),
        ...mapState([
            'center'
        ])
    },
    methods: {
        toggleShowFilters() {
            this.showFilters = !this.showFilters;
        }
    },
    mounted() {
        this.GlobalBus.$on('changeShowFilters', this.toggleShowFilters);
    }
}
</script>

