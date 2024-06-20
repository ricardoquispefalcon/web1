document.addEventListener("DOMContentLoaded", (event)=>{

    let button = document.querySelector(".layout__menu-toggle");
    let aside = document.querySelector(".layout__aside");
    let icon_bars = document.querySelector(".layout__menu-toggle .fa-bars");
    let xmark = document.querySelector(".layout__menu-toggle .fa-xmark");

    button.addEventListener("click", (event)=> {
        let visible = document.querySelector(".layout__aside--visible");
        console.log(visible);
        if(visible == null){
            aside.classList.add("layout__aside--visible");
            icon_bars.style.opacity = 0;
            xmark.style.opacity = 1;
        }else{
            aside.classList.remove("layout__aside--visible");
            icon_bars.style.opacity = 1;
            xmark.style.opacity = 0;
        }
    });
    
    window.addEventListener("resize", ()=>{
        let size = parseInt(document.body.clientWidth);
        if( size <= 1040){
            aside.classList.remove("layout__aside--visible");
            icon_bars.style.opacity = 1;
            xmark.style.opacity = 0;
        }
    })
});