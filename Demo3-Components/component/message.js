Vue.component('saludo', {
    template: //html
    `
    <div class="container">
        <h3>{{mensaje}}</h3>
        <h3>Otro mensaje</h3>
    </div>
    `,
    
    data(){
        return {
            mensaje: 'Hey there from template'
        }
    }
});