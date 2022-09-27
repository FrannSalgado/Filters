/* Crear un array de objetos, donde cada objeto será un camión. El objeto tiene la siguiente forma:
  {
      id:
      marca:
      color:
      precio:
  }
 
   Pîntarlos en el DOM con tarjetitas lindas (vuelve CSS)

   Hacer dos selects y dos botones en la parte superior que tengan lo siguiente:
 
  Un select, con las opciones de las marcas de los camiones (tipo, un select que tenga: Mercedes, Ford, Chevrolet, por ejemplo)
  Y un botón para filtrar los camiones que sean de la marca que el usuario eligió en el select

  Otro select, con las opciones de los colores de los camiones (tipo, un select que tenga: Azul, Blanco, Amarillo, Verde)
  Y un botón para filtrar los camiones que tengan el color que el usuario eligió en el select
 
   Obviamente, al apretar los botones, se debe filtrar nuestro array de camiones y pintarlos en el DOM.
 
  Quiero ver esos mini proyectitos a ver qué tan piola quedaron eh!
(Sí, los vamos a ver en vivo, así que ponganle onda, esmero y deditos pa codiar)*/


const camiones = [

    {
        id: 1,
        marca: "Mercedes Benz",
        color: "Rojo",
        precio: 32000,
        img: "./imgs/M-B-Rojo.jpg",
    },
    {
        id: 2,
        marca: "Mercedes Benz",
        color: "Blanco",
        precio: 24900,
        img: "./imgs/M-b-Blanco.jpg",
    },
    {
        id: 3,
        marca: "Mercedes Benz",
        color: "Blanco",
        precio: 38000,
        img: "./imgs/M-b-Blanco.jpg",
    },
    {
        id: 4,
        marca: "Mercedes Benz",
        color: "Azul",
        precio: 27500,
        img: "./imgs/M-B-Azul.jpg",
    },
    {
        id: 5,
        marca: "Mercedes Benz",
        color: "Rojo",
        precio: 28000,
        img: "./imgs/M-B-Rojo.jpg",
    },


    {
        id: 6,
        marca: "Renault",
        color: "Blanco",
        precio: 15000,
        img: "./imgs/Renault-blanco.jpg",
    },
    {
        id: 7,
        marca: "Renault",
        color: "Azul",
        precio: 19500,
        img: "./imgs/Renault-azul.jpg",
    },
    {
        id: 8,
        marca: "Renault",
        color: "Rojo",
        precio: 35800,
        img: "./imgs/Renault-rojo.jpg",
    },
    {
        id: 9,
        marca: "Renault",
        color: "Azul",
        precio: 40000,
        img: "./imgs/Renault-azul.jpg",
    },
    {
        id: 10,
        marca: "Renault",
        color: "Rojo",
        precio: 19800,
        img: "./imgs/Renault-rojo.jpg",
    },


    {
        id: 11,
        marca: "Volvo",
        color: "Azul",
        precio: 18000,
        img: "./imgs/volvo-azul.jpg",
    },
    {
        id: 12,
        marca: "Volvo",
        color: "Azul",
        precio: 25000,
        img: "./imgs/volvo-azul.jpg",
    },
    {
        id: 13,
        marca: "Volvo",
        color: "Rojo",
        precio: 20000,
        img: "./imgs/volvo-rojo.jpg",
    },
    {
        id: 14,
        marca: "Volvo",
        color: "Blanco",
        precio: 15000,
        img: "./imgs/volvo-blanco.jpg",
    },

    {
        id: 15,
        marca: "Volvo",
        color: "Rojo",
        precio: 15000,
        img: "./imgs/volvo-rojo.jpg",
    },
    {
        id: 16,
        marca: "Nissan",
        color: "Blanco",
        precio: 22000,
        img: "./imgs/nissan-blanco.jpg",
    },
    {
        id: 17,
        marca: "Nissan",
        color: "Rojo",
        precio: 18000,
        img: "./imgs/nissan-rojo.jpg",
    },
    {
        id: 18,
        marca: "Nissan",
        color: "Blanco",
        precio: 20000,
        img: "./imgs/nissan-blanco.jpg",
    },
    {
        id: 19,
        marca: "Nissan",
        color: "Azul",
        precio: 25000,
        img: "./imgs/nissan-azul.jpg",
    },
    {
        id: 20,
        marca: "Nissan",
        color: "Negro",
        precio: 40000,
        img: "./imgs/nissan-negro.jpg",
    }




]

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(camiones)
const filtroMarcas = document.getElementById("marcas");
const filtroColores = document.getElementById("colores");
const listaProductos = document.getElementById("productos-lista");
const botonReiniciarFiltros = document.getElementById("reiniciar");
const botonFiltrar = document.getElementById("filtrar");

const CardRender = (array) => {

    array.map(indexer => {
        const card = document.createElement("div");
        card.className = "card";
        card.id = `${indexer.id.toString()}`;
        card.style = `background-image:url(${indexer.img})`;
        listaProductos.appendChild(card);

        const anexarInfo = document.getElementById(`${indexer.id.toString()}`)

        const data = document.createElement("div")
        data.className = "data";
        const marca = document.createElement("h2")
        const precio = document.createElement("h2")
        marca.innerText = indexer.marca;
        precio.innerText = `USD $${indexer.precio};`

        data.appendChild(marca);
        data.appendChild(precio);
        anexarInfo.appendChild(data);
    })





}

const filtrado = (filtro => {
    reiniciar();

    const color = document.getElementById("colores").value;
    const marca = document.getElementById("marcas").value;
    if (color === "" && marca === "") {
        return reiniciar();
    }

    const a = camiones.filter(item => {
        let switchValue = "";

        if (color !== "" && marca === "") {
            switchValue = "color";
        }
        if (color === "" && marca !== "") {
            switchValue = "marca";
        }
        // else {
        //     switchValue = 3;
        // }

        switch (switchValue) {

            case "color":
                if (item.color.toUpperCase() !== color.toUpperCase()) {
                    elementoParaOcultar = document.getElementById(item.id.toString())
                    elementoParaOcultar.className = "ocultar";


                }
                break;

            case "marca":
                if (item.marca.toUpperCase() !== marca.toUpperCase()) {
                    elementoParaOcultar = document.getElementById(item.id.toString())
                    elementoParaOcultar.className = "ocultar";


                }
                break;

            default:
                elementoParaOcultar = document.getElementById(item.id.toString());
                if (item.marca.toUpperCase() === marca.toUpperCase() && item.color.toUpperCase() === color.toUpperCase()) {
                    elementoParaOcultar.className = "card";

                }
                else { elementoParaOcultar.className = "ocultar"; }
                break;


        }





    })



    filtroColores.value = "";
    filtroMarcas.value = "";



});


const reiniciar = (reinicio => {


    const a = camiones.filter(item => {
        const reiniciarElemento = document.getElementById(item.id.toString());
        if (reiniciarElemento.className !== "card") { reiniciarElemento.className = "card" }
        else {
            return
        }
    })

})




botonFiltrar.addEventListener("click", filtrado);
botonReiniciarFiltros.addEventListener("click", reiniciar)

const init = () => {
    CardRender(camiones)
}




init();