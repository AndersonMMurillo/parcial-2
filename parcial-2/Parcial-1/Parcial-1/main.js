import { cargarColaboradores} from "./colaboradores.js";
import { cargarFooter } from "./footer.js";
import { cargarServicios } from "./servicios.js";
import { mostrar } from "./mostrarelementos.js";
cargarColaboradores();
cargarFooter();
cargarServicios();
document.getElementById('ver-mas').addEventListener('click' , ()=> mostrar());
