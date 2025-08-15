# Use Node.js 18
FROM node:20

# Cria pasta de trabalho
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta do Vite
EXPOSE 5173

# Inicia Vite aceitando conexões externas
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]