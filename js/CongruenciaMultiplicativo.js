export default class congruenciaAditivo{
    constructor(m,a,x){
        this.m = parseInt(m);
        this.x = parseInt(x);
        this.a = parseInt(a);
    }
    resultado(){
        let x = [this.x];
        let res = [this.x];
        let prod = 0;
        for (let i = 1; i <= 11; i++) {
            x[i] = res[i-1];
            console.log(x[i]);
            prod = (x[i] * this.a);
            res[i] = prod % this.m;
        }
        return {
            m: this.m,
            x: x,
            res: res
        };
    }
    generarCongMult(){
        const res = this.resultado();
        secCMu.innerHTML = '';
        for (let r = 1; r < res.res.length - 1; r++) {
            var row = secCMu.insertRow(r-1);
            var num = row.insertCell(0);
            var Xn = row.insertCell(1);
            var Xna = row.insertCell(2);
            var rand = row.insertCell(3);
            num.innerHTML = r;
            Xn.innerHTML = res.x[r];
            Xna.innerHTML = res.x[r]*a.value;
            rand.innerHTML = res.res[r];
        }
    }
}