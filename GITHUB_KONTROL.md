# GitHub'da Dosyaları Kontrol Etme ve Düzeltme

## 🔍 Sorun: Site Açılıyor Ama JavaScript Çalışmıyor

Bu genellikle şu nedenlerden kaynaklanır:
1. GitHub'da dosyalar güncel değil
2. JavaScript dosyası yüklenmiyor (404 hatası)
3. Logo dosyası bulunamıyor

## ✅ Çözüm Adımları

### 1. Tüm Dosyaları Tekrar Push Edin

```powershell
git add .
git commit -m "Force update all files with version 4"
git push origin buddyco
```

### 2. GitHub'da Dosyaları Kontrol Edin

1. **GitHub Repository'ye gidin:** `https://github.com/Asklepius99/buddycoapps`
2. **Code** sekmesine tıklayın
3. **Branch:** `buddyco` seçili olduğundan emin olun
4. Şu dosyaları kontrol edin:

#### script.js dosyasını kontrol edin:
- Dosyayı açın
- İlk satırlarda `firstsight-logo.png` yazıyor mu?
- `name: "First Sight"` yazıyor mu?

#### index.html dosyasını kontrol edin:
- `script.js?v=4` yazıyor mu?
- `styles.css?v=4` yazıyor mu?

#### firstsight-logo.png dosyası var mı?
- Dosya listesinde `firstsight-logo.png` görünüyor mu?

### 3. GitHub Pages Ayarlarını Kontrol Edin

1. **Settings** → **Pages**
2. **Source:** `buddyco` branch seçili olmalı
3. **Folder:** `/ (root)` seçili olmalı
4. **Save** butonuna tıklayın

### 4. GitHub Actions'ı Kontrol Edin

1. **Actions** sekmesine gidin
2. Son commit'iniz için build işlemi var mı?
3. Hata varsa, hata mesajını okuyun

### 5. Tarayıcı Konsolunu Kontrol Edin

1. Siteyi açın: `https://buddycoapps.com`
2. `F12` tuşuna basın (Developer Tools)
3. **Console** sekmesine gidin
4. Hata var mı kontrol edin:
   - `script.js` yüklenemedi hatası var mı?
   - `firstsight-logo.png` bulunamadı hatası var mı?
   - Başka hatalar var mı?

### 6. Network Sekmesini Kontrol Edin

1. `F12` → **Network** sekmesi
2. Sayfayı yenileyin (`F5`)
3. `script.js` dosyası yüklendi mi?
4. Status kodu ne? (200 olmalı, 404 olmamalı)

## 🚨 Yaygın Hatalar ve Çözümleri

### Hata: script.js 404 Not Found
**Çözüm:** Dosya GitHub'da yok veya yanlış yolda
- GitHub'da `script.js` dosyası var mı kontrol edin
- Dosya yolu doğru mu? (`/script.js` olmalı, `/buddycoapps/script.js` değil)

### Hata: firstsight-logo.png 404 Not Found
**Çözüm:** Logo dosyası GitHub'da yok
- GitHub'da `firstsight-logo.png` dosyası var mı kontrol edin
- Dosyayı push ettiniz mi?

### Hata: JavaScript çalışmıyor ama hata yok
**Çözüm:** Cache sorunu
- Hard refresh yapın: `Ctrl + F5`
- Incognito mode'da test edin
- Versiyon numarasını artırın (şu an v=4)

## 💡 Hızlı Test

GitHub'ın verdiği direkt URL'yi test edin:
- `https://asklepius99.github.io/buddycoapps/`

Bu çalışıyorsa ama `buddycoapps.com` çalışmıyorsa, DNS sorunu olabilir.

## ✅ Kontrol Listesi

- [ ] Tüm dosyaları push ettiniz mi?
- [ ] GitHub'da `buddyco` branch'inde dosyalar güncel mi?
- [ ] `script.js` dosyasında `firstsight-logo.png` yazıyor mu?
- [ ] `firstsight-logo.png` dosyası GitHub'da var mı?
- [ ] GitHub Pages ayarlarında `buddyco` branch seçili mi?
- [ ] Tarayıcı konsolunda hata var mı?
- [ ] Network sekmesinde `script.js` yüklendi mi?
- [ ] Hard refresh yaptınız mı? (`Ctrl + F5`)

