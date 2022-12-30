//Primera pre-entrega
//La idea es calcular el promedio de edad de una clase pero solo de los hombres



/* const alumno1 = {
    edad: 20,
    sexo: `M`
}

const alumno2 = {
    edad: 22,
    sexo: `M`
}

const alumno3 = {
    edad: 10,
    sexo: `M`
}

const alumno4 = {
    edad: 20,
    sexo: `F`
}

const alumno5 = {
    edad: 20,
    sexo: `F`
}

const listaDeAlumnos = [alumno1, alumno2, alumno3, alumno4, alumno5];

const promedioHombres = (listaDeAlumnos) => {
    let suma = 0;
    let i = 0
    listaDeAlumnos.forEach((alumno) => {
        if(alumno.sexo === `M`) {
            suma += alumno.edad;
            i++;
        }
    });
    return suma / i;
} */







//Segunda pre-entrega

/* const productos = [
    {
        "producto": "Assassins Creed: Odyssey",
        "precio" : "$60",
        "stock" : "disponible"
    },

    {
        "producto": "Call of Duty - Modern Warfare 2",
        "precio" : "$70",
        "stock" : "disponible"
    },

    {
        "producto": "Days Gone",
        "precio" : "$40",
        "stock" : "No disponible"
    },

    {
        "producto": "Death Stranding",
        "precio" : "$60",
        "stock" : "No disponible"
    },

    {
        "producto": "Far Cry 6",
        "precio" : "$30",
        "stock" : "disponible"
    },

    {
        "producto": "Fifa 22",
        "precio" : "$70",
        "stock" : "disponible"
    },

    {
        "producto": "Ghost of Tsushima",
        "precio" : "$20",
        "stock" : "disponible"
    },

    {
        "producto": "SpiderMan - Miles Morales",
        "precio" : "$70",
        "stock" : "No disponible"
    },

    {
        "producto": "Horizon: Forbbiden West",
        "precio" : "$60",
        "stock" : "No disponible"
    },

    {
        "producto": "Metal Gear Solid",
        "precio" : "$10",
        "stock" : "disponible"
    },

    {
        "producto": "Call Of Duty: Modern Warfare",
        "precio" : "$50",
        "stock" : "disponible"
    },

    {
        "producto": "Saint Row",
        "precio" : "$30",
        "stock" : "No disponible"
    },

]; */


//supongamos que quiero encontrar un juego en específico, por ejemplo del Days Gone:

const juego = productos.find(juego => juego.producto === "Days Gone") ;


//Para ver el listado de productos:

/* productos.forEach ((juegos) => {
    console.log(juegos)
}) */



//Ahora quiero ordenar de forma alfabetica el nuevo array:

/* const videoJuegos = ["F1" , "MultiVersus" , "Uncharted" , "Infamous" , "GTA" , "Fifa 23" , "God Of War"]

const juegosOrdenAlfabetico = [...videoJuegos].sort((a , b) => {
    if ( a < b ){
        return -1
    } else if ( a > b ){
        return 1
    } else {
        return 0
    }

}) */








//Tercera pre-entrega

//Agregandole el dark mode a la página web


const darkmode = document.getElementById( "darkmode" );
darkmode.addEventListener("click", function(){
    if( document.body.classList.contains("dark") ){
        document.body.classList.remove("dark");
    }else{
        document.body.classList.add("dark");
    }
});