<template>
    <div class="filter-block">
        <v-combobox
            v-model="model"
            :items="getFilters"
            placeholder="Search + Filter"
            multiple
            clearable
            chips
            light
            v-on:change="exportTags()"
            >
            <template v-slot:selection="data">
                <v-chip
                    v-bind="data.attrs"
                    :input-value="data.selected"
                    :color="'#204969'"
                    draggable
                    close
                    filter
                    dark
                    @click="data.select"
                    @click:close="remove(data.item)"
                    >
                    {{ data.item }}
                </v-chip>
            </template>


            <template v-slot:item="{ item, attrs, on}">
                <v-list-item 
                    v-bind="attrs"
                    v-on="on">

                    <v-list-content>
                        <div class="filter-name">
                            <v-list-item-title
                                :id="attrs"
                                v-text="item"
                            ></v-list-item-title>
                        </div>

                        <div class="filter-variant">
                            variants
                        </div>

                    </v-list-content>
                </v-list-item>


            </template>
        </v-combobox>
    </div>
</template>

<script>

import VueforBus from "vue";
const EventBus = new VueforBus();

import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    name: "CustomFilter",
    props: {
        eventBus: {
            type: Object,
            default: EventBus,
        }
    },
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
        },
        ...mapGetters([
            'getFilters'
        ]),
    },
    methods: {
        remove(item) {
            const index = this.model.indexOf(item);
            if (index >= 0) this.model.splice(index, 1);

            this.exportTags();
        },
        exportTags() {
            let exportModel = this.model.length === 0 ? null : this.model;
            this.eventBus.$emit("changeTags", exportModel);
        }
    }
}
</script>

<style lang="scss" scoped>
.filter-block {
    padding: 0 32px;
    position: relative;
    width: 100%;
    background-color: #ffffff;
    z-index: 5556;
}
</style>
