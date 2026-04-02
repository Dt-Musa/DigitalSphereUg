import { useEffect, useMemo, useRef, useState } from "react";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
import brightImage from "./assets/images/Bright-Profile.jpg";
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
import buidlAfricaScenesPhoto from "./assets/gallery/Scenes From BuidlAfrica-2025.jpg";
import stellarSorobanSessionPhoto from "./assets/gallery/Stellar EAC-Intractive-sessions about Soroban.jpg";
import communityWhatsAppMomentPhoto from "./assets/gallery/IMG-20260325-WA0035.jpg";
import article1BlogImage from "./assets/Blog/article1.jpg";
import article2BlogImage from "./assets/Blog/article2.jpg";
import article3BlogImage from "./assets/Blog/article3.jpg";
import article4BlogImage from "./assets/Blog/article4.jpeg";
import article6BlogImage from "./assets/Blog/article6.jpeg";
import article7BlogImage from "./assets/Blog/article7.jpg";
import article3UpdatedBlogImage from "./assets/Blog/kyambongo-lecture -room.jpg.jpg";
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
import ethereumResourceLogo from "./assets/resources/ETHERIUM.jpg";
import solidityResourceLogo from "./assets/resources/solidity.jpg";
import chainlinkResourceLogo from "./assets/resources/Chainlink.jpg";
import celoResourceLogo from "./assets/resources/celo.jpg";
import web3JsResourceLogo from "./assets/resources/web3-js.jpg";
import stellarResourceLogo from "./assets/resources/Stellar.jpg";
import baseResourceLogo from "./assets/resources/BASE.jpg";
import celoAfricaDaoResourceLogo from "./assets/resources/Celo-African-Dao.jpg";
import chainlinkEastAfricaResourceLogo from "./assets/resources/Chainlink-EastAfrica.jpg";
import stellarEastAfricaResourceLogo from "./assets/resources/stellar-eastafrica.jpg";
import binanceAfricaResourceLogo from "./assets/resources/Binance Africa.png";
import buidlAfricaResourceLogo from "./assets/resources/BuildlAfrica.jpg";
import filecoinResourceLogo from "./assets/resources/filecoin.jpg";
import alchemyOppLogo from "./assets/opportunities/alchemy.png";
import binanceOppLogo from "./assets/opportunities/binance academy.jpg";
import coinbaseOppLogo from "./assets/opportunities/coinbase.png";
import ethereumFoundationOppLogo from "./assets/opportunities/ethereum-foundation.jpg";
import gitcoinOppLogo from "./assets/opportunities/gitcoin.jpg";
import chainlinkOppLogo from "./assets/opportunities/chainlink.jpg";
import web3CareerOppLogo from "./assets/opportunities/web3 careers.jpg";
import cryptoJobListOppLogo from "./assets/opportunities/crypto-job-list.jpg";
import ethnileGlobalOppLogo from "./assets/opportunities/ethnile-global.jpg";
import celoProofOfShipOppLogo from "./assets/opportunities/celo-proof-of-ship.jpg";
import Hero from "./Hero";
import LessonDemoPage from "./LessonDemoPage";

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
  { id:1, slug:"track-1-blockchain-basics", icon:BsLink45Deg, color:C.green, label:"TRACK 01", title:"Blockchain Basics", sub:"No code required", level:"Beginner", time:"2–3 weeks", desc:"Understand how blockchain works from the ground up — concepts, use cases, and why it matters for Africa. Used by students at Makerere, Kyambogo & beyond.", resources:[
    { title:"But How Does Bitcoin Actually Work?", url:"https://www.youtube.com/watch?v=bBC-nXj3Ng4", time:"26 min", type:"Video" },
    { title:"Blockchain 101 — Anders Brownworth", url:"https://andersbrownworth.com/blockchain/", time:"30 min", type:"Interactive" },
    { title:"IBM — What is Blockchain?", url:"https://www.ibm.com/topics/blockchain", time:"1 hr", type:"Article" },
    { title:"CoinDesk Learn — Crypto Basics", url:"https://www.coindesk.com/learn/", time:"3 hrs", type:"Course" },
    { title:"MIT — Blockchain & Money", url:"https://ocw.mit.edu/courses/15-s12-blockchain-and-money-fall-2018/", time:"10 hrs", type:"Course" },
  ]},
  { id:2, slug:"track-2-ethereum-solidity", icon:BsCurrencyBitcoin, color:C.blueLt, label:"TRACK 02", title:"Ethereum & Solidity", sub:"Smart contracts", level:"Beginner–Intermediate", time:"4–6 weeks", desc:"Write your first smart contracts in Solidity and deploy them to the Ethereum blockchain.", resources:[
    { title:"CryptoZombies — Learn Solidity", url:"https://cryptozombies.io/", time:"10 hrs", type:"Interactive" },
    { title:"Cyfrin Updraft — Full Solidity Course", url:"https://updraft.cyfrin.io/", time:"40 hrs", type:"Course" },
    { title:"Patrick Collins — Solidity 2024", url:"https://www.youtube.com/watch?v=umepbfKp5rI", time:"27 hrs", type:"Video" },
    { title:"freeCodeCamp Solidity Tutorial", url:"https://www.youtube.com/watch?v=M576WGiDBdQ", time:"16 hrs", type:"Video" },
    { title:"Official Solidity Docs", url:"https://docs.soliditylang.org/", time:"Reference", type:"Docs" },
  ]},
  { id:3, slug:"track-3-build-your-first-dapp", icon:BsBoxes, color:C.cyan, label:"TRACK 03", title:"Build Your First dApp", sub:"From idea to deployed", level:"Intermediate", time:"4–8 weeks", desc:"Build and deploy a real decentralised application using modern Web3 tools and frameworks.", resources:[
    { title:"Alchemy University — Road to Web3", url:"https://university.alchemy.com/", time:"Free", type:"Course" },
    { title:"LearnWeb3 DAO — All Tracks", url:"https://learnweb3.io/", time:"Free", type:"Course" },
    { title:"Buildspace Projects", url:"https://buildspace.so/", time:"Free", type:"Project" },
    { title:"Hardhat Documentation", url:"https://hardhat.org/docs", time:"Reference", type:"Docs" },
    { title:"Thirdweb — Web3 App Builder", url:"https://thirdweb.com/", time:"Free", type:"Tool" },
  ]},
  { id:4, slug:"track-4-web3-career-africa", icon:BsBriefcase, color:C.purple, label:"TRACK 04", title:"Web3 Career in Africa", sub:"Uganda to the world", level:"All levels", time:"Ongoing", desc:"Navigate the Web3 job market, find grants and opportunities, and build your on-chain reputation from Uganda.", resources:[
    { title:"Web3.career — Job Board", url:"https://web3.career/", time:"Job Board", type:"Jobs" },
    { title:"Gitcoin — Bounties & Grants", url:"https://gitcoin.co/", time:"Ongoing", type:"Earn" },
    { title:"Binance Learn & Earn", url:"https://academy.binance.com/", time:"Free", type:"Course" },
    { title:"Developer DAO Community", url:"https://www.developerdao.com/", time:"Community", type:"Community" },
    { title:"Ethereum Foundation — ESP Grants", url:"https://esp.ethereum.foundation/", time:"Grants", type:"Funding" },
  ]},
];

const EVENTS = [
  { title:"Blockchain DevFest Kampala 2026", slug:"blockchain-devfest-kampala-2026", date:"June 27, 2026", location:"Kampala, Uganda", tag:"Conference", color:C.cyan, featured:true, image:devfestFlyerPhoto, imageFit:"contain", desc:"Africa's premier Web3 developer conference. Theme: Responsible Decentralized AI. Hackathon, workshops, and networking.", link:"https://devfestkampala.com" },
];

const PAST_EVENTS = [
  { title:"DeFi with Chainlink Oracles", slug:"defi-with-chainlink-oracles", date:"Ended — March 28, 2026", location:"CLB Board Room, Kyambogo University", tag:"University Session", color:C.cyan, image:chainlinkFlyerPhoto, recap:"Chainlink East Africa joined students for DeFi, oracles, and Web3 careers at Kyambogo. Read the DigitalSphereUg session recap.", link:"https://digitalsphereug.tech/blog/chainlink-digital-sphere-kyambogo" },
  { title:"Kampala Blockchain Summit 2025", slug:"kampala-blockchain-summit-2026", date:"Ended — Nov 25, 2025", location:"Kampala, Uganda", tag:"Summit", color:C.blueLt, image:"https://img.youtube.com/vi/U3uLtixzAYE/hqdefault.jpg", recap:"Summit session concluded. Watch the full live stream replay to catch talks and highlights.", link:"https://www.youtube.com/live/U3uLtixzAYE?si=bFh0jzv2tFgZwI-V" },
  { title:"ETHNile Kampala 2025", date:"October 2025", location:"Kampala, Uganda", tag:"Conference", color:C.blueLt, image:ethnileGroupHero, recap:"First major Ethereum-focused community gatherings in Kampala, bringing builders and students together.", link:"https://ethnileug.xyz/" },
  { title:"Chainlink Rooftop Session", date:"Early 2026", location:"Kampala, Uganda", tag:"Workshop", color:C.cyan, image:chainlinkRooftopPhoto, recap:"Hands-on learning session on oracles and practical DeFi use cases for local builders.", link:"https://x.com/Chainlink__EA" },
  { title:"BUIDL Africa Community Session", date:"2025", location:"Kampala, Uganda", tag:"Community", color:C.green, image:buildlSessionPhoto, recap:"Student-focused build session connecting learners to mentorship and project ideas.", link:"https://t.me/digitalsphereug" },
  { title:"GDG Kampala Web3 Meetup", slug:"gdg-kampala-web3-meetup", date:"Ended — 2026", location:"Kampala, Uganda", tag:"Meetup", color:C.green, image:chainlinkStreetGroupPhoto, recap:"Regular Web3 meetups wrapped after a strong season of beginner-friendly talks, networking, and practical demos.", link:"https://gdg.community.dev/gdg-kampala/" },
  { title:"BAU Youth Blockchain Innovation", slug:"bau-youth-blockchain-innovation", date:"Ended — 2026", location:"Uganda", tag:"Programme", color:C.purple, image:buildlSessionPhoto, recap:"BAU's youth innovation programme concluded after equipping local learners with blockchain foundations and growth pathways.", link:"https://bau.ug" },
];

const OPPS = [
  { cat:"Learn & Earn", color:C.cyan, icon:BsMortarboard, items:[
    { title:"Binance Learn & Earn", slug:"binance-learn-and-earn", desc:"Complete short courses and earn crypto rewards.", link:"https://academy.binance.com/", level:"Beginner", logo:binanceOppLogo },
    { title:"Coinbase Learn", slug:"coinbase-learn", desc:"Learn about crypto assets and earn small amounts.", link:"https://www.coinbase.com/learn", level:"Beginner", logo:coinbaseOppLogo },
    { title:"Alchemy University", slug:"alchemy-university", desc:"Free blockchain bootcamp with official certification.", link:"https://university.alchemy.com/", level:"All Levels", logo:alchemyOppLogo },
  ]},
  { cat:"Grants & Funding", color:C.green, icon:BsCashStack, items:[
    { title:"Celo Proof of Ship Season 2", slug:"celo-proof-of-ship-season-2", desc:"A monthly programme where builders ship real projects, document progress publicly, and earn funding inside the Celo ecosystem. $5,000 prize pool distributed across 50 projects every month by AI agents tracking real GitHub activity and on-chain contributions.", link:"https://celoplatform.notion.site/Proof-of-Ship-17cd5cb803de8060ba10d22a72b549f8", level:"Grants & Funding", badge:"Live", prize:"$5,000 monthly prize pool", projectsFunded:"50 projects per month", audience:"Student builders, developers, and Web3 enthusiasts across Uganda and East Africa", ctaLabel:"Apply Now", logo:celoProofOfShipOppLogo },
    { title:"Ethereum Foundation — ESP", slug:"ethereum-foundation-esp", desc:"Small grants for builders contributing to the Ethereum ecosystem.", link:"https://esp.ethereum.foundation/", level:"Intermediate", logo:ethereumFoundationOppLogo },
    { title:"Gitcoin Grants", slug:"gitcoin-grants", desc:"Community-funded grants for open source Web3 projects.", link:"https://gitcoin.co/grants", level:"All Levels", logo:gitcoinOppLogo },
  ]},
  { cat:"Hackathons", color:C.blueLt, icon:BsLightningCharge, items:[
    { title:"DevFest Kampala Hackathon", slug:"devfest-kampala-hackathon", desc:"Annual hackathon at Blockchain DevFest Kampala — June 2026.", link:"https://devfestkampala.com", level:"All Levels" },
    { title:"ETHGlobal Hackathons", slug:"ethglobal-hackathons", desc:"Global online and in-person Ethereum hackathons with real prizes.", link:"https://ethglobal.com/", level:"Intermediate", logo:ethnileGlobalOppLogo },
    { title:"Chainlink Hackathon", slug:"chainlink-hackathon", desc:"Regular hackathons with prize pools for Web3 builders.", link:"https://chain.link/hackathon", level:"Intermediate", logo:chainlinkOppLogo },
  ]},
  { cat:"Jobs & Internships", color:C.purple, icon:BsBriefcase, items:[
    { title:"Web3.career", slug:"web3-career-jobs", desc:"Dedicated job board for remote and global Web3 roles.", link:"https://web3.career/", level:"All Levels", logo:web3CareerOppLogo },
    { title:"Crypto Jobs List", slug:"crypto-jobs-list", desc:"Curated blockchain and crypto job listings worldwide.", link:"https://cryptojobslist.com/", level:"All Levels", logo:cryptoJobListOppLogo },
    { title:"Gitcoin Bounties", slug:"gitcoin-bounties", desc:"Get paid to contribute to open source blockchain projects.", link:"https://gitcoin.co/explorer", level:"Beginner–Intermediate", logo:gitcoinOppLogo },
  ]},
];

const POSTS = [
  { id:7, slug:"rwa-tokenization-africas-on-chain-moment-uganda-2026", author:"Irankunda Musa", tag:"Insights", tagColor:C.blueLt, image:article7BlogImage, title:"From Confusion in Meetups to Africa's On-Chain Moment: Why RWA Tokenization Hits Different in 2026 - And What It Means for Uganda", excerpt:"A DigitalSphereUg breakdown of the biggest blockchain story happening in our own backyard.", date:"April 2026", read:"9 min read", body:`From Confusion in Meetups to Africa's On-Chain Moment: Why RWA Tokenization Hits Different in 2026 - And What It Means for Uganda

A DigitalSphereUg breakdown of the biggest blockchain story happening in our own backyard.

Today, somewhere between my third Web3 meetup of the week and a phone notification that stopped me mid-scroll, something clicked.

One word kept echoing in every room: tokenization.

People were talking passionately about RWA - Real-World Assets. At first I was confused, just like many of you might be right now. Is this crypto hype or something real?

Then my phone lit up: tokenized real-world assets have crossed $26 billion in Total Value Locked globally.

Not surprising. In 2025, RWA became one of the biggest drivers of blockchain adoption worldwide. In 2026 it is moving from pilots to real infrastructure. From conversation to construction.

And at that moment, a second notification reminded me of something every Ugandan in the blockchain space should know: Uganda's $5.5 billion tokenized economy - the Diacente Group and Global Settlement Network (GSN) partnership - paired with the pilot of our digital shilling CBDC.

That moment connected everything. This is worthy of our full attention.

What Is RWA - In Plain English

RWA stands for Real-World Asset tokenization.

It is the process of taking real, tangible things - farms, factories, solar plants, mines, real estate, government bonds - and turning ownership rights into digital tokens on a blockchain.

These tokens represent a claim on the actual asset. Not crypto hype. Real value, made accessible.

Think of it this way: instead of a farmer struggling to get a loan against their harvest because paperwork is slow and trust is low - tokenization makes that harvest a digital asset that investors anywhere in the world can support transparently.

That is the power of RWA. Not speculation. Infrastructure.

Uganda Is Not Watching From the Sidelines

Diacente Group and GSN have partnered to launch a $5.5 billion tokenized economy in Uganda - digitizing real infrastructure across agro-processing, mineral extraction, renewable energy, and trade logistics.

The centrepiece is the Karamoja Green Industrial and Special Economic Zone (GISEZ) - already a national flagship under Uganda's development plan.

Running alongside it is Uganda's first CBDC pilot - the digital shilling - deployed on a permissioned blockchain and accessible via smartphone and USSD. Over 40 million Ugandans can transact digitally including those with the most basic phones.

The projected impact: over one million jobs and up to $10 billion in annual exports.

This is Africa taking ownership of its infrastructure story - using blockchain not for speculation but for practical, generational development.

What This Means For Your Career

This is the section most people skip. Do not.

Uganda's tokenized economy is not just a government project. It is a job market that does not fully exist yet - and the people who prepare now will be first in the door when it opens.

What will be needed:

Smart contract developers - building protocols that govern tokenized assets and automated settlements.

Compliance specialists - every tokenized asset needs KYC, AML, and regulatory alignment. This is non-negotiable.

RWA valuers and analysts - someone has to assess whether a solar plant in Karamoja is worth what its token claims. A new profession being born right now.

Mobile-first product designers - the CBDC runs on USSD. Reaching 40 million Ugandans means building for the least powerful phone, not the latest iPhone.

Community educators - explaining tokenization to a farmer in Mbale or a market trader in Owino requires someone who speaks both blockchain and Ugandan daily reality. Rare. Genuinely valuable.

The entry point for all of these is the same - curiosity, consistency, and starting now.

Why Local Voices Are the Most Powerful Force in the Room

International capital and foreign technology can build the infrastructure. But the people who make it work on the ground - who make it inclusive, understood, and trusted by ordinary Ugandans - those have to come from here.

The Diacente and GSN initiative will need Ugandan developers, designers, educators, compliance experts, and entrepreneurs who understand how to integrate blockchain with MTN Mobile Money and Airtel Money rails.

That is where local knowledge becomes irreplaceable. And that is where you come in.

DigitalSphereUg Is Here to Bridge the Gap

We are not just watching Uganda's tokenized economy take shape. We are preparing Ugandans and East Africans to participate in it meaningfully.

Here is where to start right now:

Learn the basics - Track 1 walks you through blockchain from the ground up. No experience needed. No cost.

https://digitalsphereug.tech/learn

Find opportunities - grants, hackathons, bootcamps, and jobs connected to Uganda's blockchain ecosystem.

https://digitalsphereug.tech/opportunities

Stay informed - daily blockchain and Web3 updates without the noise.

https://t.me/digitalsphereug

Join the community - 300+ Ugandans already inside.

https://digitalsphereug.tech/community

The Moment That Brought This Home

At a recent Chainlink session at Kyambogo, a classmate - Semwogere Collins - attending his very first blockchain event, made a quiet promise.

He would dedicate 15 minutes every day to learning about this technology.

Not hours. Not a full course. Just 15 minutes of consistent curiosity every single day.

That is what this moment asks of every Ugandan student. Not mastery. Just 15 minutes a day of choosing to understand the technology being built in your own country - so that when the doors open, you are ready to walk through them.

Your Move

The next wave of blockchain in Uganda is not coming. It is already here. The only question is whether you are building it or watching it pass.

Explore the platform - https://digitalsphereug.tech

Subscribe to this blog - every article is a step further into the ecosystem

Share this - one share could be the moment that changes someone's direction entirely

DigitalSphereUg - A Student-Powered Blockchain and Web3 Platform.

Uganda. East Africa. The Continent.

Irankunda Musa | Lead, DigitalSphereUg

https://digitalsphereug.tech` },
  { id:6, slug:"celo-proof-of-ship-season-2-is-live", author:"Irinatwe Bright", tag:"Opportunities", tagColor:C.green, image:article6BlogImage, title:"Celo Proof of Ship Season 2 Is Live — And You Cannot Afford to Sit This One Out", excerpt:"The opportunity putting student builders across Uganda on the global Web3 map.", date:"March 2026", read:"6 min read", body:`Celo Proof of Ship Season 2 Is Live — And You Cannot Afford to Sit This One Out

The opportunity putting student builders across Uganda on the global Web3 map.

Ever heard of Celo Proof of Ship?

If not, this is exactly why DigitalSphereUg exists. Bringing the right opportunities to students in real time, so nobody misses what could change everything.

What Is Celo Proof of Ship?

Celo Proof of Ship is a monthly programme where builders ship real projects, document their progress publicly, and earn recognition and funding inside the Celo ecosystem.

Every month, a $5,000 prize pool is distributed across 50 participating projects. Not by a panel of judges in a pitch room, but by AI agents tracking your actual GitHub activity and on-chain contributions. Your work speaks for itself.

The most impactful projects earn a spot in a live Builder Showcase, presented directly to Celo ecosystem partners, investors, and funders from across the globe.

Why It Is a Big Deal for Students in Uganda

Celo is not a random choice for Africa. It is a blockchain built with Africa in mind: MiniPay, cUSD stablecoins, and mobile-first payment tools designed for the financial realities we live with every day.

By participating, you build an on-chain reputation, a permanent, verifiable record of every project and contribution stored on the blockchain. This credential follows you across the entire Web3 ecosystem, opening doors to grants, retroactive funding, and global opportunities long after the programme ends.

You also gain real connections with builders and mentors worldwide, global visibility through the monthly showcase, and direct entry into one of the most active blockchain ecosystems on the continent.

The barrier is not geography. Not your university. Not your background. It is simply the decision to start.

What Is Stopping You From Building?

Fear to try. Fear to build in public. Fear to be seen before you feel ready.

Nobody feels ready. The builders who win are the ones who ship anyway.

Every detail on how to register, set up your project, and start building is on our opportunities page. Drop your thoughts in the comments. We want to hear what you are working on.

1. Join the community — https://t.me/digitalsphereug

2. Subscribe — every opportunity lands in your inbox before anywhere else

3. Share this — the builder who needs this might be one share away

DigitalSphereUg — A Student-Powered Blockchain & Web3 Platform.

Uganda, East Africa, Uganda

Irinatwe Bright | Co-Founder & Content Lead, DigitalSphereUg` },
  { id:5, slug:"chainlink-digital-sphere-kyambogo", author:"Irankunda Musa", tag:"Events", tagColor:C.cyan, image:article3UpdatedBlogImage, title:"DigitalSphereUg Showed Up at Kyambogo — And Nobody Wants to Miss What Comes Next", excerpt:"What happens when blockchain experts walk into Kyambogo and students who came confused walk out with clarity.", date:"March 28, 2026", read:"6 min read", body:`DigitalSphereUg Showed Up at Kyambogo — And Nobody Wants to Miss What Comes Next

What happens when blockchain experts walk into Kyambogo and students who came confused walk out with clarity.

Something shifted at Kyambogo University today.

A room full of students, some hearing the word \"blockchain\" for the very first time, others carrying months of confusion with nowhere to put it, sat down with on-chain Chainlink experts and walked out with clarity they did not have when they walked in.

The session was organized by ChainlinkEastAfrica, a team that understands exactly what this ecosystem needs at the grassroots level and keeps showing up to deliver it.

DigitalSphereUg came as a community. Eager. Taking notes. Ready to bring everything back to every student who could not be in that room.

Today, we brought it back.

The Internet Grew Up. Did You Notice?

Before DeFi, the session grounded everyone in context. Three phases. Three different internets.

Web1 (1991–2004): Read only. A library you could visit but never write in. You consumed information. That was it.

Web2 (2004–Present): Read and write. Social media. Platforms. You could create and share, but the platforms owned everything. Facebook, Google, and YouTube built trillion-dollar businesses on content created by users who received nothing in return.

Web3 (2020–Present): Read, write, and own. Your data. Your assets. Your identity. No corporation in the middle taking a cut. The power shifts from platforms back to people.

Web3 is not just a technology upgrade. It is a fundamental restructuring of who controls the internet and who benefits from it.

What Is DeFi and Why Does It Matter Here?

Decentralized Finance. The theme of the day.

DeFi is the blockchain-powered alternative to the traditional financial system: banking, lending, borrowing, and earning without banks, brokers, or any middlemen.

The question everyone always asks: \"How can my funds be secure without a bank?\"

Here is the answer.

When you open a bank account at Centenary Bank, you hand over your identity, your funds, and your financial life. If that bank faces trouble, freezes accounts, or abruptly closes, your money is at risk. You trusted them. They hold the power. That is CeFi, Centralized Finance built entirely on trust.

DeFi is trustless. No institution holds your funds. No one can freeze your account. Create a wallet, secure your seed phrase, share your public address, and receive funds from anywhere on earth without sharing a single piece of personal information.

Transactions move on-chain, recorded as blocks, distributed across thousands of computers simultaneously, verified by the network, and permanently locked. Once confirmed, nothing reverses it. No bank. No middleman. No permission required.

Chainlink — Where Blockchain Meets the Real World

Blockchain is powerful. But it has one limitation: it cannot natively access real-world data.

A smart contract on Ethereum cannot know the current price of maize in Kampala, the weather in Mbarara, or whether a shipment arrived at the port.

Chainlink solves that.

Chainlink is a decentralized oracle network, a bridge connecting blockchain smart contracts to real-world data. It sources information from multiple independent nodes, aggregates the results, and feeds verified, tamper-proof, real-time data directly into smart contracts.

A practical example close to home: imagine a DeFi lending protocol offering loans to smallholder farmers in Uganda using their expected harvest as collateral. Chainlink oracles feed real-time maize prices into the smart contract automatically, no human operator, no bank required. The farmer gets a fair loan. The lender gets reliable data.

That is Chainlink powering DeFi in a real African context.

The session also covered Chainlink Automation, Cross-Chain Interoperability Protocol (CCIP) which allows different blockchain networks to communicate securely, and Enterprise Connectivity, closing the gap between traditional institutions and blockchain infrastructure.

The conclusion: Chainlink enables hybrid smart contracts, combining the security of on-chain code with the richness of real-world data.

The Opportunity Nobody Told You About

This is the part every student in that room needed to hear.

Web3 is one of the fastest growing job markets in the world. It does not care where you studied, what your grades were, or which city you live in. It cares about what you can build, what you understand, and how you contribute.

The roles stretch far beyond coding: community managers, ecosystem educators, DAO contributors, business development leads, blockchain researchers. Every protocol needs people who can explain complex technology to real humans. That skill is rare and valuable.

And for those ready to go deeper, ChainlinkEastAfrica is actively looking for Chainlink Champions across Uganda and East Africa. An official ambassador programme with access to exclusive resources, global visibility, speaking opportunities, and direct support from the Chainlink team.

The barrier is not geography. It is knowledge. And that is exactly what this session was designed to remove.

The Moment That Made Today Worth Everything

At the end of the session, a classmate, Semwogere Collins, attending his very first blockchain event, made a quiet promise.

Fifteen minutes every day. To learn this technology.

Not hours. Not a bootcamp. Just fifteen minutes of consistent curiosity, every single day.

That is what onboarding looks like. One person, genuinely moved, genuinely committed, deciding to begin. That moment is worth more than a thousand passive attendees.

It is exactly what DigitalSphereUg was built to create.

Your Move

The next wave of Blockchain is not coming. It is already here. The only question is whether you are building it or watching it pass.

DigitalSphereUg is onboarding the next generation of Web3 builders across Uganda, East Africa, and the Continent.

1. Join the community — https://t.me/digitalsphereug

2. Subscribe to this blog — every session becomes a lesson you did not miss

3. Share this — one share could be someone else's fifteen-minutes-a-day moment

DigitalSphereUg — A Student-Powered Blockchain & Web3 Platform. Uganda, East Africa,The Continent.

Irankunda Musa | Founder & Community Lead, digitalsphereug.tech` },
  { id:4, slug:"the-room-laughed-i-stayed-now-were-building", author:"Irankunda Musa", tag:"Community", tagColor:C.purple, image:article4BlogImage, title:"The Room Laughed. I Stayed. Now We're Building.", excerpt:"A story about showing up uninvited to the future - and deciding to open the door for everyone else.", date:"March 2026", read:"", body:`The Room Laughed. I Stayed. Now We're Building.

A story about showing up uninvited to the future and deciding to open the door for everyone else.

The whole room laughed at me.

Not cruelly. Not maliciously. But fully, genuinely, and audibly, because I had just told a room full of blockchain developers that the programming language I knew was HTML.

I did not walk out.

That decision to stay in that room, sit with the embarrassment, and keep listening even when every word sounded foreign is the reason DigitalSphereUg exists today.

Africa Is Not Waiting For Permission

Let us be honest about what is happening right now.

Across this continent, millions of young people are watching a financial revolution unfold in real time, yet the door still feels locked from the inside. The language is technical. The events are developer-heavy. The entry points are often invisible. And the message, spoken or not, can feel the same: this space is not for you.

We reject that entirely.

Africa is not a footnote in the blockchain story. Africa is the story: remittances, currency instability, unbanked populations, mobile-first infrastructure, and the hunger to build solutions that solve real problems. The pieces are here. The people are here.

What has been missing is a movement that starts where people are.

That is what we are building. And it started with a laugh.

January 2025. A Room I Was Not Ready For.

Second semester had just begun when my friend Bright invited me to a Stellar meetup. I skipped a lecture to attend, not recklessly, but because I had been hearing Bitcoin everywhere and genuinely needed to understand what the noise was about.

Someone accidentally pointed at me mid-session and asked, "What programming language do you know?"

I answered honestly. Proudly, even.

"HTML."

Laughter.

I sat with it. I did not leave. But I listened to JavaScript, Python, C, Rust, and Solidity, names flying around like a language I had no dictionary for. When the lead started explaining smart contracts in Rust, I stopped trying to keep up and started wondering if I had walked into the wrong life entirely.

I left that afternoon and quietly made a decision: blockchain is not for me.

Curiosity Is Louder Than Shame

I went back to my books and focused on business. But I kept searching: Blockchain, Ethereum, Web3, Bitcoin. Every article opened three more questions. The confusion did not leave. It waited.

Then June arrived with Blockchain DevFest Kampala.

I went back.

And this time, the door opened. Wallets, seed phrases, public keys, private keys. The full arc of a transaction, simplified, human, and real. For the first time, digital money stopped being philosophy and became mechanics. Something I could see, touch, and follow.

Young innovators from across Africa stood in that room and talked about DeFi, stablecoins, and NFTs not as buzzwords, but as infrastructure being laid right now by people who looked like us, from cities like ours.

I stopped feeling like an outsider. I started feeling like I was early.

The Year I Refused To Stop Showing Up

EthNile, November: the first Ethereum-focused event in Kampala. Builders, investors, founders, traders, and students in one room. Real World Assets. Zero-Knowledge Proofs. CBDCs. Topics that sounded impossible three months earlier now had names I could write down, research, and return to.

Stellar BuidlAfrica, November: opportunities in DeFi, smart contracts, supply chain, healthcare, and ecosystem grants. A table fully set. Seats still open.

Chainlink End-of-Year Meetup, December: oracles, data feeds, proof of reserve, and cross-chain interoperability. The architecture of a new financial internet, explained one layer at a time.

I crossed into 2026 with something I did not have twelve months earlier: a foundation built from refusing to quit.

Not a degree. Not a certification. A foundation built entirely from showing up, staying curious, and choosing not to let confusion be the final answer.

This Is Bigger Than One Student. Bigger Than One Country.

Here is the uncomfortable truth about the African blockchain ecosystem.

The talent is here. The hunger is here. The use cases, financial inclusion, cross-border payments, land registries, and supply chains, are more relevant here than almost anywhere else on earth.

But the pipeline from curious student to active contributor is broken. The entry points are too technical, too exclusive, and too far from where most students actually are.

We are not waiting for someone else to fix that.

DigitalSphereUg, built alongside fellow enthusiasts Irinatwe Bright and Rwego Edward, is a student-powered blockchain and Web3 platform built for Uganda, scaled for East Africa, and designed with the entire continent in mind.

We start where students are. We walk with them forward. We build the pipeline that should have existed when we were looking for a door.

To The Founders Reading This

If you are building in the African Web3 space, or looking to, and you are not actively investing in the next generation of local talent, you are making a strategic mistake.

The students showing up to meetups across Kampala, Nairobi, Lagos, and Kigali right now are not the future of this ecosystem. They are the ecosystem. They are the community managers, the developers, the early adopters, and the advocates who will carry your protocol into places no marketing budget can reach.

DigitalSphereUg is on the ground. We are organized. We are growing. And we are open to partnerships with organizations and founders who believe adoption in Africa is not a charity project. It is the smartest bet in the room.

Let us talk.

Your Move

If you are a student who has heard about blockchain and felt like the door was locked, it is not locked. It was never locked. You just needed someone to show you the handle. We are that someone.

If you are a founder or organization ready to partner with a movement that is rooted, real, and scaling, reach out. The conversation starts here.

Three things. Right now.

1. Join DigitalSphereUg and be part of this from day one, not day one thousand.

2. Subscribe to this blog. Every article is a step further into the ecosystem.

3. Share this. Your share could be someone else's DevFest moment, the one that changes everything.

The room laughed.

I stayed.

Now we are building a room where no one has to choose between their curiosity and their dignity.

Come build it with us.

DigitalSphereUg - A Student-Powered Blockchain & Web3 Platform.

Uganda. East Africa. The Continent.

Written by Irankunda Musa | Founder & Community Lead, DigitalSphereUg.` },
  { id:1, slug:"what-is-blockchain-and-why-every-ugandan-should-care-right-now", oldSlugs:["what-is-blockchain-uganda"], author:"Irankunda Musa", tag:"Education", tagColor:C.green, image:article1BlogImage, title:"What Is Blockchain — And Why Every Ugandan Should Care Right Now", excerpt:"A DigitalSphereUg beginner's guide to the technology reshaping Africa's future.", date:"April 2026", read:"12 min read", body:`What Is Blockchain — And Why Every Ugandan Should Care Right Now

A DigitalSphereUg beginner's guide to the technology reshaping Africa's future.

There is a word you keep hearing everywhere.

In meetups. On social media. In government announcements. In conversations between people who seem to know something you do not.

Blockchain.

And every time it comes up, it either sounds too technical to engage with or too hyped to take seriously.

This article is for everyone who has heard the word and kept scrolling. For every student who sat in a room where blockchain was being discussed and nodded along without fully understanding what was being said.

We are going to fix that today. No jargon. No assumptions. Just a clear, honest explanation of what blockchain actually is — and why it matters more in Uganda and East Africa than almost anywhere else on earth.

Start Here — The Problem Blockchain Was Built to Solve

Before explaining what blockchain is, it helps to understand the problem it was built to solve.

Imagine you want to send money from Kampala to your cousin in Nairobi.

Right now, that process looks something like this: you go to a bank or mobile money agent, hand over your money, pay a fee, and trust that a chain of institutions — your bank, possibly an intermediary, your cousin's bank — will move that value correctly and deliver it in full. The process takes time. The fees eat into the amount. And at every step, you are trusting institutions you have no real visibility into.

Now ask yourself a harder question: how does your bank know your account balance is correct? Because they keep a record. Their record. On their servers. Under their control.

If that record is wrong — through error, fraud, or institutional failure — your money is at risk. You have no independent way to verify it. You simply trust.

Blockchain was built to remove that trust requirement entirely.

What Is Blockchain — The Real Explanation

A blockchain is a shared digital record book that nobody owns but everybody can see.

Instead of one bank, one company, or one government keeping a single copy of a record on their private servers — a blockchain copies that same record across thousands of computers simultaneously, all around the world.

Every time a new transaction happens it is grouped with other recent transactions into a block. That block is verified by the network, given a unique digital fingerprint called a hash, and added to the chain of all previous blocks in chronological order.

Hence the name: block plus chain.

Once a block is added it cannot be changed. If someone tries to alter a record in an old block the hash changes — and every subsequent block in the chain immediately becomes invalid. The entire network sees the tampering instantly. The dishonest version gets rejected.

This is what people mean when they say blockchain is immutable — what is written cannot be unwritten.

Three Properties That Make It Different

Decentralization

No single person, company, or government controls a public blockchain. There is no head office. No CEO. No central server that can be shut down, hacked, or coerced. Thousands of computers — called nodes — each hold an identical copy of the entire record. For a transaction to be valid, the majority of nodes must agree. One bad actor cannot corrupt the whole system.

Transparency

Every transaction ever recorded on a public blockchain is visible to anyone in the world. You can look up any wallet address and see its complete history. Nothing is hidden. No backroom deals. No manipulated books.

Trustlessness

This is the most important and most misunderstood property. Trustless does not mean you cannot trust anyone. It means you do not have to. The system enforces honesty through mathematics and code — not through goodwill or institutional reputation. Two strangers on opposite sides of the world can transact directly, with the blockchain as their neutral, incorruptible referee.

A Ugandan Lens — Why This Matters Here Specifically

The properties above are interesting everywhere. But they are transformative in Uganda and across Africa. Here is why.

Land ownership disputes are one of the most common and costly legal battles in Uganda. Records are fragmented, paper-based, and vulnerable to manipulation. A land registry built on blockchain would be public, permanent, and impossible to falsify without the entire network detecting it.

Cross-border remittances remain one of the most expensive financial services in East Africa. Formal average fees across Africa often exceed 8 to 9 percent — meaning if your relative in the diaspora sends you $200, up to $18 disappears before it reaches you. Blockchain is already changing this in our region. Celo's stablecoin cUSD — pegged to the US dollar and built for mobile — is being used across East Africa for exactly this problem. A pilot by Celo Foundation and Mercy Corps Ventures in Kenya demonstrated that using cUSD reduced average transaction costs from 28.8 percent down to 2.02 percent for a $5 transfer — a 93 percent reduction in fees. The same infrastructure is available to Ugandans today. Celo Uganda, an active community in Kampala, is already building local awareness and adoption around these tools.

Financial inclusion remains a challenge in rural Uganda where formal banking infrastructure is thin. Mobile money has made enormous progress. Blockchain builds on top of that progress — enabling savings, lending, insurance, and investment products that require no bank account, no physical branch, and no traditional credit history.

Supply chain integrity — from coffee farms in Mount Elgon to export markets in Europe — can be tracked transparently on-chain. Every step. Every hand the product passes through. Every price paid. Buyers get verified proof of origin and fair trade practices. Farmers get fairer prices.

The problems blockchain solves are not abstract first-world problems. They are the daily realities of millions of Ugandans. That is why this technology matters here more than the noise around it suggests.

How Does a Blockchain Transaction Actually Work

Walk through what happens when you send cryptocurrency from one wallet to another:

Step 1 — You initiate the transaction

You open your wallet app and send a specified amount to another wallet address. Your wallet signs the transaction with your private key — a unique cryptographic proof that you authorise this specific transfer.

Step 2 — The transaction is broadcast

Your signed transaction is sent out to the network. Every node receives a copy and holds it in a waiting area called the mempool — a pool of pending transactions.

Step 3 — Verification

Nodes compete to verify batches of pending transactions and bundle them into a block. The verification process — called a consensus mechanism — ensures no fraudulent transactions make it through.

Step 4 — The block is added

The verified block is added to the chain. Every node updates its copy of the record simultaneously. The transaction is now permanent and irreversible.

Step 5 — Confirmation

Your recipient sees the funds. On modern blockchains like Ethereum, the process typically completes in under a minute under normal conditions. On Bitcoin, expect a few minutes.

No bank approved it. No branch processed it. No business hours applied.

Proof of Work vs Proof of Stake — The Two Main Consensus Mechanisms

When thousands of strangers around the world all need to agree on what is true without trusting each other, the blockchain needs a system for reaching that agreement. These systems are called consensus mechanisms.

Proof of Work — used by Bitcoin

Miners — participants with powerful computers — compete to solve complex mathematical puzzles. The first to solve the puzzle earns the right to add the next block and receives a reward in cryptocurrency. The competition is intentionally difficult and energy-intensive — making it expensive to cheat.

Think of it like a room full of students all racing to solve the same incredibly hard exam question. The winner gets to write the answer on the board — and everyone checks it before accepting it.

Proof of Stake — used by Ethereum and most modern blockchains

Instead of competing through computation, validators are selected based on how much cryptocurrency they lock up as collateral — called staking. If a validator attempts fraud, they lose their stake. Honest participation is financially incentivised. Dishonesty is financially punishing.

More energy efficient. Faster. And increasingly the standard for new blockchains.

What Can Be Built on Blockchain

The ledger itself is the foundation. What gets built on top of it is where it gets genuinely exciting.

Cryptocurrency

The most well-known application. Digital money that moves without banks. Bitcoin, Ethereum, and thousands of others.

Smart Contracts

Self-executing agreements written in code. When condition A is met, action B happens automatically — no lawyer, no middleman, no delay. The foundation of DeFi, NFTs, DAOs, and most of what we call Web3.

DeFi — Decentralised Finance

Banking services — lending, borrowing, earning interest, trading — built on smart contracts and accessible to anyone with an internet connection. No credit score. No branch visit. No rejected application.

NFTs — Non-Fungible Tokens

Proof of unique ownership for digital and physical assets. Most relevant for Uganda right now: verifying land ownership on-chain, making records permanent and tamper-proof. Beyond land, NFTs are used by institutions verifying real-world ownership, artists, musicians, and game developers.

DAOs — Decentralised Autonomous Organisations

Organisations governed by smart contracts and community votes rather than boards of directors or shareholders. Every rule is written in code. Every decision is transparent. Imagine a Ugandan farmers cooperative governed entirely by smart contracts — every member votes, every decision is recorded, no single person controls the funds.

RWA — Real World Asset Tokenization

Physical assets — farms, factories, solar plants, bonds — converted into digital tokens on a blockchain, enabling fractional ownership, global investment, and transparent settlement. Globally, real world asset tokenization is one of the fastest growing sectors in blockchain. For Uganda — where land disputes are common, investment access is limited, and agricultural supply chains lack transparency — the applications are immediate and practical.

What Blockchain Is Not

Because the noise around this technology is loud, it is worth being clear about what it is not.

Blockchain is not Bitcoin. Bitcoin is one application built on one blockchain. The technology is far broader than any single cryptocurrency.

Blockchain is not anonymous. Public blockchains are pseudonymous — wallet addresses are visible to everyone, even if the identity behind them is not immediately obvious. With enough analysis, transactions can be traced.

Blockchain is not a scam. Like any technology, it has been used fraudulently by bad actors. The technology itself is neutral. Electricity powers hospitals and weapons. The internet built Wikipedia and enabled fraud. Blockchain is a tool. The outcome depends on who uses it and how.

Blockchain is not only for developers. The ecosystem needs educators, writers, designers, compliance specialists, community managers, and entrepreneurs. Understanding the technology — even without writing a single line of code — is a genuinely valuable skill.

Where Do You Start

Understanding blockchain is the first step. But understanding without direction leads nowhere.

Here is a clear path forward:

Start with Track 1 on DigitalSphereUg

Our Blockchain Basics track was built for exactly this moment — for someone who has read an article like this and wants to go deeper without getting lost. Free. Structured. No experience needed.

https://digitalsphereug.tech/learn

Explore the tools

MetaMask, Remix IDE, Etherscan, testnets — our Resources page has everything you need to go from reading about blockchain to actually interacting with it.

https://digitalsphereug.tech/resources

Find your opportunity

Grants, hackathons, bootcamps, and jobs connected to Uganda's blockchain ecosystem.

https://digitalsphereug.tech/opportunities

Join the community

300+ Ugandans already building their Web3 future together. Daily updates. Real conversations. No noise.

https://t.me/digitalsphereug

The Honest Bottom Line

Blockchain is not magic. It is not a guaranteed path to wealth. It is not going to solve every problem Uganda faces overnight.

But it is real infrastructure being built right now — from Kampala's startup scene to across East Africa and the world. And the gap between people who understand it and people who do not is going to matter in ways we are only beginning to see.

The best time to start learning was five years ago.

The second best time is right now.

DigitalSphereUg — A Powered Blockchain & Web3 Platform.

Uganda, East Africa, Africa.

Irankunda Musa | Lead, DigitalSphereUg` },
  { id:2, slug:"top-free-resources-web3-2026", author:"Irinatwe Bright", tag:"Resources", tagColor:C.blueLt, image:article2BlogImage, title:"Top Free Resources to Start Your Web3 Career in 2026", excerpt:"You don't need to spend a single shilling to start learning blockchain development. Here are the best free platforms available right now.", date:"March 2026", read:"7 min read", body:"The barrier to entering Web3 is not money. It is knowing where to start. Here is the honest answer.\n\nFor complete beginners, start with CryptoZombies. It teaches Solidity — the language used to write Ethereum smart contracts — through a game. It sounds simple. It is genuinely the best beginner Solidity course online.\n\nOnce you have the basics, move to Cyfrin Updraft. Patrick Collins built this platform specifically to train the next generation of blockchain developers. It is completely free and professionally produced.\n\nFor building actual applications, Alchemy University's Road to Web3 is unmatched. It walks you from zero to deployed dApp in a structured programme with real projects.\n\nNone of these cost anything. All of them are recognised by employers globally. Start today." },
  { id:3, slug:"blockchain-opportunities-uganda", author:"Irankunda Musa", tag:"Opportunities", tagColor:C.cyan, image:article3BlogImage, title:"Blockchain Opportunities in Uganda Right Now", excerpt:"From the Blockchain Association of Uganda to DevFest Kampala, here's what's happening locally — and how to position yourself to benefit.", date:"March 2026", read:"6 min read", body:"Uganda's blockchain ecosystem is small but growing fast. Here is what is happening now and how to get involved.\n\nThe Blockchain Association of Uganda (BAU) is the country's main industry body. They run programmes, connect companies with talent, and advocate for blockchain-friendly policy.\n\nBlockchain DevFest Kampala is the flagship technical event. Every year it brings together developers, entrepreneurs, and investors from across Africa. Attending — even as a first-timer — opens doors that LinkedIn cannot.\n\nGlobally, platforms like Gitcoin pay developers in cryptocurrency to fix bugs and contribute to open source projects. A Ugandan with solid Solidity skills can earn in USD or ETH from their laptop in Kampala.\n\nThe window is open. The question is whether you walk through it." },
];

const GALLERY_ITEMS = [
  { image:devfestCrowdPhoto, title:"Blockchain DevFest Kampala", date:"June 28, 2025", location:"Kampala, Uganda", summary:"Uganda's biggest Web3 developer conference. DigitalSphereUg was in the room." },
  { image:ethnileGroupHero, title:"ETHNile Kampala Community Day", date:"October 2025", location:"Ndere Culture Center, Kampala, Uganda", summary:"Builders, students, and founders connected around Ethereum education and real collaboration during the first Ethereum-focused event in Kampala." },
  { image:ethnileEventPhoto, title:"ETHNile Event Session", date:"October 2025", location:"Ndere Culture Center, Kampala, Uganda", summary:"We joined focused talks on blockchain adoption and practical next steps for local talent." },
  { image:communityWhatsAppMomentPhoto, title:"Community Workshop Moment", date:"March 2026", location:"Kampala, Uganda", summary:"A candid moment from one of our hands-on learning sessions with local builders." },
  { image:chainlinkRooftopPhoto, title:"Chainlink Rooftop Session", date:"December 12, 2025", location:"Kampala, Uganda", summary:"We attended to deepen our understanding of oracle-powered applications for African use cases." },
  { image:chainlinkGroupGalleryPhoto, title:"Chainlink End-Of-Year Community Meetup", date:"December 12, 2025", location:"Kampala, Uganda", summary:"Developers met for a practical session on smart contract tooling and community building." },
  { image:buildAfricaHubPhoto, title:"BUIDL Africa Conference", date:"November 15, 2025", location:"Kampala, Uganda", summary:"DigitalSphereUg showed up to support youth-driven innovation and hands-on technical learning." },
  { image:buidlAfricaScenesPhoto, title:"Scenes From BuidlAfrica 2025", date:"2025", location:"Kampala, Uganda", summary:"Highlights from BuidlAfrica sessions focused on collaboration and practical blockchain building." },
  { image:filecoinGroupPhoto, title:"Filecoin Community Session", date:"March 21, 2026", location:"Kampala, Uganda", summary:"We attended to explore decentralized storage opportunities and ecosystem onboarding paths." },
  { image:avalancheScenesPhoto, title:"Avalanche Community Event", date:"February 2026", location:"Kampala, Uganda", summary:"The event brought together regional builders to discuss scalability, tooling, and product execution." },
  { image:stellarSorobanSessionPhoto, title:"Stellar EAC Soroban Interactive Session", date:"2026", location:"Kampala, Uganda", summary:"Interactive discussions around Soroban development and the Stellar East Africa ecosystem." },
  { image:kyambogoLecturePhoto, title:"BUIDLAfrica Discussion on Web3 & Blockchain Opportunities and Career Paths", date:"2026", location:"National ICT INNOVATION HUB, Nakawa", summary:"Students engaged directly with Web3 career pathways and beginner-friendly learning routes." },
  { image:stellarGroupPhoto, title:"Stellar Group Session", date:"June 6, 2025", location:"Sheron Hotel, Kikoni Kampala", summary:"We joined the session to connect with East African builders and expand practical developer exposure." },
  { image:ethnileVenuePhoto, title:"ETHNile Venue Day", date:"2025", location:"Ndere Culture Center, Kampala, Uganda", summary:"The gathering highlighted ecosystem partnerships and community-led momentum in Uganda." },
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
    linkedin: "https://www.linkedin.com/in/irinatwebright1010?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    x: "https://x.com/IrinatweBright",
    active: true,
  },
  {
    name: "Rwego Edward",
    role: "Technical Lead",
    bio: "Edward Rwego is the person who makes things actually work. As Technical Lead at DigitalSphereUg, he builds and maintains the platform, leads technical sessions, and makes sure Ugandans have the right tools they need to enter the blockchain ecosystem.",
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

const MARQUEE_TECH = [
  { name:"Ethereum", logo:ethereumResourceLogo, tint:"#4d6ff0" },
  { name:"Solidity", logo:solidityResourceLogo, tint:"#38bdf8" },
  { name:"Chainlink", logo:chainlinkResourceLogo, tint:"#2847D4" },
  { name:"Celo", logo:celoResourceLogo, tint:"#34d399" },
  { name:"Hardhat", logo:hardhatResourceLogo, tint:"#f0b429" },
  { name:"MetaMask", logo:metaMaskResourceLogo, tint:"#f59e0b" },
  { name:"Web3.js", logo:web3JsResourceLogo, tint:"#38bdf8" },
  { name:"Stellar", logo:stellarResourceLogo, tint:"#8b5cf6" },
  { name:"Base", logo:baseResourceLogo, tint:"#3b82f6" },
  { name:"Filecoin", logo:filecoinResourceLogo, tint:"#3b82f6" },
];

const MARQUEE_ECOSYSTEM = [
  { name:"ETHNile", logo:ethnileLogoImage, tint:"#4d6ff0" },
  { name:"Celo Africa DAO", logo:celoAfricaDaoResourceLogo, tint:"#34d399" },
  { name:"Chainlink East Africa", logo:chainlinkEastAfricaResourceLogo, tint:"#2847D4" },
  { name:"Stellar East Africa", logo:stellarEastAfricaResourceLogo, tint:"#8b5cf6" },
  { name:"BAU Uganda", logo:bauResourceLogo, tint:"#38bdf8" },
  { name:"Algorand Africa", logo:algorandAfricaLogoImage, tint:"#22d3ee" },
  { name:"Binance Africa", logo:binanceAfricaResourceLogo, tint:"#f0b429" },
  { name:"BuidlAfrica", logo:buidlAfricaResourceLogo, tint:"#4d6ff0" },
];

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Learn", path: "/learn" },
  { label: "Events", path: "/events" },
  { label: "Gallery", path: "/gallery" },
  { label: "Opportunities", path: "/opportunities" },
  { label: "Resources", path: "/resources" },
  { label: "Blog", path: "/blog" },
  { label: "Community", path: "/community" },
  { label: "About", path: "/about" },
];
const PAGE_ROUTES = Object.fromEntries(NAV_LINKS.map((item) => [item.label, item.path]));
const FOOTER_LINKS = NAV_LINKS.map((item) => item.label).filter((label) => label !== "Home");
const SITE_URL = "https://digitalsphereug.tech";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;
const STORAGE_KEYS = {
  completedResources: "dsug_done",
  theme: "dsug_theme",
};

const toSlug = (value = "") => value
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, "")
  .trim()
  .replace(/\s+/g, "-");

const ALL_EVENTS = [...EVENTS, ...PAST_EVENTS].map((event) => ({
  ...event,
  slug: event.slug || toSlug(event.title),
}));

const OPPORTUNITY_ITEMS = OPPS.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    cat: category.cat,
    color: category.color,
    slug: item.slug || toSlug(item.title),
  })),
);

const TRACKS_BY_SLUG = Object.fromEntries(TRACKS.map((track) => [track.slug || toSlug(track.title), track]));

function getShareUrl(pathname) {
  const origin = typeof window !== "undefined" ? window.location.origin : SITE_URL;
  return `${origin}${pathname}`;
}

function matchesPostSlug(post, slug) {
  if (!slug) {
    return false;
  }

  const primarySlug = post.slug || toSlug(post.title);
  if (primarySlug === slug) {
    return true;
  }

  return Array.isArray(post.oldSlugs) ? post.oldSlugs.includes(slug) : false;
}

function findPostBySlug(slug) {
  return POSTS.find((item) => matchesPostSlug(item, slug)) || null;
}

function getPathFromPage(page) {
  if (typeof page !== "string") {
    return PAGE_ROUTES.Home;
  }

  const direct = PAGE_ROUTES[page];
  if (direct) {
    return direct;
  }

  const matchedItem = NAV_LINKS.find((item) => item.label.toLowerCase() === page.toLowerCase());
  return matchedItem ? matchedItem.path : PAGE_ROUTES.Home;
}

function getActiveNavLabel(pathname) {
  if (pathname === "/") return "Home";
  if (pathname.startsWith("/learn")) return "Learn";
  if (pathname.startsWith("/events")) return "Events";
  if (pathname.startsWith("/gallery")) return "Gallery";
  if (pathname.startsWith("/opportunities")) return "Opportunities";
  if (pathname.startsWith("/resources")) return "Resources";
  if (pathname.startsWith("/blog")) return "Blog";
  if (pathname.startsWith("/community")) return "Community";
  if (pathname.startsWith("/about")) return "About";
  return "Home";
}

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
const getGStyles = () => `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Space+Grotesk:wght@400;500;600;700;800;900&family=Manrope:wght@400;500;600;700&display=swap');
:root{--ds-bg:${C.bg};--ds-bg2:${C.bg2};--ds-surface:${C.surface};--ds-card:${C.card};--ds-card-hov:${C.cardHov};--ds-border:${C.border};--ds-blue:${C.blue};--ds-blue-15:${C.blue}15;--ds-blue-33:${C.blue}33;--ds-blue-40:${C.blue}40;--ds-blue-66:${C.blue}66;--ds-blue-80:${C.blue}80;--ds-text:${C.text}}
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
@keyframes glowPulse{0%,100%{box-shadow:0 0 0 transparent}50%{box-shadow:0 0 28px var(--ds-blue-33)}}
@keyframes marqueeLeft{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes marqueeRight{from{transform:translateX(-50%)}to{transform:translateX(0)}}
.fade-up{animation:fadeUp .7s ease both}
.fade-up-2{animation:fadeUp .7s .1s ease both}
.fade-up-3{animation:fadeUp .7s .2s ease both}
.section-appear{animation:fadeUp .72s ease both}
.section-appear-2{animation:fadeUp .72s .08s ease both}
.hover-card{transition:transform .2s,border-color .2s,box-shadow .2s}
.hover-card:hover{transform:translateY(-3px);border-color:var(--ds-blue-80)!important;box-shadow:0 8px 32px var(--ds-blue-15)}
.hover-lift{transition:all .15s}
.hover-lift:hover{opacity:.85;transform:translateY(-1px)}
.image-zoom{overflow:hidden;border-radius:10px}
.image-zoom img{transition:transform .55s ease,filter .3s ease}
.image-zoom:hover img{transform:scale(1.05);filter:saturate(1.08)}
.glass-pulse{animation:glowPulse 3s ease-in-out infinite, floatY 6s ease-in-out infinite}
.cta-pop{transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease}
.cta-pop:hover{transform:translateY(-4px);box-shadow:0 14px 30px var(--ds-blue-33);border-color:var(--ds-blue-66)}
.res-item{transition:all .15s}
.res-item:hover{background:var(--ds-card-hov)!important;border-color:var(--ds-blue-66)!important}
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
.tech-marquee-section{width:100%;background:var(--ds-bg2);border-top:1px solid var(--ds-border);border-bottom:1px solid var(--ds-border);padding:30px 0 32px;overflow:hidden}
.tech-marquee-label{display:block;text-align:center;font:700 12px 'Outfit',sans-serif;letter-spacing:3px;text-transform:uppercase;color:var(--ds-blue);margin:0 0 16px}
.tech-marquee-row{position:relative;overflow:hidden;padding:4px 0}
.tech-marquee-track{display:flex;align-items:center;gap:12px;min-width:max-content;width:max-content;animation:marqueeLeft 28s linear infinite;will-change:transform}
.tech-marquee-track.reverse{animation-name:marqueeRight;animation-duration:34s}
.tech-marquee-row:hover .tech-marquee-track{animation-play-state:paused}
.tech-chip{display:inline-flex;align-items:center;gap:10px;background:var(--ds-card);border:1px solid var(--ds-border);color:var(--ds-text);padding:9px 14px;border-radius:999px;white-space:nowrap;font:600 13px 'Manrope',sans-serif}
.tech-chip-icon{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:999px;overflow:hidden;background:var(--ds-surface);border:1px solid var(--ds-border)}
.tech-chip-icon img{width:100%;height:100%;object-fit:cover}
.subscribe-section{margin-top:40px;padding:22px;border-radius:14px;background:var(--ds-card);border:1px solid var(--ds-border)}
.subscribe-section h3{font:800 22px 'Space Grotesk',sans-serif;color:${C.text};margin:0 0 8px}
.subscribe-section p{font:500 14px 'Manrope',sans-serif;color:${C.textSub};margin:0}
.subscribe-form{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:14px}
.subscribe-form input{display:block;box-sizing:border-box;flex:1 1 260px;height:44px;min-height:44px;max-height:44px;line-height:44px;border-radius:10px;border:1px solid var(--ds-border);background:var(--ds-surface);color:${C.text};padding:0 14px;font:500 14px 'Manrope',sans-serif;-webkit-appearance:none;appearance:none}
.subscribe-form button{border:none;background:${C.blue};color:white;height:44px;padding:0 18px;border-radius:10px;font:700 13px 'Space Grotesk',sans-serif;cursor:pointer}
.subscribe-message{margin-top:10px!important;color:${C.blueLt}!important;font-weight:700!important}
@media(max-width:1050px){.desktop-nav{display:none!important}}
@media(min-width:1100px){.team-avatar{width:132px;height:132px;border-radius:24px}}
@media(min-width:1051px){.mob-menu{display:none!important}.mob-btn{display:none!important}.mob-actions{display:none!important}}
@media(max-width:640px){
  .hero-btns{flex-direction:column;align-items:center!important;width:100%}
  .hero-btns button{width:min(100%,320px);max-width:100%;justify-content:center}
  .stats-row{gap:24px!important}
  .home-tracks-head{grid-template-columns:1fr!important}
  .op-hero-grid{grid-template-columns:1fr!important}
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
  .tech-marquee-section{padding:24px 0 26px}
  .tech-marquee-label{font-size:11px;letter-spacing:2.2px;margin-bottom:12px}
  .tech-marquee-track{gap:9px;animation-duration:24s}
  .tech-marquee-track.reverse{animation-duration:30s}
  .tech-chip{padding:8px 12px;font-size:12px;gap:8px}
  .tech-chip-icon{width:18px;height:18px}
  .subscribe-section{margin-top:26px;padding:14px;border-radius:12px}
  .subscribe-section h3{font-size:18px;line-height:1.25}
  .subscribe-section p{font-size:13px;line-height:1.6}
  .subscribe-form{flex-direction:column;align-items:stretch}
  .subscribe-form input,.subscribe-form button{width:100%;height:40px;min-height:40px;max-height:40px}
  .subscribe-form input{line-height:40px;padding-block:0;padding-inline:12px;font-size:16px}
  .subscribe-form button{font-size:12px;padding:0 14px}
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

function SubscribeSection({ context = "footer" }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyByContext = {
    blog: {
      heading: "Read today. Stay ahead tomorrow.",
      description: "Get Uganda-first Web3 insights, event drops, opportunities, and beginner-friendly updates before everyone else.",
      placeholder: "Your best email",
      cta: "Get Community Updates →",
      success: "You are in. Watch your inbox for Uganda Web3 updates 🇺🇬",
    },
    footer: {
      heading: "Join Uganda's Web3 community",
      description: "Stay plugged into practical resources, local events, and opportunities whether you are learning, exploring, or already in tech.",
      placeholder: "Enter your email",
      cta: "Join Free →",
      success: "Welcome to DigitalSphereUg. You are officially in 🇺🇬",
    },
  };

  const copy = copyByContext[context] || copyByContext.footer;

  const handleSubscribe = async (rawEmail) => {
    const normalizedEmail = String(rawEmail || "").trim().toLowerCase();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(normalizedEmail)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (isSubmitting) {
      return;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    try {
      setIsSubmitting(true);
      setMessage("");
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalizedEmail }),
        signal: controller.signal,
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setMessage(copy.success);
        setEmail("");
      } else {
        setMessage(data?.error || "Subscription failed. Please try again in a moment.");
      }
    } catch (error) {
      setMessage("Subscription request timed out. Please try again.");
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="subscribe-section">
      <h3>{copy.heading}</h3>
      <p>{copy.description}</p>
      <div className="subscribe-form">
        <input
          type="email"
          placeholder={copy.placeholder}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button onClick={() => handleSubscribe(email)} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : copy.cta}
        </button>
      </div>
      {message && <p className="subscribe-message">{message}</p>}
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function ShareLinkButton({ url, label = "Share" }) {
  const [copied, setCopied] = useState(false);

  const fallbackCopy = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "absolute";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textArea);
    return ok;
  };

  const onShare = async (event) => {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    const shareUrl = url || window.location.href;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const ok = fallbackCopy(shareUrl);
        if (!ok) {
          throw new Error("Clipboard unavailable");
        }
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={onShare}
      className="hover-lift"
      style={{
        background: "transparent",
        border: `1px solid ${C.border}`,
        color: copied ? C.green : C.textSub,
        padding: "7px 12px",
        borderRadius: 8,
        fontSize: 12,
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: "'Space Grotesk',sans-serif",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        whiteSpace: "nowrap",
      }}
      aria-live="polite"
    >
      <BsLink45Deg size={ICON.xs} />
      {copied ? "Link copied!" : label}
    </button>
  );
}

function SiteMeta({ title, description, image, path }) {
  const fullUrl = `${SITE_URL}${path || "/"}`;
  const fullImage = /^https?:\/\//i.test(String(image || ""))
    ? image
    : `${SITE_URL}${String(image || DEFAULT_OG_IMAGE).startsWith("/") ? "" : "/"}${String(image || DEFAULT_OG_IMAGE)}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="DigitalSphereUg" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────
function Nav({ theme, toggleTheme }) {
  const [mob, setMob] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activePage = getActiveNavLabel(location.pathname);

  const goMobile = (page) => {
    navigate(getPathFromPage(page));
    setMob(false);
  };

  useEffect(() => {
    if (typeof document === "undefined" || !mob) return;

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [mob]);

  useEffect(() => {
    // Any route change should immediately close mobile navigation and release scroll lock.
    setMob(false);

    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [location.pathname]);

  return (
    <>
      <style>{getGStyles()}</style>
      {mob && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMob(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 4999,
            border: "none",
            padding: 0,
            margin: 0,
            cursor: "pointer",
            background: "rgba(5, 7, 15, 0.55)",
            WebkitTapHighlightColor: "transparent",
          }}
        />
      )}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:mob ? 5000 : 300, background:C.surface, backdropFilter:"blur(24px)", borderBottom:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 clamp(16px,4vw,40px)", display:"flex", alignItems:"center", justifyContent:"space-between", height:64 }}>
          <Link to={getPathFromPage("Home")} onClick={() => setMob(false)} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:10, textDecoration:"none", WebkitTapHighlightColor:"transparent" }}>
            {/* Logo image is temporarily disabled. Replace this placeholder with your SVG logo later. */}
            <div style={{ width:48, height:48, borderRadius:10, display:"inline-flex", alignItems:"center", justifyContent:"center", background:C.surface, border:`1px solid ${C.border}`, color:C.blue, fontSize:12, fontWeight:800, fontFamily:"'Space Grotesk',sans-serif" }}>
              DS
            </div>
            <span className="brand-text" style={{ fontSize:17, fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-0.5px" }}>DigitalSphere<span style={{ color:C.blueLt }}>Ug</span></span>
          </Link>
          <div className="desktop-nav" style={{ display:"flex", gap:1, alignItems:"center" }}>
            {NAV_LINKS.map((item) => (
              <Link key={item.label} to={item.path} className="nav-btn" style={{ background:"none", border:"none", borderBottom:`2px solid ${activePage===item.label?C.blue:"transparent"}`, cursor:"pointer", padding:"8px 11px", borderRadius:"8px 8px 0 0", color:activePage===item.label?C.text:C.textSub, fontSize:13, fontWeight:activePage===item.label?700:500, fontFamily:"'Space Grotesk',sans-serif", textDecoration:"none" }}>{item.label}</Link>
            ))}
            <button onClick={toggleTheme} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} className="hover-lift" style={{ marginLeft:8, background:C.surface, border:`1px solid ${C.border}`, cursor:"pointer", width:36, height:36, borderRadius:9, color:C.text, display:"inline-flex", alignItems:"center", justifyContent:"center" }}>
              {theme === "dark" ? <BsSun size={ICON.md} /> : <BsMoonStars size={ICON.md} />}
            </button>
            <Link to={getPathFromPage("Community")} className="hover-lift" style={{ marginLeft:10, background:C.blue, border:"none", cursor:"pointer", padding:"9px 20px", borderRadius:9, color:C.white, fontSize:13, fontWeight:700, fontFamily:"'Space Grotesk',sans-serif", textDecoration:"none" }}>Join Free →</Link>
          </div>
          <div className="mob-actions" style={{ display:"flex", alignItems:"center", gap:8 }}>
            <button onClick={toggleTheme} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} className="hover-lift" style={{ background:C.surface, border:`1px solid ${C.border}`, cursor:"pointer", width:36, height:36, borderRadius:9, color:C.text, display:"inline-flex", alignItems:"center", justifyContent:"center" }}>
              {theme === "dark" ? <BsSun size={ICON.md} /> : <BsMoonStars size={ICON.md} />}
            </button>
            <button className="mob-btn" onClick={() => setMob(!mob)} style={{ background:"none", border:`1px solid ${C.border}`, cursor:"pointer", color:C.text, fontSize:15, padding:"8px 13px", borderRadius:8, fontFamily:"'Space Grotesk',sans-serif", display:"inline-flex", alignItems:"center", justifyContent:"center" }}>{mob?<BsX size={ICON.lg} />:<BsList size={ICON.lg} />}</button>
          </div>
        </div>
        {mob && (
          <div className="mob-menu" style={{ position:"relative", zIndex:1, background:C.surface, borderTop:`1px solid ${C.border}`, padding:"10px 0 18px", animation:"fadeIn .2s ease", WebkitTapHighlightColor:"transparent" }}>
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMob(false)}
                style={{ display:"block", width:"100%", background:"none", border:"none", cursor:"pointer", padding:`12px clamp(16px,4vw,40px)`, color:activePage===item.label?C.blueLt:C.text, fontSize:15, fontWeight:600, textAlign:"left", fontFamily:"'Space Grotesk',sans-serif", textDecoration:"none", WebkitTapHighlightColor:"transparent" }}
              >
                {item.label}
              </Link>
            ))}
            <div style={{ padding:`10px clamp(16px,4vw,40px) 0` }}>
              <Link
                to={getPathFromPage("Community")}
                onClick={() => setMob(false)}
                style={{ background:C.blue, border:"none", cursor:"pointer", padding:"13px 24px", borderRadius:10, color:C.white, fontSize:14, fontWeight:700, fontFamily:"'Space Grotesk',sans-serif", width:"100%", display:"inline-flex", alignItems:"center", justifyContent:"center", gap:6, textDecoration:"none", WebkitTapHighlightColor:"transparent" }}
              >
                Join Free →
              </Link>
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

      <section className="tech-marquee-section section-appear" aria-label="Technologies and ecosystems we explore">
        <span className="tech-marquee-label">Technologies & Ecosystems We Explore</span>

        <div className="tech-marquee-row">
          <div className="tech-marquee-track">
            {[...MARQUEE_TECH, ...MARQUEE_TECH].map((item, idx) => (
              <div className="tech-chip" key={`${item.name}-tech-${idx}`}>
                <span className="tech-chip-icon" style={{ boxShadow:`inset 0 0 0 1px ${item.tint}40` }}>
                  <img src={item.logo} alt="" aria-hidden="true" />
                </span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-marquee-row" style={{ marginTop:10 }}>
          <div className="tech-marquee-track reverse">
            {[...MARQUEE_ECOSYSTEM, ...MARQUEE_ECOSYSTEM].map((item, idx) => (
              <div className="tech-chip" key={`${item.name}-eco-${idx}`}>
                <span className="tech-chip-icon" style={{ boxShadow:`inset 0 0 0 1px ${item.tint}40` }}>
                  <img src={item.logo} alt="" aria-hidden="true" />
                </span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <section className="section-appear" style={{ background:C.surface, color:C.text, padding:"clamp(52px,7vw,90px) clamp(16px,4vw,40px)", borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ marginBottom:20 }}>
            <div style={{ fontSize:11, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:C.blueLt, marginBottom:8, fontFamily:"'Space Grotesk',sans-serif" }}>In The Community</div>
            <h2 className="gallery-title" style={{ fontSize:"clamp(26px,4vw,42px)", lineHeight:1.08, margin:0, fontFamily:"'Space Grotesk',sans-serif", color:C.text }}>We show up</h2>
          </div>
          <div className="photo-masonry">
            {FEATURED_GALLERY_ITEMS.map((item, i) => (
              <figure key={item.title + i} className="photo-item" style={{ margin:0 }}>
                <div className="image-zoom" style={{ borderRadius:12 }}>
                  <img src={item.image} alt={item.title} style={{ width:"100%", display:"block", borderRadius:12, objectFit:"cover" }} />
                </div>
                <figcaption style={{ fontSize:12, marginTop:8, color:C.textSub, fontFamily:"'Manrope',sans-serif" }}><strong style={{ display:"block", color:C.text, fontFamily:"'Space Grotesk',sans-serif", fontSize:13, fontWeight:700 }}>{item.title}</strong><span style={{ display:"block", color:C.textSub, fontSize:11, fontWeight:600 }}>{item.date} — {item.location}</span></figcaption>
              </figure>
            ))}
          </div>
          <p style={{ margin:"10px 0 0", fontSize:13, color:C.textSub, fontFamily:"'Manrope',sans-serif", fontWeight:500 }}>Featured moments from the community. See the full gallery for every event story.</p>
          <div style={{ marginTop:14, display:"flex", justifyContent:"space-between", alignItems:"center", gap:12, flexWrap:"wrap" }}>
            <button onClick={() => setPage("Gallery")} className="hover-lift" style={{ background:C.blue, border:"none", color:C.white, padding:"10px 18px", borderRadius:9, fontSize:13, fontWeight:700, fontFamily:"'Space Grotesk',sans-serif", cursor:"pointer", display:"inline-flex", alignItems:"center", gap:6 }}>View Full Gallery <BsArrowRight size={ICON.xs} /></button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-appear-2" style={{ padding:"0 clamp(16px,4vw,40px) 60px", maxWidth:1280, margin:"0 auto" }}>
        <div className="cta-pop" style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:20, padding:"clamp(36px,6vw,64px) clamp(24px,5vw,56px)", textAlign:"left" }}>
          <div>
            <h2 style={{ fontSize:"clamp(28px,4.5vw,52px)", fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-1.5px", lineHeight:1.1, marginBottom:16 }}>300+ Students already building in Web3.<br /><span style={{ color:C.blueLt }}>Join the next wave.</span></h2>
            <p style={{ fontSize:16, color:C.textSub, fontFamily:"'Manrope',sans-serif", margin:"0 0 28px", maxWidth:420 }}>If you're in Uganda and curious about blockchain, this is your lane.</p>
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

      <div className="photo-masonry" style={{ marginBottom:40 }}>
        {GALLERY_ITEMS.map((item, i) => (
          <figure key={item.title + i} onClick={() => setActiveIndex(i)} className="photo-item" style={{ margin:0, cursor:"pointer" }}>
            <div className="image-zoom" style={{ borderRadius:12 }}>
              <img src={item.image} alt={item.title} style={{ width:"100%", display:"block", borderRadius:12, objectFit:"cover" }} />
            </div>
            <figcaption style={{ fontSize:12, marginTop:8, color:C.textSub, fontFamily:"'Manrope',sans-serif" }}><strong style={{ display:"block", color:C.text, fontFamily:"'Space Grotesk',sans-serif", fontSize:13, fontWeight:700, marginBottom:2 }}>{item.title}</strong><span style={{ display:"block", color:C.textSub, fontSize:11, fontWeight:600, marginBottom:4 }}>{item.date} — {item.location}</span><p style={{ margin:0, fontSize:11, color:C.textDim, lineHeight:1.6, fontWeight:500 }}>{item.summary}</p></figcaption>
          </figure>
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

            <div style={{ fontSize:12, color:C.textDim, fontFamily:"'Manrope',sans-serif" }}>Swipe left or right on mobile to browse photos.</div>

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
function Events({ selectedSlug }) {
  const eventRefs = useRef({});

  useEffect(() => {
    if (!selectedSlug) return;
    const node = eventRefs.current[selectedSlug];
    if (!node) return;
    node.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [selectedSlug]);

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
          const eventSlug = e.slug || toSlug(e.title);
          const isHighlighted = selectedSlug === eventSlug;
          return (
            <div
              key={e.title || i}
              ref={(node) => {
                eventRefs.current[eventSlug] = node;
              }}
              className={`hover-card fade-up ${i===0?"events-featured-card":""}`}
              style={{ background:C.card, border:`1px solid ${isHighlighted?C.blue:featured?C.blue+"60":C.border}`, boxShadow:isHighlighted?`0 0 0 2px ${C.blue}35`:"none", borderRadius:18, padding:"clamp(18px,2.6vw,24px)", display:"flex", flexDirection:"column", gap:12, position:"relative", overflow:"hidden", gridColumn:i===0?"span 2":"span 1" }}
            >
            {featured && <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${C.blue},${C.blueLt})` }} />}
            {e.image && <div className="image-zoom" style={{ borderRadius:10 }}><img className={isFlyer?"event-flyer-image events-flyer-image":undefined} src={e.image} alt={e.title || "Event"} style={{ width:"100%", height:isFlyer?(i===0?300:240):(i===0?220:160), objectFit:"cover", objectPosition:isFlyer?"top center":"center", background:C.bg2, borderRadius:10 }} /></div>}
            <div style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:6 }}><Pill label={e.tag || "Event"} color={color} />{featured && <Pill label="Featured" color={C.cyan} />}</div>
            <h3 style={{ fontSize:17, fontWeight:700, color:C.text, fontFamily:"'Space Grotesk',sans-serif", lineHeight:1.3 }}>{e.title || "Upcoming Event"}</h3>
            <div><div style={{ fontSize:13, color:color, fontFamily:"'Manrope',sans-serif", fontWeight:600, marginBottom:3, display:"flex", alignItems:"center", gap:6 }}><BsCalendarEvent size={ICON.xs} /> {e.date || "Date TBC"}</div><div style={{ fontSize:13, color:C.textDim, fontFamily:"'Manrope',sans-serif", display:"flex", alignItems:"center", gap:6 }}><BsGeoAlt size={ICON.xs} /> {e.location || "Location TBC"}</div></div>
            <p style={{ fontSize:13, color:C.textSub, lineHeight:1.7, fontFamily:"'Manrope',sans-serif", margin:0, flex:1 }}>{e.desc || "Event details will be shared soon."}</p>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:10, flexWrap:"wrap", marginTop:"auto" }}>
              <a href={e.link || "#"} target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", gap:6, background:featured?C.blue:"transparent", border:featured?"none":`1px solid ${C.border}`, color:featured?C.white:C.text, padding:"11px 18px", borderRadius:10, fontSize:13, fontWeight:700, textDecoration:"none", fontFamily:"'Space Grotesk',sans-serif" }}>{featured?"Register Now":"Learn More"}<BsArrowRight size={ICON.xs} /></a>
              <ShareLinkButton url={getShareUrl(`/events/${eventSlug}`)} />
            </div>
          </div>
        )})}
      </div>

      {/* Past events */}
      <div style={{ marginBottom:32 }}>
        <SectionLabel>Archive</SectionLabel>
        <h2 style={{ fontSize:"clamp(24px,3.8vw,36px)", fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-0.8px", marginBottom:10 }}>Past Events</h2>
        <p style={{ fontSize:13, color:C.textSub, lineHeight:1.7, fontFamily:"'Manrope',sans-serif", margin:"0 0 16px", maxWidth:640 }}>A quick look at sessions we have already hosted or attended. This archive helps newcomers see the momentum we are building.</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))", gap:14 }}>
          {PAST_EVENTS.map((event, i) => {
            const eventSlug = event.slug || toSlug(event.title);
            const isHighlighted = selectedSlug === eventSlug;
            return (
            <div
              key={event.title + i}
              ref={(node) => {
                eventRefs.current[eventSlug] = node;
              }}
              className="hover-card fade-up"
              style={{ background:C.card, border:`1px solid ${isHighlighted?C.blue:C.border}`, boxShadow:isHighlighted?`0 0 0 2px ${C.blue}35`:"none", borderRadius:14, padding:16, display:"flex", flexDirection:"column", gap:10 }}
            >
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
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:10, flexWrap:"wrap" }}>
                <a href={event.link} target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", gap:6, background:"transparent", border:`1px solid ${C.border}`, color:C.text, padding:"9px 14px", borderRadius:8, fontSize:12, fontWeight:700, textDecoration:"none", fontFamily:"'Space Grotesk',sans-serif" }}>{event.link.includes("youtube.com") || event.link.includes("youtu.be") ? "Watch Replay" : event.link.includes("/blog/") ? "Read Recap" : "View Source"} <BsArrowRight size={ICON.xxs} /></a>
                <ShareLinkButton url={getShareUrl(`/events/${eventSlug}`)} />
              </div>
            </div>
          )})}
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
function Opportunities({ selectedSlug }) {
  const oppRefs = useRef({});

  useEffect(() => {
    if (!selectedSlug) return;
    const node = oppRefs.current[selectedSlug];
    if (!node) return;
    node.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [selectedSlug]);

  return (
    <div className="section-appear" style={{ maxWidth:1280, margin:"0 auto", padding:"clamp(90px,12vw,110px) clamp(16px,4vw,40px) 80px" }}>
      <PageHero label="Opportunities" h1="Earn, Build & Grow" sub="Jobs, grants, hackathons, and earn opportunities available to Ugandans right now." />

      <div className="section-appear-2 op-hero-grid" style={{ display:"grid", gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)", gap:16, marginBottom:30 }}>
        <div className="hover-card" style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:"clamp(20px,3vw,30px)" }}>
            <div style={{ fontSize:12, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:C.blueLt, marginBottom:8, fontFamily:"'Space Grotesk',sans-serif" }}>Built For Uganda</div>
          <h2 style={{ fontSize:"clamp(22px,3vw,34px)", color:C.text, fontFamily:"'Space Grotesk',sans-serif", lineHeight:1.1, margin:"0 0 10px" }}>Remote opportunities, local momentum</h2>
          <p style={{ fontSize:14, color:C.textSub, lineHeight:1.75, margin:0, fontFamily:"'Manrope',sans-serif", maxWidth:560 }}>Grants, bounties, internships, and jobs that Ugandan students can actually access now. Start with one, keep stacking your wins.</p>
        </div>
        <div className="resources-hero-image" style={{ borderRadius:16, overflow:"hidden", border:`1px solid ${C.border}`, aspectRatio:"16/10" }}>
          <div className="image-zoom" style={{ borderRadius:16, width:"100%", height:"100%" }}>
            <img src={outdoorLaptopPhoto} alt="Outdoor laptop session for builders in Kampala" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
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
              {cat.items.map((item, ii) => {
                const oppSlug = item.slug || toSlug(item.title);
                const isHighlighted = selectedSlug === oppSlug;
                return (
                  <div
                    key={ii}
                    ref={(node) => {
                      oppRefs.current[oppSlug] = node;
                    }}
                    className={`hover-card ${ii===0?"op-featured-card":""}`}
                    style={{ background:ii===0?C.surface:C.card, border:`1px solid ${isHighlighted?C.blue:ii===0?cat.color+"55":C.border}`, boxShadow:isHighlighted?`0 0 0 2px ${C.blue}35`:"none", borderRadius:14, padding:ii===0?"26px 24px":"22px", display:"flex", flexDirection:"column", gap:12, gridColumn:ii===0?"span 2":"span 1", position:"relative", overflow:"hidden" }}
                  >
                    {ii===0 && <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:cat.color }} />}
                    {item.logo && <div style={{ display:"flex", alignItems:"center", justifyContent:"flex-start", height:40, marginBottom:4 }}><img src={item.logo} alt={item.title} style={{ maxHeight:40, maxWidth:100, objectFit:"contain" }} /></div>}
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:8 }}>
                      <h3 style={{ fontSize:15, fontWeight:700, color:C.text, fontFamily:"'Space Grotesk',sans-serif", margin:0, lineHeight:1.3, flex:1 }}>{item.title}</h3>
                      <div style={{ display:"flex", alignItems:"center", gap:6, flexWrap:"wrap", justifyContent:"flex-end" }}>
                        {item.badge && (
                          <span style={{ fontSize:11, fontWeight:700, color:"#0f5132", background:"#22c55e22", border:"1px solid #22c55e66", padding:"3px 8px", borderRadius:999, fontFamily:"'Space Grotesk',sans-serif", textTransform:"uppercase", letterSpacing:"0.6px" }}>
                            {item.badge}
                          </span>
                        )}
                        <Pill label={item.level} color={cat.color} small />
                      </div>
                    </div>
                    <p style={{ fontSize:13, color:C.textSub, lineHeight:1.65, fontFamily:"'Manrope',sans-serif", margin:0, flex:1 }}>{item.desc}</p>
                    {(item.prize || item.projectsFunded || item.audience) && (
                      <div style={{ display:"grid", gap:6, padding:"10px 12px", border:`1px solid ${cat.color}30`, borderRadius:10, background:`${cat.color}10` }}>
                        {item.prize && (
                          <div style={{ fontSize:13, color:cat.color, fontFamily:"'Manrope',sans-serif", fontWeight:800 }}>
                            Prize: {item.prize}
                          </div>
                        )}
                        {item.projectsFunded && (
                          <div style={{ fontSize:12, color:C.textSub, fontFamily:"'Manrope',sans-serif", lineHeight:1.6 }}>
                            Projects funded: {item.projectsFunded}
                          </div>
                        )}
                        {item.audience && (
                          <div style={{ fontSize:12, color:C.textSub, fontFamily:"'Manrope',sans-serif", lineHeight:1.6 }}>
                            Who it is for: {item.audience}
                          </div>
                        )}
                      </div>
                    )}
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:10, flexWrap:"wrap" }}>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ display:"inline-flex", alignItems:"center", gap:6, background:`${cat.color}12`, border:`1px solid ${cat.color}30`, color:cat.color, padding:"8px 16px", borderRadius:8, fontSize:12, fontWeight:700, textDecoration:"none", fontFamily:"'Space Grotesk',sans-serif", alignSelf:"flex-start" }}>{item.ctaLabel || "Explore"} <BsArrowRight size={ICON.xxs} /></a>
                      <ShareLinkButton url={getShareUrl(`/opportunities/${oppSlug}`)} />
                    </div>
                  </div>
                );
              })}
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
function Blog({ onOpenPost }) {
  return (
    <div className="section-appear" style={{ maxWidth:1280, margin:"0 auto", padding:"clamp(90px,12vw,110px) clamp(16px,4vw,40px) 80px" }}>
      <PageHero label="Insights & Perspectives" h1="The Blog" sub="Written for Ugandans. Honest, practical, no hype." />
      <p style={{ margin:"-24px 0 24px", fontSize:13, color:C.textDim, fontFamily:"'Manrope',sans-serif" }}>Upcoming topics: Bank of Uganda crypto stance, mobile money x Web3 integration, and local startup stories.</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(290px,1fr))", gap:18 }}>
        {POSTS.map((p, i) => (
          <div key={p.id} onClick={() => onOpenPost(p)} className="hover-card fade-up" style={{ background:C.card, border:`1px solid ${i===0?C.blue+"45":C.border}`, borderRadius:18, padding:"clamp(20px,3vw,30px)", cursor:"pointer", display:"flex", flexDirection:"column", gap:14, position:"relative", overflow:"hidden" }}>
            {i===0 && <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${C.blue},${C.purple})` }} />}
            {p.image ? (
              <div className="image-zoom" style={{ borderRadius:12 }}>
                <img src={p.image} alt={p.title} style={{ width:"100%", height:180, objectFit:"cover", borderRadius:12 }} />
              </div>
            ) : null}
            <Pill label={p.tag} color={p.tagColor} />
            <h2 style={{ fontSize:18, fontWeight:700, color:C.text, fontFamily:"'Space Grotesk',sans-serif", lineHeight:1.3, margin:0 }}>{p.title}</h2>
            <div style={{ fontSize:13, color:C.blueLt, fontFamily:"'Space Grotesk',sans-serif", fontWeight:700 }}>{p.author}</div>
            <p style={{ fontSize:13, color:C.textSub, lineHeight:1.7, fontFamily:"'Manrope',sans-serif", margin:0, flex:1 }}>{p.excerpt}</p>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:12, borderTop:`1px solid ${C.border}` }}>
              <div style={{ display:"flex", gap:12 }}>
                <span style={{ fontSize:12, color:C.textDim, fontFamily:"'Manrope',sans-serif" }}>{p.date}</span>
                {p.read ? <span style={{ fontSize:12, color:C.textDim, fontFamily:"'Manrope',sans-serif" }}>{p.read}</span> : null}
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <ShareLinkButton url={getShareUrl(`/blog/${p.slug || toSlug(p.title)}`)} />
                <span style={{ fontSize:13, color:C.blueLt, fontWeight:700, fontFamily:"'Space Grotesk',sans-serif", display:"inline-flex", alignItems:"center", gap:6 }}>Read <BsArrowRight size={ICON.xs} /></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function linkifyBlogParagraph(text, paraIndex) {
  const segments = text.split(/(https?:\/\/[^\s]+)/g);
  return segments.map((seg, j) => {
    if (/^https?:\/\//.test(seg)) {
      const href = seg.replace(/[.,;:!?)}\]]+$/, "");
      return (
        <a
          key={`p${paraIndex}-s${j}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color:C.blueLt, textDecoration:"underline", textUnderlineOffset:3 }}
        >
          {href}
        </a>
      );
    }
    return <span key={`p${paraIndex}-s${j}`}>{seg}</span>;
  });
}

function BlogPost({ post, onBack, onOpenPost }) {
  const endOfPostRef = useRef(null);
  const [showAfterReadPrompt, setShowAfterReadPrompt] = useState(false);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);
  const [completedAt, setCompletedAt] = useState(null);
  const [timelineLabel, setTimelineLabel] = useState("Just now");

  const suggestedPosts = POSTS.filter((item) => item.id !== post.id).slice(0, 2);
  const estimatedRead = post.read || "1 min read";

  useEffect(() => {
    setShowAfterReadPrompt(false);
    setHasReachedEnd(false);
    setCompletedAt(null);
    setTimelineLabel("Just now");
  }, [post.id]);

  const getRelativeTimelineLabel = (completedAtTime) => {
    if (!completedAtTime) {
      return "Just now";
    }

    const elapsedMs = Date.now() - completedAtTime;
    const elapsedMinutes = Math.floor(elapsedMs / 60000);

    if (elapsedMinutes <= 0) {
      return "Just now";
    }
    if (elapsedMinutes === 1) {
      return "1 min ago";
    }
    if (elapsedMinutes < 60) {
      return `${elapsedMinutes} mins ago`;
    }

    const elapsedHours = Math.floor(elapsedMinutes / 60);
    if (elapsedHours === 1) {
      return "1 hr ago";
    }

    return `${elapsedHours} hrs ago`;
  };

  useEffect(() => {
    if (!endOfPostRef.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasReachedEnd(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.65,
      },
    );

    observer.observe(endOfPostRef.current);

    return () => observer.disconnect();
  }, [post.id]);

  useEffect(() => {
    if (showAfterReadPrompt) {
      return;
    }

    if (hasReachedEnd) {
      setShowAfterReadPrompt(true);
    }
  }, [hasReachedEnd, showAfterReadPrompt]);

  useEffect(() => {
    if (!showAfterReadPrompt) {
      return;
    }

    if (!completedAt) {
      setCompletedAt(Date.now());
      return;
    }

    setTimelineLabel(getRelativeTimelineLabel(completedAt));
    const intervalId = setInterval(() => {
      setTimelineLabel(getRelativeTimelineLabel(completedAt));
    }, 30000);

    return () => clearInterval(intervalId);
  }, [showAfterReadPrompt, completedAt]);

  return (
    <div className="section-appear" style={{ maxWidth:720, margin:"0 auto", padding:"clamp(90px,12vw,110px) clamp(16px,4vw,40px) 80px" }}>
      <button onClick={onBack} className="hover-lift" style={{ background:"none", border:`1px solid ${C.border}`, color:C.textSub, cursor:"pointer", fontSize:13, fontFamily:"'Space Grotesk',sans-serif", fontWeight:600, marginBottom:40, padding:"9px 18px", borderRadius:9, display:"inline-flex", alignItems:"center", gap:6 }}><BsArrowLeft size={ICON.sm} /> Back to Blog</button>
      <Pill label={post.tag} color={post.tagColor} />
      <h1 style={{ fontSize:"clamp(26px,4vw,42px)", fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-1px", margin:"18px 0 14px", lineHeight:1.15 }}>{post.title}</h1>
      <div style={{ display:"flex", gap:20, marginBottom:36, paddingBottom:28, borderBottom:`1px solid ${C.border}`, flexWrap:"wrap" }}>
        <span style={{ fontSize:14, color:C.blueLt, fontFamily:"'Space Grotesk',sans-serif", fontWeight:700 }}>{post.author || "DigitalSphereUg"}</span>
        <span style={{ fontSize:13, color:C.textDim, fontFamily:"'Manrope',sans-serif" }}>{post.date}</span>
        {post.read ? <span style={{ fontSize:13, color:C.textDim, fontFamily:"'Manrope',sans-serif" }}>{post.read}</span> : null}
      </div>
      {post.image ? (
        <div style={{ marginBottom:28, borderRadius:14, overflow:"hidden", border:`1px solid ${C.border}` }}>
          <div className="image-zoom" style={{ borderRadius:14 }}>
            <img src={post.image} alt={post.title} style={{ width:"100%", height:"clamp(220px,34vw,360px)", objectFit:"cover" }} />
          </div>
        </div>
      ) : null}
      {post.body.split("\n\n").map((para, i) => (
        <p key={i} style={{ fontSize:16, color:C.textSub, lineHeight:1.9, fontFamily:"'Manrope',sans-serif", marginBottom:22 }}>{linkifyBlogParagraph(para, i)}</p>
      ))}
      <div style={{ marginTop:4, marginBottom:26 }}>
        <ShareLinkButton label="Copy Link" />
      </div>
      <div ref={endOfPostRef} style={{ width:"100%", height:1 }} />

      {showAfterReadPrompt && (
        <div className="section-appear-2" style={{ marginTop:24, marginBottom:20, background:C.card, border:`1px solid ${C.blue}40`, borderRadius:16, padding:"20px 18px", display:"flex", flexDirection:"column", gap:12, boxShadow:`0 10px 30px ${C.blue}20`, animation:"fadeIn .3s ease" }}>
          <div style={{ fontSize:12, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:C.blueLt, fontFamily:"'Space Grotesk',sans-serif" }}>After Reading</div>
          <h3 style={{ margin:0, fontSize:20, color:C.text, fontFamily:"'Space Grotesk',sans-serif", lineHeight:1.2 }}>Nice work, you reached the end.</h3>
          <p style={{ margin:0, fontSize:14, color:C.textSub, lineHeight:1.75, fontFamily:"'Manrope',sans-serif" }}>Want to keep momentum? Jump into another article or head back to all blog posts.</p>
          <div style={{ display:"flex", gap:12, alignItems:"center", flexWrap:"wrap", paddingTop:4 }}>
            <span style={{ fontSize:12, color:C.textDim, fontFamily:"'Manrope',sans-serif" }}>Timeline</span>
            <span style={{ fontSize:12, color:C.textSub, fontFamily:"'Manrope',sans-serif", background:C.surface, border:`1px solid ${C.border}`, padding:"4px 10px", borderRadius:999 }}>{`${timelineLabel} • ${estimatedRead}`}</span>
          </div>

          <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
            {suggestedPosts[0] && typeof onOpenPost === "function" ? (
              <button
                type="button"
                onClick={() => onOpenPost(suggestedPosts[0])}
                className="hover-lift"
                style={{ background:C.blue, border:`1px solid ${C.blue}`, color:C.white, cursor:"pointer", fontSize:13, fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, padding:"10px 14px", borderRadius:9, display:"inline-flex", alignItems:"center", gap:6 }}
              >
                Read Next <BsArrowRight size={ICON.xs} />
              </button>
            ) : null}
            <button
              type="button"
              onClick={onBack}
              className="hover-lift"
              style={{ background:"transparent", border:`1px solid ${C.border}`, color:C.text, cursor:"pointer", fontSize:13, fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, padding:"10px 14px", borderRadius:9, display:"inline-flex", alignItems:"center", gap:6 }}
            >
              All Articles <BsArrowLeft size={ICON.xs} />
            </button>
          </div>
        </div>
      )}

      <SubscribeSection context="blog" />
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
    { n:"300+", l:"Community Members" },
    { n:"4", l:"Free Learning Tracks" },
    { n:String(POSTS.length), l:"Blog Posts Published" },
    { n:"3", l:"Major Events in 2026" },
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
        <h2 style={{ fontSize:"clamp(26px,4vw,40px)", fontWeight:800, color:C.text, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:"-1px", marginBottom:32 }}>Meet The Builders</h2>
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
          <SubscribeSection context="footer" />
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
  const location = useLocation();
  const navigate = useNavigate();

  const [theme, setTheme] = useState(() => {
    try {
      const storedTheme = localStorage.getItem(STORAGE_KEYS.theme);
      return storedTheme === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  });

  C = theme === "light" ? THEMES.light : THEMES.dark;

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

  const openPage = (page) => {
    navigate(getPathFromPage(page));
  };

  const openBlogPost = (post) => {
    navigate(`/blog/${post.slug || toSlug(post.title)}`);
  };

  const routeMeta = useMemo(() => {
    const pathname = location.pathname;
    const base = {
      title: "DigitalSphereUg | Uganda's Home for Blockchain & Web3",
      description: "Free blockchain education, events, opportunities, and community for Uganda.",
      image: DEFAULT_OG_IMAGE,
      path: pathname,
    };

    if (pathname.startsWith("/blog/")) {
      const slug = pathname.replace("/blog/", "");
      const post = findPostBySlug(slug);
      if (post) {
        return {
          title: `${post.title} | DigitalSphereUg Blog`,
          description: post.excerpt,
          image: post.image || ethnileGroupHero,
          path: pathname,
        };
      }
    }

    if (pathname.startsWith("/events/")) {
      const slug = pathname.replace("/events/", "");
      const event = ALL_EVENTS.find((item) => item.slug === slug);
      if (event) {
        return {
          title: `${event.title} | DigitalSphereUg Events`,
          description: event.desc || event.recap || "Event update from DigitalSphereUg.",
          image: event.image || ethnileGroupHero,
          path: pathname,
        };
      }
    }

    if (pathname.startsWith("/learn/")) {
      const match = pathname.match(/^\/learn\/([^/]+)/);
      const slug = match ? match[1] : "";
      const track = TRACKS_BY_SLUG[slug];
      if (track) {
        return {
          title: `${track.title} | DigitalSphereUg Learn`,
          description: track.desc,
          image: chainlinkRooftopPhoto,
          path: pathname,
        };
      }
    }

    if (pathname.startsWith("/opportunities/")) {
      const slug = pathname.replace("/opportunities/", "");
      const opportunity = OPPORTUNITY_ITEMS.find((item) => item.slug === slug);
      if (opportunity) {
        return {
          title: `${opportunity.title} | DigitalSphereUg Opportunities`,
          description: opportunity.desc,
          image: opportunity.logo || outdoorLaptopPhoto,
          path: pathname,
        };
      }
    }

    if (pathname === "/learn") {
      return {
        title: "Learn Blockchain | DigitalSphereUg",
        description: "Follow structured learning tracks designed for Ugandan Web3 learners.",
        image: chainlinkRooftopPhoto,
        path: pathname,
      };
    }
    if (pathname === "/events") {
      return {
        title: "Events | DigitalSphereUg",
        description: "Upcoming blockchain events and community sessions in Uganda.",
        image: ethnileVenuePhoto,
        path: pathname,
      };
    }
    if (pathname === "/opportunities") {
      return {
        title: "Opportunities | DigitalSphereUg",
        description: "Web3 jobs, grants, hackathons, and growth opportunities for Uganda.",
        image: outdoorLaptopPhoto,
        path: pathname,
      };
    }
    if (pathname === "/resources") {
      return {
        title: "Resources | DigitalSphereUg",
        description: "Curated free blockchain tools and learning resources.",
        image: kyambogoRoomPhoto,
        path: pathname,
      };
    }
    if (pathname === "/blog") {
      return {
        title: "Blog | DigitalSphereUg",
        description: "Uganda-first blockchain insights, guides, and stories.",
        image: ethnileGroupHero,
        path: pathname,
      };
    }
    if (pathname === "/community") {
      return {
        title: "Community | DigitalSphereUg",
        description: "Join Uganda's most active student blockchain and Web3 community.",
        image: chainlinkStreetGroupPhoto,
        path: pathname,
      };
    }
    if (pathname === "/about") {
      return {
        title: "About | DigitalSphereUg",
        description: "Built by students, built for Uganda's blockchain future.",
        image: stellarGroupPhoto,
        path: pathname,
      };
    }

    return base;
  }, [location.pathname]);

  const BlogPostRoute = () => {
    const { slug } = useParams();
    const post = findPostBySlug(slug || "");
    if (!post) {
      return <Navigate to="/blog" replace />;
    }

    const canonicalSlug = post.slug || toSlug(post.title);
    if (slug !== canonicalSlug) {
      return <Navigate to={`/blog/${canonicalSlug}`} replace />;
    }

    return <BlogPost post={post} onBack={() => navigate("/blog")} onOpenPost={openBlogPost} />;
  };

  const LearnRoute = () => {
    return <LessonDemoPage theme={theme} showTrackList />;
  };

  const LearnTrackRoute = () => {
    const { slug } = useParams();
    return <LessonDemoPage theme={theme} initialTrackSlug={slug || null} initialLessonNumber={null} />;
  };

  const LearnLessonRoute = () => {
    const { slug, lessonNumber } = useParams();
    const parsedLessonNumber = Number.parseInt(lessonNumber || "", 10);
    const initialLessonNumber = Number.isFinite(parsedLessonNumber) ? parsedLessonNumber : null;
    return <LessonDemoPage theme={theme} initialTrackSlug={slug || null} initialLessonNumber={initialLessonNumber} />;
  };

  const EventsRoute = () => {
    const { slug } = useParams();
    return <Events selectedSlug={slug || null} />;
  };

  const OpportunitiesRoute = () => {
    const { slug } = useParams();
    return <Opportunities selectedSlug={slug || null} />;
  };

  return (
    <div style={{ background:C.bg, minHeight:"100vh", color:C.text }}>
      <SiteMeta {...routeMeta} />
      <ScrollToTop />
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home setPage={openPage} />} />
          <Route path="/learn" element={<LearnRoute />} />
          <Route path="/learn/:slug" element={<LearnTrackRoute />} />
          <Route path="/learn/:slug/lesson/:lessonNumber" element={<LearnLessonRoute />} />
          <Route path="/events" element={<EventsRoute />} />
          <Route path="/events/:slug" element={<EventsRoute />} />
          <Route path="/gallery" element={<Gallery setPage={openPage} />} />
          <Route path="/opportunities" element={<OpportunitiesRoute />} />
          <Route path="/opportunities/:slug" element={<OpportunitiesRoute />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog onOpenPost={openBlogPost} />} />
          <Route path="/blog/:slug" element={<BlogPostRoute />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About setPage={openPage} theme={theme} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer setPage={openPage} />
    </div>
  );
}
