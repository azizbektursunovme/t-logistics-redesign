# Sahifalar xaritasi va bloklar

```
/                 Bosh sahifa (telefonda ~6.7 ekran)
├── /services/    Xizmatlar
├── /drivers/     Haydovchilar: yuk mashinalari va ariza
├── /quote/       Narx so'rash formasi + kontakt (#contact)
├── /privacy/     Privacy Policy
├── /terms/       Terms of Service
├── /credits/     Vaqtinchalik suratlar mualliflari
├── /styleguide/  Dizayn tizimi (ichki, indekslanmaydi)
└── 404
```

Yuqori qator (≥1024px): FMCSA, USDOT/MC, email, Dispatch 24/7.
Header: logotip, Services, Coverage (`/#coverage`), Drivers, Contact (`/quote/#contact`), telefon, "Get a quote".
1024px dan kichikda: logotip + "Menu".
Footer: kompaniya va USDOT/MC; Shippers; Drivers (FMCSA havolasi); Contact; Privacy, Terms, Photo credits.

## `/` Bosh sahifa

1. **Hero**: chapda "DRY VAN FREIGHT ACROSS ALL 48 STATES", 1 gap tavsif, "Get a quote" va "Drive with us"; o'ngda kechki yo'ldagi yuk mashinasi surati.
2. **Qisqa forma paneli** (hero pastida): Pickup, Delivery, Pickup date, Phone → "Continue to quote" → `/quote/` (ma'lumotlar to'ldirilgan holda).
3. **Raqamlar**: 48 shtat, 1,000+ yuk, 24/7 dispatch, USDOT/MC + FMCSA SAFER havolasi.
4. **Xizmatlar**: sarlavha + izoh, 4 suratli karta (Full truckload, Partial/LTL, Door-to-door, Expedited), "See all services".
5. **Coverage** (`#coverage`, navy): mintaqalar ro'yxati, "Call dispatch", haqiqiy AQSh xaritasi (48 shtat, Missouri ajratilgan, Saint Charles belgisi).
6. **Nega biz**: FMCSA authorized, GPS, 24/7 dispatch, 48 shtat. Haqiqiy sharhlar qo'shilsa shu yerda chiqadi.
7. **CTA juftligi**: "Drive with T-LOGISTICS" (surat) → `/drivers/`; "Ready to ship?" (ko'k) → `/quote/` va telefon.

## `/services/`

1. Suratli sarlavha + "Get a quote" / "Call dispatch".
2. Dry van: matn, nima tashiymiz, tirkama surati.
3. 6 xizmat ikonkalar bilan (har biri `#id` bilan) + CTA.

## `/drivers/`

1. Suratli sarlavha + "Apply on Tenstreet" (havola bo'lsa) yoki "Call recruiting"; "See the trucks".
2. **Our trucks** (`#fleet`): Freightliner, Volvo, Mack — surat ("Sample photo") + jihozlar.
3. **Apply** (`#apply`): Tenstreet / telefon / email; kartochka: home base, dry van, Class A CDL; mijozlar uchun `/quote/`.

## `/quote/`

1. Suratli sarlavha.
2. Forma: (bosh sahifadan kelgan bo'lsa "We filled in..." xabari) Load details → Contact → ixtiyoriy SMS roziligi → "Request quote".
   Holatlar: maydon ostida xato; "Sending request…"; xato bloki (ma'lumot saqlanadi); "Quote request sent".
3. Yon panel (`#contact`): telefon 24/7, email, ofis, USDOT/MC, haydovchilar uchun havola.

## `/privacy/`, `/terms/`

Hozirgi saytdagi matn o'zgarishsiz (Last updated: April 27, 2026). Faqat ko'rinish va menyu.
