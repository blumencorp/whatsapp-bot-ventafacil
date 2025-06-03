# Imagen base con Puppeteer preinstalado
FROM ghcr.io/puppeteer/puppeteer:latest

# Crear carpeta de trabajo
WORKDIR /app

# Copiar archivos del proyecto
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto
EXPOSE 3000

# Comando para ejecutar el bot
CMD ["npm", "start"]
