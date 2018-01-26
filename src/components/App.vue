<template>
    <div class="app">
      <transition name="fade">
        <viewHome :displaySidebar="displaySidebar"></viewHome>
      </transition>
    </div>
</template>

<script>
  import viewHome from './viewHome.vue';

    export default {
      name: 'app',
      components: {
        viewHome
      },
      data() {
          return {
            displaySidebar: true
          }
      },
      methods: {
        displaySidebar(bool) {
          console.log("llega hasta aca????");
          if (this.displaySidebar) {
            this.displaySidebar = false;
          } else {
            this.displaySidebar = true;
          }
        }
      }
    }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>