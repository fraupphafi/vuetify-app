<template>
    <div class="filter-block">
        <v-combobox
            v-model="model"
            :items="items"
            placeholder="Search + Filter"
            multiple
            clearable
            chips
            >
            <template v-slot:selection="data">
                <v-chip
                    v-bind="data.attrs"
                    :input-value="data.selected"
                    close
                    @click="data.select"
                    @click:close="remove(data.item)"
                    >
                     {{ data.item }}
                </v-chip>
            </template>
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
            model: null
        }
    },
    computed: {
        items() {
            let elems = [];
            this.outlets.forEach(element => {
                elems.push(element.id);
            });
            return elems;
        }
    },
    methods: {
        remove(item) {
            const index = this.model.indexOf(item);
            if (index >= 0) this.model.splice(index, 1)
        }
    }
}
</script>

<style lang="scss" scoped>
.filter-block {
    padding: 0 32px;
    position: absolute;
    top: 100px;
    width: 100%;
    height: calc(100% - 100px);
    background-color: rgba(255,255,255, 0.9);
    z-index: 5556;
}
</style>
