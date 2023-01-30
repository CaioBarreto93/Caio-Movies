<template>
    <div v-if="visible" class="modal-open" id="divModal">

        <!-- The Modal -->
        <div class="modal show" id="myModal" style="display:block" aria-modal="true" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header" :style="backImg()">
                        <h4 class="modal-title">{{data.title}} - Detalhes</h4>
                        <button type="button" class="btn-close" @click.stop.prevent="visible=false"></button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <p>Filme ID = {{data.id}}</p>
                        <p>Titulo Orignal = "{{ data.original_title }}"</p>
                        <p>Linguagem Original = {{ data.original_language }}</p>
                        <p>Popularidade = {{ data.popularity }}</p>
                        <p>Nota do Publico = {{ data.vote_average }}</p>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" @click.stop.prevent="visible=false">Close</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import api from './api.js';
import eventBus from '@/eventBus';

export default {
    data() {
        return {
            data: [],
            visible: false,
            id: null
        }
    },
    methods: { async getData(move) {
            try {
                console.log(move) 
                const filme = "/movie/"+move+"?api_key=09ad0209384e49f67e81766b6590378a&language=pt-BR";
                const response = await api.get(filme);
                console.log(response.data);
                this.data = response.data;
            }
            catch (error) {
                console.error(error);
            }
        },
        getURL(item) {
            return "https://image.tmdb.org/t/p/w500" + item;
        },
        backImg(){
            return "background-image: url("+this.getURL(this.data.backdrop_path)+"); height: 200px;color:green;"
        }
    },
    created() {
        var vm = this
        eventBus.$on('openModal', function (id) {
            //console.log(id)
            vm.visible = true
            vm.id=id
            //console.log(vm.id)            
            vm.getData(id)
        })
        
    }
}
</script>