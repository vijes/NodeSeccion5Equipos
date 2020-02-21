// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

const metodosAdministrar = require('./gestor/metodos-administracion');

console.log(argv);

let command = argv._[0];

switch (command) {
    case 'crear':
        console.log('Tarea para crear'.white);
        metodosAdministrar.crearEquipo(argv.equipo, argv.jugadores);
        break;
    case 'listar':
        console.log('Listar las tareas'.white);
        metodosAdministrar.listarEquipos();
        break;
    case 'update':
        console.log('Actualizar las tareas'.white);
        metodosAdministrar.update(argv.equipo, argv.jugadores);
        break;
    case 'borrar':
        console.log('Borrar las tareas'.white);
        metodosAdministrar.borrar(argv.equipo);
        break;
    default:
        break;
};