<template>
    <div class="filter-block">
        2233
        <template>
        <v-chip>
            1236655
        </v-chip>
        </template>
    </div>
    
</template>

<script>

import VueforBus from "vue";
const EventBus = new VueforBus();

export default {
    name: "CustomFilter",
    props: [
        'outlets'
    ]

}
</script>

<style lang="scss" scoped>
.filter-block {
    padding: 0 32px;
}
</style>
