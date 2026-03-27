import { useMemo, useState } from "react";
import LessonPage from "./LessonPage";

const STORAGE_KEYS = {
  activeTrackId: "digitalsphereug.learn.activeTrackId",
  activeLessonNumber: "digitalsphereug.learn.activeLessonNumber",
  completedByTrack: "digitalsphereug.learn.completedByTrack",
  completedTrackId: "digitalsphereug.learn.completedTrackId",
};

function safeRead(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      return fallback;
    }
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function safeWrite(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage write failures in private/incognito modes.
  }
}

const TOKENS = {
  dark: {
    bg: "#05070f",
    card: "#101525",
    border: "#1c2540",
    blueLt: "#4d6ff0",
    text: "#eef2ff",
    textSub: "#94a3b8",
  },
  light: {
    bg: "#f6f8fc",
    card: "#ffffff",
    border: "#d6ddf0",
    blueLt: "#4d6ff0",
    text: "#0b1220",
    textSub: "#334155",
  },
};

const createEmptyLessons = (items) => items.map((title) => ({ title, completed: false }));

const TRACK_MASTERY = {
  basics: [
    "Explains blockchain in plain language",
    "Identifies tamper-evident record benefits",
    "Connects concepts to Uganda use cases",
  ],
  solidity: [
    "Describes smart contract rule logic",
    "Chooses transparent automation use cases",
    "Breaks problems into testable steps",
  ],
  dapp: [
    "Designs beginner-friendly dApp flows",
    "Maps wallet actions to clear UI steps",
    "Adds confirmation feedback after actions",
  ],
  career: [
    "Builds visible proof of learning progress",
    "Creates weekly outputs with consistency",
    "Positions for global remote opportunities",
  ],
};

const LESSON_RESOURCES = {
  basics: [
    { type: "video", url: "https://youtu.be/i501_M4je_A", title: "But How Does Bitcoin Actually Work?", sourceWebsite: "YouTube" },
    { type: "article", url: "https://andersbrownworth.com/blockchain/", title: "Interactive blockchain demo", sourceWebsite: "Anders Brownworth" },
    { type: "article", url: "https://www.ibm.com/think/topics/blockchain", title: "What is blockchain", sourceWebsite: "IBM Think" },
    { type: "article", url: "https://www.coindesk.com/learn", title: "CoinDesk Learn fundamentals", sourceWebsite: "CoinDesk" },
    { type: "article", url: "https://www.binance.com/en/academy", title: "Crypto basics academy", sourceWebsite: "Binance Academy" },
    { type: "article", url: "https://cryptozombies.io/", title: "Intro to smart contracts with games", sourceWebsite: "CryptoZombies" },
    { type: "article", url: "https://esp.ethereum.foundation/", title: "Ethereum ecosystem support programs", sourceWebsite: "Ethereum Foundation ESP" },
    { type: "article", url: "https://learnweb3.io/", title: "Project-based web3 learning paths", sourceWebsite: "LearnWeb3" },
  ],
  solidity: [
    { type: "article", url: "https://cryptozombies.io/", title: "CryptoZombies - Learn Solidity", sourceWebsite: "CryptoZombies" },
    { type: "video", url: "https://youtu.be/umepbfKp5rI", title: "Patrick Collins - Full Solidity Course", sourceWebsite: "YouTube" },
    { type: "video", url: "https://youtu.be/M576WGiDBdQ", title: "freeCodeCamp Solidity Tutorial", sourceWebsite: "YouTube" },
    { type: "article", url: "https://docs.soliditylang.org/", title: "Official Solidity Documentation", sourceWebsite: "Solidity Docs" },
    { type: "article", url: "https://thirdweb.com/", title: "Access and wallet tooling with thirdweb", sourceWebsite: "thirdweb" },
    { type: "article", url: "https://hardhat.org/docs/getting-started", title: "Hardhat testing workflow", sourceWebsite: "Hardhat" },
    { type: "article", url: "https://www.alchemy.com/university", title: "Deployment and builder workflows", sourceWebsite: "Alchemy University" },
    { type: "article", url: "https://www.cyfrin.io/updraft", title: "Smart contract development path", sourceWebsite: "Cyfrin Updraft" },
  ],
  dapp: [
    { type: "article", url: "https://www.alchemy.com/university", title: "Alchemy University - Road to Web3", sourceWebsite: "Alchemy University" },
    { type: "article", url: "https://learnweb3.io/", title: "LearnWeb3 DAO", sourceWebsite: "LearnWeb3" },
    { type: "article", url: "https://hardhat.org/docs/getting-started", title: "Hardhat Documentation", sourceWebsite: "Hardhat" },
    { type: "article", url: "https://thirdweb.com/", title: "Thirdweb", sourceWebsite: "thirdweb" },
    { type: "article", url: "https://www.cyfrin.io/updraft", title: "Error prevention and debugging habits", sourceWebsite: "Cyfrin Updraft" },
    { type: "article", url: "https://cryptozombies.io/", title: "Polish through iterative project builds", sourceWebsite: "CryptoZombies" },
    { type: "video", url: "https://youtu.be/M576WGiDBdQ", title: "dApp flow walkthrough", sourceWebsite: "YouTube" },
    { type: "article", url: "https://thirdweb.com/", title: "Launch-ready app infrastructure", sourceWebsite: "thirdweb" },
  ],
  career: [
    { type: "article", url: "https://web3.career/", title: "Career profile basics", sourceWebsite: "web3.career" },
    { type: "article", url: "https://gitcoin.co/", title: "Portfolio and public proof opportunities", sourceWebsite: "Gitcoin" },
    { type: "article", url: "https://www.binance.com/en/academy", title: "Binance Academy", sourceWebsite: "Binance Academy" },
    { type: "article", url: "https://developerdao.com/", title: "Developer DAO", sourceWebsite: "Developer DAO" },
    { type: "article", url: "https://esp.ethereum.foundation/", title: "Ethereum Foundation - ESP Grants", sourceWebsite: "Ethereum Foundation ESP" },
    { type: "article", url: "https://learnweb3.io/", title: "Freelance path through project credibility", sourceWebsite: "LearnWeb3" },
    { type: "article", url: "https://developerdao.com/", title: "Remote collaboration habits in web3 communities", sourceWebsite: "Developer DAO" },
    { type: "article", url: "https://buildspace.so/", title: "Career sprint mindset from ship-fast builders", sourceWebsite: "buildspace" },
  ],
};

const TRACK_RESOURCE_CATALOG = {
  basics: [
    { type: "video", url: "https://youtu.be/i501_M4je_A", title: "But How Does Bitcoin Actually Work?", sourceWebsite: "YouTube" },
    { type: "article", url: "https://andersbrownworth.com/blockchain/", title: "Blockchain 101", sourceWebsite: "Anders Brownworth" },
    { type: "article", url: "https://www.ibm.com/think/topics/blockchain", title: "What is Blockchain?", sourceWebsite: "IBM Think" },
    { type: "article", url: "https://www.coindesk.com/learn", title: "Crypto Basics", sourceWebsite: "CoinDesk Learn" },
  ],
  solidity: [
    { type: "article", url: "https://cryptozombies.io/", title: "Learn Solidity", sourceWebsite: "CryptoZombies" },
    { type: "video", url: "https://youtu.be/umepbfKp5rI", title: "Full Solidity Course", sourceWebsite: "YouTube" },
    { type: "video", url: "https://youtu.be/M576WGiDBdQ", title: "freeCodeCamp Solidity Tutorial", sourceWebsite: "YouTube" },
    { type: "article", url: "https://docs.soliditylang.org/", title: "Official Solidity Documentation", sourceWebsite: "Solidity Docs" },
  ],
  dapp: [
    { type: "article", url: "https://www.alchemy.com/university", title: "Road to Web3", sourceWebsite: "Alchemy University" },
    { type: "article", url: "https://learnweb3.io/", title: "LearnWeb3 DAO", sourceWebsite: "LearnWeb3" },
    { type: "article", url: "https://hardhat.org/docs/getting-started", title: "Hardhat Documentation", sourceWebsite: "Hardhat" },
    { type: "article", url: "https://thirdweb.com/", title: "Thirdweb", sourceWebsite: "thirdweb" },
  ],
  career: [
    { type: "article", url: "https://web3.career/", title: "Web3 Career Job Board", sourceWebsite: "web3.career" },
    { type: "article", url: "https://gitcoin.co/", title: "Gitcoin Bounties and Grants", sourceWebsite: "Gitcoin" },
    { type: "article", url: "https://www.binance.com/en/academy", title: "Binance Academy", sourceWebsite: "Binance Academy" },
    { type: "article", url: "https://developerdao.com/", title: "Developer DAO", sourceWebsite: "Developer DAO" },
    { type: "article", url: "https://esp.ethereum.foundation/", title: "ESP Grants", sourceWebsite: "Ethereum Foundation ESP" },
  ],
};

function toEmbeddableVideoUrl(url) {
  const youtubeId = extractYouTubeId(url);
  if (!youtubeId) {
    return url;
  }
  return `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1&iv_load_policy=3`;
}

function getResourceForLesson(trackId, lessonIndex) {
  const catalog = TRACK_RESOURCE_CATALOG[trackId];
  if (!Array.isArray(catalog) || catalog.length === 0) {
    return LESSON_RESOURCES[trackId]?.[lessonIndex] || null;
  }

  const baseResource = catalog[lessonIndex % catalog.length];
  if (baseResource.type !== "video") {
    return baseResource;
  }

  return {
    ...baseResource,
    url: toEmbeddableVideoUrl(baseResource.url),
  };
}

const normalizeLessonTitle = (title) => title.trim().toLowerCase();

const QUESTION_BANK_BY_RESOURCE_KEY = {
  "youtube:i501_M4je_A": [
    {
      question: "What makes a blockchain record trustworthy even without a bank or government controlling it?",
      options: [
        "One powerful computer stores and protects it.",
        "Many participants each hold a copy and compare them, so changes are quickly noticed.",
        "A company pays people to check the records.",
        "The government runs the verification process.",
      ],
      correctIndex: 1,
      hint: "Think about what happens when many people all have the same document.",
      successMessage: "Exactly. Shared verification is the foundation of why blockchain works.",
    },
    {
      question: "In the video, what happens if someone tries to change an old record?",
      options: [
        "Nothing. Anyone can edit old records freely.",
        "The change is approved by the newest block.",
        "Blocks that came after it become invalid, so the chain breaks.",
        "Only the owner of that block can fix it.",
      ],
      correctIndex: 2,
      hint: "Think of a chain of locks. If one link breaks, later links are affected.",
      successMessage: "Correct. That is what makes blockchain tamper-resistant.",
    },
    {
      question: "How is this different from how a Ugandan bank stores transaction records today?",
      options: [
        "Banks use blockchain in the same way.",
        "Banks store records in one central system, while blockchain spreads records across many computers.",
        "Blockchain is always slower and less reliable than bank databases.",
        "There is no difference because both are decentralized.",
      ],
      correctIndex: 1,
      hint: "Think about who controls your mobile money history today.",
      successMessage: "Right. Moving from central control to shared verification is the core shift.",
    },
  ],
  "andersbrownworth.com/blockchain": [
    {
      question: "In the interactive demo, what is a hash and why does it matter?",
      options: [
        "A password that protects your wallet.",
        "A unique fingerprint of a block's data that changes if the data changes.",
        "The name of the miner who created the block.",
        "A copy of the previous block's content.",
      ],
      correctIndex: 1,
      hint: "Change one letter in the demo and watch what happens to the hash.",
      successMessage: "Exactly. The hash behaves like a unique fingerprint.",
    },
    {
      question: "What does mining mean in this demo?",
      options: [
        "Digging for physical gold using computers.",
        "Stealing cryptocurrency from users.",
        "Finding a number that makes the hash meet the proof-of-work rule.",
        "Sending money from one wallet to another.",
      ],
      correctIndex: 2,
      hint: "Mining here is a puzzle: find the right number for a valid hash.",
      successMessage: "Correct. Mining is computational work to add a valid block.",
    },
    {
      question: "What happens in the demo when you change data in an early block?",
      options: [
        "Only that block turns red.",
        "All blocks after it turn red, showing the chain is now invalid.",
        "The blockchain automatically fixes itself.",
        "The change is silently accepted.",
      ],
      correctIndex: 1,
      hint: "Try changing data in Block 2 and check what happens to later blocks.",
      successMessage: "Right. That is why blockchains are called tamper-evident.",
    },
  ],
  "ibm.com/think/topics/blockchain": [
    {
      question: "According to IBM, which option best describes a blockchain?",
      options: [
        "A type of cryptocurrency like Bitcoin.",
        "A shared, unchangeable record that multiple parties can trust.",
        "A private database owned by IBM.",
        "A social media platform for developers.",
      ],
      correctIndex: 1,
      hint: "Focus on the word shared, not single ownership.",
      successMessage: "Correct. Shared trusted records are the key idea.",
    },
    {
      question: "Which use case could realistically help Uganda?",
      options: [
        "Replacing football with a new sport.",
        "Tracking land ownership records that cannot be quietly changed.",
        "Building faster social media apps.",
        "Making mobile phones cheaper.",
      ],
      correctIndex: 1,
      hint: "Think about land disputes and verification problems.",
      successMessage: "Exactly. Land registry is a strong blockchain use case.",
    },
    {
      question: "What does trust without a middleman mean?",
      options: [
        "You no longer need to trust anyone at all.",
        "Two parties can transact directly because shared records verify history.",
        "IBM becomes the new middleman.",
        "All transactions become anonymous.",
      ],
      correctIndex: 1,
      hint: "Think about removing an extra verifier from normal money transfer flows.",
      successMessage: "Right. Shared records reduce dependence on a central verifier.",
    },
  ],
  "coindesk.com/learn": [
    {
      question: "What is the difference between a coin and a token?",
      options: [
        "They are exactly the same thing.",
        "A coin has its own blockchain. A token is built on an existing blockchain.",
        "Tokens are always worth more than coins.",
        "Coins are only used in America.",
      ],
      correctIndex: 1,
      hint: "Think of Ethereum as a platform where many tokens are created.",
      successMessage: "Correct. That distinction matters when you start building.",
    },
    {
      question: "What is a wallet in crypto and what does it hold?",
      options: [
        "A physical card like an ATM card.",
        "Software that stores your coins inside it.",
        "Keys that prove ownership, while coins remain on the blockchain.",
        "An exchange account only.",
      ],
      correctIndex: 2,
      hint: "A wallet holds keys, like a key to a locker, not the locker itself.",
      successMessage: "Exactly. Wallet keys prove ownership.",
    },
    {
      question: "Why is crypto called volatile and what does it mean for a Ugandan student?",
      options: [
        "It means crypto is always dangerous and should be avoided.",
        "It means prices can rise or fall quickly, so decisions must be informed.",
        "It means crypto never changes in value.",
        "It means only wealthy people can use it.",
      ],
      correctIndex: 1,
      hint: "Volatility means rapid price movement in both directions.",
      successMessage: "Right. Understanding risk is the first smart step.",
    },
  ],
  "cryptozombies.io": [
    {
      question: "In CryptoZombies, what is a struct in Solidity and why is it useful?",
      options: [
        "A type of zombie attack move.",
        "A way to group related data under one name, like a student record.",
        "A function that always runs automatically.",
        "A type of blockchain transaction.",
      ],
      correctIndex: 1,
      hint: "Think of one record holding name, ID, and grade together.",
      successMessage: "Correct. Structs keep contract data organized.",
    },
    {
      question: "What does a mapping do in Solidity?",
      options: [
        "Shows the location of your contract on the blockchain.",
        "Links one piece of data to another, like student ID to exam result.",
        "Creates a visual map of your code.",
        "Connects two different blockchains.",
      ],
      correctIndex: 1,
      hint: "Think key and value, like a register number and a student name.",
      successMessage: "Exactly. Mappings are core smart contract data structures.",
    },
    {
      question: "What is the difference between public and private functions in Solidity?",
      options: [
        "Public functions always cost more gas.",
        "Private functions are only callable inside the contract, public can be called externally.",
        "There is no practical difference.",
        "Private functions are always faster.",
      ],
      correctIndex: 1,
      hint: "Focus on who is allowed to call the function.",
      successMessage: "Right. Access control starts with function visibility.",
    },
  ],
  "youtube:umepbfKp5rI": [
    {
      question: "What is a smart contract and how is it different from a regular agreement?",
      options: [
        "A legal document signed by a lawyer.",
        "Code on blockchain that auto-executes when conditions are met.",
        "A digital PDF signed in a browser.",
        "An agreement only between crypto companies.",
      ],
      correctIndex: 1,
      hint: "Think of a vending machine: rules execute automatically.",
      successMessage: "Exactly. Automatic execution is the defining feature.",
    },
    {
      question: "What does gas mean on Ethereum?",
      options: [
        "Electricity used by your laptop.",
        "A network fee to process transactions and contract execution.",
        "Your internet speed.",
        "The ETH balance in your wallet.",
      ],
      correctIndex: 1,
      hint: "Gas is fuel for blockchain computation.",
      successMessage: "Correct. Gas understanding is essential before deployment.",
    },
    {
      question: "Which browser tool is commonly used to write and test Solidity without installing anything?",
      options: ["Visual Studio Code", "GitHub", "Remix IDE", "Hardhat"],
      correctIndex: 2,
      hint: "It runs fully in the browser and is beginner friendly.",
      successMessage: "Right. Remix is where many people write their first contract.",
    },
  ],
  "youtube:M576WGiDBdQ": [
    {
      question: "What does the payable keyword do in a Solidity function?",
      options: [
        "Makes the function run faster.",
        "Allows the function to receive Ether.",
        "Makes the function free to call.",
        "Locks the function to only owner calls.",
      ],
      correctIndex: 1,
      hint: "Without payable, the function cannot accept ETH.",
      successMessage: "Exactly. Payable is required for receive-money flows.",
    },
    {
      question: "What is an event in Solidity and why use it?",
      options: [
        "A function that runs on calendar dates.",
        "A log that records what happened for external apps to read.",
        "A type of error message.",
        "A way to pause the contract.",
      ],
      correctIndex: 1,
      hint: "Events are like notifications your frontend can listen to.",
      successMessage: "Correct. Events connect contract actions to UI updates.",
    },
    {
      question: "What does require do in Solidity?",
      options: [
        "Forces user to pay more gas.",
        "Checks a condition and reverts if false.",
        "Imports another Solidity file.",
        "Requires admin approval for all transactions.",
      ],
      correctIndex: 1,
      hint: "If the condition fails, the transaction should stop immediately.",
      successMessage: "Right. Require is a key safety guard.",
    },
  ],
  "docs.soliditylang.org": [
    {
      question: "What does pragma at the top of a Solidity file do?",
      options: [
        "A comment describing the contract.",
        "Specifies compiler version range to avoid compatibility issues.",
        "Imports standard library functions.",
        "Sets gas price for deployment.",
      ],
      correctIndex: 1,
      hint: "Different compiler versions can behave differently.",
      successMessage: "Correct. Pragma versioning avoids many compile issues.",
    },
    {
      question: "What is the difference between memory and storage in Solidity?",
      options: [
        "Memory is permanent and storage is temporary.",
        "Storage is persistent on-chain, memory is temporary during execution.",
        "They are the same thing.",
        "Memory always costs more gas than storage.",
      ],
      correctIndex: 1,
      hint: "Think permanent notebook versus temporary scratchpad.",
      successMessage: "Exactly. Choosing memory or storage correctly is important.",
    },
    {
      question: "What does the view keyword mean on a function?",
      options: [
        "The function can be seen by everyone.",
        "The function reads state but does not modify it.",
        "The function displays output on screen.",
        "The function is visible to admins only.",
      ],
      correctIndex: 1,
      hint: "View functions are for reading data only.",
      successMessage: "Right. View functions are read-only.",
    },
  ],
  "alchemy.com/university": [
    {
      question: "What does Alchemy provide that makes Ethereum development easier?",
      options: [
        "A marketplace to buy and sell NFTs.",
        "Node infrastructure and APIs so apps can access blockchain data.",
        "A new programming language.",
        "A free custodial wallet.",
      ],
      correctIndex: 1,
      hint: "Alchemy handles node access so you focus on building product features.",
      successMessage: "Correct. Reliable node access is a core part of dApp development.",
    },
    {
      question: "What is a provider in web3 development?",
      options: [
        "Your mobile internet provider.",
        "A connection layer between your app and blockchain network.",
        "The person funding your startup.",
        "A special contract type.",
      ],
      correctIndex: 1,
      hint: "A provider is the bridge your app uses to speak to Ethereum.",
      successMessage: "Exactly. Providers are fundamental to every dApp flow.",
    },
    {
      question: "At a basic level, what is an NFT?",
      options: [
        "A cryptocurrency you spend like cash.",
        "A blockchain token proving unique ownership of an item.",
        "A digital file on your laptop.",
        "A mobile money receipt.",
      ],
      correctIndex: 1,
      hint: "Non-fungible means each item is unique, not interchangeable.",
      successMessage: "Right. NFT value comes from verifiable uniqueness.",
    },
  ],
  "learnweb3.io": [
    {
      question: "What is a DAO compared to a normal company?",
      options: [
        "A type of crypto exchange.",
        "An organization governed by smart contract rules instead of a central CEO.",
        "A government blockchain program.",
        "A wallet application.",
      ],
      correctIndex: 1,
      hint: "Think of group rules enforced by code, not one executive decision maker.",
      successMessage: "Correct. DAOs are code-governed communities.",
    },
    {
      question: "What does connecting your wallet mean in a dApp?",
      options: [
        "Physically plugging in a device.",
        "Allowing app access to your public address and approval requests.",
        "Sharing your private key.",
        "Depositing money into the app.",
      ],
      correctIndex: 1,
      hint: "Wallet connection is permission-based and should never expose your private key.",
      successMessage: "Exactly. Connection is not the same as key sharing.",
    },
    {
      question: "What is a dApp frontend usually built with?",
      options: [
        "Solidity only.",
        "HTML, CSS, JavaScript or React, plus a blockchain library.",
        "Python only.",
        "Ethereum CLI only.",
      ],
      correctIndex: 1,
      hint: "Users interact with normal web UI technology in dApps.",
      successMessage: "Right. Your existing web skills carry over directly.",
    },
  ],
  "hardhat.org/docs/getting-started": [
    {
      question: "What is Hardhat and what problem does it solve?",
      options: [
        "A cryptocurrency wallet.",
        "A dev environment for compiling, testing, and deploying contracts locally first.",
        "A block explorer dashboard.",
        "A Solidity learning video course.",
      ],
      correctIndex: 1,
      hint: "Think practice environment before paying real network costs.",
      successMessage: "Correct. Hardhat enables safe local development loops.",
    },
    {
      question: "What is a local network in Hardhat?",
      options: [
        "Your campus WiFi network.",
        "A local Ethereum simulation with free fake ETH for testing.",
        "A private enterprise chain.",
        "Public Ethereum testnet itself.",
      ],
      correctIndex: 1,
      hint: "Local network mimics Ethereum behavior without real financial risk.",
      successMessage: "Exactly. It is your safe practice arena.",
    },
    {
      question: "What does npx hardhat test do?",
      options: [
        "Installs Hardhat.",
        "Deploys directly to mainnet.",
        "Runs your automated test files for contract behavior.",
        "Opens a visual dashboard.",
      ],
      correctIndex: 2,
      hint: "Tests check expected behavior before real users interact with your contracts.",
      successMessage: "Right. Automated tests are a professional baseline.",
    },
  ],
  "thirdweb.com": [
    {
      question: "What makes thirdweb different from writing everything from scratch?",
      options: [
        "It writes perfect custom Solidity for you with AI.",
        "It offers pre-built audited templates you can deploy quickly.",
        "It replaces blockchain networks entirely.",
        "It only supports NFT projects.",
      ],
      correctIndex: 1,
      hint: "Think ready-built and reviewed templates to reduce beginner friction.",
      successMessage: "Correct. Templates can speed up secure project starts.",
    },
    {
      question: "What do audited contracts mean and why do they matter?",
      options: [
        "Checked by government offices.",
        "Reviewed by security experts to reduce vulnerability risk.",
        "Used by more than one thousand users.",
        "No gas fees required.",
      ],
      correctIndex: 1,
      hint: "Audit is a security review before people trust code with real value.",
      successMessage: "Exactly. Audits lower avoidable security risk.",
    },
    {
      question: "What can a Ugandan student realistically build first with thirdweb?",
      options: [
        "A new blockchain from zero.",
        "A simple NFT, token, or marketplace prototype in a short time.",
        "A full central banking platform.",
        "A replacement for mobile money systems.",
      ],
      correctIndex: 1,
      hint: "Start with a focused small project to learn the full flow quickly.",
      successMessage: "Right. A working small build is the fastest teacher.",
    },
  ],
  "web3.career": [
    {
      question: "Which roles are often available for beginners on web3.career?",
      options: [
        "Only senior roles above 200k USD.",
        "Community, content, devrel, and some junior technical roles.",
        "Only jobs based in the United States.",
        "Only NFT artist positions.",
      ],
      correctIndex: 1,
      hint: "Filter for entry-level and remote roles to see broader options.",
      successMessage: "Correct. Many first opportunities are non-senior and remote.",
    },
    {
      question: "Why is remote common in web3 and what does it mean for someone in Uganda?",
      options: [
        "You must relocate to another country.",
        "You can work globally from Kampala because web3 teams are borderless.",
        "Remote means only part-time work.",
        "Remote roles are usually fake.",
      ],
      correctIndex: 1,
      hint: "Web3 collaboration is internet-native and often location-flexible.",
      successMessage: "Exactly. Geography is less of a barrier than in many traditional sectors.",
    },
    {
      question: "Which skill signal most improves first-job chances in web3?",
      options: [
        "Knowing how to mine Bitcoin.",
        "A visible portfolio with small shipped projects and code links.",
        "A foreign degree only.",
        "Holding a large crypto balance.",
      ],
      correctIndex: 1,
      hint: "In web3, proof of work built by you matters more than claims.",
      successMessage: "Right. Build publicly and show your work.",
    },
  ],
  "gitcoin.co": [
    {
      question: "What is a Gitcoin bounty and how can a Ugandan student use it?",
      options: [
        "A crypto trading contest prize.",
        "A paid task like fixing bugs, writing docs, or building a feature.",
        "A government grant.",
        "A monthly salary from Gitcoin.",
      ],
      correctIndex: 1,
      hint: "Think small freelance tasks with clear requirements and payout.",
      successMessage: "Correct. Bounties are a practical first earning path.",
    },
    {
      question: "What is Gitcoin Grants and who can apply?",
      options: [
        "Loans for traders.",
        "Community-funded support for open source projects, including student communities.",
        "Only registered corporations.",
        "Only US developers.",
      ],
      correctIndex: 1,
      hint: "Impactful open projects can qualify, not just large companies.",
      successMessage: "Exactly. Strong community projects can be funded.",
    },
    {
      question: "What does open source mean and why does it help your career?",
      options: [
        "Software that is free but cannot be modified.",
        "Public code anyone can study and improve, making your contributions visible globally.",
        "Software that only runs on open operating systems.",
        "Software built by governments.",
      ],
      correctIndex: 1,
      hint: "Open contributions let employers see your real technical and collaboration habits.",
      successMessage: "Right. Open source work is strong career proof.",
    },
  ],
  "binance.com/en/academy": [
    {
      question: "What is DeFi and why is it relevant in East Africa?",
      options: [
        "A new type of mobile phone.",
        "Blockchain-based financial services without traditional banks.",
        "A Binance feature only for traders.",
        "A government regulation policy.",
      ],
      correctIndex: 1,
      hint: "DeFi can expand access where formal banking reach is limited.",
      successMessage: "Correct. DeFi relevance is strong in mobile-first regions.",
    },
    {
      question: "What does DYOR mean in crypto communities?",
      options: [
        "Do Your Own Research.",
        "Deposit Your Own Reserve.",
        "A decentralized exchange type.",
        "Daily Yield On Returns.",
      ],
      correctIndex: 0,
      hint: "Always verify claims yourself before acting on them.",
      successMessage: "Exactly. DYOR is a critical personal safety habit.",
    },
    {
      question: "Why might stablecoins be more practical than Bitcoin for everyday use in Uganda?",
      options: [
        "They never change value at all.",
        "They are pegged to a stable value, reducing payment volatility.",
        "They are issued by the Bank of Uganda.",
        "They are Bitcoin inside savings accounts.",
      ],
      correctIndex: 1,
      hint: "Lower volatility helps with predictable pricing and remittance value.",
      successMessage: "Right. Stability makes everyday transactions easier to manage.",
    },
  ],
  "developerdao.com": [
    {
      question: "What is Developer DAO and what value can members get from joining?",
      options: [
        "A company that pays fixed salaries.",
        "A global builder community with learning, collaboration, and opportunity access.",
        "A Ugandan government program.",
        "A crypto trading club.",
      ],
      correctIndex: 1,
      hint: "Think professional network for builders, not an employer.",
      successMessage: "Correct. Community relationships often unlock real opportunities.",
    },
    {
      question: "Why does community activity matter for web3 career growth?",
      options: [
        "It does not matter; only technical skill counts.",
        "Many opportunities and collaborations appear in communities before public posting.",
        "It replaces technical skills completely.",
        "Employers only hire from formal applications.",
      ],
      correctIndex: 1,
      hint: "Opportunities often flow through trusted networks first.",
      successMessage: "Exactly. Community participation is a practical growth channel.",
    },
    {
      question: "What does build in public mean and why is it recommended?",
      options: [
        "Only making free software.",
        "Sharing your learning and project progress openly to attract opportunities.",
        "Publishing only final products with no work-in-progress updates.",
        "Working physically in public spaces.",
      ],
      correctIndex: 1,
      hint: "Visibility plus consistency helps people notice and trust your progress.",
      successMessage: "Right. Building in public compounds career momentum.",
    },
  ],
  "esp.ethereum.foundation": [
    {
      question: "What is the Ethereum Foundation Ecosystem Support Program (ESP)?",
      options: [
        "A loan program for traders.",
        "A grant program funding projects and communities that support Ethereum.",
        "A scholarship to study abroad.",
        "A job placement board.",
      ],
      correctIndex: 1,
      hint: "ESP focuses on public-good impact in the Ethereum ecosystem.",
      successMessage: "Correct. Community initiatives can qualify for ESP support.",
    },
    {
      question: "What matters most when applying for an ESP grant?",
      options: [
        "Company registration only.",
        "Clear evidence of impact, audience, outputs, and ecosystem value.",
        "Already raising at least 10,000 USD.",
        "Holding a PhD in Computer Science.",
      ],
      correctIndex: 1,
      hint: "Show real outcomes and who benefits, not only credentials.",
      successMessage: "Exactly. Demonstrated impact is stronger than formal titles.",
    },
    {
      question: "Why is Uganda a strong case for blockchain education grant support?",
      options: [
        "It already has the largest blockchain ecosystem in Africa.",
        "Its very young population creates a large future builder base.",
        "Funders avoid supporting African projects.",
        "It has the most developers in Africa already.",
      ],
      correctIndex: 1,
      hint: "Demographics matter when forecasting long-term talent growth.",
      successMessage: "Right. Uganda's youth profile is a meaningful ecosystem argument.",
    },
  ],
};

function extractYouTubeId(url) {
  const match = String(url).match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|watch\?v=))([\w-]{11})/i);
  return match ? match[1] : null;
}

function getResourceQuestionKey(url) {
  const normalizedUrl = String(url || "").trim().toLowerCase();
  const youtubeId = extractYouTubeId(normalizedUrl);
  if (youtubeId) {
    return `youtube:${youtubeId}`;
  }

  if (normalizedUrl.includes("andersbrownworth.com/blockchain")) return "andersbrownworth.com/blockchain";
  if (normalizedUrl.includes("ibm.com/think/topics/blockchain")) return "ibm.com/think/topics/blockchain";
  if (normalizedUrl.includes("coindesk.com/learn")) return "coindesk.com/learn";
  if (normalizedUrl.includes("cryptozombies.io")) return "cryptozombies.io";
  if (normalizedUrl.includes("docs.soliditylang.org")) return "docs.soliditylang.org";
  if (normalizedUrl.includes("alchemy.com/university")) return "alchemy.com/university";
  if (normalizedUrl.includes("learnweb3.io")) return "learnweb3.io";
  if (normalizedUrl.includes("hardhat.org/docs/getting-started")) return "hardhat.org/docs/getting-started";
  if (normalizedUrl.includes("thirdweb.com")) return "thirdweb.com";
  if (normalizedUrl.includes("web3.career")) return "web3.career";
  if (normalizedUrl.includes("gitcoin.co")) return "gitcoin.co";
  if (normalizedUrl.includes("binance.com/en/academy")) return "binance.com/en/academy";
  if (normalizedUrl.includes("developerdao.com")) return "developerdao.com";
  if (normalizedUrl.includes("esp.ethereum.foundation")) return "esp.ethereum.foundation";

  return "";
}

function sanitizeQuestionBankSet(questionSet) {
  if (!Array.isArray(questionSet)) {
    return [];
  }

  return questionSet.slice(0, 3).map((question) => {
    const options = uniqueTextList(Array.isArray(question.options) ? question.options : []).slice(0, 4);
    const hasValidCorrectIndex = Number.isInteger(question.correctIndex)
      && question.correctIndex >= 0
      && question.correctIndex < options.length;

    return {
      question: String(question.question || "").trim(),
      options,
      correctIndex: hasValidCorrectIndex ? question.correctIndex : 0,
      hint: String(question.hint || "Pick the option that best matches the lesson."),
      successMessage: String(question.successMessage || "Correct. Nice work."),
    };
  });
}

const LESSON_QUIZ_BLUEPRINTS = {
  "what makes a blockchain different": {
    focus: "shared verification across many participants",
    corePrinciple: "Records are trusted because multiple participants compare the same history.",
    commonMistake: "assuming one office should silently control all edits",
    ugandaScenario: "Verifying certificates across campuses using a shared tamper-evident log.",
    practicalMove: "Map one campus record flow with two independent verifiers.",
  },
  "how transactions move": {
    focus: "transaction flow from request to confirmation",
    corePrinciple: "Each transfer must be validated step by step before acceptance.",
    commonMistake: "skipping sender, receiver, and amount verification checks",
    ugandaScenario: "Tracing SACCO transfer approvals with timestamps and signer records.",
    practicalMove: "Write a 3-step checklist for validating one transfer.",
  },
  "why blocks stay linked": {
    focus: "linked block history integrity",
    corePrinciple: "Changing an old block breaks the link and exposes tampering.",
    commonMistake: "thinking old records can be changed without visible impact",
    ugandaScenario: "Keeping internship placement records linked across multiple semesters.",
    practicalMove: "Explain in plain language what breaks when one old record changes.",
  },
  "public and private chains": {
    focus: "participation and governance model choice",
    corePrinciple: "Public and private chains differ mainly in access and validator permissions.",
    commonMistake: "choosing a chain type before defining governance rules",
    ugandaScenario: "A university consortium using restricted validation for internal records.",
    practicalMove: "Pick one process and justify public or private with one sentence.",
  },
  "wallet basics": {
    focus: "wallet security and user responsibility",
    corePrinciple: "Key ownership controls authorization, so safety habits are mandatory.",
    commonMistake: "sharing recovery details or approving prompts without reading",
    ugandaScenario: "Students double-checking recipient addresses before club disbursements.",
    practicalMove: "Draft a personal wallet safety checklist with three items.",
  },
  "smart contract intro": {
    focus: "rule-based automation with predictable outcomes",
    corePrinciple: "Smart contracts execute predefined rules consistently for all parties.",
    commonMistake: "starting with complex logic before validating a small rule",
    ugandaScenario: "Automating bursary release only after all required approvals are logged.",
    practicalMove: "Describe one simple rule you would automate first.",
  },
  "uganda use cases": {
    focus: "local relevance and fit-for-problem thinking",
    corePrinciple: "Use blockchain only where verification and transparency solve a real pain point.",
    commonMistake: "forcing blockchain into processes that need simple databases",
    ugandaScenario: "SACCO contribution history tracking with shared member visibility.",
    practicalMove: "Identify one local process and one measurable trust benefit.",
  },
  "mini project": {
    focus: "turning lessons into a small deliverable",
    corePrinciple: "A narrow scope with clear outputs is better than a vague big idea.",
    commonMistake: "building features before defining success criteria",
    ugandaScenario: "A student club transparency board showing verified contribution updates.",
    practicalMove: "Define one project goal, one user, and one success metric.",
  },
  "smart contract mindset": {
    focus: "predictable logic and trust-first design",
    corePrinciple: "Write contract rules that are easy to reason about and test.",
    commonMistake: "treating complexity as a sign of quality",
    ugandaScenario: "Supplier payment rules that release funds only after confirmed delivery.",
    practicalMove: "Write one if-then rule you could test today.",
  },
  "state and variables": {
    focus: "accurate state modeling",
    corePrinciple: "State variables represent business facts that contract rules depend on.",
    commonMistake: "using vague names that hide business meaning",
    ugandaScenario: "Modeling member contribution status in a cooperative savings contract.",
    practicalMove: "Rename two variables to improve audit readability.",
  },
  functions: {
    focus: "single-purpose contract behavior",
    corePrinciple: "Functions should do one clear job with validated inputs.",
    commonMistake: "putting multiple business actions into one large function",
    ugandaScenario: "Separate enrollment, payment, and confirmation actions in a training dApp.",
    practicalMove: "Split one broad function into two focused functions.",
  },
  events: {
    focus: "observable contract actions",
    corePrinciple: "Events create reliable signals that external apps can monitor.",
    commonMistake: "emitting unclear events with missing important fields",
    ugandaScenario: "Sending user notifications when verified SACCO actions are completed.",
    practicalMove: "Design one event name and two useful event fields.",
  },
  "access control": {
    focus: "role-based permission safety",
    corePrinciple: "Sensitive functions should be limited to clearly scoped roles.",
    commonMistake: "using one super-admin role for all operations",
    ugandaScenario: "Separating treasurer and auditor permissions in a group finance contract.",
    practicalMove: "Define two roles and one action each role can perform.",
  },
  "testing basics": {
    focus: "evidence-driven contract quality",
    corePrinciple: "Tests should verify both expected flows and failure paths.",
    commonMistake: "testing only happy paths right before deployment",
    ugandaScenario: "Validating failed withdrawals when contribution rules are not met.",
    practicalMove: "Write one positive and one negative test case outline.",
  },
  "deploying safely": {
    focus: "controlled release discipline",
    corePrinciple: "Deployment safety comes from checklists, rehearsals, and monitoring.",
    commonMistake: "changing live settings without a reviewed process",
    ugandaScenario: "Testnet rehearsal before launching a campus payments contract.",
    practicalMove: "Create a 5-item pre-deploy checklist.",
  },
  "mini build": {
    focus: "end-to-end implementation confidence",
    corePrinciple: "Ship a simple build that proves the full flow works.",
    commonMistake: "adding unplanned features during the final stretch",
    ugandaScenario: "A minimal dApp where members submit and confirm weekly contributions.",
    practicalMove: "Define the smallest feature set needed for demo day.",
  },
  "dapp flow basics": {
    focus: "clear beginner user journey",
    corePrinciple: "Each step should tell users what happened and what comes next.",
    commonMistake: "hiding signing or confirmation stages",
    ugandaScenario: "A mobile-first voting flow with clear status updates after signing.",
    practicalMove: "Sketch a 3-screen flow with explicit status labels.",
  },
  "wallet connect ux": {
    focus: "friction-aware wallet onboarding",
    corePrinciple: "Wallet connect steps must be explicit, secure, and easy to retry.",
    commonMistake: "assuming users understand wallet prompts without guidance",
    ugandaScenario: "Students connecting wallets on low-data networks with clear retry states.",
    practicalMove: "Write one helper message for a failed wallet connection.",
  },
  "reading on-chain data": {
    focus: "accurate read-only blockchain queries",
    corePrinciple: "Readable data views should map contract state to understandable UI labels.",
    commonMistake: "displaying raw values without context or units",
    ugandaScenario: "Showing contribution totals and last update time for group members.",
    practicalMove: "Convert one raw on-chain value into a user-friendly label.",
  },
  "writing transactions": {
    focus: "safe transaction submission",
    corePrinciple: "Users need confirmation, pending, and success or failure states.",
    commonMistake: "treating submit click as instant completion",
    ugandaScenario: "A fee-payment flow that clearly shows pending confirmation before success.",
    practicalMove: "Draft UI copy for pending and confirmed transaction states.",
  },
  "error handling": {
    focus: "recoverable user experience",
    corePrinciple: "Clear errors should explain cause and next action.",
    commonMistake: "showing generic failures without recovery guidance",
    ugandaScenario: "Handling unstable connectivity gracefully during wallet interactions.",
    practicalMove: "Write one error message with a concrete retry instruction.",
  },
  performance: {
    focus: "lightweight responsive delivery",
    corePrinciple: "Fast pages and efficient rendering improve completion rates.",
    commonMistake: "shipping heavy assets and unnecessary rerenders",
    ugandaScenario: "Optimizing lesson pages for budget smartphones and mobile data limits.",
    practicalMove: "Choose one optimization you can implement today.",
  },
  "polish and testing": {
    focus: "trustworthy finish quality",
    corePrinciple: "Polish means accessibility, consistency, and verified behavior.",
    commonMistake: "focusing on visuals while skipping final validation",
    ugandaScenario: "Verifying readable contrast and working flows on mobile before release.",
    practicalMove: "Create a short QA pass checklist with three checks.",
  },
  launch: {
    focus: "release readiness and monitoring",
    corePrinciple: "Launch is successful only when post-release monitoring is in place.",
    commonMistake: "assuming deployment ends the work",
    ugandaScenario: "Publishing a learner dApp and watching user error rates in week one.",
    practicalMove: "Define one launch metric and one alert threshold.",
  },
  "credible profile basics": {
    focus: "building public proof of progress",
    corePrinciple: "Small consistent outputs build stronger trust than occasional claims.",
    commonMistake: "waiting for perfect work before sharing",
    ugandaScenario: "Posting weekly learning notes that recruiters can verify.",
    practicalMove: "Plan one public output you will publish this week.",
  },
  "portfolio signals": {
    focus: "evidence-based portfolio quality",
    corePrinciple: "Good portfolios show outcomes, process, and reliability.",
    commonMistake: "listing tools without showing what was built",
    ugandaScenario: "A GitHub profile with clear project readmes and demo links.",
    practicalMove: "Rewrite one project summary to include measurable impact.",
  },
  "community networking": {
    focus: "relationship building through contribution",
    corePrinciple: "Consistent value in communities creates trust and opportunities.",
    commonMistake: "joining groups without participating meaningfully",
    ugandaScenario: "Contributing weekly insights in local and global web3 forums.",
    practicalMove: "Write one helpful community comment you can post today.",
  },
  "grant readiness": {
    focus: "problem-first proposal quality",
    corePrinciple: "Strong grant applications tie clear problems to realistic deliverables.",
    commonMistake: "asking for funding without defined milestones",
    ugandaScenario: "A proposal for transparent student association treasury tooling.",
    practicalMove: "Draft one milestone with output and timeline.",
  },
  "interview readiness": {
    focus: "clear communication of practical capability",
    corePrinciple: "Interview confidence comes from structured stories and project evidence.",
    commonMistake: "giving tool lists without explaining decisions",
    ugandaScenario: "Explaining how you solved a real issue in a local pilot project.",
    practicalMove: "Prepare one STAR answer from your recent work.",
  },
  "freelance path": {
    focus: "client trust and delivery reliability",
    corePrinciple: "Clear scope, communication, and deadlines win repeat work.",
    commonMistake: "accepting vague projects without defined outcomes",
    ugandaScenario: "Delivering a small web3 feature with weekly client updates.",
    practicalMove: "Draft a one-paragraph project scope template.",
  },
  "remote team habits": {
    focus: "asynchronous collaboration discipline",
    corePrinciple: "Remote effectiveness depends on clear updates and documented decisions.",
    commonMistake: "keeping key context in private chats only",
    ugandaScenario: "Using concise standups and task notes across time zones.",
    practicalMove: "Write a daily async update template with three bullet points.",
  },
  "career sprint": {
    focus: "short-cycle execution and reflection",
    corePrinciple: "Weekly planning and review loops create steady career momentum.",
    commonMistake: "running tasks without measurable outcomes",
    ugandaScenario: "A 7-day sprint to publish a demo, summary, and feedback reflection.",
    practicalMove: "Define one sprint goal, one output, and one review question.",
  },
};

function getStableCorrectIndex(title, questionNumber) {
  const seed = `${normalizeLessonTitle(title)}-${questionNumber}`;
  let hash = 0;

  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash + seed.charCodeAt(i) * (i + 1)) % 997;
  }

  return hash % 3;
}

function getStableVariantIndex(title, group, size) {
  const seed = `${normalizeLessonTitle(title)}-${group}`;
  let hash = 0;

  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 33 + seed.charCodeAt(i)) % 1009;
  }

  return hash % size;
}

function positionOptions(correctOption, wrongOptions, desiredCorrectIndex) {
  const base = [correctOption, ...wrongOptions];
  const shift = desiredCorrectIndex;
  const options = base.slice(-shift).concat(base.slice(0, -shift || undefined));

  return {
    options,
    correctIndex: desiredCorrectIndex,
  };
}

function uniqueTextList(items) {
  const seen = new Set();
  const result = [];

  items.forEach((item) => {
    const key = item.trim().toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  });

  return result;
}

function finalizeQuestionSet(questions, title, blueprint, resourceTitle) {
  const seenQuestions = new Set();

  return questions.map((question, index) => {
    const originalCorrect = question.options[question.correctIndex];
    const distractorPool = [
      `Ignore ${blueprint.focus} and continue without checks.`,
      `Use ${title} words only, with no practical action.`,
      `Skip ${resourceTitle} and rely on assumptions.`,
      `Keep approvals unclear and avoid verification steps.`,
    ];

    const dedupedOptions = uniqueTextList(question.options);
    while (dedupedOptions.length < 3) {
      const nextDistractor = distractorPool.find(
        (item) => !dedupedOptions.some((opt) => opt.trim().toLowerCase() === item.trim().toLowerCase()),
      );

      if (!nextDistractor) {
        dedupedOptions.push(`Alternative option ${dedupedOptions.length + 1} for ${title}.`);
        break;
      }

      dedupedOptions.push(nextDistractor);
    }

    const normalizedQuestion = question.question.trim();
    const questionKey = normalizedQuestion.toLowerCase();
    const uniqueQuestion = seenQuestions.has(questionKey)
      ? `${normalizedQuestion} (${title} focus ${index + 1})`
      : normalizedQuestion;

    seenQuestions.add(uniqueQuestion.toLowerCase());

    const correctedIndex = Math.max(
      0,
      dedupedOptions.findIndex((option) => option === originalCorrect),
    );

    return {
      ...question,
      question: uniqueQuestion,
      options: dedupedOptions.slice(0, 3),
      correctIndex: correctedIndex,
    };
  });
}

function buildQuestionsFromBlueprint(title, blueprint, resource) {
  const source = resource?.sourceWebsite || "the lesson resource";
  const resourceTitle = resource?.title || "the lesson guide";
  const answerSeed = getStableVariantIndex(`${title}-${resourceTitle}`, "answer-seed", 3);
  const q1CorrectIndex = (answerSeed + 1) % 3;
  const q2CorrectIndex = (answerSeed + 2) % 3;
  const q3CorrectIndex = answerSeed;
  const q1Style = getStableVariantIndex(title, "q1-style", 4);
  const q2Style = getStableVariantIndex(title, "q2-style", 4);
  const q3Style = getStableVariantIndex(title, "q3-style", 4);

  const q1QuestionStyles = [
    `In ${title}, what is the main idea?`,
    `After this lesson, what should you understand first about ${title}?`,
    `Which statement best explains ${title} for a beginner?`,
    `What is the most important takeaway from ${title}?`,
  ];

  const q2QuestionStyles = [
    `Based on ${resourceTitle}, which choice avoids the common mistake?`,
    `From ${resourceTitle}, what is the safest way to avoid mistakes?`,
    `Which action from ${resourceTitle} helps prevent common errors?`,
    `If you follow ${resourceTitle}, which option reduces risk early?`,
  ];

  const q3QuestionStyles = [
    `Which local example best matches ${title}?`,
    `Which Uganda scenario applies ${title} correctly?`,
    `Where would ${title} create the most practical value locally?`,
    `Which real context best uses the idea from ${title}?`,
  ];

  const q1HintStyles = [
    "Pick the option that is practical and reliable.",
    "Choose the option that focuses on clear real-world use.",
    "Pick the answer that is simple, testable, and realistic.",
    "Choose the idea that can work in an actual project.",
  ];

  const q2HintStyles = [
    "Choose the option that prevents problems early.",
    "Pick the answer that adds checks before action.",
    "Choose the option that reduces mistakes before release.",
    "Pick the approach that improves safety and clarity first.",
  ];

  const q3HintStyles = [
    "Choose the example that improves trust and traceability.",
    "Pick the local case that makes records clearer and safer.",
    "Choose the scenario with clear accountability.",
    "Pick the context where verification is strongest.",
  ];

  const q1SuccessStyles = [
    "Correct. That captures the main idea of this lesson.",
    "Correct. That is the core concept learners should apply.",
    "Nice work. That answer reflects the key principle.",
    "Correct. That is the strongest beginner takeaway.",
  ];

  const q2SuccessStyles = [
    "Exactly. Prevention and clear checks are the right approach.",
    "Correct. Early checks help avoid expensive mistakes.",
    "Right. This approach prevents issues before they spread.",
    "Correct. This is the safer and more reliable choice.",
  ];

  const q3SuccessStyles = [
    "Right. That scenario shows real-world relevance for this lesson.",
    "Correct. That local case applies the concept well.",
    "Exactly. That context is a strong practical fit.",
    "Correct. That is the best local application example.",
  ];

  const q1 = positionOptions(
    blueprint.corePrinciple,
    [
      `Skip ${blueprint.focus} and decide by guesswork in ${title}.`,
      `Memorize terms from ${title} but do not apply them in real use.`,
    ],
    q1CorrectIndex,
  );

  const q2 = positionOptions(
    `Use clear checks to prevent ${blueprint.commonMistake}.`,
    [
      `Repeat this mistake: ${blueprint.commonMistake}.`,
      `Delay checks until after launch while applying ${title}.`,
    ],
    q2CorrectIndex,
  );

  const q3 = positionOptions(
    blueprint.ugandaScenario,
    [
      `A local flow where ${blueprint.focus} is ignored and records are unclear.`,
      `A workflow with hidden approvals and no verification in ${title}.`,
    ],
    q3CorrectIndex,
  );

  const draftQuestions = [
    {
      question: q1QuestionStyles[q1Style],
      options: q1.options,
      correctIndex: q1.correctIndex,
      hint: q1HintStyles[q1Style],
      successMessage: q1SuccessStyles[q1Style],
      practicalTask: `Practical task: Rewrite that principle in plain language and connect it to one point from ${source}.`,
    },
    {
      question: q2QuestionStyles[q2Style],
      options: q2.options,
      correctIndex: q2.correctIndex,
      hint: q2HintStyles[q2Style],
      successMessage: q2SuccessStyles[q2Style],
      practicalTask: `Practical task: Add one checklist item you would enforce before release after reviewing ${source}.`,
    },
    {
      question: q3QuestionStyles[q3Style],
      options: q3.options,
      correctIndex: q3.correctIndex,
      hint: q3HintStyles[q3Style],
      successMessage: q3SuccessStyles[q3Style],
      practicalTask: `Practical task: ${blueprint.practicalMove}`,
    },
  ];

  return finalizeQuestionSet(draftQuestions, title, blueprint, resourceTitle);
}

function buildQuestionsForTitle(title, resource) {
  const resourceQuestionKey = getResourceQuestionKey(resource?.url);
  const curatedQuestionSet = sanitizeQuestionBankSet(
    QUESTION_BANK_BY_RESOURCE_KEY[resourceQuestionKey],
  );

  if (curatedQuestionSet.length === 3) {
    return curatedQuestionSet;
  }

  const key = normalizeLessonTitle(title);
  const blueprint = LESSON_QUIZ_BLUEPRINTS[key] || {
    focus: `the core of ${title}`,
    corePrinciple: `Use ${title} with clear reasoning, visible checks, and practical outcomes.`,
    commonMistake: `ignoring practical validation in ${title}`,
    ugandaScenario: `Applying ${title} to improve one university or SACCO workflow with transparent records.`,
    practicalMove: `Write one real action that applies ${title} this week.`,
  };

  return buildQuestionsFromBlueprint(title, blueprint, resource);
}

function buildGuideForLesson(title, resource) {
  const key = normalizeLessonTitle(title);
  const blueprint = LESSON_QUIZ_BLUEPRINTS[key] || {
    focus: `the core of ${title}`,
    corePrinciple: `Use ${title} with clear reasoning, visible checks, and practical outcomes.`,
    commonMistake: `ignoring practical validation in ${title}`,
    ugandaScenario: `Applying ${title} to improve one university or SACCO workflow with transparent records.`,
    practicalMove: `Write one real action that applies ${title} this week.`,
  };

  const source = resource?.sourceWebsite || "the resource";
  const resourceTitle = resource?.title || "this lesson resource";

  return {
    whatYoullLearn: [
      `How ${blueprint.focus} works in practice, using insights from ${source}.`,
      `How to avoid ${blueprint.commonMistake} by applying explicit checks and clearer decisions.`,
      `How to connect ${title.toLowerCase()} to a realistic Uganda context: ${blueprint.ugandaScenario}`,
    ],
    contextText:
      `${resourceTitle} from ${source} is used as the anchor for this lesson. Focus on ${blueprint.focus}, then contrast strong practice against the common pitfall of ${blueprint.commonMistake}. You are expected to translate the concept into a local scenario, not just repeat definitions. By the end, you should explain the concept clearly and show one action you can execute in a real workflow.`,
    focusPoints: [
      `Extract one core principle from ${resourceTitle} that supports ${blueprint.focus}.`,
      `Identify where ${blueprint.commonMistake} could appear in a student, SACCO, or community workflow.`,
      `Link your takeaway to this scenario: ${blueprint.ugandaScenario}`,
    ],
    practicalTask: {
      instruction:
        `Using ${resourceTitle}, write 2-3 sentences that apply this lesson to one local workflow. ${blueprint.practicalMove}`,
      placeholder:
        `Example: After reviewing ${source}, I would apply ${title.toLowerCase()} by ${blueprint.practicalMove.toLowerCase()}`,
    },
  };
}

function buildLessonData(track, lessonNumber) {
  const index = Math.max(0, lessonNumber - 1);
  const title = track.lesson.allLessons[index]?.title || track.lesson.lessonTitle;
  const resource = getResourceForLesson(track.id, index)
    || LESSON_RESOURCES[track.id]?.[index]
    || track.lesson.resource;
  const guide = buildGuideForLesson(title, resource);

  return {
    ...track.lesson,
    lessonNumber,
    lessonTitle: title,
    estimatedTime: `${10 + (index % 4) * 2} minutes`,
    whatYoullLearn: guide.whatYoullLearn,
    contextText: guide.contextText,
    focusPoints: guide.focusPoints,
    resource: {
      ...resource,
      description: `This resource is mapped specifically to ${title} and drives the lesson flow, questions, and practical task for this step.`,
    },
    questions: buildQuestionsForTitle(title, resource),
    practicalTask: guide.practicalTask,
  };
}

const TRACKS = [
  {
    id: "basics",
    trackName: "Blockchain Basics",
    color: "#34d399",
    summary: "Start from zero and understand blockchain in plain language with local examples.",
    lesson: {
      trackName: "Blockchain Basics",
      lessonNumber: 1,
      totalLessons: 8,
      lessonTitle: "What Makes a Blockchain Different",
      estimatedTime: "12 minutes",
      difficulty: "Beginner",
      whatYoullLearn: [
        "How blockchain differs from a normal campus database managed by one office.",
        "Why shared verification can reduce disputes when records matter.",
        "How this idea connects to Uganda use cases like certificate checks.",
      ],
      contextText:
        "Think about results records in a university system where one office controls edits. A blockchain works differently because many participants keep matching copies and check one another. If someone tries to alter old information quietly, the mismatch is visible to others. This creates stronger trust in shared data. In Uganda, this can help when multiple institutions need to verify records quickly without relying on one server.",
      focusPoints: [
        "Notice the difference between single-owner records and shared records.",
        "Pay attention to why visibility of edits matters for trust.",
        "Watch for the local example and ask where this could help in your campus.",
      ],
      resource: {
        type: "video",
        url: "https://www.youtube-nocookie.com/embed/bBC-nXj3Ng4?rel=0&modestbranding=1&iv_load_policy=3",
        title: "Blockchain explained for beginners",
        description:
          "A beginner-friendly walkthrough of linked blocks and why tamper-evident history matters.",
        sourceWebsite: "YouTube",
      },
      questions: [
        {
          question: "What is the biggest difference between a blockchain and one private spreadsheet?",
          options: [
            "Blockchain is checked by many participants, not one owner",
            "Blockchain always runs faster than every database",
            "Blockchain works only on expensive laptops",
          ],
          correctIndex: 0,
          hint: "Not quite. Focus on who verifies and controls updates.",
          successMessage: "Exactly. Shared verification is the key idea.",
        },
        {
          question: "If old data is changed quietly, what usually happens on a blockchain network?",
          options: [
            "Nothing changes because no one can see it",
            "Other copies can spot the mismatch and reject it",
            "The internet automatically shuts down",
          ],
          correctIndex: 1,
          hint: "Think about many copies comparing the same history.",
          successMessage: "Correct. Comparison across copies exposes tampering.",
        },
        {
          question: "Which local example best matches this lesson?",
          options: [
            "A public process for verifying certificates across campuses",
            "One hidden file edited by a single account",
            "A paper notebook in one office drawer",
          ],
          correctIndex: 0,
          hint: "Pick the one that improves transparency for many people.",
          successMessage: "Yes, that is a strong Uganda-relevant use case.",
        },
      ],
      practicalTask: {
        instruction:
          "Write 2-3 sentences about one record challenge at your university that could benefit from shared verification.",
        placeholder:
          "Example: Our internship confirmations are often delayed. A shared verification log between faculty and host organizations would make confirmation faster and easier to trust.",
      },
      xpReward: 50,
      allLessons: createEmptyLessons([
        "What Makes a Blockchain Different",
        "How Transactions Move",
        "Why Blocks Stay Linked",
        "Public and Private Chains",
        "Wallet Basics",
        "Smart Contract Intro",
        "Uganda Use Cases",
        "Mini Project",
      ]),
    },
  },
  {
    id: "solidity",
    trackName: "Ethereum and Solidity",
    color: "#38bdf8",
    summary: "Move from concepts to writing simple smart contract logic.",
    lesson: {
      trackName: "Ethereum and Solidity",
      lessonNumber: 1,
      totalLessons: 8,
      lessonTitle: "Your First Smart Contract Mindset",
      estimatedTime: "14 minutes",
      difficulty: "Intermediate",
      whatYoullLearn: [
        "What a smart contract is in practical terms, without jargon overload.",
        "How contract rules can automate trust between people who never met.",
        "Where this can apply in East African business workflows.",
      ],
      contextText:
        "A smart contract is code that follows clear rules once deployed. You can think of it like a strict digital agreement that runs the same way for everyone. No one can secretly alter one person's version while leaving others unchanged. This consistency is useful when parties need predictable outcomes. In East Africa, cooperatives and small suppliers can use clear automated rules to reduce disputes.",
      focusPoints: [
        "Look for rule-based behavior that does not depend on one person's approval.",
        "Notice how predictable execution builds confidence.",
        "Connect the examples to real business trust problems around you.",
      ],
      resource: {
        type: "article",
        url: "https://ethereum.org/en/developers/docs/smart-contracts/",
        title: "Smart Contracts Developer Docs",
        description:
          "A practical introduction to what smart contracts do and how developers think about them.",
        sourceWebsite: "ethereum.org",
      },
      questions: [
        {
          question: "What makes a smart contract useful for trust?",
          options: [
            "It follows predefined rules consistently",
            "It lets one admin override anything silently",
            "It removes the need for internet",
          ],
          correctIndex: 0,
          hint: "Think about consistency and shared expectations.",
          successMessage: "Exactly. Consistent rule execution is central.",
        },
        {
          question: "Which is a better use case for a smart contract mindset?",
          options: [
            "A process where rules should be transparent to all parties",
            "A private decision one person must keep hidden",
            "A case where no digital records are needed",
          ],
          correctIndex: 0,
          hint: "Pick the option where transparency improves fairness.",
          successMessage: "Correct. Transparent rules are the strength here.",
        },
        {
          question: "Why do beginners start with simple logic first?",
          options: [
            "Simple logic is easier to test and trust before complexity",
            "Complex code is always safer from day one",
            "Testing is not important in blockchain",
          ],
          correctIndex: 0,
          hint: "Think about testing confidence step by step.",
          successMessage: "Right. Start simple, verify, then grow.",
        },
      ],
      practicalTask: {
        instruction:
          "Describe a simple rule you would automate for a student savings group in Kampala.",
        placeholder:
          "Example: Release funds only when monthly contribution records from all members are confirmed.",
      },
      xpReward: 60,
      allLessons: createEmptyLessons([
        "Smart Contract Mindset",
        "State and Variables",
        "Functions",
        "Events",
        "Access Control",
        "Testing Basics",
        "Deploying Safely",
        "Mini Build",
      ]),
    },
  },
  {
    id: "dapp",
    trackName: "Build Your First dApp",
    color: "#4d6ff0",
    summary: "Connect frontend interfaces to blockchain actions with confidence.",
    lesson: {
      trackName: "Build Your First dApp",
      lessonNumber: 1,
      totalLessons: 8,
      lessonTitle: "From Idea to Simple dApp Flow",
      estimatedTime: "15 minutes",
      difficulty: "Intermediate",
      whatYoullLearn: [
        "How a dApp combines familiar web screens with blockchain actions.",
        "Why wallet connection is part of user identity in Web3 apps.",
        "How to design simple steps so beginners do not get stuck.",
      ],
      contextText:
        "A decentralized app still has normal screens, buttons, and forms. The difference is that important actions are verified on-chain, often after wallet approval. For beginners, the flow must stay simple and clear at each step. If the interface is confusing, users drop off quickly. In Uganda, clear dApp onboarding helps first-time users move from curiosity to practical use.",
      focusPoints: [
        "Track where a user clicks, signs, and receives confirmation.",
        "Notice how clear labels reduce fear during wallet actions.",
        "Observe how small steps help mobile-first learners complete tasks.",
      ],
      resource: {
        type: "video",
        url: "https://www.youtube-nocookie.com/embed/M576WGiDBdQ?rel=0&modestbranding=1&iv_load_policy=3",
        title: "dApp flow walkthrough",
        description:
          "A practical look at building a simple web3 app flow from frontend to contract interaction.",
        sourceWebsite: "YouTube",
      },
      questions: [
        {
          question: "What is the biggest UI goal for first-time dApp users?",
          options: [
            "Clear, step-by-step actions with feedback",
            "As many advanced options as possible",
            "Hidden wallet steps to save space",
          ],
          correctIndex: 0,
          hint: "Think clarity first, complexity later.",
          successMessage: "Exactly. Clarity is non-negotiable for beginners.",
        },
        {
          question: "Where does a wallet mostly fit in a dApp flow?",
          options: [
            "As part of identity and transaction approval",
            "Only for changing font styles",
            "Only for reading blog posts",
          ],
          correctIndex: 0,
          hint: "Focus on signing and ownership actions.",
          successMessage: "Correct. Wallet steps anchor trust and control.",
        },
        {
          question: "Why should confirmations be explicit after user actions?",
          options: [
            "So users know what happened and what to do next",
            "So the page can look more complex",
            "Because confirmations replace all testing",
          ],
          correctIndex: 0,
          hint: "Think user confidence and reduced confusion.",
          successMessage: "Yes. Good feedback keeps learners moving forward.",
        },
      ],
      practicalTask: {
        instruction:
          "Write a 3-step flow for a student club voting dApp, from opening the app to seeing results.",
        placeholder:
          "Example: Connect wallet, choose candidate, sign vote, then view confirmation and updated totals.",
      },
      xpReward: 70,
      allLessons: createEmptyLessons([
        "dApp Flow Basics",
        "Wallet Connect UX",
        "Reading On-Chain Data",
        "Writing Transactions",
        "Error Handling",
        "Performance",
        "Polish and Testing",
        "Launch",
      ]),
    },
  },
  {
    id: "career",
    trackName: "Web3 Career in Africa",
    color: "#818cf8",
    summary: "Turn learning into practical opportunities, portfolio proof, and community visibility.",
    lesson: {
      trackName: "Web3 Career in Africa",
      lessonNumber: 1,
      totalLessons: 8,
      lessonTitle: "Build a Credible Beginner Profile",
      estimatedTime: "10 minutes",
      difficulty: "Advanced",
      whatYoullLearn: [
        "How to show progress publicly even before your first paid role.",
        "What kinds of small evidence increase trust from mentors and teams.",
        "How Uganda-based learners can position for global remote opportunities.",
      ],
      contextText:
        "Most opportunities go to people who show consistent proof of learning. You do not need to start with a big project. Small visible wins, clear notes, and community participation can build trust quickly. This approach helps recruiters and collaborators understand your growth path. In Uganda, this matters because remote teams often rely on public proof before interviews.",
      focusPoints: [
        "Look for repeatable habits, not one-time motivation.",
        "Notice how public proof beats vague claims.",
        "Map each habit to a weekly action you can sustain.",
      ],
      resource: {
        type: "article",
        url: "https://web3.career/",
        title: "Web3 Career Board",
        description:
          "Explore role types and skill expectations so you can align your learning with real demand.",
        sourceWebsite: "web3.career",
      },
      questions: [
        {
          question: "What helps a beginner look credible fastest?",
          options: [
            "Consistent visible proof of progress",
            "Only saying you are passionate",
            "Waiting until everything is perfect",
          ],
          correctIndex: 0,
          hint: "Think evidence people can actually verify.",
          successMessage: "Exactly. Proof creates trust.",
        },
        {
          question: "Why are small weekly outputs better than random large bursts?",
          options: [
            "They show reliability over time",
            "They remove the need for skills",
            "They guarantee instant jobs",
          ],
          correctIndex: 0,
          hint: "Focus on patterns others can depend on.",
          successMessage: "Correct. Reliability stands out.",
        },
        {
          question: "For a Ugandan learner targeting global teams, what matters most?",
          options: [
            "Clear portfolio signals and community engagement",
            "Geographic location alone",
            "Following every trend without depth",
          ],
          correctIndex: 0,
          hint: "Pick what demonstrates capability, not just interest.",
          successMessage: "Yes. Clear signals open global doors.",
        },
      ],
      practicalTask: {
        instruction:
          "Write one 7-day action plan with three concrete outputs you will publish.",
        placeholder:
          "Example: Day 2 share one learning note, day 4 publish a tiny code demo, day 7 write a short reflection.",
      },
      xpReward: 55,
      allLessons: createEmptyLessons([
        "Credible Profile Basics",
        "Portfolio Signals",
        "Community Networking",
        "Grant Readiness",
        "Interview Readiness",
        "Freelance Path",
        "Remote Team Habits",
        "Career Sprint",
      ]),
    },
  },
];

export default function LessonDemoPage({ theme = "dark" }) {
  const [activeTrackId, setActiveTrackId] = useState(() =>
    safeRead(STORAGE_KEYS.activeTrackId, null),
  );
  const [activeLessonNumber, setActiveLessonNumber] = useState(() =>
    safeRead(STORAGE_KEYS.activeLessonNumber, 1),
  );
  const [completedByTrack, setCompletedByTrack] = useState(() =>
    safeRead(STORAGE_KEYS.completedByTrack, {}),
  );
  const [completedTrackId, setCompletedTrackId] = useState(() =>
    safeRead(STORAGE_KEYS.completedTrackId, null),
  );
  const [copied, setCopied] = useState(false);
  const isMobile = typeof window !== "undefined" ? window.innerWidth <= 768 : false;
  const colors = TOKENS[theme] || TOKENS.dark;

  safeWrite(STORAGE_KEYS.activeTrackId, activeTrackId);
  safeWrite(STORAGE_KEYS.activeLessonNumber, activeLessonNumber);
  safeWrite(STORAGE_KEYS.completedByTrack, completedByTrack);
  safeWrite(STORAGE_KEYS.completedTrackId, completedTrackId);

  const activeTrack = useMemo(
    () => TRACKS.find((track) => track.id === activeTrackId) || null,
    [activeTrackId],
  );

  const completedTrack = useMemo(
    () => TRACKS.find((track) => track.id === completedTrackId) || null,
    [completedTrackId],
  );

  const activeLesson = useMemo(() => {
    if (!activeTrack) {
      return null;
    }

    const lessonNumber = Math.max(1, Math.min(activeLessonNumber, activeTrack.lesson.totalLessons));
    const completedCount = completedByTrack[activeTrack.id] || 0;
    const lessonData = buildLessonData(activeTrack, lessonNumber);

    return {
      ...lessonData,
      allLessons: activeTrack.lesson.allLessons.map((lesson, index) => ({
        ...lesson,
        completed: index < completedCount,
      })),
    };
  }, [activeTrack, activeLessonNumber, completedByTrack]);

  if (!activeTrack && completedTrack) {
    const totalXp = completedTrack.lesson.totalLessons * completedTrack.lesson.xpReward;
    const level = Math.floor(totalXp / 200) + 1;
    const levelBase = (level - 1) * 200;
    const levelTarget = level * 200;
    const levelProgress = Math.max(
      0,
      Math.min(100, Math.round(((totalXp - levelBase) / (levelTarget - levelBase)) * 100)),
    );
    const mastery = TRACK_MASTERY[completedTrack.id] || [
      "Completed the full learning path",
      "Built confidence with practical tasks",
      "Ready for the next mission",
    ];
    const completedIndex = TRACKS.findIndex((track) => track.id === completedTrack.id);
    const nextTrack = completedIndex >= 0 && completedIndex < TRACKS.length - 1
      ? TRACKS[completedIndex + 1]
      : null;
    const shareText = `I completed ${completedTrack.trackName} on DigitalSphereUg and earned ${totalXp} XP. Next step: keep building.`;

    return (
      <div
        style={{
          minHeight: "100vh",
          background: colors.bg,
          color: colors.text,
          padding: isMobile ? "84px 16px 32px" : "98px 20px 40px",
          fontFamily: "'Manrope', sans-serif",
        }}
      >
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div
            style={{
              background: colors.card,
              border: `1px solid ${colors.border}`,
              borderRadius: 16,
              padding: isMobile ? 18 : 26,
            }}
          >
            <div
              style={{
                width: 66,
                height: 66,
                borderRadius: 999,
                border: `2px solid ${completedTrack.color}`,
                display: "grid",
                placeItems: "center",
                color: completedTrack.color,
                fontSize: 30,
                fontWeight: 800,
                marginBottom: 12,
              }}
            >
              ✓
            </div>

            <h1
              style={{
                margin: "0 0 8px",
                fontFamily: "'Outfit', sans-serif",
                fontSize: isMobile ? 28 : 40,
                lineHeight: 1.1,
              }}
            >
              {completedTrack.trackName} Complete 🎉
            </h1>

            <p style={{ margin: "0 0 14px", color: colors.textSub, lineHeight: 1.7 }}>
              You finished all {completedTrack.lesson.totalLessons} lessons in this track. Keep the momentum going.
            </p>

            <div
              style={{
                background: colors.card,
                border: `1px solid ${colors.border}`,
                borderRadius: 12,
                padding: 14,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  marginBottom: 8,
                  fontSize: 18,
                }}
              >
                Mastery Unlocked
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, color: colors.textSub, lineHeight: 1.7 }}>
                {mastery.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                border: `1px solid ${completedTrack.color}`,
                background: `${completedTrack.color}18`,
                color: completedTrack.color,
                borderRadius: 999,
                padding: "7px 12px",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Total Earned: +{totalXp} XP
            </div>

            <div
              style={{
                marginBottom: 16,
                border: `1px solid ${colors.border}`,
                borderRadius: 12,
                padding: 12,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, gap: 8 }}>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>Level {level} Builder</span>
                <span style={{ color: colors.textSub, fontSize: 13 }}>{levelTarget - totalXp} XP to Level {level + 1}</span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: 9,
                  borderRadius: 999,
                  background: colors.bg,
                  border: `1px solid ${colors.border}`,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${levelProgress}%`,
                    height: "100%",
                    background: `linear-gradient(90deg, ${completedTrack.color}, ${colors.blueLt})`,
                  }}
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
              <button
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(shareText);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  } catch {
                    setCopied(false);
                  }
                }}
                style={{
                  border: `1px solid ${colors.border}`,
                  background: colors.card,
                  color: colors.text,
                  borderRadius: 10,
                  padding: "10px 12px",
                  cursor: "pointer",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                }}
              >
                {copied ? "Copied" : "Copy Proof Card Text"}
              </button>
              <a
                href="https://t.me/digitalsphereug"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: `1px solid ${colors.border}`,
                  background: colors.card,
                  color: colors.text,
                  borderRadius: 10,
                  padding: "10px 12px",
                  textDecoration: "none",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                }}
              >
                Join Community Room
              </a>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {nextTrack ? (
                <button
                  type="button"
                  onClick={() => {
                    setCompletedTrackId(null);
                    setActiveTrackId(nextTrack.id);
                    setActiveLessonNumber(1);
                    if (typeof window !== "undefined") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  style={{
                    flex: 1,
                    minWidth: 180,
                    border: `1px solid ${colors.blueLt}`,
                    background: colors.blueLt,
                    color: "#ffffff",
                    borderRadius: 10,
                    padding: "11px 14px",
                    cursor: "pointer",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Next Mission: {nextTrack.trackName}
                </button>
              ) : null}
              <button
                type="button"
                onClick={() => setCompletedTrackId(null)}
                style={{
                  flex: 1,
                  minWidth: 180,
                  border: `1px solid ${colors.border}`,
                  background: colors.card,
                  color: colors.text,
                  borderRadius: 10,
                  padding: "11px 14px",
                  cursor: "pointer",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                }}
              >
                Back to Tracks
              </button>
              <button
                type="button"
                onClick={() => {
                  setCompletedByTrack((prev) => ({ ...prev, [completedTrack.id]: 0 }));
                  setCompletedTrackId(null);
                  setActiveTrackId(completedTrack.id);
                  setActiveLessonNumber(1);
                  setCopied(false);
                }}
                style={{
                  flex: 1,
                  minWidth: 180,
                  border: `1px solid ${colors.blueLt}`,
                  background: colors.blueLt,
                  color: "#ffffff",
                  borderRadius: 10,
                  padding: "11px 14px",
                  cursor: "pointer",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                }}
              >
                Restart Track
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!activeTrack) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: colors.bg,
          color: colors.text,
          padding: isMobile ? "84px 16px 32px" : "98px 20px 40px",
          fontFamily: "'Manrope', sans-serif",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div
            style={{
              background: colors.card,
              border: `1px solid ${colors.border}`,
              borderRadius: 16,
              padding: isMobile ? 16 : 20,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: isMobile ? 26 : 36,
                lineHeight: 1.1,
                marginBottom: 8,
              }}
            >
              Choose a Learning Track
            </div>
            <p style={{ margin: 0, color: colors.textSub, lineHeight: 1.7 }}>
              Each track now has its own lesson content and resource path. Progress starts at 0% for new learners and updates only after completion.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
              gap: 14,
            }}
          >
            {TRACKS.map((track) => (
              (() => {
                const completedCount = completedByTrack[track.id] || 0;
                const totalLessons = track.lesson.totalLessons;
                const percent = Math.round((completedCount / totalLessons) * 100);
                const isDone = completedCount >= totalLessons;
                const canResume = completedCount > 0 && !isDone;
                const resumeLessonNumber = Math.min(totalLessons, completedCount + 1);
                const lastStoppedLessonNumber = Math.max(1, Math.min(totalLessons, completedCount));

                return (
                  <div key={track.id} style={{ display: "grid", gap: 8 }}>
                    <button
                      type="button"
                      onClick={() => {
                        setCompletedTrackId(null);
                        setActiveTrackId(track.id);
                        setActiveLessonNumber(1);
                      }}
                      style={{
                        textAlign: "left",
                        background: colors.card,
                        border: `1px solid ${colors.border}`,
                        borderRadius: 14,
                        padding: 16,
                        cursor: "pointer",
                        color: colors.text,
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: 12,
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 700,
                          color: track.color,
                          background: `${track.color}18`,
                          border: `1px solid ${track.color}55`,
                          borderRadius: 999,
                          padding: "5px 10px",
                          marginBottom: 10,
                        }}
                      >
                        Track
                      </div>
                      <div
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 800,
                          fontSize: 22,
                          lineHeight: 1.2,
                          marginBottom: 8,
                        }}
                      >
                        {track.trackName}
                      </div>
                      <p style={{ margin: "0 0 12px", color: colors.textSub, lineHeight: 1.65 }}>
                        {track.summary}
                      </p>
                      <div
                        style={{
                          width: "100%",
                          height: 7,
                          borderRadius: 999,
                          overflow: "hidden",
                          border: `1px solid ${colors.border}`,
                          marginBottom: 10,
                        }}
                      >
                        <div
                          style={{
                            width: `${percent}%`,
                            height: "100%",
                            background: `linear-gradient(90deg, ${track.color}, ${colors.blueLt})`,
                          }}
                        />
                      </div>
                      <div style={{ marginBottom: 8, fontSize: 12, color: colors.textSub }}>
                        {completedCount}/{totalLessons} lessons completed ({percent}%)
                      </div>

                      {canResume ? (
                        <div
                          style={{
                            display: "inline-block",
                            marginBottom: 10,
                            border: `1px solid ${colors.border}`,
                            background: colors.bg,
                            color: colors.textSub,
                            borderRadius: 999,
                            padding: "4px 10px",
                            fontSize: 11,
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          Last stopped: Lesson {lastStoppedLessonNumber}
                        </div>
                      ) : null}

                      <div
                        style={{
                          color: colors.blueLt,
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 700,
                        }}
                      >
                        {isDone ? "Review Track ->" : "Start from Lesson 1 ->"}
                      </div>
                    </button>

                    {canResume ? (
                      <button
                        type="button"
                        onClick={() => {
                          setCompletedTrackId(null);
                          setActiveTrackId(track.id);
                          setActiveLessonNumber(resumeLessonNumber);
                        }}
                        style={{
                          textAlign: "left",
                          border: `1px solid ${colors.blueLt}`,
                          background: `${colors.blueLt}18`,
                          color: colors.blueLt,
                          borderRadius: 10,
                          padding: "10px 12px",
                          cursor: "pointer",
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 700,
                        }}
                      >
                        Resume from Lesson {resumeLessonNumber} {"->"}
                      </button>
                    ) : null}
                  </div>
                );
              })()
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <LessonPage
      {...activeLesson}
      theme={theme}
      onNextLesson={() => {
        if (!activeTrack) {
          return;
        }

        const total = activeTrack.lesson.totalLessons;

        setCompletedByTrack((prev) => ({
          ...prev,
          [activeTrack.id]: Math.max(prev[activeTrack.id] || 0, activeLessonNumber),
        }));

        if (activeLessonNumber < total) {
          setActiveLessonNumber((prev) => prev + 1);
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
          return;
        }

        setCompletedTrackId(activeTrack.id);
        setActiveTrackId(null);
        setActiveLessonNumber(1);
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      onBackToTrack={() => {
        setActiveTrackId(null);
        setActiveLessonNumber(1);
      }}
    />
  );
}
