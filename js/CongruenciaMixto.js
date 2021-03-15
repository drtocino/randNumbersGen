export default class congruenciaMixto{
    constructor(a,c,m,x){
        this.a = parseInt(a);
        this.c = parseInt(c);
        this.m = parseInt(m);
        this.x = parseInt(x);
    }
    resultado(){
        let x = [this.x];
        let res = [this.x];
        let prod = 0;
        for (let i = 1; i <= 10; i++) {
            x[i] = res[i-1];
            prod = (x[i] * this.a) + this.c;
            res[i] = prod % this.m;
        }
        return {
            a: this.a,
            c: this.c,
            m: this.m,
            x: x,
            res: res
        };
    }
    generarCongMixto(){
        const res = this.resultado();
        secCgM.innerHTML = '';
        for (let r = 1; r < res.res.length - 1; r++) {
            var row = secCgM.insertRow(r-1);
            var num = row.insertCell(0);
            var Xn = row.insertCell(1);
            var Xna = row.insertCell(2);
            var rand = row.insertCell(3);
            num.innerHTML = r;
            Xn.innerHTML = res.x[r];
            Xna.innerHTML = (res.x[r]*res.a) + res.c;
            rand.innerHTML = ((res.x[r] * res.a) + res.c)%res.m;
        }
    }
}