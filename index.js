import { CRUD } from "./Crud.js";
function App(){
    let crud = new CRUD("numeros");
    crud.Create("ramirez");
    crud.Create("Juan");
    crud.Update(1, "Sebastian");
    console.log(crud.ReadAll());
}

App();