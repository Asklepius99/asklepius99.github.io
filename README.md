# BuddyCo Apps Website

BuddyCo Apps için modern ve kullanıcı dostu bir web sitesi.

## Özellikler

- 🎨 Modern ve temiz tasarım
- 📱 Tam responsive (mobil, tablet, masaüstü)
- ⚡ Hızlı ve optimize edilmiş
- 🔍 SEO dostu yapı
- 🎯 Kullanıcı dostu navigasyon

## Dosya Yapısı

```
buddycoapps/
├── index.html          # Ana sayfa
├── app1.html          # Uygulama 1 detay sayfası
├── app2.html          # Uygulama 2 detay sayfası
├── app3.html          # Uygulama 3 detay sayfası
├── styles.css         # Stil dosyası
├── script.js          # JavaScript dosyası
└── README.md          # Bu dosya
```

## Web Sunucusuna Yükleme

Dosyalarınızı web sunucunuza yüklemek için birkaç yöntem kullanabilirsiniz:

### Yöntem 1: cPanel File Manager (En Kolay)

1. Hosting sağlayıcınızın kontrol panelinde (cPanel) oturum açın
2. **File Manager** veya **Dosya Yöneticisi** bölümüne gidin
3. `public_html` veya `www` klasörüne girin (bazı hostinglerde `htdocs` olabilir)
4. **Upload** veya **Yükle** butonuna tıklayın
5. Tüm dosyaları seçin ve yükleyin:
   - `index.html`
   - `app1.html`, `app2.html`, `app3.html`
   - `styles.css`
   - `script.js`
6. Dosyalar yüklendikten sonra `buddycoapps.com` adresiniz çalışır hale gelecektir

### Yöntem 2: FTP/SFTP Kullanarak

1. **FTP İstemcisi** indirin (FileZilla, WinSCP gibi - ücretsiz)
2. Hosting sağlayıcınızdan aldığınız FTP bilgilerini kullanın:
   - **FTP Sunucu**: genellikle `ftp.buddycoapps.com` veya `buddycoapps.com`
   - **Kullanıcı Adı**: hosting hesabınızın kullanıcı adı
   - **Şifre**: hosting hesabınızın şifresi
   - **Port**: 21 (FTP) veya 22 (SFTP)
3. FTP istemcisinde bağlanın
4. `public_html` veya `www` klasörüne gidin
5. Tüm dosyaları sürükle-bırak ile yükleyin
6. Dosya yapısının doğru olduğundan emin olun (tüm dosyalar aynı klasörde olmalı)

### Yöntem 3: Git Kullanarak (Gelişmiş)

Eğer hosting sağlayıcınız Git desteği sunuyorsa:

1. Dosyalarınızı bir Git repository'sine yükleyin (GitHub, GitLab vb.)
2. Hosting panelinde Git entegrasyonunu kullanın
3. Repository'nizi bağlayın ve otomatik deploy edin

### Yöntem 4: Hosting Sağlayıcısının Özel Arayüzü

Bazı hosting sağlayıcıları (Netlify, Vercel, GitHub Pages gibi) kendi yükleme arayüzlerine sahiptir:
- Dosyaları sürükle-bırak ile yükleyebilirsiniz
- Veya Git repository'nizi bağlayabilirsiniz

### Önemli Notlar

- ✅ Tüm dosyalar aynı klasörde (genellikle `public_html` veya `www`) olmalıdır
- ✅ `index.html` dosyası ana sayfa olarak otomatik açılır
- ✅ Dosya isimlerinde Türkçe karakter kullanmayın (ı, ş, ğ, ü, ö, ç)
- ✅ Dosya izinlerini kontrol edin (genellikle 644 yeterlidir)

### Yükleme Sonrası Kontrol

1. Tarayıcınızda `buddycoapps.com` adresini açın
2. Ana sayfanın göründüğünü kontrol edin
3. Uygulama sayfalarının çalıştığını test edin
4. Mobil görünümü kontrol edin

## Kullanım

1. Dosyaları web sunucunuza yükleyin (yukarıdaki yöntemlerden birini kullanın)
2. `index.html` dosyasını açarak ana sayfayı görüntüleyin
3. Uygulamalarınızı `script.js` dosyasındaki `apps` dizisine ekleyin

## Uygulama Ekleme

Yeni bir uygulama eklemek için:

1. `script.js` dosyasındaki `apps` dizisine yeni bir obje ekleyin:
```javascript
{
    id: 4,
    name: "Yeni Uygulama",
    description: "Açıklama buraya",
    icon: "🎯",
    tags: ["Tag1", "Tag2"],
    page: "app4.html"
}
```

2. Yeni bir HTML dosyası oluşturun (örn: `app4.html`) ve diğer app sayfalarını örnek alarak içeriği düzenleyin.

## Özelleştirme

- **Renkler**: `styles.css` dosyasındaki `:root` değişkenlerini düzenleyin
- **Fontlar**: Google Fonts'tan farklı bir font seçebilir veya sistem fontlarını kullanabilirsiniz
- **İçerik**: HTML dosyalarındaki metinleri düzenleyin

## Tarayıcı Desteği

- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)

## Lisans

© 2024 BuddyCo Apps. Tüm hakları saklıdır.

