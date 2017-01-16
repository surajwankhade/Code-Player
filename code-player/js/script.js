var windowHeight = $(window).height();
var otherWindowHeight = $("#header").height();
var newWindowHeight = windowHeight - otherWindowHeight;
$(".codeContainer").height(newWindowHeight+"px"); 
$(".toggle").click(function(){
	
	$(this).toggleClass("selected");
	var activeDiv = $(this).html();
	
	$("#"+ activeDiv +"Container").toggle();
	var showingDiv = $(".codeContainer").filter(function(){
		return ($(this).css("display")!="none");
	
	}).length;
	var width = 100/showingDiv;
	$(".codeContainer").css("width",width + "%");
	
});

$("#buttonRun").click(function(){
	$("iframe").contents().find("html").html("<style>"+$("#cssCode").val()+"</style>"+ $("#htmlCode").val());
	document.getElementById("resultFrame").contentWindow.eval($("#jsCode").val());
	
});

