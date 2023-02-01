<template>
    <div class="row" style="justify-content: space-between;">
        
        <div class="card" style="width:300px; margin-bottom: 20px;" v-for="item in data" :key="item.id">
            <img class="card-img-top" style="margin-top: 2px;" :src=getURL(item.poster_path) alt="Card image">
            <div class="card-body">
                <h4 class="card-title">{{ item.title }}</h4>
                <p class="card-text">{{ item.overview }}</p>
                <button class="btn btn-primary" @click.stop.prevent="OpenModal(item.id)">Detalhes</button>
            </div>
        </div>
    </div>
</template>

<script>
import api from './api.js'


export default {
    data() {
        return {
            data: []
        };
    },
    computed:{
        year(){
            return this.$store.state.year
        }
    },
    watch: {
        year (newYear){
            this.getData(newYear)
        }
    },
    methods: {
        OpenModal(id) {
            //console.log(id)
            //eventBus.$emit('openModal',id)
            this.$store.commit('changeID',id)
                        
        },
        getURL(item) {
            return "https://image.tmdb.org/t/p/w500" + item;
        },
        async getData(ano=new Date().getFullYear()) {
            try {
                const filmefilter = "discover/movie?api_key=09ad0209384e49f67e81766b6590378a&language=pt-BR&sort_by=popularity.desc&include_adult=true&page=1&primary_release_year="+ano+"&vote_count.gte=4";
                const response = await api.get(filmefilter);
                //console.log(response.data.results);
                this.data = response.data.results;
            }
            catch (error) {
                console.error(error);
            }
        }
    },
    created() {
        this.getData();      
    }
    
}
</script>
