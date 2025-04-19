# 📚 E-Learning Video Platform

Bu proje, şirket içi eğitimlerin ve bilgi paylaşımının dijital ortamda yönetilmesini sağlayan bir **video tabanlı eğitim platformudur**. Kullanıcılar video izleyebilir, kurslara katılabilir, yöneticiler ise bu içerikleri yönetebilir ve atamalar yapabilir.

## 🎯 Amaç
- Eğitim süreçlerini dijitalleştirmek
- Yetkilere göre içerik erişimini kontrol etmek
- Kullanıcı gelişimini ölçmek ve raporlamak
- YouTube videoları ile hızlı ve kolay içerik sunmak

## 🚀 Temel Özellikler

### 🔐 Kimlik Doğrulama & Roller
- Supabase Auth ile kullanıcı girişi
- Roller: `admin`, `team-lead`, `user`, `guest`

### 🎬 Video Yönetimi
- YouTube linki ile video ekleme (başlık, süre otomatik)
- Kategori & etiket sistemi
- Admin onayı gerektirebilir

### 🗂️ Kategoriler
- Kategorilere özel açıklama ve linkler
- Carousel görünümü ve sıralama desteği

### 📚 Kurslar
- Birden fazla videodan oluşan eğitim setleri
- Zorunlu kurs ve bitiş tarihi tanımı
- Kurslara kullanıcı atama

### 🧑‍🏫 Atama & Takip
- Video/Kurs kullanıcıya atanabilir
- İzlenme süresi ve tamamlama takibi
- Progres bar gösterimi

### 💬 Yorumlar & Geri Bildirim
- Videolara yorum yapma
- Geri bildirim türleri: faydalı, eksik, yanlış
- Admin/Team Lead yorumları silebilir

### 📊 Raporlama Paneli
- En çok izlenen videolar
- Tamamlanma oranları
- En aktif kullanıcılar
- Zorunlu ama tamamlanmayan içerikler

### 🔔 Bildirim Sistemi
- Yeni atamalar ve hatırlatmalar
- Navbar'da bildirim simgesi

### 🧠 Video Önerileri
- YouTube API ile önerilen videolar
- Kategori veya içerik oluştururken gösterilir

### 👁️ İzlenme Verileri
- YouTube API ile izlenme sayısı, beğeni sayısı çekilir
- Video detay sayfasında gösterilir

### 📝 Transcript Sistemi
- `.txt` veya markdown ile video transkripti eklenebilir
- Kullanıcılar indirebilir, okuyabilir
- Faz 2: Özetleme ve döküman üretimi (AI destekli)

## 🧱 Kullanılan Teknolojiler
- **Frontend:** Next.js + TailwindCSS
- **Backend:** Next.js API Routes + Supabase
- **Veritabanı:** PostgreSQL (RLS özellikli)
- **Kimlik Doğrulama:** Supabase Auth
- **Harici API:** YouTube Data API

## 📂 Proje Yapısı
```
├── features/
│   ├── videos
│   ├── courses
│   ├── assignments
│   ├── comments
│   ├── transcripts
│   └── analytics
├── components/
├── lib/
├── pages/api/
├── public/
└── supabase/
```

## 📈 Yol Haritası
- MVP: Yukarıdaki tüm sprint özellikleri
- Faz 2: Yapay zeka ile transkript özetleme & doküman üretme

## ⚠️ Lisans
Bu proje dahili kullanım için geliştirilmiştir. Açık kaynak değildir. 