# Dizayn tizimi — "Navy korporativ"

Jonli ko'rinishi: `/styleguide/`. Kod: `src/styles/global.css` (`:root` tokenlari).

## Qayerdan kelgan

Pinterest'dagi ~30 ta yuk tashish/logistika sayti tahlil qilindi. Deyarli hammasida: katta yuk mashinasi surati hero'da,
oq qalin sarlavha, ko'zga tashlanadigan "Get a quote", hero ostida raqamlar, suratli xizmat kartalari, telefon header'da,
qamrov xaritasi va oxirida CTA bandi. Ranglardan navy + ko'k oilasi tanlandi, chunki logotip shu ranglarda.

## Ranglar

| Token | Hex | Qayerda |
|---|---|---|
| `--navy-900` | `#0C1C38` | Yuqori qator, footer, hero foni |
| `--navy-800` | `#12284B` | Logotip navy: coverage bandi, raqamlar |
| `--ink` | `#0F1F3A` | Och fondagi sarlavhalar |
| `--text` | `#3A4659` | Asosiy matn |
| `--muted` | `#5D6B7E` | Ikkinchi darajali matn |
| `--blue` | `#0B6CB8` | Faqat tugma, havola va ikonkalar |
| `--blue-300` | `#8CC2EE` | Fokus halqasi, navy ustidagi aksent |
| `--blue-50` | `#EAF3FB` | Ikonka doiralari, info xabar |
| `--soft` | `#F4F7FA` | Ikkinchi fon |
| `--line` | `#DFE5EC` | Chegaralar |

Boshqa aksent rang yo'q. Kontrast WCAG AA (Lighthouse Accessibility 100).

## Shrift

Bitta oila: **Archivo** (variable, 100–900), latin subset 35 KB, `preload` + `font-display: swap`.

| Element | O'lcham | Vazn | Registr |
|---|---|---|---|
| h1 (hero) | 36–68px | 800 | KATTA |
| h2 (bo'lim) | 28–44px | 800 | KATTA |
| Karta sarlavhasi | 24px | 700 | oddiy |
| h3, lead | 20px | 700 | oddiy |
| Matn | 17px / 1.6 | 400 | oddiy |
| Kichik | 14px | 400 | oddiy |

KATTA harf faqat h1 va h2 da. Qator uzunligi ≤ 52–70 belgi.

## Oraliqlar va setka

4px asos: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96. Kontent 1200px, yon chekka 16–40px.
Breakpoint'lar: 640, 768, 900, 960 (hero foto o'ngda), 1024 (to'liq header va yuqori qator), 1100 (forma bitta qatorda).
Dizayn kengliklari: 1440 / 1024 / 390. Matn chapga tekislanadi.

## Komponentlar

- **Yuqori qator** (≥1024px): USDOT/MC, email, "Dispatch 24/7".
- **Header**: logotip, 4 menyu bandi, telefon, "Get a quote". Telefonda "Menu". Sahifa tepasida yuqori qator va header shaffof (oq matn, oq logotip, hero ular ostidan boshlanadi); scroll qilinganda yoki mobil menyu ochilganda header oq va yopishqoq. JavaScript o'chiq bo'lsa header doim oq.
- **Foto hero**: chapda navy fonda matn, o'ngda surat (mashina ko'rinib turadi). Telefonda surat matn ortida.
- **Qisqa forma paneli**: hero pastini qoplab turadi; 4 maydon + "Continue to quote".
- **Raqamlar qatori**: ko'k chap chiziq, animatsiyasiz.
- **Xizmat kartalari**: surat 4:3 + sarlavha + matn. Telefonda surat chapda kichik.
- **Coverage bandi**: navy, mintaqalar ro'yxati + haqiqiy AQSh xaritasi (`UsMap.astro`): 48 shtat shaffof oq, chegaralar navy, Missouri ko'k, Saint Charles'da belgi. Sichqoncha ustiga borganda shtat nomi chiqadi. Ma'lumot: `src/data/us-map.json` (`scripts/build-us-map.mjs`).
- **"Nega biz"**: 4 ta ikonka (FMCSA, GPS, 24/7, 48 shtat).
- **CTA juftligi**: suratli haydovchilar kartasi + ko'k "Ready to ship?" kartasi.
- **Tugmalar**: 48px (kichik 42px), radius 6px. Primary (ko'k), Outline (navy), White, Light (navy ustida oq chegara).
- **Forma** (`/quote/`): oq karta ichida 2 qadam (1 Load details, 2 Contact details) va yuborish bloki. Maydonlar 50px, ichida chap tomonda ikonka (og'irlikda "lbs" qo'shimchasi), label tepada, namunaviy placeholder, xato pastda oddiy so'z bilan, ko'k fokus halqasi. Yuk hajmi tanlov kartalari bilan. Yonida navy "Talk to dispatch" paneli (desktopda yopishqoq). Holatlar: preview, error, success (yashil belgi bilan).

## Harakat

Avtomatik animatsiya yo'q. Faqat hover rang o'zgarishi. `prefers-reduced-motion` hurmat qilinadi.
