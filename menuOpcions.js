import readline from "readline";
import {v4 as uuidv4} from "uuid";
import createNewDatabase from "./createDatabase.js";
import createNewStudent from "./createStudent.js";


const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const preguntar = () => interfaz.question("porfavor ingrese una opcion\n1-crear base datos\n2-crear estudiante\n3-actualizar estudiante\n4-borrar estudiante\n5-ver todos los estudiantes\n6-contar todos los estudiantes\n7-salir",(op) => {

    switch (parseInt(op)) {
        case 1:
        
        interfaz.question("porfavor ingrese el nombre del estudiante: ",(nombre) => {
            interfaz.question("porfavor ingrese el apellido: " ,(apellido) => {
                interfaz.question("porfavor ingrese la carrera: ",(carrera) => {
                    interfaz.question("ingrese la edad" , (edad) => {
                        const students = {
                            students: [
                                {
                                    id: uuidv4(),
                                    name: nombre,
                                    lastname: apellido,
                                    carrer: carrera,
                                    edad: parseInt(edad)
                                }
                            ]
                        }

                        createNewDatabase(students)
                    })
                })
            })
        })

            break;
        case 2: 

        interfaz.question("porfavor ingrese el nombre del estudiante: ",(nombre) => {
            interfaz.question("porfavor ingrese el apellido: " ,(apellido) => {
                interfaz.question("porfavor ingrese la carrera: ",(carrera) => {
                    interfaz.question("ingrese la edad" , (edad) => {
                        const students = {
                                    id: uuidv4(),
                                    name: nombre,
                                    lastname: apellido,
                                    carrer: carrera,
                                    edad: parseInt(edad)
                                }


                        createNewStudent(students)
                    })
                })
            })
        })

        break;
    
        default:
            break;
    }
})


preguntar()