<template>
    <div class="app">
      <top-menu></top-menu>
      <transition name="fade">
        <viewHome></viewHome>
      </transition>
    </div>
</template>

<script>
  import topMenu from './top-menu.vue';
  import viewHome from './viewHome.vue';

    export default {
      name: 'app',
      components: {
        topMenu,
        viewHome
      },
      data() {
          return {

          }
      },
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