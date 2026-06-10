export const profile = {
  name: 'Umar Ahad Usmani',
  fullName: 'Umar Ahad Uddin Ahmed Usmani',
  roles: [
    'Full-Stack AI Engineer',
    'Agentic AI Builder',
    'MERN + GenAI Developer',
    'Flutter Developer',
  ],
  location: 'Lahore, Pakistan',
  email: 'umarahadusmani@gmail.com',
  phone: '+92-333-4739757',
  github: 'https://github.com/umarahad2005',
  linkedin: 'https://linkedin.com/in/umarahadusmani',
  website: 'https://umarahadusmani.vercel.app',
  resume: '/Umar_Ahad_Usmani_Resume.pdf',
}

export const stats = [
  { value: 3.75, decimals: 2, suffix: '', label: 'CGPA · BS Computer Science' },
  { value: 15, suffix: '+', label: 'Projects shipped' },
  { value: 11, suffix: '', label: 'Certifications' },
  { value: 10, suffix: '+', label: 'Workshops led' },
]

export const marqueeTech = [
  'React', 'Node.js', 'Express', 'MongoDB', 'FastAPI', 'Python', 'Flutter',
  'Firebase', 'LangChain', 'Gemini ADK', 'Supabase', 'Next.js', 'TypeScript',
  'AWS Cloud', 'Chrome MV3', 'MySQL', 'Java', 'C++',
]

export const skillGroups = [
  {
    name: 'Languages',
    items: ['JavaScript', 'Python', 'Java', 'C++', 'Dart', 'SQL', 'HTML', 'CSS'],
  },
  {
    name: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'Flutter', 'LangChain', 'Gemini ADK'],
  },
  {
    name: 'Databases & Cloud',
    items: ['MongoDB Atlas', 'MySQL', 'Firebase Firestore', 'Supabase', 'AWS Cloud', 'Vercel', 'Render'],
  },
  {
    name: 'Concepts',
    items: ['Agent-Based Architecture', 'Generative AI', 'Prompt Engineering', 'REST APIs', 'DSA', 'OOP', 'Agile'],
  },
]

export const experience = [
  {
    when: 'May 2025 — Present',
    title: 'Marketing & Outreach Team Lead',
    org: 'AWS Cloud Club · Riphah, Lahore',
    points: [
      'Lead a cross-functional team designing strategic campaigns that grow club membership and digital engagement.',
      'Coordinate outreach promoting cloud computing education, lifting workshop attendance and community participation.',
    ],
  },
  {
    when: 'Nov 2024 — Present',
    title: 'Event Management Head',
    org: 'AWS Learning Club · Riphah, Lahore',
    points: [
      'Spearheaded 10+ workshops, seminars and hands-on AWS training sessions for 100+ student members.',
      'Streamlined event logistics with the core team for smooth delivery of technical learning experiences.',
    ],
  },
  {
    when: 'Jun 2024 — Oct 2024',
    title: 'Customer Support Specialist',
    org: 'Mindbridge · Lahore',
    points: [
      'Delivered high-quality technical and customer support, sharpening communication and problem-resolution skills in a professional environment.',
    ],
  },
]

export const education = {
  degree: 'B.S. in Computer Science',
  school: 'Riphah International University · Lahore',
  when: 'Feb 2024 — Dec 2027',
  gpa: 'CGPA 3.75 / 4.00',
  coursework:
    'Data Structures & Algorithms · OOP · Database Systems · Software Engineering · Computer Architecture · Web Programming · Analysis of Algorithms · Linear Algebra',
}

export const featuredProjects = [
  {
    glyph: '⚡',
    name: 'Taskko',
    tagline: 'AI Productivity Companion',
    badges: ['Latest', 'Mobile + Web'],
    desc: 'A full-featured AI productivity app: AI-planned days, focus timer, smart quizzes, an in-app AI chat coach and progress history — built offline-first so it keeps working with zero connection.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'BLoC / Cubit'],
    github: 'https://github.com/umarahad2005/taskko',
    live: null,
  },
  {
    glyph: '🤖',
    name: 'Zimma AI',
    tagline: 'Agentic Service Orchestrator for the Informal Economy',
    badges: ['Google Hackathon', 'Multi-Agent'],
    desc: 'A multi-agent system (Intent/NLU, Discovery, Ranking, Booking, Follow-up agents) built on Gemini ADK that lets people discover and book informal-economy services through natural conversation.',
    tech: ['Gemini ADK', 'FastAPI', 'Flutter', 'React', 'Supabase', 'Google Maps'],
    github: 'https://github.com/umarahad2005/google_hackathon_backend',
    live: 'https://zimmaai.vercel.app',
  },
  {
    glyph: '🗺️',
    name: 'Unmapped',
    tagline: 'Open Skills Infrastructure',
    badges: ['MIT Hack-Nation', 'AI for Good'],
    desc: 'Protocol layer connecting unrecognized youth skills to real economic opportunity: AI narrative intake, a swipe-based Mirror Test engine over O*NET/ESCO taxonomies, and transparent skill confidence tiers — built offline-first for low-bandwidth environments.',
    tech: ['Next.js', 'FastAPI', 'Python', 'Gemini API', 'O*NET / ESCO'],
    github: 'https://github.com/umarahad2005/unmapped_mit_hackathon',
    live: null,
  },
  {
    glyph: '📦',
    name: 'ContextCarry',
    tagline: 'Never lose AI context again',
    badges: ['Live SaaS', 'Chrome Extension'],
    desc: 'Full-stack SaaS that compresses AI conversations into portable, provider-neutral context capsules you can carry across Claude, ChatGPT and Gemini — with an MV3 extension, JWT auth, voice-to-capsule and capsule sharing.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Gemini API', 'Manifest V3'],
    github: 'https://github.com/umarahad2005/contexttool',
    live: 'https://www.contextcarry.tech',
  },
]

export const moreProjects = [
  {
    name: 'BitBrainiac',
    desc: 'AI-powered CS tutor with auth, persistent multi-session chat history and a ChatGPT-style UI.',
    tech: ['React', 'Flask', 'LangChain', 'Gemini'],
    github: 'https://github.com/umarahad2005/bit_brainiac-web',
    live: 'https://bitbrainiac.vercel.app',
  },
  {
    name: 'TalentBridge',
    desc: 'Agent-based job-matching platform that turns natural-language prompts into tailored real-time job listings.',
    tech: ['Next.js', 'TypeScript', 'NLP'],
    github: 'https://github.com/umarahad2005/talentBridge',
    live: null,
  },
  {
    name: 'IES Website',
    desc: 'Production website with separate Node backend, built and shipped for a real client.',
    tech: ['React', 'Node.js', 'Express'],
    github: 'https://github.com/umarahad2005/ies-website',
    live: 'https://ies-website-pink.vercel.app',
  },
  {
    name: 'Karwan-e-Usmania',
    desc: 'Organization website designed, built and deployed end-to-end in React.',
    tech: ['React', 'Vercel'],
    github: 'https://github.com/umarahad2005/Karwan_e_usmania',
    live: 'https://karwan-e-usmania.vercel.app',
  },
  {
    name: 'Memory Puzzle Game',
    desc: 'A working memory puzzle game written in pure x86 Assembly — pixels, input and game loop from scratch.',
    tech: ['x86 Assembly'],
    github: 'https://github.com/umarahad2005/memory-puzzel-game-assembly-',
    live: null,
  },
  {
    name: 'Course Registration System',
    desc: 'Console registration system built on linked lists and OOP with O(n) traversal efficiency.',
    tech: ['C++', 'DSA', 'OOP'],
    github: 'https://github.com/umarahad2005/student-course-registration-system-',
    live: null,
  },
]

export const certificates = [
  {
    img: '/certs/ibm-genai-data-scientists-specialization.jpg',
    issuer: 'IBM · Coursera',
    title: 'Generative AI for Data Scientists — Specialization (3 courses)',
    date: 'Jun 2025',
    verify: 'https://coursera.org/verify/specialization/3P31L17UO3ZO',
  },
  {
    img: '/certs/anthropic-agent-skills.jpg',
    issuer: 'Anthropic',
    title: 'Introduction to Agent Skills',
    date: '2026',
    verify: null,
  },
  {
    img: '/certs/hack-nation-hackathon.jpg',
    issuer: 'Hack-Nation (MIT)',
    title: '5th Hack-Nation Global AI Hackathon',
    date: 'Apr 2026',
    verify: null,
  },
  {
    img: '/certs/vanderbilt-chatgpt-advanced-data-analysis.jpg',
    issuer: 'Vanderbilt University',
    title: 'ChatGPT Advanced Data Analysis',
    date: 'Jul 2025',
    verify: 'https://coursera.org/verify/HS8I5J4083I4',
  },
  {
    img: '/certs/vanderbilt-prompt-engineering-chatgpt.jpg',
    issuer: 'Vanderbilt University',
    title: 'Prompt Engineering for ChatGPT',
    date: 'Feb 2025',
    verify: 'https://coursera.org/verify/4IHCMEZMJ4AY',
  },
  {
    img: '/certs/ibm-genai-elevate-data-science.jpg',
    issuer: 'IBM · Coursera',
    title: 'Generative AI: Elevate Your Data Science Career',
    date: 'Jun 2025',
    verify: 'https://coursera.org/verify/D53EXRTPOIYI',
  },
  {
    img: '/certs/ibm-genai-prompt-engineering-basics.jpg',
    issuer: 'IBM · Coursera',
    title: 'Generative AI: Prompt Engineering Basics',
    date: 'May 2025',
    verify: 'https://coursera.org/verify/HKUYAI9W9EDB',
  },
  {
    img: '/certs/ibm-genai-introduction-applications.jpg',
    issuer: 'IBM · Coursera',
    title: 'Generative AI: Introduction and Applications',
    date: 'Feb 2025',
    verify: 'https://coursera.org/verify/L9ZXVQ6EK9MA',
  },
  {
    img: '/certs/hackerrank-sql-basic.jpg',
    issuer: 'HackerRank',
    title: 'SQL (Basic) Certificate',
    date: 'Aug 2025',
    verify: 'https://www.hackerrank.com/certificates/DA897C744ED0',
  },
  {
    img: '/certs/hackerrank-problem-solving-basic.jpg',
    issuer: 'HackerRank',
    title: 'Problem Solving (Basic) Certificate',
    date: 'Aug 2025',
    verify: 'https://www.hackerrank.com/certificates/AEB99F41C3E4',
  },
  {
    img: '/certs/google-soft-skills-pafla.jpg',
    issuer: 'Google · PAFLA',
    title: 'Google Soft Skills Program',
    date: 'Dec 2024',
    verify: null,
  },
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]
