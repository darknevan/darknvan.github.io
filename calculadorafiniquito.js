

function suma()
{
    var t1 = document.getElementById("sueldo diario");
    var salario = parseInt(t1.value);
    
    var t2 = document.getElementById("diasaguinaldo");
    var diasaguinaldo = parseInt(t2.value);

    var t3 = document.getElementById("mesestrabajados");
    var meses = parseInt(t3.value);

    var t4 = document.getElementById("diasvacaciones");
    var diasvacaciones = parseInt(t4.value);
    
    var proporcionvacaciones = diasvacaciones * salario / 365;
    var diastrabajados = meses * 30;
    var vacacionescorrespondientes = proporcionvacaciones * diastrabajados;
    var primavacacional = (vacacionescorrespondientes / 100) * 25;
    var cantidadaguinaldo = salario  * diasaguinaldo;
    var aguinaldoproporcional = (cantidadaguinaldo / 365) * diastrabajados;

    var finiquitototal = aguinaldoproporcional + vacacionescorrespondientes + primavacacional;
    
    alert("tu finiquito corresponde a " + (Math.floor(finiquitototal)) + " pesos Méxicanos");
}








