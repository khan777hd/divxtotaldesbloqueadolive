<script type="text/javascript">
var items = parseInt('12');   
var witems = parseFloat(items/4); 
var iitems = parseInt(items/4); 
var swi = parseFloat(witems-iitems);

if(swi>0)
{
    iitems++;
}
var cwitems = 1;
console.log("LAYER : "+iitems);

console.log();

document.getElementsByClassName("btn-prev")[0].addEventListener("click", goprev);   
document.getElementsByClassName("btn-next")[0].addEventListener("click", gonext);   
var wdd = parseInt(witems*1150),poxw = 0;
$(".destacados-home").css("width",wdd+"px");
function gonext()
{
    var ps = $( ".destacados-home" ).position();
    var spoxw = poxw.toString();
    spoxw = spoxw.replace('-','');
    console.log("X "+spoxw);
    if(parseInt(spoxw)<parseInt(wdd-1150))
    {
        $( ".destacados-home" ).animate(
        {
            left: "-=1150",
        }, 1000, function() 
        {
            cwitems++;
            console.log(cwitems+"<"+iitems+" = "+$( ".destacados-home" ).position().left);
            poxw = $( ".destacados-home" ).position().left;
        });
    }else
    {
        $( ".destacados-home" ).animate(
        {
            left: "=0",
        }, 1000, function() 
        {
            // Animation complete.
        });
    }
} 
function goprev()
{   
    var ps = $( ".destacados-home" ).position();
    if(parseInt(ps.left)<0)
    {
        $( ".destacados-home" ).animate(
        {
            left: "+=1150",
        }, 1000, function() 
        {
            // Animation complete.
            console.log(cwitems+"<"+iitems+" = "+ps.left);
            poxw = $( ".destacados-home" ).position().left;

        });
    }else
    {
        cwitems = 1;
    }
}