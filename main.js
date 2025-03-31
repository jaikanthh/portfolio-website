//
//    _____                                __                              __      __       
//   /     |                              /  |                            /  |    /  |      
//   $$$$$ |  ______   __    __   ______  $$ |   __   ______   _______   _$$ |_   $$ |____  
//      $$ | /      \ /  |  /  | /      \ $$ |  /  | /      \ /       \ / $$   |  $$      \ 
// __   $$ | $$$$$$  |$$ |  $$ | $$$$$$  |$$ |_/$$/  $$$$$$  |$$$$$$$  |$$$$$$/   $$$$$$$  |
// /  |  $$ | /    $$ |$$ |  $$ | /    $$ |$$   $$<   /    $$ |$$ |  $$ |  $$ | __ $$ |  $$ |
// $$ \__$$ |/$$$$$$$ |$$ \__$$ |/$$$$$$$ |$$$$$$  \ /$$$$$$$ |$$ |  $$ |  $$ |/  |$$ |  $$ |
// $$    $$/ $$    $$ |$$    $$ |$$    $$ |$$ | $$  |$$    $$ |$$ |  $$ |  $$  $$/ $$ |  $$ |
//  $$$$$$/   $$$$$$$/  $$$$$$$ | $$$$$$$/ $$/   $$/  $$$$$$$/ $$/   $$/    $$$$/  $$/   $$/ 
//                     /  \__$$ |                                                            
//                     $$    $$/                                                             
//                      $$$$$$/                                                              
//  __    __                          __                        __      __      __           
// /  |  /  |                        /  |                      /  |    /  |    /  |          
// $$ | /$$/   ______   _____  ____  $$/   _______   ______   _$$ |_  _$$ |_   $$/           
// $$ |/$$/   /      \ /     \/    \ /  | /       | /      \ / $$   |/ $$   |  /  |          
// $$  $$<    $$$$$$  |$$$$$$ $$$$  |$$ |/$$$$$$$/ /$$$$$$  |$$$$$$/ $$$$$$/   $$ |          
// $$$$$  \   /    $$ |$$ | $$ | $$ |$$ |$$      \ $$    $$ |  $$ | __ $$ | __ $$ |          
// $$ |$$  \ /$$$$$$$ |$$ | $$ | $$ |$$ | $$$$$$  |$$$$$$$$/   $$ |/  |$$ |/  |$$ |          
// $$ | $$  |$$    $$ |$$ | $$ | $$ |$$ |/     $$/ $$       |  $$  $$/ $$  $$/ $$ |          
// $$/   $$/  $$$$$$$/ $$/  $$/  $$/ $$/ $$$$$$$/   $$$$$$$/    $$$$/   $$$$/  $$/           
//                                                                                          
//                                                                                          
//                              
var loader = document.getElementById("preloader");
                                                            
function settingtoggle() {
    document.getElementById("setting-container").classList.toggle("settingactivate");
    document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
    document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

function visualmode() {
    document.body.classList.toggle("light-mode");
    document.querySelectorAll(".needtobeinvert").forEach(function (e) {
        e.classList.toggle("invertapplied");
    });
}

window.addEventListener("load", function () {
    loader.style.display = "none";
    document.querySelector(".hey").classList.add("popup");
});

let emptyArea = document.getElementById("emptyarea"),
    mobileTogglemenu = document.getElementById("mobiletogglemenu");

function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    mobileTogglemenu.classList.toggle("show-toggle-menu");
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

function hidemenubyli() {
    document.body.classList.toggle("stopscrolling");
    mobileTogglemenu.classList.remove("show-toggle-menu");
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll("section"),
    navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"),
    mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
    let activeSection = "";
    sections.forEach(section => {
        let offsetTop = section.offsetTop;
        if (pageYOffset >= offsetTop - 200) {
            activeSection = section.getAttribute("id");
        }
    });

    mobilenavLi.forEach(li => {
        li.classList.remove("activeThismobiletab");
        if (li.classList.contains(activeSection)) {
            li.classList.add("activeThismobiletab");
        }
    });

    navLi.forEach(li => {
        li.classList.remove("activeThistab");
        if (li.classList.contains(activeSection)) {
            li.classList.add("activeThistab");
        }
    });
});

console.log("%c Designed and Developed by Jayakanth Kamisetti ", "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;");

let mybutton = document.getElementById("backtotopbutton");

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrolltoTopfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    scrollFunction();
};

document.addEventListener("contextmenu", function (e) {
    if (e.target.nodeName === "IMG") {
        e.preventDefault();
    }
}, false);

const windowResize = () => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);