$(".taxa").css("display", "none");
$(".info").css("display", "none");
$(".resultado").css("display", "none");


var gen;
var ativ; 
var age; 
var pes; 
var altura;

function sumirGenero(){
  $(".genero").hide( "slow" );
  $(".taxa").css("display", ""); 
}

function sumirTaxa(){
  $(".taxa").hide( "slow" );
  $(".info").css("display", "");
}



function sumirInfo(){
	$(".info").hide( "slow" );
	$(".resultado").css("display", "");
	gen = $("#opcaoGenero").val();
	ativ = $("#atividade").val();
	age = $("#idade").val();
	pes = $("#peso").val();
	altura = $("#altura").val();
  if (gen == "M")
  {
    var result = ativ * (66 + (13,7 * pes) + (5 * altura) - (6,8 * age));
  }
  else if (gen == "F")
  {
    var result = ativ * (665 + (9,6 * pes) + (1,8 * altura) - (4,7 * age));
  }
  
  $("#resultadoCalc").html(result.toFixed(2).replace('.',','));
}