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
    var pesoConta;
    var alturaConta;
    var idadeConta;

    pesoConta = 13.7 * pes;
    alturaConta = 5 * altura;
    idadeConta = 6.8 * age;

    var result = ativ * (66 + (pesoConta + alturaConta - idadeConta));

  }
  else if (gen == "F")
  {
    var pesoConta;
    var alturaConta;
    var idadeConta;

    pesoConta = 9.6 * pes;
    alturaConta = 1.8 * altura;
    idadeConta = 4.7 * age;

    var result = ativ * (665 + (pesoConta + alturaConta - idadeConta));

  }
  
  $("#resultadoCalc").html(result.toFixed(2).replace('.',','));
}