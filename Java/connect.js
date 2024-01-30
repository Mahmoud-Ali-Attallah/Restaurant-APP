var regaexName = /^((([a-z])|([A-Z])){3,}\s?)+$/ ;
var regaxMail = /^(([a-z]|[A-Z]){3,}_?)*\d*@gmail\.com$/ ;
var regexPhone = /^01[0125][0-9]{8}$/
var regePassword = /^(\w){6,}(([0-9][a-z])|([a-z][0-9])){1}(\w){0,}$/
$(".te a").toggle(1);

    document.getElementById("name").addEventListener("input" , function (e) { 
        if(!regaexName.test(e.target.value)){
            e.target.classList.add("is-invalid")
            document.querySelector(".one p").classList.remove("d-none")
            document.querySelector(".one p").classList.add("d-block")
        }
        else{
            e.target.classList.remove("is-invalid")
            document.querySelector(".one p").classList.remove("d-block")
            document.querySelector(".one p").classList.add("d-none")
        }

        done() ;
    })
    document.getElementById("email").addEventListener("input" , function (e) { 
        if(!regaxMail.test(e.target.value)){
            e.target.classList.add("is-invalid")
            document.querySelector(".two p").classList.remove("d-none")
            document.querySelector(".two p").classList.add("d-block")
        }
        else{
            e.target.classList.remove("is-invalid")
            document.querySelector(".two p").classList.remove("d-block")
            document.querySelector(".two p").classList.add("d-none")
        }
        done()
    
    })
    
    document.getElementById("Phone").addEventListener("input" , function (e) { 
        if(!regexPhone.test(e.target.value)){
            e.target.classList.add("is-invalid")
            document.querySelector(".three p").classList.remove("d-none")
            document.querySelector(".three p").classList.add("d-block")
        }
        else{
            e.target.classList.remove("is-invalid")
            document.querySelector(".three p").classList.remove("d-block")
            document.querySelector(".three p").classList.add("d-none")
        }
        done()
    
    })
    document.getElementById("Age").addEventListener("input" , function (e) { 
        if((e.target.value>=18) && (e.target.value<=100) ){
            e.target.classList.remove("is-invalid")
            document.querySelector(".four p").classList.remove("d-block")
            document.querySelector(".four p").classList.add("d-none")
        }
        else{
            e.target.classList.add("is-invalid")
           
            document.querySelector(".four p").classList.remove("d-none")
            document.querySelector(".four p").classList.add("d-block")
        }
        done()
    })
    
    document.getElementById("Password").addEventListener("input" , function (e) { 
        if(!regePassword.test(e.target.value)){
            e.target.classList.add("is-invalid")
            document.querySelector(".five p").classList.remove("d-none")
            document.querySelector(".five p").classList.add("d-block")
        }
        else{
            e.target.classList.remove("is-invalid")
            document.querySelector(".five p").classList.remove("d-block")
            document.querySelector(".five p").classList.add("d-none")
        }
        done()
    })
    document.getElementById("RePassword").addEventListener("input" , function (e) { 
        if(e.target.value != document.getElementById("Password").value ){
            e.target.classList.add("is-invalid")
            document.querySelector(".six p").classList.remove("d-none")
            document.querySelector(".six p").classList.add("d-block")
        }
        else{
            e.target.classList.remove("is-invalid")
            document.querySelector(".six p").classList.remove("d-block")
            document.querySelector(".six p").classList.add("d-none")
        }
        done()
    })

   



$(document).ready(function () {
    $(".loader").fadeOut(1000 , function(){
        $("body").css("overflow" , "auto")
        $("#loading").fadeOut(1000 ) ;

    }) ;
    

});

$("#here").on("click" , function () {

    console.log( $("#menu").innerWidth())
    console.log( $("#menu").css("left"))
    if( $("#menu").css("left")== "0px"){
        $("#menu").animate({left:`-${$("#menu").innerWidth()}`} , 1000) ;
        $(".nav").animate({left:`-${$("#menu").innerWidth() -270} `} , 1000) ;
        $(".te a").toggle(2000);
        $("#here").removeClass("fa-xmark");
        $("#here").addClass("fa-bars");
        
    }
    else{
        $("#menu").animate({left:`0px`} , 1000) ;
        $(".nav").animate({left:`270px`} , 1000) ;
        $(".te a").toggle(2000);
        $("#here").removeClass("fa-bars");
        $("#here").addClass("fa-xmark");
    }
  })
function mouse(){
    let layer =  $(".con") 
    let elem = document.querySelectorAll(".col-3")
 
     for(let i = 0 ; i < elem.length ; i++ ){
         elem[i].addEventListener("mousemove" , function(){
 
             layer[i].animate({top:`0px`} , 3000) ;
         })
         elem[i].addEventListener("mouseleave" , function(){
           
            layer[i].animate({top:`360px`} , 3000) ;
        })
     }
}





function done (){
    console.log(document.querySelector(".one p").classList.contains ("d-block")) 
       
    if( (document.querySelector(".one p").classList.contains ("d-none") && document.getElementById("name").value!= "" )&& (document.querySelector(".two p").classList.contains ("d-none") && document.getElementById("email").value!= "" )&& ( document.querySelector(".three p").classList.contains ("d-none") && document.getElementById("Phone").value!= "" ) && (document.querySelector(".four p").classList.contains ("d-none") && document.getElementById("Age").value!= "" ) && ( document.querySelector(".five p").classList.contains ("d-none") && document.getElementById("Password").value!= "" ) && (document.querySelector(".six p").classList.contains ("d-none") && document.getElementById("RePassword").value!= "") ) {
        console.log("kjlkjlk")
        document.getElementById("but").removeAttribute("disabled") ;
    }
    else{
        document.getElementById("but").setAttribute("disabled" ,"true") ;
    }

}