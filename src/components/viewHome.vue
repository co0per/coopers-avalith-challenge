<template>
  <div class="container">
    <div class="row">
      <div class="col l3 m5 s12">
        <div class="gray-box">
          <label class="label-top lwhite">DEV NAME</label><br>
          <label class="label-mid lwhite">DNI XX.XXX.XXX</label><br>
          <label class="label-bot lwhite">XX YEARS OLD</label>
        </div> 
        <div>
          <div class="input-field input-mar">
            <input id="search" type="text" placeholder="Search in cards">
          </div>
          <label class="lwhite mar-left-search label-mid">Filter by</label>
          <p class="mar-left-search">
            <input name="group1" type="radio" id="test1" />
            <label for="test1">Frontend</label>
          </p>
          <p class="mar-left-search">
            <input name="group1" type="radio" id="test2" />
            <label for="test2">Backend</label>
          </p>
        </div>  
      </div>
      <div class="col l9">
        <div class="results">
          <h5>LANGUAGES & TECHNOLOGIES</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'viewHome',
      components:{
      }, 
      data(){ 
        return {

        }
      },
      mounted(){

      },
      created() {
        
      },
      methods: {

      },
      computed: {

      }
    }
</script>

<style>

</style>