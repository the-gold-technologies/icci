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

export const nav = [
  { href: "#about", label: "About" },
  { href: "#vision", label: "Vision" },
  { href: "#initiatives", label: "Initiatives" },
  { href: "#leadership", label: "Leadership" },
  { href: "#membership", label: "Membership" },
  { href: "#news", label: "News" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
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
