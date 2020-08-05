const { io } = require("../server");

io.on("connection", (client) => {
	console.log("Usuario conectado".yellow);

	client.emit("enviarMensaje", {
		usuario: "No hay usuario que te ha escrito",
		mensaje: "No hay mensajes por el momento",
	});

	client.on("disconnect", () => {
		console.log("Usuario desconectado");
	});

	//Escuchar el cliente
	client.on("enviarMensaje", (data, callback) => {
		console.log(data);

		client.broadcast.emit("enviarMensaje", {
			usuario: data.usuario,
			mensaje: data.mensaje,
		});
		// if (mensaje.usuario) {
		// 	callback({
		// 		respuesta: "Todo salió bien",
		// 	});
		// } else {
		// 	callback({
		// 		respuesta: "Todo salió mal",
		// 	});
		// }
		// callback();
	});
});
