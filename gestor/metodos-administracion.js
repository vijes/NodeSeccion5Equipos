const colors = require('colors');
const fs = require('fs');
let listaEquipos = [];

const cargarDB = () => {

    try {
        listaEquipos = require('../DB/equipos.json');
    } catch (error) {
        listaEquipos = [];
    }

};

const actualizarDB = () => {
    fs.writeFile('./DB/equipos.json', JSON.stringify(listaEquipos), (err) => {
        if (err) throw new Error('Error al crear el archivo');
    });
};
const crearEquipo = (nombreEquipo, numeroJugadores) => {
    console.log(`Metodo para crear el equipo ${nombreEquipo} - ${numeroJugadores}`);
    cargarDB();
    let equipo = {
        nombreEquipo,
        jugadores: numeroJugadores
    }
    listaEquipos.push(equipo);
    actualizarDB();
    console.log(colors.cyan(listaEquipos));


};

const listarEquipos = () => {
    cargarDB();
    if (listaEquipos.length === 0) {
        console.log('No existen equipos registrados'.red);
    } else {
        listaEquipos.forEach(equipo => {
            console.log('***************************');
            console.log(`*****Equipo:    ${equipo.nombreEquipo}`);
            console.log(`*****Jugadores: ${equipo.jugadores}`);
        });
        console.log('***************************');
    }
};

const update = (nombreEquipo, jugadores) => {
    cargarDB();
    let indexEquipo = listaEquipos.findIndex(equipo => equipo.nombreEquipo === nombreEquipo);

    listaEquipos[indexEquipo].jugadores = jugadores;

    actualizarDB();
};

const borrar = (nombreEquipo) => {
    cargarDB();
    let equiposActualizados = listaEquipos.filter(equipo => equipo.nombreEquipo != nombreEquipo);
    listaEquipos = equiposActualizados;
    actualizarDB();
};

module.exports = {
    crearEquipo,
    listarEquipos,
    update,
    borrar
};