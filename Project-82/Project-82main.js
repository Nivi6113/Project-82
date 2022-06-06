canvas = document.getElementById("myCanvas")
ctx= canvas.getContext("2d")
color="red";

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("Mycolor").value
    mouse_x= e.clientX -  canvas.offsetLeft;
    mouse_y= e.clientY - canvas.offsetTop;

    console.log("X ="+ mouse_x+",Y=")
    circle(mouse_x,mouse_y);
    
}
function circle(mouse_x,mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle =color;
    ctx.lineWidth=2
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
}