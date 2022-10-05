
//llamo los selectores 
const valor = document.getElementById("opcion");
const objeto = document.getElementById("inventario");    
const impresionObjeto = document.getElementById("inventario2");

let obtener;
let obtener2;

   

function cambio1(){
    
objeto.innerHTML="";

let men = document.createElement("h2");
   men.innerHTML =`Seleccione la marca disponible`;
  

   let crear = document.createElement(`select`);
   crear.innerHTML = ""; 
   crear.id = "opcion3";  
   crear.className ="btn btn-secondary btn-sm";//Aqui   

   //Le asigno las marcas disponibles y creo un select
   marcaBicicleta.forEach((item)=>{
       let infor = document.createElement ("option");
       infor.value = item; 
       infor.innerHTML = `${item}`;            
       crear.appendChild(infor);
       
   });
   
   objeto.append(men);
   objeto.append(crear)

   //Llamo el elemento que creo y le asigno un valor a la variable
   const ingreso2 = document.getElementById("opcion3");    
   
   ingreso2.onchange =()=>{
      obtener2 = ingreso2.value;
             

        switch (obtener2){   

           case "scott":            
                 
               productosScott.forEach((item)=> {
               //const llenar = new Bicicleta (item.marca,item.modelo,item.precio,item.especificacion,item.foto);
               const { marca,modelo,precio,especificacion,foto} = item;
               new Bicicleta (item)
               productos.push(item);  });//Operadores avanzados
               impri();                                  

           break;

            
           case "colnago":
               
               productosColnago.forEach((item)=> {
               const { marca,modelo,precio,especificacion,foto} = item;
               new Bicicleta (item)
               productos.push(item);  });
               impri(); 
               
               break;
               

       
           case "pinarello":
               
               productosPinarello.forEach((item)=> {
                   const { marca,modelo,precio,especificacion,foto} = item;
                   new Bicicleta (item)
                   productos.push(item);  });
                   impri();  
                   
               break;

       
           case "trek":
              
               productosTrek.forEach((item)=> {
                   const { marca,modelo,precio,especificacion,foto} = item;
                   new Bicicleta (item)
                   productos.push(item);  });
                   impri();  
                   
               break;

       
           case "giant":
               
               productosGiant.forEach((item)=> {
                   const { marca,modelo,precio,especificacion,foto} = item;
                   new Bicicleta (item)
                   productos.push(item); 
                 });
                   impri();   
                  
               break;
                      
               };

               productos.splice(0,productos.length);

   };     


};

        

