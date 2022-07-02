
button = document.querySelector("button");

function multiplicacion() {
    quantity = document.querySelector("#cantidad").value;
    resultado = quantity * 20000000;
    Colores = document.querySelector("#color").value;
    Numero = new Intl.NumberFormat('de-DE').format(resultado);

    if(isNaN(quantity)){
        quantity = "colocar numeros validos";
        quantity = 0;
        resultado =0;

        document.querySelector("#result").textContent = resultado;
        document.querySelector("#quantitys").textContent = quantity;
    }else {
        document.querySelector("#result").textContent = Numero;
        document.querySelector("#quantitys").textContent = quantity;
    }
    
document.querySelector(".muestra-color").style.backgroundColor = Colores;

if(Colores){
    document.querySelector(".muestra-color").style.border = "1px solid black"
}
};






