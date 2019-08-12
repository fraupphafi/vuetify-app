<template>
    <div id="header" class="header">
        <!-- <span class="mi mi-filter-list"></span> -->
    
        <v-toolbar 
            height="100px"
            :color="'#204969'"
            dark
            >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Заголовок</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn icon
                @click="log()">
                <v-icon>mdi-filter-variant</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-exit-run</v-icon>
            </v-btn>
        </v-toolbar>

    </div>
</template>

<script>
export default {
    name: 'Header',
    methods: { 
        log() {
            console.log('filter click');
        }
    }
}
</script>

<style lang="scss">
.header {
    width: 100%;
    // height: 100px;
    // background-color: #204969;
}
</style>
