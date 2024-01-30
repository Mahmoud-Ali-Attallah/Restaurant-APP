$(".te a").toggle(1);

async function getData(){
    let respone = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list") ;
    let data = await respone.json() ;
    await show(data) ;
}

getData() ;

function show(x){
    var container = "" ;
    for(let i = 0 ;  i < x.meals.length ; i++){
        let desc = "" ;
        if(x.meals[i].strDescription != null){
            desc = x.meals[i].strDescription.slice(0,100)
        }
        container+=` <div class="this col-sm-12  col-xl-6  col-xxl-3 text-white text-center ">
        <div class="img">

        <img src="https://www.themealdb.com/images/ingredients/${x.meals[i].strIngredient}.png" class="w-50" alt="">
        </div>
        <div class=" ">
        <p class="it fs-2 fw-bold"  id="m">${x.meals[i].strIngredient}</p>

        <p id="m">${desc}</p>
        </div>
    
    
          </div>`
    }
    document.getElementById("row").innerHTML = container ; 
    clic() ;
    }
    function clic(){
        let e = document.querySelectorAll(".this")
        let z = document.querySelectorAll(".this .it")
        console.log(z)
        for(let i =0 ; i < e.length ; i++){
            e[i].addEventListener("click" , function(){
                console.log(z[i].innerHTML)
                Country(z[i].innerHTML)
            ;
            })
        }
    }

    async function Country(x){
        let respone = await fetch(`  https://www.themealdb.com/api/json/v1/1/filter.php?i=${x}`) ;
        let data = await respone.json() ;
        await showNew(data) ; 
    }
    function showNew(x){
        var container = "" ;
        for(let i = 0 ;  i < x.meals.length ; i++){
            container+=` <div class="this col-sm-12  col-xl-6  col-xxl-3 text-white position-relative overflow-hidden  mb-2 ">
        
            <div  class="con  d-flex flex-column align-items-start justify-content-center position-absolute pb-4  mx-2 rounded rounded-2 bg-body-tertiary  " style="--bs-bg-opacity: .8;">
             <p class ="text-black fs-2 fw-bold">${x.meals[i].strMeal}</p>
            </div>
            <img src=${x.meals[i].strMealThumb} class=" rounded rounded-2 d-block " alt="" width="100%">
        
              </div>`
        }
        document.getElementById("row").innerHTML = container ; 
        // mouse() ;
        clicDetails();
        }
  
        function clicDetails(){
            let e = document.querySelectorAll(".this")
            let z = document.querySelectorAll(".this p")
            console.log(z)
            for(let i =0 ; i < e.length ; i++){
                e[i].addEventListener("click" , function(){
                    iteg(z[i].innerHTML)
                ;
                })
            }
        }
    
        async function iteg(x){
            let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`) ;
            let data = await respone.json() ;
            await showDea(data) ; 
        }
        function showDea(x){
            let Recipes  = "" ;
            for(let i = 1 ; i<= 20; i++){
                var y = "strIngredient"+i
                var z = "strMeasure"+i
                console.log(y) ;
                if(x.meals[0][y] != "" && x.meals[0][y] != null ){
                    Recipes+=`
                    <div class="d-inline-block text-Black p-2 m-2 bg-info-subtle rounded rounded-2 ">
                    ${(x.meals[0][z]) + " " + " " + (x.meals[0][y]) } 
                    </div>
                  `
                }
              
            }
            let Tags = "" ;
            if(x.meals[0].strTags != null){
                Tags = `<p class ="text-white rounded rounded-2 bg-warning-subtle px-3 py-2">${x.meals[0].strTags}</p>` ; ;
                let tex = x.meals[0].strTags ;
                let coun = 0 ;
                for (let i = 0 ; i < tex.length ; i++){
                    if(tex[i] == "," ){
                        coun ++ ;
                        if(coun == 1){
                            Tags = "" ;
                        }
                        Tags+= `<p class ="text-white rounded rounded-2 bg-warning-subtle me-3 px-3 py-2">${tex.slice(0,i)}</p>` ;
                        tex = tex.slice(i+1,tex.length)
                        i = 0 ;
                        console.log(tex) ;
                        
                    }
        
                }
                if(coun > 0){
                    Tags+= `<p class ="text-white rounded rounded-2 bg-warning-subtle px-3 py-2">${tex}</p>` ;
                }
            }
        
            let source = "#"
            if(x.meals[0].strSource != null){
                source = x.meals[0].strSource
            } 
            let Youtube = "#"
            if(x.meals[0].strYoutube != null){
                Youtube = x.meals[0].strYoutube
            }
            var container = "" ;
            
                container =`
                
                <div class=" col-sm-12    col-xxl-4 d-flex flex-column justify-content-start align-items-start ">
                <img src=${x.meals[0].strMealThumb} class=" rounded rounded-2 d-block " alt="" width="100%">
                    <p class ="text-white fs-4 fw-bold">${x.meals[0].strMeal}</p>
                  </div>
        
                  <div class=" col-sm-12  col-xxl-8 d-flex flex-column justify-content-start align-items-start  ">
                    
                        <h2 class ="text-white">Instructions</h2>
                        <p class ="text-white">${x.meals[0].strInstructions}</p>
                        <p class ="text-white fs-4 fw-bold">Area <span> : </span><span>${x.meals[0].strArea}</span></p>
                        <p class ="text-white fs-4 fw-bold">Category <span> : </span><span>${x.meals[0].strCategory}</span></p>
                        <p class ="text-white fs-4 fw-bold">Recipes <span> : </span></p>
                        
                        <div >
                            ${Recipes}
                        </div>
                     
                       <p class ="text-white fs-4 fw-bold">Tags <span>:</span></p>
                       <div class="d-flex flex-row" >
                       ${Tags}
                   </div>
                       
        
                       <div class="bu d-flex flex-row mb-4">
                        <a href="${source}"><button class="btn btn-outline-success me-4 px-4 py-2 text-white" id="srcouce">srcouce</button></a>
                        <a href="${Youtube}"><button class="btn btn-outline-danger text-white px-4 py-2 " id="Youtube">Youtube</button></a>
        
                       </div>
                
                      </div>`
            
            document.getElementById("row").innerHTML = container ; 
            }



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
            // //   function mouse(){
            //     let layer =  $(".con") 
            //     let elem = document.querySelectorAll(".this")
             
            //      for(let i = 0 ; i < elem.length ; i++ ){
            //         //  elem[i].addEventListener("mousemove" , function(){
             
            //              layer[i].animate({top:`0px`} , 3000) ;
            //          })
            //         //  elem[i].addEventListener("mouseleave" , function(){
                       
            //             layer[i].animate({top:`1000px`} , 3000) ;
            //         })
            //      }
            // }