<template>
  <div class="container">
    <div class="row">
      <div>
        <div class="results" id="resultsId">
          <h5>LANGUAGES & TECHNOLOGIES</h5>
          <div class="row">
            <div class="flex-container">
              <div v-for="card_lt in lang_tech_filter">
                  <div class="">
                    <div class="card small" id="card">
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
    name: 'results',
    props: ['display', 'searchFilter', 'radioFilter'],
    watch : {
      display : function (value) {
        if(!value){
          document.getElementById("resultsId").style.padding = "0px 0px 0px 330px";
        } else {
          document.getElementById("resultsId").style.padding = "0px 0px 0px 20px";
          document.getElementById("card").style.margin = "0px 0px 0px 11px";
        }
      }
    },
    data() { 
      return {
        lang_tech_list: []
      }
    },
    mounted() {
      this.lang_tech_list = json_card;
    },
    computed: {
      lang_tech_filter() {
        let lt_list = this.lang_tech_list.filter(lt_list => (
            lt_list.cardTitle.toLowerCase().includes(this.searchFilter.toLowerCase())
        ));

        if(this.radioFilter) { // back or front end
          lt_list = lt_list.filter(lt_list => (
              lt_list.cardTechnology.includes(this.radioFilter)
          ));
        }
        return lt_list;
      }
    }
  }
</script>