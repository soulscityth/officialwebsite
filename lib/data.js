import {
  Lightbulb,
  BookOpen,
  Users,
  Tent,
  HeartHandshake,
  Compass,
  Sparkles,
  Target,
  Search,
  PenTool,
  ClipboardCheck,
} from "lucide-react";

export const domains = [
  {
    icon: Lightbulb,
    title: "Design Thinking",
    description:
      "กระบวนการคิดเชิงออกแบบเพื่อแก้ปัญหาและสร้างนวัตกรรมที่ใช้ได้จริง โดยมีมนุษย์หรือผู้ใช้เป็นศูนย์กลาง ผ่านขั้นตอน Empathize, Define, Ideate, Prototype และ Test พร้อมฝึกทักษะการสัมภาษณ์ การฟัง และการนำเสนอ",
    formats: [
      { name: "Community Engagement", detail: "เน้น Empathize, Define และ Ideate ผ่านการลงพื้นที่ชุมชนจริง" },
      { name: "Hackathon", detail: "เน้น Ideate, Prototype และ Test เพื่อสร้างต้นแบบนวัตกรรม" },
    ],
  },
  {
    icon: BookOpen,
    title: "Storytelling",
    description:
      "การถ่ายทอดเรื่องราวและอารมณ์ความรู้สึกจากผู้พูดสู่ผู้ฟัง เพื่อสร้างการตระหนักรู้และการเปลี่ยนแปลง ผ่านรูปแบบที่หลากหลาย ทั้งการเล่าเรื่องต่อหน้าผู้ฟัง การแสดง และละคร พร้อมฝึกการสร้างโครงเรื่อง การพูดในที่สาธารณะ และการนำเสนออย่างสร้างสรรค์",
    formats: [
      { name: "Public Speaking", detail: "ฝึกการค้นหาเรื่องราว จัดเรียงโครงเรื่อง และการพูดต่อหน้าผู้ฟัง" },
      { name: "Creative Communication", detail: "ถ่ายทอดเรื่องราวผ่านละคร เสียง และการแสดงสร้างสรรค์" },
    ],
  },
  {
    icon: Users,
    title: "Leadership",
    description:
      "ทักษะการสร้างแรงบันดาลใจ กระตุ้นศักยภาพ และนำพาผู้อื่นไปสู่เป้าหมายร่วมกันอย่างมีประสิทธิภาพ ผ่านความเข้าใจตนเอง การสื่อสาร การตัดสินใจภายใต้ความกดดัน และการทำงานร่วมกับผู้อื่นอย่างสร้างสรรค์",
    formats: [
      { name: "Building Mindset", detail: "สร้างความเข้าใจในตนเองและนิยามความเป็นผู้นำที่หลากหลาย" },
      { name: "Skill Applied", detail: "ทดลองใช้ทักษะผู้นำผ่านสถานการณ์จำลองและ Game Simulation" },
    ],
  },
];

export const signatureCamp = {
  title: "Signature Camp",
  // Services page only.
  pitch:
    "ไม่ใช่ค่ายที่นั่งฟังบรรยาย แต่เป็นการลงมือทำ ลองผิดลองถูก และค้นพบศักยภาพของตัวเอง ภายใต้การดูแลของทีม Facilitator มืออาชีพ ออกแบบให้ตรงกับเป้าหมายของโรงเรียนและองค์กรของคุณโดยเฉพาะ",
  points: [
    "สามารถปรับแต่งเนื้อหาสำหรับโรงเรียนหรือองค์กรได้โดยเฉพาะ",
    "มีความหลากหลายในระยะเวลาจัดกิจกรรม ตั้งแต่ครึ่งวันจนถึงหลายวัน",
    "สร้างการเรียนรู้ทั้งด้าน Soft Skills และ Hard Skills ควบคู่กัน",
    "ประยุกต์ได้ทั้งค่ายทั่วไป หรือค่ายสำหรับโครงการพิเศษเฉพาะทาง",
  ],
};

export const formatTypes = [
  {
    icon: Tent,
    name: "Camp",
    description: "ประสบการณ์การเรียนรู้แบบหลายวันที่เน้นการสร้างทักษะผ่านกิจกรรมลงมือทำจริง",
  },
  {
    icon: ClipboardCheck,
    name: "Workshop",
    description: "กิจกรรมระยะสั้นที่เน้นการเรียนรู้เชิงปฏิบัติ การมีส่วนร่วม และผลลัพธ์ที่ชัดเจน",
  },
  {
    icon: Sparkles,
    name: "Facilitation",
    description: "จัดกระบวนการประชุม ระดมความคิด และเวทีถอดบทเรียน เพื่อให้สิ่งที่เรียนรู้ถูกนำไปใช้ต่อจริง",
  },
];

// The three services as one path. Since 2026-10-09 the home page shows `packages`
// instead; this list still feeds /llms.txt until the rest of the site moves over.
export const serviceJourney = [
  {
    step: "1",
    stage: "จุดประกาย",
    duration: "ครึ่งวัน – 1 วัน",
    title: "Workshop",
    description: "กิจกรรมเชิงปฏิบัติการ เพื่อจุดประกายความสนใจ ให้ผู้เรียนได้ลองคิด ลองทำ และค้นพบศักยภาพใหม่ของตัวเอง",
    fitFor: ["กิจกรรมเสริมหลักสูตร", "งานอบรมบุคลากร"],
  },
  {
    featured: true,
    stage: "ลงมือเปลี่ยน · บริการหลัก",
    duration: "3 วัน – ค้างคืน",
    title: "Signature Camp",
    description: "ค่ายที่ออกแบบเฉพาะสำหรับโรงเรียนและองค์กร ผสม Soft Skills และ Hard Skills ให้ผู้เรียนได้เติบโตทั้งความคิดและจิตใจ",
    link: { href: "/work", label: "ดูตัวอย่างค่าย" },
    fitFor: ["ค่ายผู้นำ", "ค่ายวิชาการ", "ค่ายโครงการพิเศษ"],
  },
  {
    step: "3",
    stage: "ต่อยอด",
    duration: "ระหว่าง / หลังโครงการ",
    title: "Facilitation",
    description: "จัดกระบวนการประชุม ระดมความคิด และเวทีถอดบทเรียน เพื่อให้สิ่งที่เรียนรู้ถูกนำไปใช้ต่อจริง",
    fitFor: ["เวทีถอดบทเรียน", "การวางแผนร่วมขององค์กร"],
  },
];

// Home "Our Packages": four steps, smallest first. Prices are per room of 40 learners,
// from the owners' Packages 2027 playbook (Oct 2026), and appear in the Service schema
// on the home page. Nothing here mentions the Skills Map or the upgrade credit: the
// first does not exist yet, the second the owners chose not to publish.
export const packages = [
  {
    step: "01",
    title: "Spark Workshop",
    subtitle: "เวิร์กช็อปจุดประกาย",
    duration: "3 ชม. – 1 วัน",
    description: "เวิร์กช็อปในโรงเรียน เลือก 1 หัวข้อต่องาน ให้ครูเห็นผลเร็ว และนักเรียนได้ลองลงมือทำจริง",
    topics: ["Design Thinking", "STEAM / Maker", "Soft skills", "Crafting", "ถอดบทเรียน", "อบรมครู"],
    includes: ["คุยโจทย์กับครูก่อนงาน", "วิทยากรหลัก 2 คน + ทีม 3 คน", "สรุปผล 1 หน้า + ภาพ ภายใน 14 วัน"],
    price: { label: "เริ่มต้น", amount: 19000 },
  },
  {
    step: "02",
    featured: true,
    title: "Signature Camp",
    subtitle: "ค่ายเรียนรู้ 3 track",
    duration: "2–3 วัน",
    description: "ค่ายไป–กลับ หรือค้างคืน ที่นักเรียนลงมือจนได้ผลงานจริงในวันสุดท้าย",
    tracks: [
      { name: "Leadership", result: "แผนโครงการของทีม" },
      { name: "Design Thinking", result: "ต้นแบบ + pitch" },
      { name: "STEAM", result: "ชิ้นงานที่ใช้ได้จริง" },
    ],
    includes: ["ประชุมออกแบบกับครู 2 ครั้ง", "สตาฟดูแล 1:20 หรือ Premium 1:10", "รายงานผล + ภาพ ภายใน 14 วัน"],
    price: { label: "เริ่มต้น", amount: 68000 },
    link: { href: "/work", label: "ดูตัวอย่างค่าย" },
  },
  {
    step: "03",
    title: "Stride Journey",
    subtitle: "เส้นทางพัฒนา 3 เดือน",
    duration: "3 เดือน",
    description: "ไม่ใช่กิจกรรมครั้งเดียว แต่ต่อเนื่อง 3 เดือน ผอ. เห็นว่านักเรียนนำสิ่งที่ได้ไปทำต่อในโรงเรียนหลังค่ายจบ",
    journey: [
      "Spark เต็มวัน · ค้นโจทย์จริงของโรงเรียน",
      "Signature Camp 2 วัน 1 คืน · ลงมือแก้โจทย์",
      "ติดตามผล + นำเสนอผลต่อ ผอ.",
    ],
    includes: ["รายงานฉบับเต็มให้ ผอ.", "ประหยัดกว่าซื้อแยก ~9%"],
    price: { label: "เริ่มต้น", amount: 120000 },
  },
  {
    step: "04",
    title: "Summit Partner",
    subtitle: "พันธมิตรทั้งปีการศึกษา",
    duration: "1 ปีการศึกษา",
    description: "แผนพัฒนาทักษะนักเรียนทั้งปี พร้อมรายงานผลให้ ผอ. ทุกเทอม",
    includes: [
      "อบรมครู 1 วัน ต้นปีการศึกษา",
      "Signature Camp 1 ครั้ง + Spark 2 ครั้ง",
      "รายงานผลรายเทอมให้ ผอ.",
      "สิทธิ์จองวันก่อนลูกค้าทั่วไป",
      "Plus: ถอดบทเรียนกับคณะครู + Showcase ผลงานสิ้นปี",
    ],
    price: { label: "Standard", amount: 155000, plus: 245000 },
  },
];

export const packagesNote =
  "ราคาต่อ 1 ห้อง (40 คน) ยังไม่รวมที่พัก อาหาร สถานที่ และรถ · 5 ห้องขึ้นไปเสนอราคาเฉพาะงาน";

// Grouped by what the learner builds; each group gets its own colour on the services
// page. Within a group, long and short tags alternate so two fit per row on a phone.
export const expertiseGroups = [
  {
    name: "วิเคราะห์และสร้างสรรค์",
    color: "amber",
    tags: ["STEM & Engineering Design", "Design Thinking", "Problem-Based Learning", "Social Innovation"],
  },
  {
    name: "สื่อสารและแสดงออก",
    color: "rose",
    tags: ["Public Speaking & Pitching", "Storytelling", "Creative Communication", "Applied Theatre"],
  },
  {
    name: "ตัวตนและทีม",
    color: "violet",
    tags: [
      "Interpersonal Communication",
      "Leadership",
      "Life & Career Design",
      "Team Building",
      "Effective Feedback",
      "Self-Awareness",
    ],
  },
  {
    name: "ชุมชนและสังคม",
    color: "sky",
    tags: ["Community Engagement", "Advocacy Design", "Civic Imagination"],
  },
];

export const process = [
  {
    icon: Search,
    step: "01",
    title: "ทำความเข้าใจและออกแบบร่วมกัน",
    description: "ทำความเข้าใจบริบทผู้เรียนและเป้าหมายของโรงเรียนหรือองค์กร เพื่อออกแบบหลักสูตรที่ตอบโจทย์เฉพาะ",
  },
  {
    icon: PenTool,
    step: "02",
    title: "ออกแบบกระบวนการเรียนรู้",
    description: "วางโครงสร้างกิจกรรม เนื้อหา และเครื่องมือการเรียนรู้ที่เหมาะสมตลอดทั้งหลักสูตร",
  },
  {
    icon: Users,
    step: "03",
    title: "จัดกระบวนการเรียนรู้",
    description: "ทีมกระบวนกรลงพื้นที่จัดกระบวนการ ดูแล และให้คำปรึกษาแก่ผู้เรียนตลอดกิจกรรม",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "ถอดบทเรียนและติดตามผล",
    description: "สรุปผลลัพธ์การเรียนรู้ร่วมกับผู้เรียน และติดตามผลการนำไปใช้หลังจบโครงการ",
  },
];

export const values = [
  {
    icon: HeartHandshake,
    title: "ผู้เรียนเป็นศูนย์กลาง",
    description: "ออกแบบทุกกระบวนการโดยเข้าใจความต้องการที่แท้จริงของผู้เรียนเป็นอันดับแรก",
  },
  {
    icon: Compass,
    title: "เรียนรู้ผ่านประสบการณ์จริง",
    description: "ใช้กระบวนการ Facilitation เกมการเรียนรู้แบบ Interactive และกิจกรรมสร้างนวัตกรรม",
  },
  {
    icon: Sparkles,
    title: "พัฒนาอย่างรอบด้าน",
    description: "มุ่งเน้นการพัฒนาทักษะ ความคิด และจิตวิญญาณของผู้เรียนให้เติบโตไปพร้อมกัน",
  },
  {
    icon: Target,
    title: "ออกแบบเฉพาะทาง",
    description: "ปรับแต่งเนื้อหาและกระบวนการให้เหมาะกับบริบทของแต่ละโรงเรียนและองค์กรโดยเฉพาะ",
  },
];

// Options for the contact form's project-intake fields. Shared with
// app/api/contact so the server validates against exactly what the form offers.
export const activityTypes = [
  "ค่าย",
  "เวิร์กช็อป",
  "อบรมครูและบุคลากร",
  "เวทีถอดบทเรียน",
  "อื่น ๆ / ยังไม่แน่ใจ",
];

// "แพ็กเกจที่สนใจ" on the contact form: the four package titles plus the two
// answers that are not a package. Service pages prefill it via contactHref({ pkg }).
export const packageOptions = [
  ...packages.map((p) => p.title),
  "องค์กร / มหาวิทยาลัย (ออกแบบตามโจทย์)",
  "ยังไม่แน่ใจ ช่วยแนะนำ",
];

export const learnerLevels = [
  "ประถมศึกษา",
  "มัธยมศึกษาตอนต้น",
  "มัธยมศึกษาตอนปลาย",
  "มหาวิทยาลัย",
  "ครูและบุคลากร",
  "องค์กร / บริษัท",
];

export const team = [
  {
    name: "ณภัทร กิจสนาโยธิน",
    nickname: "ปาล์ม",
    image: "/team/palm.jpg",
    focal: "50% 40%",
    role: "Chief Executive Officer",
    education: "Bachelor of Arts (Learning Sciences), Thammasat University",
    quote: "มุ่งมั่นสร้างการเรียนรู้ที่เปลี่ยนชีวิตคนได้จริง",
  },
  {
    name: "จิรสิน จานะพร",
    nickname: "สิน",
    image: "/team/sin.jpg",
    focal: "50% 40%",
    role: "Chief Financial Officer",
    education: "Bachelor of Science in Statistics, Chulalongkorn University",
    quote: "รากฐานที่มั่นคงเป็นจุดเริ่มต้นของการเรียนรู้",
  },
  {
    name: "ขวัญชนก สงฆ์มีสุข",
    nickname: "ของขวัญ",
    image: "/team/kwan.jpg",
    focal: "50% 40%",
    role: "General Manager",
    education: "Bachelor of Arts (Learning Sciences), Thammasat University",
    quote: "ประสบการณ์ของผู้เข้าร่วมเป็นสิ่งสำคัญ",
  },
  {
    name: "ธนภัทร สงนวน",
    nickname: "กันตะ",
    image: "/team/kanta.jpg",
    focal: "46% 39%",
    role: "Senior Learning Designer",
    education: "Bachelor of Arts (Learning Sciences), Thammasat University",
    quote: "ไอเดียที่ดีเริ่มจากกล้าตั้งคำถาม",
    // Only the first three render on the team card; the rest are kept as the
    // full picture of what each designer works on.
    expertise: [
      "Design Thinking",
      "Experiential Learning",
      "Civic Imagination",
      "Creative Drama",
      "Leadership skill and Team Building",
      "Conflict Management",
    ],
  },
  {
    name: "แทนไท ตั้งวนิชกุล",
    nickname: "แทนไท",
    image: "/team/tanthai.jpg",
    focal: "50% 40%",
    role: "Senior Learning Designer",
    education: "Bachelor of Arts (Learning Sciences), Thammasat University",
    quote: "เรื่องเล่าที่ดี เปลี่ยนมุมมองคนได้เสมอ",
    expertise: [
      "Creative Communication",
      "Storytelling",
      "Drama for Learning",
      "Drama/Theatre for Education",
      "Community Art and Culture Learning",
    ],
  },
];

// The closing card in the team grid: the facilitators who run activities
// alongside the core team. Was a single grey line under the old grid.
export const facilitatorNote = {
  heading: "และทีม Facilitator มืออาชีพที่ร่วมสนับสนุนการจัดกิจกรรม",
  points: ["คุมพลังงานกลุ่มอยู่หมัด", "ดูแลความปลอดภัยทุกฐาน", "สร้างพลังบวกให้ผู้เข้าร่วม"],
};

export const stats = [
  { value: "45+", label: "โครงการที่จัดขึ้น" },
  // Deliberately excludes the Samut Prakan anti-drug stage play (10,000+ in the
  // portfolio below). By the owners' decision it is not counted toward learners,
  // so this figure stays lower than a sum of the portfolio's participants.
  { value: "5,000+", label: "ผู้เรียนที่เข้าร่วมกิจกรรม" },
  { value: "35+", label: "องค์กรและโรงเรียนพันธมิตร" },
  { value: "3+", label: "ปีของการดำเนินงาน" },
];

export const partners = [
  { name: "Suankularb Wittayalai School", logo: "/partners/suankularb.png" },
  { name: "Thammasat University (LSEd)", logo: "/partners/thammasat_lsed.png" },
  { name: "Assumption College", logo: "/partners/assumption.png" },
  { name: "Chulalongkorn Business Administration", logo: "/partners/cba.png" },
  { name: "Giftwise Asia", logo: "/partners/giftwise.png" },
  { name: "TK Park", logo: "/partners/tkpark.png" },
  { name: "World Wildlife Fund (WWF)", logo: "/partners/wwf.png" },
  { name: "Saint Gabriel's College", logo: "/partners/saint_gabriel.png" },
  { name: "Rights Beyond Border", logo: "/partners/rights_beyond_border.png" },
  { name: "Mitr Phol Group", logo: "/partners/mitr_phol.png" },
  { name: "Thammasat Secondary School", logo: "/partners/thammasat_secondary.png" },
  { name: "VetMed KU", logo: "/partners/vetmed_ku.png" },
  { name: "House of Wisdom TU", logo: "/partners/house_of_wisdom_tu.png" },
  { name: "Bangkok Christian College", logo: "/partners/bangkok_christian.png" },
  { name: "Satriwithaya School", logo: "/partners/satriwithaya.png" },
  { name: "Khemasiri Memorial School", logo: "/partners/khemasiri.png" },
  { name: "Triamudomsuksa Pattanakarn Nonthaburi School", logo: "/partners/triamudomsuksa.png" },
  { name: "Samut Prakan Provincial Administrative Organization", logo: "/partners/samut_prakan.png" },
  { name: "SMO Chulalongkorn Business School", logo: "/partners/smo_banshi.png" },
  { name: "กวศ.", logo: "/partners/kwas.png" },
  { name: "CaMP by ChAMP", logo: "/partners/camp_by_champ.png" },
];

const portfolioRaw = [
  // Camps
  {
    category: "camp",
    images: ["/work/01-1.jpg", "/work/01-2.jpg", "/work/01-3.jpg"],
    sortDate: "2024-06-10",
    levels: ["มัธยม"],
    title: "SK Design Thinking Experience Camp",
    date: "10-12 มิ.ย. 2567",
    duration: "3 วัน",
    participants: "170 คน",
    topics: ["Design Thinking Process", "Innovation", "Community Engagement", "Public Speaking"],
    partner: "Suankularb Wittayalai School",
  },
  {
    category: "camp",
    images: ["/work/02-1.jpg", "/work/02-2.jpg", "/work/02-3.jpg", "/work/02-4.jpg"],
    sortDate: "2024-06-24",
    levels: ["มัธยม"],
    title: "Camp พัฒนาทักษะผู้ประกอบการบนฐานชุมชน",
    date: "24-27 มิ.ย. 2567",
    duration: "4 วัน",
    participants: "60 คน",
    topics: ["Local Development", "Drama", "Confidence", "Presentation"],
    partner: "LSEd TU, โครงการโรงเรียนร่วมพัฒนา และ Ban Bangmak School",
  },
  {
    category: "camp",
    images: ["/work/03-1.jpg", "/work/03-2.jpg", "/work/03-3.jpg", "/work/03-4.jpg"],
    sortDate: "2024-10-01",
    levels: ["มัธยม"],
    title: "SK Gentleman Camp EP4: Experiencing Phra Nakhon",
    date: "1-3 ต.ค. 2567",
    duration: "3 วัน",
    participants: "100 คน",
    topics: ["Storytelling", "Community Engagement", "Cultural Heritage"],
    partner: "Greenmoons BKK, Satarana และ Suankularb Wittayalai School",
  },
  {
    category: "camp",
    images: ["/work/04-1.jpg", "/work/04-2.jpg", "/work/04-3.jpg"],
    sortDate: "2024-11-01",
    levels: ["มหาวิทยาลัย"],
    title: "LSEd Student Affairs Mid-Year Seminar 2024",
    date: "1-3 พ.ย. 2567",
    duration: "3 วัน",
    participants: "30 คน",
    topics: ["Project Management", "Risk Management", "Activity Design", "Culture Management"],
    partner: "LSEd TU",
  },
  {
    category: "camp",
    images: ["/work/05-1.jpg", "/work/05-2.jpg", "/work/05-3.jpg", "/work/05-4.jpg"],
    sortDate: "2025-06-09",
    levels: ["มัธยม"],
    title: "SK Design Thinking Camp 2025",
    date: "9-11 มิ.ย. 2568",
    duration: "3 วัน",
    participants: "100 คน",
    topics: ["Design Thinking", "Social Problem Analysis", "Social Innovation", "Community Engagement"],
    partner: "Suankularb Wittayalai School และ Bang Bua Thong City Municipality",
  },
  {
    category: "camp",
    images: ["/work/06-1.jpg", "/work/06-2.jpg", "/work/06-4.jpg", "/work/06-5.jpg"],
    sortDate: "2025-10-24",
    levels: ["มัธยม", "มหาวิทยาลัย"],
    title: "Rise Up: Young Leaders Driving Human Rights and Creative Change",
    date: "24-26 ต.ค. 2568",
    duration: "3 วัน",
    participants: "50 คน",
    topics: ["Problem Discovery", "Creative Communication", "Storytelling", "Theory of Change", "Advocacy Design"],
    partner: "Rights Beyond Border",
  },
  {
    category: "camp",
    images: ["/work/07-1.jpg", "/work/07-2.jpg", "/work/07-3.jpg", "/work/07-4.jpg"],
    sortDate: "2026-05-20",
    levels: ["มัธยม"],
    title: "ค่ายผู้นำรุ่นใหม่หัวใจพัฒนา รุ่นที่ 18 - Leadership Camp",
    date: "20-22 พ.ค. 2569",
    duration: "3 วัน",
    participants: "130 คน",
    topics: ["DISC for Leadership", "Leadership Skills & Mindsets", "Working Toolkits", "Team Bonding"],
    partner: "Saint Gabriel's College",
  },
  {
    category: "camp",
    images: ["/work/08-1.jpg", "/work/08-2.jpg", "/work/08-3.jpg", "/work/08-4.jpg"],
    sortDate: "2026-06-22",
    levels: ["มัธยม"],
    title: "SK Design Thinking Camp 2026",
    date: "22-24 มิ.ย. 2569",
    duration: "3 วัน",
    participants: "150 คน",
    topics: ["Design Thinking", "Social Problem Analysis", "Social Innovation", "Community Engagement"],
    partner: "Suankularb Wittayalai School และ Nakhon Pathom City Municipality",
  },
  {
    category: "camp",
    images: ["/work/09-1.jpg", "/work/09-2.jpg", "/work/09-4.jpg", "/work/09-5.jpg"],
    sortDate: "2026-06-27",
    levels: ["มัธยม", "มหาวิทยาลัย"],
    title: "Rise Up: Transforming Leaders into Next-Gen Trainers",
    date: "27-29 มิ.ย. 2569",
    duration: "3 วัน",
    participants: "50 คน",
    topics: ["Advocacy Design", "Knowledge Management", "Learning Design", "Demo Class"],
    partner: "Rights Beyond Border",
  },
  // Workshops
  {
    category: "workshop",
    images: ["/work/10-1.jpg", "/work/10-2.jpg", "/work/10-3.jpg", "/work/10-4.jpg"],
    sortDate: "2023-02-01",
    levels: ["มัธยม", "มหาวิทยาลัย"],
    title: "Thai Youth's Civic Imagination and Social Innovation Project",
    date: "ก.พ. 2566 - ม.ค. 2567",
    duration: "11 เดือน",
    participants: "20 คน",
    topics: ["Civic Imagination", "Social Innovation by Design Thinking", "Creative Communication"],
    partner: "LSEd TU และ the101.pub",
  },
  {
    category: "workshop",
    images: ["/work/11-1.jpg", "/work/11-2.jpg", "/work/11-3.jpg", "/work/11-4.jpg"],
    sortDate: "2024-02-01",
    levels: ["มัธยม"],
    title: "Workshop \"ห้องเรียนไร้กรอบขอบชีส\"",
    date: "ก.พ. - เม.ย. 2567",
    duration: "3 เดือน",
    participants: "120 คน",
    topics: ["Social Normalization", "Human Rights", "Self-Awareness", "Violence"],
    partner: "TK Park",
  },
  {
    category: "workshop",
    images: ["/work/12-1.jpg", "/work/12-2.jpg", "/work/12-3.jpg", "/work/12-4.jpg"],
    sortDate: "2024-03-05",
    levels: ["มัธยม"],
    title: "Problem-based Learning Camp",
    date: "5 มี.ค. 2567",
    duration: "4 ชั่วโมง",
    participants: "70 คน",
    topics: ["Problem-Based Learning", "Problem Solving", "Science Literacy"],
    partner: "Satthasamut School",
  },
  {
    category: "workshop",
    images: ["/work/13-1.jpg", "/work/13-3.jpg"],
    sortDate: "2024-03-16",
    levels: ["องค์กร"],
    title: "CBA Middle Manager Workshop",
    date: "16 มี.ค. 2567",
    duration: "3 ชั่วโมง",
    participants: "60 คน",
    topics: ["Understanding How Businesses Run", "Adaptability Quotient", "Team Building"],
    partner: "Chulalongkorn Business Administration (CBA)",
  },
  {
    category: "workshop",
    images: ["/work/14-1.jpg", "/work/14-2.jpg", "/work/14-3.jpg"],
    sortDate: "2024-04-01",
    levels: ["มัธยม"],
    title: "Dream Expo, Wooden Bridge and Catapult Workshop",
    date: "1-3 เม.ย. 2567",
    duration: "3 วัน",
    participants: "300 คน",
    topics: ["Weight Distribution", "Structural Integrity", "Energy Transformation", "Projectile"],
    partner: "Assumption College",
  },
  {
    category: "workshop",
    images: ["/work/15-1.jpg", "/work/15-2.jpg", "/work/15-3.jpg"],
    sortDate: "2024-05-18",
    levels: ["ประถม", "มัธยม"],
    title: "Puppet Theatre Workshop",
    date: "18 พ.ค. 2567",
    duration: "4 ชั่วโมง",
    participants: "20 คน",
    topics: ["Puppet Making", "Applied Theatre", "Environmental Awareness"],
    partner: "Pathumyouth, Influencer th และ สสส.",
  },
  {
    category: "workshop",
    images: ["/work/16-1.jpg", "/work/16-2.jpg", "/work/16-3.jpg"],
    sortDate: "2024-05-25",
    levels: ["ครู"],
    title: "Environmental Awareness for Teachers",
    date: "25-26 พ.ค. 2567",
    duration: "2 วัน",
    participants: "300 คน",
    topics: ["Garbage Recycling", "Environmental Awareness", "Creative Drama"],
    partner: "World Wildlife Fund, Ranong Recycle for Environment และ Surat Thani City Municipality",
  },
  {
    category: "workshop",
    images: ["/work/17-1.jpg", "/work/17-2.jpg", "/work/17-3.jpg"],
    sortDate: "2024-06-20",
    levels: ["มัธยม"],
    title: "Herbal Inhalant Making Workshop",
    date: "20 มิ.ย. 2567",
    duration: "4 ชั่วโมง",
    participants: "100 คน",
    topics: ["Thai Culture", "Properties of Herbs", "Inhalant Making"],
    partner: "Amnuay Silpa School",
  },
  {
    category: "workshop",
    images: ["/work/18-1.jpg", "/work/18-2.jpg", "/work/18-3.jpg"],
    sortDate: "2024-07-12",
    levels: ["องค์กร"],
    title: "Giftwise's Q2 Townhall 2024",
    date: "12 ก.ค. 2567",
    duration: "3 ชั่วโมง",
    participants: "70 คน",
    topics: ["Active Listening", "Effective Feedback", "Nonviolent Communication"],
    partner: "Giftwise Asia",
  },
  {
    category: "workshop",
    images: ["/work/19-1.jpg", "/work/19-2.jpg", "/work/19-3.jpg", "/work/19-4.jpg"],
    sortDate: "2024-08-04",
    levels: ["มัธยม"],
    title: "Workshop \"คนตัวเล็ก ขอเล่นใหญ่\" @Learning Fest 2024",
    date: "4 ส.ค. 2567",
    duration: "1 วัน",
    participants: "25 คน",
    topics: ["Civic Imagination", "Social Problem Analysis", "Self-Awareness", "Social Innovation"],
    partner: "TK Park",
  },
  {
    category: "workshop",
    images: ["/work/20-1.jpg", "/work/20-2.jpg", "/work/20-3.jpg", "/work/20-4.jpg"],
    sortDate: "2024-09-13",
    levels: ["ประถม"],
    title: "Workshop \"การทำสื่อสร้างสรรค์และละครเพื่อการเรียนรู้\"",
    date: "13 ก.ย. 2567",
    duration: "1 วัน",
    participants: "110 คน",
    topics: ["Creative Drama", "Team Building"],
    partner: "วิทยากรทีมงานบ้านอรชุน และ โรงเรียนเทศบาลวัดป่าแพ่ง",
  },
  {
    category: "workshop",
    images: ["/work/21-1.jpg", "/work/21-2.jpg", "/work/21-3.jpg", "/work/21-4.jpg"],
    sortDate: "2024-11-27",
    levels: ["มัธยม"],
    title: "AC Engineer Camp 2024",
    date: "27 พ.ย. 2567",
    duration: "1 วัน",
    participants: "100 คน",
    topics: ["Basic Engineering", "STEM Education", "Projectile", "Product Design"],
    partner: "Assumption College",
  },
  {
    category: "workshop",
    images: ["/work/22-1.jpg", "/work/22-2.jpg", "/work/22-3.jpg"],
    sortDate: "2025-01-17",
    levels: ["องค์กร"],
    title: "Giftwise's Q1 Townhall 2025",
    date: "17 ม.ค. 2568",
    duration: "1 วัน",
    participants: "90 คน",
    topics: ["DISC for Collaboration", "Team Building", "Problem Solving"],
    partner: "Giftwise Asia",
  },
  {
    category: "workshop",
    images: ["/work/23-1.jpg", "/work/23-2.jpg", "/work/23-3.jpg", "/work/23-4.jpg"],
    sortDate: "2025-02-01",
    levels: ["มหาวิทยาลัย"],
    title: "House of Wisdom TU Workshop 2025",
    date: "ก.พ. - เม.ย. 2568",
    duration: "3 เดือน / 8 sessions",
    participants: "300+ คน",
    topics: ["Performing Arts", "Crafting", "Art", "Reflection"],
    partner: "House of Wisdom TU",
  },
  {
    category: "workshop",
    images: ["/work/24-1.jpg", "/work/24-2.jpg", "/work/24-3.jpg", "/work/24-4.jpg", "/work/24-5.jpg"],
    sortDate: "2025-03-27",
    levels: ["มัธยม"],
    title: "AC Engineering Design Process Workshop",
    date: "27 มี.ค. 2568",
    duration: "1 วัน",
    participants: "60 คน",
    topics: ["Basic Engineering", "STEM Education", "Design Process", "Truss Structure"],
    partner: "Assumption College",
  },
  {
    category: "workshop",
    images: ["/work/25-1.jpg", "/work/25-2.jpg", "/work/25-3.jpg", "/work/25-4.jpg"],
    sortDate: "2025-04-01",
    levels: ["มหาวิทยาลัย"],
    title: "VetMed KU Student Committee Orientation",
    date: "1 เม.ย. 2568",
    duration: "1 วัน",
    participants: "75 คน",
    topics: ["Nonviolent Communication", "Constructive Feedback", "Empathetic Listening"],
    partner: "VetMed KU",
  },
  {
    category: "workshop",
    images: ["/work/26-1.jpg", "/work/26-2.jpg", "/work/26-4.jpg", "/work/26-5.jpg"],
    sortDate: "2025-05-02",
    levels: ["มัธยม"],
    title: "TSS Student Orientation Camp",
    date: "2-3 พ.ค. 2568",
    duration: "2 วัน",
    participants: "100 คน",
    topics: ["Team Building", "Creativity", "Self-Awareness"],
    partner: "Thammasat Secondary School",
  },
  {
    category: "workshop",
    images: ["/work/27-1.jpg", "/work/27-2.jpg", "/work/27-4.jpg", "/work/27-5.jpg"],
    sortDate: "2025-05-20",
    levels: ["มัธยม"],
    title: "TSS Student Council Orientation",
    date: "20 พ.ค. 2568",
    duration: "1 วัน",
    participants: "25 คน",
    topics: ["DISC for Leadership", "Nonviolent Communication", "Team Building"],
    partner: "Thammasat Secondary School",
  },
  {
    category: "workshop",
    images: ["/work/28-1.jpg", "/work/28-2.jpg", "/work/28-4.jpg", "/work/28-5.jpg"],
    sortDate: "2025-05-25",
    levels: ["องค์กร"],
    title: "CBA Middle Manager Training: The Art of Teamwork",
    date: "25 พ.ค. 2568",
    duration: "1 วัน",
    participants: "25 คน",
    topics: ["Effective Communication", "Iceberg Model", "GROW Model for Problem Solving"],
    partner: "Chulalongkorn Business Administration (CBA)",
  },
  {
    category: "workshop",
    images: ["/work/29-1.jpg", "/work/29-2.jpg", "/work/29-4.jpg", "/work/29-5.jpg"],
    sortDate: "2025-06-21",
    levels: ["มหาวิทยาลัย"],
    title: "Unlock Your Leadership - SMO Banshi x กวศ.",
    date: "21 มิ.ย. 2568",
    duration: "1 วัน",
    participants: "25 คน",
    topics: ["DISC for Leadership", "Leadership Skills & Mindsets", "Team Management"],
    partner: "SMO Banshi, ESC CU และ CaMP by ChAMP",
  },
  {
    category: "workshop",
    images: ["/work/30-1.jpg", "/work/30-2.jpg", "/work/30-3.jpg", "/work/30-4.jpg"],
    sortDate: "2025-11-13",
    levels: ["มัธยม"],
    title: "AC Bridgemaster Workshop",
    date: "13 พ.ย. 2568",
    duration: "1 วัน",
    participants: "100 คน",
    topics: ["Basic Engineering", "STEM Education", "Truss Structure"],
    partner: "Assumption College",
  },
  {
    category: "workshop",
    images: ["/work/31-1.jpg", "/work/31-2.jpg", "/work/31-3.jpg", "/work/31-4.jpg"],
    sortDate: "2025-12-20",
    levels: ["มัธยม"],
    title: "BCC Problem Discovery Class",
    date: "20 ธ.ค. 2568",
    duration: "1 วัน",
    participants: "40 คน",
    topics: ["Problem Discovery", "Problems in Daily Life", "Solution Ideation"],
    partner: "Bangkok Christian College",
  },
  {
    category: "workshop",
    images: ["/work/32-1.jpg", "/work/32-2.jpg", "/work/32-3.jpg", "/work/32-4.jpg"],
    sortDate: "2026-02-20",
    levels: ["มัธยม"],
    title: "Awaken Your Purpose: วิชาปั้นฝัน 101",
    date: "20 ก.พ. 2569",
    duration: "1 วัน",
    participants: "50 คน",
    topics: ["Designing Your Life", "SMART Goals", "Finding Strengths"],
    partner: "Bangkok Christian College",
  },
  {
    category: "workshop",
    images: ["/work/33-1.jpg", "/work/33-2.jpg", "/work/33-3.jpg", "/work/33-4.jpg"],
    sortDate: "2026-03-07",
    levels: ["มัธยม"],
    title: "AC STEM Workshop: Turbo Motion Challenge",
    date: "7 มี.ค. 2569",
    duration: "1 วัน",
    participants: "300 คน",
    topics: ["Basic Engineering", "STEM Education", "Basic Electrical Circuit", "Product Design"],
    partner: "Assumption College",
  },
  {
    category: "workshop",
    images: ["/work/34-1.jpg", "/work/34-2.jpg", "/work/34-3.jpg", "/work/34-4.jpg"],
    sortDate: "2026-03-31",
    levels: ["มัธยม"],
    title: "AC Escape Room - DREAM Expo 2026: Your Dream is…",
    date: "31 มี.ค. - 3 เม.ย. 2569",
    duration: "4 วัน / 16 sessions",
    participants: "400 คน",
    topics: ["Science in Daily Life", "Problem Solving", "Interdisciplinary Task"],
    partner: "Assumption College",
  },
  {
    category: "workshop",
    images: ["/work/35-1.jpg", "/work/35-2.jpg", "/work/35-3.jpg"],
    sortDate: "2026-03-31",
    levels: ["มัธยม"],
    title: "AC STEM Workshop: Wooden Skyscraper",
    date: "31 มี.ค. 2569",
    duration: "1 วัน",
    participants: "100 คน",
    topics: ["Basic Engineering", "STEM Education", "Truss Structure"],
    partner: "Assumption College",
  },
  {
    category: "workshop",
    images: ["/work/36-1.jpg", "/work/36-2.jpg", "/work/36-3.jpg", "/work/36-4.jpg"],
    sortDate: "2026-05-13",
    levels: ["ครู"],
    title: "House of The Saint: Teacher Orientation",
    date: "13 พ.ค. 2569",
    duration: "1 วัน",
    participants: "340 คน",
    topics: ["Student Care System", "Team Bonding", "Project Creation"],
    partner: "Saint Gabriel's College",
  },
  {
    category: "workshop",
    images: ["/work/37-1.jpg", "/work/37-2.jpg", "/work/37-3.jpg", "/work/37-4.jpg"],
    sortDate: "2026-06-19",
    levels: ["มัธยม"],
    title: "TPN English Magic Camp",
    date: "19 มิ.ย. 2569",
    duration: "1 วัน",
    participants: "100 คน",
    topics: ["English Communication", "Debating in English", "Self-Confidence"],
    partner: "Triamudomsuksa Pattanakarn Nonthaburi School",
  },
  {
    category: "workshop",
    images: ["/work/38-1.jpg", "/work/38-2.jpg", "/work/38-4.jpg", "/work/38-5.jpg"],
    sortDate: "2026-07-09",
    levels: ["มัธยม"],
    title: "The Numbers Behind the Story",
    date: "9 ก.ค. 2569",
    duration: "1 วัน",
    participants: "26 คน",
    topics: ["Storytelling", "Body Language", "Talk Creation"],
    partner: "Satriwithaya School",
  },
  // Miscellaneous
  {
    category: "misc",
    images: ["/work/39-1.jpg", "/work/39-2.jpg", "/work/39-3.jpg"],
    sortDate: "2024-06-05",
    levels: ["ประถม", "มัธยม"],
    title: "Anti-Drug Stage Play",
    date: "5 มิ.ย. - 19 ก.ค. 2567",
    duration: "24 วัน / 48 sessions",
    participants: "10,000+ คน",
    topics: ["Types of Addictive Substances", "Consequences of Addiction", "Drama"],
    partner: "Samut Prakan Provincial Administrative Organization",
  },
  {
    category: "misc",
    images: ["/work/40-1.jpg", "/work/40-2.jpg", "/work/40-3.jpg", "/work/40-4.jpg"],
    sortDate: "2024-10-09",
    levels: ["มัธยม"],
    title: "เวที \"ร่วมพัฒนาโรงเรียน\" ณ โรงเรียนบ้านบางหมาก",
    date: "9-10 ต.ค. 2567",
    duration: "2 วัน",
    participants: "60 คน",
    topics: ["Creative Communication", "Applied Theatre", "Cultural Heritage"],
    partner: "LSEd TU, โครงการโรงเรียนร่วมพัฒนา และ Ban Bangmak School",
  },
  {
    category: "misc",
    images: ["/work/41-1.jpg", "/work/41-2.jpg", "/work/41-3.jpg", "/work/41-4.jpg"],
    sortDate: "2024-10-31",
    levels: ["มัธยม"],
    title: "SKE2024 Suankularb Innovation Contest",
    date: "31 ต.ค. 2567",
    duration: "1 วัน",
    participants: "80 คน",
    topics: ["Design Thinking", "Innovation", "Pitching"],
    partner: "Suankularb Wittayalai School",
  },
  {
    category: "workshop",
    images: ["/work/42-1.jpg", "/work/42-2.jpg", "/work/42-3.jpg", "/work/42-4.jpg"],
    sortDate: "2024-11-09",
    levels: ["มัธยม", "มหาวิทยาลัย"],
    title: "SYSI Curate Your Pitch & Talk Workshop",
    date: "9 พ.ย. 2567",
    duration: "1 วัน",
    participants: "40 คน",
    topics: ["Storytelling for Social Innovation", "Pitching", "Stage Performance"],
    partner: "SYSI และ Connect Fest 3",
  },
  {
    category: "misc",
    images: ["/work/43-1.jpg", "/work/43-2.jpg", "/work/43-3.jpg"],
    sortDate: "2024-12-01",
    levels: ["ประถม"],
    title: "Interactive Learning Exhibition \"สายลับนากน้อย\"",
    date: "1 ธ.ค. 2567",
    duration: "1 วัน",
    participants: "200 คน",
    topics: ["Community Engagement", "Cultural Heritage", "Applied Theatre"],
    partner: "LSEd TU และ โครงการโรงเรียนร่วมพัฒนา",
  },
  {
    category: "misc",
    images: ["/work/44-1.jpg", "/work/44-2.jpg"],
    sortDate: "2025-02-28",
    levels: ["องค์กร"],
    title: "Giftwise's Excel Training",
    date: "28 ก.พ. 2568",
    duration: "1 วัน",
    participants: "30 คน",
    topics: ["Excel for Corporate Work"],
    partner: "Giftwise Asia",
  },
  {
    category: "misc",
    images: ["/work/45-1.jpg", "/work/45-2.jpg", "/work/45-3.jpg", "/work/45-4.jpg"],
    sortDate: "2025-07-07",
    levels: ["มัธยม"],
    title: "เส้นทางฝันกับพอร์ตในมือ - TCAS Portfolio Guidance",
    date: "7 ก.ค. 2568",
    duration: "1 วัน",
    participants: "300 คน",
    topics: ["Portfolio Guidance", "Storytelling for Portfolio", "TCAS Preparation"],
    partner: "Khemasiri Memorial School",
  },
  {
    category: "misc",
    images: ["/work/46-1.jpg", "/work/46-2.jpg", "/work/46-3.jpg", "/work/46-4.jpg", "/work/46-5.jpg"],
    sortDate: "2025-07-29",
    levels: ["มหาวิทยาลัย"],
    title: "YES Talent Camp 2025 - GenAI Hackathon - Orientation Day",
    date: "29 ก.ค. 2568",
    duration: "1 วัน",
    participants: "120 คน",
    topics: ["Team Building", "Potential Seeking", "Pitching Simulation"],
    partner: "Mitr Phol Group",
  },
  {
    category: "misc",
    images: ["/work/47-1.jpg", "/work/47-2.jpg", "/work/47-3.jpg", "/work/47-4.jpg"],
    sortDate: "2026-03-12",
    levels: ["มหาวิทยาลัย"],
    title: "ถอดบทเรียนสะท้อนคิด โครงการ \"Craft AI\"",
    date: "12 มี.ค. 2569",
    duration: "1 วัน",
    participants: "30 คน",
    topics: ["Reflection", "Learning Milestones", "Finding Next Steps"],
    partner: "LSEd TU และ บพท.",
  },
];

export const portfolio = [...portfolioRaw].sort((a, b) =>
  b.sortDate.localeCompare(a.sortDate)
);

// Home "Signature Work": four portfolio entries shown as flip cards, one per kind of
// work. Every fact on a card comes from its `portfolio` entry, looked up by title; only
// the service label and the photo live here. A renamed title fails the build.
// Photos are each project's own Instagram posts from Drive (PR folder), with the
// branded top and bottom bands cropped off: 1080x830 in public/signature/.
export const signatureWork = [
  {
    title: "SK Design Thinking Camp 2025",
    service: "Camp",
    image: "/signature/sk-design-thinking-2025.jpg",
    alt: "ทีมนักเรียนระดมความคิดหน้าฟลิปชาร์ตระหว่างค่าย",
  },
  {
    title: "House of The Saint: Teacher Orientation",
    service: "Workshop",
    image: "/signature/house-of-the-saint.jpg",
    alt: "คณะครูชูแผ่นงานกลุ่มที่ช่วยกันเขียน",
  },
  {
    title: "AC STEM Workshop: Turbo Motion Challenge",
    service: "Workshop",
    image: "/signature/ac-turbo-motion.jpg",
    alt: "นักเรียนช่วยกันประกอบรถต้นแบบบนพื้น",
  },
  {
    title: "ถอดบทเรียนสะท้อนคิด โครงการ \"Craft AI\"",
    service: "Facilitation",
    image: "/signature/craft-ai-reflection.jpg",
    alt: "ผู้เข้าร่วมนำเสนอบอร์ดภาพสรุปการเรียนรู้",
    // The presenter stands at the left edge; a centred crop keeps only his arm.
    position: "20% center",
  },
].map(({ title, service, image, alt, position }) => {
  const item = portfolioRaw.find((entry) => entry.title === title);
  if (!item) throw new Error(`signatureWork: no portfolio entry titled ${title}`);
  return { ...item, service, image, alt, position };
});

// /skills-map, from the owners' design (https://claude.ai/artifact/Ujz4GGQPcGdMbirb2DoFSm).
// The Skills Map starts in ภาคเรียนที่ 2 ปีการศึกษา 2569 (around early 2570; owners, 2026-10-20); it has not been run
// with a client yet, so copy speaks of it as starting then, never as already used in
// every project. `demo` is invented sample data and is labelled so on the page.
export const skillsMap = {
  start: "ภาคเรียนที่ 2 ปีการศึกษา 2569",
  skills: [
    { name: "คิดแก้ปัญหา", desc: "วิเคราะห์โจทย์ และหาทางออกที่ใช้ได้จริง" },
    { name: "คิดสร้างสรรค์", desc: "สร้างไอเดียใหม่ และทำให้เป็นต้นแบบ" },
    { name: "สื่อสาร", desc: "ฟัง เล่าเรื่อง และนำเสนอให้คนอื่นเข้าใจ" },
    { name: "ทำงานเป็นทีม", desc: "แบ่งบทบาท ร่วมมือ ไปถึงเป้าหมายด้วยกัน" },
    { name: "ภาวะผู้นำ", desc: "ชวนคนอื่นเดินไปสู่เป้าหมายร่วมกัน" },
    { name: "สะท้อนคิด", desc: "ทบทวนสิ่งที่เรียนรู้ และนำไปต่อยอด" },
    { name: "ปรับตัว", desc: "รับมือสถานการณ์ใหม่อย่างยืดหยุ่น" },
  ],
  levels: ["เริ่มต้น", "กำลังพัฒนา", "ทำได้", "เป็นแบบอย่าง"],
  principles: [
    {
      title: "กรอบเดียว",
      text: "ใช้ 7 ทักษะกับ rubric 4 ระดับชุดเดียวกันทุกงาน วันนี้น้องอยู่ระดับ “กำลังพัฒนา” อีกสามเดือนก็วัดด้วยไม้บรรทัดอันเดิม เลยเห็นชัดว่าขยับไปจริงไหม",
    },
    {
      title: "วัดได้จริง",
      text: "ไม่ได้ดูแค่ความรู้สึก ผู้เรียนประเมินตัวเอง แล้วทีมกระบวนกรดูจากสิ่งที่น้องทำจริงระหว่างกิจกรรม โครงการที่ยาวขึ้นจะมีครูประจำชั้นช่วยยืนยันผลด้วย",
    },
    {
      title: "ต่อยอดได้",
      text: "ผลแต่ละรอบไม่ได้จบที่ตัวเลข แต่บอกต่อว่าควรเติมทักษะไหนก่อน ครั้งหน้าเลยออกแบบกิจกรรมได้ตรงจุด ไม่ต้องเริ่มจากศูนย์",
    },
  ],
  audiences: [
    { who: "ผู้เรียน", text: "เห็นตัวเองชัดขึ้นว่าถนัดอะไร ยังต้องฝึกอะไร และพอจบกิจกรรมก็รู้ว่าตัวเองโตขึ้นจริง ไม่ใช่แค่ “สนุกดี”" },
    { who: "ครู", text: "มีหลักฐานพัฒนาการของนักเรียนรายทักษะ ไม่ต้องเดาว่ากิจกรรมได้ผลไหม และรู้ว่าเทอมหน้าควรเน้นอะไร" },
    { who: "ผู้บริหาร", text: "ได้สรุปที่อ่านจบในหน้าเดียว เอาไปใส่รายงานผลงานโรงเรียน หรือเล่าให้กรรมการสถานศึกษาฟังได้" },
  ],
  cycle: [
    { en: "Map", title: "สำรวจก่อนเริ่ม", text: "รู้จุดเริ่มต้นของผู้เรียน" },
    { en: "Learn", title: "ออกแบบตรงจุด", text: "กิจกรรมเน้นทักษะที่ควรเติม" },
    { en: "Re-map", title: "วัดซ้ำหลังจบ", text: "เทียบก่อน–หลังให้เห็นการเติบโต" },
    { en: "Next path", title: "วางก้าวต่อไป", text: "เสนอเส้นทางการเรียนรู้ที่ต่อเนื่อง" },
  ],
  // One row per package, in `packages` order; the cards link here.
  perPackage: [
    { method: "Skills Map แบบสั้น 3 ทักษะ ตอนเปิดและปิดงาน", reports: "“นักเรียนรับรู้ว่า…”" },
    { method: "ก่อน–หลังเต็มชุด + โจทย์คู่ขนาน A/B ให้คะแนนแบบ blind", reports: "“สังเกตเห็นการเปลี่ยนแปลงในกิจกรรม”" },
    { method: "วัด 3 รอบ: ก่อน · หลังค่าย · หลัง 1 เดือน + ครูประจำชั้นร่วมประเมิน", reports: "“ทักษะติดตัวไปใช้ในโรงเรียน”" },
    { method: "Skills Map ทั้งปี + รายงานรายเทอมให้ ผอ.", reports: "“ทักษะติดตัวไปใช้ในโรงเรียน”" },
  ],
  // Checked against the sources on 2026-10-10.
  research: [
    { stat: "39%", text: "ของทักษะหลักของคนทำงานจะเปลี่ยนภายในปี 2030", source: "World Economic Forum, Future of Jobs Report 2025" },
    {
      stat: "+11",
      text: "เปอร์เซ็นไทล์ด้านผลการเรียน เมื่อโรงเรียนพัฒนาทักษะสังคมและอารมณ์ (213 โปรแกรม นักเรียนกว่า 270,000 คน)",
      source: "Durlak et al., Child Development, 2011",
    },
    {
      stat: "0.4–0.7",
      text: "effect size ของการประเมินระหว่างเรียน และการให้ผู้เรียนประเมินตนเองคือหัวใจสำคัญ",
      source: "Black & Wiliam, Inside the Black Box, 1998",
    },
    {
      stat: "5 สมรรถนะ",
      text: "สำคัญของผู้เรียนที่หลักสูตรแกนกลางฯ กำหนด: สื่อสาร คิด แก้ปัญหา ทักษะชีวิต และใช้เทคโนโลยี",
      source: "หลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พ.ศ. 2551",
    },
  ],
  deliverables: [
    { title: "แผนที่ทักษะรายกลุ่ม", text: "จุดแข็งและจุดที่ควรเติม" },
    { title: "ผลก่อน–หลัง", text: "เห็นการเติบโตเป็นตัวเลข" },
    { title: "โปรไฟล์รายบุคคล", text: "สำหรับ Signature Camp" },
    { title: "สรุป 1 หน้า + ก้าวต่อไป", text: "พร้อมเส้นทางการเรียนรู้ที่แนะนำ" },
  ],
  demo: {
    title: "ค่ายผู้นำ ม.4 · 40 คน",
    before: [1.8, 2.0, 1.7, 2.3, 1.6, 1.5, 2.1],
    // One round: the dashboard shows before vs after camp only (owners, 2026-10-17).
    rounds: [
      {
        id: "camp",
        label: "ก่อน vs หลังค่าย",
        now: "หลังค่าย",
        evidence: "ประเมินตนเอง + โจทย์คู่ขนาน A/B ให้คะแนนแบบ blind",
        values: [2.9, 3.0, 2.6, 3.4, 2.5, 2.7, 2.8],
      },
    ],
    // "รายคน" view: six invented learners out of the 40, anonymised as A–F. Whole rubric
    // levels per skill (group figures above are averages); `camp` is the after-camp round.
    learners: [
      { id: "A", before: [2, 2, 1, 2, 1, 1, 2], camp: [3, 3, 2, 3, 2, 3, 3] },
      { id: "B", before: [2, 2, 2, 3, 2, 2, 2], camp: [3, 3, 3, 4, 3, 3, 3] },
      { id: "C", before: [1, 2, 1, 2, 1, 1, 2], camp: [2, 3, 3, 3, 2, 2, 2] },
      { id: "D", before: [2, 3, 2, 2, 2, 1, 3], camp: [3, 4, 2, 3, 3, 2, 3] },
      { id: "E", before: [2, 1, 2, 3, 1, 2, 2], camp: [3, 2, 3, 3, 2, 3, 3] },
      { id: "F", before: [1, 2, 2, 2, 2, 1, 1], camp: [2, 3, 3, 3, 2, 2, 2] },
    ],
  },
};

// ---------------------------------------------------------------------------
// /services/* sub-pages, from the owners' v2 design (canvas "SoulScity Website
// Restructure", row "หน้าบริการ 4 หน้า · ดีไซน์จริง v2", 2026-10-16). Prices come from
// `packages`; projects are looked up in `portfolio` by title, so a renamed title fails
// the build. Placeholders the design left for the owners (insurance, first aid,
// emergency plan, testimonials, FAQ answers, the corporate price) are not here: they
// go in once the owners supply them.

// Looks up portfolio entries by title for the "ผลงานจริง" cards on the service pages.
export function worksByTitle(titles) {
  return titles.map((title) => {
    const item = portfolioRaw.find((entry) => entry.title === title);
    if (!item) throw new Error(`worksByTitle: no portfolio entry titled ${title}`);
    return item;
  });
}

// /services/packages: one row per `packages` entry, same order.
export const packageCompare = [
  {
    href: "/services/camps#spark",
    fit: "อยากลองทำงานกับทีมก่อน หรือมีโจทย์เดียวชัด ๆ",
    gets: ["เวิร์กช็อป 1 หัวข้อ", "สรุปผล 1 หน้า + ภาพ ภายใน 14 วัน"],
    skillsMap: "แบบสั้น 3 ทักษะ",
  },
  {
    href: "/services/camps",
    fit: "ค่ายประจำปีที่อยากให้นักเรียนได้ผลงานจริง",
    gets: ["ค่าย 1 track ที่เลือก", "ประชุมออกแบบกับครู 2 ครั้ง", "รายงานผล + ภาพ ภายใน 14 วัน"],
    skillsMap: "ก่อน–หลังเต็มชุด",
  },
  {
    href: "/services/partnership#stride",
    fit: "อยากให้ ผอ. เห็นผลต่อเนื่องหลังค่าย",
    gets: ["Spark + ค่าย 2 วัน 1 คืน", "ติดตามผล + นำเสนอต่อ ผอ.", "รายงานฉบับเต็ม"],
    skillsMap: "วัด 3 รอบ + ครูร่วมประเมิน",
  },
  {
    href: "/services/partnership#summit",
    fit: "อยากวางแผนพัฒนาทักษะนักเรียนทั้งปี",
    gets: ["อบรมครู + ค่าย + Spark 2 ครั้ง", "รายงานรายเทอมให้ ผอ.", "จองวันก่อนลูกค้าทั่วไป"],
    skillsMap: "ทั้งปี + รายงานรายเทอม",
  },
];

// "โจทย์ของคุณตรงกับข้อไหน": a need, and the page that answers it.
export const packageChooser = [
  { need: "อยากลองทำงานกับทีมก่อน หรือมีเวลาแค่ครึ่งวัน", step: "01", label: "Spark Workshop", href: "/services/camps#spark" },
  { need: "มีงบค่ายประจำปี อยากให้นักเรียนได้ผลงานจริง", step: "02", label: "Signature Camp", href: "/services/camps" },
  { need: "อยากให้ ผอ. เห็นว่านักเรียนนำไปใช้ต่อในโรงเรียน", step: "03", label: "Stride Journey", href: "/services/partnership#stride" },
  { need: "อยากวางแผนพัฒนาทักษะนักเรียนทั้งปีการศึกษา", step: "04", label: "Summit Partner", href: "/services/partnership#summit" },
  { need: "เราเป็นบริษัท คณะ หรือสโมสรนักศึกษา", label: "องค์กรและมหาวิทยาลัย", href: "/services/organizations" },
];

// /services/camps
export const campTracks = [
  {
    icon: Users,
    name: "Leadership",
    description: "เข้าใจตัวเอง สื่อสาร ตัดสินใจภายใต้ความกดดัน และนำทีมไปสู่เป้าหมายร่วมกัน",
    tags: ["Building Mindset", "Game Simulation", "DISC"],
    result: "แผนโครงการของทีม",
  },
  {
    icon: Lightbulb,
    name: "Design Thinking",
    description: "Empathize → Define → Ideate → Prototype → Test แก้ปัญหาจริงโดยมีผู้ใช้เป็นศูนย์กลาง",
    tags: ["Community Engagement", "Hackathon"],
    result: "ต้นแบบนวัตกรรม + pitch",
  },
  {
    icon: PenTool,
    name: "STEAM",
    description: "Engineering Design Process ผ่านโจทย์สร้างจริง ทั้งโครงสร้าง กลไก และวงจรพื้นฐาน",
    tags: ["Engineering Design", "Maker", "Product Design"],
    result: "ชิ้นงานที่ใช้ได้จริง",
  },
];

// A sample 2-day, 1-night camp. Map / Re-map are the Skills Map rounds.
export const campDays = [
  { mark: "Map", when: "วันที่ 1 · เช้า", title: "เปิดค่าย + Skills Map ก่อนเริ่ม", text: "ละลายพฤติกรรม แบ่งทีม และรับโจทย์" },
  { mark: "2", when: "วันที่ 1 · บ่าย–ค่ำ", title: "ลงมือรอบแรก", text: "ทำกิจกรรมหลักของ track ที่เลือก" },
  { mark: "3", when: "วันที่ 2 · เช้า", title: "ปรับ แก้ ทดสอบ", text: "พี่เลี้ยงประจำทีมให้ feedback" },
  { mark: "Re-map", when: "วันที่ 2 · บ่าย", title: "นำเสนอผลงาน + วัดซ้ำ", text: "เชิญครูหรือ ผอ. ร่วมฟังได้" },
];

export const campIncludes = [
  { title: "ประชุมออกแบบกับครู 2 ครั้ง", text: "เข้าใจบริบทและเป้าหมายก่อนวางกิจกรรม" },
  { title: "ทีมกระบวนกรลงพื้นที่", text: "วิทยากรหลัก + สตาฟประจำกลุ่ม" },
  { title: "Skills Map ก่อน–หลังเต็มชุด", text: "พร้อมโปรไฟล์ทักษะรายบุคคล เริ่มภาคเรียนที่ 2 ปีการศึกษา 2569" },
  { title: "รายงานผล + ภาพ ภายใน 14 วัน", text: "พร้อมส่งต่อให้ ผอ." },
];

// /services/partnership
export const strideMonths = [
  { month: "เดือนที่ 1", title: "Spark เต็มวัน", text: "ค้นโจทย์จริงของโรงเรียน และวัด Skills Map รอบแรก" },
  { month: "เดือนที่ 2", title: "Signature Camp 2 วัน 1 คืน", text: "ลงมือแก้โจทย์ของโรงเรียน และวัดหลังค่าย" },
  { month: "เดือนที่ 3", title: "ติดตามผล + นำเสนอต่อ ผอ.", text: "วัดรอบ 3 โดยครูประจำชั้นร่วมประเมิน พร้อมรายงานฉบับเต็ม" },
];

// Summit Partner, Standard vs Plus. Matches the Summit entry in `packages`.
export const summitRows = [
  { item: "อบรมครู 1 วัน ต้นปีการศึกษา", standard: true },
  { item: "Signature Camp 1 ครั้ง + Spark 2 ครั้ง", standard: true },
  { item: "Skills Map ทั้งปี + รายงานรายเทอมให้ ผอ.", standard: true },
  { item: "สิทธิ์จองวันก่อนลูกค้าทั่วไป", standard: true },
  { item: "ถอดบทเรียนร่วมกับคณะครู", standard: false },
  { item: "Showcase ผลงานนักเรียนสิ้นปี", standard: false },
];

export const evidenceRounds = [
  { mark: "1", title: "ก่อนเริ่ม", text: "รู้จุดเริ่มต้นของผู้เรียนรายทักษะ" },
  { mark: "2", title: "หลังค่าย", text: "เทียบก่อน–หลัง ด้วยโจทย์คู่ขนานให้คะแนนแบบ blind" },
  { mark: "3", title: "หลัง 1 เดือน", text: "ครูประจำชั้นร่วมประเมินว่าทักษะยังอยู่ไหม" },
  { mark: "✦", title: "รายงานให้ ผอ.", text: "สรุป 1 หน้า สอดคล้องสมรรถนะสำคัญตามหลักสูตรแกนกลางฯ" },
];

// /services/organizations: two audiences, switched by tabs. `works` are portfolio titles.
export const orgAudiences = [
  {
    id: "corp",
    label: "องค์กร",
    heading: "ทีมที่ทำงานด้วยกันได้ดีขึ้น",
    buyer: "เหมาะกับฝ่ายบุคคล ทีม L&D และผู้บริหารที่อยากพัฒนาทีม",
    services: [
      { title: "Team Building & Townhall", text: "กิจกรรมที่ทีมได้คุยกันจริง และเข้าใจกันมากขึ้น", ref: "Giftwise Asia" },
      { title: "ค่ายผู้นำเยาวชนและ Advocacy", text: "Theory of Change, Advocacy Design และ Creative Communication", ref: "Rights Beyond Border" },
      { title: "Feedback & Communication", text: "Active Listening, Effective Feedback และ Nonviolent Communication", ref: "Giftwise Asia" },
      { title: "Talent & Hackathon Orientation", text: "เปิดโครงการให้ผู้เข้าร่วมรู้จักกัน และพร้อมลงมือ", ref: "Mitr Phol · YES Talent Camp" },
    ],
    works: [
      "Rise Up: Transforming Leaders into Next-Gen Trainers",
      "Giftwise's Q1 Townhall 2025",
      "YES Talent Camp 2025 - GenAI Hackathon - Orientation Day",
    ],
  },
  {
    id: "uni",
    label: "มหาวิทยาลัย",
    heading: "นักศึกษาและบุคลากรที่พร้อมนำ",
    buyer: "เหมาะกับฝ่ายกิจการนักศึกษา คณะ สโมสร และโครงการวิจัย",
    services: [
      { title: "ปฐมนิเทศ สโมสร และกรรมการนักศึกษา", text: "DISC, Constructive Feedback และ Empathetic Listening", ref: "VetMed KU · SMO Banshi" },
      { title: "สัมมนาวางแผนงานกิจการนักศึกษา", text: "Project Management, Risk Management และ Activity Design", ref: "LSEd TU" },
      { title: "Leadership สำหรับหัวหน้างาน", text: "Effective Communication, Iceberg Model และ GROW Model", ref: "CBA จุฬาฯ" },
      { title: "เวิร์กช็อปต่อเนื่องหลาย session", text: "Performing Arts, Crafting และ Reflection ตลอดภาคเรียน", ref: "House of Wisdom TU" },
    ],
    works: [
      "CBA Middle Manager Training: The Art of Teamwork",
      "VetMed KU Student Committee Orientation",
      'ถอดบทเรียนสะท้อนคิด โครงการ "Craft AI"',
    ],
  },
];

export const facilitationFormats = [
  { title: "เวทีถอดบทเรียน", text: "สะท้อนคิด หา Learning Milestones และ Next Steps ของโครงการ", example: "เช่น Craft AI · LSEd TU และ บพท." },
  { title: "ระดมความคิดและวางแผน", text: "ประชุมเชิงปฏิบัติการที่ได้แผนจริง ไม่ใช่แค่โพสต์อิทบนผนัง", example: "เช่น LSEd Student Affairs Seminar" },
  { title: "เวทีภาคีและชุมชน", text: "พาผู้มีส่วนได้ส่วนเสียหลายกลุ่มมาคุยกันอย่างสร้างสรรค์", example: "เช่น เวทีร่วมพัฒนาโรงเรียน บ้านบางหมาก" },
];

export const orgProcess = [
  { step: "01", tag: "บรีฟ", title: "คุยโจทย์", text: "เป้าหมาย ผู้เข้าร่วม และข้อจำกัด" },
  { step: "02", tag: "เสนอ", title: "ร่างกระบวนการ + ใบเสนอราคา", text: "ออกแบบตามโจทย์ขององค์กรคุณ" },
  { step: "03", tag: "จัด", title: "ทีมกระบวนกรลงพื้นที่", text: "ที่สำนักงาน หรือสถานที่ภายนอก" },
  { step: "04", tag: "สรุป", title: "รายงานผลและข้อเสนอต่อ", text: "พร้อมภาพ ภายใน 14 วัน" },
];

// Logos shown on /services/organizations, by `partners` name.
export const orgPartnerNames = [
  "Chulalongkorn Business Administration",
  "Giftwise Asia",
  "Mitr Phol Group",
  "VetMed KU",
  "Thammasat University (LSEd)",
  "House of Wisdom TU",
  "Rights Beyond Border",
  "SMO Chulalongkorn Business School",
];
