<template>
  <div class="container">
    <div class="row">
      <div class="">
        <div class="gray-box">
          <label class="label-top lwhite">DEV NAME</label><br>
          <label class="label-mid lwhite">DNI XX.XXX.XXX</label><br>
          <label class="label-bot lwhite">XX YEARS OLD</label>
        </div> 
        <div>
          <div class="input-field input-mar">
            <input id="search" type="text" placeholder="Search in cards" v-model="search_filter">
          </div>
          <label class="lwhite mar-left-search label-mid">Filter by</label>
          <p class="mar-left-search">
            <input name="group1" type="radio" id="front" value="Frontend" v-model="which_end" />
            <label for="front">Frontend</label>
          </p>
          <p class="mar-left-search">
            <input name="group1" type="radio" id="back" value="Backend" v-model="which_end" />
            <label for="back">Backend</label>
          </p>
        </div>  
      </div>
      <div class="">
        <div class="results">
          <h5>LANGUAGES & TECHNOLOGIES</h5>
          <div class="row">
            <div class="flex-container">
              <div v-for="card_lt in lang_tech_filter">
                  <div class="">
                    <div class="card small">
                      <div class="card-image">
                        <img :src="card_lt.cardImageUrl" class="card-img">
                      </div>
                      <div class="card-content">
                        <p>{{ card_lt.cardDescription }}</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import json_card from './../cards.js';

  export default {
    name: 'viewHome',
    props: [],
    components:{
    }, 
    data() { 
      return {
        lang_tech_list: [],
        search_filter: '',
        which_end: '' // back or front end
      }
    },
    mounted() {
      this.lang_tech_list = json_card;
    },
    created() {
        
    },
    methods: {

    },
    computed: {
      lang_tech_filter() {
        let lt_list = this.lang_tech_list.filter(lt_list => (
            lt_list.cardTitle.toLowerCase().includes(this.search_filter.toLowerCase())
        ));

        if(this.which_end) {
          lt_list = lt_list.filter(lt_list => (
              lt_list.cardTechnology.includes(this.which_end)
          ));
        }

        return lt_list;
      }
    }
  }
</script>

<style>

</style>