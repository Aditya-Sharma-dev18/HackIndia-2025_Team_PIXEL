export type Locale = {
  chatWithAI?: string;
  chatDescription?: string;
  askQuestion?: string;
  send?: string;
  footerTagline?: string;
};

export const locales: { [key: string]: Locale } = {
  en: {
    chatWithAI: "Chat with our Legal AI",
    chatDescription: "Ask questions about Indian laws and get accurate answers based on the latest legal information.",
    askQuestion: "Ask about Indian laws...",
    send: "Send",
    footerTagline: "Making Indian legal knowledge accessible and understandable for everyone through AI technology."
  },
  hi: {
    chatWithAI: "हमारे लीगल AI से चैट करें",
    chatDescription: "भारतीय कानूनों के बारे में प्रश्न पूछें और नवीनतम कानूनी जानकारी के आधार पर सटीक उत्तर प्राप्त करें।",
    askQuestion: "भारतीय कानूनों के बारे में पूछें...",
    send: "भेजें",
    footerTagline: "AI तकनीक के माध्यम से भारतीय कानूनी ज्ञान को सभी के लिए सुलभ और समझने योग्य बनाना।"
  },
  ta: {
    chatWithAI: "எங்கள் சட்ட AI உடன் அரட்டை",
    chatDescription: "இந்திய சட்டங்கள் பற்றிய கேள்விகளைக் கேளுங்கள், சமீபத்திய சட்டத் தகவலின் அடிப்படையில் துல்லியமான பதில்களைப் பெறுங்கள்.",
    askQuestion: "இந்திய சட்டங்கள் பற்றி கேளுங்கள்...",
    send: "அனுப்பு",
    footerTagline: "AI தொழில்நுட்பத்தின் மூலம் இந்திய சட்ட அறிவை அனைவருக்கும் அணுகக்கூடியதாகவும் புரிந்துகொள்ளக்கூடியதாகவும் ஆக்குதல்."
  },
  te: {
    chatWithAI: "మా లీగల్ AI తో చాట్ చేయండి",
    chatDescription: "భారతీయ చట్టాల గురించి ప్రశ్నలు అడగండి మరియు తాజా చట్టపరమైన సమాచారం ఆధారంగా ఖచ్చితమైన సమాధానాలను పొందండి.",
    askQuestion: "భారతీయ చట్టాల గురించి అడగండి...",
    send: "పంపు",
    footerTagline: "AI టెక్నాలజీ ద్వారా భారతీయ చట్ట జ్ఞానాన్ని ప్రతి ఒక్కరికీ అందుబాటులో ఉండేలా మరియు అర్థమయ్యేలా చేయడం."
  },
  bn: {
    chatWithAI: "আমাদের লিগ্যাল AI এর সাথে চ্যাট করুন",
    chatDescription: "ভারতীয় আইন সম্পর্কে প্রশ্ন জিজ্ঞাসা করুন এবং সর্বশেষ আইনি তথ্যের উপর ভিত্তি করে সঠিক উত্তর পান।",
    askQuestion: "ভারতীয় আইন সম্পর্কে জিজ্ঞাসা করুন...",
    send: "পাঠান",
    footerTagline: "AI প্রযুক্তির মাধ্যমে ভারতীয় আইনি জ্ঞানকে সবার জন্য সহজলভ্য এবং বোধগম্য করে তোলা।"
  }
};