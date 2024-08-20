# Aplikasi weather

Aplikasi React Native sederhana yang menampilkan cuaca saat ini dan prakiraan cuaca untuk 3 hari mendatang di kota yang ditentukan, menggunakan API OpenWeatherMap.

## Fitur

- Menampilkan kondisi cuaca saat ini (suhu, deskripsi, dll.)
- Memberikan prakiraan cuaca untuk 3 hari mendatang
- UI yang sederhana dan intuitif

## Prasyarat

Sebelum memulai, pastikan Anda telah memenuhi persyaratan berikut:

- Node.js dan npm sudah terinstal
- React Native CLI sudah terinstal
- Android Studio atau Xcode terinstal (tergantung pada platform Anda)
- API key OpenWeatherMap yang valid

## Instalasi

Ikuti langkah-langkah berikut untuk menyiapkan dan menjalankan proyek secara lokal:

1. Clone repository ini:

   ```bash
   git clone https://github.com/username-anda/weather-forecast-app.git
   cd weather-forecast-app
 2. Instal dependensi:
    npm install
 3. Konfigurasi API key:
    -Buka src/services/WeatherService.js.
    -Ganti variabel API_KEY dengan API key OpenWeatherMap Anda:
     const API_KEY = 'api_key_openweathermap_anda';
  4. Mulai Metro server:
    -npx react-native start --reset-cache
  5. Jalankan aplikasi:
     - npx react-native run-android
     - npx react-native run-ios
## Penggunaan
Mulai aplikasi di perangkat atau emulator Anda.
Masukkan nama kota yang ingin Anda cek cuacanya di bar pencarian.
Ketuk tombol "Cari" untuk mengambil dan menampilkan informasi cuaca.
Berkontribusi
Jika Anda ingin berkontribusi pada proyek ini, silakan fork repository ini dan kirim pull request.

## Lisensi
Proyek ini bersifat open-source dan tersedia di bawah Lisensi MIT.
