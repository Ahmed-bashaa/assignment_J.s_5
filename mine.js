
var NameInput = document.getElementById("NameId") ;  // tag
var UrlInput = document.getElementById("URLId") ;  // tag
var cartoona=[] ; 

if(  localStorage.getItem("local") == null )
{
    cartoona = [] ;
}
else
{
      cartoona =  JSON.parse(localStorage.getItem("local")) ;
      display()
}

var regex_Name = /^\w{3,}(\s+\w+)*$/
var regex_Url = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
function add_Date()
{
    if( regex_Name.test(NameInput.value) && regex_Url.test(UrlInput.value))
    {
        
        var Bookmark_opject = {

            Name : NameInput.value ,
            Url: UrlInput.value ,
        }
        
        cartoona.push(Bookmark_opject);
    
        // localstorage
        localStorage.setItem("local" ,  JSON.stringify(cartoona)  )
    
        // display
        display()
    
        // clear el inputs
        clearInputs()
        
    }
    else
    {
        swal(
             "Site Name or Url is not valid, Please follow the rules below :"  ,               
               `-->Site name must contain at least 3 characters

              --> Site URL must be a valid one
               ` ,
               "error"
            );    
    }
}

function clearInputs()
{
    NameInput.value = null;
    UrlInput.value = null;
}

function display()
{    
    var hasalah = ``;
    for(var  i =1 ; i < cartoona.length ; i++)
    {
        //cartoona[i] ====> tr
      hasalah +=  
      `<tr>
            <td>${i}</td>
            <td>${cartoona[i].Name}</td>
            <td>
             <a class="btn btn-outline-primary" href="${cartoona[i].Url}" target="_blank"><i class="fa-solid fa-eye" style="color: #424242;"></i> Visit</a>
            </td>
            <td>
             <button onclick="Delete_btn(${i})" class="btn btn-outline-danger"><i class="fa-solid fa-trash" style="color: #484d56;"></i> Delete</button>
            </td>
      </tr>`
    }
    document.getElementById("tBody").innerHTML = hasalah;
}

function Delete_btn(pIndex)
{
    cartoona.splice( pIndex , 1 ) 
    localStorage.setItem("local" , JSON.stringify(  cartoona ))
    display() 
}