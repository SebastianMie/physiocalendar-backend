# Verwende ein offizielles Node.js-LTS-Image als Basis
FROM node:18

# Arbeitsverzeichnis setzen
WORKDIR /app

# Kopiere package.json und package-lock.json
COPY package*.json ./

# Installiere Abhängigkeiten
RUN npm install

# Kopiere den Rest des Codes
COPY . .

# Baue die Anwendung (für TypeScript-Apps)
RUN npm run build

# Exponiere den Port, auf dem die App läuft
EXPOSE 3000

# Starte die Anwendung
CMD ["npm", "start"]
