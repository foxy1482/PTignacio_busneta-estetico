const headerOCbutton = document.querySelector(".header__ocbutton");
const inicioText = document.querySelector(".inicio__text");
const planes = document.querySelector(".sector_planes")

/* FUNCIONES */

const cerrarNav = ()=>
    {
        
        const headerNavWrapper = document.querySelector(".header__nav-wrapper");
        const headerNav = document.querySelector(".header__nav");
        
        headerOCbutton.addEventListener("click",()=>
        {
            if (headerNav.classList.contains("oculto"))
                {
                    headerNavWrapper.classList.remove("fuera");
                    headerNav.classList.remove("oculto");
                    headerNavWrapper.classList.remove("oculto");
                    desAnimarNav(headerNav,headerNavWrapper);
            } else
            {
                headerNavWrapper.classList.add("fuera");
                headerNav.classList.add("oculto");
                headerNavWrapper.classList.add("oculto");
                animarNav();
            }
        })
}

const quitarBlur = ()=>
{
    setTimeout(()=>
    {
        inicioText.classList.remove("blur");
        document.querySelector(".inicio__button").classList.remove("blur");
    },500)
}

const cargarHref = ()=>
{
    href = "https://whatsapp.com/?lang=es_LA";
    for (i = 0; i < 3; i++)
    {
        plan = planes.children[i];
        planBoton = plan.childNodes[9];
        planBoton.href = href;
    }
}

const animarNav = ()=>
{
    const nav = document.querySelector(".header__nav.oculto");
    const navWrapper = document.querySelector(".header__nav-wrapper");
    navWrapper.classList.add("fuera");
    nav.style.margin = "0";
    setTimeout(()=>
        {
            nav.style.transition = "margin .2s";
            navWrapper.style.transition = "opacity .16s";
            navWrapper.style.opacity = "0";
        },600)
}
const desAnimarNav = (headerNav,headerNavWrapper)=>
{
    headerNavWrapper.removeAttribute("style");
    headerNav.removeAttribute("style");
}

const transicionarVideo = ()=>
{
    const videos = document.querySelectorAll(".inicio__video");
    let indice = 0;
    setInterval(()=>
    {
        videos[indice].classList.remove("activo");
        indice = (indice + 1) % videos.length;
        videos[indice].classList.add("activo");
    },8000)
}

/* EJECUCIONES */
transicionarVideo();
cerrarNav();
quitarBlur();
cargarHref();