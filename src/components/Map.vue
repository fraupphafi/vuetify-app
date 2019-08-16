<template>
    <div id="map">
        <l-map 
            :zoom="zoom" 
            :center="center" 
            @update:center="centerUpdate" 
            >
            <l-control-scale position="topright" :imperial="false" :metric="true"></l-control-scale>
            <l-tile-layer
                :url="url" 
                :attribution="attribution"/>
            <l-marker 
                v-for="(outlet, index) in outlets"
                :lat-lng="outlet.coords" 
                :key="index" 
                :icon="icon"
                @click="centerUpdate(outlet.coords)"/>
        </l-map>
    </div>
</template>

<script>
    import { LMap, LTileLayer, LMarker, LIcon, LControlScale } from "vue2-leaflet";
    import { latLng, icon  } from "leaflet";
    import VueforBus from "vue";
    const EventBus = new VueforBus();

    export default {
        name: 'Map',
          props: {
            outlets: {
                type: Array,
                required: true,
            },
            center: {
                required: true,
            },
            eventBus: {
                type: Object,
                default: EventBus,
            },
        },
        components: { LMap, LTileLayer, LMarker, LIcon, LControlScale },
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
            // ...mapMutations([
            //     'centerUpdate'
            // ])
            centerUpdate(coords) {
                this.eventBus.$emit("changeCenter", coords);
            }
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

