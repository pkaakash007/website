export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryPillar {
  number: string;
  title: string;
  description: string;
}

export interface IndustryItem {
  slug: string;
  name: string;
  shortName: string;
  category: "B2B & Professional" | "Consumer & Retail" | "Specialized";
  isExpert?: boolean;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  overview: string;
  keyMetrics: { label: string; value: string }[];
  pillars: IndustryPillar[];
  subVerticals: { title: string; description: string }[];
  services: string[];
  faqs: IndustryFAQ[];
}

export const INDUSTRIES_DATA: Record<string, IndustryItem> = {
  healthcare: {
    slug: "healthcare",
    name: "Healthcare Digital Marketing",
    shortName: "Healthcare",
    category: "Specialized",
    isExpert: true,
    tagline: "Diagnostic Trust, Patient Acquisition & Clinic Growth",
    heroHeadline: "Digital Marketing Agency for Healthcare in India",
    heroSubheadline:
      "Propel your hospital, clinic, or medical practice with patient-centric digital marketing, high-intent treatment search dominance, doctor reputation management, and 100% medical ethics compliance.",
    overview:
      "Real Result stands out as a leading digital marketing partner dedicated to propelling healthcare brands, multi-specialty hospitals, and clinics to long-term success. With a commitment to tailored strategies, comprehensive online presence, engaging content creation, a patient-centric approach, data-driven insights, and a focus on compliance and security, we are the trusted partner for healthcare providers looking to thrive in the competitive digital landscape.",
    keyMetrics: [
      { label: "Patient Inquiries Growth", value: "+340%" },
      { label: "Average Doctor Rating", value: "4.9★" },
      { label: "Cost Per Qualified Patient", value: "-42%" },
      { label: "Ethics & HIPAA Adherence", value: "100%" },
    ],
    pillars: [
      {
        number: "01",
        title: "Comprehensive Online Presence",
        description:
          "From advanced medical SEO to Google Business Profile dominance, we ensure potential patients find your hospitals, clinics, and specialists at the exact moment they search for symptoms, treatments, or second opinions.",
      },
      {
        number: "02",
        title: "Engaging Content Creation",
        description:
          "In healthcare, educating and informing patients is paramount. Our medical content creators translate complex procedures and treatments into empathetic, accessible blogs, video guides, and doctor interview reels.",
      },
      {
        number: "03",
        title: "Patient-Centric Approach",
        description:
          "Understanding the supreme importance of patient trust, we optimize digital platforms to enhance the patient journey—from frictionless online appointment booking and WhatsApp consultation desks to post-visit care follow-ups.",
      },
      {
        number: "04",
        title: "Data-Driven Insights",
        description:
          "We never run marketing blindly. We deploy privacy-first analytics and transparent dashboards tracking cost-per-patient-inquiry, appointment confirmation rates, and treatment-specific ROAS.",
      },
      {
        number: "05",
        title: "Compliance and Security",
        description:
          "Healthcare marketing demands rigorous adherence to medical advertising regulations, MCI/NMC guidelines, and patient data privacy standards. Every campaign and landing page is built to maintain uncompromising legal integrity.",
      },
      {
        number: "06",
        title: "Doctor & Clinic Reputation Management",
        description:
          "A physician's reputation is their strongest asset. We systematically build authentic 5-star Google review velocity, manage patient feedback sentiment, and showcase verified patient recovery journeys.",
      },
    ],
    subVerticals: [
      {
        title: "Multi-Specialty & Super-Specialty Hospitals",
        description:
          "Full-funnel digital dominance across orthopedics, cardiology, oncology, IVF, and neurology with high-intent patient acquisition.",
      },
      {
        title: "Private Clinics & Individual Specialists",
        description:
          "Doctor personal branding, localized Google 3-Pack rankings, and direct-to-WhatsApp appointment scheduling.",
      },
      {
        title: "Dermatology, Aesthetics & Cosmetology",
        description:
          "Visual before-and-after storytelling, high-ROAS Meta campaigns, and influencer-led medical credibility.",
      },
      {
        title: "Dental Clinics & Implant Centers",
        description:
          "High-ticket dental implant funnels, clear aligner campaigns, and automated SMS/WhatsApp recall workflows.",
      },
      {
        title: "Diagnostic Labs & Pathology Chains",
        description:
          "Home sample collection booking funnels, seasonal checkup package promotions, and localized geo-fencing.",
      },
      {
        title: "Telehealth & HealthTech Startups",
        description:
          "App install scaling, nationwide paid search campaigns, and digital doctor consultation onboarding funnels.",
      },
    ],
    services: [
      "Healthcare Search Engine Optimization (SEO)",
      "Google Local 3-Pack & Clinic Maps Optimization",
      "High-Intent Treatment Google Ads & PPC",
      "Doctor Personal Branding & Thought Leadership",
      "Patient Education Video Production & Reels",
      "HIPAA/Privacy Compliant Lead Tracking",
      "Online Reputation Management (ORM) & Reviews",
      "WhatsApp Patient Appointment Concierge",
    ],
    faqs: [
      {
        question: "Why is digital marketing important for healthcare providers?",
        answer:
          "Digital marketing is crucial for healthcare providers to reach and engage with their target audience in the online space. It enhances brand visibility, educates patients about conditions and treatment options, and fosters trust, ultimately driving patient acquisition and long-term retention.",
      },
      {
        question: "What specific digital marketing strategies work best for healthcare organizations?",
        answer:
          "Effective strategies include search engine optimization (SEO) for organic treatment discovery, high-intent Google Ads for urgent medical needs, content marketing to provide empathetic and authoritative information, social media to humanize doctors, online reputation management to build trust, and targeted advertising across specific geographical catchment areas.",
      },
      {
        question: "How can digital marketing improve patient engagement in the healthcare industry?",
        answer:
          "Digital marketing enhances patient engagement by providing informative educational content, facilitating two-way communication through WhatsApp and social media, and utilizing frictionless booking portals for instant appointments. Personalized email reminders and preventive care resources also create lasting bonds with patients.",
      },
      {
        question: "How can healthcare providers use social media effectively in their digital marketing strategy?",
        answer:
          "Social media is best used to share doctor tips, showcase patient recovery stories (with full consent), address common health myths, and highlight hospital accreditations. It humanizes the clinical brand, calms patient anxiety, and establishes medical professionals as trusted authorities in their community.",
      },
      {
        question: "Is it important for healthcare providers to invest in mobile-friendly websites?",
        answer:
          "Over 85% of healthcare searches occur on smartphones, often during moments of urgency. A mobile-friendly, lightning-fast website ensures patients can immediately find doctor credentials, read reviews, tap to call, or book an appointment without friction.",
      },
      {
        question: "How can healthcare organizations ensure compliance with privacy regulations in digital marketing?",
        answer:
          "Healthcare marketers must adhere strictly to patient confidentiality laws (such as HIPAA, DISHA, and NMC guidelines in India). We never use invasive tracking on sensitive medical diagnosis pages, ensure all patient consent forms are documented for testimonials, and utilize encrypted data transmission for all lead forms.",
      },
    ],
  },

  b2b: {
    slug: "b2b",
    name: "B2B Digital Marketing",
    shortName: "B2B & Enterprise",
    category: "B2B & Professional",
    isExpert: true,
    tagline: "Account-Based Marketing, Enterprise Pipeline & Revenue",
    heroHeadline: "B2B Digital Marketing & Growth Engineering Agency",
    heroSubheadline:
      "Turn complex sales cycles into qualified enterprise pipeline. We combine LinkedIn Account-Based Marketing (ABM), programmatic B2B search, and revenue attribution.",
    overview:
      "B2B growth requires reaching real C-level decision-makers, buying committees, and procurement heads with high-value technical positioning. Real Result designs pipeline-focused B2B campaigns that reduce sales cycles and maximize contract values.",
    keyMetrics: [
      { label: "MQL to SQL Conversion", value: "+210%" },
      { label: "Target Account Engagement", value: "78%" },
      { label: "Customer Acquisition Cost", value: "-35%" },
      { label: "Average Deal Size Growth", value: "+45%" },
    ],
    pillars: [
      {
        number: "01",
        title: "Account-Based Marketing (ABM)",
        description:
          "Surgically target high-value enterprise accounts across LinkedIn, IP-targeted display, and executive content drops.",
      },
      {
        number: "02",
        title: "High-Intent Technical SEO",
        description:
          "Dominate commercial search terms, software comparison keywords, and enterprise RFP queries.",
      },
      {
        number: "03",
        title: "Thought Leadership & Whitepapers",
        description:
          "Establish industry authority through benchmark reports, case study tear-downs, and CEO executive commentary.",
      },
      {
        number: "04",
        title: "Revenue & CRM Closed-Loop Attribution",
        description:
          "Integrate directly with Salesforce, HubSpot, and Zoho to measure exact pipeline revenue, not just vanity clicks.",
      },
    ],
    subVerticals: [
      { title: "Enterprise SaaS & Cloud Platforms", description: "Demo booking funnels and product-led growth scaling." },
      { title: "Industrial & Manufacturing", description: "B2B distributor acquisition and high-volume supplier RFQs." },
      { title: "IT Services & Consultancies", description: "Global offshore client acquisition across US, UK, and APAC." },
      { title: "Logistics & Supply Chain", description: "Fleet contracts and commercial warehousing lead generation." },
    ],
    services: [
      "LinkedIn ABM Campaigns",
      "B2B Commercial Intent SEO",
      "Executive Ghostwriting & Thought Leadership",
      "HubSpot & CRM Full-Funnel Automation",
      "High-Value Lead Magnets & Whitepapers",
      "Google Search PPC for B2B RFPs",
    ],
    faqs: [
      {
        question: "How is B2B digital marketing different from B2C?",
        answer:
          "B2B involves multiple decision-makers, longer sales cycles (3 to 12 months), and higher deal sizes. Marketing focuses on trust, ROI, technical specifications, and nurturing relationships rather than impulse buying.",
      },
      {
        question: "Which channels generate the highest quality B2B leads?",
        answer:
          "LinkedIn Account-Based Marketing and high-intent Google Search PPC consistently drive the highest quality enterprise inquiries, supported by organic search thought leadership.",
      },
    ],
  },

  finance: {
    slug: "finance",
    name: "Finance Digital Marketing",
    shortName: "BFSI & Fintech",
    category: "B2B & Professional",
    isExpert: false,
    tagline: "Compliance-Safe Acquisition for Fintech, NBFCs & Wealth",
    heroHeadline: "Digital Marketing for Finance, NBFCs & Wealth Management",
    heroSubheadline:
      "Scale loan originations, investment accounts, and fintech app adoption with compliant ad messaging, credit-score pre-qualification, and trust-first digital branding.",
    overview:
      "Financial services demand zero-tolerance compliance combined with aggressive CAC optimization. We build bank-grade conversion funnels that drive verified applicants for loans, mutual funds, insurance, and wealth advisory.",
    keyMetrics: [
      { label: "Loan Application Volume", value: "+280%" },
      { label: "CPA Reduction", value: "-38%" },
      { label: "Lead Qualification Rate", value: "84%" },
      { label: "Regulatory Compliance", value: "100%" },
    ],
    pillars: [
      {
        number: "01",
        title: "Regulatory Compliance & Disclosures",
        description: "Ad copy and landing pages engineered to strictly satisfy RBI, SEBI, and advertising standards.",
      },
      {
        number: "02",
        title: "High-Intent Financial Search PPC",
        description: "Capture active borrowers and investors searching for home loans, personal loans, or wealth managers.",
      },
      {
        number: "03",
        title: "Interactive Calculators & Tools",
        description: "SIP calculators, EMI estimators, and tax tools that convert casual visitors into verified leads.",
      },
      {
        number: "04",
        title: "Encrypted Lead Routing",
        description: "Instant, end-to-end encrypted CRM delivery straight to relationship managers within seconds.",
      },
    ],
    subVerticals: [
      { title: "NBFCs & Personal Loan Providers", description: "Fast disbursement lead funnels with credit checks." },
      { title: "Wealth Managers & Registered Advisors", description: "HNI client acquisition and bespoke portfolio consultations." },
      { title: "Fintech & Neo-Banking Apps", description: "User onboarding, KYC completion, and app engagement." },
      { title: "Insurance & Mutual Fund Distributors", description: "Policy comparison funnels and family retirement plans." },
    ],
    services: [
      "Financial Intent Google Ads",
      "SEBI/RBI Compliant Content Marketing",
      "Interactive Financial Calculator Development",
      "Multi-Dialect Telecalling & IVR Integration",
      "HNI Wealth Management Lead Generation",
    ],
    faqs: [
      {
        question: "How do you handle strict financial advertising guidelines?",
        answer:
          "All creative copy, disclaimers, APR disclosures, and interest rate representations undergo rigorous pre-flight compliance audits before deployment to protect our clients from regulatory penalties.",
      },
    ],
  },

  "real-estate": {
    slug: "real-estate",
    name: "Real Estate Digital Marketing",
    shortName: "Real Estate",
    category: "B2B & Professional",
    isExpert: false,
    tagline: "Site Visits, HNI Investors & Pre-Launch Booking Velocity",
    heroHeadline: "Real Estate Digital Marketing & Lead Generation Agency",
    heroSubheadline:
      "Fill your sales lounges with verified property buyers. From luxury villa launches to commercial office leases, we deliver qualified site visits with verified budgets.",
    overview:
      "Real estate marketing fails when agencies deliver junk leads who cannot afford the ticket size. Real Result solves this with budget-gated landing pages, 3D interactive walkthroughs, and geotargeted campaigns targeting high-net-worth investors.",
    keyMetrics: [
      { label: "Verified Site Visits", value: "3,200+" },
      { label: "Inventory Sell-Out Speed", value: "2.4x" },
      { label: "Cost Per Genuine Visit", value: "-45%" },
      { label: "NRI Investor Reach", value: "+190%" },
    ],
    pillars: [
      {
        number: "01",
        title: "Budget-Gated Lead Qualification",
        description: "Multi-step OTP forms that weed out unqualified inquiries and verify investment readiness.",
      },
      {
        number: "02",
        title: "Cinematic Drone & Walkthrough Ads",
        description: "Showcase sample flats, clubhouse amenities, and location advantages with high-production video.",
      },
      {
        number: "03",
        title: "NRI & GCC Investor Targeting",
        description: "Target affluent expatriates in UAE, Singapore, US, and UK seeking high-yield homeland property.",
      },
      {
        number: "04",
        title: "Automated Site Visit Scheduling",
        description: "Direct CRM calendar integration with cab-pickup options and WhatsApp automated reminders.",
      },
    ],
    subVerticals: [
      { title: "Luxury Villas & Plotted Communities", description: "HNI lifestyle storytelling and high-ticket sales." },
      { title: "High-Rise Residential Apartments", description: "Fast pre-launch inventory bookings and family campaigns." },
      { title: "Commercial IT Parks & Retail Spaces", description: "B2B corporate leasing and investor ROI projections." },
    ],
    services: [
      "Hyper-Local Meta Lead Ads",
      "Google Search PPC for Property Keywords",
      "3D Virtual Tour & Walkthrough Integration",
      "NRI Expatriate Investor Campaigns",
      "Automated WhatsApp Site Visit Confirmations",
    ],
    faqs: [
      {
        question: "How do you guarantee lead quality in real estate?",
        answer:
          "We use 2-step OTP phone verification, explicit budget bracket selection, and immediate qualification call routing within 5 minutes of form submission.",
      },
    ],
  },

  education: {
    slug: "education",
    name: "Education Digital Marketing",
    shortName: "Education & EdTech",
    category: "B2B & Professional",
    isExpert: false,
    tagline: "Student Admissions, Course Enrollments & Institutional Trust",
    heroHeadline: "Education Digital Marketing & Student Admission Agency",
    heroSubheadline:
      "Drive admissions for universities, K-12 international schools, competitive exam institutes, and EdTech certifications with parent-trusted digital campaigns.",
    overview:
      "Education decisions are deeply emotional and high-stakes. We craft campaigns that build academic credibility, showcase campus infrastructure, and guide parents and students smoothly from inquiry to confirmed admission.",
    keyMetrics: [
      { label: "Admission Applications", value: "+320%" },
      { label: "Cost Per Enrolled Student", value: "-40%" },
      { label: "Parent Engagement Rate", value: "68%" },
      { label: "Campus Visit Footfall", value: "2.1x" },
    ],
    pillars: [
      {
        number: "01",
        title: "Admission Cycle Seasonality Planning",
        description: "Timing campaigns precisely with exam results, counseling windows, and enrollment deadlines.",
      },
      {
        number: "02",
        title: "Parent & Student Multi-Audience Targeting",
        description: "Tailored creative messaging: ROI and safety for parents; campus life and career placements for students.",
      },
      {
        number: "03",
        title: "Alumni & Placement Success Stories",
        description: "Feature high-package placement proof, university partnerships, and student testimonials.",
      },
      {
        number: "04",
        title: "Counselor CRM & Instant Callbacks",
        description: "Route student inquiries straight to academic counselors with automated brochure delivery.",
      },
    ],
    subVerticals: [
      { title: "Universities & Engineering Colleges", description: "Degree admissions, entrance exam registrations." },
      { title: "K-12 International Schools", description: "Curriculum highlights, campus tours, early enrollments." },
      { title: "Test Prep & Competitive Coaching", description: "JEE/NEET/UPSC batch bookings and scholarship exams." },
      { title: "EdTech & Executive Certifications", description: "Upskilling courses, AI certifications, bootcamps." },
    ],
    services: [
      "Student Admission Lead Generation",
      "Campus Video Reels & Drone Tours",
      "Google Search PPC for College Admissions",
      "Automated WhatsApp Course Brochure Bots",
    ],
    faqs: [
      {
        question: "When should educational institutions start their admission campaigns?",
        answer:
          "We recommend starting awareness campaigns 4-6 months before the academic intake, ramping up paid lead generation 60-90 days prior to admission deadlines.",
      },
    ],
  },

  fmcg: {
    slug: "fmcg",
    name: "FMCG Marketing",
    shortName: "FMCG & Food",
    category: "Consumer & Retail",
    isExpert: false,
    tagline: "Retail Distribution, Shelf Velocity & Mass Consumer Brand Love",
    heroHeadline: "FMCG Digital Marketing & Consumer Brand Agency",
    heroSubheadline:
      "Build household brand recognition, drive quick-commerce orders on Blinkit & Zepto, and support general trade retail shelf velocity.",
    overview:
      "Modern FMCG brands must dominate both offline retail shelves and instant 10-minute delivery apps. Real Result builds memorable consumer campaigns, packaging design, and quick-commerce performance marketing.",
    keyMetrics: [
      { label: "Quick Commerce Sales Growth", value: "4.8x" },
      { label: "Brand Recall Lift", value: "+65%" },
      { label: "Retail Partner Inquiries", value: "+180%" },
      { label: "Video View-Through Rate", value: "42%" },
    ],
    pillars: [
      { number: "01", title: "Quick-Commerce Ad Management", description: "Sponsored product ads on Blinkit, Zepto, and Instamart." },
      { number: "02", title: "Vernacular Video & TVC Films", description: "High-impact regional language video commercials." },
      { number: "03", title: "Micro-Influencer Recipe & Review Blitz", description: "Scalable creator content showing real kitchen and lifestyle usage." },
      { number: "04", title: "Trade & Superstockist Generation", description: "Attract wholesale distributors and modern trade buyers." },
    ],
    subVerticals: [
      { title: "Packaged Foods & Snacks", description: "Taste-first video reels, impulse buy campaigns." },
      { title: "Beverages & Cold Brews", description: "Youth-centric lifestyle branding and festival marketing." },
      { title: "Personal Hygiene & Cleaning", description: "Trust-first efficacy demonstrations and family packs." },
    ],
    services: ["Quick Commerce Ads", "Influencer Gifting & Review Blitz", "Packaging & Shelf Creative Design", "Regional Video Ads"],
    faqs: [
      {
        question: "How do you measure ROI for FMCG brands selling primarily offline?",
        answer:
          "We use geo-targeted store lift studies, quick-commerce digital attribution, and distributor wholesale order growth across regional test markets.",
      },
    ],
  },

  ecommerce: {
    slug: "ecommerce",
    name: "Ecommerce Marketing Company",
    shortName: "Ecommerce & D2C",
    category: "Consumer & Retail",
    isExpert: false,
    tagline: "Profitable ROAS, Scale Scaling & Retention Automation",
    heroHeadline: "Performance Marketing Agency for Ecommerce & D2C Brands",
    heroSubheadline:
      "Scale from 1,000 orders/day to category leadership. We architect high-converting Shopify funnels, Meta Advantage+ ads, Google Performance Max, and Klaviyo email retention.",
    overview:
      "Scaling an ecommerce brand profitably requires balancing first-order ROAS with high lifetime customer value (LTV). Real Result eliminates ad waste with dynamic catalog creative, high-converting landing pages, and automated WhatsApp abandoned cart recovery.",
    keyMetrics: [
      { label: "Blended ROAS", value: "4.2x - 6.5x" },
      { label: "Abandoned Cart Recovery", value: "24%" },
      { label: "Repeat Purchase Rate", value: "+48%" },
      { label: "Monthly Orders Scaled", value: "100k+" },
    ],
    pillars: [
      { number: "01", title: "Meta Advantage+ Shopping Scaling", description: "High-velocity UGC testing, dynamic product ads, and creative iterations." },
      { number: "02", title: "Google Performance Max & Shopping", description: "Feed optimization, negative brand exclusions, and high-margin bidding." },
      { number: "03", title: "Conversion Rate Optimization (CRO)", description: "Sub-second mobile checkout, 1-click UPI, and bundle upsells." },
      { number: "04", title: "Retention & WhatsApp Automation", description: "Klaviyo VIP flows, post-purchase cross-sells, and COD confirmation bots." },
    ],
    subVerticals: [
      { title: "Fashion, Apparel & Footwear", description: "Size guide CRO, aesthetic video ads, seasonal drop campaigns." },
      { title: "Consumer Electronics & Gadgets", description: "Feature comparison tables, unboxing videos, warranties." },
      { title: "Health Supplements & Nutraceuticals", description: "Subscription funnels, lab-tested trust proofs, bundles." },
    ],
    services: [
      "Meta Ads Scaling",
      "Google Shopping & PMax",
      "Shopify CRO & Speed Optimization",
      "Klaviyo & WhatsApp Lifecycle Marketing",
    ],
    faqs: [
      {
        question: "What is your target ROAS for D2C brands?",
        answer:
          "We target a minimum 3.5x to 5.0x blended ROAS depending on product margins, with a core focus on net contribution margin rather than inflated platform metrics.",
      },
    ],
  },

  "skincare-beauty": {
    slug: "skincare-beauty",
    name: "Skincare & Beauty Digital Marketing",
    shortName: "Beauty & Skincare",
    category: "Consumer & Retail",
    isExpert: true,
    tagline: "Ingredient Transparency, Dermatologist Credibility & Cult Community",
    heroHeadline: "Skincare & Beauty Brand Growth Agency",
    heroSubheadline:
      "Build a cult beauty brand. We combine dermatologist endorsements, honest ingredient education, aesthetic TikTok/Reels UGC, and high-repeat loyalty funnels.",
    overview:
      "In the crowded beauty and skincare space, consumers demand clinical proof, active ingredient education, and aesthetic unboxing experiences. Real Result creates performance campaigns that turn casual buyers into lifelong brand advocates.",
    keyMetrics: [
      { label: "Customer Lifetime Value (LTV)", value: "+85%" },
      { label: "UGC Video Engagement", value: "12.4%" },
      { label: "Repeat Re-order Rate", value: "41%" },
      { label: "Customer Acquisition Cost", value: "-32%" },
    ],
    pillars: [
      { number: "01", title: "Clinical Efficacy & Ingredient Proof", description: "Highlight active ingredients (Niacinamide, Salicylic, Peptides) with laboratory credibility." },
      { number: "02", title: "Aesthetic Creator & Dermatologist UGC", description: "Texture shots, AM/PM routine videos, and dermatologist reaction reels." },
      { number: "03", title: "Interactive Skin Quiz Funnels", description: "Help customers discover their exact routine, doubling conversion rates." },
      { number: "04", title: "Automated Re-Order Triggers", description: "Predictive 30-day and 60-day WhatsApp reminders when serums and creams run low." },
    ],
    subVerticals: [
      { title: "Active Ingredient Skincare (Serums, Toners)", description: "Science-backed formulas, skin barrier repair." },
      { title: "Organic & Ayurvedic Cosmetics", description: "Clean beauty, toxin-free certificates, natural glow." },
      { title: "Haircare & Scalp Treatment", description: "Hair fall solutions, salon-grade hair masks." },
    ],
    services: [
      "Beauty Influencer Gifting & UGC Creation",
      "Skin Quiz Recommendation Funnels",
      "Meta Ads Video Optimization",
      "Beauty Loyalty & Subscription Programs",
    ],
    faqs: [
      {
        question: "How do you handle customer skepticism in skincare marketing?",
        answer:
          "We focus heavily on clinical trial data, dermatologist reviews, visible 4-week split-screen results, and unfiltered customer video testimonials.",
      },
    ],
  },

  "home-decor": {
    slug: "home-decor",
    name: "Home Decor Digital Marketing",
    shortName: "Home Decor & Furnishing",
    category: "Consumer & Retail",
    isExpert: false,
    tagline: "Visual Aspiration, Interior Designer Trust & High AOV Sales",
    heroHeadline: "Digital Marketing for Home Decor & Interior Brands",
    heroSubheadline:
      "Inspire homeowners and interior architects. We combine Pinterest visual discovery, Instagram architectural reels, 3D room visualizers, and catalog remarketing.",
    overview:
      "Home decor is an aspirational, visual-first purchase with high average order value (AOV). Real Result engineers marketing campaigns that turn aesthetic home dreams into room-by-room cart checkouts and showroom consultations.",
    keyMetrics: [
      { label: "Average Order Value Lift", value: "+54%" },
      { label: "Pinterest Organic Reach", value: "1.2M+" },
      { label: "Showroom Walk-in Leads", value: "+175%" },
      { label: "Return on Ad Spend (ROAS)", value: "5.1x" },
    ],
    pillars: [
      { number: "01", title: "Visual Inspiration & Room Lookbooks", description: "Shoppable editorial rooms where users can buy the entire curated look." },
      { number: "02", title: "Architect & Interior Designer Trade Programs", description: "B2B portals with trade discounts for luxury interior consultants." },
      { number: "03", title: "Pinterest & Instagram Ads Dominance", description: "Capturing high-intent remodelers searching for aesthetic mood boards." },
      { number: "04", title: "Local Showroom & Experience Center Drive", description: "Map ads driving affluent homeowners to touch and feel furniture in person." },
    ],
    subVerticals: [
      { title: "Luxury Furniture & Sofas", description: "Bespoke craftsmanship, leather and solid wood pieces." },
      { title: "Lighting, Rugs & Soft Furnishings", description: "Modern chandeliers, hand-tufted carpets, aesthetic accents." },
      { title: "Modular Kitchens & Wardrobes", description: "Consultation bookings and 3D floor plan estimates." },
    ],
    services: [
      "Shoppable Lookbook Development",
      "Pinterest & Instagram Visual Ads",
      "Showroom Experience Footfall Campaigns",
      "Architect & Trade Partner Lead Funnels",
    ],
    faqs: [
      {
        question: "How do you sell high-ticket furniture online?",
        answer:
          "We combine high-resolution zoomable fabric details, AR room visualizers, customer home tour videos, and direct video consultations with design experts.",
      },
    ],
  },

  ev: {
    slug: "ev",
    name: "EV Digital Marketing",
    shortName: "Electric Vehicles",
    category: "Specialized",
    isExpert: true,
    tagline: "Test Drives, Battery Tech Trust & Dealership Expansion",
    heroHeadline: "Electric Vehicle (EV) Digital Marketing Agency",
    heroSubheadline:
      "Accelerate the electric transition. We drive verified test-drive bookings, demystify range anxiety, build dealership franchisee networks, and scale 2W/4W/Commercial EV adoption.",
    overview:
      "Electric mobility marketing requires educating consumers on total cost of ownership (TCO), range reliability, and charging infrastructure while driving local test drives. Real Result crafts high-impact launch campaigns for emerging and established EV OEMs.",
    keyMetrics: [
      { label: "Test Drive Bookings", value: "18,500+" },
      { label: "Franchisee Dealer Leads", value: "950+" },
      { label: "Cost Per Qualified Test Drive", value: "-46%" },
      { label: "Brand Video Views", value: "25M+" },
    ],
    pillars: [
      { number: "01", title: "Range Anxiety & TCO Education", description: "Savings calculators showing petrol vs. electric cost differences per kilometer." },
      { number: "02", title: "Hyper-Local Test Drive Engine", description: "Automated booking forms connecting prospects with the nearest dealership in real time." },
      { number: "03", title: "Dealership & Franchisee Network Scale", description: "High-intent B2B campaigns attracting seasoned auto dealers to open new showrooms." },
      { number: "04", title: "Influencer Road Tests & Range Challenges", description: "Real-world creator stress tests proving durability, hill climb, and battery longevity." },
    ],
    subVerticals: [
      { title: "Electric 2-Wheelers (Scooters & Bikes)", description: "Youth, commuter, and delivery fleet adoption." },
      { title: "Electric Passenger Cars (4W)", description: "Premium tech features, ADAS, and luxury green mobility." },
      { title: "Commercial EVs & Electric 3-Wheelers", description: "Last-mile logistics fleets and commercial driver financing." },
      { title: "EV Charging Infrastructure & Batteries", description: "Station discovery apps, commercial charger hosting." },
    ],
    services: [
      "Test Drive Lead Generation Engine",
      "Dealership Franchisee B2B Campaigns",
      "Cost of Ownership Interactive Calculators",
      "Automotive Video Production & Reels",
    ],
    faqs: [
      {
        question: "How do you ensure test drive leads actually show up at the showroom?",
        answer:
          "We use automated WhatsApp slot confirmation, SMS directions with Google Maps pin, and calendar reminders 2 hours prior to the test drive.",
      },
    ],
  },

  automotive: {
    slug: "automotive",
    name: "Automotive Digital Marketing",
    shortName: "Automotive & Auto Ancillary",
    category: "Specialized",
    isExpert: true,
    tagline: "Showroom Footfall, Pre-Bookings & Aftermarket Accessories",
    heroHeadline: "Automotive Digital Marketing Agency",
    heroSubheadline:
      "Drive automotive showroom walk-ins, service bay bookings, and aftermarket part sales with high-octane digital marketing campaigns.",
    overview:
      "Automotive purchases are driven by passion, status, and performance. Real Result crafts digital campaigns for automobile dealerships, OEM launches, service center chains, and aftermarket accessory brands that dominate local catchment zones.",
    keyMetrics: [
      { label: "Showroom Inquiries", value: "+260%" },
      { label: "Service Bay Bookings", value: "+190%" },
      { label: "Cost Per Test Ride", value: "-38%" },
      { label: "Catchment Zone Share", value: "62%" },
    ],
    pillars: [
      { number: "01", title: "Regional Catchment Geo-Fencing", description: "Target vehicle owners within 10km of authorized dealer showrooms." },
      { number: "02", title: "New Vehicle Launch Pre-Booking Funnels", description: "Build viral launch waitlists and VIP token reservation systems." },
      { number: "03", title: "Periodic Service & Bay Utilization", description: "Automated service reminder SMS/WhatsApp campaigns that fill workshop bays." },
      { number: "04", title: "Accessories & Performance Aftermarket Sales", description: "Ecommerce scaling for alloy wheels, detailing, ceramic coatings, and audio." },
    ],
    subVerticals: [
      { title: "Car & Motorcycle Dealerships", description: "Test drive appointments, inventory clearance, trade-ins." },
      { title: "Auto Service Centers & Detailing", description: "Ceramic coating packages, periodic maintenance bookings." },
      { title: "Auto Components & Spare Parts", description: "B2B garage supply networks and direct-to-consumer parts." },
    ],
    services: [
      "Geo-Targeted Showroom Walk-in Campaigns",
      "Automated Service Booking WhatsApp Bots",
      "Launch Pre-Booking Landing Pages",
      "Google Local 3-Pack for Service Bays",
    ],
    faqs: [
      {
        question: "Can you run campaigns specifically for a single dealer showroom location?",
        answer:
          "Yes. We specialize in radius-based hyper-local geo-fencing (5-15km) to ensure marketing budget is spent only on prospects within your showroom's immediate sales territory.",
      },
    ],
  },

  "travel-tourism": {
    slug: "travel-tourism",
    name: "Travel & Tourism Digital Marketing",
    shortName: "Travel & Hospitality",
    category: "Specialized",
    isExpert: false,
    tagline: "Direct Hotel Bookings, Tour Packages & Wanderlust Creative",
    heroHeadline: "Travel, Resort & Tourism Marketing Agency",
    heroSubheadline:
      "Inspire travelers and bypass costly OTA commissions. We drive direct bookings for luxury resorts, curated tour operators, and adventure travel companies.",
    overview:
      "Relying entirely on Booking.com or MakeMyTrip burns 18-25% in OTA commissions. Real Result helps luxury resorts and tour operators capture direct bookings through breathtaking drone visuals, seasonal package ads, and frictionless WhatsApp itineraries.",
    keyMetrics: [
      { label: "Direct Booking Share", value: "58%" },
      { label: "OTA Commission Savings", value: "₹24L+" },
      { label: "Cost Per Inquiry", value: "-44%" },
      { label: "Peak Season Occupancy", value: "94%" },
    ],
    pillars: [
      { number: "01", title: "Cinematic Visual Storytelling", description: "Drone footage of villas, infinity pools, sunset views, and local culinary experiences." },
      { number: "02", title: "Direct Booking Engine CRO", description: "Best-rate guarantees and seamless booking widgets that convert lookers into stayers." },
      { number: "03", title: "Custom Tour Itinerary Lead Funnels", description: "Interactive travel planners that send bespoke PDF itineraries over WhatsApp instantly." },
      { number: "04", title: "Seasonal Holiday Blitz Campaigns", description: "Target weekend getaway seekers during long weekends, Diwali, New Year, and summer breaks." },
    ],
    subVerticals: [
      { title: "Luxury Resorts & Boutique Heritage Stays", description: "Weekend getaways, wellness retreats, destination weddings." },
      { title: "International & Domestic Tour Operators", description: "Honeymoon packages, Europe/Bali tours, pilgrimage routes." },
      { title: "Adventure Sports & Eco-Tourism", description: "Trekking camps, wildlife safaris, scuba diving certifications." },
    ],
    services: [
      "Direct Booking Meta & Google Ads",
      "Cinematic Drone & Resort Photography",
      "WhatsApp Automated Tour Itinerary Bots",
      "Destination Wedding Lead Generation",
    ],
    faqs: [
      {
        question: "How do you help hotels compete against OTAs like Booking.com?",
        answer:
          "We offer direct-booking perks (complimentary breakfast, spa vouchers, room upgrades), optimize Google Hotel Ads, and run remarketing campaigns targeting visitors who viewed OTA listings.",
      },
    ],
  },
};
