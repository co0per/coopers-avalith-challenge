<template>
    <div class="app">
      <navbar @displayNavbar="display_navbar(true)"></navbar>
      <sidebar @updateListInput="update_list_input"  
               @updateListRadio="update_list_radio" 
               :display='display'>           
      </sidebar>
      <results :display='display' :searchFilter='searchFilter' :radioFilter='radioFilter'></results>
    </div>
</template>

<script>
  import results from './results.vue';
  import navbar from './navbar.vue';
  import sidebar from './sidebar.vue';

    export default {
      name: 'app',
      components: {
        navbar,
        sidebar,
        results
      },
      data() {
          return {
            display: false,
            searchFilter: '',
            radioFilter: ''
          }
      },
      methods: {
        display_navbar(bool) {
          if(!this.display){
            this.display = true;
          } else {
            this.display = false;
          }
        },
        update_list_input(search_filter) {
          this.searchFilter = search_filter;
        },
        update_list_radio(radio_filter) {
          this.radioFilter = radio_filter;
        }
      }
    }
</script>