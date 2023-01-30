<template>
    <div class="container-fluid p-5 bg-primary text-white text-center"
        style="justify-content: space-between;margin-bottom: 20px;">
        <h1>Caio Movies</h1>
        <p>Mostraremos aqui uma lista de filmes populares</p>
        <label>Escolha o ano de lançamento: </label>
        <select id="selectYear" @change="changeYear()">
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
        </select>
    </div>
</template>

<script>
import eventBus from '@/eventBus';

export default {
    methods: {
        changeYear(){
            var ano = document.querySelector('#selectYear').value
            //console.log(ano)
            eventBus.$emit('changeYear',ano)

        }
    }
}
</script>