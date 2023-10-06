import { CRUD } from "./Crud.js";
function App(){
    let nombre = new CRUD("nombre");
    nombre.Create("juan");
    console.log(nombre.ReadAll());
}

App();