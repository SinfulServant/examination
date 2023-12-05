<script>
import ApiTests from './../../src/services/ApiTests.service'
export default {
    setup() {
        // Інші налаштування
        return {};
    },

    data() {
        return {
            titleOfTests: [],
        };
    },

    mounted() {
        ApiTests.getTitles().then(res => this.titleOfTests.push(...res));
        console.log(this.titleOfTests);
    },
};



</script>

<template>
    <h2>Here are the tests you can take</h2>
    <ul>
        <!-- <li v-for=""></li> -->
    </ul>
</template>