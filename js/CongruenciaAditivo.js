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
        for (let i = 1; i <= 10; i++) {
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
}