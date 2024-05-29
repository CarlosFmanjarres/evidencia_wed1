// Array para almacenar usuarios y contraseñas
let usuarios = [
    { usuario: 'usuario1', contraseña: '123456' },
    { usuario: 'usuario2', contraseña: 'abcdef' }
];

// Función para verificar credenciales de inicio de sesión
function iniciarSesion(usuario, contraseña) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === usuario && usuarios[i].contraseña === contraseña) {
            return true; // Credenciales válidas
        }
    }
    return false; // Credenciales inválidas
}

// Función para calcular la nómina de un empleado
function calcularNomina(salarioPorHora, horasTrabajadas) {
    const salarioTotal = salarioPorHora * horasTrabajadas;
    const impuestos = salarioTotal * 0.15; // Suponiendo un 15% de impuestos
    const salarioNeto = salarioTotal - impuestos;
    return salarioNeto;
}

// Función para agregar un nuevo usuario
function agregarUsuario() {
    const nuevoUsuario = prompt('Ingrese el nuevo usuario:');
    const nuevaContraseña = prompt('Ingrese la nueva contraseña:');
    usuarios.push({ usuario: nuevoUsuario, contraseña: nuevaContraseña });
    console.log(`Usuario agregado: ${nuevoUsuario}`);
}

// Función para agregar horas trabajadas
function agregarHorasTrabajadas() {
    const usuario = prompt('Ingrese el usuario:');
    const contraseña = prompt('Ingrese la contraseña:'); // Almacenar la contraseña en una variable
    const horasTrabajadas = parseInt(prompt('Ingrese las horas trabajadas:'));
    const salarioPorHora = parseFloat(prompt('Ingrese el salario por hora:'));
    if (iniciarSesion(usuario, contraseña)) { // Pasar la contraseña como argumento
        const salarioNeto = calcularNomina(salarioPorHora, horasTrabajadas);
        console.log(`La nómina del empleado es: $${salarioNeto.toFixed(2)}`);
    } else {
        console.log('Credenciales incorrectas. Inicio de sesión fallido.');
    }
}
// Menú principal
while (true) {
    console.log('Menú principal:');
    console.log('1. Agregar usuario');
    console.log('2. Agregar horas trabajadas');
    console.log('3. Salir');
    const opcion = parseInt(prompt('Ingrese una opción:'));
    switch (opcion) {
        case 1:
            agregarUsuario();
            break;
        case 2:
            agregarHorasTrabajadas();
            break;
        case 3:
            console.log('Saliendo...');
            // Utilizamos 'break;' para salir del bucle while
            break;
        default:
            console.log('Opción inválida. Intente nuevamente.');
    }
}
