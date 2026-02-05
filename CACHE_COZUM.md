# GitHub Pages Cache Sorunu - Hızlı Çözümler

## 🔄 Sayfa Yenilenmiyor - Çözüm Adımları

### 1. Tarayıcı Cache'ini Temizleyin

**Windows:**
- `Ctrl + Shift + Delete` tuşlarına basın
- "Cached images and files" seçeneğini işaretleyin
- "Clear data" butonuna tıklayın

**Hard Refresh (Önerilen):**
- `Ctrl + F5` veya `Ctrl + Shift + R`
- Bu, sayfayı cache'den değil, sunucudan yeniden yükler

### 2. GitHub Pages Cache'ini Temizleyin

1. GitHub repository'nize gidin: `https://github.com/Asklepius99/buddycoapps`
2. **Settings** → **Pages** bölümüne gidin
3. **Source** bölümünde:
   - Başka bir branch seçin (örn: `gh-pages` varsa)
   - **Save** butonuna tıklayın
   - Tekrar `buddyco` branch'ine dönün
   - **Save** butonuna tekrar tıklayın
4. Bu işlem GitHub'ın cache'ini temizler

### 3. Versiyon Parametresi Eklendi

CSS ve JS dosyalarına versiyon parametresi ekledim (`?v=3`). Bu, tarayıcının eski dosyaları cache'den kullanmasını engeller.

**Her güncellemede versiyon numarasını artırın:**
- `styles.css?v=3` → `styles.css?v=4`
- `script.js?v=3` → `script.js?v=4`

### 4. GitHub Actions'ı Kontrol Edin

1. Repository'nizde **Actions** sekmesine gidin
2. Son commit'iniz için build işlemi var mı kontrol edin
3. Hata varsa, hata mesajını okuyun

### 5. Bekleme Süresi

GitHub Pages güncellemeleri **1-10 dakika** sürebilir. Biraz bekleyin.

### 6. Doğrudan GitHub URL'sini Test Edin

Custom domain yerine GitHub'ın verdiği URL'yi test edin:
- `https://asklepius99.github.io/buddycoapps/`

Bu çalışıyorsa ama `buddycoapps.com` çalışmıyorsa, DNS ayarlarını kontrol edin.

### 7. Dosyaların Yüklendiğini Kontrol Edin

1. GitHub repository'nizde **Code** sekmesine gidin
2. Dosyaların gerçekten yüklendiğini kontrol edin:
   - `script.js` dosyasında `firstsight-logo.png` yazıyor mu?
   - `app1.html` dosyasında `firstsight-logo.png` yazıyor mu?
   - `firstsight-logo.png` dosyası var mı?

### 8. Incognito/Private Mode'da Test Edin

Tarayıcıda gizli pencere açın (`Ctrl + Shift + N`) ve siteyi test edin. Eğer gizli pencerede çalışıyorsa, cache sorunudur.

## ✅ Hızlı Kontrol Listesi

- [ ] Hard refresh yaptınız mı? (`Ctrl + F5`)
- [ ] Tarayıcı cache'ini temizlediniz mi?
- [ ] GitHub Pages cache'ini temizlediniz mi?
- [ ] 10 dakika beklediniz mi?
- [ ] Dosyalar GitHub'da güncel mi?
- [ ] Incognito mode'da test ettiniz mi?

## 🚀 Hala Çalışmıyorsa

1. GitHub repository'nizdeki dosyaları kontrol edin
2. GitHub Actions'da hata var mı bakın
3. DNS ayarlarınızı kontrol edin (custom domain kullanıyorsanız)
4. Hosting sağlayıcınızla iletişime geçin

