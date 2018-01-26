<template>

  <div class="sideBar" id="main">
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
        <input name="group1" type="radio" id="front" value="Frontend" v-model="radio_filter" />
        <label for="front">Frontend</label>
      </p>
      <p class="mar-left-search">
        <input name="group1" type="radio" id="back" value="Backend" v-model="radio_filter" />
        <label for="back">Backend</label>
      </p>
    </div>  
  </div>
</template>

<script>

export default {
    name: 'sidebar',
    props: ['display'],
    watch : {
        display : function (value) {
            if(!value){
	            document.getElementById("main").style.width = "300px";
	        } else {
	            document.getElementById("main").style.width = "0px";
	        }
        },
        search_filter: function (value) {
        	this.$emit('updateListInput', value);
        },
        radio_filter: function (value) {
        	this.$emit('updateListRadio', value);	
        }
    },
    data() { 
      return {
        search_filter: '',
        radio_filter: '', // back or front end
      }
    },
    methods: {
      
    }
}
</script>