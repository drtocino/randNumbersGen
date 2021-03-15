export default class Validador{
    constructor(){

    }
    validar(semilla){
        semilla.onkeyup = function validacion(){
            var allowed = "0123456789";
            var t;
            for (var i = 0; i<semilla.value.length; i++){
                t = semilla.value.charAt(i);
                if (allowed.indexOf(t)<0){
                    var rep = changeChar(t);

                    if (allowed.indexOf(rep)<0) rep = '';
                    semilla.value = semilla.value.split(t).join(rep);
                    //changed = true;
                }
            }
            function changeChar(c){
                var def = "";
                var pos = def.indexOf(c);
                if (pos>=0){
                    if (pos < (def.length - 2))
                    if (def.charAt(pos+1)=='|') return def.charAt(pos+2);
                }
                return c;
            }
        }
    }
}