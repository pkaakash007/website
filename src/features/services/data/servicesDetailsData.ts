export interface DetailedServiceInfo {
  id: string;
  title: string;
  categoryLabel: string;
  image: string;
  tagline: string;
  simpleDesc: string;
  whyYourProductNeedsThis: {
    heading: string;
    summary: string;
    points: Array<{
      title: string;
      desc: string;
    }>;
  };
  whyYouNeedThisNow: {
    heading: string;
    reasons: Array<{
      title: string;
      desc: string;
    }>;
  };
  whatYouGet: string[];
  howWeDeliver: Array<{
    step: string;
    title: string;
    desc: string;
  }>;
  faqs: Array<{
    q: string;
    a: string;
  }>;
}

export const DETAILED_SERVICES_MAP: Record<string, DetailedServiceInfo> = {
  "website-design": {
    id: "website-design",
    title: "Website Design",
    categoryLabel: "Web & Apps",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    tagline: "Your digital showroom that works 24/7 to turn casual visitors into direct customer phone calls and orders.",
    simpleDesc: "Fast, modern websites that look great on mobile phones and bring you customer calls.",
    whyYourProductNeedsThis: {
      heading: "Why your business needs a modern website today",
      summary: "Before visiting your shop, calling your office, or ordering your goods, 88% of customers search for you on Google. If you don't have a modern website, or if your current site is slow and broken on smartphones, buyers automatically assume your business is outdated and call your competitor instead.",
      points: [
        {
          title: "Instant Trust & Credibility",
          desc: "A sleek, clean website makes small businesses look established and enterprise businesses look like market leaders.",
        },
        {
          title: "1-Tap Contact for Mobile Buyers",
          desc: "Over 80% of your visitors browse from mobile phones. We place 1-tap WhatsApp and phone call buttons right at their thumb.",
        },
        {
          title: "Permanent Brand Asset You Own 100%",
          desc: "Unlike Instagram or Facebook where algorithms can shadowban your page, your website is your own sovereign digital property.",
        },
      ],
    },
    whyYouNeedThisNow: {
      heading: "What you gain when you upgrade your website",
      reasons: [
        {
          title: "Never Lose High-Value Inquiries",
          desc: "Fast load times under 2 seconds ensure eager customers don't abandon your site out of frustration.",
        },
        {
          title: "Ready for Google Search & Ads",
          desc: "Built with clean SEO architecture so your business shows up when local buyers search for your products.",
        },
        {
          title: "Zero Monthly Builder Fees",
          desc: "We write clean, efficient code and hand over full ownership without expensive monthly recurring locks.",
        },
      ],
    },
    whatYouGet: [
      "Custom responsive design for iPhone, Android, tablets, and laptops",
      "Direct 1-tap WhatsApp chat and phone call buttons",
      "Fast Google-friendly page speed with under 2-second load times",
      "Interactive Google Maps location and contact form with email alerts",
      "Complete 100% source code ownership handed over upon launch",
    ],
    howWeDeliver: [
      {
        step: "01",
        title: "Requirement & Screen Plan",
        desc: "We understand your products, audience, and key services to draft a clean screen layout.",
      },
      {
        step: "02",
        title: "Design & Live Mobile Preview",
        desc: "We design every page and share a private live link so you can test it directly on your phone.",
      },
      {
        step: "03",
        title: "Launch & Domain Setup",
        desc: "We connect your official domain (.com, .in), install free SSL security, and go live.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to launch our new website?",
        a: "A standard business website is typically completed and live within 5 to 8 working days from receiving your content.",
      },
      {
        q: "Will my website open properly on iPhones and budget Android phones?",
        a: "Yes. Every website we build is thoroughly tested across iOS Safari, Chrome, and various screen dimensions for seamless performance.",
      },
      {
        q: "Can I update text and images later by myself?",
        a: "Yes, we provide an easy, straightforward management setup or support whenever you need to add new products or photos.",
      },
    ],
  },

  "ecommerce-platforms": {
    id: "ecommerce-platforms",
    title: "Online Store & Ecommerce",
    categoryLabel: "Web & Apps",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80",
    tagline: "Your own branded online shop where buyers browse, order, and pay instantly without marketplace commissions.",
    simpleDesc: "Your own online shop where buyers order and pay with GPay, PhonePe, or Cash on Delivery.",
    whyYourProductNeedsThis: {
      heading: "Why your brand needs its own direct ecommerce shop",
      summary: "Selling on marketplaces like Amazon or Swiggy takes 20% to 35% in commission fees and denies you direct access to your own customer data. Having your own direct ecommerce store allows you to keep 100% of your profits, build repeat customer loyalty, and collect customer phone numbers for repeat marketing.",
      points: [
        {
          title: "Keep 100% of Your Profits",
          desc: "Zero marketplace middleman cuts. The entire sale amount goes straight to your business bank account.",
        },
        {
          title: "Frictionless UPI & Card Checkout",
          desc: "Buyers complete payment in seconds using Google Pay, PhonePe, Paytm, credit cards, or Cash on Delivery.",
        },
        {
          title: "Instant WhatsApp Order Alerts",
          desc: "Receive immediate notification on WhatsApp the second a customer places an order with full shipping details.",
        },
      ],
    },
    whyYouNeedThisNow: {
      heading: "Why this turns your retail business into an automated sales machine",
      reasons: [
        {
          title: "Sell While You Sleep",
          desc: "Your catalog takes orders, collects money, and generates invoices 24 hours a day, 365 days a year.",
        },
        {
          title: "Easy Product Management from Phone",
          desc: "Add new products, change prices, update stock, and mark out-of-stock items in seconds from your mobile.",
        },
        {
          title: "Automated Shipping Integration",
          desc: "Connect seamlessly with courier partners for automated tracking and label generation.",
        },
      ],
    },
    whatYouGet: [
      "Custom branded storefront with mobile-first cart and checkout",
      "Instant UPI (GPay, PhonePe), net banking, card, and COD gateway setup",
      "Direct WhatsApp order confirmation alerts for both you and your buyer",
      "Simple admin dashboard to manage inventory, discounts, and orders",
      "Customer account area with order tracking and downloadable invoices",
    ],
    howWeDeliver: [
      {
        step: "01",
        title: "Product Catalog Setup",
        desc: "We organize your product categories, variants (sizes/colors), and pricing structure.",
      },
      {
        step: "02",
        title: "Payment Gateway & Checkout Test",
        desc: "We connect Razorpay/Cashfree/Stripe and run live test transactions to ensure 100% reliability.",
      },
      {
        step: "03",
        title: "Staff Training & Live Launch",
        desc: "We show your team how to update stock in 2 minutes, package orders, and go live.",
      },
    ],
    faqs: [
      {
        q: "What payment gateways are supported?",
        a: "We integrate Razorpay, Cashfree, PhonePe PG, and Stripe supporting UPI, all major debit/credit cards, and Cash on Delivery.",
      },
      {
        q: "How do I know when an order is placed?",
        a: "You get an immediate WhatsApp message and email with the order summary, customer phone number, and delivery address.",
      },
    ],
  },

  "mobile-app-development": {
    id: "mobile-app-development",
    title: "iPhone & Android Apps",
    categoryLabel: "Web & Apps",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
    tagline: "Put your business icon directly on your customer's phone screen with live Apple App Store & Google Play publishing.",
    simpleDesc: "Custom mobile apps built for your brand and published live on the App Store and Play Store.",
    whyYourProductNeedsThis: {
      heading: "Why mobile apps drive 3x higher repeat sales than websites",
      summary: "Customers check their mobile phones over 90 times a day. When your app icon sits on their home screen, your brand is permanently top of mind. Mobile apps load instantly, work smoothly even on low network connections, and allow you to send free push notifications anytime to announce new offers.",
      points: [
        {
          title: "Permanent Real Estate on Customer Phones",
          desc: "No typing URLs or searching Google. Customers open your app with a single tap from their home screen.",
        },
        {
          title: "Free Instant Push Notifications",
          desc: "Broadcast flash sales, festive discounts, or urgent updates directly to thousands of customers for free.",
        },
        {
          title: "Fluid, Native Speed",
          desc: "Butter-smooth scrolling and zero lag for browsing products, booking appointments, or tracking orders.",
        },
      ],
    },
    whyYouNeedThisNow: {
      heading: "Why your growing service or delivery business needs an app",
      reasons: [
        {
          title: "High Customer Retention",
          desc: "App users order 3 times more frequently and spend 25% more per transaction than casual web visitors.",
        },
        {
          title: "Official App Store Credibility",
          desc: "Being certified and live on Apple App Store and Google Play Store gives your brand verified status.",
        },
        {
          title: "Direct Offline Capability",
          desc: "Basic catalog data and account history remain viewable even when mobile internet drops.",
        },
      ],
    },
    whatYouGet: [
      "Native cross-platform iOS & Android mobile application",
      "Full publication assistance on Apple App Store & Google Play Store",
      "Push notification dashboard to send unlimited customer broadcast alerts",
      "Customer profile, order history, and live status tracking",
      "100% full source code ownership with zero monthly licensing lock",
    ],
    howWeDeliver: [
      {
        step: "01",
        title: "User Flow & Screen Wireframes",
        desc: "We design clean, intuitive screens tailored specifically for thumb-friendly mobile interaction.",
      },
      {
        step: "02",
        title: "App Engineering & Device Testing",
        desc: "We build the app and test on real iPhones and Android devices across multiple screen sizes.",
      },
      {
        step: "03",
        title: "Store Submission & Launch",
        desc: "We handle Apple & Google compliance, privacy policies, and release the live version.",
      },
    ],
    faqs: [
      {
        q: "Do you publish on both Apple App Store and Google Play?",
        a: "Yes, we handle the entire submission, review guideline compliance, and publication process for both stores.",
      },
      {
        q: "Will we own the complete source code?",
        a: "Yes! 100% of the source code and store listings belong entirely to your company.",
      },
    ],
  },

  "ui-ux-architecture": {
    id: "ui-ux-architecture",
    title: "App & Screen Design",
    categoryLabel: "Web & Apps",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80",
    tagline: "Intuitive, clean screen designs that eliminate confusion and guide visitors straight to ordering.",
    simpleDesc: "Clean, simple screen layouts that make your website or app easy for anyone to use.",
    whyYourProductNeedsThis: {
      heading: "Why great design saves thousands in wasted development",
      summary: "Building software without proper screen wireframing is like building a house without an architectural blueprint. Professional UI/UX design lets you test every screen, button, and user journey in an interactive clickable prototype before writing a single line of code, ensuring users never get confused or stuck.",
      points: [
        {
          title: "Zero User Confusion",
          desc: "Every button, card, and menu is engineered so first-time visitors know exactly where to click.",
        },
        {
          title: "Clickable Prototype Before Coding",
          desc: "Experience your entire application on your phone like a real app before spending money on backend development.",
        },
        {
          title: "Apple-Grade Design Aesthetics",
          desc: "Generous whitespace, premium typography, and subtle micro-interactions that elevate brand perception.",
        },
      ],
    },
    whyYouNeedThisNow: {
      heading: "What happens when your screens are designed by experts",
      reasons: [
        {
          title: "Higher Conversion Rates",
          desc: "Fewer dropped checkouts and fewer abandoned forms because every action feels effortless.",
        },
        {
          title: "Faster Engineering Delivery",
          desc: "Developers code 50% faster when working from pixel-perfect Figma design systems.",
        },
        {
          title: "Clear Stakeholder Alignment",
          desc: "Investors, partners, and team members can see and test the exact product vision upfront.",
        },
      ],
    },
    whatYouGet: [
      "Complete interactive clickable Figma prototype",
      "Full mobile and desktop screen responsive layouts",
      "Design tokens: typography scale, color palette, and reusable component library",
      "Developer handoff files with exact CSS spacing and dimensions",
      "User journey maps and checkout flow wireframes",
    ],
    howWeDeliver: [
      {
        step: "01",
        title: "User Flow Mapping",
        desc: "We map out each screen a user encounters from first landing to final conversion.",
      },
      {
        step: "02",
        title: "High-Fidelity Screen Design",
        desc: "We craft polished, modern UI screens with your exact brand colors and typography.",
      },
      {
        step: "03",
        title: "Clickable Prototype & Review",
        desc: "We test the interactive prototype together and refine every micro-interaction.",
      },
    ],
    faqs: [
      {
        q: "What tools do you use for screen design?",
        a: "We work in Figma, providing you with full interactive preview links and complete project source files.",
      },
      {
        q: "Can my developers build directly from your designs?",
        a: "Yes, our Figma files include clean component auto-layouts and inspection values ready for engineers.",
      },
    ],
  },

  "performance-marketing": {
    id: "performance-marketing",
    title: "Google & Social Media Ads",
    categoryLabel: "Marketing & SEO",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tagline: "High-intent advertising campaigns that put your offer directly in front of customers with money in hand.",
    simpleDesc: "Targeted advertisements that bring ready buyers straight to your phone, WhatsApp, and showroom.",
    whyYourProductNeedsThis: {
      heading: "Why waiting for word-of-mouth is costing you daily sales",
      summary: "Word-of-mouth is great, but it cannot be scaled or predicted. Paid ads on Google and Meta (Instagram/Facebook) allow you to turn on a predictable faucet of qualified enquiries whenever you need business. When someone in your city searches 'best catering near me' or 'buy bridal silk sarees', your ad appears right at the top.",
      points: [
        {
          title: "Appear When Buyers Are Searching",
          desc: "Google Search ads capture people at the exact second they are actively shopping for your service.",
        },
        {
          title: "Laser Pin-Point City & Demographic Targeting",
          desc: "Target specific cities, postal codes, age groups, and high-income brackets with zero wasted spend.",
        },
        {
          title: "Measurable Cost Per Lead",
          desc: "Track every single rupee spent against actual phone calls, WhatsApp messages, and closed sales.",
        },
      ],
    },
    whyYouNeedThisNow: {
      heading: "How we prevent wasted ad budgets and deliver real ROI",
      reasons: [
        {
          title: "Negative Keyword Filtering",
          desc: "We block free-seekers and irrelevant clicks so you only pay for serious buyers.",
        },
        {
          title: "High-Converting Ad Creatives",
          desc: "Eye-catching visuals and persuasive copy that stop people mid-scroll on Instagram.",
        },
        {
          title: "Transparent Weekly Reporting",
          desc: "Clear, jargon-free reports showing exactly how many calls and orders were generated.",
        },
      ],
    },
    whatYouGet: [
      "Google Search, Call Ads, and Performance Max campaign setup",
      "Instagram & Facebook Lead Generation and Carousel ad creatives",
      "Conversion tracking setup for phone calls, WhatsApp clicks, and form submissions",
      "A/B split testing of ad copy, offers, and audience segments",
      "Weekly transparent review meetings with cost-per-lead breakdown",
    ],
    howWeDeliver: [
      {
        step: "01",
        title: "Commercial Keyword Audit",
        desc: "We discover high-intent keywords that customers in your area use when ready to buy.",
      },
      {
        step: "02",
        title: "Ad Creative & Copy Production",
        desc: "We design conversion-focused graphics and write compelling promotional copy.",
      },
      {
        step: "03",
        title: "Campaign Flight & Optimization",
        desc: "We launch, monitor daily bid adjustments, and scale the top-performing ad sets.",
      },
    ],
    faqs: [
      {
        q: "What is the recommended minimum ad budget?",
        a: "We tailor budgets to your goal, typically starting from ₹500 to ₹1,500/day for local city campaigns.",
      },
      {
        q: "How quickly do we start getting customer inquiries?",
        a: "Google Search ads often begin generating calls within 24 to 48 hours of campaign activation.",
      },
    ],
  },

  "seo-geo-ai-search": {
    id: "seo-geo-ai-search",
    title: "Google Maps & Search Ranking",
    categoryLabel: "Marketing & SEO",
    image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=1200&q=80",
    tagline: "Dominate the Google 3-Pack Maps and organic search so nearby customers call you instead of competitors.",
    simpleDesc: "Get your business listed #1 on Google Maps and search results so nearby customers call you first.",
    whyYourProductNeedsThis: {
      heading: "Why Google Maps ranking is the most valuable asset for local business",
      summary: "When someone needs a clinic, school, textile showroom, lawyer, or industrial equipment, they open Google Maps and call one of the top 3 businesses shown. If your Google Business Profile isn't optimized, you are practically invisible to local buyers. Local SEO brings continuous phone calls every week without paying for clicks.",
      points: [
        {
          title: "Top 3 Google Maps Placement",
          desc: "Gain maximum visibility in the prestigious Google 3-Pack right where 70% of clicks happen.",
        },
        {
          title: "Free Long-Term Inbound Calls",
          desc: "Unlike ads which stop when budget ends, high organic ranking continues generating leads month after month.",
        },
        {
          title: "AI & Voice Search Readiness",
          desc: "Optimized for Apple Siri, Google Gemini, and voice assistants when customers speak searches out loud.",
        },
      ],
    },
    whyYouNeedThisNow: {
      heading: "How local SEO drives real foot traffic and calls",
      reasons: [
        {
          title: "Direct Driving Directions",
          desc: "Customers tap 'Directions' on Google Maps and drive directly to your store or office.",
        },
        {
          title: "Trust Building Reviews",
          desc: "We set up automated review collection workflows to showcase genuine customer 5-star ratings.",
        },
        {
          title: "Outrank Older Competitors",
          desc: "Proper citation cleanup and localized content frequently outranks competitors who ignore SEO.",
        },
      ],
    },
    whatYouGet: [
      "Complete Google Business Profile (GBP) audit and 100% profile optimization",
      "Local citation building across top verified business directories",
      "On-page website SEO for city + product keywords (e.g., 'textile manufacturer in Erode')",
      "Review generation strategy to increase authentic 5-star customer ratings",
      "Monthly keyword ranking and phone call tracking reports",
    ],
    howWeDeliver: [
      {
        step: "01",
        title: "Profile & Keyword Audit",
        desc: "We inspect your current Maps standing, keyword gaps, and competitor citation strength.",
      },
      {
        step: "02",
        title: "Local Schema & Citations",
        desc: "We inject clean geo-location code and synchronize your business name, address, and phone across the web.",
      },
      {
        step: "03",
        title: "Ranking Push & Monitoring",
        desc: "We track your rank growth across local neighborhood grids and adjust weekly.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to rank on Google Maps?",
        a: "Initial ranking improvements typically show within 3 to 6 weeks, with top-3 positions established over 2 to 3 months.",
      },
      {
        q: "Do I have to pay Google for every click from Maps?",
        a: "No! Organic Google Maps ranking clicks and phone calls are 100% free.",
      },
    ],
  },

  "social-media-marketing": {
    id: "social-media-marketing",
    title: "Instagram Reels & Posts",
    categoryLabel: "Marketing & SEO",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80",
    tagline: "Engaging short video Reels and stylish design posts that build genuine local fame and customer loyalty.",
    simpleDesc: "Trending Reels and creative posts that grow your followers and build customer trust in your area.",
    whyYourProductNeedsThis: {
      heading: "Why Instagram has become the modern portfolio for businesses",
      summary: "Before making a purchase, modern customers check your Instagram profile to see if your business is active, how your products look in real life, and what other people say in comments. An inactive or poorly designed page makes customers doubt your legitimacy. Consistent, high-quality social content keeps customers connected and buying.",
      points: [
        {
          title: "Viral Reach Through Reels",
          desc: "Short video Reels can reach tens of thousands of potential local customers without paying for ads.",
        },
        {
          title: "Social Proof & Community",
          desc: "Happy customer photos, behind-the-scenes videos, and daily stories prove your business is thriving.",
        },
        {
          title: "Direct WhatsApp & DM Orders",
          desc: "Every post has clear call-to-action captions that guide interested viewers to send a direct message or order.",
        },
      ],
    },
    whyYouNeedThisNow: {
      heading: "What consistent social content does for your brand",
      reasons: [
        {
          title: "Top-of-Mind Awareness",
          desc: "Customers remember your brand first whenever they or their family need your product.",
        },
        {
          title: "Festival & Offer Promotions",
          desc: "Professional greeting cards and festive discount posters ready before every major holiday.",
        },
        {
          title: "Polished Visual Identity",
          desc: "A cohesive, visually stunning feed that makes your products look premium and desirable.",
        },
      ],
    },
    whatYouGet: [
      "12 to 16 high-impact static and carousel posts per month",
      "4 to 8 edited vertical video Reels with trending audio and subtitles",
      "Festival greeting cards and special flash-sale promotional designs",
      "Hashtag research and engaging caption writing in English & Tamil",
      "Monthly engagement analytics and follower growth reporting",
    ],
    howWeDeliver: [
      {
        step: "01",
        title: "Monthly Content Calendar",
        desc: "We outline all post topics, offers, and festival themes 2 weeks in advance for your approval.",
      },
      {
        step: "02",
        title: "Design & Video Editing",
        desc: "Our creative team designs custom graphics and edits engaging Reels with subtitles.",
      },
      {
        step: "03",
        title: "Scheduled Publishing & Monitoring",
        desc: "We publish at peak engagement times and track which formats drive the most comments and saves.",
      },
    ],
    faqs: [
      {
        q: "Do we need to supply all the photos and videos?",
        a: "You can share simple phone clips of your products or work, and our editors transform them into studio-grade Reels. We also offer on-site shooting if needed.",
      },
      {
        q: "Can captions and text be in Tamil as well as English?",
        a: "Yes! We write bilingual captions and subtitles tailored to Tamil Nadu's regional audience.",
      },
    ],
  },

  "content-marketing-pr": {
    id: "content-marketing-pr",
    title: "Business Copywriting",
    categoryLabel: "Marketing & SEO",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    tagline: "Clear, persuasive words that explain what makes your business unique and convince buyers to choose you.",
    simpleDesc: "Clear, persuasive English and Tamil words for your website, sales brochures, and company profiles.",
    whyYourProductNeedsThis: {
      heading: "Why the right words convert 5x better than fancy jargon",
      summary: "Most business websites and brochures fail because they use complicated jargon that confuses customers. When buyers don't immediately understand what you do or how you help them, they click away. Clear, persuasive copywriting explains your value simply, addresses buyer doubts, and makes saying 'yes' easy.",
      points: [
        {
          title: "Clear Value Proposition",
          desc: "Visitors understand what you sell, who it's for, and why they should care within 3 seconds.",
        },
        {
          title: "Overcomes Customer Hesitations",
          desc: "Directly addresses price concerns, warranty, delivery times, and quality guarantees.",
        },
        {
          title: "Professional Corporate Identity",
          desc: "Refined English and Tamil copy for sales proposals, brochures, and email communication.",
        },
      ],
    },
    whyYouNeedThisNow: {
      heading: "How professional copywriting elevates your sales",
      reasons: [
        {
          title: "Win High-Value Commercial Deals",
          desc: "Executive company profiles that impress corporate clients, banks, and export buyers.",
        },
        {
          title: "Better SEO Rankings",
          desc: "Naturally written content that Google loves to rank for key industry search queries.",
        },
        {
          title: "Save Sales Team Time",
          desc: "Your website answers all repetitive questions so your sales reps only talk to qualified leads.",
        },
      ],
    },
    whatYouGet: [
      "Complete website page copywriting (Home, About, Services, Contact)",
      "Executive company profile PDF text and sales brochure content",
      "Persuasive email outreach templates and WhatsApp sales broadcast scripts",
      "Product catalog descriptions that highlight practical customer benefits",
      "Bilingual copy support: Fluent English and polished Tamil phrasing",
    ],
    howWeDeliver: [
      {
        step: "01",
        title: "Brand Voice Discovery",
        desc: "We interview your team to uncover your origin story, key strengths, and competitive advantage.",
      },
      {
        step: "02",
        title: "Drafting & Headline Testing",
        desc: "We write punchy headlines, clear body sections, and compelling call-to-action buttons.",
      },
      {
        step: "03",
        title: "Refinement & Final Handoff",
        desc: "We polish the text based on your feedback and supply it ready for print or web publishing.",
      },
    ],
    faqs: [
      {
        q: "Can you write company profiles for export or corporate tenders?",
        a: "Yes, we specialize in corporate narrative documents, B2B brochures, and export company presentations.",
      },
      {
        q: "Do you write in both English and Tamil?",
        a: "Yes, our team writes fluent corporate English and culturally nuanced Tamil.",
      },
    ],
  },

  "brand-identity-logo": {
    id: "brand-identity-logo",
    title: "Logo & Brand Identity",
    categoryLabel: "Branding & Media",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
    tagline: "An unforgettable logo and cohesive visual identity that makes your business look premium and trusted.",
    simpleDesc: "Distinctive logo design and matching brand colors that make your business look trusted and established.",
    whyYourProductNeedsThis: {
      heading: "Why a generic logo hurts your pricing power",
      summary: "When customers see a cheap, clip-art logo, they immediately negotiate on price because your brand looks small and unestablished. A custom, thoughtfully crafted logo and cohesive color palette positions your business as an industry leader, allowing you to charge premium prices and build lasting brand recall.",
      points: [
        {
          title: "Instant Visual Recognition",
          desc: "A distinctive mark that customers recognize on signboards, packaging, trucks, and online.",
        },
        {
          title: "Complete Copyright Ownership",
          desc: "100% original custom artwork with full trademark-ready intellectual property handover.",
        },
        {
          title: "Consistent Look Across All Materials",
          desc: "Matching colors, typography, and stationery so your brand looks unified and high-end everywhere.",
        },
      ],
    },
    whyYouNeedThisNow: {
      heading: "What a complete brand identity package delivers",
      reasons: [
        {
          title: "Charge Premium Rates",
          desc: "Customers willingly pay more for brands that look polished, professional, and well-packaged.",
        },
        {
          title: "Ready for All Print Scales",
          desc: "Vector files that look razor-sharp on a 2-inch business card or a 50-foot roadside billboard.",
        },
        {
          title: "Brand Style Guide Book",
          desc: "Clear color codes (HEX, CMYK, Pantone) and font rules so any printer or designer maintains consistency.",
        },
      ],
    },
    whatYouGet: [
      "3 to 5 original custom logo design concepts to choose from",
      "Vector master files: AI, EPS, PDF, SVG, and transparent PNG",
      "Business card, letterhead, envelope, and email signature designs",
      "Social media profile badges, banners, and watermark stamps",
      "Official Brand Guidelines book defining colors, fonts, and usage rules",
    ],
    howWeDeliver: [
      {
        step: "01",
        title: "Moodboard & Concept Research",
        desc: "We research your industry, competitors, and aesthetic preferences to explore visual directions.",
      },
      {
        step: "02",
        title: "Concept Presentation",
        desc: "We present distinct, custom logo concepts shown on realistic 3D mockups (signboards, stationery).",
      },
      {
        step: "03",
        title: "Master Kit Packaging",
        desc: "Once you approve your favorite, we package all print and digital master files with full rights.",
      },
    ],
    faqs: [
      {
        q: "How many revisions are included?",
        a: "We provide multiple rounds of revisions on your chosen direction until you are 100% satisfied.",
      },
      {
        q: "Will we own the legal rights to trademark the logo?",
        a: "Yes! You receive 100% exclusive copyright ownership to register the mark as a legal trademark.",
      },
    ],
  },

  "graphic-design-packaging": {
    id: "graphic-design-packaging",
    title: "Product Packaging & Print",
    categoryLabel: "Branding & Media",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=1200&q=80",
    tagline: "Eye-catching box, pouch, and label packaging that stands out on retail shelves and drives purchase decisions.",
    simpleDesc: "Eye-catching box packaging, labels, brochures, and banners printed and sized ready for production.",
    whyYourProductNeedsThis: {
      heading: "Why packaging is the ultimate silent salesperson on retail shelves",
      summary: "In a supermarket aisle or retail showroom, customers make buying decisions in under 3 seconds. The product with the most attractive, clear, and professional packaging gets picked up first. Premium packaging protects your brand reputation, communicates ingredients and certifications clearly, and justifies a higher price point.",
      points: [
        {
          title: "Stand Out in Busy Retail Shelves",
          desc: "Vibrant color harmony and bold typography that catches customer eyes from 10 feet away.",
        },
        {
          title: "Printer-Ready Master Files",
          desc: "Precise die-lines, bleed margins, and CMYK color profiling ready for offset and digital printers.",
        },
        {
          title: "Regulatory Compliance Details",
          desc: "Clean layout for FSSAI numbers, barcodes, nutrition facts, batch details, and manufacturing info.",
        },
      ],
    },
    whyYouNeedThisNow: {
      heading: "How professional packaging elevates your product line",
      reasons: [
        {
          title: "Get Accepted by Big Retail Chains",
          desc: "Supermarkets and distributors demand retail-ready packaging that looks established and trustworthy.",
        },
        {
          title: "Unboxing Delight for Customers",
          desc: "Attractive packaging encourages buyers to take photos and share on Instagram for free viral publicity.",
        },
        {
          title: "Zero Costly Printing Errors",
          desc: "We verify text, barcodes, and die-cut alignments to avoid thousands of wasted print impressions.",
        },
      ],
    },
    whatYouGet: [
      "Custom die-line box, pouch, bottle label, or sleeve packaging design",
      "High-resolution print-ready PDF master files with CMYK color separation",
      "Photorealistic 3D packaging mockups for your website, catalog, and ads",
      "Sales brochure, product catalog, and showroom banner designs",
      "Direct coordination with your printing press for technical proof approvals",
    ],
    howWeDeliver: [
      {
        step: "01",
        title: "Die-Line & Dimension Verification",
        desc: "We confirm the exact physical dimensions and cutter guide from your packaging printer.",
      },
      {
        step: "02",
        title: "Front Face & Label Design",
        desc: "We craft the visual face, typography, and mandatory legal information panels.",
      },
      {
        step: "03",
        title: "3D Mockup & Print File Release",
        desc: "You review 3D renders from all angles before we release the final printer-ready vector files.",
      },
    ],
    faqs: [
      {
        q: "Do you supply the physical boxes or just the design?",
        a: "We provide complete print-ready master files and can directly connect you with our trusted printing partners.",
      },
      {
        q: "What types of packaging do you design?",
        a: "Mono cartons, corrugated boxes, stand-up zip pouches, bottle labels, tin labels, and blister cards.",
      },
    ],
  },

  "video-editing-motion": {
    id: "video-editing-motion",
    title: "Video Shooting & Editing",
    categoryLabel: "Branding & Media",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    tagline: "Crisp 4K video storytelling that showcases your factory, customer reviews, and product craftsmanship.",
    simpleDesc: "High-quality video shooting and editing for customer testimonials, product demos, and factory tours.",
    whyYourProductNeedsThis: {
      heading: "Why video is the #1 medium that builds immediate trust",
      summary: "Text and photos can be staged, but video shows the real reality of your factory, your team, and your satisfied clients. A 60-second video of your manufacturing machinery in action or a genuine client testimonial creates instant trust that no sales brochure can match, speeding up customer purchase decisions dramatically.",
      points: [
        {
          title: "Proof of Capability & Scale",
          desc: "Showcase clean factories, advanced machinery, and real craftsmanship to impress clients.",
        },
        {
          title: "Authentic Client Testimonials",
          desc: "Real clients speaking on camera about their positive experience is the ultimate sales closer.",
        },
        {
          title: "Optimized for WhatsApp Sharing",
          desc: "Compressed high-clarity video formats ready for quick sharing by your sales team to prospects.",
        },
      ],
    },
    whyYouNeedThisNow: {
      heading: "How video content accelerates your business pipeline",
      reasons: [
        {
          title: "Explains Complex Products in 60 Seconds",
          desc: "Animated graphics and voiceover explain machinery or software effortlessly.",
        },
        {
          title: "Multi-Platform Repurposing",
          desc: "One shoot gives you a YouTube corporate video, 5 Instagram Reels, and website background video.",
        },
        {
          title: "Bilingual Subtitles",
          desc: "Clear English and Tamil subtitles so viewers understand even with phone volume muted.",
        },
      ],
    },
    whatYouGet: [
      "On-site 4K camera and drone aerial shooting (optional add-on)",
      "Dynamic professional video editing with color grading and audio cleanup",
      "Bilingual on-screen subtitle captions in English & Tamil",
      "Engaging motion graphics, logo reveals, and call-to-action cards",
      "Fast-loading web and WhatsApp compressed file exports",
    ],
    howWeDeliver: [
      {
        step: "01",
        title: "Script & Shot List",
        desc: "We plan the narrative, interview questions, and specific b-roll shots needed.",
      },
      {
        step: "02",
        title: "Production / Ingestion",
        desc: "We shoot on location or receive your raw mobile/camera footage securely.",
      },
      {
        step: "03",
        title: "Editing, Sound & Master Delivery",
        desc: "We edit pacing, add licensed background music, color grade, and export final masters.",
      },
    ],
    faqs: [
      {
        q: "Can you edit raw footage we already recorded on our phones?",
        a: "Yes! Send us your raw video clips and we will trim, color correct, add music, and add titles.",
      },
      {
        q: "Do you provide on-location video shooting in Tamil Nadu?",
        a: "Yes, our camera crew shoots across Erode, Coimbatore, Salem, Tiruppur, Chennai, and throughout Tamil Nadu.",
      },
    ],
  },

  "ecommerce-photography": {
    id: "ecommerce-photography",
    title: "Product Photography",
    categoryLabel: "Branding & Media",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    tagline: "Studio-lit, high-resolution product photos that make your items look luxurious, tactile, and irresistible.",
    simpleDesc: "Clean, studio-lit photos of your items that make your products look premium on online stores and catalogs.",
    whyYourProductNeedsThis: {
      heading: "Why poor product photos kill online sales before they start",
      summary: "Online buyers cannot touch, feel, or smell your product — they buy entirely with their eyes. Blurry, poorly lit smartphone photos with bad shadows make even the highest quality textiles, food products, or jewelry look cheap. Professional studio photos reveal true colors, fine texture, and build the confidence buyers need to click 'Order Now'.",
      points: [
        {
          title: "Pure White Amazon/E-Commerce Backgrounds",
          desc: "Pixel-perfect cutout white backgrounds conforming 100% with Amazon, Flipkart, and store standards.",
        },
        {
          title: "Accurate Color Reproduction",
          desc: "Calibrated studio lighting ensures colors match real life, drastically reducing customer returns.",
        },
        {
          title: "Lifestyle & Texture Close-Ups",
          desc: "Detail shots highlighting stitch quality, fabric grain, metallic finish, and craftsmanship.",
        },
      ],
    },
    whyYouNeedThisNow: {
      heading: "How high-end product photography pays for itself",
      reasons: [
        {
          title: "Halve Your Return Rates",
          desc: "When products look exactly in person like they do on your website, customer returns plummet.",
        },
        {
          title: "Ready for Print Catalogs & Billboards",
          desc: "Ultra high-resolution raw files that stay crisp at any zoom level or billboard scale.",
        },
        {
          title: "Speed Up Website Loading",
          desc: "We supply both uncompressed print masters and optimized WebP images for instant mobile loading.",
        },
      ],
    },
    whatYouGet: [
      "Pure white background packshots for ecommerce marketplaces and online stores",
      "Contextual lifestyle staging with premium props and textured surfaces",
      "Macro detail close-up shots highlighting fabric, metal, or ingredients",
      "Full digital retouching: dust removal, color balancing, and shadow enhancements",
      "Both high-res print master files and web-optimized lightweight images",
    ],
    howWeDeliver: [
      {
        step: "01",
        title: "Product Sample Drop-Off",
        desc: "You courier or hand over product samples to our studio with shot requirements.",
      },
      {
        step: "02",
        title: "Studio Lighting & Shoot",
        desc: "Our photographers light, style, and shoot every angle (front, back, angled, detail).",
      },
      {
        step: "03",
        title: "Retouching & File Delivery",
        desc: "We clean backgrounds, enhance vibrancy, and deliver downloadable cloud folders.",
      },
    ],
    faqs: [
      {
        q: "How many angles per product are included?",
        a: "Standard packages include 4 to 6 angles per item (front, 45-degree, back, and close-up detail).",
      },
      {
        q: "How do we get our products back after the shoot?",
        a: "We carefully repackage your items and courier them back or arrange personal pickup.",
      },
    ],
  },

  "cyber-security-cloud": {
    id: "cyber-security-cloud",
    title: "Fast Hosting & Daily Backup",
    categoryLabel: "Security & Cloud",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    tagline: "Enterprise cloud hosting with daily automated backups and security shields to keep your website online 24/7.",
    simpleDesc: "Reliable cloud hosting with daily backups and safety locks to keep your website fast and never offline.",
    whyYourProductNeedsThis: {
      heading: "Why cheap hosting costs businesses thousands in downtime and hacked data",
      summary: "Shared ₹99 hosting packs hundreds of websites on a single overloaded server. If one site is infected with malware, your website crashes, your customer database gets exposed, or Google blacklists your domain with a scary 'Deceptive site ahead' warning. Enterprise cloud hosting guarantees speed, automated daily backups, and impenetrable security.",
      points: [
        {
          title: "99.98% High Availability Uptime",
          desc: "Your website stays up and fast even during traffic surges or festive seasonal sales.",
        },
        {
          title: "Automated Daily Incremental Backups",
          desc: "Every order, image, and database entry is backed up daily to a secure off-site cloud vault.",
        },
        {
          title: "Free SSL & Web Application Firewall",
          desc: "Blocks automated malicious bots, spam form submissions, and brute-force login attacks.",
        },
      ],
    },
    whyYouNeedThisNow: {
      heading: "How cloud reliability protects your hard-earned reputation",
      reasons: [
        {
          title: "1-Click Disaster Recovery",
          desc: "If any mistake or server crash occurs, your entire site can be restored in under 10 minutes.",
        },
        {
          title: "Lightning-Fast Mobile Speed",
          desc: "Fast SSD storage and global CDN caching ensure sub-second response times across India.",
        },
        {
          title: "Zero Server Headache for You",
          desc: "We handle server updates, security patches, PHP upgrades, and 24/7 monitoring for you.",
        },
      ],
    },
    whatYouGet: [
      "Dedicated high-speed cloud server container with NVMe SSD storage",
      "Automated daily off-site cloud backups with 30-day snapshot history",
      "Free Let's Encrypt Enterprise SSL certificate with auto-renewal",
      "Cloudflare CDN integration and Web Application Firewall (WAF)",
      "24/7 server health monitoring and emergency restore SLA",
    ],
    howWeDeliver: [
      {
        step: "01",
        title: "Zero-Downtime Migration",
        desc: "We copy your existing site to our high-speed cloud staging server without interrupting live visitors.",
      },
      {
        step: "02",
        title: "Security Shield & Cache Setup",
        desc: "We configure firewall rules, database caching, and automated daily backup routines.",
      },
      {
        step: "03",
        title: "DNS Switch & Active Monitoring",
        desc: "We point your domain to the new server and activate 24/7 uptime monitoring alerts.",
      },
    ],
    faqs: [
      {
        q: "Will my website go down while migrating to your servers?",
        a: "No! We perform zero-downtime migrations. Your visitors won't notice a single second of disruption.",
      },
      {
        q: "How often are backups taken?",
        a: "Backups are automatically taken every 24 hours at midnight and stored safely in an isolated cloud vault.",
      },
    ],
  },
};
