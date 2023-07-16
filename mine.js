




function addProduct() {
    
    var oneProduct = {
    pName : pNameInput.value ,
    pPrice : pPriceInput.value ,
    pCat : pCatInput.value ,
    pDesc : pDescInput.value
 }


}






































// var pNameInput = document.getElementById("pNameId") ;  // tag
// var pPriceInput = document.getElementById("pPriceId") ;  // tag
// var pCatInput = document.getElementById("pCatId") ;  // tag
// var pDescInput = document.getElementById("pDescId") ;  // tag

// var cartoona ; // undefined

// var currentIndex ; 

// if(  localStorage.getItem("localProducts") == null )
// {
//     cartoona = [] ;
// }
// else
// {
//       cartoona =  JSON.parse(localStorage.getItem("localProducts")) ;

//       displayProducts()
// }

// var regex = /^[A-Z]/

// function addProduct()
// {
//     if( regex.test(pNameInput.value)  )
//     {
//         var oneProduct = {

//             pName : pNameInput.value ,
//             pPrice : pPriceInput.value ,
//             pCat : pCatInput.value ,
//             pDesc : pDescInput.value
//         }
    
        
//         cartoona.push(oneProduct);
    
//         // localstorage
//         localStorage.setItem("localProducts" ,  JSON.stringify(cartoona)  )
    
//         // display
//         displayProducts()
    
//         // clear el inputs
//         clearInputs()
    
//     }
//     else
//     {
//         alert("please enterv valid Name")
//     }

   
// }

// function clearInputs()
// {
//     pNameInput.value = null;
//     pPriceInput.value = null;
//     pCatInput.value = null;
//     pDescInput.value = null;
// }


// function displayProducts()
// {
//     // console.log(cartoona);

//     var hasalah = ``;

//     for(var  i =1 ; i < cartoona.length ; i++)
//     {
//         //cartoona[i] ====> tr
//       hasalah +=  ` <tr>
//             <td>${i}</td>
//             <td>${cartoona[i].pName}</td>
//             <td>${cartoona[i].pPrice}</td>
//             <td>${cartoona[i].pCat}</td>
//             <td>${cartoona[i].pDesc}</td>
//             <td>
//             <button onclick="setInputsData(${i})" class="btn btn-outline-warning">set Data to inputs</button>
//             </td>
//             <td>
//                 <button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button>
//             </td>
        
//       </tr>`
//     }


//     document.getElementById("tBody").innerHTML = hasalah;


    
// }


// function deleteProduct(pIndex)
// {
//     cartoona.splice( pIndex , 1 ) // samsung

//     localStorage.setItem("localProducts" , JSON.stringify(  cartoona ))
//     displayProducts() // cartoona
// }



// // s
// function searchProduct(userWord)
// {

//     var hasalah = ``;

//     for(var i=1; i < cartoona.length ; i++)
//     {
//         if( cartoona[i].pName.toLowerCase().includes(userWord.toLowerCase()) )
//         {
//             // cartoona[i] =====> tr
//             hasalah +=`
//                    <tr>
//                     <td>${i}</td>
//                     <td>${cartoona[i].pName}</td>
//                     <td>${cartoona[i].pPrice}</td>
//                     <td>${cartoona[i].pCat}</td>
//                     <td>${cartoona[i].pDesc}</td>
//                     <td>
//                     <button class="btn btn-outline-warning">set Data in inputs</button>
//                     </td>
//                     <td>
//                         <button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button>
//                     </td>
                
//             </tr>
//       `
//         }
       
//     }

//     // after el for loop
//     document.getElementById("tBody").innerHTML = hasalah;
// }

// // set Data in inupts
// // 1
// function setInputsData(pIndex)
// {
//     // ======1========
//     pNameInput.value =  cartoona[pIndex].pName ; // teshirt
//     pPriceInput.value =  cartoona[pIndex].pPrice ; // 365
//     pCatInput.value =  cartoona[pIndex].pCat ; // j
//     pDescInput.value =  cartoona[pIndex].pDesc ; // mv

//     //===== 2  hide ll add Button ======== 
//     document.getElementById("addBtn").style.display = "none";

//     // ===========3 show ll update button ==========
//     document.getElementById("updateBtn").style.display = "block";

//     // ========== 4 - set ll  currentIndex  global =============
//     currentIndex = pIndex;
    
// }


// function updateProduct()
// {
//     var oneProduct = {

//         pName : pNameInput.value ,
//         pPrice : pPriceInput.value ,
//         pCat : pCatInput.value ,
//         pDesc : pDescInput.value
//     }

//     cartoona[currentIndex] =  oneProduct;

//     localStorage.setItem("localProducts" , JSON.stringify(cartoona))

//     displayProducts();
//     clearInputs();

//      //===== 2  show ll add Button ======== 
//      document.getElementById("addBtn").style.display = "block";

//      // ===========3 hide ll update button ==========
//      document.getElementById("updateBtn").style.display = "none";

// }





// // var x = /^(002)?(01)[0125][0-9]{8}$/

// // var userWrord = window.prompt("Enter your num");


// // if(  x.test(userWrord)  )
// // {
// //     console.log("Tmam")
// // }
// // else
// // {
// //     console.log("not matched")
// // }
