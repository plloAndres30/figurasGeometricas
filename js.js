var Figura; var Dimension1; var Dimension2; var area;
Figura=prompt("Ingrese el nombre de la figura al cual le va a calcular la dimencion \n Cuadrado \n Triangulo \n Circulo");

switch (Figura) {
    case "cuadrado":
        Dimension1=parseInt(prompt("Ingrese el valor del primer lado del "+Figura));
        Dimension2=parseInt(prompt("Ingrese el valor del segundo lado del "+Figura));
        area=Dimension1*Dimension2;
        alert("El area del "+Figura+" es de "+area);
    break;
    case "triangulo":
        Dimension1=parseInt(prompt("Ingrese el valor de la base del "+Figura));
        Dimension2=parseInt(prompt("Ingrese el valor de la altura del "+Figura));
        area=2/Dimension1*Dimension2;
        alert("El area del "+Figura+" es de "+area);
    break;
    case "circulo":
        Dimension1=parseInt(prompt("Ingrese el valor del radio del "+Figura));
        area=3.1416*(Dimension1*Dimension1);
        alert("El area del "+Figura+" es de "+area);
    break;
    default:
        alert("la figura geometrica ingresada no es valida");
        break;
}