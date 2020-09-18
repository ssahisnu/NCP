var text;
$(document).ready(function(){
			$(".default_option").click(function(){
			  $(".dropdown ul").addClass("active");
			});

			$(".dropdown ul li").click(function(){
			  text = $(this).text();
			  $(".default_option").text(text);
			  $(".dropdown ul").removeClass("active");
			});
		});
function verify()
{
	var con=true;
	if(text==undefined){
		alert("Pick a topic to search !");
		con=false;
	}
	var searchQuery=document.getElementById("search").value;
	if(searchQuery==""){
		alert("Please enter a search query!");
		con=false;
	}

	if(text=="Guide" || text=="Student" ){
		if(!(/^[A-Za-z]+$/).test(searchQuery)){
			alert("Numbers not allowed for this search");
			con=false;
		}
	}

	if(text=="Roll No")
	{
		if(!(/^(CB|AM|BL)\.(EN)\.(U4|P2)(CSE|MEC|ECE|EIE|EEE)[1-9]{1}[0-9]{4}$/).test(searchQuery))
		{
			alert("Enter Valid Roll No");
			con=false;
		}
	}

	if(text=="Keyword"){
		if(!(/[A-Z]+$/).test(searchQuery)){
			alert("Enter a valid Keyword");
			con=false;
		}
	}
	
	return con;

}