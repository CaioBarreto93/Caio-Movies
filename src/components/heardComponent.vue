<template>
    <div class="container-fluid p-5 bg-primary text-white text-center"
        style="justify-content: space-between;margin-bottom: 20px;">
        <h1>Caio Movies</h1>
        <p>Mostraremos aqui uma lista de filmes populares</p>
        <label>Escolha o ano de lançamento: </label>
        <select id="selectYear" @change="changeYear()">
            <option>{{ ano }}</option>
            <option v-for="n in 10" :key="n">{{ ano - n }}</option>
        </select>
    </div>
</template>

<script>
//import eventBus from '@/eventBus';

export default {
    data() {
        return {
            ano: new Date().getFullYear()
        };
    },
    computed:{
        year(){
            return this.$store.state.year
        }
    },
    methods: {
        changeYear(){
            var ano = document.querySelector('#selectYear').value
            //console.log(ano)
            //eventBus.$emit('changeYear',ano)
            this.$store.commit('changeYear',ano)

        }
    }
}
</script>