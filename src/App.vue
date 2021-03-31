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
padding: 2vh 40px;
background: #2c3e50;
position: fixed;
width: 100%;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
color: white;
z-index: 100;
}
#nav a{
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: 550;
}
</style>


