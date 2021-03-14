export default class productoMedio{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    resultado(){
        let x = [this.x];
        let y = [this.y];
        let res = [this.x];
        let aux = "";
        let medio = "";
        let prod = 0;
        for (let i = 1; i <= 10; i++) {
            prod = x[i-1] * y[i-1];
            aux = prod.toString();
            //console.log(prod)
            if(aux.length < 5){
                medio = aux.substr(1, aux.length-2);
            }else{
                medio = aux.substr(aux.length -4, 3);
            }
            x[i] = parseInt(y[i-1]);
            y[i] = parseInt(medio);
            res[i] = parseInt(medio);
        }
        
        return {
            x: x,
            y: y,
            res: res
        };
    }
}