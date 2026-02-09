# cPanel'de Dosya Yükleme Rehberi

## 📂 cPanel'de Dosya Yöneticisini Bulma

cPanel'de dosya yöneticisi farklı yerlerde olabilir. Şu adımları deneyin:

### Yöntem 1: Ana Sayfada "Files" Bölümü
1. cPanel ana sayfasına gidin
2. **"Files"** bölümünü bulun (genellikle sol üstte, turuncu ikonlar arasında)
3. **"File Manager"** seçeneğine tıklayın

### Yöntem 2: Arama Kutusu Kullanın
1. cPanel'in üst kısmında bir **arama kutusu** olmalı
2. **"File Manager"** veya **"Dosya Yöneticisi"** yazın
3. Çıkan sonuca tıklayın

### Yöntem 3: "Files" Menüsü
1. cPanel ana sayfasında
2. **"Files"** kategorisini bulun
3. İçinde şunlar olabilir:
   - File Manager
   - Directory Privacy
   - Disk Usage
   - FTP Accounts
   - Backup

## 🎯 Dosya Yöneticisinde Yapılacaklar

### 1. Doğru Klasöre Gidin
Dosya yöneticisini açtıktan sonra:

- **`public_html`** klasörüne gidin (en yaygın)
- VEYA **`www`** klasörüne gidin
- VEYA **`htdocs`** klasörüne gidin
- VEYA **`httpdocs`** klasörüne gidin

**Not:** Bu klasörlerden biri mutlaka vardır. Bu klasör web sitenizin kök dizinidir.

### 2. Mevcut Dosyaları Kontrol Edin
- Bu klasörde zaten bazı dosyalar olabilir (örn: `index.html`, `.htaccess`)
- Bu normaldir, sizin dosyalarınızı buraya yükleyeceksiniz

### 3. Dosyaları Yükleyin

#### Seçenek A: Tek Tek Yükleme
1. **"Upload"** veya **"Yükle"** butonuna tıklayın
2. Bilgisayarınızdan dosyaları seçin
3. Her dosyayı tek tek yükleyin:
   - `index.html`
   - `app1.html`
   - `app2.html`
   - `app3.html`
   - `script.js`
   - `styles.css`
   - `firstsight-logo.svg`

#### Seçenek B: Toplu Yükleme (ZIP ile)
1. Bilgisayarınızda tüm dosyaları bir ZIP dosyasına sıkıştırın
2. ZIP dosyasını cPanel'e yükleyin
3. cPanel'de ZIP dosyasına sağ tıklayın
4. **"Extract"** veya **"Aç"** seçeneğini seçin
5. ZIP dosyasını silebilirsiniz

## 🔍 cPanel'de Dosya Yöneticisi Bulamıyorsanız

### Alternatif 1: FTP Kullanın
cPanel'de dosya yöneticisi yoksa FTP kullanabilirsiniz:

1. cPanel'de **"FTP Accounts"** veya **"FTP Hesapları"** bölümünü bulun
2. FTP bilgilerinizi alın
3. FileZilla gibi bir program indirin
4. FTP ile bağlanın ve dosyaları yükleyin

### Alternatif 2: Hosting Sağlayıcınızla İletişime Geçin
- Hosting sağlayıcınızın destek ekibiyle iletişime geçin
- "Dosyalarımı web sitesine nasıl yükleyebilirim?" diye sorun
- Size doğru yolu göstereceklerdir

## 📸 Görsel Rehber İçin

cPanel arayüzü farklı olabilir ama genellikle:
- Sol tarafta kategoriler (Files, Databases, Domains, vb.)
- Sağ tarafta veya ortada ikonlar
- "Files" kategorisi genellikle turuncu/mavi bir klasör ikonu ile gösterilir

## ✅ Yükleme Sonrası

1. Tarayıcıda `https://buddycoapps.com` adresini açın
2. Ana sayfa görünüyor mu kontrol edin
3. `https://buddycoapps.com/app1.html` adresini test edin

## 🆘 Hala Bulamıyorsanız

cPanel'in ekran görüntüsünü paylaşabilirsiniz veya:
- Hosting sağlayıcınızın adını söyleyin (örn: Hostinger, Namecheap, vb.)
- Size daha spesifik yardım edebilirim


