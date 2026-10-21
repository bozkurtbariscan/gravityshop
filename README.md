# Gravity Shop web sitesi (GitHub Pages)

Bu klasör oyunun **gizlilik politikası** ve **yardım ve iletişim** sayfalarını taşır. App Store Connect bu iki adresi
ister, oyun da Ayarlar'dan ikisini açar (App Store kuralı 5.1.1). Sayfalar Türkçe ve İngilizcedir; çerez, analiz ya da
dışarıdan yazı tipi yüklemez.

| Dosya | Ne işe yarar |
| --- | --- |
| `index.html` | Ana sayfa (App Store Connect'te isteğe bağlı "Pazarlama URL'si") |
| `privacy.html` | Gizlilik politikası (App Store Connect "Gizlilik Politikası URL'si" + oyundaki "Gizlilik politikası") |
| `support.html` | Yardım ve iletişim (App Store Connect "Destek URL'si" + oyundaki "Yardım ve iletişim") |
| `style.css`, `site.js` | Görünüm; dil seçimi ve iletişim adresi |
| `assets/` | Uygulama ikonu, logo, Fredoka yazı tipi (alt küme) ve lisansı |

## 1. Depoyu aç

1. github.com'da yeni bir **public** depo oluştur ve adını `gravityshop` koy. (Ücretsiz hesapta Pages yalnız public
   depolarda çalışır. Başka bir ad seçersen aşağıdaki adreslerde `gravityshop` yerine o ad geçer.)
2. Depo sayfasında **Add file → Upload files** ile bu klasörün içindekileri sürükle bırak: üç `.html` dosyası,
   `style.css`, `site.js` ve `assets` klasörü (README'yi yüklemen gerekmez). **Commit changes**.

## 2. İletişim e-postasını yaz

`site.js` içindeki şu satırı kendi adresinle değiştir (GitHub'da dosyayı açıp kalem simgesine bas):

```js
var CONTACT_EMAIL = "E-POSTA-ADRESIN";
```

Adres her sayfada görünür; oyuncular ve Apple'ın inceleme ekibi sana buradan ulaşır. Oyuna ayrı bir destek adresi
açmak (örneğin yeni bir Gmail) iş e-postanı açıkta bırakmamak için iyi olur. Adres yazılana kadar sayfalarda
kırmızı **[e-mail]** görünür.

## 3. Pages'i aç

Depoda **Settings → Pages → Build and deployment**: Source **Deploy from a branch**, Branch **main** ve **/(root)** →
**Save**. Bir iki dakika sonra site şu adreste açılır:

`https://KULLANICI-ADIN.github.io/gravityshop/`

## 4. Adresleri oyuna ve App Store Connect'e yaz

- **Oyun:** `Assets/_Project/Scripts/Core/AppLinks.cs` içindeki `SiteBase` satırı
  (`https://KULLANICI-ADIN.github.io/gravityshop/`). Kullanıcı adını söylersen ben de yazarım. Bu satır yer tutucu
  kaldıkça App Store build'i başlamaz (simülatör ve Development build'ler etkilenmez).
- **App Store Connect → Uygulama Bilgileri → Gizlilik Politikası URL'si:** `…/gravityshop/privacy.html`
- **Sürüm sayfası → Destek URL'si:** `…/gravityshop/support.html`
- **Pazarlama URL'si (isteğe bağlı):** `…/gravityshop/`

## Dil

`?lang=tr` Türkçe, `?lang=en` İngilizce açar; parametre yoksa tarayıcının dili seçilir. Oyun kendi dil kodunu ekler;
Türkçe dışındaki on dil İngilizce sayfayı görür. JavaScript kapalıysa iki dil alt alta görünür.

## Güncellerken

- Politikayı değiştirirsen iki dildeki "Son güncelleme / Last updated" tarihini de değiştir.
- Oyun reklam, satın alma ya da analiz eklerse gizlilik politikası ve App Store'daki gizlilik bilgileri **o sürüm
  yayımlanmadan önce** güncellenmeli (`docs/APP_STORE.md`, "İleride").
- Oyun App Store'a çıkınca `index.html`'deki "Yakında App Store'da / Coming soon to the App Store" yazısını mağaza
  bağlantısıyla değiştir.
