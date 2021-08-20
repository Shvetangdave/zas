var last_position_of_x, last_position_of_y;
color = "color";
width_of_line ="width_of_line";

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var width = screen.width;

new_width =  screen.width - 70; 
new_height = screen.height - 300;
    if(width < 992)
    {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) 
{
    console.log("my_touchstart");
 
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

         
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) 
{

    console.log("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;


    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
    
}
function cleararea(){

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
 



//mouseevet starts 

var mouseEvent = "empty"; 
var last_position_of_x, last_position_of_y; 
canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d"); 
 color = "black"; 
 width_of_line = 1;


canvas.Eventlistener("mousedown",my_mousedown);

function my_mousedown(e)
{
color =document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;

mouseevent="mousedown";


}
canvas.Eventlistener("mouseup" , my_mouseup);
function my_mouseup(e)
{
    mouseevent="mouseup";
}

canvas.Eventlistener("mouseleave" , my_mouseleave);
function my_mouseleave(e)
{
    mouseevent="mouseleave";
}
canvas.Eventlistener("mousemove",my_mousemove);
function my_mousemove(e)
{


    current_postion_of_mouse_x=e.clientx-canvas.offsetleft;
    current_postion_of_mouse_y=e.clienty-canvas.offsettop;


if(mouseevent=="mousedown"){
ctx.beginpath();
ctx.strokestyle=color;
ctx.linewidth=width_of_line;

console.log("last postion of x and y coordinates=");
console.log("x="+ last_position_of_x+"y="+last_position_of_y);
ctx.moveto(last_position_of_x,last_position_of_y);;
ctx.lineto(current_postion_of_mouse_x,current_postion_of_mouse_y);
ctx.stroke();
}
last_position_of_x=current_postion_of_mouse_x;
last_position_of_y=current_postion_of_mouse_y;
}























