const app = new Vue({
    el: '#app',
    data: {
        titulo: 'To Do List con VueJS',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            console.log(this.tareas);
            this.nuevaTarea = '';
            localStorage.setItem('gym-con-vue', JSON.stringify(this.tareas));
        },
        editarEstado(index){
            this.tareas[index].estado = true;
            localStorage.setItem('gym-con-vue', JSON.stringify(this.tareas));
        },
        eliminarTarea(index){
            this.tareas.splice(index, 1);
            localStorage.setItem('gym-con-vue', JSON.stringify(this.tareas));
        }
    },
    created: function(){
        let datosLS = JSON.parse(localStorage.getItem('gym-con-vue'));
        if (datosLS == null) {
            this.tareas = [];
        }else {
            this.tareas = datosLS;
        }
    }
});