# Project Rental Book

Deskripsi singkat tentang proyek ini. Misalnya, "Microservice RESTful API menggunakan Express.js dan Sequelize dengan PostgreSQL."

## Prasyarat

Sebelum memulai, pastikan Anda sudah memiliki hal-hal berikut:

- **Node.js** dan **npm** terinstal. [Download Node.js](https://nodejs.org/)
- **PostgreSQL** terinstal dan berjalan di mesin lokal atau server. [Download PostgreSQL](https://www.postgresql.org/download/)
- **pgAdmin** (opsional) untuk manajemen database. [Download pgAdmin](https://www.pgadmin.org/download/)

## Langkah-langkah Instalasi

### 1. Clone Repository

Clone repositori ini ke mesin lokal Anda:

```bash
git clone https://github.com/username/rental-book-api.git

```

### 2. Clone Repository
Masuk ke direktori proyek dan instal dependensi yang diperlukan:
```bash
cd repository-name
npm install
```
### 3. Konfigurasi PostgreSQL

Sebelum memulai aplikasi, Anda perlu mengonfigurasi koneksi ke PostgreSQL.

#### a. **Buat Database di PostgreSQL**

Buka `psql` atau gunakan **pgAdmin** untuk membuat database baru. Anda bisa menggunakan perintah berikut di terminal untuk membuat database:

```sql
CREATE DATABASE rent_book_db;
```

```sql

CREATE USER developer WITH PASSWORD 'supershy';

```
#### b. Berikan Hak Akses ke User
Pastikan user yang baru dibuat memiliki akses penuh ke database Anda:

```sql
GRANT ALL PRIVILEGES ON DATABASE rent_book_db TO developer;
```
### 4. Konfigurasi Variabel Lingkungan
Aplikasi ini menggunakan variabel lingkungan untuk menyimpan kredensial database.




#### a. Buat dan Edit file .env dan sesuaikan dengan kredensial PostgreSQL yang Anda buat:
```bash
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
```
Pastikan untuk mengganti your_db_name, your_db_user, dan your_db_password dengan nilai yang sesuai.

### 6. Migrasi dan Seed Data (Opsional)
project ini menggunakan Sequelize, Anda dapat menjalankan migrasi dan seed data untuk menyiapkan struktur database dan data awal.

#### a. Jalankan migrasi untuk membuat tabel di database:
```bash

npm run migrate db:migrate
```
#### b. project ini memiliki file seeders, jalankan perintah berikut untuk mengisi database dengan data awal:
```bash

npm run seed:all
```


### 6. Menjalankan Aplikasi
Setelah semua konfigurasi selesai, Anda dapat menjalankan aplikasi dengan perintah:

```bash

npm run start
Aplikasi ini sekarang berjalan di http://localhost:3000

```