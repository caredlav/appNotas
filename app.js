const { leerJSON } = require("./funcionesDeTareas");
const { guardarTarea } = require("./funcionesDeTareas");
const { escribirJSON } = require("./funcionesDeTareas");
const { filtrarPorEstado } = require("./funcionesDeTareas");

const op = process.argv[2];

switch (op) {

    case "listar": console.log('Entre a listar:')
        leerJSON();
        break;

    case "crear":
        const title = process.argv[3];
        const newData = {
            titulo: title,
            estado: "pendiente"
        };
        guardarTarea(newData, escribirJSON);
        break;

    case "filtrar":
        const filter = process.argv[3];
        console.log(filtrarPorEstado(filter));
        break;

    case undefined: console.log("Atención - tienes que pasar una acción");
        break;

    default: console.log("No entiendo qué quieres hacer");
}