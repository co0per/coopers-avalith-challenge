<template>
  <nav>
    <a href="#">
      <img src='https://i.imgur.com/wdg9JSv.png' class="avalith" @click="display_sidebar">  
    </a>
  </nav>
</template>

<script>
    export default {
        name: 'topMenu',
        data(){
            return {
                logo: 'https://i.imgur.com/wdg9JSv.png'
            }
        },
        mounted() {

        },
        created() {

        },
        methods: {
            display_sidebar(){
                this.$emit('display_side');
            }
        },
        computed: {

        }
    }
</script>

<style>

</style>