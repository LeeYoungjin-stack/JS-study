const screen= document.getElementById("screen");
const outer= document.getElementById("outer");
const inner= document.getElementById("inner");
const clientWidth= document.getElementById("clientWidth");




screen.innerHTML= "window.screen:" +window.screen.width+","+window.screen.height;
outer.innerText="window.outer:"+ window.outerWidth+","+window.outerHeight;
inner.innerText= "window.inner:"+window.innerWidth+","+window.innerHeight;
clientWidth.innerText= "documentElement.clientWidth: "+document.documentElement.clientWidth+","+document.documentElement.clientHeight


window.onresize = function(event)
{
document.location.reload(true);
}