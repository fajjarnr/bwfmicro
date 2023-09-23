# Gunakan image Ubuntu sebagai dasar
FROM ubuntu

# Install dependensi yang dibutuhkan
RUN apt-get update && apt-get install -y \
    curl \
    nodejs \
    npm

# Buat direktori untuk aplikasi Anda
WORKDIR /app

# Salin file package.json dan yarn.lock ke direktori kerja
COPY package.json yarn.lock ./

# Install dependensi dengan npm
RUN npm install

# Salin seluruh konten aplikasi Next.js Anda ke dalam kontainer
COPY . .

# Build aplikasi Next.js
RUN npm run build

# Ekspor port yang akan digunakan oleh aplikasi Anda (ganti sesuai dengan port aplikasi Anda)
EXPOSE 3000

USER 1001

# Jalankan aplikasi Next.js
CMD ["npm", "start"]
