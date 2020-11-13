<template>
  <div class="country">
    <Each
    :data="st.eachData"
    />
  </div>
</template>

<script>
import { useRoute } from "vue-router"
import Each from "../components/eachCountry"
import { reactive, computed } from 'vue'
import axios from "axios"
export default {
  name:"each",
  components:{
    Each
  },
  setup(){
    const route = useRoute();
    
    const countName = computed(()=> route.params.countryName)



    const st = reactive({
      eachData:null,
      country: countName
    });
    
const load = window.addEventListener("load", ()=>{
      axios.get(`https://restcountries.eu/rest/v2/name/${st.country}?fullText=true`).then((res)=> st.eachData = res.data[0])
})


    return{
      st,
      load,
      countName
    }
  }
}
</script>

