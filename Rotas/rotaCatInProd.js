import { Router } from "express"; //micro-aplicação HTTP
import CategoriaCtrl from "../Controle/categoriaCtrl.js";

const catCtrl = new CategoriaCtrl();
const rotaCatInProd = Router();

rotaCatInProd.get("/",catCtrl.consultar);


export default rotaCatInProd;