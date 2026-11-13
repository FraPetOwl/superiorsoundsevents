# Superior Sounds Events - Website Redevelopment

> Professional Sound & Lighting Reinforcement, Mobile DJ Entertainment, and Gear Rentals for the Hudson Valley & Surrounding Areas.

A complete redevelopment of [superiorsoundsevents.com](https://superiorsoundsevents.com/) replacing the broken Squarespace landing page and fragmented external rental shop with a unified, high-performance web platform designed to help close more bookings and sell web service improvements.

---

## 🚀 Key Improvements Over Previous Site

| Feature | Previous Squarespace + Twice Setup | Redeveloped Platform |
|---|---|---|
| **Homepage** | ❌ Returned HTTP 404 error on root URL | ✅ High-impact Pro-Audio Hero with instant booking CTAs |
| **Rental Catalog** | ⚠️ Only 1 item in Squarespace; redirected to external `twice.shop` | ✅ Complete **47-item catalog** natively embedded across 9 categories |
| **Rental Quote Flow** | ❌ Broken / unfinished cart in Squarespace; required 3rd party Twice fees | ✅ Built-in interactive **Quote Bag & Multi-Day Calculator** |
| **Fulfillment Options** | ⚠️ Hard to navigate pickup rules | ✅ Dedicated **Warehouse Pickup** (Poughkeepsie) & **Hudson Valley Delivery** selectors |
| **Pages & Content** | ⚠️ Undeleted Squarespace demo templates (`read-me-encore`) | ✅ All 8 pages rebuilt with polished copy, real photography & Yelp integration |
| **Hosting Cost** | 💸 Squarespace + Twice monthly subscriptions | 🆓 **$0 / month** on Cloudflare Pages or GitHub Pages |
| **Codebase** | Heavy CMS bloat | ⚡ Clean, KISS, DRY Vite + React + Tailwind CSS |

---

## 📦 Rental Inventory Breakdown (47 Items)

1. **Audio (7 Items):** QSC-KW122, QSC K12, QSC KW181 Subwoofer, QSC HPR122, QSC K10, QSC KW152, Alto Busker Battery PA
2. **Lighting (9 Items):** Chauvet SlimPAR HEX 3 IRC, SlimPAR QUAD 3 IRC, SlimPAR H6 USB, COLORrail IRC, Chauvet LFS-75 Followspot, Chauvet GigBAR Move, Rockville RF Wedge Uplights (x6), Chauvet Intimidator Spot 350, Chauvet Intimidator Hybrid 140SR
3. **DJ Gear (6 Items):** Pioneer CDJ-2000NXS2, Pioneer DJM-900NXS2, Pioneer DDJ-SZ, Pioneer DJM-S9, Technics 1200 M3D, Technics SL-1200MK2
4. **Soundboards (4 Items):** Yamaha MGP24X, Allen & Heath Zed-10FX, Behringer Xenyx X1222USB, Allen & Heath Zed-6FX
5. **Microphones (6 Items):** Shure SM58, Shure SLXD24D/SM58 Dual Wireless, Sennheiser EW 100 835 Wireless, Sennheiser XSW 1-835 Dual, Sennheiser XSW 1-825, Sennheiser XSW 1-ME3-A Headset/Lavalier
6. **Truss (3 Items):** Global Truss 5', Global Truss 6.5', Global Truss 8'
7. **Visuals (4 Items):** 32" TV Screen, 55" 4K TV Screen, 120" Projector Screen, Epson EX5250 Projector
8. **Add-Ons (3 Items):** Interactive Photo Booth, 3x3' Intelistage x6 with Steps/Skirt, Marq 700 Haze Machine
9. **Accessories & Cables (5 Items):** Speaker Stands, Boom Mic Stands, Straight Round-Base Mic Stands, Stanchion Barriers 78", Alto Stealth Pro Wireless Audio Transmitter

---

## 🛠️ Tech Stack & Architecture

- **Core Framework:** React 18 + Vite 5
- **Styling:** Tailwind CSS 3 (Pro-Audio Dark Theme with `#00f0ff` Cyan Glow)
- **Icons:** Lucide React
- **State Management:** React Context (`QuoteContext`) with `localStorage` persistence
- **Architecture:** Zero-bloat, KISS & DRY component design

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local development server (with HMR)
npm run dev

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ☁️ Free Hosting & Deployment (Cloudflare Pages)

Since you already have Cloudflare Pages and a GitHub Actions workflow configured:

### Option A: Cloudflare Pages Git Integration
1. Push this repository to GitHub.
2. In your Cloudflare Dashboard, go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository and set the following build settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable (optional):** `NODE_VERSION` = `20`
4. Click **Save and Deploy**. Cloudflare automatically provides an SSL certificate and global CDN for $0/month.

### Option B: Cloudflare Pages Direct Upload / GitHub Action
In your `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Cloudflare Pages
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: 'superiorsounds'
          directory: 'dist'
```

---

## 🤖 AI Equipment & Rental Assistant

The website includes an intelligent, responsive floating drawer assistant (`src/components/ChatDrawer.jsx` and `src/services/chatService.js`) integrated directly with the 47-product inventory and Quote Bag:

### 1. Hybrid 3-Tier Architecture
- **Tier 1 (Groq Cloud LLM - Recommended for Production & Dev)**:
  - Connects to Groq (`llama-3.3-70b-versatile`) with ~300ms ultra-fast streaming and zero load on your PC.
  - To activate: set `VITE_GROQ_API_KEY=gsk_...` in `.env.local` or Cloudflare Pages environment variables.
- **Tier 2 (Local / VM FastAPI Backend)**:
  - Connects to `your_local_chatbot` running on `localhost:8000/chat` (or your remote VM).
  - Configurable via `VITE_CHATBOT_API_URL`.
- **Tier 3 (Zero-Failure Client-Side Smart Matcher)**:
  - If no API key is set and no backend is running, the chatbot uses fuzzy semantic and keyword matching across all 47 items in `inventory.js` plus policy maps (deliveries, warehouse pickup hours, etc.).
  - Guarantees 100% uptime with zero server cost on Cloudflare Pages.

### 2. Interactive Gear & Quote Sync
- When the assistant recommends equipment (e.g. *Pioneer DJM-900NXS2*, *QSC KW122*, *Shure SLXD24D*), users get an inline **`+ Add to Quote`** button that drops the gear straight into their Quote Bag with live subtotal updates!
- Users can also click **`Specs`** to open the full technical specification modal.

---

## 📞 Business Details Preserved

- **Phone:** 845.790.5472
- **Email:** info@superiorsoundsevents.com
- **Warehouse Address:** 91 College Ave, Poughkeepsie, NY 12603 (By Appointment Only)
- **Visiting / Pickup Hours:** All Days 11:00 AM – 7:00 PM
- **Primary Service Region:** Hudson Valley, NY & Surrounding Area
