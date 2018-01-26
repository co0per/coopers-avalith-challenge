<template>
  <div class="container">
    <nav>
      <a href="#">
        <img src='https://i.imgur.com/wdg9JSv.png' class="avalith" @click="display_nav()">  
      </a>
    </nav>
  </div>
</template>

<script>

  export default {
    name: 'navbar',
    components: {

    }, 
    data() { 
      return {
        display_nav_bool: 0
      }
    },
    mounted() {

    },
    created() {
        
    },
    methods: {
      display_nav() {
        this.$emit('displayNavbar', null);
      }
    },
    computed: {

    }
  }

</script>