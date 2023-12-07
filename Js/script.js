var header = document.getElementById('cabecalho');
var navigationHeader = document.getElementById('menu_lateral');
var content = document.getElementById('conteudo');
var showSideBar = false;

function toggleSideBar() 
{
    showSideBar = !showSideBar;
    if (showSideBar) 
    {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = "showSideBar";
        content.style.filter = 'blur(2px)';
    } 
    else
    {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = "";
        content.style.filter = '';
    }

    function closeSideBar() 
    {
        if (showSideBar) 
        {
            toggleSideBar();
        }
    }
}
