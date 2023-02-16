document.addEventListener("DOMContentLoaded", () => {

    const urlBase = "assets/fotos";
    const fragment = document.createDocumentFragment;//esto ayuda al rendimiento de la web

    const pintarBanner = (donde, que) => {
        //No poner nombres de etiquetas del html a las variables en java
        const foto = document.querySelector("#foto img");
        const arrayFotos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
        const arrayAlts = ["foto 1", "foto 2", "foto 3", "foto 4"];

        const indice=Math.floor(Math.random()*arrayFotos.length);

        foto.src = `${urlBase}/banner/${arrayFotos[indice]}`;
        foto.alt = arrayAlts[0];
    }

    const pintarRecomendados = () => {
        const recomendados = document.querySelector("recomendados");

        const arrayCards = [
            ["viajes-1.jpg", "viaje uno", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi laborum illo, nostrum ipsa optio aliquam iusto ipsam. Recusandae laboriosam, deserunt maiores corrupti velit facilis illum, quo blanditiis atque culpa inventore?"],
            ["viajes-2.jpg", "viaje dos", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi laborum illo, nostrum ipsa optio aliquam iusto ipsam. Recusandae laboriosam, deserunt maiores corrupti velit facilis illum, quo blanditiis atque culpa inventore?"],
            ["viajes-3.jpg", "viaje tres", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi laborum illo, nostrum ipsa optio aliquam iusto ipsam. Recusandae laboriosam, deserunt maiores corrupti velit facilis illum, quo blanditiis atque culpa inventore?"]
        ]
        //recorrer el array con forEach
        //el item corresponde a los subarrays
        arrayCards.forEach((item) => {
            const card = document.createElement("ARTICLE");
            card.classList.add("card");
            const cardImg = document.createElement("IMG");
            cardImg.src = `${urlBase}/viajes/${item[0]}`;
            cardImg.setAttribute("alt", item[1]);
            cardImg.classList.add("img-fluid");//clase img-fluid
            const cardH3 = document.createElement("H3");
            cardH3.textContent = (item[1]);//h3 es una etiqueta, queremos asignarle el contenido de texto
            const cardP = document.createElement("P");
            cardP.textContent = (item[2]);//p es una etiqueta, queremos asignarle el contenido de texto.

            //append permite tanto texto como etiquetas, el appendChild solo etiquetas
            recomendados.append(card);
            card.append(cardImg);
            card.append(cardH3);
            card.append(cardP);
            //es lo mismo que : card.append(cardImg,cardH3,cadP)

            //el fragment es una coleccion de elementos del DOM. En lugar de que los card se añadan al Dom, los añadimo al fragmet y lo añadimos directamente al DOM
            fragment.append(card);//aqui metemos todo en el fragmento
        }
        )

        recomendados.append(fragment);//aqui vacia el fragment

    }

    const pintarDestinos = () => {

    }

    pintarBanner()
})//LOAD