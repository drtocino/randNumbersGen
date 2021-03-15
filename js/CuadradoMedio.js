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
            if(aux.length < 5){
                medio = aux.substr(1, aux.length-2);
            }else{
                medio = aux.substr(aux.length -4, 3);
            }
            res[i] = parseInt(medio);
        }
        return res;
    }
    generarCuadMedio(){
        const res = this.resultado();
        secCM.innerHTML = '';
        for (let r = 0; r < res.length - 1; r++) {
            var row = secCM.insertRow(r);
            var num = row.insertCell(0);
            var Xn = row.insertCell(1);
            var Xn2 = row.insertCell(2);
            var rand = row.insertCell(3);
            num.innerHTML = r+1;
            Xn.innerHTML = res[r];
            Xn2.innerHTML = Math.pow(res[r],2);
            rand.innerHTML = res[r+1];
        }
    }
}