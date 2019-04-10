var player ="x";
//começando com x.
var played = 0;

function chkGame(id) {
	var src = chkSource(id);
	var cpu = document.getElementById("cpu").checked;//retorna true ou false.
	if(src === 'block.png'){
		document.getElementById(id).src = "img/" + player + ".png";//trocando a imagem
		played++;
		
		if(chkVictory()){

			alert("Fim do Jogo! Vitória do jogador " + player);
			location.reload(); //recarrega a pagina.
		}
		else if(played >= 9){

			alert("Ops, Deu velha!");
			location.reload();

		}
		if(player === "x"){
			player = "o"; //vez do jogador "o";
		}
		else {
			player = "x"; //caso seja bola, ele volta pro x.
		}
	}
	if(cpu && player == "o" && !chkVictory()) {
		chkGame(computerPlay());
	}
}

function computerPlay() {
	
	if(chkSource("cel5") == "block.png"){
		return "cel5";
	}
		
	if(chkSource("cel1") == "img/o.png" && chkSource("cel2") == "img/o.png" && chkSource("cel3") == "block.png"){
		return "cel3";
	}
	if(chkSource("cel4") == "img/o.png" && chkSource("cel5") == "img/o.png" && chkSource("cel6") == "block.png"){
		return "cel6";
	}
	if(chkSource("cel7") == "img/o.png" && chkSource("cel8") == "img/o.png" && chkSource("cel9") == "block.png"){
		return "cel9";
	}
	if(chkSource("cel1") == "img/o.png" && chkSource("cel4") == "img/o.png" && chkSource("cel7") == "block.png"){
		return "cel7";
	}
	if(chkSource("cel2") == "img/o.png" && chkSource("cel5") == "img/o.png" && chkSource("cel8") == "block.png"){
		return "cel8";
	}
	if(chkSource("cel3") == "img/o.png" && chkSource("cel6") == "img/o.png" && chkSource("cel9") == "block.png"){
		return "cel9";
	}
	if(chkSource("cel1") == "img/o.png" && chkSource("cel5") == "img/o.png" && chkSource("cel9") == "block.png"){
		return "cel9";
	}
	if(chkSource("cel3") == "img/o.png" && chkSource("cel5") == "img/o.png" && chkSource("cel7") == "block.png"){
		return "cel7";
	}
	if(chkSource("cel3") == "img/o.png" && chkSource("cel2") == "img/o.png" && chkSource("cel1") == "block.png"){
		return "cel1";
	}
	if(chkSource("cel6") == "img/o.png" && chkSource("cel5") == "img/o.png" && chkSource("cel4") == "block.png"){
		return "cel4";
	}
	if(chkSource("cel9") == "img/o.png" && chkSource("cel8") == "img/o.png" && chkSource("cel7") == "block.png"){
		return "cel7";
	}
	if(chkSource("cel7") == "img/o.png" && chkSource("cel4") == "img/o.png" && chkSource("cel1") == "block.png"){
		return "cel1";
	}
	if(chkSource("cel8") == "img/o.png" && chkSource("cel5") == "img/o.png" && chkSource("cel2") == "block.png"){
		return "cel2";
	}
	if(chkSource("cel9") == "img/o.png" && chkSource("cel6") == "img/o.png" && chkSource("cel3") == "block.png"){
		return "cel3";
	}
	if(chkSource("cel7") == "img/o.png" && chkSource("cel5") == "img/o.png" && chkSource("cel3") == "block.png"){
		return "cel3";
	}
	if(chkSource("cel9") == "img/o.png" && chkSource("cel5") == "img/o.png" && chkSource("cel1") == "block.png"){
		return "cel1";
	}
	if(chkSource("cel1") == "img/o.png" && chkSource("cel3") == "img/o.png" && chkSource("cel2") == "block.png"){
		return "cel2";
	}
	if(chkSource("cel4") == "img/o.png" && chkSource("cel6") == "img/o.png" && chkSource("cel5") == "block.png"){
		return "cel5";
	}
	if(chkSource("cel7") == "img/o.png" && chkSource("cel9") == "img/o.png" && chkSource("cel8") == "block.png"){
		return "cel8";
	}
	if(chkSource("cel1") == "img/o.png" && chkSource("cel7") == "img/o.png" && chkSource("cel5") == "block.png"){
		return "cel5";
	}
	if(chkSource("cel2") == "img/o.png" && chkSource("cel8") == "img/o.png" && chkSource("cel5") == "block.png"){
		return "cel5";
	}
	if(chkSource("cel3") == "img/o.png" && chkSource("cel9") == "img/o.png" && chkSource("cel6") == "block.png"){
		return "cel6";
	}
	if(chkSource("cel3") == "img/o.png" && chkSource("cel7") == "img/o.png" && chkSource("cel5") == "block.png"){
		return "cel5";
	}
	if(chkSource("cel1") == "img/o.png" && chkSource("cel9") == "img/o.png" && chkSource("cel5") == "block.png"){
		return "cel5";
	}

	if(chkSource("cel1") == "img/x.png" && chkSource("cel3") == "img/x.png" && chkSource("cel2") == "block.png"){
		return "cel2";
	}
	if(chkSource("cel4") == "img/x.png" && chkSource("cel6") == "img/x.png" && chkSource("cel5") == "block.png"){
		return "cel5";
	}
	if(chkSource("cel7") == "img/x.png" && chkSource("cel9") == "img/x.png" && chkSource("cel8") == "block.png"){
		return "cel8";
	}
	if(chkSource("cel1") == "img/x.png" && chkSource("cel7") == "img/x.png" && chkSource("cel4") == "block.png"){
		return "cel4";
	}
	if(chkSource("cel2") == "img/x.png" && chkSource("cel8") == "img/x.png" && chkSource("cel5") == "block.png"){
		return "cel5";
	}
	if(chkSource("cel3") == "img/x.png" && chkSource("cel9") == "img/x.png" && chkSource("cel6") == "block.png"){
		return "cel6";
	}
	if(chkSource("cel1") == "img/x.png" && chkSource("cel9") == "img/x.png" && chkSource("cel5") == "block.png"){
		return "cel5";
	}
	if(chkSource("cel3") == "img/x.png" && chkSource("cel7") == "img/x.png" && chkSource("cel5") == "block.png"){
		return "cel5";
	}
	if(chkSource("cel1") == "img/x.png" && chkSource("cel2") == "img/x.png" && chkSource("cel3") == "block.png"){
		return "cel3";
	}
	if(chkSource("cel4") == "img/x.png" && chkSource("cel5") == "img/x.png" && chkSource("cel6") == "block.png"){
		return "cel6";
	}
	if(chkSource("cel7") == "img/x.png" && chkSource("cel8") == "img/x.png" && chkSource("cel9") == "block.png"){
		return "cel9";
	}
	if(chkSource("cel1") == "img/x.png" && chkSource("cel4") == "img/x.png" && chkSource("cel7") == "block.png"){
		return "cel7";
	}
	if(chkSource("cel2") == "img/x.png" && chkSource("cel5") == "img/x.png" && chkSource("cel8") == "block.png"){
		return "cel8";
	}
	if(chkSource("cel3") == "img/x.png" && chkSource("cel6") == "img/x.png" && chkSource("cel9") == "block.png"){
		return "cel9";
	}
	if(chkSource("cel1") == "img/x.png" && chkSource("cel5") == "img/x.png" && chkSource("cel9") == "block.png"){
		return "cel9";
	}
	if(chkSource("cel3") == "img/x.png" && chkSource("cel5") == "img/x.png" && chkSource("cel7") == "block.png"){
		return "cel7";
	}
	if(chkSource("cel3") == "img/x.png" && chkSource("cel2") == "img/x.png" && chkSource("cel1") == "block.png"){
		return "cel1";
	}
	if(chkSource("cel6") == "img/x.png" && chkSource("cel5") == "img/x.png" && chkSource("cel4") == "block.png"){
		return "cel4";
	}
	if(chkSource("cel9") == "img/x.png" && chkSource("cel8") == "img/x.png" && chkSource("cel7") == "block.png"){
		return "cel7";
	}
	if(chkSource("cel9") == "img/x.png" && chkSource("cel6") == "img/x.png" && chkSource("cel3") == "block.png"){
		return "cel3";
	}
	if(chkSource("cel8") == "img/x.png" && chkSource("cel5") == "img/x.png" && chkSource("cel2") == "block.png"){
		return "cel2";
	}
	if(chkSource("cel7") == "img/x.png" && chkSource("cel4") == "img/x.png" && chkSource("cel1") == "block.png"){
		return "cel1";
	}
	if(chkSource("cel7") == "img/x.png" && chkSource("cel5") == "img/x.png" && chkSource("cel3") == "block.png"){
		return "cel3";
	}
	if(chkSource("cel9") == "img/x.png" && chkSource("cel5") == "img/x.png" && chkSource("cel1") == "block.png"){
		return "cel1";
	}
	
	return "cel" + Math.floor((Math.random() * 9) + 1);

}

function chkSource(id) {

	var element = document.getElementById(id).src; //recebe o src da img clicada
	return element.substring(element.length - 9, element.length); //pegando os 9 ultimos caracter
}

function chkVictory() { //8 condições de vitória

	if(chkSource("cel1")==chkSource("cel2") && chkSource("cel1")==chkSource("cel3") && chkSource("cel1")!="block.png"){

		return true;
	}
	else if(chkSource("cel4")==chkSource("cel5") && chkSource("cel4")==chkSource("cel6") && chkSource("cel4")!="block.png"){

		return true;
	}
	else if(chkSource("cel7")==chkSource("cel8") && chkSource("cel7")==chkSource("cel9") && chkSource("cel7")!="block.png"){
		return true;
	}
	else if(chkSource("cel1")==chkSource("cel4") && chkSource("cel1")==chkSource("cel7") && chkSource("cel1")!="block.png"){
		return true;
	}
	else if(chkSource("cel2")==chkSource("cel5") && chkSource("cel2")==chkSource("cel8") && chkSource("cel2")!="block.png"){

		return true;
	}
	else if(chkSource("cel3")==chkSource("cel6") && chkSource("cel3")==chkSource("cel9") && chkSource("cel3")!="block.png"){

		return true;
	}
	else if(chkSource("cel1")==chkSource("cel5") && chkSource("cel1")==chkSource("cel9") && chkSource("cel1")!="block.png"){

		return true;
	}
	else if(chkSource("cel3")==chkSource("cel5") && chkSource("cel3")==chkSource("cel7") && chkSource("cel3")!="block.png"){

		return true;
	}
}