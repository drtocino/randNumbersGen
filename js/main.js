import cuadradoMedio from "./CuadradoMedio.js";
import productoMedio from "./ProductoMedio.js";
import congruenciaMixto from "./CongruenciaMixto.js";
import congruenciaAditivo from "./CongruenciaAditivo.js";
import CongruenciaMultiplicativo from "./CongruenciaMultiplicativo.js";
import navBar from "./navBar.js";
import Validador from "./Validador.js";

const nav = new navBar();
const NavBar = document.getElementById("navbar");
NavBar.innerHTML = nav.getNavBar();

document.addEventListener("DOMContentLoaded", () => {
    const CM = document.getElementById("generarCM");
    const PM = document.getElementById("generarPM");
    const CongM = document.getElementById("generarCgM");
    const CA = document.getElementById("generarCA");
    const CMu = document.getElementById("generarCMu");
    const validador = new Validador();
    if(typeof(CM) != 'undefined' && CM != null){
        const semilla = document.getElementById("semilla1");
        const secCM = document.getElementById("secCM");
        validador.validar(semilla);
        CM.onclick = function generarCM(e){
            e.preventDefault();
            const cm = new cuadradoMedio(semilla.value);
            const gen = cm.generarCuadMedio();
        }
    }else{
        if(typeof(PM) != 'undefined' && PM != null){
            const semilla1 = document.getElementById("semilla1");
            const semilla2 = document.getElementById("semilla2");
            const secPM = document.getElementById("secPM");
            validador.validar(semilla1);
            validador.validar(semilla2);
            PM.onclick = function generarCM(e){
                e.preventDefault();
                const pm = new productoMedio(semilla1.value,semilla2.value);
                const gen = pm.generarProdMedio();
            }
        }else{
            if(typeof(CongM) != 'undefined' && CongM != null){
                const a = document.getElementById("a");
                const c = document.getElementById("c");
                const m = document.getElementById("m");
                const semilla = document.getElementById("semilla1");
                const secCgM = document.getElementById("secCgM");
                validador.validar(semilla);
                validador.validar(a);
                validador.validar(c);
                validador.validar(m);
                CongM.onclick = function generarCongM(e){
                    e.preventDefault();
                    const cgM = new congruenciaMixto(a.value,c.value,m.value,semilla.value);
                    const gen = cgM.generarCongMixto();
                }   
            }else{
                if(typeof(CA) != 'undefined' && CA != null){
                    const m = document.getElementById("m");
                    const semilla1 = document.getElementById("x1");
                    const semilla2 = document.getElementById("x2");
                    const secCA = document.getElementById("secCA");
                    validador.validar(m);
                    validador.validar(semilla1);
                    validador.validar(semilla2);
                    CA.onclick = function generarCongM(e){
                        e.preventDefault();
                        const ca = new congruenciaAditivo(m.value,semilla1.value,semilla2.value);
                        const res = ca.generarCongAditivo();
                    }
                }else{
                    if(typeof(CMu) != 'undefined' && CMu != null){
                        const m = document.getElementById("m");
                        const a = document.getElementById("a");
                        const semilla1 = document.getElementById("x1");
                        const secCMu = document.getElementById("secCMu");
                        validador.validar(a);
                        validador.validar(m);
                        validador.validar(semilla1);
                        CMu.onclick = function generarCongM(e){
                            e.preventDefault();
                            const cmu = new CongruenciaMultiplicativo(m.value,a.value,semilla1.value);
                            const res = cmu.generarCongMult();
                        }
                    }
                }
            }
        }
    }
});