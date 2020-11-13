<template>
    <div id="countryInfo">
        <div><img :src="data.flag" ></div>
        <h1>{{data.name}}</h1>
        <p>
            Country name: <b>{{data.name}}</b><br>
            Capital: <b>{{data.capital}}</b><br>
            Region: <b>{{data.region}}</b><br>
            Area: <b>{{data.area}}</b><br>
            Population: <b>{{data.population}}</b><br>
            TimeZone: <b>{{data.timezones[0]}}</b><br>
            Currencies: <b>{{data.currencies[0].name}}</b>, <b>{{data.currencies[0].code}}</b><br>
            Borders: <b>{{border()}}</b>
        </p>
        
    </div>
</template>


<script>
export default {
    name:"EachCountry",
    props:{
        data:{
            type: Array
        }
    },
    created(){
        this.border()
    },
    methods:{
        border(){
            if(this.data.borders.length === 0 ){
                return "None"
            } else{
                return this.data.borders.toString()
            }
        }
    }
}
</script>

<style scoped>
#countryInfo{
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 90vh;
    background: lightblue;
}
img{
    margin: 10px;
    width: 35%;
}
p{
    width: 70%;
    margin: auto;
    font-size: 20px;
    line-height: 5vh;
}
h1{
    margin-bottom: 20px;
}
</style>