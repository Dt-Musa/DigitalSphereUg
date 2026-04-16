import {sanityClient, urlFor} from './sanityClient'

const CATEGORY_COLORS = {
  'Learn & Earn': '#38bdf8',
  'Grants & Funding': '#34d399',
  Hackathons: '#4d6ff0',
  'Jobs & Internships': '#818cf8',
}

const CATEGORY_EMOJI = {
  'Learn & Earn': '🎓',
  'Grants & Funding': '💸',
  Hackathons: '⚡',
  'Jobs & Internships': '💼',
}

const RESOURCE_CATEGORY_COLORS = {
  'Developer Tools': '#4d6ff0',
  'Learning Platforms': '#34d399',
  'Uganda & Africa Blockchain': '#38bdf8',
  'Wallets & Testnet Tools': '#818cf8',
}

const RESOURCE_CATEGORY_EMOJI = {
  'Developer Tools': '🛠️',
  'Learning Platforms': '📚',
  'Uganda & Africa Blockchain': '🌍',
  'Wallets & Testnet Tools': '🔑',
}

const EVENT_TAG_COLORS = {
  Conference: '#38bdf8',
  Meetup: '#34d399',
  Summit: '#4d6ff0',
  Programme: '#818cf8',
  Workshop: '#38bdf8',
  Community: '#34d399',
}

const COMMUNITY_COLORS = {
  Primary: '#2AABEE',
  Secondary: '#94a3b8',
  Ecosystem: '#38bdf8',
}

const OPPORTUNITY_CATEGORY_ORDER = ['Learn & Earn', 'Grants & Funding', 'Hackathons', 'Jobs & Internships']
const RESOURCE_CATEGORY_ORDER = ['Developer Tools', 'Learning Platforms', 'Uganda & Africa Blockchain', 'Wallets & Testnet Tools']

const resolveImageUrl = (image) => {
  if (!image) return null
  try {
    return urlFor(image).width(1600).fit('max').auto('format').url()
  } catch {
    return null
  }
}

const resolveHexColor = (value, fallback) => {
  if (typeof value === 'string' && value.trim()) {
    return value
  }
  if (value?.hex) {
    return value.hex
  }
  return fallback
}

const blockArrayToPlainText = (blocks) => {
  if (!Array.isArray(blocks)) return ''

  return blocks
    .map((block) => {
      if (block?._type !== 'block' || !Array.isArray(block.children)) return ''
      return block.children.map((child) => child?.text || '').join('')
    })
    .filter(Boolean)
    .join('\n\n')
}

const sortCategories = (categories, preferredOrder) => {
  const rank = new Map(preferredOrder.map((name, index) => [name, index]))
  const fallbackRank = preferredOrder.length

  return [...categories].sort((a, b) => {
    const aRank = rank.has(a) ? rank.get(a) : fallbackRank
    const bRank = rank.has(b) ? rank.get(b) : fallbackRank
    if (aRank !== bRank) return aRank - bRank
    return String(a).localeCompare(String(b))
  })
}

const query = `{
  "siteSettings": *[_type == "siteSettings" && _id == "siteSettings"][0]{
    siteTitle,
    siteDescription,
    siteUrl,
    founderName,
    telegramLink,
    xLink,
    whatsAppLink,
    communityMemberCount,
    footerDisclaimerText,
    metaDescription,
    logo
  },
  "posts": *[_type == "blogPost"] | order(featured desc, publishedDate desc){
    title,
    "slug": slug.current,
    excerpt,
    body,
    tag,
    tagColor,
    author,
    publishedDate,
    readTime,
    featured,
    image,
    coverImage
  },
  "events": *[_type == "event"] | order(featured desc){
    title,
    startDate,
    dateText,
    location,
    tag,
    description,
    registrationLink,
    featured,
    eventStatus,
    image
  },
  "opportunities": *[_type == "opportunity"] | order(category asc, title asc){
    title,
    category,
    description,
    link,
    level,
    logo,
    active
  },
  "learningTracks": *[_type == "learningTrack"] | order(trackNumber asc){
    trackNumber,
    label,
    title,
    subtitle,
    icon,
    color,
    level,
    duration,
    description,
    resources[]{
      resourceTitle,
      url,
      estimatedTime,
      type
    }
  },
  "teamMembers": *[_type == "teamMember"] | order(order asc){
    name,
    role,
    bio,
    photo,
    initials,
    color,
    linkedinUrl,
    xUrl,
    active,
    order
  },
  "resourceItems": *[_type == "resourceItem" && active == true] | order(category asc, title asc){
    title,
    category,
    description,
    link,
    tag,
    logo,
    active
  },
  "communityLinks": *[_type == "communityLink" && active == true] | order(order asc){
    platformName,
    handle,
    link,
    logo,
    description,
    memberCount,
    type,
    active,
    order
  },
  "faqItems": *[_type == "faqItem" && active == true] | order(order asc){
    question,
    answer,
    order,
    active
  },
  "campusChapters": *[_type == "campusChapter"] | order(order asc){
    universityName,
    status,
    chapterLeadName,
    location,
    order
  },
  "eventsGallery": *[_type == "eventGallery"] | order(year desc, date desc){
    eventName,
    date,
    location,
    photos,
    description,
    year
  }
}`

export const fetchCmsContent = async () => {
  const data = await sanityClient.fetch(query)

  const posts = (data.posts || []).map((post, index) => ({
    id: index + 1,
    slug: post.slug,
    author: post.author,
    tag: post.tag,
    tagColor: resolveHexColor(post.tagColor, '#4d6ff0'),
    image: resolveImageUrl(post.image) || resolveImageUrl(post.coverImage),
    coverImage: resolveImageUrl(post.coverImage),
    title: post.title,
    excerpt: post.excerpt,
    date: post.publishedDate ? new Date(post.publishedDate).toLocaleDateString('en-US', {month: 'long', year: 'numeric'}) : '',
    read: post.readTime,
    body: blockArrayToPlainText(post.body),
    bodyPortable: post.body || [],
    featured: Boolean(post.featured),
  }))

  const allEvents = (data.events || []).map((event) => ({
    title: event.title,
    startDate: event.startDate,
    date: event.dateText,
    status: event.eventStatus,
    location: event.location,
    tag: event.tag,
    color: EVENT_TAG_COLORS[event.tag] || '#4d6ff0',
    featured: Boolean(event.featured),
    image: resolveImageUrl(event.image),
    desc: event.description,
    recap: event.description,
    link: event.registrationLink,
  }))

  const events = allEvents
  const pastEvents = []

  const opportunityItems = (data.opportunities || []).filter((item) => item?.category && item.active !== false)
  const opportunityCategories = sortCategories(
    [...new Set(opportunityItems.map((item) => item.category))],
    OPPORTUNITY_CATEGORY_ORDER,
  )

  const opportunitiesByCategory = opportunityCategories.map((category) => ({
    cat: category,
    color: CATEGORY_COLORS[category] || '#4d6ff0',
    iconEmoji: CATEGORY_EMOJI[category] || '✨',
    items: opportunityItems
      .filter((item) => item.category === category)
      .map((item) => ({
        title: item.title,
        desc: item.description,
        link: item.link,
        level: item.level,
        logo: resolveImageUrl(item.logo),
      })),
  }))

  const tracks = (data.learningTracks || []).map((track) => ({
    id: track.trackNumber,
    slug: `track-${track.trackNumber}-${String(track.title || '').toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-')}`,
    iconEmoji: track.icon,
    color: resolveHexColor(track.color, '#4d6ff0'),
    label: track.label,
    title: track.title,
    sub: track.subtitle,
    level: track.level,
    time: track.duration,
    desc: track.description,
    resources: (track.resources || []).map((resource) => ({
      title: resource.resourceTitle,
      url: resource.url,
      time: resource.estimatedTime,
      type: resource.type,
    })),
  }))

  const team = (data.teamMembers || []).map((member) => ({
    name: member.name,
    role: member.role,
    bio: member.bio,
    avatar: resolveImageUrl(member.photo),
    initials: member.initials,
    color: resolveHexColor(member.color, '#4d6ff0'),
    linkedin: member.linkedinUrl,
    x: member.xUrl,
    active: Boolean(member.active),
    order: member.order,
  }))

  const resourceItems = (data.resourceItems || []).filter((item) => item?.category)
  const resourceCategories = sortCategories(
    [...new Set(resourceItems.map((item) => item.category))],
    RESOURCE_CATEGORY_ORDER,
  )

  const resourcesMap = resourceCategories.map((category) => ({
    cat: category,
    color: RESOURCE_CATEGORY_COLORS[category] || '#4d6ff0',
    iconEmoji: RESOURCE_CATEGORY_EMOJI[category] || '📦',
    items: resourceItems
      .filter((item) => item.category === category)
      .map((item) => ({
        title: item.title,
        desc: item.description,
        link: item.link,
        tag: item.tag,
        logo: resolveImageUrl(item.logo),
      })),
  }))

  const faqs = (data.faqItems || []).map((item) => ({
    q: item.question,
    a: item.answer,
  }))

  const communityLinks = (data.communityLinks || []).map((item) => ({
    name: item.platformName,
    handle: item.handle,
    link: item.link,
    logo: resolveImageUrl(item.logo),
    desc: item.description,
    members: item.memberCount,
    type: item.type,
    color: COMMUNITY_COLORS[item.type] || '#94a3b8',
  }))

  const campusChapters = (data.campusChapters || []).map((chapter) => ({
    universityName: chapter.universityName,
    status: chapter.status,
    chapterLeadName: chapter.chapterLeadName,
    location: chapter.location,
    order: chapter.order,
  }))

  const galleryItems = (data.eventsGallery || []).flatMap((entry) =>
    (entry.photos || []).map((photo, index) => ({
      image: resolveImageUrl(photo),
      title: entry.eventName,
      date: entry.date,
      location: entry.location,
      summary: entry.description,
      year: entry.year,
      index,
    })),
  ).filter((item) => Boolean(item.image))

  const settings = data.siteSettings
    ? {
        siteTitle: data.siteSettings.siteTitle,
        siteDescription: data.siteSettings.siteDescription,
        siteUrl: data.siteSettings.siteUrl,
        founderName: data.siteSettings.founderName,
        telegramLink: data.siteSettings.telegramLink,
        xLink: data.siteSettings.xLink,
        whatsAppLink: data.siteSettings.whatsAppLink,
        communityMemberCount: data.siteSettings.communityMemberCount,
        footerDisclaimerText: data.siteSettings.footerDisclaimerText,
        metaDescription: data.siteSettings.metaDescription,
        logoUrl: resolveImageUrl(data.siteSettings.logo),
      }
    : null

  return {
    posts,
    events,
    pastEvents,
    opportunitiesByCategory,
    tracks,
    team,
    resourcesMap,
    faqs,
    communityLinks,
    campusChapters,
    galleryItems,
    settings,
  }
}
