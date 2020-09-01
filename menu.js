//   cette fonction me sert de repere pour savoir a quel pixel il faut afficher la navbarre lorsque je scroll
  
  window.addEventListener('scroll',function(e){
            this.console.log(document.documentElement.scrollTop);
    })




window.onscroll = function () {

    // Lorsque Mon scroll est supérieur a 590px il fait la condition 

    if(document.documentElement.scrollTop > 590){

        document.getElementById("nav-menu").style.background = "#090b13";
        document.getElementById("nav-logo").style.opacity="1"
        document.getElementById("but-menu-nav2").style.opacity="1"
        document.getElementById("div-button-nav").style.width='84%'
    }
    else{
        // document.getElementById("nav-menu").style.background = "";
        document.getElementById("nav-logo").style.opacity="0"
        document.getElementById("but-menu-nav2").style.opacity="0"
        document.getElementById("div-button-nav").style.width='84%'
        document.getElementById("nav-menu").style.background = 'rgba(0, 0, 0, 0)'
    }

}

