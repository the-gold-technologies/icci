// Static content for the launch build. Each list is shaped so it can later be
// served from the CMS (leaders, news, gallery, membership) without UI changes.

// Placeholder photography (Unsplash) until the Chamber supplies its own.
const photo = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  heroBg: photo("1541888946425-d81bb19240f5", 2400),
  heroCard: photo("1429497419816-9ca5cfb4571a", 1200),
  about: photo("1503387762-592deb58ef4e"),
  aboutSite: photo("1504307651254-35680f356dfd", 1000),
  vision: photo("1486406146926-c627a92ad1ab"),
  representation: photo("1531834685032-c34bf0d84c77"),
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

export const nav = [
  { href: "/about", label: "About" },
  { href: "/about#vision", label: "Vision" },
  { href: "/#initiatives", label: "Initiatives" },
  { href: "/#leadership", label: "Leadership" },
  { href: "/#membership", label: "Membership" },
  { href: "/#news", label: "News" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "7", label: "State Members" },
  { value: "30", label: "Founding Members" },
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

export const leaders = [
  { name: "Leader Name", role: "President", org: "Organisation / Company", state: "State", photo: photo("1560250097-0b93528c311a", 800) },
  { name: "Leader Name", role: "Vice President", org: "Organisation / Company", state: "State", photo: photo("1519085360753-af0119f7cbe7", 800) },
  { name: "Leader Name", role: "General Secretary", org: "Organisation / Company", state: "State", photo: photo("1573496359142-b8d87734a5a2", 800) },
  { name: "Leader Name", role: "Treasurer", org: "Organisation / Company", state: "State", photo: photo("1472099645785-5658abf4ff4e", 800) },
  { name: "Leader Name", role: "Founding Member", org: "Organisation / Company", state: "State", photo: photo("1557862921-37829c790f19", 800) },
  { name: "Leader Name", role: "Founding Member", org: "Organisation / Company", state: "State", photo: photo("1580489944761-15a19d654956", 800) },
  { name: "Leader Name", role: "Founding Member", org: "Organisation / Company", state: "State", photo: photo("1500648767791-00dcc994a43e", 800) },
  { name: "Leader Name", role: "Founding Member", org: "Organisation / Company", state: "State", photo: photo("1506794778202-cad84cf45f1d", 800) },
];

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

export const news = [
  {
    category: "Chamber News",
    date: "October 2026",
    title: "ICCI brings together 7 state members and 30 founding members",
    photo: photo("1521791136064-7986c2920216", 1000),
    excerpt: "The Chamber begins its journey as a unified platform for the construction and allied industries.",
  },
  {
    category: "Government / Regulatory",
    date: "October 2026",
    title: "Key updates on public works tendering & payment norms",
    photo: photo("1450101499163-c8848c66ca85", 1000),
    excerpt: "A summary of recent circulars and what they mean for contractors and suppliers.",
  },
  {
    category: "Articles & Insights",
    date: "October 2026",
    title: "Why green building practices matter for every contractor",
    photo: photo("1518005020951-eccb494ad742", 1000),
    excerpt: "How sustainable construction is moving from a niche to a baseline expectation.",
  },
  {
    category: "Events",
    date: "October 2026",
    title: "Site safety & skilling: upcoming member workshop",
    photo: photo("1504307651254-35680f356dfd", 1000),
    excerpt: "A hands-on session for members on safety standards and workforce skill development.",
  },
];

export const gallery = [
  { label: "Founding Meeting", photo: photo("1552664730-d307ca884978", 1200), span: "md:col-span-2 md:row-span-2" },
  { label: "Government Interaction", photo: photo("1587474260584-136574528ed5", 1200), span: "" },
  { label: "Member Meet", photo: photo("1556761175-5973dc0f32e7", 1200), span: "" },
  { label: "Industry Conference", photo: photo("1540575467063-178a50c2df87", 1200), span: "" },
  { label: "Site Visit", photo: photo("1517089596392-fb9a9033e05b", 1200), span: "" },
];

export const contact = {
  address: "ICCI Secretariat, Address line, New Delhi, India",
  phone: "+91 00000 00000",
  email: "info@icci.org.in",
};

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
