export default{
    state:{
        oro_total :0,
        sumar_info: ["Tu oro es cero"]
    },
    sumar_oro(nuevoPtje) {
        this.state.oro_total = this.state.oro_total + nuevoPtje;        
    },
    sumar_info(actividad){
        this.state.sumar_info.push(actividad);
    }
}