<template>
    <div class="outlets-map">
        <Header transition="slide" />
        <CustomFilter :outlets="outlets"/>
        <Map :outlets="outlets" :center="center"/>
        <OutletsList :outlets="outlets" :center="center"/>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Map from '../components/Map.vue';
import OutletsList from '../components/OutletsList.vue';
import CustomFilter from '../components/CustomFilter.vue';


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
    computed: {
        ...mapGetters([
            'outlets'
        ]),
        ...mapState([
            'center'
        ])
    }
}
</script>

