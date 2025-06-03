const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log("📲 Escanea este código QR con tu WhatsApp Business (número de Venta Fácil).");
});

client.on('ready', () => {
    console.log('🤖 Bot conectado y listo para atender leads.');
});

client.on('message', async msg => {
    const content = msg.body;
    const from = msg.from;

    fetch('https://blumencorp.app.n8n.cloud/webhook/venta-facil-leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            telefono: from,
            mensaje: content
        })
    });

    msg.reply('Gracias por escribirnos 👋. Estamos procesando tu solicitud. Pronto recibirás una respuesta personalizada.');
});

client.initialize();

app.get("/", (_, res) => res.send("Bot de Venta Fácil activo."));
app.listen(3000, () => console.log("Servidor en puerto 3000"));

