import { CRUD } from "./Crud.js";
function App(){
    let crud = new CRUD("numeros");
    crud.Create("ramirez");
    console.log(crud.ReadAll());
}

App();