# Usa una imagen base de Node.js
FROM node:latest

# Establece el directorio de trabajo en /backend
WORKDIR /backend

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente del backend
COPY . .

# Expone el puerto en el que se ejecuta la aplicación Node.js
EXPOSE 5000

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]