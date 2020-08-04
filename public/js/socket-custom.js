var socket = io();

//On: escuchar en el cliente
socket.on("connect", function () {
	console.log("Conectado al servidor");
});

socket.on("disconnect", function () {
	console.log("Perdimos conexión con el servidor");
});

//Emit: Enviar información al servidor
socket.emit(
	"enviarMensaje",
	{
		usuario: "Josue",
		mensaje: "Hola mundo",
	},
	function (respuesta) {
		console.log("Respuesta server: ", respuesta);
	}
);

//Escuchar información
socket.on("enviarMensaje", function (server) {
	console.log("Servidor: ", server.mensaje);
});
