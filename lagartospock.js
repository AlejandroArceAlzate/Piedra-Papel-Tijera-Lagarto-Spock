function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

opcionUsuario= prompt("Qué eliges?\n piedra: 0 \n papel: 1 \n tijera: 2 \n lagarto: 3 \n spock : 4", 0);

alert("elegiste " + opciones[opcionUsuario]);
alert("javascript eligio " + opciones[opcionMaquina]);

if(opcionUsuario == piedra)
{
	if(opcionMaquina == piedra)
	{
		alert("Haz empatado!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Papel tapa piedra, perdiste!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("piedra aplasta tijera, ganaste!!");
	}
	else if(opcionMaquina == lagarto)
	{
		alert("piedra aplasta lagarto, ganaste!");
	}
	else if(opcionMaquina == spock)
	{
		alert("spock vaporiza piedra, perdiste!");
	}
}
else if(opcionUsuario == papel)
{
	if(opcionMaquina == piedra)
	{
		alert("Papel tapa piedra, ganaste!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Haz empatado!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("tijeras cortan papel, perdiste!");
	}
	else if(opcionMaquina == lagarto)
	{
		alert("lagarto debora papel, perdiste!");
	}
	else if(opcionMaquina == spock)
	{
		alert("papel refuta a spock, ganaste!");
	}
}
else if(opcionUsuario == tijera)
{
	if(opcionMaquina == piedra)
	{
		alert("piedra rompe tijeras, perdiste!");
	}
	else if(opcionMaquina == papel)
	{
		alert("tijeras cortan papel, ganaste!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Haz empatado");
	}
	else if(opcionMaquina == lagarto)
	{
		alert("tijeras decapitan lagrto, ganaste!");
	}
	else if(opcionMaquina == spock)
	{
		alert("spock rompe tijeras, perdiste!");
	}
}
else if(opcionUsuario == lagarto)
{
	if(opcionMaquina == piedra)
	{
		alert("piedra aplasta lagarto, perdiste!");
	}
	else if(opcionMaquina == papel)
	{
		alert("lagarto debora papel, ganaste!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("tijeras decapitan lagarto, perdiste!");
	}
	else if(opcionMaquina == lagarto)
	{
		alert("haz empatado");
	}
	else if(opcionMaquina == spock)
	{
		alert("lagarto envenena a spock, ganaste!");
	}
}
else if(opcionUsuario == spock)
{
	if(opcionMaquina == piedra)
	{
		alert("spock vaporiza piedra, ganaste!");
	}
	else if(opcionMaquina == papel)
	{
		alert("papel refuta a spock, perdiste!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("spock rompe tijeras, ganaste!");
	}
	else if(opcionMaquina == lagarto)
	{
		alert("lagarto envenena spock, perdiste!");
	}
	else if(opcionMaquina == spock)
	{
		alert("haz empatado");
	}
}
else 
{
	alert("dato invalido");
}