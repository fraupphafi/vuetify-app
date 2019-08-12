<template>
    <div class="outlet-description">
        <div id="header" class="header">
            <div>
                <router-link to="/outlets-map">
                    <button class="back">
                        <span class="back-inner"></span>
                    </button>
                </router-link>
            </div>
            <div></div>
        </div>
        <div>Router {{ $route.params.id }}</div>
        <div>id: {{outletId}}</div>
        <div>name: {{currentOutlet.name}}</div>
        <div>address: {{currentOutlet.address}}</div>
    </div>
</template>

<script>
export default {
    name: 'OutletDescription',
    computed: {
        outletId() {
            return this.$route.params.id
        },
        currentOutlet () {
            return this.$store.getters.getOutletById(this.$route.params.id)[0];
        }
    }
}
</script>

<style lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.back {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    background: transparent;
    border: none;
    outline: none;
    margin-left: 40px;

    .back-inner {
        display: block;
        position: relative;
        width: 100%;
        height: 4px;
        background: #fff;
        border-radius: 2px;

        &::before,
        &::after {
            content: '';
            position: absolute;
            width: 18px;
            height: 4px;
            background: #fff;
            border-radius: 2px;
            left: 0;
            top: 0;
        }

        &::before {
            transform: rotate(45deg);
            transform-origin: 0 0;
        }

        &::after {
            transform: rotate(-45deg);
            transform-origin: 0 100%;
        }
    }
}
</style>


