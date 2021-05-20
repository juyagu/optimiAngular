/*
var - let - const
Javascript => lenguaje debilmente tipado o de tipado dinámico
Typescript => lenguaje fuertemente tipado
Angular usa Typescript => Angular es fuertemente tipado
*/
/*
querySelector => #[id] .[class] [elemento html]
getElementById
getElementsByTagName
getElementsByClassName
*/
var parrafo1 = document.getElementById('parrafo');
var parrafo1_bis = document.querySelector('#parrafo');
//let parrafo2 = document.querySelector('.parrafo2')
var parrafo2 = document.querySelectorAll('.parrafo2'); // coleccion de objetos
var parrafo2_bis = document.getElementsByClassName("parrafo2"); // coleccion de objetos
var parrafos = document.getElementsByTagName('p');
parrafos[0].style.background = "pink";
var comida = 'Hamburguesa';
var calorias = 300;
var sabor = true;
parrafo1.innerHTML = "Se est\u00E1n sirviendo las " + comida + ", que tiene " + calorias + " calor\u00EDas";
var Menu = /** @class */ (function () {
    function Menu(item_list) {
        this.display = '';
        this.items = item_list;
    }
    Menu.prototype.servirMenu = function () {
        this.display += '<ul>';
        for (var i = 0; i < this.items.length; i++) {
            this.display += "<li>" + this.items[i] + "</li>";
        }
        this.display += '</ul>';
        document.querySelector('.display').innerHTML = this.display;
    };
    return Menu;
}());
var menuLunes = new Menu(['panqueques', 'Hamburguesas', 'ensalada de frutas']);
menuLunes.servirMenu();
