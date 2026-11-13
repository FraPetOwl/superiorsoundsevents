import { INVENTORY } from '../data/inventory';

// Canned & Policy responses from your_local_chatbot dataset
const CANNED_RESPONSES = [
  {
    keywords: ['wireless mic', 'wireless microphone', 'shure', 'sennheiser', 'lavalier', 'headset mic', 'handheld mic'],
    intro: "Here are our top tour-grade wireless microphone systems:",
    productIds: ['shure-slxd24d-sm58', 'sennheiser-xsw-1-825', 'sennheiser-xsw-1-835-dual', 'sennheiser-xsw-1-me3-a']
  },
  {
    keywords: ['dj speaker', 'speakers', 'sound system', 'pa speaker', 'loudspeaker', 'subwoofer', 'subs', 'qsc', 'ev speaker'],
    intro: "Here are our most popular active sound reinforcement speakers and subwoofers:",
    productIds: ['qsc-kw122', 'qsc-k12', 'qsc-kw181', 'ev-zlx-15p', 'qsc-k10']
  },
  {
    keywords: ['moving head', 'dance lighting', 'chauvet', 'spotlight', 'party lights', 'stage lighting'],
    intro: "Here are our intelligent moving head and concert lighting fixtures:",
    productIds: ['chauvet-gigbar-move', 'chauvet-intimidator-spot-350', 'chauvet-intimidator-hybrid-140sr', 'chauvet-colorband-pix']
  },
  {
    keywords: ['haze', 'fog', 'haze machine', 'smoke machine'],
    intro: "Here is our professional haze machine for accentuating lighting beams without setting off optical fire alarms:",
    productIds: ['marq-700-haze-machine']
  },
  {
    keywords: ['karaoke', 'singing'],
    intro: "Perfect for karaoke! We recommend pairing high-gain wireless mics, a powered QSC loudspeaker, and an Allen & Heath mixer with built-in FX:",
    productIds: ['sennheiser-xsw-1-825', 'qsc-k10', 'allen-heath-zed-10fx']
  },
  {
    keywords: ['pioneer', 'cdj', 'djm', 'dj gear', 'turntable', 'technics', 'controller'],
    intro: "Here is our rider-ready Pioneer DJ and Technics backline:",
    productIds: ['pioneer-cdj-2000nxs2', 'pioneer-djm-900nxs2', 'pioneer-ddj-flx6', 'technics-sl-1200mk2']
  },
  {
    keywords: ['wedding', 'barn wedding', 'reception'],
    intro: "For Hudson Valley weddings, we recommend combining warm ambient uplighting, tour-grade QSC audio for crystal-clear speeches and dancing, and wireless mics for ceremonies:",
    productIds: ['qsc-kw122', 'qsc-kw181', 'chauvet-freedom-par-quad-4', 'shure-slxd24d-sm58']
  },
  {
    keywords: ['truss', 'trussing', 'totem', 'stand', 'crank'],
    intro: "Here are our Global Truss aluminum truss segments and lighting stands:",
    productIds: ['global-truss-6-5', 'global-truss-8', 'global-truss-totem', 'rockville-lighting-crank-stand']
  }
];

const POLICY_RESPONSES = [
  {
    keywords: ['delivery', 'deliver', 'setup', 'drop off', 'shipping'],
    reply: "🚚 **Delivery & On-Site Setup**: We offer delivery, setup, and live audio engineering throughout Dutchess, Ulster, Orange, Columbia, Catskills, Westchester, and NYC Metro! You can select delivery in your Quote Bag or let us know during booking for a custom travel quote."
  },
  {
    keywords: ['pickup', 'warehouse', 'location', 'address', 'hours', 'where are you'],
    reply: "📍 **Warehouse & Pickup Info**: Our warehouse is located at **91 College Ave, Poughkeepsie, NY 12603**.\n\nVisiting and pickup hours are **All Days: 11:00 AM – 7:00 PM (By Appointment Only)**. Please schedule your pickup in advance by calling 845.790.5472."
  },
  {
    keywords: ['phone', 'contact', 'call', 'text', 'email', 'reach'],
    reply: "📞 **Contact Superior Sounds**:\n- **Phone/Text**: [845.790.5472](tel:8457905472)\n- **Email**: [info@superiorsoundsevents.com](mailto:info@superiorsoundsevents.com)\n- **Warehouse**: 91 College Ave, Poughkeepsie, NY 12603"
  },
  {
    keywords: ['sell', 'buy', 'for sale', 'purchase'],
    reply: "ℹ️ **Rentals & Production Only**: Superior Sounds strictly provides rentals, live audio engineering, and event production services—we do not sell equipment."
  },
  {
    keywords: ['warranty', 'condition', 'broken', 'maintenance', 'reliable'],
    reply: "🛡️ **Tour-Grade Reliability**: Every piece of gear in our inventory is professionally tested, cleaned, calibrated, and road-cased before and after every rental."
  }
];

/**
 * Searches inventory by text query and returns matching products
 */
export function findMatchingProducts(query, maxResults = 4) {
  const q = query.toLowerCase();
  const words = q.split(/\s+/).filter(w => w.length > 2);
  
  const matches = INVENTORY.map(product => {
    let score = 0;
    const nameLower = product.name.toLowerCase();
    const catLower = product.category.toLowerCase();
    const descLower = product.description.toLowerCase();
    const specsLower = (product.specs || []).join(' ').toLowerCase();

    if (nameLower.includes(q)) score += 15;
    if (catLower.includes(q)) score += 8;

    for (const word of words) {
      if (nameLower.includes(word)) score += 6;
      if (catLower.includes(word)) score += 3;
      if (specsLower.includes(word)) score += 2;
      if (descLower.includes(word)) score += 1;
    }

    return { product, score };
  })
  .filter(item => item.score > 0)
  .sort((a, b) => b.score - a.score)
  .slice(0, maxResults)
  .map(item => item.product);

  return matches;
}

/**
 * Client-side intelligent matcher (Fallback tier: fast, zero cost, 100% uptime)
 */
export function generateClientSideReply(query) {
  const q = query.toLowerCase();

  // Check policies first
  for (const policy of POLICY_RESPONSES) {
    if (policy.keywords.some(k => q.includes(k))) {
      return {
        text: policy.reply,
        products: []
      };
    }
  }

  // Check canned categories
  for (const canned of CANNED_RESPONSES) {
    if (canned.keywords.some(k => q.includes(k))) {
      const products = canned.productIds
        .map(id => INVENTORY.find(p => p.id === id))
        .filter(Boolean);
      return {
        text: canned.intro,
        products
      };
    }
  }

  // General inventory search
  const products = findMatchingProducts(query, 3);
  if (products.length > 0) {
    return {
      text: `Based on your request, here are top options from our 47-piece rental inventory that fit your needs:`,
      products
    };
  }

  return {
    text: `I'd love to help with your event! We offer 47 rentable audio, lighting, DJ, microphone, and trussing products, plus full-service DJ and sound engineering in the Hudson Valley.\n\nFeel free to ask about specific equipment (like QSC speakers, Pioneer CDJs, wireless mics, moving head lights) or give us a call at 845.790.5472!`,
    products: [
      INVENTORY.find(p => p.id === 'qsc-kw122'),
      INVENTORY.find(p => p.id === 'pioneer-djm-900nxs2'),
      INVENTORY.find(p => p.id === 'chauvet-gigbar-move')
    ].filter(Boolean)
  };
}

/**
 * System prompt for LLM (Groq / Local backend)
 */
function buildSystemPrompt() {
  const productList = INVENTORY.map(
    p => `- ${p.name} (${p.category}): $${p.price}/day. Specs: ${(p.specs || []).slice(0, 2).join('; ')}`
  ).join('\n');

  return `You are the official AI Equipment & Rental Assistant for Superior Sounds, the premier sound reinforcement, concert lighting, and DJ production company in the Hudson Valley, NY (Poughkeepsie warehouse: 91 College Ave).

PHONE: 845.790.5472
EMAIL: info@superiorsoundsevents.com
SERVICES: Full Service DJ/MC, Live Sound Reinforcement, Concert & Dance Lighting, Ambient Uplighting, Stage Trussing, Audio Backline.

RENTAL INVENTORY (47 Products):
${productList}

GUIDELINES:
1. Be friendly, knowledgeable, concise, and helpful. Keep responses to 2-3 short paragraphs.
2. When recommending gear, cite the exact product names from our inventory (e.g. "QSC-KW122", "Pioneer DJM-900NXS2", "Chauvet GigBAR Move") so the user can add them to their quote.
3. Mention that users can add any item directly to their Quote Bag on the site or call 845.790.5472.
4. If asked about delivery, explain that we offer on-site delivery and engineering throughout Dutchess, Ulster, Orange, Columbia, and Catskills.
5. If asked about purchasing, clarify that Superior Sounds strictly provides rentals and production services, not sales.`;
}

/**
 * Main query function: Tries Groq -> Local/VM Backend -> Client-side Fallback
 */
export async function queryAssistant({
  messages,
  userMessage,
  apiUrl = import.meta.env.VITE_CHATBOT_API_URL || 'http://localhost:8000/chat',
  groqApiKey = import.meta.env.VITE_GROQ_API_KEY || ''
}) {
  const query = userMessage.trim();

  // Tier 1: Groq API (Blazing fast ~300ms, generous free limits)
  if (groqApiKey) {
    try {
      const groqMessages = [
        { role: 'system', content: buildSystemPrompt() },
        ...messages.slice(-6).map(m => ({
          role: m.isBot ? 'assistant' : 'user',
          content: m.text
        })),
        { role: 'user', content: query }
      ];

      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${groqApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: groqMessages,
          temperature: 0.3,
          max_tokens: 500
        })
      });

      if (res.ok) {
        const data = await res.json();
        const text = data.choices?.[0]?.message?.content || '';
        if (text) {
          // Detect products mentioned in the LLM response
          const matchingProducts = INVENTORY.filter(p =>
            text.toLowerCase().includes(p.name.toLowerCase()) ||
            query.toLowerCase().includes(p.name.toLowerCase())
          ).slice(0, 4);

          return {
            text,
            products: matchingProducts,
            source: 'groq'
          };
        }
      }
    } catch (err) {
      console.warn('Groq API request failed, falling back to local backend / smart matcher:', err);
    }
  }

  // Tier 2: Local / VM FastAPI backend (your_local_chatbot on localhost:8000 or custom IP)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500); // Fast timeout so we don't stall user if offline

    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: query, style: 'concise' }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const text = await res.text();
      const matchingProducts = INVENTORY.filter(p =>
        text.toLowerCase().includes(p.name.toLowerCase()) ||
        query.toLowerCase().includes(p.name.toLowerCase())
      ).slice(0, 4);

      return {
        text,
        products: matchingProducts,
        source: 'local-backend'
      };
    }
  } catch (err) {
    // Expected when local server is not running
  }

  // Tier 3: Client-side intelligent matcher (100% uptime, zero latency, works on Cloudflare Pages)
  const clientResponse = generateClientSideReply(query);
  return {
    text: clientResponse.text,
    products: clientResponse.products,
    source: 'client-smart-matcher'
  };
}
