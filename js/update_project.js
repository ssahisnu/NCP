function addFields(){
    var number = document.getElementById("member").value;
    var container = document.getElementById("container");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i=0;i<number;i++){
        container.appendChild(document.createTextNode("Member " + (i+1)));
        var input = document.createElement("input");
        input.type = "email";
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
    }
}
function myFunction() {
var element = document.body;
element.classList.toggle("dark-mode");
}

function validate() {
var teamSize = document.FormJsValid.member.value;
// var container = document.getElementById("container");
var searchEles = document.getElementById("container").querySelectorAll('input');
var domain = document.FormJsValid.domain.value;
var topic = document.FormJsValid.topic.value;
var description = document.FormJsValid.description.value;
var guide = document.FormJsValid.guide.value;

if(!/^[0-9]$/.test(teamSize))
{
alert("Please provide valid Team Size!" );
document.FormJsValid.member.focus();
formValidity = false
return false
}
for(var i = 0; i < searchEles.length; i++) {
//alert(searchEles[i].value);
if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(searchEles[i].value))
// if(searchEles[i].value=="")
{
    alert( "Please provide valid member Email!");
    document.getElementById("container").focus() ;
    formValidity = false
    return false
}
}
if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(guide))
{
    alert( "Please provide valid Email for guide!" );
    document.FormJsValid.guide.focus() ;
    formValidity = false
    return false
}
if(domain=="")
{
alert("Dont leave domain field empty!" );
document.FormJsValid.domain.focus();
formValidity = false
return false
}
if(topic=="")
{
alert("Dont leave topic field empty!" );
document.FormJsValid.topic.focus();
formValidity = false
return false
}

var formValidity = true

return( formValidity );
}