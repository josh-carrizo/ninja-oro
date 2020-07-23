export default{
    state:{
        oro_total :0,
        historiales: [],

    },
    sumar_oro(nuevoPtje) {
        this.state.oro_total = this.state.oro_total + nuevoPtje;  
 
    },
    historiales(actividad){
        this.state.historiales.push(actividad);
    },
    default_data(){
        this.state.oro_total = 0,
        this.state.historiales = []
    }
}
