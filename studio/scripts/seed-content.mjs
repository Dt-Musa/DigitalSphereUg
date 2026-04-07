import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-04-06'})
const refreshMode = process.argv.includes('--refresh')
const preserveSettings = process.argv.includes('--preserve-settings')

const toSlug = (value = '') =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

const block = (text, key) => ({
  _type: 'block',
  _key: key,
  style: 'normal',
  markDefs: [],
  children: [
    {
      _type: 'span',
      _key: `${key}-span`,
      text,
      marks: [],
    },
  ],
})

const docs = [
  {
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteTitle: "DigitalSphere | Africa's Home for Blockchain & Web3",
    siteDescription:
      'Master the fundamentals of Blockchain and Web3, discover local events, and access real opportunities for individuals and communities ready to grow in Web3 across Africa.',
    siteUrl: 'https://digitalsphereug.tech',
    founderName: 'Irankunda Musa',
    telegramLink: 'https://t.me/digitalsphereug',
    xLink: 'https://x.com/digitalsphereug',
    whatsAppLink: 'https://whatsapp.com/channel/0029VbAqlOlHFxP25IPcQw0l',
    communityMemberCount: '313+',
    footerDisclaimerText:
      'Disclaimer: DigitalSphere curates links to free external resources. All linked resources belong to their respective owners.',
    metaDescription:
      "DigitalSphere is Africa's home for Blockchain and Web3 education, events, opportunities, resources, and community.",
  },
  {
    _id: 'seed-blog-post-1',
    _type: 'blogPost',
    title: 'What Is Blockchain and Why Every Ugandan Should Care Right Now',
    slug: {_type: 'slug', current: toSlug('What Is Blockchain and Why Every Ugandan Should Care Right Now')},
    excerpt:
      "A beginner-friendly explanation of blockchain and why it matters for Uganda's future economy.",
    body: [
      block('Blockchain is a shared digital ledger that no single person controls.', 'b1'),
      block('For Uganda and East Africa, this matters for payments, jobs, and transparent systems.', 'b2'),
    ],
    tag: 'Education',
    tagColor: '#34d399',
    author: 'Irankunda Musa',
    publishedDate: new Date().toISOString(),
    readTime: '6 min read',
    featured: true,
  },
  {
    _id: 'seed-event-1',
    _type: 'event',
    title: 'Blockchain DevFest Kampala 2026',
    dateText: 'June 27 2026',
    location: 'Kampala, Uganda',
    tag: 'Conference',
    description: 'Annual builder-focused conference for learners, founders, and developers.',
    registrationLink: 'https://devfestkampala.com',
    featured: true,
    eventStatus: 'Upcoming',
  },
  {
    _id: 'seed-event-2',
    _type: 'event',
    title: 'Chainlink Student Session',
    dateText: 'March 28 2026',
    location: 'Kyambogo University, Kampala',
    tag: 'Meetup',
    description: 'Hands-on DeFi and oracle concepts for student builders.',
    registrationLink: 'https://x.com/Chainlink__EA',
    featured: false,
    eventStatus: 'Past',
  },
  {
    _id: 'seed-opportunity-1',
    _type: 'opportunity',
    title: 'Binance Learn & Earn',
    category: 'Learn & Earn',
    description: 'Complete short crypto courses and earn rewards while learning.',
    link: 'https://academy.binance.com/',
    level: 'Beginner',
    icon: '🎓',
    active: true,
  },
  {
    _id: 'seed-opportunity-2',
    _type: 'opportunity',
    title: 'Ethereum Foundation ESP',
    category: 'Grants & Funding',
    description: 'Funding support for open-source work in the Ethereum ecosystem.',
    link: 'https://esp.ethereum.foundation/',
    level: 'Intermediate',
    icon: '💸',
    active: true,
  },
  {
    _id: 'seed-opportunity-3',
    _type: 'opportunity',
    title: 'ETHGlobal Hackathons',
    category: 'Hackathons',
    description: 'Build projects and compete in global Ethereum hackathons.',
    link: 'https://ethglobal.com/',
    level: 'All Levels',
    icon: '⚡',
    active: true,
  },
  {
    _id: 'seed-opportunity-4',
    _type: 'opportunity',
    title: 'Web3.career',
    category: 'Jobs & Internships',
    description: 'Remote and global web3 jobs curated for all experience levels.',
    link: 'https://web3.career/',
    level: 'All Levels',
    icon: '💼',
    active: true,
  },
  {
    _id: 'seed-track-1',
    _type: 'learningTrack',
    trackNumber: 1,
    label: 'TRACK 01',
    title: 'Blockchain Basics',
    subtitle: 'No code required',
    icon: '🔗',
    color: '#34d399',
    level: 'Beginner',
    duration: '2-3 weeks',
    description: 'Foundational concepts for anyone entering blockchain and web3.',
    resources: [
      {
        _type: 'resourceItem',
        resourceTitle: 'But How Does Bitcoin Actually Work?',
        url: 'https://www.youtube.com/watch?v=bBC-nXj3Ng4',
        estimatedTime: '26 min',
        type: 'Video',
      },
      {
        _type: 'resourceItem',
        resourceTitle: 'Blockchain 101 Interactive Demo',
        url: 'https://andersbrownworth.com/blockchain/',
        estimatedTime: '30 min',
        type: 'Interactive',
      },
    ],
  },
  {
    _id: 'seed-track-2',
    _type: 'learningTrack',
    trackNumber: 2,
    label: 'TRACK 02',
    title: 'Ethereum & Solidity',
    subtitle: 'Smart contracts',
    icon: '🧠',
    color: '#4d6ff0',
    level: 'Intermediate',
    duration: '4-6 weeks',
    description: 'Write and test your first smart contracts in Solidity.',
    resources: [
      {
        _type: 'resourceItem',
        resourceTitle: 'CryptoZombies',
        url: 'https://cryptozombies.io/',
        estimatedTime: '10 hrs',
        type: 'Course',
      },
      {
        _type: 'resourceItem',
        resourceTitle: 'Solidity Documentation',
        url: 'https://docs.soliditylang.org/',
        estimatedTime: 'Reference',
        type: 'Docs',
      },
    ],
  },
  {
    _id: 'seed-team-1',
    _type: 'teamMember',
    name: 'Irankunda Musa',
    role: 'Founder & Community Lead',
    bio: 'Building DigitalSphere to make blockchain education and opportunities accessible across Africa.',
    initials: 'IM',
    color: '#4d6ff0',
    linkedinUrl: 'https://www.linkedin.com/in/musa-irankunda-2073a2322',
    xUrl: 'https://x.com/irankundaMusa',
    active: true,
    order: 1,
  },
  {
    _id: 'seed-team-2',
    _type: 'teamMember',
    name: 'Irinatwe Bright',
    role: 'Co-Founder & Content Lead',
    bio: 'Leads content strategy and curates practical learning paths for new entrants.',
    initials: 'IB',
    color: '#34d399',
    linkedinUrl: 'https://www.linkedin.com/in/irinatwebright1010',
    xUrl: 'https://x.com/IrinatweBright',
    active: true,
    order: 2,
  },
  {
    _id: 'seed-resource-1',
    _type: 'resourceItem',
    title: 'Remix IDE',
    category: 'Developer Tools',
    description: 'Browser-based editor to write and deploy Solidity quickly.',
    link: 'https://remix.ethereum.org/',
    tag: 'Essential',
    icon: '🛠️',
    active: true,
  },
  {
    _id: 'seed-resource-2',
    _type: 'resourceItem',
    title: 'Cyfrin Updraft',
    category: 'Learning Platforms',
    description: 'Structured smart contract learning content by industry experts.',
    link: 'https://updraft.cyfrin.io/',
    tag: 'Free',
    icon: '📚',
    active: true,
  },
  {
    _id: 'seed-resource-3',
    _type: 'resourceItem',
    title: 'Blockchain Association of Uganda',
    category: 'Uganda & Africa Blockchain',
    description: 'Local ecosystem association, events, and policy conversations.',
    link: 'https://bau.ug/',
    tag: 'Uganda',
    icon: '🌍',
    active: true,
  },
  {
    _id: 'seed-resource-4',
    _type: 'resourceItem',
    title: 'Etherscan',
    category: 'Wallets & Testnet Tools',
    description: 'Inspect wallet and contract activity on Ethereum.',
    link: 'https://etherscan.io/',
    tag: 'Tool',
    icon: '🔑',
    active: true,
  },
  {
    _id: 'seed-community-1',
    _type: 'communityLink',
    platformName: 'Telegram',
    handle: '@digitalsphereug',
    link: 'https://t.me/digitalsphereug',
    icon: '📣',
    description: 'Main community channel for updates and opportunities.',
    memberCount: '313+',
    type: 'Primary',
    active: true,
    order: 1,
  },
  {
    _id: 'seed-community-2',
    _type: 'communityLink',
    platformName: 'WhatsApp',
    handle: 'DigitalSphereUg',
    link: 'https://whatsapp.com/channel/0029VbAqlOlHFxP25IPcQw0l',
    icon: '💬',
    description: 'Community discussions and announcements.',
    memberCount: '146',
    type: 'Secondary',
    active: true,
    order: 2,
  },
  {
    _id: 'seed-community-3',
    _type: 'communityLink',
    platformName: 'ETHNile',
    handle: '@ethnile',
    link: 'https://ethnileug.xyz/',
    icon: '🌐',
    description: 'Ecosystem partner community and event network.',
    memberCount: '',
    type: 'Ecosystem',
    active: true,
    order: 3,
  },
  {
    _id: 'seed-faq-1',
    _type: 'faqItem',
    question: 'Is everything on this platform really free?',
    answer: 'Yes. Learning tracks, curated resources, and opportunities are free to access.',
    order: 1,
    active: true,
  },
  {
    _id: 'seed-faq-2',
    _type: 'faqItem',
    question: 'Do I need coding experience to start?',
    answer: 'No. Track 1 is built for beginners with no coding background.',
    order: 2,
    active: true,
  },
  {
    _id: 'seed-faq-3',
    _type: 'faqItem',
    question: 'How do I join the community?',
    answer: 'Use the Telegram, WhatsApp, or X links on the Community page.',
    order: 3,
    active: true,
  },
  {
    _id: 'seed-campus-1',
    _type: 'campusChapter',
    universityName: 'Makerere University',
    status: 'Coming Soon',
    chapterLeadName: '',
    location: 'Kampala',
    order: 1,
  },
  {
    _id: 'seed-campus-2',
    _type: 'campusChapter',
    universityName: 'Kyambogo University',
    status: 'Coming Soon',
    chapterLeadName: '',
    location: 'Kampala',
    order: 2,
  },
]

const tx = client.transaction()
for (const doc of docs) {
  if (refreshMode && preserveSettings && doc._id === 'siteSettings') {
    // Keep live settings when running safe refresh.
    tx.createIfNotExists(doc)
  } else if (refreshMode) {
    tx.createOrReplace(doc)
  } else {
    tx.createIfNotExists(doc)
  }
}

try {
  await tx.commit()
  const mutationMode = refreshMode ? 'createOrReplace' : 'createIfNotExists'
  const modeLabel = refreshMode && preserveSettings ? `${mutationMode} + preserve siteSettings` : mutationMode
  console.log(`Seed complete. Processed ${docs.length} starter documents (${modeLabel}).`)
  if (!refreshMode) {
    console.log('Tip: run with --refresh to overwrite existing starter docs.')
  }
  if (refreshMode && !preserveSettings) {
    console.log('Tip: run with --preserve-settings to keep existing site settings unchanged.')
  }
} catch (error) {
  console.error('SEED_ERROR:', error?.message || String(error))
  process.exit(1)
}
