<template>
    <ol class="outlets-list" id="OutletsList" :outlets="outlets">
        <li 
            v-for='(outlet, index) in outlets' 
            :key='outlet.id' 
            class="outlets-list__item">
            <div @click="centerUpdate(outlet.coords)">
                <span class="count">{{index + 1}}</span>
                <p class="name">{{outlet.name}}</p>
                <p class="address">{{outlet.address}}</p>
            </div>
            <router-link :to="{ name: 'outlet-description', params: { id: outlet.id } }">
                <button class="button">Перейти в точку {{index + 1}}</button>
            </router-link>
        </li>
    </ol>
</template>

<script>
import router from '../router.js';
import { mapMutations } from 'vuex';
export default {
    name: 'OutletsList',
    props: ['outlets', 'center'],
    methods: {
        log(coords) {
            console.log(`координаты точки: ${coords}`);
        },
        ...mapMutations([
            'centerUpdate'
        ])
    }
}
</script>

<style lang="scss">
.outlets-list{
    list-style: none;
    background: #dadada;
    margin: 0;
    padding: 32px 24px;
}

.outlets-list__item {
    position: relative;
    margin-bottom: 24px;
    text-align: left;
    padding-left: 64px;
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &:last-child {
        margin-bottom: 0;
    }

    .count {
        display: inline-block;
        width: 32px;
        height: 32px;
        background-color: #204969;
        color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 300ms ease-out;
    }

    .name {
        margin-top: 0;
        font-size: 16px;
        line-height: 1;
        margin-bottom: 8px;
    }

    .address {
        text-transform: lowercase;
        margin: 0;
        font-size: 16px;
        color: lighten($color: #000000, $amount: 30%);
    }

    &:hover {
        .count {
            background-color: invert(#204969);
            color: invert(#fff);
        }
    }
}

.button {
    font-family: 'Ubuntu', sans-serif;
    background-color: #204969;
    border: 2px solid #204969;
    color: #fff;
    padding: 8px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 300ms ease-out;

    &:active,
    &:hover,
    &:focus {
        background-color: transparent;
        color: #204969;
        outline: none;
        box-shadow: none;
    }
}
</style>


