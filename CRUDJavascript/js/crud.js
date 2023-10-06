export class CRUD{

    #nombreTabla = null;
    #datos = null;

    constructor(nombreTabla = undefined){
        this.#setNombreTabla(nombreTabla);
        this.#setDatos();
    }

    #setNombreTabla(nombreTabla){
        this.#nombreTablaValidada(nombreTabla);
        this.#nombreTabla = nombreTabla;
    }

    #setDatos(){
        let dataRepository = this.#get(this.#nombreTabla);
        this.#datos = dataRepository === null ? [] : dataRepository;

    }

    #nombreTablaValidada(nombreTabla){
        if (nombreTabla == undefined) throw new Error ("nombre de tabla requerida");
    }

    #guardar(){
        let datosAGuardar = JSON.stringify(this.#datos);
        sessionStorage.setItem(this.#nombreTabla, datosAGuardar);
    }

    #get(llave){
        let datos = sessionStorage.getItem(llave);
        return JSON.parse(datos);
    }

    #elementoExistenteConId(id){
        return this.#datos[id] === undefined ? true : false;
    }

    #verificarElementoExistenteConId(id){
        if (this.#elementoExistenteConId(id)){
            throw new Error("este elemento NO existe");
        }
    }

    Create(datos) {
        this.#datos.push(datos);
        this.#guardar();
        return this.#datos.lenght;
    }

    Read(id){
        this.#verificarElementoExistenteConId(id);
        return this.#datos[id];
    }

    ReadAll(id){
        return this.#datos;
    }

    Update(id, datos){
        this.#verificarElementoExistenteConId(id);
        this.#datos[id] = datos;
        this.#guardar();
        return true;
    }

    Delete(id){
        this.#verificarElementoExistenteConId(id);
        this.#datos.splice(id, 1);
        this.#guardar();
        return true;
    }
}