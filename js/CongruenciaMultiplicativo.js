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
}