<template>
  <div class="home">
    <div id="countries">
      <Country
      v-for="data in st.datas"
      :key="data"
      :name="data.name"
      :img= "data.flag"
      @select="selected"
      />

    </div>
  </div>
</template>

<script>
import Country from "../components/Country"
import axios from "axios"
import {reactive} from "vue"

export default {
  name: 'Home',
  components:{
    Country
  },
  setup(){
    const st = reactive({
      datas:"",
      countName:null
    });

    function selected(name){
      st.countName = name
    }

  

    const load = window.addEventListener("load", ()=>{
      axios.get("https://restcountries.eu/rest/v2/all").then((res)=> st.datas = res.data)
})




    return{
      st,
      load,
      selected
    }
  }
}
</script>

<style scoped>

#countries{
  width: 100%;
  padding: 40px;
  padding-top: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4vh;
  }
  @media screen and (max-width:400px) {
    #countries{
  justify-content: center;
  }
  }
</style>