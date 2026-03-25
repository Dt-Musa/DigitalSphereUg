import { useEffect, useState } from "react";
import {
  BsArrowLeft,
  BsArrowRight,
  BsBook,
  BsBoxes,
  BsBriefcase,
  BsCalendarEvent,
  BsCashStack,
  BsCheckLg,
  BsChevronDown,
  BsCodeSlash,
  BsCurrencyBitcoin,
  BsGeoAlt,
  BsGlobe2,
  BsGlobeEuropeAfrica,
  BsKey,
  BsLightningCharge,
  BsLink45Deg,
  BsLinkedin,
  BsList,
  BsMortarboard,
  BsPatchCheck,
  BsPlus,
  BsTelegram,
  BsTools,
  BsTrophy,
  BsTwitterX,
  BsWhatsapp,
  BsX,
  BsMoonStars,
  BsSun,
} from "react-icons/bs";
import musaImage from "./assets/images/Musa.jpeg";
import brightImage from "./assets/images/Bright.jpeg";
import rwegoImage from "./assets/images/Rwego.jpeg";
import ethnileGroupHero from "./assets/hero/ethnile-group.jpg.jpg";
import filecoinGroupPhoto from "./assets/gallery/filecoin-group.jpg.jpg";
import stellarGroupPhoto from "./assets/about/stellar-group.jpg.jpg";
import kyambogoLecturePhoto from "./assets/story/kyambongo-lecture.jpg.jpg";
import chainlinkRooftopPhoto from "./assets/community/chainlink-rooftop.jpg.jpg";
import chainlinkStreetGroupPhoto from "./assets/community/chainlink.jpg.jpg";
import bauLogoImage from "./assets/community/blockchain-association of Uganda.jpg";
import celoLogoImage from "./assets/community/celo.jpg";
import ethnileLogoImage from "./assets/community/ethnile.jpg";
import chainlinkEaLogoImage from "./assets/community/20260325_020845.jpg";
import stellarEaLogoImage from "./assets/community/stellar.jpg";
import developerDaoLogoImage from "./assets/community/develperDAO.png";
import learnWeb3LogoImage from "./assets/community/learnWeb3.jpg";
import algorandAfricaLogoImage from "./assets/community/algorand.jpg";
import web3AfricaLogoImage from "./assets/community/web3Africa.jpg";
import ethnileVenuePhoto from "./assets/gallery/ethnile-sponserbanner.jpg.jpg";
import devfestFlyerPhoto from "./assets/events/devfest-2026-flyer.jpeg";
import chainlinkFlyerPhoto from "./assets/events/chainlink-flyer.jpg.jpg";
import buildlSessionPhoto from "./assets/gallery/buildl-session group.jpg";
import outdoorLaptopPhoto from "./assets/gallery/outdoor-laptop session.jpg";
import devfestCrowdPhoto from "./assets/gallery/devfest-crowd.jpg.jpg";
import kyambogoRoomPhoto from "./assets/gallery/kyambongo-lecture -room.jpg.jpg";
import chainlinkGroupGalleryPhoto from "./assets/gallery/chainlink-group.jpg.jpg";
import buildAfricaHubPhoto from "./assets/gallery/BuildAfrica-National ICT HUB, kampala.jpg";
import avalancheScenesPhoto from "./assets/gallery/scenes from Avaranche.jpg";
import ethnileEventPhoto from "./assets/gallery/EthNileEvent.jpg";
import thirdwebResourceLogo from "./assets/resources/thirdweb.jpg";
import metaMaskResourceLogo from "./assets/resources/meta-mask.jpg";
import hardhatResourceLogo from "./assets/resources/hardhat.jpg";
import foundryResourceLogo from "./assets/resources/foundry.png";
import etherscanResourceLogo from "./assets/resources/ethscan.jpg";
import ethereumOrgResourceLogo from "./assets/resources/etherium.org.jpg";
import cyfrinResourceLogo from "./assets/resources/cyfrin.jpg";
import cryptoZombiesResourceLogo from "./assets/resources/crypto zombies.jpg";
import chainlistResourceLogo from "./assets/resources/chainlist.jpg";
import bauResourceLogo from "./assets/resources/blockchain-association-of-uganda.jpg";
import alchemyResourceLogo from "./assets/resources/alchemy.png";
import Hero from "./Hero";

// ─── Colors ───────────────────────────────────────────────────────
const THEMES = {
  dark: {
    bg:"#05070f", bg2:"#080c18", surface:"#0d1120", card:"#101525", cardHov:"#141a2e",
    border:"#1c2540", borderHi:"#2847D4", navy:"#0a1128",
    blue:"#2847D4", blueLt:"#4d6ff0", blueDim:"#1a35b0",
    cyan:"#38bdf8", green:"#34d399", amber:"#38bdf8", purple:"#818cf8", accent:"#f0b429",
    text:"#eef2ff", textSub:"#a4b2ca", textDim:"#6f82a0", white:"#ffffff",
  },
  light: {
    bg:"#f6f8fc", bg2:"#eef2fb", surface:"#ffffff", card:"#ffffff", cardHov:"#f2f5fd",
    border:"#d6ddf0", borderHi:"#2847D4", navy:"#dfe7fa",
    blue:"#2847D4", blueLt:"#4d6ff0", blueDim:"#1a35b0",
    cyan:"#0ea5e9", green:"#10b981", amber:"#0ea5e9", purple:"#6d78e8", accent:"#9f5a00",
    text:"#0b1220", textSub:"#334155", textDim:"#55657d", white:"#ffffff",
  },
};

let C = THEMES.dark;

// ─── Data ─────────────────────────────────────────────────────────
const TRACKS = [
  { id:1, icon:BsLink45Deg, color:C.green, label:"TRACK 01", title:"Blockchain Basics", sub:"No code required", level:"Beginner", time:"2–3 weeks", desc:"Understand how blockchain works from the ground up — concepts, use cases, and why it matters for Africa. Used by students at Makerere, Kyambogo & beyond.", resources:[
    { title:"But How Does Bitcoin Actually Work?", url:"https://www.youtube.com/watch?v=bBC-nXj3Ng4", time:"26 min", type:"Video" },
    { title:"Blockchain 101 — Anders Brownworth", url:"https://andersbrownworth.com/blockchain/", time:"30 min", type:"Interactive" },
    { title:"IBM — What is Blockchain?", url:"https://www.ibm.com/topics/blockchain", time:"1 hr", type:"Article" },
    { title:"CoinDesk Learn — Crypto Basics", url:"https://www.coindesk.com/learn/", time:"3 hrs", type:"Course" },
    { title:"MIT — Blockchain & Money", url:"https://ocw.mit.edu/courses/15-s12-blockchain-and-money-fall-2018/", time:"10 hrs", type:"Course" },
  ]},
  { id:2, icon:BsCurrencyBitcoin, color:C.blueLt, label:"TRACK 02", title:"Ethereum & Solidity", sub:"Smart contracts", level:"Beginner–Intermediate", time:"4–6 weeks", desc:"Write your first smart contracts in Solidity and deploy them to the Ethereum blockchain.", resources:[
    { title:"CryptoZombies — Learn Solidity", url:"https://cryptozombies.io/", time:"10 hrs", type:"Interactive" },
    { title:"Cyfrin Updraft — Full Solidity Course", url:"https://updraft.cyfrin.io/", time:"40 hrs", type:"Course" },
    { title:"Patrick Collins — Solidity 2024", url:"https://www.youtube.com/watch?v=umepbfKp5rI", time:"27 hrs", type:"Video" },
    { title:"freeCodeCamp Solidity Tutorial", url:"https://www.youtube.com/watch?v=M576WGiDBdQ", time:"16 hrs", type:"Video" },
    { title:"Official Solidity Docs", url:"https://docs.soliditylang.org/", time:"Reference", type:"Docs" },
  ]},
  { id:3, icon:BsBoxes, color:C.cyan, label:"TRACK 03", title:"Build Your First dApp", sub:"From idea to deployed", level:"Intermediate", time:"4–8 weeks", desc:"Build and deploy a real decentralised application using modern Web3 tools and frameworks.", resources:[
    { title:"Alchemy University — Road to Web3", url:"https://university.alchemy.com/", time:"Free", type:"Course" },
    { title:"LearnWeb3 DAO — All Tracks", url:"https://learnweb3.io/", time:"Free", type:"Course" },
    { title:"Buildspace Projects", url:"https://buildspace.so/", time:"Free", type:"Project" },
    { title:"Hardhat Documentation", url:"https://hardhat.org/docs", time:"Reference", type:"Docs" },
    { title:"Thirdweb — Web3 App Builder", url:"https://thirdweb.com/", time:"Free", type:"Tool" },
  ]},
  { id:4, icon:BsBriefcase, color:C.purple, label:"TRACK 04", title:"Web3 Career in Africa", sub:"Uganda to the world", level:"All levels", time:"Ongoing", desc:"Navigate the Web3 job market, find grants and opportunities, and build your on-chain reputation from Uganda.", resources:[
    { title:"Web3.career — Job Board", url:"https://web3.career/", time:"Job Board", type:"Jobs" },
    { title:"Gitcoin — Bounties & Grants", url:"https://gitcoin.co/", time:"Ongoing", type:"Earn" },
    { title:"Binance Learn & Earn", url:"https://academy.binance.com/", time:"Free", type:"Course" },
    { title:"Developer DAO Community", url:"https://www.developerdao.com/", time:"Community", type:"Community" },
    { title:"Ethereum Foundation — ESP Grants", url:"https://esp.ethereum.foundation/", time:"Grants", type:"Funding" },
  ]},
];

const EVENTS = [
  { title:"Blockchain DevFest Kampala 2026", date:"June 27, 2026", location:"Kampala, Uganda", tag:"Conference", color:C.cyan, featured:true, image:devfestFlyerPhoto, imageFit:"contain", desc:"Africa's premier Web3 developer conference. Theme: Responsible Decentralized AI. Hackathon, workshops, and networking.", link:"https://devfestkampala.com" },
  { title:"DeFi with Chainlink Oracles", date:"March 28, 2026", location:"CLB BOARD ROOM, KYAMBONGO", tag:"University Session", color:C.cyan, featured:true, image:chainlinkFlyerPhoto, imageFit:"contain", desc:"Join us at Kyambogo University for a brief introduction to decentralized finance (DeFi) and how Chainlink oracles power real-world blockchain applications.", link:"https://luma.com/i0sdk4gq?tk=9qU4oK" },
];

const PAST_EVENTS = [
  { title:"Kampala Blockchain Summit 2025", date:"Ended —Nov, 25g 2025", location:"Kampala, Uganda", tag:"Summit", color:C.blueLt, image:"https://img.youtube.com/vi/U3uLtixzAYE/hqdefault.jpg", recap:"Summit session concluded. Watch the full live stream replay to catch talks and highlights.", link:"https://www.youtube.com/live/U3uLtixzAYE?si=bFh0jzv2tFgZwI-V" },
  { title:"ETHNile Kampala 2025", date:"October 2025", location:"Kampala, Uganda", tag:"Conference", color:C.blueLt, image:ethnileGroupHero, recap:"First major Ethereum-focused community gatherings in Kampala, bringing builders and students together.", link:"https://ethnileug.xyz/" },
  { title:"Chainlink Rooftop Session", date:"Early 2026", location:"Kampala, Uganda", tag:"Workshop", color:C.cyan, image:chainlinkRooftopPhoto, recap:"Hands-on learning session on oracles and practical DeFi use cases for local builders.", link:"https://x.com/Chainlink__EA" },
  { title:"BUIDL Africa Community Session", date:"2025", location:"Kampala, Uganda", tag:"Community", color:C.green, image:buildlSessionPhoto, recap:"Student-focused build session connecting learners to mentorship and project ideas.", link:"https://t.me/digitalsphereug" },
  { title:"GDG Kampala Web3 Meetup", date:"Ended — 2026", location:"Kampala, Uganda", tag:"Meetup", color:C.green, image:chainlinkStreetGroupPhoto, recap:"Regular Web3 meetups wrapped after a strong season of beginner-friendly talks, networking, and practical demos.", link:"https://gdg.community.dev/gdg-kampala/" },
  { title:"BAU Youth Blockchain Innovation", date:"Ended — 2026", location:"Uganda", tag:"Programme", color:C.purple, image:buildlSessionPhoto, recap:"BAU's youth innovation programme concluded after equipping local learners with blockchain foundations and growth pathways.", link:"https://bau.ug" },
];

const OPPS = [
  { cat:"Learn & Earn", color:C.cyan, icon:BsMortarboard, items:[
    { title:"Binance Learn & Earn", desc:"Complete short courses and earn crypto rewards.", link:"https://academy.binance.com/", level:"Beginner" },
    { title:"Coinbase Learn", desc:"Learn about crypto assets and earn small amounts.", link:"https://www.coinbase.com/learn", level:"Beginner" },
    { title:"Alchemy University", desc:"Free blockchain bootcamp with official certification.", link:"https://university.alchemy.com/", level:"All Levels" },
  ]},
  { cat:"Grants & Funding", color:C.green, icon:BsCashStack, items:[
    { title:"Ethereum Foundation — ESP", desc:"Small grants for builders contributing to the Ethereum ecosystem.", link:"https://esp.ethereum.foundation/", level:"Intermediate" },
    { title:"Gitcoin Grants", desc:"Community-funded grants for open source Web3 projects.", link:"https://gitcoin.co/grants", level:"All Levels" },
  ]},
  { cat:"Hackathons", color:C.blueLt, icon:BsLightningCharge, items:[
    { title:"DevFest Kampala Hackathon", desc:"Annual hackathon at Blockchain DevFest Kampala — June 2026.", link:"https://devfestkampala.com", level:"All Levels" },
    { title:"ETHGlobal Hackathons", desc:"Global online and in-person Ethereum hackathons with real prizes.", link:"https://ethglobal.com/", level:"Intermediate" },
    { title:"Chainlink Hackathon", desc:"Regular hackathons with prize pools for Web3 builders.", link:"https://chain.link/hackathon", level:"Intermediate" },
  ]},
  { cat:"Jobs & Internships", color:C.purple, icon:BsBriefcase, items:[
    { title:"Web3.career", desc:"Dedicated job board for remote and global Web3 roles.", link:"https://web3.career/", level:"All Levels" },
    { title:"Crypto Jobs List", desc:"Curated blockchain and crypto job listings worldwide.", link:"https://cryptojobslist.com/", level:"All Levels" },
    { title:"Gitcoin Bounties", desc:"Get paid to contribute to open source blockchain projects.", link:"https://gitcoin.co/explorer", level:"Beginner–Intermediate" },
  ]},
];

const POSTS = [
  { id:1, author:"Irankunda Musa", tag:"Education", tagColor:C.green, title:"What is Blockchain — Explained for Ugandans", excerpt:"Forget the jargon. Here's what blockchain actually is, why it matters for Africa, and why Uganda is positioned to benefit more than most.", date:"March 2026", read:"5 min read", body:"Blockchain is simply a digital record book that nobody owns but everyone can see. Instead of a bank keeping your transaction history on their private servers, blockchain stores it across thousands of computers worldwide. No single person, company or government can change it.\n\nFor Uganda and Africa broadly, this is significant. Think about land ownership disputes, remittances from the diaspora eating 10% in fees, or the difficulty of building a credit history when you're unbanked. Blockchain has practical, near-term answers to all of these.\n\nThe opportunity is real. East Africa already leads the world in mobile money adoption. Adding blockchain on top of that existing infrastructure is a natural next step — and young Ugandans who understand both worlds will be the ones who build it.\n\nYou don't need to be a programmer to be part of this. Understanding the technology, the ecosystem, and the problems it solves is itself a skill the industry desperately needs." },
  { id:2, author:"Irinatwe Bright", tag:"Resources", tagColor:C.blueLt, title:"Top Free Resources to Start Your Web3 Career in 2026", excerpt:"You don't need to spend a single shilling to start learning blockchain development. Here are the best free platforms available right now.", date:"March 2026", read:"7 min read", body:"The barrier to entering Web3 is not money. It is knowing where to start. Here is the honest answer.\n\nFor complete beginners, start with CryptoZombies. It teaches Solidity — the language used to write Ethereum smart contracts — through a game. It sounds simple. It is genuinely the best beginner Solidity course online.\n\nOnce you have the basics, move to Cyfrin Updraft. Patrick Collins built this platform specifically to train the next generation of blockchain developers. It is completely free and professionally produced.\n\nFor building actual applications, Alchemy University's Road to Web3 is unmatched. It walks you from zero to deployed dApp in a structured programme with real projects.\n\nNone of these cost anything. All of them are recognised by employers globally. Start today." },
  { id:3, author:"Irankunda Musa", tag:"Opportunities", tagColor:C.cyan, title:"Blockchain Opportunities in Uganda Right Now", excerpt:"From the Blockchain Association of Uganda to DevFest Kampala, here's what's happening locally — and how to position yourself to benefit.", date:"March 2026", read:"6 min read", body:"Uganda's blockchain ecosystem is small but growing fast. Here is what is happening now and how to get involved.\n\nThe Blockchain Association of Uganda (BAU) is the country's main industry body. They run programmes, connect companies with talent, and advocate for blockchain-friendly policy.\n\nBlockchain DevFest Kampala is the flagship technical event. Every year it brings together developers, entrepreneurs, and investors from across Africa. Attending — even as a first-timer — opens doors that LinkedIn cannot.\n\nGlobally, platforms like Gitcoin pay developers in cryptocurrency to fix bugs and contribute to open source projects. A Ugandan with solid Solidity skills can earn in USD or ETH from their laptop in Kampala.\n\nThe window is open. The question is whether you walk through it." },
];

const GALLERY_ITEMS = [
  { image:devfestCrowdPhoto, title:"Blockchain DevFest Kampala 2026", date:"June 27, 2026", location:"Kampala, Uganda", summary:"Uganda's biggest Web3 developer conference. DigitalSphereUg was in the room." },
  { image:ethnileGroupHero, title:"ETHNile Kampala Community Day", date:"October 2025", location:"Kampala, Uganda", summary:"Builders, students, and founders connected around Ethereum education and real collaboration." },
  { image:ethnileEventPhoto, title:"ETHNile Event Session", date:"October 2025", location:"Kampala, Uganda", summary:"We joined focused talks on blockchain adoption and practical next steps for local talent." },
  { image:chainlinkRooftopPhoto, title:"Chainlink Rooftop Session", date:"Early 2026", location:"Kampala, Uganda", summary:"We attended to deepen our understanding of oracle-powered applications for African use cases." },
  { image:chainlinkGroupGalleryPhoto, title:"Chainlink Builder Meetup", date:"2026", location:"Kampala, Uganda", summary:"Developers met for a practical session on smart contract tooling and community building." },
  { image:buildAfricaHubPhoto, title:"BuildAfrica National ICT Hub Meetup", date:"2026", location:"Kampala, Uganda", summary:"DigitalSphereUg showed up to support youth-driven innovation and hands-on technical learning." },
  { image:filecoinGroupPhoto, title:"Filecoin Community Session", date:"2025", location:"Kampala, Uganda", summary:"We attended to explore decentralized storage opportunities and ecosystem onboarding paths." },
  { image:avalancheScenesPhoto, title:"Avalanche Community Event", date:"2026", location:"Kampala, Uganda", summary:"The event brought together regional builders to discuss scalability, tooling, and product execution." },
  { image:kyambogoLecturePhoto, title:"Kyambogo University Lecture", date:"2026", location:"Kampala, Uganda", summary:"Students engaged directly with Web3 career pathways and beginner-friendly learning routes." },
  { image:stellarGroupPhoto, title:"Stellar Group Session", date:"2026", location:"Kampala, Uganda", summary:"We joined the session to connect with East African builders and expand practical developer exposure." },
  { image:ethnileVenuePhoto, title:"ETHNile Venue Day", date:"2025", location:"Kampala, Uganda", summary:"The gathering highlighted ecosystem partnerships and community-led momentum in Uganda." },
  { image:kyambogoRoomPhoto, title:"Kyambogo Session Room Meetup", date:"2026", location:"Kampala, Uganda", summary:"DigitalSphereUg joined learners for technical discussions and local builder networking." },
];

const FEATURED_GALLERY_ITEMS = GALLERY_ITEMS.slice(0, 4);

// ─── Team Data ────────────────────────────────────────────────────
const TEAM = [
  {
    name: "Irankunda Musa",
    role: "Founder & Community Lead",
    bio: "Founded DigitalSphereUg to create a free student-led platform that gives every Ugandan a clear, free path into the blockchain and Web3 ecosystem. Passionate about building an accessible and local community.",
    avatar: musaImage,
    initials: "M",
    color: C.blueLt,
    linkedin: "https://www.linkedin.com/in/musa-irankunda-2073a2322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    x: "https://x.com/irankundaMusa",
    active: true,
  },
  {
    name: "Irinatwe Bright",
    role: "Co-Founder & Content Lead",
    bio: "Leads content strategy. Curates high-quality blockchain learning resources and keeps the blog updated with practical, beginner-friendly content tailored specifically for Ugandan learners.",
    avatar: brightImage,
    initials: "CL",
    color: C.green,
    linkedin: "https://linkedin.com/in/your-linkedin-here",
    x: "https://x.com/your-x-handle-here",
    active: true,
  },
  {
    name: "Rwego Edward",
    role: "Technical Lead",
    bio: "Edward Rwego is the person who makes things actually work. As Technical Lead at DigitalSphereUg, he builds and mantains the platform, leads technical sessions, and makes sure Ugandans have right tools they need to enter the blockchain ecosystem.",
    avatar: rwegoImage,
    initials: "TL",
    color: C.textDim,
    linkedin: "https://linkedin.com/in/your-linkedin-here",
    x: "https://x.com/your-x-handle-here",
    active: true,
  },
];

// ─── FAQ Data ─────────────────────────────────────────────────────
const FAQS = [
  { q:"Is everything on this platform really free?", a:"Yes — completely. Every course, resource, event listing, and opportunity on DigitalSphereUg is free. No subscription, no payment, no catch. That is the whole point." },
  { q:"Do I need coding experience to start?", a:"Not at all. Track 1 (Blockchain Basics) is designed for complete beginners with zero technical background. You learn what blockchain is, why it matters, and how it works — no code required." },
  { q:"I'm not a university student — can I still join?", a:"Absolutely. DigitalSphereUg is open to every Ugandan and anyone interested in blockchain — students, professionals, entrepreneurs, and curious individuals at any stage of life." },
  { q:"Which track should I start with?", a:"If you have never studied blockchain before, start with Track 1: Blockchain Basics. If you already understand the concepts and want to write code, go straight to Track 2: Ethereum & Solidity." },
  { q:"How do I join the community?", a:"Click the Join Community button at the top of the page or visit the Community page. Our main community hub is on Telegram — join there for daily resources, updates, and conversations with other learners." },
  { q:"Can I contribute to the platform?", a:"Yes. We welcome blog posts, resource suggestions, event submissions, and campus chapter leads. Reach out through our Telegram channel and we will get back to you." },
];

// ─── Resources Data ───────────────────────────────────────────────
const RESOURCES_DATA = [
  { cat:"Developer Tools", icon:BsTools, color:C.blueLt, items:[
    { title:"Remix IDE", desc:"Browser-based Solidity editor — write and deploy smart contracts instantly, no setup needed.", link:"https://remix.ethereum.org/", tag:"Essential" },
    { title:"MetaMask", desc:"The most widely used Ethereum wallet and browser extension. You need this to interact with dApps.", link:"https://metamask.io/", tag:"Essential", logo:metaMaskResourceLogo },
    { title:"Hardhat", desc:"Professional development environment for building, testing, and deploying smart contracts.", link:"https://hardhat.org/", tag:"Intermediate", logo:hardhatResourceLogo },
    { title:"Foundry", desc:"Fast, portable toolkit for Ethereum development written in Rust.", link:"https://getfoundry.sh/", tag:"Advanced", logo:foundryResourceLogo },
    { title:"Thirdweb", desc:"Build Web3 apps without needing to write complex smart contract code from scratch.", link:"https://thirdweb.com/", tag:"Beginner", logo:thirdwebResourceLogo },
  ]},
  { cat:"Learning Platforms", icon:BsBook, color:C.green, items:[
    { title:"Cyfrin Updraft", desc:"The best structured Solidity course available — completely free and built for beginners.", link:"https://updraft.cyfrin.io/", tag:"Free", logo:cyfrinResourceLogo },
    { title:"Alchemy University", desc:"Road to Web3 — structured learning path from zero to deployed dApp.", link:"https://university.alchemy.com/", tag:"Free", logo:alchemyResourceLogo },
    { title:"LearnWeb3 DAO", desc:"Community-driven platform with beginner to advanced Web3 development tracks.", link:"https://learnweb3.io/", tag:"Free", logo:learnWeb3LogoImage },
    { title:"CryptoZombies", desc:"Learn Solidity by building a zombie game — the most fun way to start coding on Ethereum.", link:"https://cryptozombies.io/", tag:"Free", logo:cryptoZombiesResourceLogo },
    { title:"Ethereum.org Learn", desc:"Official Ethereum Foundation learning resources — concepts, tutorials, and documentation.", link:"https://ethereum.org/en/learn/", tag:"Free", logo:ethereumOrgResourceLogo },
  ]},
  { cat:"Uganda & Africa Blockchain", icon:BsGlobeEuropeAfrica, color:C.cyan, items:[
    { title:"Blockchain Association Uganda (BAU)", desc:"The official industry body for blockchain in Uganda. Events, programmes, and policy.", link:"https://bau.ug/", tag:"Uganda", logo:bauResourceLogo },
    { title:"Blockchain DevFest Kampala", desc:"Uganda's premier annual Web3 developer conference. Hackathon, workshops, speakers.", link:"https://devfestkampala.com/", tag:"Uganda" },
    { title:"Web3 Africa", desc:"Pan-African Web3 community connecting builders, developers and founders across the continent.", link:"https://www.web3afrika.com/", tag:"Africa", logo:web3AfricaLogoImage },
    { title:"Algorand Africa", desc:"Algorand Foundation's initiative to grow blockchain development across Africa.", link:"https://algorand.foundation/", tag:"Africa", logo:algorandAfricaLogoImage },
  ]},
  { cat:"Wallets & Testnet Tools", icon:BsKey, color:C.purple, items:[
    { title:"MetaMask", desc:"Install this first — it is your gateway to every blockchain application.", link:"https://metamask.io/", tag:"Essential", logo:metaMaskResourceLogo },
    { title:"Sepolia Testnet Faucet", desc:"Get free test ETH to practise deploying smart contracts without spending real money.", link:"https://sepoliafaucet.com/", tag:"Free" },
    { title:"Etherscan", desc:"Blockchain explorer — view transactions, contracts, and wallet activity on Ethereum.", link:"https://etherscan.io/", tag:"Tool", logo:etherscanResourceLogo },
    { title:"Chainlist", desc:"Add any blockchain network to MetaMask with one click.", link:"https://chainlist.org/", tag:"Tool", logo:chainlistResourceLogo },
  ]},
];

const DEFAULT_PAGE = "Home";
const NAV_LINKS = ["Home","Learn","Events","Gallery","Opportunities","Resources","Blog","Community","About"];
const FOOTER_LINKS = NAV_LINKS.filter(link => link !== "Home");
const STORAGE_KEYS = {
  completedResources: "dsug_done",
  activePage: "dsug_page",
  theme: "dsug_theme",
};

const ICON = {
  xxs: 12,
  xs: 13,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  hero: 26,
  stat: 28,
};

// ─── Global Styles ────────────────────────────────────────────────
const GStyles = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800;900&family=Manrope:wght@400;500;600;700&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;max-width:100%;overflow-x:hidden}
body{background:${C.bg};font-family:'Manrope',sans-serif;color:${C.text};max-width:100%;overflow-x:hidden}
#root{max-width:100%;overflow-x:hidden}
img,svg{max-width:100%}
::-webkit-scrollbar{width:5px}
::-webkit-scrollbar-track{background:${C.bg}}
::-webkit-scrollbar-thumb{background:${C.blue};border-radius:5px}
@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
@keyframes glowPulse{0%,100%{box-shadow:0 0 0 #2847D400}50%{box-shadow:0 0 28px #2847D433}}
.fade-up{animation:fadeUp .7s ease both}
.fade-up-2{animation:fadeUp .7s .1s ease both}
.fade-up-3{animation:fadeUp .7s .2s ease both}
.section-appear{animation:fadeUp .72s ease both}
.section-appear-2{animation:fadeUp .72s .08s ease both}
.hover-card{transition:transform .2s,border-color .2s,box-shadow .2s}
.hover-card:hover{transform:translateY(-3px);border-color:#2847D480!important;box-shadow:0 8px 32px #2847D415}
.hover-lift{transition:all .15s}
.hover-lift:hover{opacity:.85;transform:translateY(-1px)}
.image-zoom{overflow:hidden;border-radius:10px}
.image-zoom img{transition:transform .55s ease,filter .3s ease}
.image-zoom:hover img{transform:scale(1.05);filter:saturate(1.08)}
.glass-pulse{animation:glowPulse 3s ease-in-out infinite, floatY 6s ease-in-out infinite}
.cta-pop{transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease}
.cta-pop:hover{transform:translateY(-4px);box-shadow:0 14px 30px #2847D433;border-color:#2847D466}
.res-item{transition:all .15s}
.res-item:hover{background:${C.cardHov}!important;border-color:${C.blue}60!important}
.nav-btn{transition:all .15s;border-bottom:2px solid transparent}
.nav-btn:hover{color:${C.text}!important}
.faq-item{transition:all .2s}
.social-btn:hover{transform:translateY(-2px);opacity:.85}
.social-btn{transition:all .15s}
.team-avatar{width:96px;height:96px;border-radius:20px}
.team-head{display:flex;align-items:center;gap:16px;min-width:0}
.team-meta{min-width:0;flex:1}
.team-role{max-width:100%;white-space:normal!important;line-height:1.3;text-transform:none!important;letter-spacing:.2px!important}
.photo-masonry{columns:3 280px;column-gap:14px}
.photo-item{break-inside:avoid;margin-bottom:14px;transition:transform .25s ease,filter .25s ease}
.photo-item:hover{transform:translateY(-4px);filter:saturate(1.04)}
.resources-head{grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr)}
.resources-hero-image .image-zoom img{display:block;width:100%;height:100%;min-height:180px;object-fit:cover}
@media(max-width:1050px){.desktop-nav{display:none!important}}
@media(min-width:1100px){.team-avatar{width:132px;height:132px;border-radius:24px}}
@media(min-width:1051px){.mob-menu{display:none!important}.mob-btn{display:none!important}.mob-actions{display:none!important}}
@media(max-width:640px){
  .hero-btns{flex-direction:column;align-items:center!important;width:100%}
  .hero-btns button{width:min(100%,320px);max-width:100%;justify-content:center}
  .stats-row{gap:24px!important}
  .home-tracks-head{grid-template-columns:1fr!important}
  .resources-head{grid-template-columns:1fr!important}
  .home-tracks-image{min-height:210px!important}
  .resources-hero-image .image-zoom img{height:220px!important;min-height:220px!important}
  .home-flyer-image{height:220px!important}
  .events-flyer-image{height:280px!important}
  .event-flyer-image{object-fit:cover!important;object-position:center top!important}
  .about-grid{grid-template-columns:1fr!important}
  .footer-grid{grid-template-columns:1fr!important}
  .team-grid{grid-template-columns:1fr!important}
  .team-avatar{width:84px;height:84px;border-radius:18px}
  .team-head{align-items:flex-start}
  .team-meta{display:flex;flex-direction:column;gap:6px}
  .team-role{white-space:normal!important;line-height:1.35}
  .photo-masonry{columns:1 240px}
  .home-track-featured,.home-event-featured,.events-featured-card,.op-featured-card,.res-featured-card{grid-column:span 1!important}
  .op-grid,.res-grid{grid-template-columns:1fr!important}
}
@media(max-width:420px){
  .brand-text{font-size:14px!important;letter-spacing:-0.2px!important}
  .hero-shell{padding-right:0!important}
  .hero-btns button{width:100%!important}
  .stats-row{padding:12px!important;gap:14px!important}
  .gallery-title{font-size:clamp(24px,7vw,30px)!important}
}
@media(max-width:360px){
  .brand-text{font-size:13px!important}
  .hero-btns{gap:8px!important}
  .stats-row{gap:10px!important}
}
`;

// ─── Shared Components ────────────────────────────────────────────
function Pill({ label, color, small, nowrap = true, uppercase = true, className }) {
  return (
    <span className={className} style={{ display:"inline-block", background:`${color}18`, color, border:`1px solid ${color}35`, padding:small?"2px 8px":"4px 12px", borderRadius:99, fontSize:small?11:12, fontWeight:700, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"0.5px", textTransform:uppercase?"uppercase":"none", whiteSpace:nowrap?"nowrap":"normal" }}>
      {label}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:14 }}>
      <div style={{ width:20, height:2, background:C.blue, borderRadius:2 }} />
      <span style={{ fontSize:12, fontWeight:700, color:C.blue, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"2.5px", textTransform:"uppercase" }}>{children}</span>
    </div>
  );
}

function PageHero({ label, h1, sub }) {
  return (
    <div style={{ marginBottom:52 }}>
      <SectionLabel>{label}</SectionLabel>
      <h1 style={{ fontSize:"clamp(34px,5.5vw,64px)", fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-1.5px", lineHeight:1.05, marginBottom:14 }}>{h1}</h1>
      {sub && <p style={{ fontSize:16, color:C.textSub, fontFamily:"'Manrope',sans-serif", maxWidth:540, lineHeight:1.75 }}>{sub}</p>}
    </div>
  );
}

// Social icon button used in team cards and footer
function SocialBtn({ href, label, Icon }) {
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="social-btn" style={{ display:"inline-flex", alignItems:"center", gap:6, background:C.surface, border:`1px solid ${C.border}`, color:C.textSub, padding:"6px 14px", borderRadius:8, fontSize:12, fontWeight:600, textDecoration:"none", fontFamily:"'Space Grotesk',sans-serif" }}>
      <Icon size={ICON.sm} />{label}
    </a>
  );
}

function MailchimpSignup({ compact = false }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState("");

  const actionUrl = "https://tech.us18.list-manage.com/subscribe/post?u=d1bef5bd2742eab35653e151d&id=92e93a0f72&f_id=00f8abe6f0";

  useEffect(() => {
    const successEl = document.getElementById("mce-success-response");
    if (!successEl) return;

    const observer = new MutationObserver(() => {
      const msg = (successEl.textContent || "").trim();
      const isVisible = successEl.style.display !== "none" && msg.length > 0;
      if (isVisible) {
        setToast("Thank you for joining DigitalSphereUg!");
        const timer = setTimeout(() => setToast(""), 4500);
        return () => clearTimeout(timer);
      }
      return undefined;
    });

    observer.observe(successEl, { childList:true, subtree:true, characterData:true, attributes:true });
    return () => observer.disconnect();
  }, []);

  const submitForm = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSubmitting(true);
    const successEl = document.getElementById("mce-success-response");
    const errorEl = document.getElementById("mce-error-response");
    if (successEl) {
      successEl.style.display = "none";
      successEl.textContent = "";
    }
    if (errorEl) {
      errorEl.style.display = "none";
      errorEl.textContent = "";
    }

    const callbackName = `mailchimp_cb_${Date.now()}`;
    const params = new URLSearchParams();
    params.set("EMAIL", email);
    params.set("b_d1bef5bd2742eab35653e151d_92e93a0f72", "");
    params.set("c", callbackName);
    const jsonpUrl = `${actionUrl.replace("/post?", "/post-json?")}&${params.toString()}`;

    window[callbackName] = data => {
      const message = (data && data.msg) ? data.msg.replace(/<[^>]*>/g, "") : "Subscription complete.";
      const isSuccess = data && data.result === "success";

      if (isSuccess) {
        if (successEl) {
          successEl.style.display = "block";
          successEl.textContent = message;
        }
        setEmail("");
      } else {
        if (errorEl) {
          errorEl.style.display = "block";
          errorEl.textContent = message;
        }
      }

      setIsSubmitting(false);
      delete window[callbackName];
    };

    const script = document.createElement("script");
    script.src = jsonpUrl;
    script.async = true;
    script.onerror = () => {
      if (errorEl) {
        errorEl.style.display = "block";
        errorEl.textContent = "Unable to submit right now. Please try again.";
      }
      setIsSubmitting(false);
      delete window[callbackName];
    };
    document.body.appendChild(script);
  };

  return (
    <div className={compact ? "" : "section-appear"} style={{ marginBottom:compact ? 0 : 56, position:"relative" }}>
      {!compact && <SectionLabel>Newsletter</SectionLabel>}
      <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:compact ? 14 : 18, padding:compact ? "14px 16px" : "clamp(20px,3vw,30px)", maxWidth:compact ? 560 : 680 }}>
        <h3 style={{ fontSize:compact ? "18px" : "clamp(22px,3.3vw,32px)", fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", lineHeight:1.2, margin:"0 0 8px" }}>Join DigitalSphereUg Newsletter</h3>
        <p style={{ fontSize:compact ? 13 : 14, color:C.textSub, lineHeight:1.7, fontFamily:"'Manrope',sans-serif", margin:"0 0 12px" }}>Get Web3 opportunities, event drops, and practical learning resources in your inbox.</p>

        <form action={actionUrl} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" noValidate onSubmit={submitForm}>
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group" style={{ marginBottom:12 }}>
              <label htmlFor="mce-EMAIL" style={{ display:"block", fontSize:13, color:C.textSub, marginBottom:8, fontFamily:"'Space Grotesk',sans-serif" }}>Email Address <span style={{ color:C.blue }}>*</span></label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={{ width:"100%", height:46, borderRadius:10, border:`1px solid ${C.border}`, background:C.surface, color:C.text, padding:"0 14px", fontSize:14, fontFamily:"'Manrope',sans-serif" }}
              />
            </div>

            <div id="mce-responses" className="clear foot" style={{ marginBottom:12 }}>
              <div className="response" id="mce-error-response" style={{ display:"none", color:"#ef4444", fontSize:13, fontFamily:"'Manrope',sans-serif" }}></div>
              <div className="response" id="mce-success-response" style={{ display:"none", color:C.green, fontSize:13, fontFamily:"'Manrope',sans-serif" }}></div>
            </div>

            <div aria-hidden="true" style={{ position:"absolute", left:"-5000px" }}>
              <input type="text" name="b_d1bef5bd2742eab35653e151d_92e93a0f72" tabIndex={-1} value="" readOnly />
            </div>

            <div className="optionalParent">
              <div className="clear foot" style={{ display:"flex", gap:10, alignItems:"center", flexWrap:"wrap" }}>
                <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button hover-lift" disabled={isSubmitting} style={{ background:C.blue, border:"none", color:C.white, padding:compact ? "9px 16px" : "11px 22px", borderRadius:10, fontSize:compact ? 12 : 13, fontWeight:700, fontFamily:"'Space Grotesk',sans-serif", cursor:"pointer", opacity:isSubmitting?0.7:1 }}>
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {toast && (
        <div role="status" aria-live="polite" style={{ position:"fixed", right:18, bottom:18, zIndex:500, background:C.green, color:"#052e16", padding:"12px 16px", borderRadius:12, fontSize:13, fontWeight:700, fontFamily:"'Space Grotesk',sans-serif", boxShadow:"0 12px 28px rgba(0,0,0,.25)" }}>
          {toast}
        </div>
      )}
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────
function Nav({ page, setPage, theme, toggleTheme }) {
  const [mob, setMob] = useState(false);
  return (
    <>
      <style>{GStyles}</style>
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:300, background:C.surface, backdropFilter:"blur(24px)", borderBottom:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 clamp(16px,4vw,40px)", display:"flex", alignItems:"center", justifyContent:"space-between", height:64 }}>
          <button onClick={() => setPage("Home")} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:10 }}>
            {/* Logo image is temporarily disabled. Replace this placeholder with your SVG logo later. */}
            <div style={{ width:48, height:48, borderRadius:10, display:"inline-flex", alignItems:"center", justifyContent:"center", background:C.surface, border:`1px solid ${C.border}`, color:C.blue, fontSize:12, fontWeight:800, fontFamily:"'Space Grotesk',sans-serif" }}>
              DS
            </div>
            <span className="brand-text" style={{ fontSize:17, fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-0.5px" }}>DigitalSphere<span style={{ color:C.blueLt }}>Ug</span></span>
          </button>
          <div className="desktop-nav" style={{ display:"flex", gap:1, alignItems:"center" }}>
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => setPage(l)} className="nav-btn" style={{ background:"none", border:"none", borderBottom:`2px solid ${page===l?C.blue:"transparent"}`, cursor:"pointer", padding:"8px 11px", borderRadius:"8px 8px 0 0", color:page===l?C.text:C.textSub, fontSize:13, fontWeight:page===l?700:500, fontFamily:"'Space Grotesk',sans-serif" }}>{l}</button>
            ))}
            <button onClick={toggleTheme} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} className="hover-lift" style={{ marginLeft:8, background:C.surface, border:`1px solid ${C.border}`, cursor:"pointer", width:36, height:36, borderRadius:9, color:C.text, display:"inline-flex", alignItems:"center", justifyContent:"center" }}>
              {theme === "dark" ? <BsSun size={ICON.md} /> : <BsMoonStars size={ICON.md} />}
            </button>
            <button onClick={() => setPage("Community")} className="hover-lift" style={{ marginLeft:10, background:C.blue, border:"none", cursor:"pointer", padding:"9px 20px", borderRadius:9, color:C.white, fontSize:13, fontWeight:700, fontFamily:"'Space Grotesk',sans-serif" }}>Join Free →</button>
          </div>
          <div className="mob-actions" style={{ display:"flex", alignItems:"center", gap:8 }}>
            <button onClick={toggleTheme} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} className="hover-lift" style={{ background:C.surface, border:`1px solid ${C.border}`, cursor:"pointer", width:36, height:36, borderRadius:9, color:C.text, display:"inline-flex", alignItems:"center", justifyContent:"center" }}>
              {theme === "dark" ? <BsSun size={ICON.md} /> : <BsMoonStars size={ICON.md} />}
            </button>
            <button className="mob-btn" onClick={() => setMob(!mob)} style={{ background:"none", border:`1px solid ${C.border}`, cursor:"pointer", color:C.text, fontSize:15, padding:"8px 13px", borderRadius:8, fontFamily:"'Space Grotesk',sans-serif", display:"inline-flex", alignItems:"center", justifyContent:"center" }}>{mob?<BsX size={ICON.lg} />:<BsList size={ICON.lg} />}</button>
          </div>
        </div>
        {mob && (
          <div className="mob-menu" style={{ background:C.surface, borderTop:`1px solid ${C.border}`, padding:"10px 0 18px", animation:"fadeIn .2s ease" }}>
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => { setPage(l); setMob(false); }} style={{ display:"block", width:"100%", background:"none", border:"none", cursor:"pointer", padding:`12px clamp(16px,4vw,40px)`, color:page===l?C.blueLt:C.text, fontSize:15, fontWeight:600, textAlign:"left", fontFamily:"'Space Grotesk',sans-serif" }}>{l}</button>
            ))}
            <div style={{ padding:`10px clamp(16px,4vw,40px) 0` }}>
              <button onClick={() => { setPage("Community"); setMob(false); }} style={{ background:C.blue, border:"none", cursor:"pointer", padding:"13px 24px", borderRadius:10, color:C.white, fontSize:14, fontWeight:700, fontFamily:"'Space Grotesk',sans-serif", width:"100%", display:"inline-flex", alignItems:"center", justifyContent:"center", gap:6 }}>Join Free →</button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

// ─── Home ─────────────────────────────────────────────────────────
function Home({ setPage }) {
  return (
    <div>
      <Hero setPage={setPage} />

      {/* TRACKS PREVIEW */}
      <section className="section-appear" style={{ padding:"clamp(56px,8vw,96px) clamp(16px,4vw,40px)", maxWidth:1280, margin:"0 auto" }}>
        <div className="home-tracks-head" style={{ display:"grid", gridTemplateColumns:"minmax(0,1.2fr) minmax(0,.8fr)", marginBottom:26, gap:18, alignItems:"end" }}>
          <div><SectionLabel>Learning Tracks</SectionLabel><h2 style={{ fontSize:"clamp(26px,4vw,40px)", fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-1px", maxWidth:520 }}>Your path into blockchain</h2></div>
          <div className="home-tracks-image image-zoom" style={{ border:`1px solid ${C.border}`, borderRadius:14, overflow:"hidden", minHeight:180 }}>
            <img src={chainlinkRooftopPhoto} alt="Chainlink rooftop study session in Kampala" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          </div>
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:22, flexWrap:"wrap", gap:16 }}>
          <button onClick={() => setPage("Learn")} className="hover-lift" style={{ background:"none", border:`1px solid ${C.border}`, color:C.textSub, padding:"10px 22px", borderRadius:9, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"'Space Grotesk',sans-serif", display:"inline-flex", alignItems:"center", gap:6 }}>All tracks <BsArrowRight size={ICON.xs} /></button>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(255px,1fr))", gap:14 }}>
          {TRACKS.map((t, i) => (
            <div key={t.id} onClick={() => setPage("Learn")} className={`hover-card ${i===0?"home-track-featured":""}`} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:"clamp(20px,2.5vw,28px)", cursor:"pointer", position:"relative", overflow:"hidden", gridColumn:i===0?"span 2":"span 1" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${t.color},${t.color}50)` }} />
              <div style={{ fontSize:26, marginBottom:14, display:"inline-flex" }}><t.icon size={ICON.hero} /></div>
              <div style={{ fontSize:10, fontWeight:700, color:t.color, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"2px", textTransform:"uppercase", marginBottom:5 }}>{t.label}</div>
              <div style={{ fontSize:17, fontWeight:700, color:C.text, fontFamily:"'Space Grotesk',sans-serif", marginBottom:3 }}>{t.title}</div>
              <div style={{ fontSize:12, color:C.textDim, fontFamily:"'Manrope',sans-serif", marginBottom:12 }}>{t.sub}</div>
              <p style={{ fontSize:13, color:C.textSub, lineHeight:1.65, margin:"0 0 18px", fontFamily:"'Manrope',sans-serif" }}>{t.desc}</p>
              <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}><Pill label={t.level} color={t.color} /><Pill label={t.time} color={C.textDim} /></div>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section className="section-appear-2" style={{ padding:"0 clamp(16px,4vw,40px) clamp(56px,8vw,96px)", maxWidth:1280, margin:"0 auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:32, flexWrap:"wrap", gap:16 }}>
          <div><SectionLabel>2026 Calendar</SectionLabel><h2 style={{ fontSize:"clamp(26px,4vw,40px)", fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-1px" }}>Upcoming Events</h2></div>
          <button onClick={() => setPage("Events")} className="hover-lift" style={{ background:"none", border:`1px solid ${C.border}`, color:C.textSub, padding:"10px 22px", borderRadius:9, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"'Space Grotesk',sans-serif", display:"inline-flex", alignItems:"center", gap:6 }}>All events <BsArrowRight size={ICON.xs} /></button>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:14 }}>
          {EVENTS.filter(e => e && typeof e === "object").map((e, i) => {
            const color = e.color || C.blueLt;
            const featured = Boolean(e.featured);
            const isFlyer = e.imageFit === "contain";
            return (
            <div key={e.title || i} className={`hover-card ${i===0?"home-event-featured":""}`} style={{ background:C.card, border:`1px solid ${featured?C.blue+"55":C.border}`, borderRadius:14, padding:22, position:"relative", overflow:"hidden", display:"flex", flexDirection:"column", gap:12, gridColumn:i===0?"span 2":"span 1" }}>
              {featured && <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${C.blue},${C.blueLt})` }} />}
              {e.image && <div className="image-zoom" style={{ borderRadius:10 }}><img className={isFlyer?"event-flyer-image home-flyer-image":undefined} src={e.image} alt={e.title || "Event visual"} style={{ width:"100%", height:isFlyer?(i===0?240:190):(i===0?190:140), objectFit:"cover", objectPosition:isFlyer?"top center":"center", background:C.bg2, borderRadius:10 }} /></div>}
              <div style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:6 }}>
                <Pill label={e.tag || "Event"} color={color} />
                {featured && <Pill label="Featured" color={C.cyan} />}
              </div>
              <div style={{ fontSize:15, fontWeight:700, color:C.text, fontFamily:"'Space Grotesk',sans-serif", lineHeight:1.3 }}>{e.title || "Upcoming Event"}</div>
              <div style={{ fontSize:12, color:color, fontFamily:"'Manrope',sans-serif", fontWeight:600, display:"flex", alignItems:"center", gap:6 }}><BsCalendarEvent size={ICON.xxs} /> {e.date || "Date TBC"}</div>
              <div style={{ fontSize:12, color:C.textDim, fontFamily:"'Manrope',sans-serif", display:"flex", alignItems:"center", gap:6 }}><BsGeoAlt size={ICON.xxs} /> {e.location || "Location TBC"}</div>
              <a href={e.link || "#"} target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ marginTop:"auto", display:"inline-flex", alignItems:"center", gap:6, background:featured?C.blue:"transparent", border:featured?"none":`1px solid ${C.border}`, color:featured?C.white:C.text, padding:"9px 18px", borderRadius:8, fontSize:12, fontWeight:700, textDecoration:"none", fontFamily:"'Space Grotesk',sans-serif" }}>{featured?"Register":"Details"}<BsArrowRight size={ICON.xxs} /></a>
            </div>
          )})}
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-appear" style={{ background:"#f4efe4", color:"#1e293b", padding:"clamp(52px,7vw,90px) clamp(16px,4vw,40px)", borderTop:"1px solid #ddd0b7", borderBottom:"1px solid #ddd0b7" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ marginBottom:20 }}>
            <div style={{ fontSize:11, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"#7c4a03", marginBottom:8, fontFamily:"'Space Grotesk',sans-serif" }}>In The Community</div>
            <h2 className="gallery-title" style={{ fontSize:"clamp(26px,4vw,42px)", lineHeight:1.08, margin:0, fontFamily:"'Space Grotesk',sans-serif" }}>We show up</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))", gap:12 }}>
            {FEATURED_GALLERY_ITEMS.map((item, i) => (
              <article key={item.title + i} className="photo-item" style={{ margin:0, background:"#fff8ea", border:"1px solid #e7d4ae", borderRadius:12, padding:10 }}>
                <div className="image-zoom" style={{ borderRadius:10 }}>
                  <img src={item.image} alt={item.title} style={{ width:"100%", height:170, display:"block", borderRadius:10, objectFit:"cover" }} />
                </div>
                <div style={{ fontSize:13, marginTop:8, color:"#334155", fontFamily:"'Manrope',sans-serif", lineHeight:1.45 }}>
                  <strong style={{ display:"block", color:"#0f172a", fontFamily:"'Space Grotesk',sans-serif" }}>{item.title}</strong>
                  <span style={{ display:"block" }}>{item.date} — {item.location}</span>
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop:14, display:"flex", justifyContent:"space-between", alignItems:"center", gap:12, flexWrap:"wrap" }}>
            <p style={{ margin:0, fontSize:13, color:"#475569", fontFamily:"'Manrope',sans-serif" }}>Featured moments from the community. See the full gallery for every event story.</p>
            <button onClick={() => setPage("Gallery")} className="hover-lift" style={{ background:"#0f172a", border:"none", color:"#fff", padding:"10px 18px", borderRadius:9, fontSize:13, fontWeight:700, fontFamily:"'Space Grotesk',sans-serif", cursor:"pointer", display:"inline-flex", alignItems:"center", gap:6 }}>View Full Gallery <BsArrowRight size={ICON.xs} /></button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-appear-2" style={{ padding:"0 clamp(16px,4vw,40px) 60px", maxWidth:1280, margin:"0 auto" }}>
        <div className="cta-pop" style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:20, padding:"clamp(36px,6vw,64px) clamp(24px,5vw,56px)", textAlign:"left" }}>
          <div>
            <h2 style={{ fontSize:"clamp(28px,4.5vw,52px)", fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-1.5px", lineHeight:1.1, marginBottom:16 }}>313 of us already.<br /><span style={{ color:C.blueLt }}>Come be 314.</span></h2>
            <p style={{ fontSize:16, color:C.textSub, fontFamily:"'Manrope',sans-serif", margin:"0 0 28px", maxWidth:420 }}>If you're in Kampala and curious about blockchain, this is your lane.</p>
            <div style={{ display:"flex", gap:12, justifyContent:"flex-start", flexWrap:"wrap" }}>
              <button onClick={() => setPage("Learn")} className="hover-lift" style={{ background:C.blue, border:"none", cursor:"pointer", padding:"15px 36px", borderRadius:12, color:C.white, fontSize:15, fontWeight:700, fontFamily:"'Space Grotesk',sans-serif" }}>Start Learning Free</button>
              <button onClick={() => setPage("Community")} className="hover-lift" style={{ background:"transparent", border:`1px solid ${C.blueLt}`, cursor:"pointer", padding:"15px 36px", borderRadius:12, color:C.text, fontSize:15, fontWeight:600, fontFamily:"'Space Grotesk',sans-serif" }}>Join Community</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Gallery({ setPage }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = e => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  const prevItem = () => {
    setActiveIndex(prev => {
      if (prev === null) return prev;
      return prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1;
    });
  };

  const nextItem = () => {
    setActiveIndex(prev => {
      if (prev === null) return prev;
      return prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1;
    });
  };

  const onTouchStart = e => {
    const touch = e.touches?.[0];
    if (!touch) return;
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  };

  const onTouchEnd = e => {
    if (!touchStart) return;
    const touch = e.changedTouches?.[0];
    if (!touch) return;

    const dx = touch.clientX - touchStart.x;
    const dy = touch.clientY - touchStart.y;
    setTouchStart(null);

    if (Math.abs(dx) < 50 || Math.abs(dy) > 80) return;
    if (dx > 0) {
      prevItem();
    } else {
      nextItem();
    }
  };

  const activeItem = activeIndex === null ? null : GALLERY_ITEMS[activeIndex];

  return (
    <div className="section-appear" style={{ maxWidth:1280, margin:"0 auto", padding:"clamp(90px,12vw,110px) clamp(16px,4vw,40px) 80px" }}>
      <PageHero label="Community Archive" h1="Uganda Shows Up for Web3" sub="From campus sessions to major conferences, this is how DigitalSphereUg shows up." />

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:16, marginBottom:40 }}>
        {GALLERY_ITEMS.map((item, i) => (
          <article key={item.title + i} onClick={() => setActiveIndex(i)} className="hover-card fade-up" style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:14, padding:12, display:"flex", flexDirection:"column", gap:10, cursor:"pointer" }}>
            <div className="image-zoom" style={{ borderRadius:10 }}>
              <img src={item.image} alt={item.title} style={{ width:"100%", height:190, objectFit:"cover", borderRadius:10 }} />
            </div>
            <h3 style={{ fontSize:16, color:C.text, fontFamily:"'Space Grotesk',sans-serif", margin:0, lineHeight:1.35 }}>{item.title}</h3>
            <div style={{ fontSize:12, color:C.blueLt, fontFamily:"'Manrope',sans-serif", fontWeight:700 }}>{item.date} — {item.location}</div>
            <p style={{ margin:0, fontSize:13, color:C.textSub, lineHeight:1.7, fontFamily:"'Manrope',sans-serif" }}>{item.summary}</p>
          </article>
        ))}
      </div>

      <div className="section-appear-2" style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:"clamp(24px,4vw,34px)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:14 }}>
        <div>
          <h3 style={{ margin:"0 0 6px", fontSize:20, color:C.text, fontFamily:"'Space Grotesk',sans-serif" }}>Want to meet us at the next event?</h3>
          <p style={{ margin:0, fontSize:14, color:C.textSub, fontFamily:"'Manrope',sans-serif", lineHeight:1.7 }}>Check our upcoming events and join the community before the next one.</p>
        </div>
        <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
          <button onClick={() => setPage("Events")} className="hover-lift" style={{ background:C.blue, border:"none", color:C.white, padding:"11px 18px", borderRadius:9, fontSize:13, fontWeight:700, fontFamily:"'Space Grotesk',sans-serif", cursor:"pointer", display:"inline-flex", alignItems:"center", gap:6 }}>View Upcoming Events <BsArrowRight size={ICON.xs} /></button>
          <button onClick={() => setPage("Community")} className="hover-lift" style={{ background:"transparent", border:`1px solid ${C.border}`, color:C.text, padding:"11px 18px", borderRadius:9, fontSize:13, fontWeight:700, fontFamily:"'Space Grotesk',sans-serif", cursor:"pointer", display:"inline-flex", alignItems:"center", gap:6 }}>Join The Community <BsArrowRight size={ICON.xs} /></button>
        </div>
      </div>

      {activeItem && (
        <div onClick={() => setActiveIndex(null)} style={{ position:"fixed", inset:0, background:"rgba(5, 7, 15, 0.82)", zIndex:700, display:"flex", alignItems:"center", justifyContent:"center", padding:"20px" }}>
          <div onClick={e => e.stopPropagation()} style={{ width:"min(100%, 980px)", background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:14, display:"flex", flexDirection:"column", gap:12 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", gap:10 }}>
              <div style={{ fontSize:12, color:C.textDim, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"1.2px", textTransform:"uppercase" }}>Gallery Preview</div>
              <button type="button" onClick={() => setActiveIndex(null)} className="hover-lift" style={{ background:"transparent", border:`1px solid ${C.border}`, color:C.text, width:32, height:32, borderRadius:8, cursor:"pointer", fontSize:16, lineHeight:1 }}>×</button>
            </div>

            <img
              src={activeItem.image}
              alt={activeItem.title}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              style={{ width:"100%", maxHeight:"70vh", objectFit:"cover", borderRadius:12 }}
            />

            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:14, flexWrap:"wrap" }}>
              <div style={{ flex:1, minWidth:220 }}>
                <h3 style={{ margin:"0 0 6px", fontSize:20, color:C.text, fontFamily:"'Space Grotesk',sans-serif" }}>{activeItem.title}</h3>
                <div style={{ fontSize:13, color:C.blueLt, fontFamily:"'Manrope',sans-serif", fontWeight:700, marginBottom:8 }}>{activeItem.date} — {activeItem.location}</div>
                <p style={{ margin:0, fontSize:14, color:C.textSub, lineHeight:1.75, fontFamily:"'Manrope',sans-serif" }}>{activeItem.summary}</p>
              </div>
              <div style={{ display:"flex", gap:8 }}>
                <button type="button" onClick={prevItem} className="hover-lift" style={{ background:"transparent", border:`1px solid ${C.border}`, color:C.text, padding:"9px 14px", borderRadius:9, cursor:"pointer", fontSize:13, fontWeight:700, fontFamily:"'Space Grotesk',sans-serif" }}>Prev</button>
                <button type="button" onClick={nextItem} className="hover-lift" style={{ background:C.blue, border:"none", color:C.white, padding:"9px 14px", borderRadius:9, cursor:"pointer", fontSize:13, fontWeight:700, fontFamily:"'Space Grotesk',sans-serif" }}>Next</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Learn ────────────────────────────────────────────────────────
function Learn() {
  const [done, setDone] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.completedResources) || "{}");
    } catch {
      return {};
    }
  });
  const [open, setOpen] = useState(null);
  const toggle = k => {
    const u = { ...done, [k]:!done[k] };
    setDone(u);
    try {
      localStorage.setItem(STORAGE_KEYS.completedResources, JSON.stringify(u));
    } catch {
      // Ignore localStorage write failures in private/incognito modes.
    }
  };
  const total = TRACKS.reduce((a, t) => a + t.resources.length, 0);
  const nDone = Object.values(done).filter(Boolean).length;
  return (
    <div className="section-appear" style={{ maxWidth:1280, margin:"0 auto", padding:"clamp(90px,12vw,110px) clamp(16px,4vw,40px) 80px" }}>
      <PageHero label="Free Learning Tracks" h1="Your Blockchain Education" sub="4 structured tracks. All free. No account needed. Progress saved locally on your device." />
      <div style={{ borderRadius:16, overflow:"hidden", border:`1px solid ${C.border}`, marginBottom:24 }}>
        <div className="image-zoom" style={{ borderRadius:16 }}>
          <img src={chainlinkRooftopPhoto} alt="Chainlink rooftop learning session in Kampala" style={{ width:"100%", height:"clamp(200px,30vw,320px)", objectFit:"cover" }} />
        </div>
      </div>
      {nDone > 0 && (
        <div style={{ background:C.card, border:`1px solid ${C.green}40`, borderRadius:12, padding:"14px 20px", marginBottom:32, display:"flex", alignItems:"center", gap:14 }}>
          <span style={{ fontSize:18, display:"inline-flex" }}><BsTrophy size={ICON.lg} color={C.green} /></span>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:13, fontWeight:700, color:C.text, fontFamily:"'Space Grotesk',sans-serif", marginBottom:6 }}>{nDone} of {total} resources completed</div>
            <div style={{ height:4, background:C.surface, borderRadius:4 }}><div style={{ width:`${(nDone/total)*100}%`, height:"100%", background:C.green, borderRadius:4, transition:"width .4s" }} /></div>
          </div>
        </div>
      )}
      <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
        {TRACKS.map(t => {
          const td = t.resources.filter((_, i) => done[`${t.id}-${i}`]).length;
          const isOpen = open === t.id;
          return (
            <div key={t.id} style={{ background:C.card, border:`1px solid ${isOpen?C.blue:C.border}`, borderRadius:16, overflow:"hidden", transition:"border-color .2s" }}>
              <button onClick={() => setOpen(isOpen ? null : t.id)} style={{ width:"100%", background:"none", border:"none", cursor:"pointer", padding:"clamp(16px,2.5vw,22px) clamp(18px,3vw,28px)", display:"flex", alignItems:"center", gap:14, textAlign:"left" }}>
                <div style={{ width:46, height:46, borderRadius:12, background:`${t.color}15`, border:`1px solid ${t.color}30`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}><t.icon size={ICON.xl} /></div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontSize:10, fontWeight:700, color:t.color, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"2px", textTransform:"uppercase", marginBottom:3 }}>{t.label}</div>
                  <div style={{ fontSize:16, fontWeight:700, color:C.text, fontFamily:"'Space Grotesk',sans-serif", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{t.title} <span style={{ color:C.textDim, fontWeight:400, fontSize:13 }}>— {t.sub}</span></div>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:12, flexShrink:0 }}>
                  <div style={{ textAlign:"right" }}>
                    <span style={{ fontSize:12, fontWeight:700, color:td>0?t.color:C.textDim, fontFamily:"'Space Grotesk',sans-serif" }}>{td}/{t.resources.length}</span>
                    <div style={{ width:56, height:3, background:C.surface, borderRadius:3, marginTop:4 }}><div style={{ width:`${(td/t.resources.length)*100}%`, height:"100%", background:t.color, borderRadius:3, transition:"width .4s" }} /></div>
                  </div>
                  <span style={{ fontSize:18, color:C.textDim, display:"inline-flex", transition:"transform .2s", transform:isOpen?"rotate(180deg)":"none" }}><BsChevronDown size={ICON.lg} /></span>
                </div>
              </button>
              {isOpen && (
                <div style={{ borderTop:`1px solid ${C.border}`, padding:"clamp(16px,2.5vw,24px) clamp(18px,3vw,28px)", animation:"fadeIn .25s ease" }}>
                  <p style={{ fontSize:14, color:C.textSub, lineHeight:1.7, fontFamily:"'Manrope',sans-serif", margin:"0 0 20px", maxWidth:580 }}>{t.desc}</p>
                  <div style={{ display:"flex", gap:6, marginBottom:16, flexWrap:"wrap" }}><Pill label={t.level} color={t.color} /><Pill label={t.time} color={C.textDim} /></div>
                  <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                    {t.resources.map((r, i) => {
                      const k = `${t.id}-${i}`; const isDone = done[k];
                      return (
                        <div key={i} className="res-item" style={{ background:isDone?`${t.color}0a`:C.surface, border:`1px solid ${isDone?t.color+"40":C.border}`, borderRadius:11, padding:"12px 16px", display:"flex", alignItems:"center", gap:12 }}>
                          <button onClick={() => toggle(k)} style={{ width:22, height:22, borderRadius:6, flexShrink:0, cursor:"pointer", border:`2px solid ${isDone?t.color:C.textDim}`, background:isDone?t.color:"transparent", display:"flex", alignItems:"center", justifyContent:"center", color:C.text, fontSize:12, fontWeight:900, transition:"all .15s" }}>{isDone?<BsCheckLg size={ICON.xxs} />:null}</button>
                          <div style={{ flex:1, minWidth:0 }}>
                            <div style={{ fontSize:14, fontWeight:600, color:isDone?C.textDim:C.text, fontFamily:"'Space Grotesk',sans-serif", textDecoration:isDone?"line-through":"none", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{r.title}</div>
                            <div style={{ display:"flex", gap:8, marginTop:4, alignItems:"center", flexWrap:"wrap" }}><Pill label={r.type} color={t.color} small /><span style={{ fontSize:11, color:C.textDim, fontFamily:"'Manrope',sans-serif" }}>{r.time}</span></div>
                          </div>
                          <a href={r.url} target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ background:C.card, border:`1px solid ${C.border}`, color:C.text, padding:"7px 14px", borderRadius:8, fontSize:12, fontWeight:700, textDecoration:"none", fontFamily:"'Space Grotesk',sans-serif", flexShrink:0, whiteSpace:"nowrap", display:"inline-flex", alignItems:"center", gap:6 }}>Open <BsArrowRight size={ICON.xxs} /></a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Events ───────────────────────────────────────────────────────
function Events() {
  return (
    <div className="section-appear" style={{ maxWidth:1280, margin:"0 auto", padding:"clamp(90px,12vw,110px) clamp(16px,4vw,40px) 80px" }}>
      <PageHero label="2026 Calendar" h1="Upcoming Events" sub="Blockchain events in Uganda and across Africa. Every event is a door — show up." />
      <div style={{ marginBottom:20, borderRadius:16, overflow:"hidden", border:`1px solid ${C.border}` }}>
        <div className="image-zoom" style={{ borderRadius:16 }}>
          <img src={ethnileVenuePhoto} alt="ETHNile venue with sponsor banners" style={{ width:"100%", height:"clamp(200px,30vw,340px)", objectFit:"cover" }} />
        </div>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(290px,1fr))", gap:18, marginBottom:32 }}>
        {EVENTS.filter(e => e && typeof e === "object").map((e, i) => {
          const color = e.color || C.blueLt;
          const featured = Boolean(e.featured);
          const isFlyer = e.imageFit === "contain";
          return (
            <div key={e.title || i} className={`hover-card fade-up ${i===0?"events-featured-card":""}`} style={{ background:C.card, border:`1px solid ${featured?C.blue+"60":C.border}`, borderRadius:18, padding:"clamp(18px,2.6vw,24px)", display:"flex", flexDirection:"column", gap:12, position:"relative", overflow:"hidden", gridColumn:i===0?"span 2":"span 1" }}>
            {featured && <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${C.blue},${C.blueLt})` }} />}
            {e.image && <div className="image-zoom" style={{ borderRadius:10 }}><img className={isFlyer?"event-flyer-image events-flyer-image":undefined} src={e.image} alt={e.title || "Event"} style={{ width:"100%", height:isFlyer?(i===0?300:240):(i===0?220:160), objectFit:"cover", objectPosition:isFlyer?"top center":"center", background:C.bg2, borderRadius:10 }} /></div>}
            <div style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:6 }}><Pill label={e.tag || "Event"} color={color} />{featured && <Pill label="Featured" color={C.cyan} />}</div>
            <h3 style={{ fontSize:17, fontWeight:700, color:C.text, fontFamily:"'Space Grotesk',sans-serif", lineHeight:1.3 }}>{e.title || "Upcoming Event"}</h3>
            <div><div style={{ fontSize:13, color:color, fontFamily:"'Manrope',sans-serif", fontWeight:600, marginBottom:3, display:"flex", alignItems:"center", gap:6 }}><BsCalendarEvent size={ICON.xs} /> {e.date || "Date TBC"}</div><div style={{ fontSize:13, color:C.textDim, fontFamily:"'Manrope',sans-serif", display:"flex", alignItems:"center", gap:6 }}><BsGeoAlt size={ICON.xs} /> {e.location || "Location TBC"}</div></div>
            <p style={{ fontSize:13, color:C.textSub, lineHeight:1.7, fontFamily:"'Manrope',sans-serif", margin:0, flex:1 }}>{e.desc || "Event details will be shared soon."}</p>
            <a href={e.link || "#"} target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", gap:6, background:featured?C.blue:"transparent", border:featured?"none":`1px solid ${C.border}`, color:featured?C.white:C.text, padding:"11px 18px", borderRadius:10, fontSize:13, fontWeight:700, textDecoration:"none", fontFamily:"'Space Grotesk',sans-serif" }}>{featured?"Register Now":"Learn More"}<BsArrowRight size={ICON.xs} /></a>
          </div>
        )})}
      </div>

      {/* Past events */}
      <div style={{ marginBottom:32 }}>
        <SectionLabel>Archive</SectionLabel>
        <h2 style={{ fontSize:"clamp(24px,3.8vw,36px)", fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-0.8px", marginBottom:10 }}>Past Events</h2>
        <p style={{ fontSize:13, color:C.textSub, lineHeight:1.7, fontFamily:"'Manrope',sans-serif", margin:"0 0 16px", maxWidth:640 }}>A quick look at sessions we have already hosted or attended. This archive helps newcomers see the momentum we are building.</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))", gap:14 }}>
          {PAST_EVENTS.map((event, i) => (
            <div key={event.title + i} className="hover-card fade-up" style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:14, padding:16, display:"flex", flexDirection:"column", gap:10 }}>
              <div className="image-zoom" style={{ borderRadius:10 }}>
                <img src={event.image} alt={event.title} style={{ width:"100%", height:150, objectFit:"cover", borderRadius:10 }} />
              </div>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                <Pill label={event.tag} color={event.color} small />
                <span style={{ fontSize:11, color:C.textDim, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"1px", textTransform:"uppercase" }}>Past Event</span>
              </div>
              <h3 style={{ fontSize:15, fontWeight:700, color:C.text, fontFamily:"'Space Grotesk',sans-serif", lineHeight:1.3, margin:0 }}>{event.title}</h3>
              <div style={{ fontSize:12, color:event.color, fontFamily:"'Manrope',sans-serif", fontWeight:600, display:"flex", alignItems:"center", gap:6 }}><BsCalendarEvent size={ICON.xxs} /> {event.date}</div>
              <div style={{ fontSize:12, color:C.textDim, fontFamily:"'Manrope',sans-serif", display:"flex", alignItems:"center", gap:6 }}><BsGeoAlt size={ICON.xxs} /> {event.location}</div>
              <p style={{ fontSize:13, color:C.textSub, lineHeight:1.65, margin:0, flex:1, fontFamily:"'Manrope',sans-serif" }}>{event.recap}</p>
              <a href={event.link} target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", gap:6, background:"transparent", border:`1px solid ${C.border}`, color:C.text, padding:"9px 14px", borderRadius:8, fontSize:12, fontWeight:700, textDecoration:"none", fontFamily:"'Space Grotesk',sans-serif" }}>{event.link.includes("youtube.com") || event.link.includes("youtu.be") ? "Watch Replay" : "View Source"} <BsArrowRight size={ICON.xxs} /></a>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background:C.card, border:`1px dashed ${C.border}`, borderRadius:14, padding:"clamp(18px,3vw,28px)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16 }}>
        <div><div style={{ fontSize:15, fontWeight:700, color:C.text, fontFamily:"'Space Grotesk',sans-serif", marginBottom:4 }}>Know an event we haven't listed?</div><p style={{ fontSize:13, color:C.textSub, fontFamily:"'Manrope',sans-serif", margin:0 }}>Share it in the community and we'll add it to the calendar.</p></div>
        <a href="https://t.me/digitalsphereug" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ background:C.blue, border:"none", color:C.white, padding:"11px 22px", borderRadius:9, fontSize:13, fontWeight:700, textDecoration:"none", fontFamily:"'Space Grotesk',sans-serif", whiteSpace:"nowrap", display:"inline-flex", alignItems:"center", gap:6 }}>Share in Telegram <BsArrowRight size={ICON.xs} /></a>
      </div>
    </div>
  );
}

// ─── Opportunities ────────────────────────────────────────────────
function Opportunities() {
  return (
    <div className="section-appear" style={{ maxWidth:1280, margin:"0 auto", padding:"clamp(90px,12vw,110px) clamp(16px,4vw,40px) 80px" }}>
      <PageHero label="Opportunities" h1="Earn, Build & Grow" sub="Jobs, grants, hackathons, and earn opportunities available to Ugandans right now." />

      <div className="section-appear-2" style={{ display:"grid", gridTemplateColumns:"minmax(0,1.1fr) minmax(0,.9fr)", gap:16, marginBottom:30 }}>
        <div className="hover-card" style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:"clamp(20px,3vw,30px)" }}>
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:C.blueLt, marginBottom:8, fontFamily:"'Space Grotesk',sans-serif" }}>Built For Uganda</div>
          <h2 style={{ fontSize:"clamp(22px,3vw,34px)", color:C.text, fontFamily:"'Space Grotesk',sans-serif", lineHeight:1.1, margin:"0 0 10px" }}>Remote opportunities, local momentum</h2>
          <p style={{ fontSize:14, color:C.textSub, lineHeight:1.75, margin:0, fontFamily:"'Manrope',sans-serif", maxWidth:560 }}>Grants, bounties, internships, and jobs that Ugandan students can actually access now. Start with one, keep stacking your wins.</p>
        </div>
        <div style={{ borderRadius:16, overflow:"hidden", border:`1px solid ${C.border}` }}>
          <div className="image-zoom" style={{ borderRadius:16 }}>
            <img src={outdoorLaptopPhoto} alt="Outdoor laptop session for builders in Kampala" style={{ width:"100%", height:"100%", minHeight:180, objectFit:"cover" }} />
          </div>
        </div>
      </div>

      <div style={{ display:"flex", flexDirection:"column", gap:48 }}>
        {OPPS.map((cat, ci) => (
          <div key={ci} className="fade-up">
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:18 }}>
              <div style={{ width:42, height:42, borderRadius:11, background:`${cat.color}15`, border:`1px solid ${cat.color}30`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}><cat.icon size={ICON.lg} /></div>
              <h2 style={{ fontSize:20, fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", margin:0 }}>{cat.cat}</h2>
            </div>
            <div className="op-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))", gap:12 }}>
              {cat.items.map((item, ii) => (
                <div key={ii} className={`hover-card ${ii===0?"op-featured-card":""}`} style={{ background:ii===0?C.surface:C.card, border:`1px solid ${ii===0?cat.color+"55":C.border}`, borderRadius:14, padding:ii===0?"26px 24px":"22px", display:"flex", flexDirection:"column", gap:12, gridColumn:ii===0?"span 2":"span 1", position:"relative", overflow:"hidden" }}>
                  {ii===0 && <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:cat.color }} />}
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:8 }}><h3 style={{ fontSize:15, fontWeight:700, color:C.text, fontFamily:"'Space Grotesk',sans-serif", margin:0, lineHeight:1.3, flex:1 }}>{item.title}</h3><Pill label={item.level} color={cat.color} small /></div>
                  <p style={{ fontSize:13, color:C.textSub, lineHeight:1.65, fontFamily:"'Manrope',sans-serif", margin:0, flex:1 }}>{item.desc}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ display:"inline-flex", alignItems:"center", gap:6, background:`${cat.color}12`, border:`1px solid ${cat.color}30`, color:cat.color, padding:"8px 16px", borderRadius:8, fontSize:12, fontWeight:700, textDecoration:"none", fontFamily:"'Space Grotesk',sans-serif", alignSelf:"flex-start" }}>Explore <BsArrowRight size={ICON.xxs} /></a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Resources Page ───────────────────────────────────────────────
function Resources() {
  return (
    <div className="section-appear" style={{ maxWidth:1280, margin:"0 auto", padding:"clamp(90px,12vw,110px) clamp(16px,4vw,40px) 80px" }}>
      <PageHero label="Tools & Resources" h1="Everything You Need" sub="Curated tools, platforms, and links for every stage of your blockchain journey — from first steps to building on mainnet." />

      <div className="section-appear-2 resources-head" style={{ display:"grid", gap:16, marginBottom:30 }}>
        <div className="resources-hero-image" style={{ borderRadius:16, overflow:"hidden", border:`1px solid ${C.border}` }}>
          <div className="image-zoom" style={{ borderRadius:16 }}>
            <img src={kyambogoRoomPhoto} alt="Kyambogo blockchain session room" style={{ width:"100%", height:"100%", minHeight:180, objectFit:"cover" }} />
          </div>
        </div>
        <div className="hover-card" style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:"clamp(20px,3vw,30px)" }}>
          <div style={{ fontSize:12, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:C.blueLt, marginBottom:8, fontFamily:"'Space Grotesk',sans-serif" }}>No Gatekeeping</div>
          <h2 style={{ fontSize:"clamp(22px,3vw,34px)", color:C.text, fontFamily:"'Space Grotesk',sans-serif", lineHeight:1.1, margin:"0 0 10px" }}>Real tools. Free access. Start now.</h2>
          <p style={{ fontSize:14, color:C.textSub, lineHeight:1.75, margin:0, fontFamily:"'Manrope',sans-serif", maxWidth:560 }}>A practical stack Ugandan learners can use immediately, from browser-based editors to grants and local communities.</p>
        </div>
      </div>

      <div style={{ display:"flex", flexDirection:"column", gap:52 }}>
        {RESOURCES_DATA.map((cat, ci) => (
          <div key={ci} className="fade-up">
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
              <div style={{ width:44, height:44, borderRadius:12, background:`${cat.color}15`, border:`1px solid ${cat.color}30`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20 }}><cat.icon size={ICON.xl} /></div>
              <h2 style={{ fontSize:21, fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", margin:0 }}>{cat.cat}</h2>
            </div>
            <div className="res-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:14 }}>
              {cat.items.map((item, ii) => (
                <div key={ii} className={`hover-card ${ii===0?"res-featured-card":""}`} style={{ background:ii===0?C.surface:C.card, border:`1px solid ${ii===0?cat.color+"55":C.border}`, borderRadius:14, padding:ii===0?"28px 24px":"24px", display:"flex", flexDirection:"column", gap:14, position:"relative", overflow:"hidden", gridColumn:ii===0?"span 2":"span 1" }}>
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:ii===0?3:2, background:`${cat.color}70` }} />
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:8 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                      {item.logo && (
                        <div style={{ width:28, height:28, borderRadius:8, overflow:"hidden", border:`1px solid ${C.border}`, background:C.surface, display:"inline-flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                          <img src={item.logo} alt={`${item.title} logo`} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                        </div>
                      )}
                      <h3 style={{ fontSize:15, fontWeight:700, color:C.text, fontFamily:"'Space Grotesk',sans-serif", margin:0, lineHeight:1.3 }}>{item.title}</h3>
                    </div>
                    <Pill label={item.tag} color={cat.color} small />
                  </div>
                  <p style={{ fontSize:13, color:C.textSub, lineHeight:1.65, fontFamily:"'Manrope',sans-serif", margin:0, flex:1 }}>{item.desc}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ display:"inline-flex", alignItems:"center", gap:6, background:`${cat.color}12`, border:`1px solid ${cat.color}30`, color:cat.color, padding:"9px 16px", borderRadius:8, fontSize:12, fontWeight:700, textDecoration:"none", fontFamily:"'Space Grotesk',sans-serif", alignSelf:"flex-start" }}>Visit Resource <BsArrowRight size={ICON.xxs} /></a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Suggest a resource */}
      <div style={{ marginTop:52, background:C.card, border:`1px dashed ${C.border}`, borderRadius:16, padding:"clamp(20px,3vw,32px)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16 }}>
        <div>
          <div style={{ fontSize:15, fontWeight:700, color:C.text, fontFamily:"'Space Grotesk',sans-serif", marginBottom:4 }}>Know a resource we're missing?</div>
          <p style={{ fontSize:13, color:C.textSub, fontFamily:"'Manrope',sans-serif", margin:0 }}>Send it to us on Telegram and we'll review and add it.</p>
        </div>
        <a href="https://t.me/digitalsphereug" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ background:C.blue, border:"none", color:C.white, padding:"11px 22px", borderRadius:9, fontSize:13, fontWeight:700, textDecoration:"none", fontFamily:"'Space Grotesk',sans-serif", whiteSpace:"nowrap", display:"inline-flex", alignItems:"center", gap:6 }}>Suggest on Telegram <BsArrowRight size={ICON.xs} /></a>
      </div>

    </div>
  );
}

// ─── Blog ─────────────────────────────────────────────────────────
function Blog({ setPost }) {
  return (
    <div className="section-appear" style={{ maxWidth:1280, margin:"0 auto", padding:"clamp(90px,12vw,110px) clamp(16px,4vw,40px) 80px" }}>
      <PageHero label="Insights & Perspectives" h1="The Blog" sub="Written for Ugandans. Honest, practical, no hype." />
      <p style={{ margin:"-24px 0 24px", fontSize:13, color:C.textDim, fontFamily:"'Manrope',sans-serif" }}>Upcoming topics: Bank of Uganda crypto stance, mobile money x Web3 integration, and local startup stories.</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(290px,1fr))", gap:18 }}>
        {POSTS.map((p, i) => (
          <div key={p.id} onClick={() => setPost(p)} className="hover-card fade-up" style={{ background:C.card, border:`1px solid ${i===0?C.blue+"45":C.border}`, borderRadius:18, padding:"clamp(20px,3vw,30px)", cursor:"pointer", display:"flex", flexDirection:"column", gap:14, position:"relative", overflow:"hidden" }}>
            {i===0 && <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${C.blue},${C.purple})` }} />}
            <Pill label={p.tag} color={p.tagColor} />
            <h2 style={{ fontSize:18, fontWeight:700, color:C.text, fontFamily:"'Space Grotesk',sans-serif", lineHeight:1.3, margin:0 }}>{p.title}</h2>
            <div style={{ fontSize:13, color:C.blueLt, fontFamily:"'Space Grotesk',sans-serif", fontWeight:700 }}>{p.author}</div>
            <p style={{ fontSize:13, color:C.textSub, lineHeight:1.7, fontFamily:"'Manrope',sans-serif", margin:0, flex:1 }}>{p.excerpt}</p>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:12, borderTop:`1px solid ${C.border}` }}>
              <div style={{ display:"flex", gap:12 }}><span style={{ fontSize:12, color:C.textDim, fontFamily:"'Manrope',sans-serif" }}>{p.date}</span><span style={{ fontSize:12, color:C.textDim, fontFamily:"'Manrope',sans-serif" }}>{p.read}</span></div>
              <span style={{ fontSize:13, color:C.blueLt, fontWeight:700, fontFamily:"'Space Grotesk',sans-serif", display:"inline-flex", alignItems:"center", gap:6 }}>Read <BsArrowRight size={ICON.xs} /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BlogPost({ post, back }) {
  return (
    <div className="section-appear" style={{ maxWidth:720, margin:"0 auto", padding:"clamp(90px,12vw,110px) clamp(16px,4vw,40px) 80px" }}>
      <button onClick={back} className="hover-lift" style={{ background:"none", border:`1px solid ${C.border}`, color:C.textSub, cursor:"pointer", fontSize:13, fontFamily:"'Space Grotesk',sans-serif", fontWeight:600, marginBottom:40, padding:"9px 18px", borderRadius:9, display:"inline-flex", alignItems:"center", gap:6 }}><BsArrowLeft size={ICON.sm} /> Back to Blog</button>
      <Pill label={post.tag} color={post.tagColor} />
      <h1 style={{ fontSize:"clamp(26px,4vw,42px)", fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-1px", margin:"18px 0 14px", lineHeight:1.15 }}>{post.title}</h1>
      <div style={{ display:"flex", gap:20, marginBottom:36, paddingBottom:28, borderBottom:`1px solid ${C.border}`, flexWrap:"wrap" }}>
        <span style={{ fontSize:14, color:C.blueLt, fontFamily:"'Space Grotesk',sans-serif", fontWeight:700 }}>{post.author || "DigitalSphereUg"}</span>
        <span style={{ fontSize:13, color:C.textDim, fontFamily:"'Manrope',sans-serif" }}>{post.date}</span>
        <span style={{ fontSize:13, color:C.textDim, fontFamily:"'Manrope',sans-serif" }}>{post.read}</span>
      </div>
      {post.body.split("\n\n").map((para, i) => <p key={i} style={{ fontSize:16, color:C.textSub, lineHeight:1.9, fontFamily:"'Manrope',sans-serif", marginBottom:22 }}>{para}</p>)}
    </div>
  );
}

// ─── Community ────────────────────────────────────────────────────
function Community() {
  const otherCommunities = [
    { name:"Blockchain Association Uganda", desc:"The official industry body for blockchain in Uganda. Events, policy, and innovation programmes.", link:"https://bau.ug", icon:BsGeoAlt, logo:bauLogoImage, tag:"Uganda" },
    { name:"GDG Kampala", desc:"Google Developer Group Kampala — regular tech meetups with a strong Web3 track.", link:"https://gdg.community.dev/gdg-kampala/", icon:BsCodeSlash, logo:null, tag:"Uganda" },
    { name:"Celo Uganda", desc:"Fostering Web3 growth and adoption in Uganda. Hosts workshops, block parties and events including Kampala Blockchain Happy Hour.", link:"https://x.com/CeloUganda", icon:BsGlobe2, logo:celoLogoImage, tag:"Uganda" },
    { name:"ETHNile", desc:"Uganda's first major Ethereum event series — conference, hackathon, and community activities in Kampala. Uganda's biggest Web3 community event.", link:"https://ethnileug.xyz/", icon:BsLightningCharge, logo:ethnileLogoImage, tag:"Uganda" },
    { name:"Chainlink East Africa", desc:"Official Chainlink East Africa community covering Uganda and the region. Oracle and Web3 developer updates, regional events.", link:"https://x.com/Chainlink__EA", icon:BsLink45Deg, logo:chainlinkEaLogoImage, tag:"Uganda / East Africa" },
    { name:"Stellar East Africa", desc:"Active across East Africa including Uganda. Weekly community calls, builders bootcamps and Soroban smart contract workshops.", link:"https://x.com/StellarEastAfri", icon:BsGlobeEuropeAfrica, logo:stellarEaLogoImage, tag:"East Africa" },
    { name:"Developer DAO", desc:"Global community of Web3 builders and developers. Open to all skill levels.", link:"https://www.developerdao.com/", icon:BsGlobe2, logo:developerDaoLogoImage, tag:"Global" },
    { name:"LearnWeb3 DAO", desc:"Community-first learning platform for Web3 developers at every stage.", link:"https://learnweb3.io/", icon:BsBook, logo:learnWeb3LogoImage, tag:"Global" },
    { name:"Algorand Africa", desc:"Algorand Foundation's initiative to grow blockchain across Africa.", link:"https://algorand.foundation/", icon:BsGlobeEuropeAfrica, logo:algorandAfricaLogoImage, tag:"Africa" },
    { name:"Web3 Africa", desc:"Pan-African community connecting blockchain builders across the continent.", link:"https://www.web3afrika.com/", icon:BsLink45Deg, logo:web3AfricaLogoImage, tag:"Africa" },
  ];
  return (
    <div className="section-appear" style={{ maxWidth:1280, margin:"0 auto", padding:"clamp(90px,12vw,110px) clamp(16px,4vw,40px) 80px" }}>
      <PageHero label="Join The Movement" h1="Community" sub="Start with us. Connect with the world." />

      <div style={{ borderRadius:18, overflow:"hidden", border:`1px solid ${C.border}`, marginBottom:16 }}>
        <div className="image-zoom" style={{ borderRadius:18 }}>
          <img src={chainlinkStreetGroupPhoto} alt="Chainlink Kampala community group outside Ponnus" style={{ width:"100%", height:"clamp(220px,32vw,380px)", objectFit:"cover" }} />
        </div>
      </div>
      <p style={{ margin:"0 0 24px", fontSize:13, color:C.textDim, fontFamily:"'Manrope',sans-serif" }}>313 members across Telegram, WhatsApp and X combined</p>

      {/* PRIMARY — Telegram */}
      <div className="section-appear-2" style={{ background:C.card, border:`1px solid #2AABEE50`, borderRadius:20, padding:"clamp(28px,4vw,44px)", marginBottom:20, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:-60, right:-60, width:200, height:200, background:"radial-gradient(circle,#2AABEE10,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
          <div style={{ width:52, height:52, borderRadius:14, background:"#2AABEE18", border:"1px solid #2AABEE35", display:"flex", alignItems:"center", justifyContent:"center", fontSize:24 }}><BsTelegram size={ICON.xxl} /></div>
          <div>
            <div style={{ fontSize:12, fontWeight:700, color:"#2AABEE", fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"2px", textTransform:"uppercase", marginBottom:3 }}>Primary Community</div>
            <div style={{ fontSize:20, fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif" }}>Telegram Channel</div>
          </div>
        </div>
        <p style={{ fontSize:15, color:C.textSub, lineHeight:1.8, fontFamily:"'Manrope',sans-serif", margin:"0 0 24px", maxWidth:580 }}>
          Our main learning hub. Daily blockchain resources, free course links, curated opportunities, and the most active conversations about Web3 in Uganda. This is where you start.
        </p>
        <a href="https://t.me/digitalsphereug" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#2AABEE", border:"none", color:"#051326", padding:"13px 28px", borderRadius:11, fontSize:14, fontWeight:800, textDecoration:"none", fontFamily:"'Space Grotesk',sans-serif" }}>
          Join on Telegram <BsArrowRight size={ICON.sm} />
        </a>
      </div>

      {/* SECONDARY — WhatsApp + X */}
      <div className="section-appear-2" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:14, marginBottom:56 }}>
        {[
          { name:"WhatsApp Community", handle:"DigitalSphereUg", link:"https://whatsapp.com/channel/0029VbAqlOlHFxP25IPcQw0l", color:"#25D366", icon:BsWhatsapp, desc:"Main community announcements and group discussions.", members:"146" },
          { name:"X (Twitter)", handle:"@DigitalSphereUg", link:"https://x.com/digitalsphereug", color:C.text, icon:BsTwitterX, desc:"Blockchain news, opportunities and community highlights.", members:"129" },
        ].map((p, i) => (
          <div key={i} className="hover-card fade-up" style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:24, display:"flex", flexDirection:"column", gap:14 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
              <div style={{ width:44, height:44, borderRadius:12, background:`${p.color}18`, border:`1px solid ${p.color}30`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}><p.icon size={ICON.lg} /></div>
            </div>
            <div><div style={{ fontSize:15, fontWeight:700, color:C.text, fontFamily:"'Space Grotesk',sans-serif" }}>{p.name}</div><div style={{ fontSize:12, color:p.color, fontFamily:"'Manrope',sans-serif", marginTop:2 }}>{p.handle}</div></div>
            <p style={{ fontSize:13, color:C.textSub, lineHeight:1.6, fontFamily:"'Manrope',sans-serif", margin:0, flex:1 }}>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", gap:6, background:`${p.color}12`, border:`1px solid ${p.color}35`, color:p.color, padding:"10px 16px", borderRadius:9, fontSize:13, fontWeight:700, textDecoration:"none", fontFamily:"'Space Grotesk',sans-serif" }}>Follow <BsArrowRight size={ICON.xs} /></a>
          </div>
        ))}
      </div>

      {/* OTHER COMMUNITIES */}
      <div className="section-appear" style={{ marginBottom:52 }}>
        <SectionLabel>Wider Ecosystem</SectionLabel>
        <h2 style={{ fontSize:"clamp(22px,3.5vw,34px)", fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-0.5px", marginBottom:8 }}>More Communities to Join</h2>
        <p style={{ fontSize:14, color:C.textSub, fontFamily:"'Manrope',sans-serif", marginBottom:28 }}>DigitalSphereUg is your starting point. These are the communities that connect you to the wider world.</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))", gap:14 }}>
          {otherCommunities.map((c, i) => (
            <div key={i} className="hover-card fade-up" style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:14, padding:22, display:"flex", flexDirection:"column", gap:12 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                <div style={{ width:44, height:44, borderRadius:12, overflow:"hidden", border:`1px solid ${C.border}`, background:C.surface, display:"inline-flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  {c.logo ? (
                    <img src={c.logo} alt={`${c.name} logo`} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                  ) : (
                    <c.icon size={ICON.lg} />
                  )}
                </div>
                <Pill label={c.tag} color={c.tag.toLowerCase().includes("uganda")?C.green:c.tag.toLowerCase().includes("africa")?C.cyan:C.purple} small />
              </div>
              <div style={{ fontSize:15, fontWeight:700, color:C.text, fontFamily:"'Space Grotesk',sans-serif" }}>{c.name}</div>
              <p style={{ fontSize:13, color:C.textSub, lineHeight:1.6, fontFamily:"'Manrope',sans-serif", margin:0, flex:1 }}>{c.desc}</p>
              <a href={c.link} target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ display:"inline-flex", alignItems:"center", gap:6, background:`${C.blue}12`, border:`1px solid ${C.border}`, color:C.blueLt, padding:"8px 16px", borderRadius:8, fontSize:12, fontWeight:700, textDecoration:"none", fontFamily:"'Space Grotesk',sans-serif", alignSelf:"flex-start" }}>Visit <BsArrowRight size={ICON.xxs} /></a>
            </div>
          ))}
        </div>
      </div>

      {/* University Chapters */}
      <div className="section-appear-2" style={{ background:C.card, border:`1px dashed ${C.blue}45`, borderRadius:20, padding:"clamp(24px,4vw,40px)" }}>
        <div style={{ display:"flex", gap:10, alignItems:"center", marginBottom:8 }}><BsMortarboard size={ICON.xl} /><Pill label="Coming Soon" color={C.blue} /></div>
        <h3 style={{ fontSize:22, fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", margin:"14px 0 10px" }}>University Chapters Programme</h3>
        <p style={{ fontSize:14, color:C.textSub, lineHeight:1.75, fontFamily:"'Manrope',sans-serif", margin:"0 0 22px", maxWidth:560 }}>We're building a programme for students to start DigitalSphereUg chapters at their universities across Uganda — each with its own lead, events, and campus community.</p>
        <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
          {["Makerere University","Kyambogo University","MUBS","UCU","Ndejje University","Your University →"].map(u => (
            <span key={u} style={{ background:u.includes("Your University")?`${C.blue}15`:C.surface, border:`1px solid ${u.includes("Your University")?C.blue+"40":C.border}`, padding:"7px 16px", borderRadius:99, fontSize:12, color:u.includes("Your University")?C.blueLt:C.textSub, fontFamily:"'Space Grotesk',sans-serif", fontWeight:600, display:"inline-flex", alignItems:"center", gap:6 }}>{u}{u.includes("Your University") && <BsArrowRight size={ICON.xxs} />}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── About Page ───────────────────────────────────────────────────
function About({ setPage }) {
  const [openFaq, setOpenFaq] = useState(null);
  const IMPACT = [
    { n:"313+", l:"Community Members" },
    { n:"4", l:"Free Learning Tracks" },
    { n:"3", l:"Blog Posts Published" },
    { n:"2", l:"Major Events in 2026" },
  ];
  const VALUES = [
    { icon:BsPatchCheck, title:"Always Free", color:C.green, desc:"Every course, resource, event listing, and opportunity on this platform is free. No subscription, no paywall, no catch. We believe the barrier to blockchain in Uganda should be zero." },
    { icon:BsGeoAlt, title:"Uganda First", color:C.blue, desc:"Everything we do is built with the Ugandan context in mind — local events, local opportunities, and an understanding of what it actually means to be a student in Uganda trying to enter a global industry." },
    { icon:BsMortarboard, title:"Student-Led", color:C.cyan, desc:"Founded and run by students. We understand the learner's perspective because we are learners. That means no gatekeeping, no jargon, and no assumption that you already know things you haven't been taught." },
    { icon:BsGlobe2, title:"Africa to the World", color:C.purple, desc:"We start in Uganda but our ambition is pan-African. We believe the next generation of global blockchain builders will come from Africa — and we are building the infrastructure to make that happen." },
  ];
  return (
    <div className="section-appear" style={{ maxWidth:1280, margin:"0 auto", padding:"clamp(90px,12vw,110px) clamp(16px,4vw,40px) 80px" }}>

      {/* MISSION */}
      <div className="section-appear" style={{ marginBottom:72 }}>
        <SectionLabel>Who We Are</SectionLabel>
        <div className="about-grid" style={{ display:"grid", gridTemplateColumns:"minmax(0,1.05fr) minmax(0,.95fr)", gap:20, alignItems:"stretch" }}>
          <div>
            <h1 style={{ fontSize:"clamp(34px,5.5vw,64px)", fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-1.5px", lineHeight:1.05, marginBottom:24 }}>
              Built by students.<br />
              <span style={{ color:C.accent }}>Built for Uganda.</span>
            </h1>
            <p style={{ fontSize:18, color:C.text, lineHeight:1.85, fontFamily:"'Manrope',sans-serif", maxWidth:680, marginBottom:16, fontWeight:500 }}>
              DigitalSphereUg exists to accelerate blockchain education and opportunities for Ugandan students — and contribute Uganda's voice to the global Web3 conversation.
            </p>
          </div>
          <div style={{ borderRadius:16, overflow:"hidden", border:`1px solid ${C.border}` }}>
            <div className="image-zoom" style={{ borderRadius:16 }}>
              <img src={filecoinGroupPhoto} alt="Filecoin boardroom group photo in Kampala" style={{ width:"100%", height:"100%", minHeight:320, objectFit:"cover" }} />
            </div>
          </div>
        </div>
        <div style={{ marginTop:14, borderRadius:14, overflow:"hidden", border:`1px solid ${C.border}` }}>
          <div className="image-zoom" style={{ borderRadius:14 }}>
            <img src={stellarGroupPhoto} alt="Stellar group photo in Kampala" style={{ width:"100%", height:"clamp(180px,32vw,300px)", objectFit:"cover" }} />
          </div>
        </div>
      </div>
       {/* 2. OUR STORY */}
      <div className="section-appear-2" style={{ marginBottom:72 }}>
        <SectionLabel>Our Story</SectionLabel>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,38px)", fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-1px", marginBottom:24 }}>How it started</h2>
        <div style={{ border:`1px solid ${C.border}`, borderRadius:20, padding:"clamp(28px,4vw,48px)", position:"relative", overflow:"hidden" }}>
          <img src={kyambogoLecturePhoto} alt="Kyambogo lecture hall blockchain session" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }} />
          <div style={{ position:"absolute", inset:0, background:"rgba(5,7,15,0.64)" }} />
          <p style={{ fontSize:16, color:"#dbe5f4", lineHeight:1.9, fontFamily:"'Manrope',sans-serif", margin:"0 0 20px", maxWidth:680, position:"relative" }}>
            DigitalSphereUg started as a simple idea — a Ugandan student who believed blockchain was the biggest opportunity of our generation and couldn't find a local community to learn with. So instead of waiting for one to exist, we built it.
          </p>
          <p style={{ fontSize:16, color:"#dbe5f4", lineHeight:1.9, fontFamily:"'Manrope',sans-serif", margin:0, maxWidth:680, position:"relative" }}>
            What started as a WhatsApp group and an X page with a few followers is now a growing platform with structured learning tracks, local events coverage, and a community of over 300 Ugandans building their Web3 future together. We are just getting started.
          </p>
        </div>
      </div>
 
      {/* 3. WHY UGANDA */}
      <div className="section-appear" style={{ marginBottom:72 }}>
        <SectionLabel>Why Uganda</SectionLabel>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,38px)", fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-1px", marginBottom:24 }}>The opportunity is right here</h2>
        <div style={{ background:`linear-gradient(135deg,${C.blue}15,${C.purple}0a)`, border:`1px solid ${C.blue}35`, borderRadius:20, padding:"clamp(28px,4vw,48px)" }}>
          <p style={{ fontSize:"clamp(16px,2.5vw,20px)", color:C.text, lineHeight:1.85, fontFamily:"'Manrope',sans-serif", margin:0, maxWidth:680, fontWeight:500, fontStyle:"italic" }}>
            "Uganda is one of the youngest countries in the world by median age. Over 75% of the population is under 30. We are not late to blockchain — we are early. And DigitalSphereUg exists to make sure Ugandan students are builders in this space, not just observers."
          </p>
        </div>
      </div>

      {/* 4. OUR VALUES */}
      <div className="section-appear-2" style={{ marginBottom:72 }}>
        <SectionLabel>Our Values</SectionLabel>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,38px)", fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-1px", marginBottom:32 }}>What we stand for</h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:14 }}>
          {VALUES.map((item, i) => (
            <div key={i} className="hover-card fade-up" style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:"22px 20px", display:"flex", flexDirection:"column", gap:12 }}>
              <div style={{ width:44, height:44, borderRadius:12, display:"inline-flex", alignItems:"center", justifyContent:"center", background:`${item.color}16`, border:`1px solid ${item.color}35`, color:item.color }}>
                <item.icon size={ICON.lg} />
              </div>
              <div style={{ fontSize:17, fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-0.2px" }}>{item.title}</div>
              <p style={{ margin:0, fontSize:13, color:C.textSub, lineHeight:1.75, fontFamily:"'Manrope',sans-serif" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
 
      {/* 5. IMPACT NUMBERS */}
      <div className="section-appear" style={{ marginBottom:72 }}>
        <SectionLabel>Our Impact</SectionLabel>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,38px)", fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-1px", marginBottom:32 }}>Growing every day</h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:14 }}>
          <div style={{ gridColumn:"span 2", background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:"clamp(24px,4vw,34px)", textAlign:"left" }}>
            <div style={{ fontSize:"clamp(52px,9vw,96px)", fontWeight:900, color:C.accent, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-2px", lineHeight:1 }}>{IMPACT[0].n}</div>
            <div style={{ fontSize:14, color:C.textSub, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"0.3px", lineHeight:1.4, marginTop:6 }}>{IMPACT[0].l}</div>
          </div>
          {IMPACT.slice(1).map((s, i) => (
            <div key={i} className="hover-card fade-up" style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:"clamp(18px,3vw,22px)", textAlign:"left" }}>
              <div style={{ fontSize:"clamp(26px,4vw,40px)", fontWeight:900, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-1px", marginBottom:6 }}>{s.n}</div>
              <div style={{ fontSize:12, color:C.textSub, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"0.3px", lineHeight:1.4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TEAM */}
      <div className="section-appear-2" style={{ marginBottom:72 }}>
        <SectionLabel>The Team</SectionLabel>
        <h2 style={{ fontSize:"clamp(26px,4vw,40px)", fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-1px", marginBottom:32 }}>The people behind the platform</h2>
        <div className="team-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(290px,1fr))", gap:20 }}>
          {TEAM.map((member, i) => (
            <div key={i} className="hover-card fade-up" style={{ background:C.card, border:`1px solid ${member.active?C.border:C.border+"60"}`, borderRadius:20, padding:"clamp(24px,3.5vw,36px)", display:"flex", flexDirection:"column", gap:20, opacity:member.active?1:0.55, position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:member.active?`linear-gradient(90deg,${member.color},${member.color}50)`:`${C.textDim}40` }} />

              {/* Avatar */}
              <div className="team-head">
                {member.avatar ? (
                  <img className="team-avatar" src={member.avatar} alt={member.name} style={{ objectFit:"cover", objectPosition:"center 20%", background:"transparent", border:`2px solid ${member.color}40`, padding:0, flexShrink:0 }} />
                ) : (
                  <div className="team-avatar" style={{ background:`${member.color}15`, border:`2px dashed ${member.color}40`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    {member.active ? (
                      <span style={{ fontSize:28, color:member.color, fontWeight:800, fontFamily:"'Space Grotesk',sans-serif" }}>{member.initials}</span>
                    ) : (
                      <BsPlus size={ICON.stat} color={C.textDim} />
                    )}
                  </div>
                )}
                <div className="team-meta">
                  <div style={{ fontSize:18, fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", marginBottom:4, lineHeight:1.25, overflowWrap:"anywhere" }}>{member.name}</div>
                  <Pill className="team-role" label={member.role} color={member.color} small nowrap={false} uppercase={false} />
                </div>
              </div>

              <p style={{ fontSize:14, color:C.textSub, lineHeight:1.7, fontFamily:"'Manrope',sans-serif", margin:0 }}>{member.bio}</p>

              {/* Social links */}
              {member.active && (
                <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                  <SocialBtn href={member.linkedin} label="LinkedIn" Icon={BsLinkedin} />
                  <SocialBtn href={member.x} label="Profile" Icon={BsTwitterX} />
                </div>
              )}
              {!member.active && (
                <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:10, padding:"10px 14px" }}>
                  <span style={{ fontSize:12, color:C.textDim, fontFamily:"'Manrope',sans-serif" }}>This role is open. Interested? Reach out on Telegram.</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Join the team CTA */}
        <div style={{ marginTop:24, background:`${C.blue}10`, border:`1px solid ${C.blue}30`, borderRadius:14, padding:"20px 28px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16 }}>
          <div>
            <div style={{ fontSize:15, fontWeight:700, color:C.text, fontFamily:"'Space Grotesk',sans-serif", marginBottom:3 }}>Want to join the team?</div>
            <p style={{ fontSize:13, color:C.textSub, fontFamily:"'Manrope',sans-serif", margin:0 }}>We're always looking for passionate students to contribute to content, design, development, and campus chapters.</p>
            
          </div>
          <a href="https://t.me/digitalsphereug" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ background:C.blue, border:"none", color:C.white, padding:"11px 22px", borderRadius:9, fontSize:13, fontWeight:700, textDecoration:"none", fontFamily:"'Space Grotesk',sans-serif", whiteSpace:"nowrap" }}>Get Involved →</a>
        </div>
      </div>
            {/* 6. CAMPUS AMBASSADOR */}
      <div className="section-appear" style={{ marginBottom:72 }}>
        <SectionLabel>Campus Ambassadors</SectionLabel>
        <h2 style={{ fontSize:"clamp(24px,3.5vw,38px)", fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-1px", marginBottom:24 }}>Lead at your university</h2>
        <div style={{ background:C.card, border:`1px dashed ${C.blue}45`, borderRadius:20, padding:"clamp(28px,4vw,44px)" }}>
          <div style={{ display:"flex", gap:10, alignItems:"center", marginBottom:16 }}>
            <span style={{ display:"inline-flex", color:C.blueLt }}><BsMortarboard size={ICON.xl} /></span>
            <Pill label="Coming Soon" color={C.blue} />
          </div>
          <p style={{ fontSize:16, color:C.textSub, lineHeight:1.85, fontFamily:"'Manrope',sans-serif", margin:"0 0 24px", maxWidth:640 }}>
            One student lead per university. Local events, new member onboarding, real campus momentum.
          </p>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:24 }}>
            {["Makerere University","Kyambogo University","MUBS","UCU","Ndejje University","Your University →"].map(u => (
              <span key={u} style={{ background:u.includes("→")?`${C.blue}15`:C.surface, border:`1px solid ${u.includes("→")?C.blue+"40":C.border}`, padding:"7px 16px", borderRadius:99, fontSize:12, color:u.includes("→")?C.blueLt:C.textSub, fontFamily:"'Space Grotesk',sans-serif", fontWeight:600 }}>{u}</span>
            ))}
          </div>
          <a href="https://t.me/digitalsphereug" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ display:"inline-flex", alignItems:"center", gap:8, background:C.blue, border:"none", color:C.white, padding:"12px 24px", borderRadius:10, fontSize:13, fontWeight:700, textDecoration:"none", fontFamily:"'Space Grotesk',sans-serif" }}>
            Apply as Campus Ambassador →
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div className="section-appear-2" style={{ marginBottom:72 }}>
        <SectionLabel>FAQ</SectionLabel>
        <h2 style={{ fontSize:"clamp(26px,4vw,40px)", fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-1px", marginBottom:32 }}>Frequently asked questions</h2>
        <div style={{ display:"flex", flexDirection:"column", gap:8, maxWidth:760 }}>
          {FAQS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="faq-item fade-up" style={{ background:C.card, border:`1px solid ${isOpen?C.blue:C.border}`, borderRadius:14, overflow:"hidden" }}>
                <button onClick={() => setOpenFaq(isOpen?null:i)} style={{ width:"100%", background:"none", border:"none", cursor:"pointer", padding:"18px 22px", display:"flex", justifyContent:"space-between", alignItems:"center", gap:16, textAlign:"left" }}>
                  <span style={{ fontSize:15, fontWeight:700, color:C.text, fontFamily:"'Space Grotesk',sans-serif", lineHeight:1.4 }}>{faq.q}</span>
                  <span style={{ fontSize:20, color:isOpen?C.blueLt:C.textDim, flexShrink:0, transition:"transform .2s", display:"inline-flex", transform:isOpen?"rotate(180deg)":"none" }}><BsChevronDown size={ICON.xl} /></span>
                </button>
                {isOpen && (
                  <div style={{ padding:"0 22px 20px", animation:"fadeIn .2s ease" }}>
                    <p style={{ fontSize:14, color:C.textSub, lineHeight:1.8, fontFamily:"'Manrope',sans-serif", margin:0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>


    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────
function Footer({ setPage }) {
  return (
    <footer className="section-appear" style={{ borderTop:`1px solid ${C.border}`, background:C.surface }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"clamp(36px,5vw,56px) clamp(16px,4vw,40px) clamp(20px,3vw,32px)" }}>
        <div className="footer-grid" style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gap:"clamp(28px,5vw,52px)", marginBottom:40 }}>

          {/* Brand + social */}
          <div>
            <button onClick={() => setPage("Home")} className="hover-lift" style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14, background:"none", border:"none", cursor:"pointer", padding:0 }}>
              {/* Logo image is temporarily disabled. Replace this placeholder with your SVG logo later. */}
              <div style={{ width:40, height:40, borderRadius:8, display:"inline-flex", alignItems:"center", justifyContent:"center", background:C.surface, border:`1px solid ${C.border}`, color:C.blue, fontSize:11, fontWeight:800, fontFamily:"'Space Grotesk',sans-serif", flexShrink:0 }}>
                DS
              </div>
              <span style={{ fontSize:16, fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", whiteSpace:"nowrap" }}>DigitalSphere<span style={{ color:C.blueLt }}>Ug</span></span>
            </button>
            <p style={{ fontSize:13, color:C.textSub, lineHeight:1.75, fontFamily:"'Manrope',sans-serif", margin:"0 0 20px", maxWidth:240 }}>Student-led. Uganda-built. Web3-ready.</p>
            {/* Social links in footer */}
            <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
              <a href="https://x.com/digitalsphereug" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" title="X (Twitter)" className="social-btn" style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", background:C.card, border:`1px solid ${C.border}`, color:C.textSub, width:36, height:36, borderRadius:8, textDecoration:"none" }}><BsTwitterX size={ICON.md} /></a>
              <a href="https://t.me/digitalsphereug" target="_blank" rel="noopener noreferrer" aria-label="Telegram" title="Telegram" className="social-btn" style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", background:C.card, border:`1px solid ${C.border}`, color:C.textSub, width:36, height:36, borderRadius:8, textDecoration:"none" }}><BsTelegram size={ICON.md} /></a>
              <a href="https://whatsapp.com/channel/0029VbAqlOlHFxP25IPcQw0l" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp" className="social-btn" style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", background:C.card, border:`1px solid ${C.border}`, color:C.textSub, width:36, height:36, borderRadius:8, textDecoration:"none" }}><BsWhatsapp size={ICON.md} /></a>
            </div>
          </div>

          {/* Platform links */}
          <div>
            <div style={{ fontSize:12, fontWeight:700, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:14 }}>Platform</div>
            {FOOTER_LINKS.map(l => (
              <button key={l} onClick={() => setPage(l)} className="hover-lift" style={{ display:"block", background:"none", border:"none", cursor:"pointer", padding:"5px 0", color:C.textSub, fontSize:13, fontFamily:"'Manrope',sans-serif", textAlign:"left" }}>{l}</button>
            ))}
          </div>

          {/* Resources links */}
          <div>
            <div style={{ fontSize:12, fontWeight:700, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"1.5px", textTransform:"uppercase", marginBottom:14 }}>Resources</div>
            {[
              { l:"BAU Uganda", h:"https://bau.ug" },
              { l:"DevFest Kampala", h:"https://devfestkampala.com" },
              { l:"Alchemy University", h:"https://university.alchemy.com" },
              { l:"Cyfrin Updraft", h:"https://updraft.cyfrin.io" },
              { l:"CryptoZombies", h:"https://cryptozombies.io" },
            ].map(lk => (
              <a key={lk.l} href={lk.h} target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ display:"block", padding:"5px 0", color:C.textSub, fontSize:13, fontFamily:"'Manrope',sans-serif", textDecoration:"none" }}>{lk.l}</a>
            ))}
          </div>
        </div>

        <div style={{ marginTop:18, marginBottom:14, paddingTop:14, borderTop:`1px solid ${C.border}` }}>
          <MailchimpSignup compact />
        </div>

        <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:20, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:10 }}>
          <span style={{ fontSize:12, color:C.textDim, fontFamily:"'Manrope',sans-serif" }}>© 2026 DigitalSphereUg — Built in Uganda 🇺🇬</span>
          <span style={{ fontSize:12, color:C.textDim, fontFamily:"'Manrope',sans-serif" }}>Disclaimer: DigitalSphereUg curates links to free external resources. All linked resources belong to their respective owners.</span>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────
export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const storedTheme = localStorage.getItem(STORAGE_KEYS.theme);
      return storedTheme === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  });

  C = theme === "light" ? THEMES.light : THEMES.dark;

  const [page, setPage] = useState(() => {
    try {
      const savedPage = localStorage.getItem(STORAGE_KEYS.activePage);
      return NAV_LINKS.includes(savedPage) ? savedPage : DEFAULT_PAGE;
    } catch {
      return DEFAULT_PAGE;
    }
  });
  const [post, setPost] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.activePage, page);
    } catch {
      // Ignore localStorage write failures in private/incognito modes.
    }
  }, [page]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.theme, theme);
    } catch {
      // Ignore localStorage write failures in private/incognito modes.
    }
    if (typeof document !== "undefined") {
      document.body.style.background = C.bg;
      document.body.style.color = C.text;
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  const go = p => {
    setPost(null);
    setPage(p);
    if (typeof window !== "undefined") {
      window.scrollTo({ top:0, behavior:"smooth" });
    }
  };
  return (
    <div style={{ background:C.bg, minHeight:"100vh", color:C.text }}>
      <Nav page={page} setPage={go} theme={theme} toggleTheme={toggleTheme} />
      <main>
        {page === "Home"          && <Home setPage={go} />}
        {page === "Learn"         && <Learn />}
        {page === "Events"        && <Events />}
        {page === "Gallery"       && <Gallery setPage={go} />}
        {page === "Opportunities" && <Opportunities />}
        {page === "Resources"     && <Resources />}
        {page === "Blog" && !post  && <Blog setPost={setPost} />}
        {page === "Blog" && post   && <BlogPost post={post} back={() => setPost(null)} />}
        {page === "Community"     && <Community />}
        {page === "About"         && <About setPage={go} theme={theme} />}
      </main>
      <Footer setPage={go} />
    </div>
  );
}
