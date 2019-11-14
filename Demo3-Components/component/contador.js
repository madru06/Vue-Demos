Vue.component('contador',{
    template: //html
    `
    <div class="container">
        <h3>{{numero}}</h3>
        <button @click="numero++">+</button>
    </div>
    `,
    data(){
        return{
            numero: 0
        }
    }
});