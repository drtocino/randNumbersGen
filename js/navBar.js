export default class navBar{
    constructor(){
        //this.setTitle("Inicio");
    }

    getNavBar(){
        return `
    <div class="container-fluid">
        <a class="navbar-brand" href=".." data-link>
            <img src="../icons/dices.svg" class="" height="30rem">
            Random Numbers
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href=".." data-link>Inicio</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle active" href="" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Metodos
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li>
                            <a class="dropdown-item" href="../cuadradoMedio" data-link>Cuadrado Medio</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="../productoMedio" data-link>Producto Medio</a>
                        </li>
                        <li><hr class="dropdown-divider" /></li>
                        <li>
                            <a class="dropdown-item" href="../congruenciaMixto" data-link>Congruencia Mixto</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="../congruenciaAditivo" data-link>Congruencia Aditivo</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="../congruenciaMultiplicativo" data-link>Congruencia Multiplicativo</a>
                        </li>
                    </ul>
                </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Info</a>
            </li>
            </ul>
        </div>
    </div>
        `;
    }
}