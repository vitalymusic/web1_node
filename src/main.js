import $ from "jquery";
import "./videoBackground";
import '@fortawesome/fontawesome-free/css/all.min.css';
import'./tailwind.css';  
import * as bootstrap from 'bootstrap'

$(()=>{
    $("h1").css({
        "color":"red",
        "background-color":"blue",
    });

    let images = $("img");
    images.css("width","100px");
    images.on("click",(e)=>{
        images.css("width","100px");
        $(e.target).css("width","200px");
    })
     images.on("dblclick",(e)=>{
        $(e.target).fadeOut(1000,()=>{
            alert("attēls pazudis")
        });
    })
    $("body").append(`<div class="information"></div>`);


    $("h1,p").on("click",(e)=>{
        $(".information").text($(e.target).text());
    })




    // Foto ielāde
    $.getJSON('http://localhost:3000/photos',(dati)=>{
        console.log(dati);
        for(let bilde of dati){
            $(".foto").append(`<img src="${bilde.url}" alt="bilde">`);
        }
    })

});




