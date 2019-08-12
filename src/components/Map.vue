<template>
    <div id="map">
        <l-map :zoom="zoom" :center="center" @click="log()" @update:center="centerUpdate" >
            <l-control-scale position="topright" :imperial="false" :metric="true"></l-control-scale>
            <l-tile-layer
                :url="url" 
                :attribution="attribution"/>
            <l-marker 
                v-for="(outlet, index) in outlets"
                :lat-lng="outlet.coords" 
                :key="index" 
                :icon="icon"
                @click="centerUpdate(outlet.coords); log(outlet.coords);"/>
        </l-map>
    </div>
</template>

<script>
    import { LMap, LTileLayer, LMarker, LIcon, LControlScale } from "vue2-leaflet";
    import { latLng, icon  } from "leaflet";
    import { mapMutations, mapGetters } from 'vuex';
    import store from '../storage/store.js'

    export default {
        name: 'Map',
        props: ['outlets', 'center'],
        components: { LMap, LTileLayer, LMarker, LIcon, LControlScale },
        store: store,
        data() {
            return {
                zoom: 15,
                url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
                attribution:
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                icon: icon({
                    iconUrl: "cheese.png",
                    iconSize: [32, 32],
                    iconAnchor: [16, 16]
                })
            };
        },
        methods: {
            log(coords) {
                console.log('click', coords);
            },
            ...mapMutations([
                'centerUpdate'
            ])
        }
    }
</script>

<style>
    @import '~leaflet/dist/leaflet.css';
    #map {
        height: 400px;
    }

    .leaflet-pane {
        transition: all 300ms ease;
    }
</style>

