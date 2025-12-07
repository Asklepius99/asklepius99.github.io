# GitHub Pages Cache Sorunu Çözümü

## 🔍 Sorun: Yeni Dosyalar Push Edildi Ama Eski Site Açılıyor

Bu genellikle **cache** veya **yapılandırma** sorunudur. Şu adımları takip edin:

## ✅ 1. ADIM: Doğru Branch'e Push Ettiğinizden Emin Olun

GitHub Pages genellikle şu branch'lerden birini kullanır:
- `main` (yeni repos)
- `master` (eski repos)
- `gh-pages` (özel branch)

### Kontrol:
```bash
# Hangi branch'desiniz?
git branch

# Eğer main/master branch'de değilseniz:
git checkout main
# veya
git checkout master
```

## ✅ 2. ADIM: GitHub Pages Ayarlarını Kontrol Edin

1. GitHub repository'nize gidin
2. **Settings** (Ayarlar) sekmesine tıklayın
3. Sol menüden **Pages** seçeneğine tıklayın
4. **Source** bölümünde:
   - **Branch:** `main` (veya `master`) seçili olmalı
   - **Folder:** `/ (root)` seçili olmalı
5. **Save** butonuna tıklayın

## ✅ 3. ADIM: Cache Temizleme

### Tarayıcı Cache'ini Temizleyin:
1. Tarayıcıda `Ctrl + Shift + Delete` tuşlarına basın
2. "Cached images and files" seçeneğini işaretleyin
3. "Clear data" butonuna tıklayın
4. Veya **Hard Refresh** yapın:
   - Windows: `Ctrl + F5` veya `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

### GitHub Pages Cache'ini Temizlemek:
1. Repository'nizde **Settings > Pages** bölümüne gidin
2. **Source** bölümünde başka bir branch seçin (örn: `gh-pages`)
3. **Save** butonuna tıklayın
4. Tekrar **main** branch'ine geri dönün
5. **Save** butonuna tekrar tıklayın
6. Bu işlem GitHub'ın cache'ini temizler

## ✅ 4. ADIM: .nojekyll Dosyası Ekleyin

GitHub Pages varsayılan olarak Jekyll kullanır. Eğer statik HTML kullanıyorsanız `.nojekyll` dosyası ekleyin:

```bash
# Terminal'de:
touch .nojekyll
git add .nojekyll
git commit -m "Add .nojekyll to disable Jekyll"
git push
```

**Not:** Bu dosyayı zaten ekledim, sadece push etmeniz yeterli.

## ✅ 5. ADIM: Commit ve Push'u Kontrol Edin

### Tüm değişiklikleri commit edin:
```bash
git add .
git commit -m "Update First Sight app and add legal pages"
git push origin main
```

### Push'un başarılı olduğundan emin olun:
```bash
git status
# "Your branch is up to date" mesajını görmelisiniz
```

## ✅ 6. ADIM: GitHub Actions'ı Kontrol Edin

1. Repository'nizde **Actions** sekmesine gidin
2. Son commit'iniz için bir build işlemi var mı kontrol edin
3. Hata varsa, hata mesajını okuyun

## ✅ 7. ADIM: Bekleme Süresi

GitHub Pages güncellemeleri **1-10 dakika** sürebilir. Biraz bekleyin.

## ✅ 8. ADIM: Doğrudan GitHub URL'sini Test Edin

Custom domain yerine GitHub'ın verdiği URL'yi test edin:
- `https://[kullanıcı-adı].github.io/[repo-adı]/`

Bu çalışıyorsa ama custom domain çalışmıyorsa, DNS ayarlarını kontrol edin.

## 🔧 Hızlı Çözüm Komutları

Terminal'de şu komutları sırayla çalıştırın:

```bash
# 1. Tüm değişiklikleri ekle
git add .

# 2. Commit yap
git commit -m "Update website with First Sight app"

# 3. Push yap
git push origin main

# 4. Status kontrol et
git status
```

## 🐛 Hala Çalışmıyorsa

### Kontrol Listesi:
- [ ] Doğru branch'de push yaptınız mı? (`main` veya `master`)
- [ ] GitHub Pages ayarlarında doğru branch seçili mi?
- [ ] `.nojekyll` dosyası repository'de var mı?
- [ ] Tarayıcı cache'ini temizlediniz mi?
- [ ] Hard refresh yaptınız mı? (`Ctrl + F5`)
- [ ] 10 dakika beklediniz mi?
- [ ] GitHub Actions'da hata var mı?

### Debug İçin:
1. GitHub repository'nizde **Code** sekmesine gidin
2. Dosyaların gerçekten yüklendiğini kontrol edin
3. `index.html`, `app1.html`, `firstsight-logo.svg` dosyaları var mı?

## 💡 İpucu: Versiyon Parametresi Ekleyin

Cache sorununu önlemek için HTML dosyalarınıza versiyon parametresi ekleyebilirsiniz:

```html
<link rel="stylesheet" href="styles.css?v=2">
<script src="script.js?v=2"></script>
```

Her güncellemede versiyon numarasını artırın.

