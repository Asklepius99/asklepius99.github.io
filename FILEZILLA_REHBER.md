# FileZilla ile Dosya Yükleme - Adım Adım Rehber

## 📥 1. ADIM: FileZilla Client İndirme

### Hangi Versiyonu İndirmeli?
✅ **FileZilla Client** indirmelisiniz (Server değil!)

### İndirme Adımları:
1. Tarayıcınızda şu adrese gidin: **https://filezilla-project.org/**
2. Ana sayfada **"Download FileZilla Client"** butonuna tıklayın
3. Veya direkt: **https://filezilla-project.org/download.php?type=client**
4. İşletim sisteminize uygun versiyonu seçin:
   - **Windows** için: "Download FileZilla Client" (Windows için)
   - Otomatik olarak doğru versiyonu önerecektir
5. İndirme başlayacak (yaklaşık 10-15 MB)

## 🔧 2. ADIM: FileZilla Kurulumu

1. İndirdiğiniz dosyayı çalıştırın (örn: `FileZilla_3.x.x_win64-setup.exe`)
2. Kurulum sihirbazı açılacak
3. **"I Agree"** (Kabul Ediyorum) butonuna tıklayın
4. Kurulum seçeneklerini varsayılan olarak bırakın
5. **"Next"** (İleri) butonlarına tıklayarak devam edin
6. **"Install"** (Kur) butonuna tıklayın
7. Kurulum tamamlandığında **"Finish"** (Bitir) butonuna tıklayın

## 🔑 3. ADIM: FTP Bilgilerinizi Alın (cPanel'den)

cPanel'e giriş yapın ve FTP bilgilerinizi alın:

### Yöntem 1: FTP Accounts Bölümünden
1. cPanel ana sayfasında **"FTP Accounts"** veya **"FTP Hesapları"** bölümünü bulun
2. Açın ve mevcut FTP hesabınızı görün
3. Veya yeni bir FTP hesabı oluşturun

### Yöntem 2: cPanel Ana Bilgilerinden
1. cPanel ana sayfasında **"General Information"** veya **"Genel Bilgiler"** bölümünü bulun
2. FTP bilgileriniz orada olabilir

### İhtiyacınız Olan Bilgiler:
- **FTP Host/Server:** `ftp.buddycoapps.com` veya IP adresi
- **FTP Kullanıcı Adı:** (cPanel kullanıcı adınız veya özel FTP kullanıcı adı)
- **FTP Şifresi:** (cPanel şifreniz veya FTP şifreniz)
- **Port:** 21 (genellikle otomatik)

## 🔌 4. ADIM: FileZilla'da FTP Bağlantısı

1. FileZilla'yı açın
2. Üst kısımda şu alanları göreceksiniz:
   ```
   Host: [buraya FTP host yazın]
   Username: [buraya kullanıcı adı yazın]
   Password: [buraya şifre yazın]
   Port: 21
   ```
3. Bilgilerinizi girin:
   - **Host:** `ftp.buddycoapps.com` (veya hosting'inizin verdiği adres)
   - **Username:** FTP kullanıcı adınız
   - **Password:** FTP şifreniz
   - **Port:** 21 (genellikle otomatik dolu gelir)
4. **"Quickconnect"** (Hızlı Bağlan) butonuna tıklayın
5. İlk kez bağlanıyorsanız bir uyarı çıkabilir - **"OK"** veya **"Always trust this host"** seçin

## 📁 5. ADIM: Doğru Klasöre Gitme

Bağlantı başarılı olduğunda:

1. **Sağ tarafta** (Remote site - Uzak site) web sunucunuz görünecek
2. Şu klasörlerden birine gitmeniz gerekiyor:
   - `public_html` ← **EN YAYGIN (Büyük ihtimalle bu)**
   - `www`
   - `htdocs`
   - `httpdocs`
3. Klasöre çift tıklayarak girin
4. Bu klasör web sitenizin kök dizinidir

## 📤 6. ADIM: Dosyaları Yükleme

1. **Sol tarafta** (Local site - Yerel site) bilgisayarınızdaki dosyaları görün
2. Şu klasöre gidin: `C:\Users\user\Desktop\buddycoapps\`
3. **Yüklenecek dosyalar:**
   - `index.html`
   - `app1.html`
   - `app2.html`
   - `app3.html`
   - `script.js`
   - `styles.css`
   - `firstsight-logo.svg`

### Yükleme Yöntemi 1: Sürükle-Bırak
1. Sol taraftan dosyaları seçin (Ctrl tuşuna basılı tutarak birden fazla seçebilirsiniz)
2. Seçili dosyaları **sağ tarafa sürükleyin**
3. Dosyalar otomatik olarak yüklenecek

### Yükleme Yöntemi 2: Sağ Tık Menüsü
1. Sol tarafta dosyaları seçin
2. Sağ tıklayın
3. **"Upload"** (Yükle) seçeneğini seçin

## ✅ 7. ADIM: Yükleme Kontrolü

1. Dosyalar yüklendikten sonra sağ tarafta görünmelidir
2. Tarayıcıda şu adresleri test edin:
   - `https://buddycoapps.com` → Ana sayfa görünmeli
   - `https://buddycoapps.com/app1.html` → First Sight sayfası görünmeli

## 🐛 Sorun Giderme

### Bağlantı Hatası Alıyorsam?
- FTP host adresini kontrol edin
- Kullanıcı adı ve şifreyi kontrol edin
- Port numarasının 21 olduğundan emin olun
- Firewall'unuzun FileZilla'ya izin verdiğinden emin olun

### Dosyalar Görünmüyor?
- `public_html` klasörüne gittiğinizden emin olun
- Dosyaların yüklendiğini sağ tarafta kontrol edin
- Tarayıcıda sayfayı yenileyin (Ctrl+F5)

### Logo/Resimler Görünmüyor?
- `firstsight-logo.svg` dosyasının yüklendiğinden emin olun
- Dosya adlarının doğru olduğundan emin olun (büyük/küçük harf duyarlı olabilir)

## 💡 İpuçları

- FileZilla bağlantı bilgilerinizi kaydedebilirsiniz:
  - Üst menüden **File > Site Manager**
  - Yeni site ekleyin ve bilgilerinizi kaydedin
  - Bir sonraki sefer hızlıca bağlanabilirsiniz

- Dosya yükleme sırasında ilerlemeyi alt kısımdaki "Queued files" bölümünden takip edebilirsiniz


