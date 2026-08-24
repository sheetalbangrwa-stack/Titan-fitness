/* ============================================================================
   GYM WEBSITE TEMPLATE — CONFIGURATION FILE
   ============================================================================
   This is the ONLY file you should need to edit to launch a client's site.

   Do NOT edit index.html, style.css, or script.js to change gym-specific
   content — everything visible on the page is generated from the values
   below. The layout, animations and interactions live in style.css and
   script.js and are shared across every gym that uses this template.

   HOW TO USE:
   1. Replace every ALL_CAPS placeholder (e.g. GYM_NAME, PHONE_NUMBER)
      with the client's real information.
   2. Replace placeholder image URLs with the client's own photos
      (recommended sizes are noted next to each field).
   3. Add, remove, or reorder entries in the array sections (services,
      membership, trainers, gallery, testimonials) freely — the page
      will render however many items you provide.
   4. Save this file. No other file needs to change.
   ============================================================================ */

window.GYM_CONFIG = {

  /* ==========================================================
     1. BRAND — name, logo initial, and site-wide colors
  ========================================================== */
  brand: {
    name: "Titan Fitness",            // Full gym name, shown in nav + footer
    logoInitial: "T",                 // Single letter/glyph for the logo mark
    tagline: "Train Hard Live Strong", // Short phrase, used in footer + meta tags
    establishedYear: "2019"
  },

  // Site-wide color palette. Change these and the ENTIRE site re-colors —
  // no CSS editing required. Keep hex format (#rrggbb).
  colors: {
    accentPrimary:   "#a7abb2",  // main brand accent (buttons, highlights) — silver
    accentSecondary: "#e7e9ec",  // gradient partner color for accentPrimary — bright silver/white
    bgPrimary:       "#050505",  // page background — deep black, as requested
    bgSurface:       "#0e0e0e",  // section background (alt panels)
    bgSurface2:      "#161616",  // card background
    bgSurface3:      "#1f1f1f",  // card hover / featured background
    borderLine:      "#2a2a2a",  // hairline borders/dividers
    textPrimary:     "#f5f5f4",  // headings / body text
    textDim:         "#a3a3a0",  // secondary text
    textFaint:       "#6b6b68"   // captions / faint labels
  },

  /* ==========================================================
     2. NAVIGATION — labels only; anchors match section IDs
     (Reordering requires matching href values to real section
     ids in index.html, so keep this list as-is unless you also
     edit the HTML.)
  ========================================================== */
  nav: [
    { label: "Home",        href: "#home" },
    { label: "About",       href: "#about" },
    { label: "Services",    href: "#services" },
    { label: "Membership",  href: "#membership" },
    { label: "Trainers",    href: "#trainers" },
    { label: "Gallery",     href: "#gallery" },
    { label: "Reviews",     href: "#testimonials" },
    { label: "Contact",     href: "#contact" }
  ],
  navCtaLabel: "Join Now",

  /* ==========================================================
     3. HERO SECTION
  ========================================================== */
  hero: {
    eyebrow: "PREMIUM STRENGTH & PERFORMANCE GYM",
    titleLine1: "BUILD STRENGTH",
    titleAccent: "BECOME UNSTOPPABLE.",           // shown in the gradient accent color
    description: "Train smarter, push your limits, and become the strongest version of yourself — with expert guidance, modern equipment, and a community that keeps you motivated.",
    // Recommended: 1800x1200 or larger, landscape, high-contrast gym photo
    // DEFAULT: reusing the exterior storefront shot since no dedicated hero
    // photo was provided. Swap this for a wide, high-impact action shot
    // whenever you have one — the hero has a dark gradient overlay, so a
    // brighter/higher-contrast image tends to read best here.
    backgroundImage: "exterior.png",
    ctaPrimary:   { label: "Join Now",       href: "#membership" },
    ctaSecondary: { label: "View Programs",  href: "#services" },
    stats: [
      { value: 500,  suffix: "+", label: "Members" },
      { value: 10,   suffix: "+", label: "Coaches" },
      { value: 5,    suffix: "+", label: "Years Running" },
      { value: 24,   suffix: "",  label: "Hours Open" }
    ]
  },

  /* ==========================================================
     4. ABOUT SECTION
  ========================================================== */
  about: {
    tag: "ABOUT TITAN FITNESS",
    title: "More Than a Gym. It's Your Stronger Beginning.",
    paragraphs: [
      "At Titan Fitness, we believe fitness is about becoming stronger, healthier, and more confident every day. With modern equipment, expert trainers, and a motivating community, we're here to help you reach your goals."
    ],
    points: [
      "Expert Trainers — Professional guidance at every step.",
      "Modern Equipment — Everything you need for effective training.",
      "Supportive Community — Train, grow, and stay motivated together."
    ],
    ctaLabel: "Start Today",
    ctaHref: "#membership",
    // Recommended: 900x1125 (portrait 4:5)
    imageMain: "exterior.png",
    // Recommended: 600x600 (square)
    imageAccent: "interior.png"
  },

  /* ==========================================================
     5. SERVICES — add/remove/reorder freely.
     Valid "icon" keys: strength, cardio, personal, functional,
     boxing, yoga
  ========================================================== */
  servicesTag: "02 — PROGRAMS",
  servicesTitle: "Training Programs",
  servicesSubtitle: "Every program is coached, structured, and built around real progress — pick the one that fits your goals.",
  services: [
    {
      icon: "strength",
      title: "Strength & Conditioning",
      description: "Build strength, improve endurance, and develop better overall fitness with structured training."
    },
    {
      icon: "personal",
      title: "Personal Training",
      description: "Get one-on-one guidance with customized workouts designed around your individual fitness goals."
    },
    {
      icon: "cardio",
      title: "HIIT & Cardio",
      description: "High-intensity workouts designed to improve stamina, endurance, and overall cardiovascular fitness."
    },
    {
      icon: "functional",
      title: "Functional Fitness",
      description: "Improve mobility, balance, flexibility, and everyday strength through practical, full-body movements."
    }
  ],

  /* ==========================================================
     6. MEMBERSHIP PLANS — add/remove/reorder freely.
     Set "featured": true on exactly one plan to highlight it.
     Set an item's "included" to false to show it struck-through.
  ========================================================== */
  membershipTag: "03 — MEMBERSHIP",
  membershipTitle: "Membership Plans",
  membershipSubtitle: "MEMBERSHIP_SUBTITLE_TEXT",
  currencySymbol: "₹",   // shown before every plan price, e.g. "$", "₹", "€"
  membership: [
    {
      name: "Basic",
      description: "Perfect for getting started.",
      price: "999",
      period: "/mo",
      featured: false,
      badge: "",
      features: [
        { text: "Gym Access", included: true },
        { text: "Locker Facility", included: true },
        { text: "Cardio & Strength Equipment", included: true }
      ],
      ctaLabel: "Get Started",
      ctaHref: "#contact"
    },
    {
      name: "Pro",
      description: "For serious, consistent training.",
      price: "1,499",
      period: "/mo",
      featured: true,
      badge: "Most Popular",
      features: [
        { text: "Unlimited Gym Access", included: true },
        { text: "Personalized Workout Plan", included: true },
        { text: "Trainer Guidance", included: true },
        { text: "Locker Facility", included: true }
      ],
      ctaLabel: "Get Started",
      ctaHref: "#contact"
    },
    {
      name: "Elite",
      description: "Complete access, fully personalized.",
      price: "2,499",
      period: "/mo",
      featured: false,
      badge: "",
      features: [
        { text: "Unlimited Gym Access", included: true },
        { text: "Personal Training", included: true },
        { text: "Customized Workout & Fitness Plan", included: true },
        { text: "Priority Trainer Support", included: true }
      ],
      ctaLabel: "Get Started",
      ctaHref: "#contact"
    }
  ],

  /* ==========================================================
     7. TRAINERS — add/remove/reorder freely.
     Leave a social URL as "" to hide that icon.
  ========================================================== */
  trainersTag: "04 — OUR COACHES",
  trainersTitle: "Meet The Coaches",
  trainersSubtitle: "Certified coaches dedicated to helping you train safer, smarter, and stronger.",
  trainers: [
    {
      name: "Arjun Mehta",
      role: "Strength & Conditioning Coach",
      bio: "Specializes in building raw strength and functional power through progressive, science-backed programming.",
      // Recommended: 500x570 (portrait)
      image: "arjun.png",
      instagram: "",
      twitter: ""
    },
    {
      name: "Vikram Singh",
      role: "Head Strength Coach",
      bio: "Specializes in strength training & conditioning.",
      image: "vikram.png",
      instagram: "",
      twitter: ""
    },
    {
      name: "Neha Kapoor",
      role: "Fitness Coach",
      bio: "Specializes in HIIT, cardio & functional training.",
      image: "neha.png",
      instagram: "",
      twitter: ""
    },
    {
      name: "Sneha Mithwani",
      role: "Personal Trainer",
      bio: "Specializes in personalized workouts & fitness guidance.",
      image: "sneha.png",
      instagram: "",
      twitter: ""
    }
  ],

  /* ==========================================================
     8. GALLERY — add/remove freely. Recommended: 800x800 (square)
  ========================================================== */
  galleryTag: "05 — GALLERY",
  galleryTitle: "Inside The Gym",
  // Suggested shot list (swap each placeholder image URL for the real photo):
  // wide interior, free-weight area, cardio section, strength machines,
  // trainer coaching a member, group class energy, premium detail shot,
  // reception/entrance. Replace image URLs below with real photo files/links.
  gallery: [
    { image: "1-wide-gym-interior.png", caption: "Wide Gym Interior" },
    { image: "2-free-weight-area.png", caption: "Free-Weight Area" },
    { image: "3-cardio-section.png", caption: "Cardio Section" },
    { image: "4-strength-training-area.png", caption: "Strength-Training Area" },
    { image: "5-trainer-coaching.png", caption: "Trainer Coaching a Member" },
    { image: "6-group-workout.png", caption: "Group Workout" },
    { image: "7-premium-detail-shot.png", caption: "Premium Detail Shot" },
    { image: "8-reception-entrance.png", caption: "Reception & Entrance" }
  ],

  /* ==========================================================
     9. TESTIMONIALS — add/remove freely. rating is 1-5.
  ========================================================== */
  testimonialsTag: "06 — TESTIMONIALS",
  testimonialsTitle: "What Our Members Say",
  testimonials: [
    { quote: "Titan Fitness completely changed the way I approach training. The trainers are supportive, knowledgeable, and genuinely motivating.", name: "Rahul Mehta", meta: "Member", rating: 5 },
    { quote: "The equipment is excellent and the atmosphere is amazing. I actually look forward to my workouts now!", name: "Priya Sharma", meta: "Member", rating: 5 },
    { quote: "The personalized training helped me stay consistent and confident. The whole team makes you feel welcome.", name: "Aditya Kapoor", meta: "Member", rating: 5 }
  ],

  /* ==========================================================
     10. CONTACT — phone, WhatsApp, email, address, map, hours
  ========================================================== */
  contact: {
    tag: "07 — VISIT US",
    title: "GET IN. GET STRONG.",
    description: "Have questions or ready to start your fitness journey? Get in touch with our team and take the first step toward becoming stronger, fitter, and more confident.",
    phoneDisplay: "+91 XXXXXXXXXX",          // ⚠️ placeholder — swap XXXXXXXXXX for your real 10-digit number
    phoneHref: "tel:+91XXXXXXXXXX",          // ⚠️ won't work as a tap-to-call link until the digits above are real
    email: "hello@titanfitness.com",
    address: "123 Fitness Avenue, New Delhi, India",
    // Full WhatsApp deep-link with country code, digits only, no symbols.
    // Example: "15552138890". Leave empty string to hide the WhatsApp button.
    whatsappNumber: "WHATSAPP_NUMBER",
    whatsappPrefilledMessage: "Hi! I'd like to know more about membership.",
    // Paste a Google Maps "Embed a map" iframe src URL here.
    mapEmbedUrl: "PASTE_GOOGLE_MAPS_EMBED_URL_HERE",
    hours: [
      { days: "Mon – Sat", time: "6:00 AM – 10:00 PM" },
      { days: "Sunday", time: "7:00 AM – 2:00 PM" }
    ]
  },

  /* ==========================================================
     11. SOCIAL LINKS — leave any value as "" to hide that icon
  ========================================================== */
  social: {
    instagram: "INSTAGRAM_URL",
    facebook: "FACEBOOK_URL",
    twitter: "TWITTER_URL",
    youtube: "YOUTUBE_URL"
  }

};
