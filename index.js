import { CRUD } from "./Crud.js";
function App(){
    let crud = new CRUD("numeros");
    crud.Create("ramirez");
    crud.Create("Juan");
    crud.Delete(0);
    console.log(crud.ReadAll());
}

App();