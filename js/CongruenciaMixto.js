export default class congruenciaMixto{
    constructor(a,c,m,x){
        this.a = parseInt(a);
        this.c = parseInt(c);
        this.m = parseInt(m);
        this.x = parseInt(x);
    }
    resultado(){
        /*let a = [this.a];
        let c = [this.c];*/
        let x = [this.x];
        let res = [this.x];
        /*console.log(this.a);
        console.log(this.c);
        console.log(this.m);*/
        let prod = 0;
        for (let i = 1; i <= 10; i++) {
            x[i] = res[i-1];
            prod = (x[i] * this.a) + this.c;
            res[i] = prod % this.m;
            //console.log(prod);
            //console.log(res[i]);
            //console.log(x[i]);
        }
        return {
            a: this.a,
            c: this.c,
            m: this.m,
            x: x,
            res: res
        };
    }
}