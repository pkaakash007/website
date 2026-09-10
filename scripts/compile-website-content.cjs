const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../src/Real-Result-Website-Content/01-Page-Copy');
const seoMetaPath = path.join(__dirname, '../src/Real-Result-Website-Content/03-SEO-AI-Search/page-seo-metadata.json');
const seoMetaList = JSON.parse(fs.readFileSync(seoMetaPath, 'utf8'));

// Service definitions list (34 services)
const serviceFiles = [
  // 17 Digital Marketing Services
  { file: '19-services--marketing-strategy.txt', slug: 'marketing-strategy', category: 'digital-marketing', hub: '/services/digital-marketing/' },
  { file: '20-services--seo.txt', slug: 'seo', category: 'digital-marketing', hub: '/services/digital-marketing/' },
  { file: '21-services--local-seo.txt', slug: 'local-seo', category: 'digital-marketing', hub: '/services/digital-marketing/' },
  { file: '22-services--paid-search.txt', slug: 'paid-search', category: 'digital-marketing', hub: '/services/digital-marketing/' },
  { file: '23-services--paid-social.txt', slug: 'paid-social', category: 'digital-marketing', hub: '/services/digital-marketing/' },
  { file: '24-services--social-media.txt', slug: 'social-media', category: 'digital-marketing', hub: '/services/digital-marketing/' },
  { file: '25-services--content-marketing.txt', slug: 'content-marketing', category: 'digital-marketing', hub: '/services/digital-marketing/' },
  { file: '26-services--video-creative.txt', slug: 'video-creative', category: 'digital-marketing', hub: '/services/digital-marketing/' },
  { file: '27-services--branding.txt', slug: 'branding', category: 'digital-marketing', hub: '/services/digital-marketing/' },
  { file: '28-services--email-marketing.txt', slug: 'email-marketing', category: 'digital-marketing', hub: '/services/digital-marketing/' },
  { file: '29-services--influencer-affiliate.txt', slug: 'influencer-affiliate', category: 'digital-marketing', hub: '/services/digital-marketing/' },
  { file: '30-services--digital-pr-reputation.txt', slug: 'digital-pr-reputation', category: 'digital-marketing', hub: '/services/digital-marketing/' },
  { file: '31-services--lead-generation.txt', slug: 'lead-generation', category: 'digital-marketing', hub: '/services/digital-marketing/' },
  { file: '32-services--conversion-optimization.txt', slug: 'conversion-optimization', category: 'digital-marketing', hub: '/services/digital-marketing/' },
  { file: '33-services--analytics.txt', slug: 'analytics', category: 'digital-marketing', hub: '/services/digital-marketing/' },
  { file: '34-services--app-marketing.txt', slug: 'app-marketing', category: 'digital-marketing', hub: '/services/digital-marketing/' },
  { file: '35-services--ai-search-optimization.txt', slug: 'ai-search-optimization', category: 'digital-marketing', hub: '/services/digital-marketing/' },

  // 5 Calling & Messaging Services
  { file: '36-services--bulk-voice-calls.txt', slug: 'bulk-voice-calls', category: 'calling-messaging', hub: '/services/calling-messaging/' },
  { file: '37-services--real-time-ai-calling.txt', slug: 'real-time-ai-calling', category: 'calling-messaging', hub: '/services/calling-messaging/' },
  { file: '38-services--bulk-sms.txt', slug: 'bulk-sms', category: 'calling-messaging', hub: '/services/calling-messaging/' },
  { file: '39-services--rcs-messaging.txt', slug: 'rcs-messaging', category: 'calling-messaging', hub: '/services/calling-messaging/' },
  { file: '40-services--whatsapp-marketing.txt', slug: 'whatsapp-marketing', category: 'calling-messaging', hub: '/services/calling-messaging/' },

  // 12 Websites, Apps & Software Services
  { file: '41-services--website-development.txt', slug: 'website-development', category: 'development', hub: '/services/development/' },
  { file: '42-services--ecommerce-development.txt', slug: 'ecommerce-development', category: 'development', hub: '/services/development/' },
  { file: '43-services--ui-ux-design.txt', slug: 'ui-ux-design', category: 'development', hub: '/services/development/' },
  { file: '44-services--mobile-app-development.txt', slug: 'mobile-app-development', category: 'development', hub: '/services/development/' },
  { file: '45-services--web-app-development.txt', slug: 'web-app-development', category: 'development', hub: '/services/development/' },
  { file: '46-services--custom-software.txt', slug: 'custom-software', category: 'development', hub: '/services/development/' },
  { file: '47-services--saas-mvp.txt', slug: 'saas-mvp', category: 'development', hub: '/services/development/' },
  { file: '48-services--crm-erp.txt', slug: 'crm-erp', category: 'development', hub: '/services/development/' },
  { file: '49-services--api-integrations.txt', slug: 'api-integrations', category: 'development', hub: '/services/development/' },
  { file: '50-services--workflow-automation.txt', slug: 'workflow-automation', category: 'development', hub: '/services/development/' },
  { file: '51-services--ai-solutions.txt', slug: 'ai-solutions', category: 'development', hub: '/services/development/' },
  { file: '52-services--maintenance-support.txt', slug: 'maintenance-support', category: 'development', hub: '/services/development/' },
];

function parseServiceFile(def) {
  const filePath = path.join(contentDir, def.file);
  const raw = fs.readFileSync(filePath, 'utf8');
  const lines = raw.split(/\r?\n/);

  const meta = seoMetaList.find(m => m.url === `/services/${def.slug}/`) || {};

  const service = {
    slug: def.slug,
    category: def.category,
    hub: def.hub,
    url: `/services/${def.slug}/`,
    seoTitle: meta.seo_title || '',
    metaDescription: meta.meta_description || '',
    primaryTopic: meta.primary_topic || '',
    searchIntent: meta.search_intent || '',
    canonicalTemplate: meta.canonical_template || `https://realresult.in/services/${def.slug}/`,
    robots: meta.robots || 'index, follow',
    primaryCtaDestination: `/contact/?service=${def.slug}`,
    breadcrumbs: [],
    eyebrow: '',
    h1: '',
    displayHook: '',
    heroBody: '',
    primaryButton: 'Let’s Talk Growth',
    secondaryLink: 'What We Can Help With',
    problemH2: '',
    problemBody: '',
    benefitsH2: 'What can this help your business do?',
    benefits: [],
    scopeH2: 'What can the service include?',
    scope: [],
    approachH2: 'How does Real Result approach the work?',
    approachBody: '',
    faqs: [],
    relatedServices: [],
    finalContactH2: '',
    finalContactButton: 'Let’s Talk Growth',
  };

  let section = 'HEADER';
  let currentH3 = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    if (line.startsWith('PRIMARY CTA DESTINATION:')) {
      service.primaryCtaDestination = line.replace('PRIMARY CTA DESTINATION:', '').trim();
      continue;
    }
    if (line.startsWith('Breadcrumbs:')) {
      service.breadcrumbs = line.replace('Breadcrumbs:', '').split('>').map(p => p.trim());
      continue;
    }
    if (line === 'HERO') {
      section = 'HERO';
      continue;
    }
    if (section === 'HERO') {
      if (line.startsWith('Eyebrow:')) {
        service.eyebrow = line.replace('Eyebrow:', '').trim();
      } else if (line.startsWith('H1:')) {
        service.h1 = line.replace('H1:', '').trim();
      } else if (line.startsWith('Display hook:')) {
        service.displayHook = line.replace('Display hook:', '').trim();
      } else if (line.startsWith('Body:')) {
        service.heroBody = line.replace('Body:', '').trim();
      } else if (line.startsWith('Primary button:')) {
        service.primaryButton = line.replace('Primary button:', '').trim();
      } else if (line.startsWith('Secondary link:')) {
        service.secondaryLink = line.replace('Secondary link:', '').trim();
      } else if (line.startsWith('H2:')) {
        service.problemH2 = line.replace('H2:', '').trim();
        section = 'PROBLEM';
      }
      continue;
    }

    if (section === 'PROBLEM') {
      if (line.startsWith('Body:')) {
        service.problemBody = line.replace('Body:', '').trim();
      } else if (line.startsWith('H2: What can this help') || line.startsWith('H2: What can this')) {
        service.benefitsH2 = line.replace('H2:', '').trim();
        section = 'BENEFITS';
      }
      continue;
    }

    if (section === 'BENEFITS') {
      if (line.startsWith('•') || line.startsWith('-') || line.startsWith('*')) {
        service.benefits.push(line.replace(/^[•\-*]\s*/, '').trim());
      } else if (line.startsWith('H2: What can the service include') || line.startsWith('H2: What can')) {
        service.scopeH2 = line.replace('H2:', '').trim();
        section = 'SCOPE';
      }
      continue;
    }

    if (section === 'SCOPE') {
      if (line.startsWith('Section anchor:')) {
        // anchor
      } else if (line.startsWith('•') || line.startsWith('-') || line.startsWith('*')) {
        service.scope.push(line.replace(/^[•\-*]\s*/, '').trim());
      } else if (line.startsWith('H2: How does Real Result') || line.startsWith('H2: How does')) {
        service.approachH2 = line.replace('H2:', '').trim();
        section = 'APPROACH';
      }
      continue;
    }

    if (section === 'APPROACH') {
      if (line.startsWith('H2: Questions before you start') || line.startsWith('H2: Questions')) {
        section = 'FAQS';
      } else if (!line.startsWith('H2:')) {
        service.approachBody += (service.approachBody ? ' ' : '') + line;
      }
      continue;
    }

    if (section === 'FAQS') {
      if (line.startsWith('H3:')) {
        currentH3 = line.replace('H3:', '').trim();
      } else if (line.startsWith('Answer:')) {
        const ans = line.replace('Answer:', '').trim();
        service.faqs.push({ question: currentH3, answer: ans });
        currentH3 = '';
      } else if (line.startsWith('H2: Related services') || line.startsWith('H2: Related')) {
        section = 'RELATED';
      }
      continue;
    }

    if (section === 'RELATED') {
      if (line.startsWith('FINAL CONTACT') || line.startsWith('H2: FINAL CONTACT')) {
        section = 'FINAL';
      } else if (line.includes('->')) {
        const [title, link] = line.split('->').map(s => s.trim());
        service.relatedServices.push({ title, href: link });
      }
      continue;
    }

    if (section === 'FINAL') {
      if (line.startsWith('H2:')) {
        service.finalContactH2 = line.replace('H2:', '').trim();
      } else if (line.startsWith('Button:')) {
        service.finalContactButton = line.replace('Button:', '').trim();
      }
      continue;
    }
  }

  return service;
}

const parsedServices = serviceFiles.map(parseServiceFile);

// Home Content
const homeContent = {
  seo: seoMetaList.find(m => m.url === '/') || {},
  slides: [
    {
      id: 1,
      eyebrow: "Real Result · Digital marketing & growth",
      h1: "Your next customer needs a reason to choose you.",
      body: "Real Result helps businesses attract the right audience, turn interest into enquiries, and keep customers connected through digital marketing and targeted communication.",
      primaryButton: { label: "Let’s Talk Growth", href: "/contact/" },
      secondaryLink: { label: "Explore Our Services", href: "/services/" },
      badge: "Marketing & Growth",
    },
    {
      id: 2,
      eyebrow: "SEO · Paid ads · Social media",
      h1: "Your ads got the click. What happened next?",
      body: "Connect the message, landing page, and follow-up so interested people have a clear next step.",
      primaryButton: { label: "Let’s Talk Growth", href: "/contact/" },
      secondaryLink: { label: "Explore Digital Marketing", href: "/services/digital-marketing/" },
      badge: "Click to Enquiry",
    },
    {
      id: 3,
      eyebrow: "Voice · AI calling · SMS · RCS · WhatsApp",
      h1: "Keep the conversation going. Keep the opportunity open.",
      body: "Reach selected audiences with useful messages and calling journeys that support enquiry follow-up and repeat business.",
      primaryButton: { label: "Plan My Campaign", href: "/contact/?interest=calling-messaging" },
      secondaryLink: { label: "Explore Calling & Messaging", href: "/services/calling-messaging/" },
      badge: "Calling & Messaging",
    },
  ],
  problem: {
    h2: "Busy marketing. Where’s the business?",
    body: "You’re posting, spending, and following up. But the next customer still feels uncertain. Let’s find where the journey needs attention.",
    points: [
      "The right people are not finding you.",
      "Visitors leave with unanswered questions.",
      "Enquiries stall before a useful conversation.",
      "Customers buy once and lose touch.",
    ],
    link: { label: "Find My Starting Point", href: "/solutions/" },
  },
  compactServices: [
    {
      title: "SEO & AI Search",
      desc: "Help the right people discover and understand your offer.",
      href: "/services/seo/",
      secondaryHref: "/services/ai-search-optimization/",
      secondaryLabel: "AI Search Optimization",
      category: "Discovery",
    },
    {
      title: "Paid Ads & Lead Generation",
      desc: "Connect relevant audiences with a clear reason to enquire.",
      href: "/services/paid-search/",
      secondaryHref: "/services/lead-generation/",
      secondaryLabel: "Lead Generation",
      category: "Acquisition",
    },
    {
      title: "Social Media, Content & Branding",
      desc: "Build recognition, trust, and a message people remember.",
      href: "/services/social-media/",
      secondaryHref: "/services/branding/",
      secondaryLabel: "Brand Strategy",
      category: "Brand Trust",
    },
    {
      title: "Voice, AI Calling & Messaging",
      desc: "Follow up through bulk voice, AI calls, SMS, RCS, and WhatsApp.",
      href: "/services/calling-messaging/",
      secondaryHref: "/services/real-time-ai-calling/",
      secondaryLabel: "Real-Time AI Calling",
      category: "Communication",
    },
    {
      title: "Conversion & Customer Retention",
      desc: "Improve buying journeys and give customers reasons to return.",
      href: "/services/conversion-optimization/",
      secondaryHref: "/services/email-marketing/",
      secondaryLabel: "Email & Automation",
      category: "Retention",
    },
    {
      title: "Websites, Apps & Software",
      desc: "Support the customer experience and the work behind your marketing.",
      href: "/services/development/",
      secondaryHref: "/services/custom-software/",
      secondaryLabel: "Custom Software",
      category: "Technology",
    },
  ],
  approach: {
    h2: "Get noticed. Get chosen. Keep growing.",
    steps: [
      { step: "Get noticed", detail: "Reach people with a relevant message." },
      { step: "Get chosen", detail: "Make your value and next step clear." },
      { step: "Keep growing", detail: "Connect follow-up, repeat business, and useful measurement." },
    ],
    body: "Start with the obstacle that matters most. Build the plan around it.",
    link: { label: "How Real Result Works", href: "/how-we-work/" },
  },
  proof: {
    h2: "See the work behind the result.",
    body: "Explore the challenge, the campaign or experience, and the outcome.",
    link: { label: "View Our Work", href: "/work/" },
  },
  quickAnswers: [
    {
      question: "What does Real Result do?",
      answer: "Real Result is a marketing company offering digital marketing, calling and messaging campaigns, and supporting website, app, and software development services.",
    },
    {
      question: "Can I start with one service?",
      answer: "Yes. Choose a focused campaign or project, or connect several services around one growth goal.",
    },
  ],
  finalContact: {
    h2: "What’s standing between you and your next customer?",
    body: "Tell us what you sell, who you want to reach, and where you need progress.",
    button: "Let’s Talk Growth",
    microcopy: "Start with the challenge. We’ll work through the next step together.",
  },
};

// Solutions Content (05-solutions.txt)
const solutionsContent = {
  seo: seoMetaList.find(m => m.url === '/solutions/') || {},
  eyebrow: "Start with your growth goal",
  h1: "What needs to happen for your business to grow?",
  body: "Real Result connects marketing services to the customer journey you want to improve. Start with your obstacle; we’ll help identify the right work.",
  primaryButton: "Let’s Talk Growth",
  obstacles: [
    {
      id: "acquisition",
      quote: "“We need the right people to find us.”",
      body: "Improve discovery through search, relevant campaigns, and content that explains your offer.",
      services: ["SEO", "AI Search Optimization", "Paid Search", "Social Media"],
      buttonLabel: "Talk About Customer Acquisition",
      buttonHref: "/contact/?goal=acquisition",
    },
    {
      id: "conversion",
      quote: "“We get attention, but not enough enquiries.”",
      body: "Give visitors a clearer reason to act with sharper messaging, useful pages, and an easier next step.",
      services: ["Paid Ads", "Lead Generation", "Website Design", "Conversion Optimization"],
      buttonLabel: "Talk About Conversion",
      buttonHref: "/contact/?goal=conversion",
    },
    {
      id: "follow-up",
      quote: "“Our follow-up is not keeping up.”",
      body: "Connect customer communication with the next action your team needs to take.",
      services: ["Real-Time AI Calling", "WhatsApp", "Bulk SMS", "CRM", "Automation"],
      buttonLabel: "Talk About Follow-Up",
      buttonHref: "/contact/?goal=follow-up",
    },
    {
      id: "retention",
      quote: "“We want customers to come back.”",
      body: "Create relevant reminders, updates, and conversations that keep your business in the picture.",
      services: ["Email", "RCS", "WhatsApp", "Bulk Voice Calls", "Lifecycle Campaigns"],
      buttonLabel: "Talk About Customer Retention",
      buttonHref: "/contact/?goal=retention",
    },
    {
      id: "launch",
      quote: "“We’re launching something new.”",
      body: "Define the offer, shape its digital experience, and plan how people will discover it.",
      services: ["Strategy", "Branding", "Websites & Apps", "Launch Marketing"],
      buttonLabel: "Talk About a Launch",
      buttonHref: "/contact/?goal=launch",
    },
  ],
  finalContact: {
    h2: "Which obstacle should we work on first?",
    body: "Share the change that would make the biggest difference right now.",
    button: "Let’s Talk Growth",
  },
};

// All Services Hub Content (02-services.txt)
const allServicesHubContent = {
  seo: seoMetaList.find(m => m.url === '/services/') || {},
  eyebrow: "Real Result services",
  h1: "Build your next move around the customer.",
  body: "Real Result connects marketing, customer communication, and supporting technology to help businesses get discovered, generate enquiries, and improve follow-up.",
  primaryButton: "Let’s Talk Growth",
  pillars: [
    {
      title: "Digital marketing",
      body: "Give the right people a reason to find, remember, and choose you.",
      services: "Strategy · SEO · AI Search · Paid Ads · Social Media · Content · Branding · Lead Generation · Email · Conversion · Analytics",
      href: "/services/digital-marketing/",
      linkLabel: "Explore Digital Marketing",
    },
    {
      title: "Calling and messaging",
      body: "Turn a campaign into a useful conversation and a clearer next step.",
      services: "Bulk Voice Calls · Real-Time AI Calling · Bulk SMS · RCS · WhatsApp",
      href: "/services/calling-messaging/",
      linkLabel: "Explore Calling & Messaging",
    },
    {
      title: "Websites, apps, and software",
      body: "Support the customer journey with useful digital experiences and connected business tools.",
      services: "Websites · Ecommerce · Mobile Apps · Web Apps · Custom Software · CRM · Integrations · Automation",
      href: "/services/development/",
      linkLabel: "Explore Development",
    },
  ],
  notSure: {
    h2: "Not sure where to start?",
    body: "Tell us where customers lose interest or where your team gets stuck. We’ll discuss which service fits the problem.",
    link: { label: "Find My Starting Point", href: "/solutions/" },
  },
  finalContact: {
    h2: "One clear priority can give the work direction.",
    button: "Let’s Talk Growth",
  },
};

// Digital Marketing Hub Content (03-services--digital-marketing.txt)
const digitalMarketingHubContent = {
  seo: seoMetaList.find(m => m.url === '/services/digital-marketing/') || {},
  eyebrow: "Digital marketing by Real Result",
  h1: "Make your marketing mean something to the buyer.",
  body: "Real Result’s digital marketing services connect your offer with relevant audiences and a clear next step, from first discovery to enquiry and repeat business.",
  primaryButton: "Let’s Talk Growth",
  problem: {
    h2: "What needs to work better?",
    body: "We start with the audience, the message, and the customer action you want to support. Then we choose the services and measures that fit.",
  },
  services: [
    { title: "Marketing Strategy", desc: "Know where to focus your next move.", href: "/services/marketing-strategy/" },
    { title: "Search Engine Optimization", desc: "Get discovered by people looking for your offer.", href: "/services/seo/" },
    { title: "Local SEO", desc: "Connect with customers in the places you serve.", href: "/services/local-seo/" },
    { title: "Paid Search & PPC", desc: "Connect relevant searches with a clear next step.", href: "/services/paid-search/" },
    { title: "Paid Social, Display & Video Ads", desc: "Turn your offer into attention with a purpose.", href: "/services/paid-social/" },
    { title: "Social Media Management", desc: "Show up with a consistent voice and a clear purpose.", href: "/services/social-media/" },
    { title: "Content Marketing & Copywriting", desc: "Turn customer questions into useful reasons to choose you.", href: "/services/content-marketing/" },
    { title: "Video Production & Creative", desc: "Make your offer easier to see, understand, and remember.", href: "/services/video-creative/" },
    { title: "Brand Strategy & Design", desc: "Give customers a clear reason to remember your business.", href: "/services/branding/" },
    { title: "Email Marketing & Automation", desc: "Turn first interest into an ongoing conversation.", href: "/services/email-marketing/" },
    { title: "Influencer & Affiliate Marketing", desc: "Build partnerships around audience fit and a relevant offer.", href: "/services/influencer-affiliate/" },
    { title: "Digital PR & Reputation Management", desc: "Support a clearer, more credible public presence.", href: "/services/digital-pr-reputation/" },
    { title: "B2B Lead Generation & Sales Funnels", desc: "Bring more clarity to the path from interest to sales.", href: "/services/lead-generation/" },
    { title: "Conversion Rate Optimization", desc: "Make the next step easier for interested visitors.", href: "/services/conversion-optimization/" },
    { title: "Analytics & Marketing Reporting", desc: "Connect reporting with decisions you need to make.", href: "/services/analytics/" },
    { title: "App Marketing & Store Optimization", desc: "Connect app discovery with meaningful use.", href: "/services/app-marketing/" },
    { title: "AI Search Optimization (AEO & GEO)", desc: "Make your expertise clearer for search and AI-assisted discovery.", href: "/services/ai-search-optimization/" },
  ],
  integration: {
    h2: "How do the services work together?",
    body: "Search and campaigns support discovery. Content and landing pages support decisions. Follow-up helps continue the conversation. Your scope connects the parts that need attention.",
    link: { label: "Calling & Messaging", href: "/services/calling-messaging/" },
  },
  finalContact: {
    h2: "Where is your marketing losing the customer?",
    button: "Let’s Talk Growth",
  },
};

// Calling & Messaging Hub Content (04-services--calling-messaging.txt)
const callingMessagingHubContent = {
  seo: seoMetaList.find(m => m.url === '/services/calling-messaging/') || {},
  eyebrow: "Calling & messaging by Real Result",
  h1: "Reach the customer. Give the conversation a next step.",
  body: "Real Result provides bulk voice calls, real-time AI calling, bulk SMS, RCS business messaging, and WhatsApp campaigns for targeted customer communication.",
  primaryButton: "Plan My Campaign",
  services: [
    { title: "Bulk Voice Call Services", desc: "Share recorded announcements and reminders with a selected audience.", href: "/services/bulk-voice-calls/" },
    { title: "Real-Time AI Calling Services", desc: "Support useful two-way calls and clearer follow-up.", href: "/services/real-time-ai-calling/" },
    { title: "Bulk SMS Services", desc: "Send concise offers, reminders, and updates to selected contacts.", href: "/services/bulk-sms/" },
    { title: "RCS Business Messaging Services", desc: "Create rich messages with media and useful actions on supported devices.", href: "/services/rcs-messaging/" },
    { title: "WhatsApp Marketing & Messaging Services", desc: "Connect relevant campaigns with useful customer conversations.", href: "/services/whatsapp-marketing/" },
  ],
  comparison: {
    h2: "Broadcasting or conversation?",
    items: [
      { channel: "Bulk Voice", desc: "A recorded message for announcements and reminders." },
      { channel: "AI Calling", desc: "A two-way voice conversation for agreed questions and follow-up." },
      { channel: "SMS", desc: "Concise text for a focused message and action." },
      { channel: "RCS", desc: "Rich media and action options on supported devices and networks." },
      { channel: "WhatsApp", desc: "Permission-based messages and customer conversations." },
    ],
  },
  campaignScope: {
    h2: "What does a campaign include?",
    body: "We define the audience, message, timing, response journey, and available reporting. Account setup, integrations, coverage, and costs are confirmed for the chosen channel.",
  },
  marketingConnection: {
    h2: "Can these channels connect with my marketing?",
    body: "Yes. We can plan calling and messaging around a campaign, enquiry, reminder, or customer relationship, with the follow-up responsibilities agreed in advance.",
  },
  finalContact: {
    h2: "What do you want the customer to do next?",
    body: "Tell us the audience and purpose. We’ll discuss the channel and campaign scope.",
    button: "Plan My Campaign",
  },
};

// Websites, Apps & Software Hub Content (16-services--development.txt)
const developmentHubContent = {
  seo: seoMetaList.find(m => m.url === '/services/development/') || {},
  eyebrow: "Supporting your marketing and business operations",
  h1: "Give your marketing somewhere useful to lead.",
  body: "Real Result designs websites, apps, and software that support customer journeys and the work behind them. Choose a focused project or connect development with your wider marketing plan.",
  primaryButton: "Discuss My Project",
  purpose: {
    h2: "What should the experience make easier?",
    body: "Finding an answer. Sending an enquiry. Booking a service. Completing an order. We start with the task, then plan the technology around it.",
  },
  services: [
    { title: "Website Design & Development", desc: "Make your offer clear and your next step easy.", href: "/services/website-development/" },
    { title: "Ecommerce Development", desc: "Make browsing, buying, and managing orders simpler.", href: "/services/ecommerce-development/" },
    { title: "UI/UX & Product Design", desc: "Turn confusing journeys into clearer experiences.", href: "/services/ui-ux-design/" },
    { title: "Mobile App Development", desc: "Give customers a useful reason to return.", href: "/services/mobile-app-development/" },
    { title: "Web Application Development", desc: "Bring tasks, information, and users into one workspace.", href: "/services/web-app-development/" },
    { title: "Custom Software Development", desc: "Build around your workflow and reduce repeated effort.", href: "/services/custom-software/" },
    { title: "SaaS & MVP Development", desc: "Turn the core idea into a focused first release.", href: "/services/saas-mvp/" },
    { title: "CRM, ERP & Business Systems", desc: "Give teams a clearer view of customers and operations.", href: "/services/crm-erp/" },
    { title: "API Development & Integrations", desc: "Move information between tools with less manual effort.", href: "/services/api-integrations/" },
    { title: "Workflow & Business Automation", desc: "Keep routine work moving with fewer manual handoffs.", href: "/services/workflow-automation/" },
    { title: "AI Solutions & Assistants", desc: "Apply AI to a specific task with a way to check its work.", href: "/services/ai-solutions/" },
    { title: "Website, App & Software Support", desc: "Keep essential systems maintained and improvements planned.", href: "/services/maintenance-support/" },
  ],
  standalone: {
    h2: "Can development be a standalone project?",
    body: "Yes. We can scope a website, app, integration, or software project on its own, with deliverables, milestones, and handover agreed before work begins.",
  },
  finalContact: {
    h2: "Which task needs a better way through it?",
    button: "Discuss My Project",
  },
};

// About Content (06-about.txt)
const aboutContent = {
  seo: seoMetaList.find(m => m.url === '/about/') || {},
  eyebrow: "About Real Result",
  h1: "Your growth is the reason for the work.",
  body: "Real Result is a marketing company helping businesses attract customers, improve conversion journeys, and build stronger customer relationships.",
  primaryButton: "Let’s Talk Growth",
  focus: {
    h2: "Get noticed. Get chosen. Keep growing.",
    body: "We connect strategy, search, paid advertising, content, and customer communication around a clear business goal. Websites, apps, and software support the experience and the systems behind it.",
  },
  pointOfView: {
    h2: "The campaign should connect with what happens next.",
    body: "An ad leads to a page. A page leads to an enquiry. An enquiry needs a useful conversation. We look at how those steps work together.",
  },
  howWeWork: [
    { title: "Start with your customer", desc: "Understand what they need to believe or do next." },
    { title: "Choose a clear priority", desc: "Focus the scope on the obstacle worth solving." },
    { title: "Make progress understandable", desc: "Agree on deliverables, feedback, and useful measures." },
  ],
  teamBlock: {
    h2: "Meet the people behind your next move.",
    lead: "A dedicated team of growth strategists, performance marketers, creative directors, and systems engineers focused on moving your business forward.",
  },
  finalContact: {
    h2: "Tell us where you want your business to go.",
    body: "We’ll discuss the marketing and support your next step needs.",
    button: "Let’s Talk Growth",
  },
};

// How We Work Content (07-how-we-work.txt)
const howWeWorkContent = {
  seo: seoMetaList.find(m => m.url === '/how-we-work/') || {},
  eyebrow: "How we work",
  h1: "Know the next step before you take it.",
  body: "Real Result starts with your customer journey, then defines the campaigns, communication, and supporting work needed to move it forward.",
  primaryButton: "Let’s Talk Growth",
  steps: [
    {
      num: "01",
      name: "UNDERSTAND",
      h2: "What needs to change?",
      body: "We discuss your customers, goals, current tools, and the obstacle you want to solve.",
    },
    {
      num: "02",
      name: "DEFINE",
      h2: "What is worth doing first?",
      body: "We agree on deliverables, responsibilities, milestones, costs, and the measures that will help us review the work.",
    },
    {
      num: "03",
      name: "CREATE",
      h2: "Make the plan something you can review.",
      body: "We develop the agreed campaigns, designs, or software and bring you in at the planned feedback points.",
    },
    {
      num: "04",
      name: "LAUNCH",
      h2: "Get the important details ready.",
      body: "We check the agreed assets and user journeys, confirm approvals, and prepare the launch or handover.",
    },
    {
      num: "05",
      name: "REVIEW",
      h2: "Learn what deserves attention next.",
      body: "We review the work against its goals. Ongoing improvements and support follow the scope you choose.",
    },
  ],
  expectations: {
    h2: "WHAT WE NEED FROM YOU",
    items: ["Business context", "Relevant access", "One clear feedback owner", "Timely approvals"],
  },
  finalContact: {
    h2: "You bring the challenge. We’ll work through the next step.",
    button: "Let’s Talk Growth",
  },
};

// Industries Content (08-industries.txt)
const industriesContent = {
  seo: seoMetaList.find(m => m.url === '/industries/') || {},
  eyebrow: "Marketing around your customers",
  h1: "Different industries. The same need to be chosen.",
  body: "Real Result shapes marketing around who buys, what they need to know, and how they take the next step.",
  primaryButton: "Let’s Talk Growth",
  sectors: [
    {
      title: "Local services and appointment businesses",
      body: "Help nearby customers find you, enquire, book, and remember the next appointment.",
      icon: "MapPin",
    },
    {
      title: "Retail and ecommerce",
      body: "Connect product discovery, buying decisions, customer updates, and repeat purchases.",
      icon: "ShoppingBag",
    },
    {
      title: "B2B and professional services",
      body: "Explain complex offers and support more relevant sales conversations.",
      icon: "Building2",
    },
    {
      title: "Education and hospitality",
      body: "Connect enquiries, useful information, booking, and follow-up.",
      icon: "GraduationCap",
    },
    {
      title: "Manufacturing and operational businesses",
      body: "Make capabilities easier to understand and connect enquiries with the right team.",
      icon: "Factory",
    },
    {
      title: "Startups and digital products",
      body: "Clarify the offer, launch a useful experience, and reach suitable early users.",
      icon: "Sparkles",
    },
  ],
  startingPoint: {
    h2: "Your buying journey sets the plan.",
    body: "Audience needs, market conditions, and specialist requirements shape the channels and scope. Tell us the context that matters to your business.",
  },
  finalContact: {
    h2: "How do your best customers find and choose you?",
    button: "Let’s Talk Growth",
  },
};

// Our Work Content (09-work.txt & 10-work--project-name.txt)
const workContent = {
  seo: seoMetaList.find(m => m.url === '/work/') || {},
  eyebrow: "Selected work",
  h1: "See what changed. Understand why.",
  body: "Explore the problem behind each project, the decisions that shaped the work, and the outcome.",
  primaryButton: "Talk About Your Project",
  filters: ["All Work", "Marketing", "Websites & Ecommerce", "Apps & Software"],
  projects: [
    {
      id: "growth-campaign",
      slug: "growth-campaign",
      isConcept: false,
      title: "Regional Enterprise Search & Lead Flow",
      h2: "Bridging search discovery to qualified phone enquiries",
      body: "Rebuilt search visibility, landing experiences, and follow-up routing for high-intent B2B and consumer services.",
      services: ["SEO", "Paid Search & PPC", "Conversion Rate Optimization", "WhatsApp Marketing"],
      outcome: "+180% increase in verified customer enquiries within 90 days of rollout.",
      category: "Marketing",
    },
    {
      id: "conversational-ai",
      slug: "conversational-ai",
      isConcept: false,
      title: "Automated Voice Qualification & CRM Dispatch",
      h2: "Eliminating dropped enquiries during peak demand",
      body: "Designed real-time voice agents that listen, clarify service requirements, and immediately hand off qualified caller briefs to specialists.",
      services: ["Real-Time AI Calling", "CRM & ERP Integration", "Workflow Automation"],
      outcome: "Zero dropped inbound leads and an average response time reduced to under 30 seconds.",
      category: "Apps & Software",
    },
    {
      id: "ecommerce-transformation",
      slug: "ecommerce-transformation",
      isConcept: true,
      label: "Concept project",
      title: "Modern Omnichannel Commerce & Loyalty Concept",
      body: "Explored friction points in mobile checkout and tested rapid SMS/WhatsApp order update workflows to reduce cart abandonment.",
      services: ["Ecommerce Development", "UI/UX Design", "Bulk SMS Services"],
      outcome: "Prototyped a streamlined 2-tap checkout flow validated across mobile test cohorts.",
      category: "Websites & Ecommerce",
    },
  ],
  finalContact: {
    h2: "Have a challenge we should look at?",
    body: "Tell us what needs to work better in your business.",
    button: "Let’s Talk Growth",
  },
};

// Engagement Content (11-engagement.txt)
const engagementContent = {
  seo: seoMetaList.find(m => m.url === '/engagement/') || {},
  eyebrow: "Ways to work together",
  h1: "Start where the need is.",
  body: "Choose a focused project, ongoing support, or specialist help for your team. We shape the scope around the work you need.",
  primaryButton: "Discuss My Project",
  models: [
    {
      title: "FOCUSED PROJECT",
      h2: "Get a defined piece of work done.",
      body: "A marketing campaign, messaging programme, website, or agreed growth project with clear deliverables and milestones.",
      buttonLabel: "Talk About a Project",
      buttonHref: "/contact/?interest=project",
    },
    {
      title: "ONGOING SUPPORT",
      h2: "Keep useful work moving.",
      body: "Ongoing marketing, maintenance, or improvements with an agreed scope, review rhythm, and priorities.",
      buttonLabel: "Talk About Ongoing Support",
      buttonHref: "/contact/?interest=ongoing-support",
    },
    {
      title: "TEAM SUPPORT",
      h2: "Add the skills your next step needs.",
      body: "Work with our team alongside your existing people, partners, and tools.",
      buttonLabel: "Talk About Team Support",
      buttonHref: "/contact/?interest=team-support",
    },
  ],
  pricing: {
    h2: "First, define the work. Then, price it clearly.",
    body: "Your proposal sets out deliverables, agency fees, third-party costs, payment milestones, and any ongoing charges. Scope changes are discussed before additional work begins.",
  },
  question: {
    question: "Can we start small?",
    answer: "Yes. A focused first phase can help address one priority before you decide what comes next.",
  },
  finalContact: {
    h2: "What do you need help moving forward?",
    body: "Share your goal and an approximate budget if you have one.",
    button: "Let’s Talk Growth",
  },
};

// FAQ Content (12-faq.txt)
const faqContent = {
  seo: seoMetaList.find(m => m.url === '/faq/') || {},
  h1: "Clear answers before the first conversation.",
  body: "Find practical answers about working with Real Result.",
  primaryButton: "Ask Your Question",
  faqs: [
    {
      question: "Is Real Result a marketing company or a software company?",
      answer: "Real Result is a marketing company. Website, app, and software development are supporting services for customer experiences, campaigns, and business operations.",
    },
    {
      question: "What marketing services does Real Result offer?",
      answer: "Services include strategy, SEO, AI search optimization, paid advertising, social media, content, branding, lead generation, conversion optimization, email, and customer communication.",
    },
    {
      question: "Which calling and messaging services are available?",
      answer: "Bulk voice calls, real-time AI calling, bulk SMS, RCS business messaging, and WhatsApp marketing and messaging.",
    },
    {
      question: "How do bulk voice calls differ from AI calling?",
      answer: "Bulk voice campaigns play a recorded message. Real-time AI calling listens and responds during a two-way conversation.",
    },
    {
      question: "Can I use one service?",
      answer: "Yes. We can discuss a focused campaign, an individual project, or connected services around one goal.",
    },
    {
      question: "What affects pricing?",
      answer: "Scope, complexity, campaign volume, destination, tools, and support affect the quote. Agency fees and third-party charges are identified in the proposal.",
    },
    {
      question: "Can you work with our existing tools?",
      answer: "Yes. We assess current websites, campaigns, accounts, and systems before defining what to keep, connect, or change.",
    },
    {
      question: "How quickly can work start?",
      answer: "Timing depends on the agreed scope, access, assets, account readiness, and any provider approvals. We discuss milestones before work begins.",
    },
    {
      question: "Can you guarantee sales or AI-search recommendations?",
      answer: "No. We agree on goals and measures, but customer decisions and search-system selections are outside our control.",
    },
    {
      question: "Who owns the accounts, code, and creative?",
      answer: "Ownership, licences, access, and handover are specified in the agreement.",
    },
  ],
  finalContact: {
    h2: "Have a question about your business?",
    button: "Let’s Talk Growth",
  },
};

// Contact Content (13-contact.txt)
const contactContent = {
  seo: seoMetaList.find(m => m.url === '/contact/') || {},
  eyebrow: "Contact Real Result",
  h1: "Let’s talk about your next customer.",
  body: "Tell us what you want to grow, who you want to reach, and what is getting in the way.",
  serviceOptions: [
    "Marketing & Growth",
    "SEO & AI Search",
    "Paid Ads & Lead Generation",
    "Social Media & Content",
    "Bulk Voice Calls",
    "Real-Time AI Calling",
    "Bulk SMS",
    "RCS Messaging",
    "WhatsApp Messaging",
    "Email Marketing",
    "Websites, Apps & Software",
    "Not Sure Yet",
  ],
  nextSteps: {
    h2: "A clear challenge is enough to start.",
    body: "We review your message and contact you to discuss fit, scope, and a practical next step.",
  },
};

// Insights Hub & Article Content (14-insights.txt & 15-insights--after-the-enquiry.txt)
const insightsContent = {
  seo: seoMetaList.find(m => m.url === '/insights/') || {},
  eyebrow: "Practical ideas",
  h1: "Better questions. Clearer next moves.",
  body: "Practical reads from Real Result about getting found, getting chosen, and keeping customer conversations moving.",
  categories: ["All Insights", "Getting Found", "Getting Chosen", "Keeping Customers", "Calling & Messaging", "Growth Systems"],
  featuredArticle: {
    slug: "after-the-enquiry",
    category: "Getting Chosen",
    title: "Your next enquiry is only the beginning.",
    desc: "Five questions to ask about what happens between first interest and a useful sales conversation.",
    href: "/insights/after-the-enquiry/",
    readTime: "4 min read",
  },
  finalContact: {
    h2: "Which part of this sounds like your business?",
    body: "Bring us the question you want to work through.",
    button: "Let’s Talk Growth",
  },
};

const insightArticleContent = {
  seo: seoMetaList.find(m => m.url === '/insights/after-the-enquiry/') || {},
  slug: "after-the-enquiry",
  category: "Getting Chosen",
  h1: "Your next enquiry is only the beginning.",
  introduction: "Someone has found you and filled in the form. What happens next deserves as much attention as the campaign that brought them there.",
  sections: [
    {
      num: 1,
      title: "WHERE DOES THE ENQUIRY GO?",
      body: "Does it reach the right person, or wait in a shared inbox? Give each enquiry a clear owner and make its status visible.",
    },
    {
      num: 2,
      title: "WHAT DOES THE CUSTOMER SEE?",
      body: "After submitting the form, does the visitor know it worked? Confirm receipt and explain the next step in plain language.",
    },
    {
      num: 3,
      title: "WHAT DOES YOUR TEAM KNOW?",
      body: "Can they see what the person asked about and where the enquiry came from? Useful context makes the first conversation easier to prepare for.",
    },
    {
      num: 4,
      title: "WHAT HAPPENS IF THEY ARE NOT READY?",
      body: "Some people need more information or more time. Decide what helpful follow-up looks like and respect their communication preferences.",
    },
    {
      num: 5,
      title: "WHAT CAN YOU LEARN FROM THE OUTCOME?",
      body: "Connect the enquiry with its eventual status. Was it suitable? Did a conversation happen? What question or obstacle kept coming up?",
    },
  ],
  nextStep: {
    title: "YOUR NEXT STEP",
    body: "Choose one recent enquiry and follow its journey from the form to the outcome. Note where a person had to chase, guess, or repeat information. That is a useful place to investigate.",
  },
  relatedServices: [
    { title: "Lead Generation", href: "/services/lead-generation/" },
    { title: "CRM & Business Systems", href: "/services/crm-erp/" },
    { title: "Workflow Automation", href: "/services/workflow-automation/" },
  ],
  finalContact: {
    h2: "Where does the follow-up slow down?",
    body: "We can help you connect marketing, enquiry capture, and the workflow that comes next.",
    button: "Let’s Talk Growth",
  },
};

// Thank You Content (17-thank-you.txt)
const thankYouContent = {
  seo: seoMetaList.find(m => m.url === '/thank-you/') || {},
  h1: "Your next step is underway.",
  body: "Thanks for telling us about your business. We’ve received your enquiry and will contact you using the details you shared.",
  buttons: [
    { label: "Explore Our Services", href: "/services/" },
    { label: "Back to Home", href: "/" },
  ],
  extraDetail: "Need to add something? Email hello@realresult.in.",
};

const fullWebsiteContent = {
  services: parsedServices,
  serviceMap: parsedServices.reduce((acc, s) => {
    acc[s.slug] = s;
    return acc;
  }, {}),
  home: homeContent,
  solutions: solutionsContent,
  allServicesHub: allServicesHubContent,
  digitalMarketingHub: digitalMarketingHubContent,
  callingMessagingHub: callingMessagingHubContent,
  developmentHub: developmentHubContent,
  about: aboutContent,
  howWeWork: howWeWorkContent,
  industries: industriesContent,
  work: workContent,
  engagement: engagementContent,
  faq: faqContent,
  contact: contactContent,
  insights: insightsContent,
  insightArticle: insightArticleContent,
  thankYou: thankYouContent,
};

const outJsonPath = path.join(__dirname, '../src/data/websiteContent.json');
fs.writeFileSync(outJsonPath, JSON.stringify(fullWebsiteContent, null, 2), 'utf8');

const outTsPath = path.join(__dirname, '../src/data/websiteContent.ts');
const tsContent = `// Auto-generated by scripts/compile-website-content.cjs
import rawContent from './websiteContent.json';
import { DedicatedService } from './servicesData';

export * from './servicesData';

export const FULL_WEBSITE_CONTENT = rawContent;
export const HOME_CONTENT = rawContent.home;
export const SOLUTIONS_CONTENT = rawContent.solutions;
export const ALL_SERVICES_HUB_CONTENT = rawContent.allServicesHub;
export const DIGITAL_MARKETING_HUB_CONTENT = rawContent.digitalMarketingHub;
export const CALLING_MESSAGING_HUB_CONTENT = rawContent.callingMessagingHub;
export const DEVELOPMENT_HUB_CONTENT = rawContent.developmentHub;
export const ABOUT_CONTENT = rawContent.about;
export const HOW_WE_WORK_CONTENT = rawContent.howWeWork;
export const INDUSTRIES_CONTENT = rawContent.industries;
export const WORK_CONTENT = rawContent.work;
export const ENGAGEMENT_CONTENT = rawContent.engagement;
export const FAQ_CONTENT = rawContent.faq;
export const CONTACT_CONTENT = rawContent.contact;
export const INSIGHTS_CONTENT = rawContent.insights;
export const INSIGHT_ARTICLE_CONTENT = rawContent.insightArticle;
export const THANK_YOU_CONTENT = rawContent.thankYou;
`;

fs.writeFileSync(outTsPath, tsContent, 'utf8');
console.log('Successfully generated full website content models!');
