do {
    var nota = prompt("introduce un anota")
    if (Number(nota) == nota) {
        if (nota > 0 && nota <= 10) {
            if (nota < 3) {
                alert("Muy deficiente");
            }
            else if (nota < 5) {
                alert("Insuficiente");
            }
            else if (nota < 6) {
                alert("nota suficiente");
            }
            else if (nota < 7) {
                alert('bien');
            }
            else if (nota < 9) {
                alert('notable');5
            }
            else if (nota >= 9) {
                alert('sobresaliente');
            }
        }
        else {
            alert('Nota erronea')
        }
    }
    else {
        if (nota != undefined) {
            alert('Introduce un numero valido');
        }
    }
}
while (nota != undefined);