const db = require("./tareas.json");
const fs = require("fs");

const leerJSON = () => {
    db.forEach(function (item) {
        console.log(item);
    })
};

//create the function that will write over the JSON file
const escribirJSON = (status) => {
    dataJSON = JSON.stringify(status);
    fs.writeFileSync("./tareas.json", dataJSON, { encoding: "utf-8" });
};

//create the function that will receive the object to add and will make a callback for escribirJSON
const guardarTarea = (object, callback) => {
    db.push(object);
    callback(db);
};

//create the function that will filter the status, typed by the user and search it into the JSON file
const filtrarPorEstado = (estado) => {
    let filterByStatus = db.filter(function (item) {
        return estado == item.estado;
    })
    return filterByStatus;
}

module.exports = { leerJSON, guardarTarea, escribirJSON, filtrarPorEstado };