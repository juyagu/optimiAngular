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

let parrafo1 = document.getElementById('parrafo')
let parrafo1_bis = document.querySelector('#parrafo')

 //let parrafo2 = document.querySelector('.parrafo2')
let parrafo2 = document.querySelectorAll('.parrafo2') // coleccion de objetos
let parrafo2_bis = document.getElementsByClassName("parrafo2") // coleccion de objetos

let parrafos = document.getElementsByTagName('p');
parrafos[0].style.background = "pink";



let comida: string = 'Hamburguesa'
let calorias: number = 300;
let sabor: boolean = true;


parrafo1.innerHTML = `Se están sirviendo las ${comida}, que tiene ${calorias} calorías`


class Menu{
    items: Array<string>;
    display:string = '';
    constructor(item_list: Array<string>){
        this.items = item_list
    }

    servirMenu():void{
        this.display += '<ul>';
        for(let i = 0;i<this.items.length;i++){
            this.display += `<li>${this.items[i]}</li>`
        }
        this.display += '</ul>'
        document.querySelector('.display').innerHTML = this.display
    }
}

let menuLunes = new Menu(['panqueques','Hamburguesas','ensalada de frutas'])
menuLunes.servirMenu()


