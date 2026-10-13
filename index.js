//1
let Coche = {
    marca: "Seat",
    modelo: "León",
    matricula: "1234ABC"
};

// 2
let Casa = {
    codPostal: 28001,
    calle: "Gran Vía",
    portal: 5,
    piso: 3
};

//3
let FullStackDeveloper = {
    lenguajes: ["JavaScript", "HTML", "CSS", "Node.js"],
    proyectos: ["Bikram Objetos", "API Rest"]
};

// 4
let Perro = {
    nombre: "Toby",
    raza: "Labrador",
    color: "Marrón",
    edad: 4,
    ladrar: function () {
        console.log("¡Guau guau!");
    },
    popo: function () {
        return Math.random() * 3;
    }
};

// 5
let marcaPortatil = Portatil.marca;

// 6
let marcaPortatil2 = Portatil["marca"];

// 7
let grupos = Concierto.grupos;

// 8
let RGB = [Led.rojo, Led.verde, Led.azul];

// 9
Portatil.modelo = "P345";

// 10
Concierto.cartelera.push("Guns N' Roses");

// 11
Concierto.fecha = new Date();

// 12
Impresora.imprimiendo = {
    nombreArchivo: "documento.pdf",
    copias: 3,
    numPaginas: 10
};

// 13
let Noticia = {
    titular: "Última hora: JavaScript sigue dominando la web",
    cuerpo: "El lenguaje de programación más usado del mundo cumple otro año de liderazgo..."
};

// 14
let Persona = {
    nombre: "Héctor",
    apellidos: "García López",
    edad: 28
};

// 15
let Avion = {
    numPasajeros: 180,
    despegar: function () {
        console.log("despegando");
    },
    volar: function () {
        console.log("llegando al destino");
    },
    aterrizar: function () {
        console.log("aterrizando");
    }
};

// 16
let Paquete = {
    contenido: [Coche, Casa, FullStackDeveloper, Perro, Noticia, Persona, Avion, Pais]
};

// 17
let Pais = {
    numHabitantes: 47000000,
    continente: "Europa",
    gentilicio: "español"
};

// 18
let codError = O_Error.codigo;

// 19
let integrantes = Grupo.integrantes;

// 20
let nivelesTinta = Impresora.tinta;

// 21
let pixeles = Pantalla.pixeles;

// 22
let especificaciones = Movil["especificaciones"];

// 23
Grupo.numIntegrantes = 5;

// 24
Pantalla.dimensiones = "1920x1080";

// 25
Led.encendido = !Led.encendido;

// 26
Movil.temperatura = "20º";
