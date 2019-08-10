$(".taxa").css("display", "none");
$(".info").css("display", "none");
$(".resultado").css("display", "none");


function sumirGenero(){
    $(".genero").hide( "slow" );
    $(".taxa").css("display", ""); 
}
var generoPessoa = $('#opcaoGenero option:selected').val();

function sumirTaxa(){
  $(".taxa").hide( "slow" );
  $(".info").css("display", "");
}
var taxa = $("#atividade").val();

function sumirInfo(){
  $(".info").hide( "slow" );
  $(".resultado").css("display", "");
}