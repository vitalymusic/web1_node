import $ from "jquery";
import "./videoBackground";

  

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


});


// const player = new videojs('bg-video'); //
// videojs('bg-video').Background();