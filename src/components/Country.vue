<template>

<router-link class="country" @click="select" :to="{ name:'Each', params:{ countryName: name}}" :key="countryName">

    <div><img :src="img" alt="flag"></div>
    <h3>{{name}}</h3>

</router-link>
  
</template>

<script>


export default {
  name: 'HelloWorld',
  props:[
    "name",
    "img"
  ],
  methods:{
    select(){
      this.$emit("select", this.name)
    }
  }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.country{
  width: 25vh;
  height: 30vh;
  display: grid;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  background: rgb(230, 230, 230);
  box-shadow: 0 0 10px rgb(147, 147, 147);
  border-radius: 10px;
  text-align: center;
  transition: .5s;
  text-decoration: none;
  color: black;
}
.country:hover{
  transform: scale(1.1);
}
img{
  width: 40%;
  
}

</style>
