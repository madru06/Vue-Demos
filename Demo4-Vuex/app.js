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
    </div>
    `,
    computed:{
        /*numero(){
            return store.state.numero;
        }*/
        ...Vuex.mapState(['numero'])
    },
    methods: {
        ...Vuex.mapMutations(['aumentar', 'disminuir'])
    }
});

const store = new Vuex.Store({
    state: {
        numero: 20
    },
    mutations:{
        aumentar(state){
            state.numero ++
        },
        disminuir(state, n){
            state.numero -= n
        }
    }
});

new Vue({
    el: '#app',
    store: store
})