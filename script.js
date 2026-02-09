// Uygulama verileri
const apps = [
  {
    id: 1,
    name: "First Sight",
    description:
      "Gerçek hayatta, bulunduğun yerde insanlarla tanış. Etkinliklere katılıp tanış.",
    icon: "firstsight-logo.png",
    tags: ["Sosyal", "Tanışma"],
    page: "firstsight/",
  },
];

// Uygulamaları sayfaya yükle
function loadApps() {
  const appsGrid = document.getElementById("appsGrid");

  if (!appsGrid) return;

  appsGrid.innerHTML = apps
    .map(
      (app) => `
        <a href="${app.page}" class="app-card">
            <div class="app-icon">
                ${
                  app.icon.endsWith(".svg") ||
                  app.icon.endsWith(".png") ||
                  app.icon.endsWith(".jpg")
                    ? `<img src="${app.icon}" alt="${app.name}" style="width: 100%; height: 100%; object-fit: contain;">`
                    : app.icon
                }
            </div>
            <h3>${app.name}</h3>
            <p>${app.description}</p>
            <div class="app-tags">
                ${app.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
        </a>
    `,
    )
    .join("");
}

// Sayfa yüklendiğinde uygulamaları göster
document.addEventListener("DOMContentLoaded", () => {
  loadApps();

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// Uygulama detay sayfası için
function loadAppDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const appId = urlParams.get("id");

  if (!appId) return;

  const app = apps.find((a) => a.id === parseInt(appId));
  if (!app) return;

  // Sayfa başlığını güncelle
  document.title = `${app.name} - BuddyCo Apps`;

  // İçeriği güncelle
  const appDetail = document.querySelector(".app-detail-content");
  if (appDetail) {
    appDetail.innerHTML = `
            <div class="app-detail-header">
                <div class="app-icon">
                    ${
                      app.icon.endsWith(".svg") ||
                      app.icon.endsWith(".png") ||
                      app.icon.endsWith(".jpg")
                        ? `<img src="${app.icon}" alt="${app.name}" style="width: 100%; height: 100%; object-fit: contain;">`
                        : app.icon
                    }
                </div>
                <h1>${app.name}</h1>
                <p>${app.description}</p>
                <div class="app-tags" style="justify-content: center; margin-top: 1rem;">
                    ${app.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                </div>
            </div>
            <div>
                <h2>Özellikler</h2>
                <ul>
                    <li>Modern ve kullanıcı dostu arayüz</li>
                    <li>Hızlı ve güvenilir performans</li>
                    <li>Responsive tasarım</li>
                    <li>Kolay kullanım</li>
                </ul>
                
                <h2>Hakkında</h2>
                <p>${app.name}, kullanıcı deneyimini ön planda tutarak geliştirilmiş modern bir uygulamadır. Günlük işlerinizi kolaylaştırmak ve verimliliğinizi artırmak için tasarlanmıştır.</p>
                
                <h2>Kullanım</h2>
                <p>Uygulamayı kullanmak çok basit. Sadece başlayın ve özelliklerini keşfedin. Herhangi bir sorunuz olursa, bizimle iletişime geçmekten çekinmeyin.</p>
            </div>
        `;
  }
}

// Eğer uygulama detay sayfasındaysak
if (window.location.pathname.includes("app")) {
  document.addEventListener("DOMContentLoaded", loadAppDetail);
}
