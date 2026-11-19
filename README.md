# وب‌سایت معرفی انجمن علمی مهندسی کامپیوتر دانشگاه قم

وب‌سایت سبک، ایستا (Static) و داکرایز شده برای **انجمن علمی مهندسی کامپیوتر دانشگاه قم** با طراحی **استودیو زمردی**.

- **وب‌سایت:** [ceqom.ir](https://ceqom.ir)
- **کانال تلگرام:** [@ceqom](https://t.me/ceqom)
- **کانال ایتا:** [@ceqom](https://eitaa.com/ceqom)
- **حامی ویژه:** [9Craft](https://9craft.ir/)

در نسخه تولید (Production)، خروجی کاملاً استاتیک روی **Nginx Alpine** سرو می‌شود و مصرف رم کانتینر حدود ۱۰ تا ۲۰ مگابایت است (بدون نیاز به دیتابیس یا Node.js در زمان اجرا).

---

## بخش‌های سایت
- **نوار نسخه دمو در بالای صفحه**: نمایش چشمک‌زن وضعیت پیش‌نمایش آزمایشی (در زمان انتشار نهایی می‌توانید آن را از `src/App.tsx` حذف کنید).
- **معرفی انجمن علمی**: رسالت، آمار عملکرد و چهار محور فعالیت همراه با لوگوی رسمی انجمن.
- **شورای مرکزی و اعضا**: نمایش تعاملی اعضای شورای مرکزی و کادر اجرایی به همراه تصاویر و راه‌های ارتباطی.
- **اسپانسر ویژه (9Craft)**: معرفی همکاری، لوگوی رسمی، تصویر اختصاصی 9Craft و لینک مستقیم به [9craft.ir](https://9craft.ir/).
- **ابزارهای کاربردی دانشجویی** (اجرای کامل در مرورگر):
  - محاسبه‌گر معدل ترم
  - مبدل مبنای اعداد (۲، ۸، ۱۰، ۱۶)
  - محاسبه‌گر سقف مجاز انتخاب واحد
  - تایمر تمرکز مطالعه (پومودورو)
- **لینک‌های مفید**: سامانه‌های دانشگاه قم، منابع برنامه‌نویسی و کانال‌های رسمی `@ceqom`.

---

## آموزش گام‌به‌گام دیپلوی با Portainer (پیشنهادی)

بهترین و راحت‌ترین روش برای بالا آوردن و آپدیت خودکار سایت روی سرور، استفاده از بخش **Stacks** در **Portainer** و اتصال مستقیم آن به مخزن گیتهاب است.

### روش ۱: دیپلوی مستقیم از گیتهاب (Git Repository) — پیشنهادی

1. وارد پنل **Portainer** شوید و محیط (Environment) مورد نظر خود (معمولاً `local`) را انتخاب کنید.
2. از منوی سمت چپ روی **Stacks** کلیک کنید و سپس دکمه **+ Add stack** را بزنید.
3. در فیلد **Name** یک نام انگلیسی و ساده وارد کنید (مثلاً `ceqom-web`).
4. در بخش **Build method** گزینه **Repository** را انتخاب کنید.
5. فیلدهای مخزن را به شکل زیر پر کنید:
   - **Repository URL:** نشانی مخزن گیتهاب خود را وارد کنید (مثلاً `https://github.com/YOUR-USER/ceqom-site`).
   - اگر مخزن شما Private است، گزینه **Authentication** را فعال کنید و Username گیتهاب + یک Personal Access Token وارد کنید (برای مخازن Public نیازی به فعال کردن نیست).
   - **Repository reference:** روی `refs/heads/main` بگذارید (اگر شاخه اصلی شما `master` است بنویسید `refs/heads/master`).
   - **Compose path:** مقدار را روی `docker-compose.yml` بگذارید.
6. **(اختیاری اما بسیار کاربردی) آپدیت خودکار با هر Push روی گیتهاب:**
   - گزینه **Automatic updates** را روشن کنید.
   - می‌توانید روی **Polling** (مثلاً هر `5m`) بگذارید تا Portainer خودش تغییرات گیتهاب را چک و بیلد مجدد کند، یا گزینه **Webhook** را انتخاب کنید و لینک Webhook را در تنظیمات گیتهاب (`Settings > Webhooks`) قرار دهید.
7. **پیش‌نیاز شبکه داکر (`web`):**
   - فایل `docker-compose.yml` به شبکه خارجی `web` متصل است (مناسب برای Reverse Proxy مثل Nginx Proxy Manager، Caddy یا Traefik). مطمئن شوید شبکه `web` در Portainer (بخش **Networks**) وجود دارد؛ در غیر این صورت یک‌بار آن را بسازید (`docker network create web`).
8. در پایین صفحه روی دکمه **Deploy the stack** کلیک کنید.
9. Portainer به‌صورت خودکار ایمیج را از `Dockerfile` می‌سازد (بیلد اول حدود ۳۰ تا ۶۰ ثانیه زمان می‌برد) و کانتینر `qom-ce-association` را داخل شبکه `web` اجرا می‌کند.

### بررسی سلامت کانتینر و اتصال به دامنه `ceqom.ir`
- پس از پایان دیپلوی، در بخش **Containers** وضعیت `qom-ce-association` باید روی `running (healthy)` باشد.
- در Reverse Proxy خود (متصل به شبکه `web`) کافی است دامنه `ceqom.ir` و `www.ceqom.ir` را به آدرس داخلی **`qom-ce-association`** و پورت **`80`** فوروارد کرده و SSL رایگان را فعال نمایید.

### روش ۲: دیپلوی سریع با Web Editor در Portainer (در صورت داشتن ایمیج آماده)
اگر قبلاً ایمیج را روی سرور بیلد کرده‌اید (`docker build -t ceqom-web .`)، در Portainer به مسیر **Stacks > Add stack > Web editor** بروید و کد زیر را وارد کنید:

```yaml
services:
  web:
    image: ceqom-web:latest
    container_name: qom-ce-association
    restart: unless-stopped
    mem_limit: 64m
    cpus: "0.25"
    read_only: true
    tmpfs:
      - /var/cache/nginx:size=16m
      - /var/run:size=4m
    networks: [web]

networks:
  web:
    external: true
```

---

## اجرا با Docker Compose از طریق ترمینال سرور

```bash
docker network create web 2>/dev/null || true
git clone https://github.com/YOUR-USER/ceqom-site.git
cd ceqom-site
docker compose up -d --build
```

برای بروزرسانی پس از تغییرات جدید در گیتهاب:
```bash
git pull && docker compose up -d --build
```

---

## اجرای محلی برای ویرایش (Development)

نیازمند Node.js نسخه 20 یا بالاتر:
```bash
npm install
npm run dev
```
سپس نشانی `http://localhost:3000` را باز کنید.

---

## نحوه ویرایش اطلاعات سایت
- تمامی متن‌ها، مشخصات اعضای شورای مرکزی، اطلاعات حامی `9Craft` و لینک‌های مفید در یک فایل قرار دارند:
  - `src/data/associationData.ts`
- لوگوی انجمن و لوگوی 9Craft در پوشه `public/assets/aistudio/` و تصاویر محیطی و اعضا در `src/assets/images/` قرار دارند.
- برای حذف نوار چشمک‌زن «نسخه دمو» پس از نهایی شدن سایت، بلوک `Top Blinking Demo Notice Bar` را از ابتدای `src/App.tsx` حذف کنید.
