Vue.component('titulo',{
    template: //html
    `
    <div>
        <h1>Numero en padre: {{$store.state.numero}}</h1>
        <hijo></hijo>
    </div>
    `
});

Vue.component('hijo',{
    template:  //html
    `
    <div>
        <button class='btn btn-primary' @click="aumentar">+</button>
        <button class='btn btn-info' @click="disminuir(2)">-</button>
        <h1>Numero en hijo: {{$store.state.numero}}</h1>
        <hr>
        <br/>
        <button class="btn btn-success" @click="getFrutas">Mostrar frutas</button>
        <ul v-for="fruta of frutas">
            <li>{{fruta.nombre}}</li>
        </ul>
    </div>
    `,
    computed:{
        /*numero(){
            return store.state.numero;
        }*/
        ...Vuex.mapState(['numero', 'frutas'])
    },
    methods: {
        ...Vuex.mapMutations(['aumentar', 'disminuir']),
        ...Vuex.mapActions(['getFrutas'])
    }
});

const store = new Vuex.Store({
    state: {
        numero: 20,
        frutas: []
    },
    mutations:{
        aumentar(state){
            state.numero ++
        },
        disminuir(state, n){
            state.numero -= n
        },
        fillFrutas(state, frutasAction){
            state.frutas = frutasAction
        }
    },
    actions: {
        getFrutas: async function({commit}){
            const data = await fetch('frutas.json');
            const frutas = await data.json();
            commit('fillFrutas', frutas)
        }
    }
});

new Vue({
    el: '#app',
    store: store
})