var opcionusuario = $(".opcionusuario");

var opcionmaquina= $(".opcionmaquina");	

var Piedra = $(".Piedra"), 
	Papel = $(".Papel"),
	Tijeras = $(".Tijeras"),
	Lagarto = $(".Lagarto"),
	Spock = $(".Spock");

var jsPiedra = 0,
	jsPapel = 1,
	jsTijeras = 2,
	jsLagarto = 3,
	jsSpock = 4;

function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

Piedra.on("click", function()
	{
		opcionusuario.text("Elegiste Piedra");
		opcionjs = aleatorio(0, 4);

		if(opcionjs == jsPiedra)
		{
			opcionmaquina.text("La maquina ha elegido Piedra");
			$(".conclusion").text("Haz empatado!");
		}
		else if(opcionjs == jsPapel)
		{
			opcionmaquina.text("La maquina ha elegido Papel");
			$(".conclusion").text("El Papel cubre a la Piedra!, Haz perdido!");
		}
		else if(opcionjs == jsTijeras)
		{
			opcionmaquina.text("La maquina ha elegido Tijeras");
			$(".conclusion").text("La Piedra rompe las Tijeras!, Haz ganado!");
		}
		else if(opcionjs == jsLagarto)
		{
			opcionmaquina.text("La maquina ha elegido Lagarto");
			$(".conclusion").text("La Piedra aplasta al Lagarto!, Haz ganado!");
		}
		else
		{
			opcionmaquina.text("La maquina ha elegido Spock");
			$(".conclusion").text("Spock vaporiza la Piedra!, Haz perdido!");
		}
	});
Papel.on("click", function()
	{
		opcionusuario.text("Elegiste Papel");
		opcionjs = aleatorio(0, 4);

		if(opcionjs == jsPiedra)
		{
			opcionmaquina.text("La maquina ha elegido Piedra");
			$(".conclusion").text("El Papel cubre a la Piedra!, Haz ganado!");
		}
		else if(opcionjs == jsPapel)
		{
			opcionmaquina.text("La maquina ha elegido Papel");
			$(".conclusion").text("Haz empatado!");
		}
		else if(opcionjs == jsTijeras)
		{
			opcionmaquina.text("La maquina ha elegido Tijeras");
			$(".conclusion").text("Las Tijeras cortan el Papel, Haz perdido!");
		}
		else if(opcionjs == jsLagarto)
		{
			opcionmaquina.text("La maquina ha elegido Lagarto");
			$(".conclusion").text("El Lagarto devora el Papel, Haz perdido!");
		}
		else
		{
			opcionmaquina.text("La maquina ha elegido Spock");
			$(".conclusion").text("El Papel refuta a Spock, Haz ganado!");
		}
	});
Tijeras.on("click", function()
	{
		opcionusuario.text("Elegiste Tijeras");
		opcionjs = aleatorio(0, 4);

		if(opcionjs == jsPiedra)
		{
			opcionmaquina.text("La maquina ha elegido Piedra");
			$(".conclusion").text("La Piedra rompe las Tijeras!, Haz perdido!");
		}
		else if(opcionjs == jsPapel)
		{
			opcionmaquina.text("La maquina ha elegido Papel");
			$(".conclusion").text("Las Tijeras cortan el Papel, Haz ganado!");
		}
		else if(opcionjs == jsTijeras)
		{
			opcionmaquina.text("La maquina ha elegido Tijeras");
			$(".conclusion").text("Haz empatado!");
		}
		else if(opcionjs == jsLagarto)
		{
			opcionmaquina.text("La maquina ha elegido Lagarto");
			$(".conclusion").text("Las Tijeras decapitan al Lagarto, Haz ganado!");
		}
		else
		{
			opcionmaquina.text("La maquina ha elegido Spock");
			$(".conclusion").text("Spock rompe las Tijeras, Haz perdido!");
		}
	});
Lagarto.on("click", function()
	{
		opcionusuario.text("Elegiste Lagarto");
		opcionjs = aleatorio(0, 4);

		if(opcionjs == jsPiedra)
		{
			opcionmaquina.text("La maquina ha elegido Piedra");
			$(".conclusion").text("La Piedra aplasta al Lagarto!, Haz perdido!");
		}
		else if(opcionjs == jsPapel)
		{
			opcionmaquina.text("La maquina ha elegido Papel");
			$(".conclusion").text("El Lagarto devora el Papel, Haz ganado!");
		}
		else if(opcionjs == jsTijeras)
		{
			opcionmaquina.text("La maquina ha elegido Tijeras");
			$(".conclusion").text("Las Tijeras decapitan al Lagarto, Haz perdido!");
		}
		else if(opcionjs == jsLagarto)
		{
			opcionmaquina.text("La maquina ha elegido Lagarto");
			$(".conclusion").text("Haz empatado!");
		}
		else
		{
			opcionmaquina.text("La maquina ha elegido Spock");
			$(".conclusion").text("El Lagarto envenena a Spock, Haz ganado!");
		}
	});
Spock.on("click", function()
	{
		opcionusuario.text("Elegiste Spock");
		opcionjs = aleatorio(0, 4);

		if(opcionjs == jsPiedra)
		{
			opcionmaquina.text("La maquina ha elegido Piedra");
			$(".conclusion").text("Spock vaporiza la Piedra!, Haz ganado!");
		}
		else if(opcionjs == jsPapel)
		{
			opcionmaquina.text("La maquina ha elegido Papel");
			$(".conclusion").text("El Papel refuta a Spock, Haz perdido!");
		}
		else if(opcionjs == jsTijeras)
		{
			opcionmaquina.text("La maquina ha elegido Tijeras");
			$(".conclusion").text("Spock rompe las Tijeras, Haz ganado!");
		}
		else if(opcionjs == jsLagarto)
		{
			opcionmaquina.text("La maquina ha elegido Lagarto");
			$(".conclusion").text("El Lagarto envenena a Spock, Haz perdido!");
		}
		else
		{
			opcionmaquina.text("La maquina ha elegido Spock");
			$(".conclusion").text("Haz empatado!");
		}
	});











