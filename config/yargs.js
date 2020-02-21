const equipo = {
    demand: true,
    alias: 'e',
    desc: 'Poner la descripcion que va a tener la tarea'
};

jugadores = {
    alias: 'j',
    default: 11,
    desc: 'Cantidad de jugadores del equipo a crear'
};

const argv = require('yargs')
    .command(
        'crear',
        'Metodo para crear ', {
            equipo,
            jugadores
        }
    )
    .command(
        'listar',
        'Metodo para listar los equipos guardados'
    )
    .command(
        'update',
        'Metodo para actualizar los registros ', {
            equipo,
            jugadores
        }
    )
    .command(
        'borrar',
        'Metodo para borrar el registro enviado ', {
            equipo
        }
    )
    .help()
    .argv;

module.exports = {
    argv
};