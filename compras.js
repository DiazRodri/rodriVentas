const alumno1 = {
    edad: 30,
    sexo: `M`
}

const alumno2 = {
    edad: 12,
    sexo: `M`
}

const alumno3 = {
    edad: 67,
    sexo: `M`
}

const alumno4 = {
    edad: 29,
    sexo: `F`
}

const alumno5 = {
    edad: 85,
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




