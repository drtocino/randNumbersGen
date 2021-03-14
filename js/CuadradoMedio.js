export default class cuadradoMedio{
    constructor(x){
        this.x = x;
    }
    resultado(){
        let res = [this.x];
        let aux = "";
        let medio = "";
        let pow = 0;
        for (let i = 1; i <= 10; i++) {
            pow = Math.pow(res[i-1],2);
            aux = pow.toString();
            //console.log(aux);
            if(aux.length < 5){
                medio = aux.substr(1, aux.length-2);
            }else{
                medio = aux.substr(aux.length -4, 3);
            }
            //console.log(medio);
            res[i] = parseInt(medio);
        }
        

        return res;
    }
}

//export class CuadradoMedio {resultado};