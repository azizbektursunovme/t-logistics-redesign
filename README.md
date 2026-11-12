# T-LOGISTICS Inc — sayt redizayni

[t-logisticsinc.com](https://t-logisticsinc.com) uchun yangi versiya. Asos: ClickUp'dagi "t-logisticsinc.com — sayt va dizayn ko'rigi" xulosasi.
Bu alohida repo; asosiy saytga ko'chirish dasturchi bilan kelishiladi.

- Ko'rish havolasi: https://azizbektursunovme.github.io/t-logistics-redesign/
- Repo: https://github.com/azizbektursunovme/t-logistics-redesign

- Uslub: **Navy korporativ** (Pinterest'dagi yuk tashish saytlari tahlilidan keyin tanlangan): logotip navy + ko'k, katta yuk mashinasi surati hero'da, hero ichida qisqa narx so'rash formasi, suratli xizmat kartalari, navy bandda 48 shtat xaritasi.
- Texnologiya: [Astro 7](https://astro.build), statik HTML, 3 ta kichik skript (mobil menyu, qisqa forma, to'liq forma).
- Shrift: Archivo (o'zimizda, 35 KB). Tashqi CDN va kuzatuv skriptlari yo'q.
- Suratlar: **vaqtinchalik** bepul litsenziyali suratlar (Wikimedia Commons), `/credits/` sahifasida mualliflari ko'rsatilgan. Haqiqiy T-LOGISTICS suratlari kelganda almashtiriladi.

## Ishga tushirish

Node.js **22.23.4 yoki undan yangi** kerak (Node 24 LTS tavsiya).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/ papkaga statik sayt
npm run preview    # build'ni lokal ko'rish
```

Sozlamalar (`.env.example` dan `.env` qiling):

| O'zgaruvchi | Nima uchun |
|---|---|
| `PUBLIC_QUOTE_ENDPOINT` | Narx so'rash formasi JSON yuboradigan API manzili. Bo'sh bo'lsa forma **preview rejimida**: hech narsa yuborilmaydi. |
| `PUBLIC_NOINDEX` | `true` bo'lsa sahifalar Google'da indekslanmaydi (preview uchun). |

GitHub Pages (ko'rish havolasi): `npm run deploy:pages` preview'ni `/<repo>/` yo'li bilan build qiladi
va `dist/` ni `gh-pages` branch'iga joylaydi (repo Settings → Pages → Source: **Deploy from a branch**, `gh-pages`, `/`).
Preview sahifalari `noindex` bilan chiqadi.

## Sahifalar

| Sahifa | Holati | Izoh |
|---|---|---|
| `/` Bosh sahifa | Tayyor | Foto hero + qisqa forma, raqamlar, 4 ta suratli xizmat, 48 shtat xaritasi, "nega biz", haydovchi/mijoz CTA |
| `/services/` Xizmatlar | Tayyor | Dry van bo'limi va 6 xizmat |
| `/drivers/` Haydovchilar | Tayyor, Tenstreet havolasi kutilmoqda | Freightliner/Volvo/Mack (namuna suratlar); havola kelguncha "Call recruiting" |
| `/quote/` Narx so'rash + kontakt | Tayyor, API kutilmoqda | Bosh sahifadagi qisqa forma ma'lumotlari shu yerda avtomatik to'ldiriladi |
| `/privacy/`, `/terms/` | Tayyor | Matn hozirgi saytdan o'zgarishsiz; menyu ishlaydi |
| `/credits/` | Tayyor | Vaqtinchalik suratlar mualliflari va litsenziyalari |
| `/styleguide/` | Tayyor | Dizayn tizimi (indekslanmaydi, menyuda yo'q) |
| `404` | Tayyor | |

Batafsil: [docs/sitemap.md](docs/sitemap.md), [docs/design-system.md](docs/design-system.md), [docs/needs.md](docs/needs.md) (rahbardan kerakli narsalar).

## Ko'rikdagi muammolar qanday hal qilindi

| Muammo (eski sayt) | Yangi versiyada |
|---|---|
| 1024–1239px'da header 2–3 qatorga tushadi | 4 menyu bandi + telefon + 1 tugma; 1024–1440px'da bitta qatorda (tekshirildi). 1024px dan kichikda "Menu" |
| Planshetda kartalardagi matn kesiladi | 360–1440px oralig'ida kesilish va gorizontal siljish yo'q (9 sahifa × 7 kenglik tekshirildi) |
| Stok/AI rasmlar, "Dry Van"da reefer | Vaqtinchalik haqiqiy (AI emas) bepul suratlar; dry van bo'limida aynan dry van. Haqiqiy T-LOGISTICS suratlari kutilmoqda |
| Statistika "0+ / 0 / 0%", bo'limlar aylantirmaguncha ko'rinmaydi | Animatsiya yo'q, raqamlar darhol ko'rinadi |
| "48 shtat" va Coverage'da 37 | Xaritada 48 shtat, 11 tasi qo'shildi (tasdiqlash kerak) |
| Shablon sharhlar | Olib tashlandi. O'rniga FMCSA SAFER havolasi va USDOT/MC. Haqiqiy sharhlar `src/data/site.ts` ga qo'shilsa bo'lim o'zi chiqadi |
| Sarlavha/tugma/karta uslubi har xil, logotip PNG | Bitta dizayn tizimi. Logotip SVG kutilmoqda (hozircha PNG belgi + matn) |
| Telefonda ~17 ekran | Bosh sahifa 390px'da ~6.7 ekran; tafsilotlar alohida sahifalarda |
| Bitta forma: "narx so'rash", savollari haydovchiga | Mijozga: hero'dagi qisqa forma → `/quote/` (qayerdan, qayerga, sana, yuk). Haydovchiga: `/drivers/` (Tenstreet) |
| SMS roziligi majburiy, Privacy'ga zid | Ixtiyoriy, belgilanmagan; matn Privacy bilan mos |
| /privacy va /terms'da menyu ishlamaydi | Barcha havolalar to'liq yo'l bilan (`/#coverage`) |
| Formada holat yo'q | Yuborilmoqda / xato / yuborildi. Ko'rish uchun: `/quote/?state=error`, `/quote/?state=sending` |

## Tezlik

Lighthouse 13.6 (lokal `npm run preview`), 4 asosiy sahifa:

| | Performance | Accessibility | Best Practices | SEO | LCP |
|---|---|---|---|---|---|
| Mobil | 98–100 | 100 | 100 | 100 | 1.4–1.7 s |
| Desktop | 100 | 100 | 100 | 100 | 0.3–0.4 s |

CLS 0. GitHub Pages'dagi PageSpeed Insights natijasi deploy'dan keyin alohida tekshiriladi.

## Ma'lumotlarni o'zgartirish

Barcha kompaniya ma'lumotlari bitta faylda: `src/data/site.ts`
(telefon, manzil, USDOT/MC, xizmatlar, yuk mashinalari, shtatlar, sharhlar, Tenstreet havolasi). `PENDING` deb belgilanganlar rahbardan keladi.

**Haqiqiy suratlar kelganda:** har biridan WebP fayllar tayyorlang va `public/photos/` dagi bir xil nomli fayllarni almashtiring
(masalan `fleet-volvo-480.webp`, `fleet-volvo-800.webp`; hero uchun `hero-960/1440/1920.webp` va telefon uchun `hero-m-600/900.webp`).
Keyin `src/data/credits.ts` dan almashtirilgan suratni o'chiring va drivers sahifasidagi "Sample photo" yozuvini olib tashlang.

## AQSh xaritasi

Bosh sahifadagi xarita `src/data/us-map.json` dan chiziladi (48 shtat, soddalashtirilgan SVG yo'llari, 34 KB).
Manba: [us-atlas](https://github.com/topojson/us-atlas) (US Census Bureau chegaralari). Qayta yaratish (masalan, soddalashtirish darajasini o'zgartirish uchun):

```bash
node scripts/build-us-map.mjs
```

Xizmat ko'rsatiladigan shtatlar ro'yxati `src/data/site.ts` dagi `regions` da; ro'yxatda bo'lmagan shtat xaritada xiraroq ko'rinadi.

## Forma API (dasturchi uchun)

Bosh sahifadagi qisqa forma hech narsa yubormaydi: ma'lumotni brauzer tabida saqlab (`sessionStorage`) `/quote/` ga o'tadi.
Telefon raqami URL'ga yozilmaydi. To'liq forma yuboradi:

`POST PUBLIC_QUOTE_ENDPOINT`, `Content-Type: application/json`. 2xx javob = yuborildi, boshqasi = xato.

```json
{
  "pickup": "Saint Charles, MO 63301",
  "delivery": "Dallas, TX 75201",
  "pickupDate": "2026-11-20",
  "loadType": "full",
  "commodity": "Palletized retail goods, 22 pallets",
  "weightLbs": 38000,
  "name": "Jane Doe",
  "company": "Acme Distribution",
  "email": "jane@example.com",
  "phone": "636 452 2222",
  "notes": null,
  "smsConsent": false,
  "source": "website-quote-form",
  "submittedAt": "2026-11-12T16:00:00.000Z"
}
```

Agar API boshqa domenda bo'lsa, CORS'da sayt domenini ruxsat eting.
