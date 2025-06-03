const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

client.on("qr", (qr) => {
  console.log("📲 Escanea este código QR con tu WhatsApp Business (número de Venta Fácil).");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("✅ Bot de Venta Fácil conectado y listo para usar.");
});

client.initialize();
