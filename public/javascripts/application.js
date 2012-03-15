jQuery(document).ready(function( $ ){

//Tipo emprestimo

$("#type_0").click(function ()
{
    $("#aluno").show();
    $("#tipo_emprestimo").html("Selecione ---------------------------------->");
    $("#funcionario").hide();

});
$("#type_1").click(function ()
{
    $("#funcionario").show();
    $("#tipo_emprestimo").html("Selecione ---------------------------------->");
    $("#aluno").hide();
});


$( "#configuracao_data_criacao" ).datepicker({dateFormat: 'dd-mm-yy', changeYear: true, changeMonth: true, yearRange: '-60:+0'});


// Codigo para jogos

//Codigo para validar quantidade indicada com numero de tombos
$("#jogo_lista_tombos").on("focusout",function(){
var elemento = $("#jogo_lista_tombos").val().split(";");
if ($("#jogo_qtde_jogos").val() != elemento.length){
alert("A quantidade de tombos digitados é diferente da quantidade informada, \nfavor verificar antes de continuar. Numero de tombos atual: " + elemento.length + " e a quantidade informado foi: " + $("#jogo_qtde_jogos").val());
$("#jogo_lista_tombos").focus();
}
});


//Codigo para Multi-tombos - cadastro de midias

$("#type_jogos_0").click(function ()
{
    $("#tipo_tombo").show();
    $("#jogo_qtde_jogos").val("").attr("disabled", false).css("background-color", "#ffffff");
    $("#exibe_aviso").show().fadeOut(3000).fadeIn(3000).fadeOut(3000).css("background-color", "yellow");
});
$("#type_jogos_1").click(function ()
{
    $("#tipo_tombo").show();
    $("#jogo_qtde_jogos").val("1").attr("disabled", true).css("background-color", "#cccccc");
});



// Até aqui



//Tombos midias

//Codigo para validar quantidade indicada com numero de tombos
$("#midia_lista_tombos").on("focusout",function(){
var elemento = $("#midia_lista_tombos").val().split(";");
if ($("#midia_qtde_midias").val() != elemento.length){
alert("A quantidade de tombos digitados é diferente da quantidade informada, \nfavor verificar antes de continuar. Numero de tombos atual: " + elemento.length + " e a quantidade informado foi: " + $("#livro_qtde_livros").val());
$("#midia_lista_tombos").focus();
}
});


//Codigo para Multi-tombos - cadastro de midias

$("#type_midia_0").click(function ()
{
    $("#tipo_tombo").show();
    $("#midia_qtde_midias").val("").attr("disabled", false).css("background-color", "#ffffff");
    $("#exibe_aviso").show().fadeOut(3000).fadeIn(3000).fadeOut(3000).css("background-color", "yellow");
});
$("#type_midia_1").click(function ()
{
    $("#tipo_tombo").show();
    $("#midia_qtde_midias").val("1").attr("disabled", true).css("background-color", "#cccccc");
});

// Tombos midias até aqui



// Teste progressBar

$("#password").keyup(function(){
    var data = $(this).val();
    var len = data.length;
    console.log(len);


    var total = null;
    total = len * 10;
    barUpdate(total);

});
function barUpdate(total) {
    $("#progressBar").progressbar({
        value: total
    });

}

// Fim Teste

//Codigo Abas log

$("#tabs").tabs();
// Fim codigo

//Codigo para validar quantidade indicada com numero de tombos
$("#livro_lista_tombos").on("focusout",function(){
var elemento = $("#livro_lista_tombos").val().split(";");
if ($("#livro_qtde_livros").val() != elemento.length){
alert("A quantidade de tombos digitados é diferente da quantidade informada, \nfavor verificar antes de continuar. Numero de tombos atual: " + elemento.length + " e a quantidade informado foi: " + $("#livro_qtde_livros").val());
$("#livro_lista_tombos").focus();
}
});


//Codigo para Multi-tombos - cadastro de livros

$("#type_0").click(function ()
{
    $("#tipo_tombo").show();
    $("#livro_qtde_livros").val("").attr("disabled", false).css("background-color", "#ffffff");
    $("#exibe_aviso").show().fadeOut(3000).fadeIn(3000).fadeOut(3000).css("background-color", "yellow");
});
$("#type_1").click(function ()
{
    $("#tipo_tombo").show();
    $("#livro_qtde_livros").val("1").attr("disabled", true).css("background-color", "#cccccc");
});











$("#dicionario_enciclopedia_lista_tombos").on("focusout",function(){
var elemento = $("#dicionario_enciclopedia_lista_tombos").val().split(";");
if ($("#dicionario_enciclopedia_qtde").val() != elemento.length){
alert("A quantidade de tombos digitados é diferente da quantidade informada, \nfavor verificar antes de continuar. Numero de tombos atual: " + elemento.length + " e a quantidade informado foi: " + $("#dicionario_enciclopedia_qtde").val());
$("#dicionario_enciclopedia_lista_tombos").focus();
}
});


//Codigo para Multi-tombos - cadastro de dicionarios

$("#type_10").click(function ()
{
    $("#tipo_tombo").show();
    $("#dicionario_enciclopedia_qtde").val("").attr("disabled", false).css("background-color", "#ffffff");
    $("#exibe_aviso").show().fadeOut(3000).fadeIn(3000).fadeOut(3000).css("background-color", "yellow");
});
$("#type_11").click(function ()
{
    $("#tipo_tombo").show();
    $("#dicionario_enciclopedia_qtde").val("1").attr("disabled", true).css("background-color", "#cccccc");
});



// Emprestimos
$('#add_dpu').click(function() {
  return !$('#todos_dpus option:selected').remove().appendTo('#emprestimo_dpu_ids');
 });
$('#remove_dpu').click(function() {
  return !$('#emprestimo_dpu_ids option:selected').remove().appendTo('#todos_dpus');
 });
//Fim do codigo









//Codigo para gerar 2 multi-selects para assuntos
$('#add').click(function() {
  return !$('#todos option:selected').remove().appendTo('#livro_assunto_ids');
 });
 $('#remove').click(function() {
  return !$('#livro_assunto_ids option:selected').remove().appendTo('#todos');
 });
//Fim do codigo

//Codigo para gerar 2 multi-selects para autores
$('#add_autores').click(function() {
  return !$('#todos_autores option:selected').remove().appendTo('#livro_autor_ids');
 });
 $('#remove_autores').click(function() {
  return !$('#livro_autor_ids option:selected').remove().appendTo('#todos_autores');
 });
//Fim do codigo


//Codigo para gerar 2 multi-selects para musicas
$('#add_musicas').click(function() {
  return !$('#todas_musicas option:selected').remove().appendTo('#midia_musica_ids');
 });
 $('#remove_musicas').click(function() {
  return !$('#midia_musica_ids option:selected').remove().appendTo('#todas_musicas');
 });
//Fim do codigo



//Codigo para gerar 2 multi-selects para cantores
$('#add_cantores').click(function() {
  return !$('#todos_cantores option:selected').remove().appendTo('#midia_cantor_ids');
 });
 $('#remove_cantores').click(function() {
  return !$('#midia_cantor_ids option:selected').remove().appendTo('#todos_cantores');
 });
//Fim do codigo


$("#search").focusout(function(){
  var chard = $(this).val().length;
  if (chard <= 3) {
    $("span#error_message").show().html("Favor digitar mais de 3 letras").fadeOut(3000).css('color','red').css('font','10px');
  }
});


//Cadastro Musica
    $('select#midia_genero_id').change(function(){
      if ($(this).val() == 17){
        $(".musica").show();
      }
      else {
        $(".musica").hide();
      }
    });

// Fim cadastro musica

$.datepicker.setDefaults($.datepicker.regional['pt-BR']);
$("#localizacao_data_aquisicao").datepicker({dateFormat: 'dd-mm-yy', changeYear: true, changeMonth: true, yearRange: '-60:+0'});







  // Inicio Mensagem busca
    $(".txt_busca").val("Digite parte da busca").css("color","gray");
  // Fim Mensagem busca

  // Autocomplete Faixa Etaria
  $("#fe").click(function ()
   {
     $(".consulta").show();
     $(".txt_busca").val("Digite parte da busca").css("color","gray");
     $("#search").show().addClass("autocomplete").removeClass("txt_busca");
     
     $(".autocomplete").autocomplete({
        source: ["a"]
     });

     $(".label_busca").show();

   });

  // Fim autocomplete
  //Filtros consultas mapas
  $(".filtro").click(function ()
   {
     $(".consulta").show();
     $(".txt_busca").show();
     $(".label_busca").show();
     $(".txt_busca").val("Digite parte da busca").css("color","gray");

   });

   $(".filtro1").click(function ()
   {
     $(".consulta_cantor").show();   
   });

   $(".sem_filtro").click(function ()
    {
      $(".txt_busca").val("");
      $(".txt_busca").hide();
      $(".label_busca").hide();
      $(".consulta").show();
      $("#unidade_corrente").hide();
    });
   $(".sem_filtro#unidade").click(function ()
    {
      $("#unidade_corrente").show();
      $(".consulta").show();
    });


    $(".txt_busca").focus(function(){
       $(".txt_busca,#search").val("");
    });

  // Fim Filtros


// Letras em maiusculo

$("input").keyup(function(){
    $(this).val($(this).val().toUpperCase());
  })

// Fim Letra em maiusculo




	var uls = $('#menu ul');
	uls.hide();

	$('#menu > li').click(function( e ){
		e.stopPropagation();
		uls.hide();
		$( this ).find('ul').show();
	});
	$('#menu ul').click(function( e ){
		e.stopPropagation();
	});
	$('body').click(function(){
		uls.hide();
	});

$(".grid").flexigrid({
    url: 'livros.json'
});

$( "input:submit, .botao" ).button();
$( "#datepicker" ).datepicker();
$( ".tabs" ).tabs();


$("#emprestimo_tipo_emprestimo").on("click",function(){
    $("#tipo").show;
});

function remove_fields(link) {
  $(link).prev("input[type=hidden]").val("1");
  $(link).closest(".fields").hide();
}

function add_fields(link, association, content) {
  var new_id = new Date().getTime();
  var regexp = new RegExp("new_" + association, "g")
  $(link).parent().before(content.replace(regexp, new_id));
}

function hide_field(link,div) {
  $(div).toggle();
}
});



