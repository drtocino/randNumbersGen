export default class congruenciaAditivo{
    constructor(m,x,y){
        this.m = parseInt(m);
        this.x = parseInt(x);
        this.y = parseInt(y);
    }
    resultado(){
        let x = [this.y];
        let y = [this.y];
        let res = [this.x];
        let sum = 0;
        for (let i = 1; i <= 11; i++) {
            x[i] = res[i-1];
            y[i] = x[i-1];
            sum = (x[i] + y[i]);
            res[i] = sum % this.m;
        }
        return {
            m: this.m,
            x: x,
            y: y,
            res: res
        };
    }
    generarCongAditivo(){
        const res = this.resultado();
        secCA.innerHTML = '';
        for (let r = 1; r < res.res.length - 1; r++) {
            var row = secCA.insertRow(r-1);
            var num = row.insertCell(0);
            var Xn = row.insertCell(1);
            var Xn2 = row.insertCell(2);
            var suma = row.insertCell(3);
            var rand = row.insertCell(4);
            num.innerHTML = r;
            Xn.innerHTML = res.x[r];
            Xn2.innerHTML = res.y[r];
            suma.innerHTML = res.x[r] + res.y[r];
            rand.innerHTML = res.res[r];
        }
    }
}