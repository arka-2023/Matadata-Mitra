export const timelineData = [
  {
    id: 1,
    phase: { en: "Announcement", hi: "घोषणा" },
    details: {
      en: "The Election Commission of India (ECI) announces the election dates. The Model Code of Conduct comes into effect immediately.",
      hi: "भारत निर्वाचन आयोग (ECI) चुनाव की तारीखों की घोषणा करता है। आदर्श आचार संहिता तुरंत प्रभाव से लागू हो जाती है।"
    },
    duration: { en: "Day 1", hi: "पहला दिन" }
  },
  {
    id: 2,
    phase: { en: "Nominations", hi: "नामांकन" },
    details: {
      en: "Candidates file their nomination papers with the Returning Officer. Scrutiny and withdrawal of nominations follow.",
      hi: "उम्मीदवार रिटर्निंग ऑफिसर के पास अपना नामांकन पत्र दाखिल करते हैं। इसके बाद नामांकन की जांच और वापसी होती है।"
    },
    duration: { en: "Usually 7-10 Days", hi: "आमतौर पर 7-10 दिन" }
  },
  {
    id: 3,
    phase: { en: "Campaigning", hi: "प्रचार" },
    details: {
      en: "Political parties and candidates campaign for votes through rallies, meetings, and media.",
      hi: "राजनीतिक दल और उम्मीदवार रैलियों, बैठकों और मीडिया के माध्यम से वोटों के लिए प्रचार करते हैं।"
    },
    duration: { en: "Min 14 Days", hi: "न्यूनतम 14 दिन" }
  },
  {
    id: 4,
    phase: { en: "Silence Period", hi: "मौन अवधि" },
    details: {
      en: "Campaigning stops 48 hours before the end of polling. No public meetings or election propaganda are allowed (Section 126 of RPA).",
      hi: "मतदान समाप्त होने से 48 घंटे पहले प्रचार बंद हो जाता है। किसी भी सार्वजनिक बैठक या चुनाव प्रचार की अनुमति नहीं है।"
    },
    duration: { en: "48 Hours", hi: "48 घंटे" }
  },
  {
    id: 5,
    phase: { en: "Polling Day", hi: "मतदान का दिन" },
    details: {
      en: "Citizens vote at their designated polling stations using Electronic Voting Machines (EVMs) and VVPATs.",
      hi: "नागरिक इलेक्ट्रॉनिक वोटिंग मशीन (EVM) और VVPAT का उपयोग करके अपने निर्धारित मतदान केंद्रों पर मतदान करते हैं।"
    },
    duration: { en: "1 Day per Phase", hi: "प्रति चरण 1 दिन" }
  },
  {
    id: 6,
    phase: { en: "Counting Day", hi: "मतगणना का दिन" },
    details: {
      en: "Votes are counted under the supervision of the Returning Officer and ECI Observers. Results are declared.",
      hi: "रिटर्निंग ऑफिसर और ECI पर्यवेक्षकों की देखरेख में वोटों की गिनती की जाती है। परिणाम घोषित किए जाते हैं।"
    },
    duration: { en: "1 Day", hi: "1 दिन" }
  }
];

export const officialsData = [
  {
    id: 'eci',
    title: { en: "Election Commission of India", hi: "भारत निर्वाचन आयोग" },
    name: { en: "Constitutional Body", hi: "संवैधानिक निकाय" },
    role: { en: "Autonomous constitutional authority responsible for administering election processes in India.", hi: "भारत में चुनाव प्रक्रियाओं के प्रशासन के लिए जिम्मेदार स्वायत्त संवैधानिक प्राधिकरण।" },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Election_Commission_of_India_logo.svg/200px-Election_Commission_of_India_logo.svg.png"
  },
  {
    id: 'cec',
    title: { en: "Chief Election Commissioner", hi: "मुख्य चुनाव आयुक्त" },
    name: { en: "Rajiv Kumar", hi: "राजीव कुमार" },
    role: { en: "Heads the Election Commission of India.", hi: "भारत निर्वाचन आयोग के प्रमुख।" },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Rajiv_Kumar%2C_Chief_Election_Commissioner.jpg/330px-Rajiv_Kumar%2C_Chief_Election_Commissioner.jpg"
  },
  {
    id: 'president',
    title: { en: "President of India", hi: "भारत के राष्ट्रपति" },
    name: { en: "Droupadi Murmu", hi: "द्रौपदी मुर्मू" },
    role: { en: "Head of state of the Republic of India.", hi: "भारत गणराज्य के राज्य प्रमुख।" },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Smt._Droupadi_Murmu_official_portrait_%281%29.jpg/330px-Smt._Droupadi_Murmu_official_portrait_%281%29.jpg"
  },
  {
    id: 'pm',
    title: { en: "Prime Minister", hi: "प्रधान मंत्री" },
    name: { en: "Narendra Modi", hi: "नरेन्द्र मोदी" },
    role: { en: "Head of the government and leader of the executive branch.", hi: "सरकार के प्रमुख और कार्यपालिका के नेता।" },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png/330px-Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png"
  },
  {
    id: 'speaker',
    title: { en: "Speaker of Lok Sabha", hi: "लोकसभा अध्यक्ष" },
    name: { en: "Om Birla", hi: "ओम बिरला" },
    role: { en: "Presiding officer of the lower house of the Parliament of India.", hi: "भारत की संसद के निचले सदन के पीठासीन अधिकारी।" },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Om_Birla%2C_Speaker_Lok_Sabha.jpg/330px-Om_Birla%2C_Speaker_Lok_Sabha.jpg"
  },
  {
    id: 'vp',
    title: { en: "Vice President", hi: "उपराष्ट्रपति" },
    name: { en: "Jagdeep Dhankhar", hi: "जगदीप धनखड़" },
    role: { en: "Deputy to the head of state and ex-officio Chairman of the Rajya Sabha.", hi: "राज्य प्रमुख के उप और राज्यसभा के पदेन सभापति।" },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Jagdeep_Dhankhar_official_portrait_%28cropped%29.jpg/330px-Jagdeep_Dhankhar_official_portrait_%28cropped%29.jpg"
  }
];

export const partiesData = [
  {
    id: 'bjp',
    name: "Bharatiya Janata Party (BJP)",
    founded: 1980,
    ideology: "Right-wing, Hindutva, Conservatism",
    leader: "Jagat Prakash Nadda",
    color: "#FF9933",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/200px-Bharatiya_Janata_Party_logo.svg.png"
  },
  {
    id: 'inc',
    name: "Indian National Congress (INC)",
    founded: 1885,
    ideology: "Centre to Centre-left, Social democracy, Secularism",
    leader: "Mallikarjun Kharge",
    color: "#19AAED",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Indian_National_Congress_hand_logo.svg/200px-Indian_National_Congress_hand_logo.svg.png"
  },
  {
    id: 'aap',
    name: "Aam Aadmi Party (AAP)",
    founded: 2012,
    ideology: "Centre-left, Populism, Anti-corruption",
    leader: "Arvind Kejriwal",
    color: "#0066A4",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Aam_Aadmi_Party_Logo.svg/200px-Aam_Aadmi_Party_Logo.svg.png"
  },
  {
    id: 'tmc',
    name: "All India Trinamool Congress (TMC)",
    founded: 1998,
    ideology: "Centre-left, Bengali nationalism, Populism",
    leader: "Mamata Banerjee",
    color: "#00B140",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/All_India_Trinamool_Congress_flag.svg/200px-All_India_Trinamool_Congress_flag.svg.png"
  },
  {
    id: 'bsp',
    name: "Bahujan Samaj Party (BSP)",
    founded: 1984,
    ideology: "Centre-left, Social equality, Dalit rights",
    leader: "Mayawati",
    color: "#0000FF",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Elephant_Bahujan_Samaj_Party.svg/200px-Elephant_Bahujan_Samaj_Party.svg.png"
  },
  {
    id: 'sp',
    name: "Samajwadi Party (SP)",
    founded: 1992,
    ideology: "Left-wing, Democratic socialism, Secularism",
    leader: "Akhilesh Yadav",
    color: "#FF2400",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Samajwadi_Party_Flag.jpg/200px-Samajwadi_Party_Flag.jpg"
  },
  {
    id: 'cpi_m',
    name: "Communist Party of India (Marxist) (CPI(M))",
    founded: 1964,
    ideology: "Left-wing to Far-left, Communism, Marxism–Leninism",
    leader: "Sitaram Yechury",
    color: "#DE0000",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Communist_Party_of_India_%28Marxist%29_Flag.svg/200px-Communist_Party_of_India_%28Marxist%29_Flag.svg.png"
  },
  {
    id: 'dmk',
    name: "Dravida Munnetra Kazhagam (DMK)",
    founded: 1949,
    ideology: "Centre-left, Dravidianism, Social democracy",
    leader: "M. K. Stalin",
    color: "#FF0000",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Dravida_Munnetra_Kazhagam_Flag.svg/200px-Dravida_Munnetra_Kazhagam_Flag.svg.png"
  }
];

export const checklistData = [
  {
    id: 1,
    task: { en: "Check Age Eligibility", hi: "आयु पात्रता की जांच करें" },
    desc: { en: "You must be 18 years or older on January 1st of the election year.", hi: "चुनाव वर्ष के 1 जनवरी को आपकी आयु 18 वर्ष या उससे अधिक होनी चाहिए।" },
    link: "https://voters.eci.gov.in/"
  },
  {
    id: 2,
    task: { en: "Register on ECI Portal", hi: "ECI पोर्टल पर पंजीकरण करें" },
    desc: { en: "Fill Form 6 online or offline to get your name on the electoral roll.", hi: "मतदाता सूची में अपना नाम दर्ज कराने के लिए ऑनलाइन या ऑफलाइन फॉर्म 6 भरें।" },
    link: "https://voters.eci.gov.in/"
  },
  {
    id: 3,
    task: { en: "Find Your Polling Booth", hi: "अपना मतदान केंद्र खोजें" },
    desc: { en: "Check your polling station location via the Voter Helpline App or ECI website.", hi: "वोटर हेल्पलाइन ऐप या ECI वेबसाइट के माध्यम से अपने मतदान केंद्र का स्थान जांचें।" },
    link: "https://electoralsearch.eci.gov.in/"
  },
  {
    id: 4,
    task: { en: "Bring Valid ID", hi: "वैध पहचान पत्र लाएं" },
    desc: { en: "EPIC (Voter ID) is preferred, but Aadhar, PAN, or Passport are also accepted.", hi: "EPIC (वोटर आईडी) को प्राथमिकता दी जाती है, लेकिन आधार, पैन या पासपोर्ट भी स्वीकार किए जाते हैं।" },
    link: null
  },
  {
    id: 5,
    task: { en: "Understand NOTA", hi: "NOTA को समझें" },
    desc: { en: "You have the right to choose 'None of the Above' if you don't prefer any candidate.", hi: "यदि आप किसी भी उम्मीदवार को पसंद नहीं करते हैं तो आपको 'उपरोक्त में से कोई नहीं' चुनने का अधिकार है।" },
    link: null
  }
];

export const quizData = [
  {
    id: 1,
    q: { en: "What is the minimum age to vote in India?", hi: "भारत में मतदान करने की न्यूनतम आयु क्या है?" },
    options: {
      en: ["16", "18", "21", "25"],
      hi: ["16", "18", "21", "25"]
    },
    answer: 1,
    explanation: {
      en: "The 61st Amendment Act of 1988 lowered the voting age from 21 to 18 years.",
      hi: "1988 के 61वें संशोधन अधिनियम ने मतदान की आयु 21 से घटाकर 18 वर्ष कर दी।"
    }
  },
  {
    id: 2,
    q: { en: "Which body conducts the Lok Sabha elections?", hi: "लोकसभा चुनाव कौन सा निकाय आयोजित करता है?" },
    options: {
      en: ["Supreme Court", "Parliament", "Election Commission of India", "NITI Aayog"],
      hi: ["सर्वोच्च न्यायालय", "संसद", "भारत निर्वाचन आयोग", "नीति आयोग"]
    },
    answer: 2,
    explanation: {
      en: "The ECI is an autonomous body responsible for administering elections to the Lok Sabha, Rajya Sabha, and State Assemblies.",
      hi: "ECI लोकसभा, राज्यसभा और राज्य विधानसभाओं के चुनावों के प्रशासन के लिए जिम्मेदार एक स्वायत्त निकाय है।"
    }
  },
  {
    id: 3,
    q: { en: "What does EVM stand for?", hi: "EVM का क्या अर्थ है?" },
    options: {
      en: ["Electronic Voting Machine", "Election Validation Method", "Electoral Verification Module", "Electronic Voter Matrix"],
      hi: ["इलेक्ट्रॉनिक वोटिंग मशीन", "इलेक्शन वैलिडेशन मेथड", "इलेक्टोरल वेरिफिकेशन मॉड्यूल", "इलेक्ट्रॉनिक वोटर मैट्रिक्स"]
    },
    answer: 0,
    explanation: {
      en: "EVMs were first used in 1982 in the Parur Assembly constituency in Kerala.",
      hi: "ईवीएम का पहली बार 1982 में केरल के परूर विधानसभा क्षेत्र में इस्तेमाल किया गया था।"
    }
  },
  {
    id: 4,
    q: { en: "What is NOTA?", hi: "NOTA क्या है?" },
    options: {
      en: ["National Organization for Turnout Action", "None of the Above", "New Optional Voting Act", "National Observer for Tracking Assets"],
      hi: ["नेशनल ऑर्गनाइजेशन फॉर टर्नआउट एक्शन", "उपरोक्त में से कोई नहीं", "न्यू ऑप्शनल वोटिंग एक्ट", "नेशनल ऑब्जर्वर फॉर ट्रैकिंग एसेट्स"]
    },
    answer: 1,
    explanation: {
      en: "NOTA allows voters to express dissatisfaction with all the candidates in the fray.",
      hi: "NOTA मतदाताओं को चुनाव मैदान में सभी उम्मीदवारों के प्रति असंतोष व्यक्त करने की अनुमति देता है।"
    }
  },
  {
    id: 5,
    q: { en: "When does the Model Code of Conduct come into effect?", hi: "आदर्श आचार संहिता कब लागू होती है?" },
    options: {
      en: ["1 month before polling", "On the day of polling", "Immediately after the announcement of the election schedule", "When nominations begin"],
      hi: ["मतदान से 1 महीने पहले", "मतदान के दिन", "चुनाव कार्यक्रम की घोषणा के तुरंत बाद", "जब नामांकन शुरू होते हैं"]
    },
    answer: 2,
    explanation: {
      en: "The MCC is a set of guidelines issued by the ECI to regulate the conduct of political parties and candidates.",
      hi: "MCC राजनीतिक दलों और उम्मीदवारों के आचरण को विनियमित करने के लिए ECI द्वारा जारी दिशा-निर्देशों का एक समूह है।"
    }
  }
];

export const stateGreetings = {
  "Andhra Pradesh": { greeting: "నమస్కారం (Namaskaram)", lang: "te" },
  "Assam": { greeting: "নমস্কাৰ (Nomoskar)", lang: "as" },
  "Bihar": { greeting: "प्रणाम (Pranam)", lang: "hi" },
  "Chhattisgarh": { greeting: "जय जोहार (Jai Johar)", lang: "hi" },
  "Delhi": { greeting: "नमस्ते (Namaste)", lang: "hi" },
  "Gujarat": { greeting: "નમસ્તે (Namaste) / કેમ છો (Kem Cho)", lang: "gu" },
  "Haryana": { greeting: "राम राम (Ram Ram)", lang: "hi" },
  "Jharkhand": { greeting: "जोहार (Johar)", lang: "hi" },
  "Karnataka": { greeting: "ನಮಸ್ಕಾರ (Namaskara)", lang: "kn" },
  "Kerala": { greeting: "നമസ്കാരം (Namaskaram)", lang: "ml" },
  "Madhya Pradesh": { greeting: "नमस्ते (Namaste)", lang: "hi" },
  "Maharashtra": { greeting: "नमस्कार (Namaskar)", lang: "mr" },
  "Odisha": { greeting: "ନମସ୍କାର (Namaskar)", lang: "or" },
  "Punjab": { greeting: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ (Sat Sri Akal)", lang: "pa" },
  "Rajasthan": { greeting: "खम्मा घणी (Khamma Ghani)", lang: "hi" },
  "Tamil Nadu": { greeting: "வணக்கம் (Vanakkam)", lang: "ta" },
  "Telangana": { greeting: "నమస్కారం (Namaskaram)", lang: "te" },
  "Uttar Pradesh": { greeting: "राम राम (Ram Ram) / नमस्ते (Namaste)", lang: "hi" },
  "West Bengal": { greeting: "নমস্কার (Nomoshkar)", lang: "bn" },
  "Default": { greeting: "Namaste", lang: "hi" }
};
