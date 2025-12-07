# BuddyCo Apps - Web Sitesine Yükleme Rehberi

## 📁 Yüklenecek Dosyalar

Aşağıdaki tüm dosyaları web sunucunuza yüklemeniz gerekiyor:

```
buddycoapps.com/
├── index.html          (Ana sayfa)
├── app1.html          (First Sight detay sayfası)
├── app2.html          (Uygulama 2 detay sayfası)
├── app3.html          (Uygulama 3 detay sayfası)
├── script.js          (JavaScript dosyası)
├── styles.css         (CSS dosyası)
└── firstsight-logo.svg (First Sight logosu)
```

## 🚀 Yükleme Yöntemleri

### Yöntem 1: FTP ile Yükleme (Önerilen)

1. **FTP Bilgilerinizi Alın**
   - Hosting sağlayıcınızdan FTP bilgilerinizi alın:
     - FTP Host: `ftp.buddycoapps.com` veya IP adresi
     - FTP Kullanıcı Adı: (hosting'den verilir)
     - FTP Şifresi: (hosting'den verilir)
     - Port: 21 (genellikle)

2. **FileZilla İndirin ve Kurun**
   - https://filezilla-project.org/ adresinden FileZilla'yı indirin
   - Kurulumu tamamlayın

3. **FTP Bağlantısı Yapın**
   - FileZilla'yı açın
   - Üst kısımdaki alanlara FTP bilgilerinizi girin
   - "Hızlı Bağlan" butonuna tıklayın

4. **Dosyaları Yükleyin**
   - Sol tarafta (Yerel site) bilgisayarınızdaki dosyaları görün
   - Sağ tarafta (Uzak site) web sunucunuzu görün
   - Genellikle `public_html` veya `www` klasörüne yüklemeniz gerekir
   - Tüm dosyaları seçin ve sağa sürükleyin (drag & drop)

### Yöntem 2: Hosting Panelinden Yükleme

1. **Hosting Kontrol Paneline Giriş Yapın**
   - cPanel, Plesk veya hosting sağlayıcınızın paneli

2. **Dosya Yöneticisini Açın**
   - "File Manager" veya "Dosya Yöneticisi" seçeneğini bulun

3. **Doğru Klasöre Gidin**
   - `public_html` veya `www` klasörüne gidin
   - Bu klasör web sitenizin kök dizinidir

4. **Dosyaları Yükleyin**
   - "Upload" veya "Yükle" butonuna tıklayın
   - Tüm dosyaları seçin ve yükleyin

### Yöntem 3: Git ile Yükleme (Gelişmiş)

Eğer hosting'iniz Git desteği sunuyorsa:

```bash
# Git repository oluşturun
git init
git add .
git commit -m "Initial commit"

# Hosting'inizin Git repository URL'sini ekleyin
git remote add origin [hosting-git-url]
git push -u origin main
```

## ✅ Yükleme Sonrası Kontroller

1. **Ana Sayfayı Kontrol Edin**
   - Tarayıcınızda `https://buddycoapps.com` adresini açın
   - Ana sayfa görünüyor mu kontrol edin

2. **Dosya Yollarını Kontrol Edin**
   - Tüm resimler, CSS ve JavaScript dosyaları yüklendi mi?
   - Konsol hataları var mı? (F12 > Console)

3. **First Sight Sayfasını Test Edin**
   - `https://buddycoapps.com/app1.html` adresini açın
   - Logo görünüyor mu?
   - Tüm içerik doğru mu?

## 🔧 Önemli Notlar

### Dosya İzinleri
- HTML, CSS, JS dosyaları: `644` izni yeterlidir
- Klasörler: `755` izni yeterlidir

### Domain Ayarları
- Domain'inizin DNS ayarlarını hosting sağlayıcınızın nameserver'larına yönlendirin
- DNS değişiklikleri 24-48 saat sürebilir

### HTTPS (SSL Sertifikası)
- Modern hosting sağlayıcıları ücretsiz SSL sertifikası sunar (Let's Encrypt)
- Hosting panelinizden SSL'i aktifleştirin
- `https://buddycoapps.com` şeklinde erişilebilir olmalı

## 🐛 Sorun Giderme

### Sayfa Görünmüyor
- Dosyalar doğru klasöre (`public_html` veya `www`) yüklendi mi?
- `index.html` dosyası var mı?
- Domain DNS ayarları doğru mu?

### Resimler/Logo Görünmüyor
- `firstsight-logo.svg` dosyası yüklendi mi?
- Dosya yolları doğru mu? (göreceli yollar kullanılıyor)

### CSS/JavaScript Çalışmıyor
- `styles.css` ve `script.js` dosyaları yüklendi mi?
- Tarayıcı konsolunda hata var mı? (F12 > Console)
- Dosya izinleri doğru mu?

## 📞 Destek

Sorun yaşarsanız:
1. Tarayıcı konsolunu kontrol edin (F12)
2. Hosting sağlayıcınızın destek ekibiyle iletişime geçin
3. Dosya yollarını ve izinlerini kontrol edin


