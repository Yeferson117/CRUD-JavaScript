export class CRUD{ //se crea la clase CRUD

    #nombreTabla = null; //variables privada que guarda el nombre de la tabla
    #datos = null; //variable privada que guarda el dato ingresado en la tabla

    constructor(nombreTabla = undefined){ //la palabra reservada "Constructor" crea e inicializa un objeto de la clase con la propiedad "nombreTabla", esta indefinida.
        this.#setNombreTabla(nombreTabla);//se llama el metodo "#setNombreTabla" posteriormente creado
        this.#setDatos();//se llama el metodo "#setDatos" posteriormente creado
    }

    #setNombreTabla(nombreTabla){//se crea el metodo "#setNombreTabla" en referencia a su propiedad
        this.#nombreTablaValidada(nombreTabla);//se llama el metodo "#nombreTablaValidada" posteriormente creado
        this.#nombreTabla = nombreTabla;//se le asigna a la variable "#nombreTabla" la propiedad "nombreTabla" de la clase CRUD
    }

    #setDatos(){//se crea el parametro "#setDatos"
        let dataRepository = this.#get(this.#nombreTabla);//se crea la variable "dataRepository" que guarda la "llave" de la variable "#nombreTabla"
        this.#datos = dataRepository === null ? [] : dataRepository;//si se obtiene alguna "llave" la variable "#datos" se convierte en array vacio, si no, guardara lo que halla en "dataRepository" 
    }

    #nombreTablaValidada(nombreTabla){//se crea el metodo "#nombreTablaValidada" en referencia a su propiedad
        if (nombreTabla == undefined) throw new Error ("nombre de tabla requerida");//si nombreTabla no tiene un valor definido, lanzara un error
    }

    #guardar(){//metodo
        let datosAGuardar = JSON.stringify(this.#datos);//la variable "datosAGuardar" guarda #datos y lo convierte en texto
        sessionStorage.setItem(this.#nombreTabla, datosAGuardar);//se asignan las variables #nombreTabla y datosAGuardar en la sesión
    }

    #get(llave){//metodo con el parametro llave
        let datos = sessionStorage.getItem(llave);//la variable "datos" guarda el item "llave" de la sesión
        return JSON.parse(datos);//retorna en texto lo guardado en "datos"
    }

    #elementoExistenteConId(id){//se crea el metodo con el parametro id
        return this.#datos[id] === undefined ? false : true;//si hay id retorna true, si no false
    }

    #verificarElementoExistenteConId(id){
        if (!this.#elementoExistenteConId(id)){
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

    ReadAll(){
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