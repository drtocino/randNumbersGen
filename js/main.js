import cuadradoMedio from "./CuadradoMedio.js";
import productoMedio from "./ProductoMedio.js";
import congruenciaMixto from "./CongruenciaMixto.js";
import congruenciaAditivo from "./CongruenciaAditivo.js";
import CongruenciaMultiplicativo from "./CongruenciaMultiplicativo.js";
import navBar from "./navBar.js";

const nav = new navBar();
const NavBar = document.getElementById("navbar");
NavBar.innerHTML = nav.getNavBar();

document.addEventListener("DOMContentLoaded", () => {
    const CM = document.getElementById("generarCM");
    const PM = document.getElementById("generarPM");
    const CongM = document.getElementById("generarCgM");
    const CA = document.getElementById("generarCA");
    const CMu = document.getElementById("generarCMu");
    if(typeof(CM) != 'undefined' && CM != null){
        const semilla = document.getElementById("semilla1");
        const secCM = document.getElementById("secCM");
        CM.onclick = function generarCM(e){
            e.preventDefault();
            const cm = new cuadradoMedio(semilla.value);
            const res = cm.resultado();
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
            //console.log(row);
        }
    }else{
        if(typeof(PM) != 'undefined' && PM != null){
            const semilla1 = document.getElementById("semilla1");
            const semilla2 = document.getElementById("semilla2");
            const secPM = document.getElementById("secPM");
            PM.onclick = function generarCM(e){
                e.preventDefault();
                const pm = new productoMedio(semilla1.value,semilla2.value);
                const res = pm.resultado();
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
        }else{
            if(typeof(CongM) != 'undefined' && CongM != null){
                const a = document.getElementById("a");
                const c = document.getElementById("c");
                const m = document.getElementById("m");
                const semilla = document.getElementById("semilla1");
                const secCgM = document.getElementById("secCgM");
                CongM.onclick = function generarCongM(e){
                    e.preventDefault();
                    const cgM = new congruenciaMixto(a.value,c.value,m.value,semilla.value);
                    const res = cgM.resultado();
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
            }else{
                if(typeof(CA) != 'undefined' && CA != null){
                    const m = document.getElementById("m");
                    const semilla1 = document.getElementById("x1");
                    const semilla2 = document.getElementById("x2");
                    const secCA = document.getElementById("secCA");
                    //console.log(CA);
                    CA.onclick = function generarCongM(e){
                        e.preventDefault();
                        const ca = new congruenciaAditivo(m.value,semilla1.value,semilla2.value);
                        const res = ca.resultado();
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
                }else{
                    if(typeof(CMu) != 'undefined' && CMu != null){
                        const m = document.getElementById("m");
                        const a = document.getElementById("a");
                        const semilla1 = document.getElementById("x1");
                        CMu.onclick = function generarCongM(e){
                            e.preventDefault();
                            const cmu = new CongruenciaMultiplicativo(m.value,a.value,semilla1.value);
                            const res = cmu.resultado();
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
                }
            }
        }
    }
});