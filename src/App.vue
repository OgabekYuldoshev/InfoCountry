<template>
      <div id="app">
        <nav id="nav">
      <router-link @click="e" to="/">Countries</router-link>
    </nav>
  <router-view/>
      </div>
</template>



<style scoped>
#app{
  width: 100%;
  height: 100%;
  background: lightblue;
}
#nav{
padding: 5vh 40px;
background: #2c3e50;
display: flex;
align-items: center;
justify-content: center;
color: white;
}
#nav a{
  text-decoration: none;
  color: white;
  margin-right: 30px;
  font-size: 20px;
  font-weight: 550;
  
}
</style>


