export default{
    state:{
        oro_total :0,
        historiales: ["Tu oro es cero"]
    },
    sumar_oro(nuevoPtje) {
        this.state.oro_total = this.state.oro_total + nuevoPtje;        
    },
    historiales(actividad){
        this.state.historiales.push(actividad);
    }
}