function dark() {
    var content = document.body;
    content.classList.toggle("darkMode");
    var header = document.getElementById("top");
    header.classList.toggle("headerDark");
    var waveD = document.getElementById("wave");
    waveD.classList.toggle("waveDark");
    var Button = document.getElementById("hbutton");
    Button.classList.toggle("hbuttonDark");
    var text1 = document.getElementById("h1");
    text1.classList.toggle("h1Dark");
    var text = document.getElementById("p");
    text.classList.toggle("pDark");
    var text1 = document.getElementById("h1-1");
    text1.classList.toggle("h1-1Dark");
    var text = document.getElementById("p1");
    text.classList.toggle("p1Dark");
    var header3 = document.getElementById("h3");
    header3.classList.toggle("h3Dark");
    var header3 = document.getElementById("h3-1");
    header3.classList.toggle("h3-1Dark");
    var text = document.getElementById("p2");
    text.classList.toggle("p2Dark");
    var header1m = document.getElementById("h1m");
    header1m.classList.toggle("h1mD");
    var header1p = document.getElementById("pm");
    header1p.classList.toggle("pmD");
    var musiccol = document.getElementById("music-col1");
    musiccol.classList.toggle("MCD1");
    var musiccol = document.getElementById("music-col2");
    musiccol.classList.toggle("MCD2");
    var musiccol = document.getElementById("music-col3");
    musiccol.classList.toggle("MCD3");
    var musiccolh2 = document.getElementById("music-colh2-1");
    musiccolh2.classList.toggle("MCH2D1");
    var musiccolh2 = document.getElementById("music-colh2-2");
    musiccolh2.classList.toggle("MCH2D2");
    var musiccolh2 = document.getElementById("music-colh2-3");
    musiccolh2.classList.toggle("MCH2D3");
    var Button = document.getElementById("pbutton");
    Button.classList.toggle("pbuttonDark");
    var footerD = document.getElementById("footer");
    footerD.classList.toggle("footerD");
    var icon = document.getElementById("icon");
    icon.classList.toggle("sun");
    if(icon.classList.toggle('moon'))
    {
        icon.src = "moon.png";
    }
    else {
        icon.src = "sun.png";
    }
}
function togglelink() {
    var navbarLinks = document.getElementById("nav-links");
    navbarLinks.classList.toggle("nav-links-active");
    var icon2 = document.getElementById("menu-logo");
    icon2.classList.toggle("menu-x");
    if(icon2.classList.toggle("menu-logo"))
    {
        icon2.src = "menu-logo.png";
    }
    else {
        icon2.src = "x icon.png";
    }
}