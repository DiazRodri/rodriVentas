//Agregandole el dark mode a la página web


const darkmode = document.getElementById( "darkmode" );
darkmode.addEventListener("click", function(){
    if( document.body.classList.contains("dark") ){
        document.body.classList.remove("dark");
    }else{
        document.body.classList.add("dark");
    }
});




