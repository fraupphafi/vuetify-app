<template>
    <div id="header" class="header">
    
        <v-toolbar 
            height="100px"
            :color="'#204969'"
            dark
            >
            <transition-group name="fade" mode="out-in" tag="div" class="group">
                <v-app-bar-nav-icon v-show="showTitles" :key="1"></v-app-bar-nav-icon>
           
                <v-toolbar-title v-show="showTitles" :key="2">Заголовок</v-toolbar-title>
          
                <v-spacer v-show="showTitles" :key="3"></v-spacer>
          
                <CustomFilter v-show="showFilters" :tags="tags" :eventBus="eventBus" :key="4"/>
            </transition-group>

           
            <v-btn icon
                @click="toggleShowFilters()">
                <v-icon>mdi-filter-variant</v-icon>
            </v-btn>
        </v-toolbar>

    </div>
</template>

<script>
import CustomFilter from './CustomFilter.vue';
import VueforBus from "vue";
const EventBus = new VueforBus();

export default {
    name: 'Header',
    components: {
        CustomFilter
    },
    props: {
        eventBus: {
            type: Object,
            default: EventBus,
        },
        tags: {
            required: true
        }
    },
    data() {
        return {
            showFilters: false,
            showTitles: true
        }
    },
    methods: { 
        toggleShowFilters() {
            this.showFilters = !this.showFilters;
            this.showTitles = !this.showTitles;
        }
    }
}
</script>

<style lang="scss">
.header {
    width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.group {
    display: flex;
    flex-direction: column;
    
}
</style>
