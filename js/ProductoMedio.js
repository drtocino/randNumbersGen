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
    generarProdMedio(){
        const res = this.resultado();
        secPM.innerHTML = '';
        for (let r = 0; r < res.res.length - 1; r++) {
            var row = secPM.insertRow(r);
            var num = row.insertCell(0);
            var Xn = row.insertCell(1);
            var Xm = row.insertCell(2);
            var Xnx = row.insertCell(3);
            var rand = row.insertCell(4);
            num.innerHTML = r+1;
            Xn.innerHTML = res.x[r];
            Xm.innerHTML = res.y[r];
            Xnx.innerHTML = res.x[r]*res.y[r];
            rand.innerHTML = res.res[r+1];
        }
    }
}