<template>
    <div class="filter-block">
        <v-combobox
            v-model="model"
            >

        </v-combobox>
    </div>
    
</template>

<script>

import VueforBus from "vue";
const EventBus = new VueforBus();

export default {
    name: "CustomFilter",
    props: [
        'outlets'
    ],
    data() {
        return {
            model: ['test data']
        }
    }

}
</script>

<style lang="scss" scoped>
.filter-block {
    padding: 0 32px;
}
</style>
