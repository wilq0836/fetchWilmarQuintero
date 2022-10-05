
 const elementoAgregado = document.getElementById("items"); 


function dibujarCarrito() {
  
   
  elementoAgregado.innerHTML = "";
   
  carrito.forEach(
    
      (e) => {    
         
          //let valor = carrito.find(); 
          let renglonesCar = document.createElement("tr");
          
               renglonesCar.innerHTML = `
              <td>${e.marca}</td>
              <td>${e.modelo}</td>
              <td><input id="cantidad-producto-${e.modelo}" type="number" value="${e.cantidad}" min="1" max="1000" step="1" style="width: 50px;"/></td>              
              <td>${e.precio}</td>         
              <td><button id="eliminar-${e.modelo}" type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button></td>
              <td id = "total-${e.modelo}">${e.cantidad*e.precio}</td>    
          `;          

           elementoAgregado.append(renglonesCar);  
           
           

           let sumaProdu = document.getElementById(`cantidad-producto-${e.modelo}`);
           sumaProdu.addEventListener('click', (i) => {
           
           let valor = sumaProdu.value;
           e.cantidad = valor;
           dibujarCarrito();  
           
           });       
           

           let botonEliminarProducto = document.getElementById(`eliminar-${e.modelo}`);
           botonEliminarProducto.addEventListener('click', () => {
           alert("Hicimos click en la posicion  " + carrito.indexOf(e));

              let pocision  =  carrito.indexOf(e);
              carrito.splice( pocision,1);           
              
              dibujarCarrito();
          });
                            

      });
    
};



function totalCompra(){
    let valor = 0;
    carrito.forEach((item)=>{
    
    let totalCompra = document.getElementById(`total-${item.modelo}`);
    total = totalCompra.innerHTML;    
    localStorage.setItem(`${item.modelo}`,total);     
    
    valor = valor + parseInt(localStorage.getItem(`${item.modelo}`));
   
//alert( localStorage.getItem(`${item.modelo}`));  
    });   
    alert("total compra = "+ valor);
    localStorage.clear();   
    impresion.innerHTML ="";
    /*let confirmarCompra = document.createElement("li");
 
    ` <h5> Marca: ${item.marca}</h5>
        <h5> Modelo: ${item.modelo}</h5>
        <h5> Precio: $ ${item.precio}</h5>     
        <h5> Estado: ${item.especificacion}</h5>                  
         `;  */  


    //Aqui se va a confirmar 
    carrito.splice(0,carrito.length);
    dibujarCarrito(); 

};

 /* Swal.fire({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })*/

      

const modal = document.querySelector("#portafolio");
const modal2 = document.querySelector("#componentes")
const modal3 = document.querySelector("#componentes1")
let h ;

function crearModal1(){
    
    h = "Clothes";
    imprimirArticulos();
};


function crearModal(){

h = "Electronics";
imprimirArticulos();

};



function imprimirArticulos (){

    impresion.innerHTML ="";

const pedirPost = async () => {
        const resp =
    
    await fetch(  'https://api.escuelajs.co/api/v1/products')
    
    const data = await resp.json()    
    
    let filtrar = data.filter (item => item.category.name === h );

    
    
    filtrar.forEach((item)=> {

            let cre = document.createElement("div");
            cre.innerHTML = "";
            cre.className = "container";
        
            let botonAgregar = document.createElement("button");
            botonAgregar.className = "btn btn-success";
            botonAgregar.innerText = "Agregar";
        
            let e = document.createElement("div");
             e.innerHTML = `  
             <h5> Marca: ${item.title}</h5>
             <h5> Modelo: ${item.description}</h5>
             <h5> Precio: $ ${item.price}</h5>     
             <h5> Categoria: ${item.category.name}</h5>                  
             `;
             e.className="card-body";
             e.append(botonAgregar);
        
             let imagen = document.createElement("img");
             imagen.src = item.images;  
             imagen.className = "card-img-top";
        
             let carta = document.createElement("div");
              carta.className = "card m-3 p-3";
              carta.style = "width: 20rem";
              carta.append(imagen);
              carta.append(e);
              cre.append(carta);
              impresion.append(cre);  
        
          })
        

        

        
    };

    
pedirPost();    
console.log(electronica);

   
};







    
    
    

     


