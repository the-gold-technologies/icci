// Static content for the launch build. Each list is shaped so it can later be
// served from the CMS (leaders, news, membership) without UI changes.

// Placeholder photography (Unsplash) until the Chamber supplies its own.
const photo = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  about: photo("1503387762-592deb58ef4e"),
  aboutSite: photo("1504307651254-35680f356dfd", 1000),
};

export const heroSlides = [
  { tag: "Infrastructure", title: "Building the backbone of a nation", text: "Highways, bridges and metros connecting India.", photo: photo("1541888946425-d81bb19240f5", 1200) },
  { tag: "On Site", title: "Skilled hands, safer sites", text: "Championing workforce safety on every project.", photo: photo("1504307651254-35680f356dfd", 1200) },
  { tag: "Urban Growth", title: "Skylines of a new India", text: "Developments shaping tomorrow's cities.", photo: photo("1486406146926-c627a92ad1ab", 1200) },
  { tag: "Planning & Design", title: "From blueprint to reality", text: "Architects and engineers working as one.", photo: photo("1503387762-592deb58ef4e", 1200) },
  { tag: "Rising Together", title: "Every project, a better India", text: "One Chamber for builders, state by state.", photo: photo("1429497419816-9ca5cfb4571a", 1200) },
];

// Who the Chamber represents; cycles in the hero side card
export const fields = [
  { label: "Contractors", photo: photo("1517089596392-fb9a9033e05b", 600) },
  { label: "Builders", photo: photo("1531834685032-c34bf0d84c77", 600) },
  { label: "Consultants", photo: photo("1581092160562-40aa08e78837", 600) },
  { label: "Suppliers", photo: photo("1553413077-190dd305871c", 600) },
];

// One menu item = one page. Add a dropdown only when an item gets several pages (e.g. News + Gallery).
export const nav = [
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/initiatives", label: "Initiatives" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  // Read together: "30+ Members from 7 States"
  { value: "30+", label: "Members" },
  { value: "7", label: "States" },
  { value: "1", label: "Unified Industry Voice" },
  { value: "Pan-India", label: "Chapter Vision" },
];

export const objectives = [
  {
    title: "Represent the Industry",
    text: "Act as the collective voice of contractors, builders, consultants and suppliers before Central and State Government bodies.",
  },
  {
    title: "Advocate Fair Policy",
    text: "Engage with departments on tendering norms, payment timelines, GST, PWD/CPWD guidelines and regulatory reform.",
  },
  {
    title: "Enable Collaboration",
    text: "Build a trusted network for peer-to-peer partnerships, procurement and verified subcontracting across states.",
  },
  {
    title: "Resolve Grievances",
    text: "Provide a structured channel to escalate payment delays, compliance queries, tender disputes and administrative issues.",
  },
  {
    title: "Develop Skills",
    text: "Run capacity-building workshops, safety certifications and technical training for the construction workforce.",
  },
  {
    title: "Promote Sustainable Building",
    text: "Champion green construction practices, modern methods such as PEB, and quality standards for long-lasting infrastructure.",
  },
];

export const stakeholders = [
  "Civil & Infrastructure Contractors",
  "Subcontractors & Specialist Agencies",
  "Construction Businesses & Developers",
  "Consulting Engineers & Architects",
  "Raw Material Manufacturers & Suppliers",
  "Equipment & Technology Providers",
  "Skilled Workforce & Site Professionals",
  "Allied Industry Professionals",
];

export const initiatives = [
  {
    tag: "01",
    title: "Member Portal & Directory",
    text: "Structured, multi-tier registration for contractors, suppliers, consultants and skilled labour — enabling networking, procurement and verified subcontracting.",
  },
  {
    tag: "02",
    title: "Grievance Redressal Desk",
    text: "A centralised, ticket-based support hub to help members with departmental payment delays, compliance queries, tender disputes and administrative issues.",
  },
  {
    tag: "03",
    title: "Knowledge & Policy Advocacy",
    text: "Timely publication of Government updates, circulars, GST guidelines, PWD/CPWD norms and sustainable building guidelines.",
  },
  {
    tag: "04",
    title: "Skill Development & Green Building",
    text: "Capacity-building workshops, PEB training, safety certifications and sustainable construction initiatives across chapters.",
  },
];

// ── Leadership (supplied by the Chamber; order follows the ICCI letterhead) ──
// `slug` is the anchor on /leadership (e.g. /leadership#ved-khurana) and the photo file name.
// People without a supplied photo show their initials until one arrives.
export type Person = {
  slug: string;
  name: string;
  role: string;
  org?: string;
  photo?: Photo;
  bio?: string[];
};

/**
 * A 4:5 portrait (600×750) plus where the face sits in it, so every frame can centre the face
 * instead of cropping from the top. x / y are fractions of the photo's width / height, measured at
 * the middle of the head (top of hair or turban down to the chin, ear to ear).
 */
export type Photo = { src: string; face: { x: number; y: number } };

const leaderPhoto = (slug: string, x: number, y: number): Photo => ({ src: `/leaders/${slug}.webp`, face: { x, y } });

/** National office bearers: the "orange" tier shown on the home and About pages. */
export const officeBearers: Person[] = [
  {
    slug: "ved-khurana",
    name: "Ved Khurana",
    role: "National President",
    org: "Chairman & Whole-time Director, Globe Civil Projects Limited",
    photo: leaderPhoto("ved-khurana", 0.51, 0.4),
    bio: [
      "Mr Ved Khurana is a construction industry professional with over four decades of experience in civil construction and infrastructure. He has been associated with the sector since 1981 and has contributed to institutional, educational, healthcare and public infrastructure projects across India.",
      "He is the Chairman and Whole-time Director of Globe Civil Projects Limited, an EPC construction company. His experience includes project execution, business development, contract management and infrastructure development.",
      "Mr Khurana has also been associated with the Builders Association of India (BAI) for over two decades and has served as Chairman of BAI Delhi, contributing to industry representation and engagement on matters affecting the construction sector.",
      "He serves as Pro Vice Chairman of Beas Education and Healthcare Society, which operates Delhi Public School, Amritsar.",
      "As Founder President of ICCI, Mr Khurana is focused on creating a platform for collaboration among construction professionals, contractors, developers, consultants, manufacturers and other industry stakeholders. The Chamber aims to support industry dialogue, knowledge sharing, professional development and engagement with government and policymakers.",
    ],
  },
  {
    slug: "prem-singh-khamesra",
    name: "Prem Singh Khamesra",
    role: "National Vice President",
    org: "Chartered Accountant · Façades & Fenestration",
    photo: leaderPhoto("prem-singh-khamesra", 0.49, 0.38),
    bio: [
      "Prem Singh Khamesra is a Chartered Accountant, entrepreneur and business professional with nearly five decades of experience across architectural façades, fenestration, construction and manufacturing.",
      "A national rank holder in Chartered Accountancy, he practised for 26 years before entering industry. His experience in the façade sector includes the design, engineering, manufacturing and execution of building-envelope and fenestration systems.",
      "Mr Khamesra has served on the boards of UP Financial Corporation, Kanpur Plastipack and Mirza International. He currently serves on the Board of Universal Cables Limited.",
      "He is associated with the Indian Chamber of Construction Industry (ICCI), the Builders Association of India and BNI. His interests include literature, mentoring and community service.",
    ],
  },
  {
    slug: "rajiv-goel",
    name: "Rajiv Goel",
    role: "National Vice President",
    org: "Founder, Earthcon Systems India Pvt. Ltd.",
    photo: leaderPhoto("rajiv-goel", 0.49, 0.48),
    bio: [
      "Rajiv Goel is a technocrat and entrepreneur with over 38 years of experience across structural consultancy, infrastructure development, construction and real estate.",
      "An alumnus of BITS Pilani and the Indian Institute of Technology (IIT) Delhi, he has worked across technical and business functions within the construction and infrastructure sectors.",
      "In 2002, he established Earthcon Systems India Pvt. Ltd., a company specialising in the construction of Reinforced Soil Walls for highway and infrastructure projects. His work in this field includes technical publications and project-based solutions for infrastructure development.",
      "Mr Goel is associated with industry bodies including NAREDCO, CREDAI and the Builders’ Association of India (BAI), contributing to industry dialogue and institutional initiatives concerning the construction and real estate sectors.",
      "He is also involved with philanthropic organisations working in the areas of social welfare and community development.",
    ],
  },
  {
    slug: "pawan-garg",
    name: "Pawan Garg",
    role: "National Vice President",
    org: "Chairman, Alstone Industries Pvt. Ltd. & Reynobond India",
    photo: leaderPhoto("pawan-garg", 0.5, 0.3),
    bio: [
      "Pawan Garg is an entrepreneur with over 37 years of experience in the building materials and glass industries.",
      "He is the Chairman of Alstone Industries Pvt. Ltd. and Reynobond India. His work spans the development and manufacture of building material solutions, including Wood Composite Panels (WPC), silicone sealants, Aluminium Composite Panels (ACP) and High-Pressure Laminates (HPL).",
      "Under his leadership, both organisations have expanded their manufacturing capabilities in India, with a focus on building materials for applications in contemporary construction.",
      "Mr Garg’s experience includes promoting the adoption of locally manufactured building solutions and supporting developments in sustainable and fire-safe construction materials.",
    ],
  },
  {
    slug: "sandeep-kumar-jindal",
    name: "Sandeep Kumar Jindal",
    role: "National General Secretary",
    org: "CMD, Atharva Laboratories Pvt. Ltd.",
    photo: leaderPhoto("sandeep-kumar-jindal", 0.43, 0.42),
    bio: [
      "Sandeep Kumar Jindal is a technocrat and industry professional with over 36 years of experience in construction, real estate, testing and building materials.",
      "An engineer by qualification, he holds an MBA in Real Estate, for which he received a University Gold Medal, and an Executive MBA from XLRI. He has also undertaken specialised training in glass façade technology in Finland.",
      "He has led 26 housing projects across India, including projects valued at up to ₹500 crore, and has overseen the delivery of 30 lakh sq ft of construction within two and a half years.",
      "Mr Jindal is the Chairman and Managing Director of Atharva Laboratories Pvt. Ltd. and Founder Director of Ashtech Buildpro India Pvt. Ltd. He also serves as a Director of several companies and has experience in the manufacture of AAC blocks for brands including ModCrete, Ambuja, ACC and BILTECH.",
      "He has experience in international consulting and sourcing and is a Fellow of The Institution of Engineers (India) and the Institution of Valuers, a Chartered Engineer and an Approved Valuer.",
      "For over three decades, he has been associated with educational initiatives through Shiksha Bharti and Vidya Bharti, as well as several social organisations.",
    ],
  },
  {
    slug: "umesh-tanwar",
    name: "Umesh Tanwar",
    role: "National Treasurer",
    org: "Owner, Royal Continental Constructions",
    photo: leaderPhoto("umesh-tanwar", 0.5, 0.35),
    bio: [
      "Umesh Tanwar is a civil engineering and construction professional with experience in civil contracting and infrastructure development.",
      "He is the Owner of Royal Continental Constructions, where he oversees civil construction, contracting and Pre-Engineered Building (PEB) infrastructure projects. His project experience includes specialised construction works at Rashtrapati Bhavan and Qutub Minar.",
      "Mr Tanwar is also associated with professional and business networks. He serves as Treasurer of the Rotary Club of Capital City New Delhi and is a member of the Indian Entrepreneur Association (IEA) and BNI (Business Network International). He has previously held positions as Secretary and Treasurer within his BNI chapter.",
      "As Founder Treasurer of the Indian Chamber of Construction Industry (ICCI), he contributes to the Chamber’s efforts to support industry collaboration, professional engagement and stakeholder participation across the construction sector.",
    ],
  },
];

export const nationalExecutive: Person[] = [
  { slug: "madan-lal", name: "Madan Lal", role: "National Executive Committee" },
  {
    slug: "charanjit-singh",
    name: "Charanjit Singh",
    role: "National Executive Committee",
    org: "INTER TECH",
    photo: leaderPhoto("charanjit-singh", 0.48, 0.46),
    bio: [
      "INTER TECH is a pioneer in advanced electrical earthing and lightning protection solutions, backed by 50+ years of combined industry experience. As the exclusive Indian distributor for James Durrans Group, UK, it specialises in maintenance-free Marconite earthing systems designed for a 50+ year lifespan.",
      "Its solutions secure energy assets and infrastructure across utility-scale solar, wind and industrial projects, and are trusted by Avaada Energy, Tata Steel, the Indian Air Force, DMRC and IOCL.",
    ],
  },
  {
    slug: "atul-kapur",
    name: "Atul Kapur",
    role: "National Executive Committee",
    photo: leaderPhoto("atul-kapur", 0.5, 0.34),
  },
  { slug: "praveen-mittal", name: "Praveen Mittal", role: "National Executive Committee" },
  {
    slug: "sumer-singh",
    name: "Sumer Singh",
    role: "National Executive Committee",
    org: "CMD, Aastha Contracts India Pvt. Ltd.",
    photo: leaderPhoto("sumer-singh", 0.49, 0.29),
  },
  { slug: "amit-pasricha", name: "Amit Pasricha", role: "National Executive Committee" },
  {
    slug: "suneet-wattal",
    name: "Suneet Wattal",
    role: "National Executive Committee",
    org: "Freelance Consultant – PMC, IT & Strategy",
    photo: leaderPhoto("suneet-wattal", 0.59, 0.27),
  },
  {
    slug: "pradeep-singh",
    name: "Pradeep Singh",
    role: "National Executive Committee",
    org: "Swaraj Infracon Pvt. Ltd.",
    photo: leaderPhoto("pradeep-singh", 0.51, 0.33),
    bio: [
      "Swaraj Infracon Pvt. Ltd. is a registered contractor of C.P.W.D., undertaking civil engineering projects involving RCC structures, buildings, industrial structures, and sanitary and electrical installations, along with site development works such as drainage, boundary walls, roads, horticulture and water harvesting.",
      "The company undertakes contracts for government agencies across Delhi, Uttar Pradesh, West Bengal, Rajasthan, Jharkhand, Uttarakhand, Odisha, Bihar and Himachal Pradesh.",
    ],
  },
  {
    slug: "dheeraj-sahni",
    name: "Dheeraj Sahni",
    role: "National Executive Committee",
    org: "Flooring, Paints & Waterproofing · Est. 1961",
    photo: leaderPhoto("dheeraj-sahni", 0.5, 0.37),
    bio: [
      "Established in 1961: epoxy and PU flooring, micro, terrazzo and wooden flooring, self-levelling floors, paints and chemicals trading, waterproofing and painting services.",
    ],
  },
  { slug: "manoj-kumar", name: "Manoj Kumar", role: "National Executive Committee" },
];

// Placeholder state chapters (the site says "30+ members from 7 states"); replace with real chapter details.
export const chapters = Array.from({ length: 7 }, () => ({
  state: "State",
  head: "Chapter Head",
  contact: "chapter@email",
}));

// How to join, shown on the Membership page. Placeholder process until the Chamber confirms it.
export const joinSteps = [
  { title: "Send an enquiry", text: "Fill in the membership enquiry form with your business details." },
  { title: "Submit documents", text: "Our team shares the application form and the list of documents to attach." },
  { title: "Committee review", text: "The membership committee reviews your application." },
  { title: "Welcome to ICCI", text: "Once approved and the fee is paid, you join the member network." },
];

// Events: empty until the Chamber shares its calendar. The Events page shows an empty state meanwhile.
export const events: { title: string; date: string; location: string; text: string; past?: boolean }[] = [];

export const membershipCategories = [
  { title: "Corporate Members", text: "Large construction and infrastructure companies shaping the sector." },
  { title: "Construction Businesses", text: "Contractors, builders and developers of every scale." },
  { title: "Businesses & Individuals", text: "Entrepreneurs and professionals associated with construction." },
  { title: "Consulting Engineers", text: "Design, structural, project management and quality consultants." },
  { title: "Manufacturers & Suppliers", text: "Raw material manufacturers, traders and supply-chain partners." },
  { title: "Allied Professionals", text: "Architects, surveyors, legal, finance and technology experts." },
  { title: "Other Stakeholders", text: "Any eligible organisation contributing to the built environment." },
];

export const benefits = [
  "Representation of your concerns before Government departments",
  "Access to the grievance redressal desk",
  "Listing in the ICCI member network & directory",
  "Policy circulars, tender and regulatory updates",
  "Invitations to conferences, meetings and workshops",
  "Business networking across state chapters",
  "Training, certification and skill programmes",
  "A say in shaping the future of the industry",
];

// Placeholder articles until the Chamber supplies real ones. `slug` is the URL: /news/<slug>.
// `body` paragraphs render on the article page; replace with the real text.
const placeholderBody = [
  "This is placeholder text for the full article. The Chamber will supply the final copy, which will replace these paragraphs.",
  "Each article can run to several paragraphs, covering the background, what it means for members, and any next steps or dates.",
  "For questions about this update, members can contact the ICCI secretariat through the Contact page.",
];

export const news = [
  {
    category: "Chamber News",
    date: "October 2026",
    slug: "icci-founding-members",
    title: "ICCI brings together 30+ members from 7 states",
    photo: photo("1521791136064-7986c2920216", 1000),
    excerpt: "The Chamber begins its journey as a unified platform for the construction and allied industries.",
  },
  {
    category: "Government / Regulatory",
    date: "October 2026",
    slug: "public-works-tendering-payment-norms",
    title: "Key updates on public works tendering & payment norms",
    photo: photo("1450101499163-c8848c66ca85", 1000),
    excerpt: "A summary of recent circulars and what they mean for contractors and suppliers.",
  },
  {
    category: "Articles & Insights",
    date: "October 2026",
    slug: "green-building-practices",
    title: "Why green building practices matter for every contractor",
    photo: photo("1518005020951-eccb494ad742", 1000),
    excerpt: "How sustainable construction is moving from a niche to a baseline expectation.",
  },
  {
    category: "Events",
    date: "October 2026",
    slug: "site-safety-skilling-workshop",
    title: "Site safety & skilling: upcoming member workshop",
    photo: photo("1504307651254-35680f356dfd", 1000),
    excerpt: "A hands-on session for members on safety standards and workforce skill development.",
  },
].map((n) => ({ ...n, body: placeholderBody }));

export const contact = {
  address: "ICCI Secretariat, PHD House, 4/2 August Kranti Marg, Siri Institutional Area, Hauz Khas, New Delhi 110016",
  phone: "+91 93157 00465",
  email: "contact@icci.co.in",
};

// Social profiles: shown as the fixed rail on the left edge and as icons in the footer.
// (No YouTube channel yet: add { key: "youtube", ... } here when there is one; the icon is ready in Social.tsx.)
export const social = [
  { key: "facebook", label: "Facebook", href: "https://www.facebook.com/profile.php?id=61595681472168" },
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/icci.official.2026/" },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/indian-chamber-of-construction-industry/" },
  { key: "x", label: "X (Twitter)", href: "https://x.com/icci_official" },
] as const;

// About page copy (supplied by the Chamber). `lead` shows up front; `more` sits behind "Read more".
export const about = {
  intro: {
    lead: "The Indian Chamber of Construction Industry (ICCI) is a not-for-profit organisation established to represent, promote, and protect the interests of India’s construction and allied industries. ICCI serves as a platform for enterprises, professionals, industry leaders, policymakers, experts, and other stakeholders to collaborate towards a competitive, transparent, progressive, and sustainable construction ecosystem.",
    more: [
      "ICCI works to strengthen enterprises across the sector, including Micro, Small and Medium Enterprises (MSMEs) and large organisations, by promoting innovation, market orientation, self-reliance, quality improvement, skill development, professional training, and sound corporate governance. It also encourages applied research in economics, public policy, management, and technology, translating knowledge and evidence into meaningful industry dialogue and policy inputs.",
      "Through seminars, conferences, workshops, research publications, consultations, and industry forums, ICCI facilitates knowledge exchange and consensus-building. It also seeks to foster partnerships among government, businesses, institutions, donors, and communities to support initiatives in livelihood generation, education, public health, environmental sustainability, and inclusive development.",
      "With a nationwide mandate, ICCI aims to contribute constructively to India’s economic and industrial development by strengthening the construction sector and the wider ecosystem in which it operates.",
    ],
  },
  focus: [
    { title: "Representation & Policy", text: "Effectively representing the sector before government bodies, regulators and policymakers." },
    { title: "Stronger Enterprises", text: "Helping MSMEs and large organisations become innovative, market-oriented and self-reliant." },
    { title: "Research & Knowledge", text: "Applied research, policy briefs, seminars and workshops that drive evidence-based dialogue." },
    { title: "Partnerships for Development", text: "Livelihoods, education, public health, environmental sustainability and inclusive growth." },
  ],
  mission: {
    lead: "ICCI’s mission is to strengthen India’s construction and allied industries by creating a credible platform for representation, collaboration, knowledge, capacity building, and responsible growth.",
    more: [
      "We work to ensure that the interests and perspectives of the construction sector are effectively represented before government bodies, regulatory authorities, and policymakers. ICCI seeks to contribute informed industry perspectives to economic legislation, corporate law, trade policy, and regulatory frameworks, with the objective of promoting a competitive, transparent, and progressive business environment.",
      "A core part of our mission is enabling enterprises of all sizes—particularly MSMEs and emerging businesses—to become more innovative, capable, market-oriented, and self-reliant. Through training, skill development, consultancy, quality improvement, research, and knowledge-sharing initiatives, ICCI seeks to build stronger institutional and professional capabilities across the sector.",
      "ICCI also brings together industry leaders, professionals, experts, government stakeholders, and the wider business community to exchange knowledge, address common challenges, and develop opportunities for collaboration. We promote evidence-based dialogue through applied research, policy briefs, reports, seminars, conferences, and workshops.",
      "Beyond industry development, ICCI is committed to facilitating partnerships that contribute to livelihood generation, education, public health, environmental sustainability, and inclusive development—connecting economic progress with broader national development priorities.",
    ],
  },
  vision: {
    lead: "ICCI envisions a competitive, innovative, responsible, and globally connected Indian construction industry that contributes meaningfully to the nation’s sustainable and inclusive development.",
    more: [
      "Our vision is to help build an industry ecosystem in which businesses, professionals, institutions, government, and communities work together to address emerging challenges and unlock new opportunities. We aspire to see Indian construction and allied enterprises equipped with the capabilities, knowledge, skills, technology, and governance practices required to compete effectively in a rapidly evolving domestic and global environment.",
      "ICCI seeks to become a trusted platform for constructive industry–government engagement, enabling informed dialogue and practical policy inputs that support a transparent, progressive, and business-friendly environment. We envision stronger enterprises, particularly MSMEs, supported by access to knowledge, training, research, expertise, partnerships, and opportunities for continuous improvement.",
      "We also see research, innovation, and knowledge exchange as essential foundations for the sector’s long-term growth. By bringing together industry leaders, researchers, professionals, policymakers, and institutions, ICCI aims to encourage evidence-based thinking and collaborative solutions to economic, technological, managerial, and policy challenges.",
      "Ultimately, ICCI’s vision extends beyond industry growth. We aspire to contribute to an India where the growth of construction and related industries creates wider opportunities for livelihoods, skills, education, environmental sustainability, and inclusive development—aligning sectoral progress with the country’s broader development goals.",
    ],
  },
};
