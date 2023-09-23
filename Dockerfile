# Gunakan image Node.js versi 14 (atau sesuaikan dengan versi yang Anda butuhkan)
FROM node:18-alpine

# Tambahkan user non-root
RUN adduser --disabled-password --gecos "" jay

# Buat direktori untuk aplikasi Anda
WORKDIR /app

# Salin file package.json dan package-lock.json (jika ada) ke dalam container
COPY package*.json ./

# Install dependensi yang diperlukan
RUN npm install

# Salin seluruh konten proyek Anda ke dalam container
COPY . .

# Build aplikasi Next.js
RUN npm run build

# Ekspor port yang akan digunakan oleh aplikasi Anda
EXPOSE 3000

# Beralih ke user non-root
USER jay

# Jalankan aplikasi Next.js
CMD ["npm", "start"]
