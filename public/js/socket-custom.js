var socket = io();

let botonEnviar = document.getElementById("enviar");

botonEnviar.onclick = function () {
	let usuario = document.getElementById("usuario").value;
	let mensaje = document.getElementById("texto").value;
	document.getElementById("chat").innerHTML += `
	<p>${usuario}: ${mensaje}</p>
	`;
	socket.emit("enviarMensaje", { usuario, mensaje });
	document.getElementById("texto").value = "";
	document.getElementById("texto").focus();
};

//On: escuchar en el cliente
socket.on("connect", function () {
	console.log("Conectado al servidor");
});

socket.on("disconnect", function () {
	console.log("Perdimos conexión con el servidor");
});

//Emit: Enviar información al servidor
// socket.emit(
// 	"enviarMensaje",
// 	{
// 		usuario: "Josue",
// 		mensaje: "Hola mundo",
// 	},
// 	function (respuesta) {
// 		console.log("Respuesta server: ", respuesta);
// 	}
// );

//Escuchar información
socket.on("enviarMensaje", function (server) {
	let chat = (document.getElementById("chat").innerHTML += `
	<p>${server.usuario}: ${server.mensaje}</p>
	`);
});
