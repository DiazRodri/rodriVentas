//La idea es calcular el promedio de edad de una clase pero solo de los hombres




const alumno1 = {
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
}