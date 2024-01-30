import validator from "validator";
import express from "express";

const email = "jose@gmail.com";

// verificar si el string es efectivamente un correo
if(validator.isEmail(email) === true ) {
    // ejecutar alguna acción
    console.log("Bienvenido al sistema, estas dentro")
} else {
    console.log("Debes ingresar un email")
}

// const app = express()

// app.get("/", (req, res)=> {
//     res.json({
//         msg: "Hola mundo",
//         status: 200
//     })
// })

// app.listen(4000)


// npm init -> inicializar un proyecto
// npm install -> instala una nueva dependencia dentro del proyecto

