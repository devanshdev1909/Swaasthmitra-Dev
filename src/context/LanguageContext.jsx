import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext(undefined);

const translations = {
  en: {
    // Header
    "header.features": "Features",
    "header.technology": "Technology",
    "header.impact": "Impact",
    "header.startConsultation": "Start Consultation",
    "header.appName": "Swaasthmitra",

    // Landing Page
    "landing.hero.tagline": "Healthcare that never sleeps",
    "landing.hero.title": "Offline-First AI Healthcare for Rural India",
    "landing.hero.description":
      "Swaasthmitra bridges the healthcare gap in underserved rural regions. Get instant medical advice, emergency alerts, and resource mapping—even without internet.",
    "landing.hero.tryNow": "Try Now",
    "landing.hero.learnMore": "Learn More",
    "landing.features.title": "The Challenge & Our Solution",
    "landing.features.subtitle":
      "Rural healthcare systems face critical gaps when frontline workers are unavailable. Swaasthmitra fills that gap 24/7.",
    "landing.problem.title": "The Problem",
    "landing.problem.point1": "No continuity when ASHA workers are unavailable",
    "landing.problem.point2": "Unreliable internet connectivity in rural areas",
    "landing.problem.point3":
      "Patients panic during emergencies without immediate guidance",
    "landing.problem.point4":
      "No access to maternal care or preventive health checks",
    "landing.problem.point5": "Missed vaccinations and critical health records",
    "landing.solution.title": "Swaasthmitra's Solution",
    "landing.solution.point1": "24/7 AI medical companion that works offline",
    "landing.solution.point2":
      "Voice-first interface in Hindi & English for accessibility",
    "landing.solution.point3":
      "Instant Red Alert system for critical emergencies",
    "landing.solution.point4":
      "Offline resource mapping to nearby health centers",
    "landing.solution.point5":
      "Async appointment scheduler with auto-sync capabilities",

    // Technology Section
    "landing.tech.title": "Technical Architecture",
    "landing.tech.subtitle":
      "Built for resilience, reliability, and real-world rural healthcare challenges.",
    "landing.tech.offline.title": "Offline-First Architecture",
    "landing.tech.offline.desc":
      "All core logic runs locally. AI decision trees process symptoms without cloud dependency.",
    "landing.tech.edgeai.title": "Edge AI Model",
    "landing.tech.edgeai.desc":
      "Lightweight ML model optimized for rural connectivity. Gemini API for advanced analysis.",
    "landing.tech.voice.title": "Voice Processing",
    "landing.tech.voice.desc":
      "Speech-to-text and text-to-speech in Hindi/English. Works offline using on-device processing.",
    "landing.tech.async.title": "Async Data Sync",
    "landing.tech.async.desc":
      "Appointments and records queued offline, auto-sync with database when connectivity returns.",
    "landing.tech.conflict.title": "Conflict Resolution",
    "landing.tech.conflict.desc":
      "Handles multiple users sharing one device. Smart caching prevents duplicate entries.",
    "landing.tech.emergency.title": "Emergency Protocol",
    "landing.tech.emergency.desc":
      "Red Alert instantly detects critical symptoms with immediate action paths.",

    // Impact Section
    "landing.impact.title": "Global Impact",
    "landing.impact.subtitle":
      "Transforming healthcare access in underserved regions, one village at a time.",
    "landing.impact.ruralPopulation": "Rural Population Reached",
    "landing.impact.healthcareContinuity": "Healthcare Continuity",
    "landing.impact.reductionWait": "Reduction in Wait Times",
    "landing.impact.internetRequired": "Internet Required",

    // CTA Section
    "landing.cta.title": "Join the Healthcare Revolution",
    "landing.cta.description":
      "Swaasthmitra is empowering rural communities with accessible, offline-first healthcare. Be part of this mission.",
    "landing.cta.button": "Get Started Today",

    // Home Page
    "home.title": "Welcome to Swaasthmitra",
    "home.subtitle": "Your AI-powered healthcare companion",
    "home.description":
      "Access medical consultations, emergency services, and health records anytime, anywhere.",
    "home.consultation": "Medical Consultation",
    "home.consultation.desc": "Chat with our AI assistant for medical advice",
    "home.doctors": "Find Doctors",
    "home.doctors.desc": "Locate nearby healthcare professionals",
    "home.emergency": "Emergency Services",
    "home.emergency.desc": "Quick access to emergency contacts and services",
    "home.records": "Health Records",
    "home.records.desc": "Manage your medical history and appointments",
    "home.schedule": "Schedule Appointment",
    "home.schedule.desc": "Book appointments with healthcare providers",
    "home.map": "Healthcare Map",
    "home.map.desc": "Find nearby hospitals and clinics",

    // Consultation Page
    "consultation.title": "Medical Consultation",
    "consultation.subtitle": "Chat with our AI medical assistant",
    "consultation.startNewConsultation": "Start New Consultation",
    "consultation.placeholder":
      "Describe your symptoms or ask a medical question...",
    "consultation.send": "Send",
    "consultation.typing": "AI is typing...",
    "consultation.emergency": "Emergency",
    "consultation.emergency.message":
      "If this is a medical emergency, please call emergency services immediately or visit the nearest hospital.",
    "consultation.welcome":
      "Namaste! 👋 I'm **Swaasthmitra**, your AI health assistant.\n\nI'm here to help with health concerns, home remedies, dietary guidance, and medical information—with a focus on keeping you safe.\n\n**⚠️ Remember:** I'm an AI, not a doctor. For life-threatening emergencies, **call 108 immediately.**\n\nTo assist you better, please share:\n• **Your age and gender**\n• **What symptoms are you experiencing?**\n• **How long have you had these symptoms?**\n• **Any known allergies?**\n\nI'm ready to listen. 🏥",
    "consultation.history": "History",
    "consultation.summary": "Summary",
    "consultation.back": "Back",
    "consultation.historyModal.title": "Consultation History",
    "consultation.historyModal.empty": "No past consultations found",
    "consultation.historyModal.messagesExchanged": "messages exchanged",
    "consultation.historyModal.firstMessage": "First message:",
    "consultation.historyModal.soapAvailable": "✓ SOAP Note Available",
    "consultation.historyModal.view": "View Consultation",
    "consultation.summaryModal.title": "Consultation Summary",

    // Doctors Page
    "doctors.title": "Find Doctors",
    "doctors.subtitle": "Connect with qualified healthcare professionals",
    "doctors.search": "Search doctors...",
    "doctors.specialty": "Specialty",
    "doctors.location": "Location",
    "doctors.book": "Book Appointment",
    "doctors.video": "Video Consult",
    "doctors.rating": "Rating",
    "doctors.experience": "years experience",

    // Emergency Page
    "emergency.title": "Emergency Services",
    "emergency.subtitle":
      "Quick access to emergency contacts and immediate help",
    "emergency.call": "Call Emergency",
    "emergency.ambulance": "Call Ambulance",
    "emergency.police": "Call Police",
    "emergency.fire": "Call Fire Department",
    "emergency.nearest": "Nearest Hospital",
    "emergency.directions": "Get Directions",
    "emergency.numbersTitle": "Emergency Contact Numbers",
    "emergency.callNow": "Call Now",
    "emergency.services.ambulance": "Ambulance / Medical Emergency",
    "emergency.services.police": "Police Emergency",
    "emergency.services.fire": "Fire Emergency",
    "emergency.services.womenHelpline": "Women Helpline",
    "emergency.services.childHelpline": "Child Helpline",
    "emergency.services.disaster": "Disaster Management",
    "emergency.recognizeTitle": "Recognize Medical Emergencies",
    "emergency.symptoms": "Symptoms:",
    "emergency.whatToDo": "⚠️ What to Do:",
    "emergency.firstAid": "Basic First Aid",
    "emergency.disclaimerTitle": "Important Disclaimer",
    "emergency.disclaimerText":
      "This information is for educational purposes only. In case of a medical emergency, always call 108 immediately. Do not attempt advanced medical procedures without proper training. When in doubt, seek professional medical help.",
    "emergency.backToHome": "Back to Home",
    "emergency.banner.subtitle":
      "Call 108 for immediate ambulance service across India",
    "emergency.call108Now": "Call 108 Now",
    // Emergency Conditions (EN)
    "emergency.conditions.heart.title": "Heart Attack",
    "emergency.conditions.heart.symptom1": "Chest pain or discomfort",
    "emergency.conditions.heart.symptom2": "Shortness of breath",
    "emergency.conditions.heart.symptom3": "Pain in arm, jaw, or back",
    "emergency.conditions.heart.symptom4": "Nausea or lightheadedness",
    "emergency.conditions.heart.action":
      "Call 108 immediately. Chew aspirin if available. Do not drive yourself.",

    "emergency.conditions.stroke.title": "Stroke",
    "emergency.conditions.stroke.symptom1": "Face drooping",
    "emergency.conditions.stroke.symptom2": "Arm weakness",
    "emergency.conditions.stroke.symptom3": "Speech difficulty",
    "emergency.conditions.stroke.symptom4": "Sudden severe headache",
    "emergency.conditions.stroke.action":
      "Call 108 immediately. Note the time symptoms started. Do not give food or water.",

    "emergency.conditions.bleeding.title": "Severe Bleeding",
    "emergency.conditions.bleeding.symptom1": "Uncontrollable bleeding",
    "emergency.conditions.bleeding.symptom2": "Blood spurting from wound",
    "emergency.conditions.bleeding.symptom3": "Soaking through bandages",
    "emergency.conditions.bleeding.symptom4": "Signs of shock",
    "emergency.conditions.bleeding.action":
      "Call 108. Apply direct pressure. Elevate the injured area. Keep person warm.",

    "emergency.conditions.fracture.title": "Fracture / Severe Injury",
    "emergency.conditions.fracture.symptom1": "Deformed limb",
    "emergency.conditions.fracture.symptom2": "Severe pain",
    "emergency.conditions.fracture.symptom3": "Unable to move",
    "emergency.conditions.fracture.symptom4": "Swelling and bruising",
    "emergency.conditions.fracture.action":
      "Call 108. Do not move the person. Immobilize the injured area. Apply ice if available.",

    "emergency.conditions.breathing.title": "Breathing Problems",
    "emergency.conditions.breathing.symptom1": "Severe shortness of breath",
    "emergency.conditions.breathing.symptom2": "Gasping for air",
    "emergency.conditions.breathing.symptom3": "Blue lips or face",
    "emergency.conditions.breathing.symptom4": "Chest tightness",
    "emergency.conditions.breathing.action":
      "Call 108 immediately. Keep person calm and upright. Loosen tight clothing.",

    "emergency.conditions.poison.title": "Poisoning",
    "emergency.conditions.poison.symptom1": "Nausea and vomiting",
    "emergency.conditions.poison.symptom2": "Difficulty breathing",
    "emergency.conditions.poison.symptom3": "Confusion or drowsiness",
    "emergency.conditions.poison.symptom4": "Burns around mouth",
    "emergency.conditions.poison.action":
      "Call 108 and Poison Control. Do not induce vomiting. Keep container of substance.",
    "emergency.cpr.title": "CPR Basics",
    "emergency.cpr.step1": "Check for responsiveness",
    "emergency.cpr.step2": "Call 108 immediately",
    "emergency.cpr.step3": "Place hands on center of chest",
    "emergency.cpr.step4": "Push hard and fast - 100-120 compressions/min",
    "emergency.cpr.step5": "Continue until help arrives",
    "emergency.choking.title": "Choking Relief",
    "emergency.choking.step1": "Encourage coughing if possible",
    "emergency.choking.step2": "Give 5 back blows between shoulder blades",
    "emergency.choking.step3": "Give 5 abdominal thrusts (Heimlich)",
    "emergency.choking.step4": "Repeat until object dislodges",
    "emergency.choking.step5": "Call 108 if unconscious",
    "emergency.burn.title": "Burn Treatment",
    "emergency.burn.step1":
      "Cool the burn with running water for 10-20 minutes",
    "emergency.burn.step2": "Remove jewelry before swelling",
    "emergency.burn.step3": "Cover with clean, dry cloth",
    "emergency.burn.step4": "Do not apply ice or butter",
    "emergency.burn.step5": "Seek medical help for severe burns",

    // Records Page
    "records.title": "Health Records",
    "records.subtitle": "Manage your medical history and appointments",
    "records.add": "Add New Record",
    "records.quickStats": "Quick Stats",
    "records.totalRecords": "Total Records",
    "records.appointments": "Upcoming Appointments",
    "records.history": "Medical History",
    "records.prescriptions": "Prescriptions",
    "records.reports": "Lab Reports",
    "records.loading": "Loading records...",
    "records.emptyTitle": "No records found",
    "records.emptySubtitle":
      "Start adding your health records to keep track of your medical history",
    "records.form.title.placeholder": "e.g., Blood Test Results",
    "records.form.doctor.placeholder": "e.g., Dr. Rajesh Kumar",
    "records.form.hospital.placeholder": "e.g., Apollo Hospital",
    "records.form.notes.placeholder": "Detailed notes about this record...",
    "records.upload.soon": "File upload coming soon...",
    "records.upload.types": "PDF, Images (JPG, PNG)",
    "records.editPersonalInfo": "Edit Personal Information",

    // Schedule Page
    "schedule.title": "Schedule Appointment",
    "schedule.subtitle": "Book your appointment with healthcare providers",
    "schedule.doctor": "Select Doctor",
    "schedule.date": "Select Date",
    "schedule.time": "Select Time",
    "schedule.book": "Book Appointment",
    "schedule.confirm": "Confirm Appointment",
    "schedule.myAppointments": "My Appointments",
    "schedule.gender": "Gender",
    "schedule.selectGender": "Select gender",
    "schedule.gender.male": "Male",
    "schedule.gender.female": "Female",
    "schedule.gender.other": "Other",
    "schedule.phone": "Phone Number",
    "schedule.emailOptional": "Email (Optional)",
    "schedule.selectTime": "Select time",
    "schedule.selectSpecialty": "Select specialty",
    "schedule.preferredDoctorOptional": "Preferred Doctor (Optional)",
    "schedule.anyAvailableDoctor": "Leave blank for any available doctor",
    "schedule.reasonForVisit": "Reason for Visit",
    "schedule.reasonPlaceholder":
      "Briefly describe your symptoms or reason for appointment...",
    "schedule.cancel": "Cancel",
    "schedule.cancelAppointment": "Cancel Appointment",
    "schedule.confirmedTitle": "Appointment Confirmed!",
    "schedule.confirmedSubtitle":
      "Your appointment has been successfully scheduled",
    "schedule.detailsTitle": "Appointment Details",
    "schedule.patient": "Patient",
    "schedule.status": "Status",
    "schedule.pending": "PENDING CONFIRMATION",
    "schedule.nextStepsTitle": "📱 Next Steps:",
    "schedule.nextStepsText":
      "You will receive a confirmation call/SMS within 2 hours to confirm your appointment time.",
    "schedule.done": "Done",
    "schedule.viewAll": "View All Appointments",
    "schedule.alertFillRequired": "Please fill in all required fields",
    "schedule.alertPhoneInvalid": "Please enter a valid phone number",

    // Map Page
    "map.title": "Healthcare Map",
    "map.subtitle": "Find nearby hospitals, clinics, and healthcare facilities",
    "map.hospitals": "Hospitals",
    "map.clinics": "Clinics",
    "map.pharmacies": "Pharmacies",
    "map.distance": "Distance",
    "map.open": "Open Now",
    "map.emergencyBanner.title": "Medical Emergency?",
    "map.emergencyBanner.subtitle": "Call for immediate ambulance service",

    // Video Consult Page
    "video.title": "Video Consultation",
    "video.subtitle": "Connect with doctors through video call",
    "video.join": "Join Call",
    "video.mute": "Mute",
    "video.camera": "Camera",
    "video.end": "End Call",
    "video.connected": "Video Connected",
    "video.cameraOff": "Camera Off",
    "video.chatPlaceholder": "Type a message...",
    "video.connecting.title": "Connecting...",
    "video.connecting.subtitle": "Setting up your video call with",
    "video.connecting.permission": "Please allow camera and microphone access",
    "video.features.title": "Video Consultation Features",
    "video.features.hd.title": "HD Video Quality",
    "video.features.hd.desc": "Crystal clear video with adaptive streaming",
    "video.features.share.title": "Screen Sharing",
    "video.features.share.desc":
      "Share reports and test results during consultation",
    "video.features.chat.title": "Real-time Chat",
    "video.features.chat.desc":
      "Text chat alongside video for better communication",

    // Landing Footer
    "landing.footer.tagline": "Offline-First AI Healthcare for Rural India",
    "landing.footer.sections.product": "Product",
    "landing.footer.sections.company": "Company",
    "landing.footer.sections.legal": "Legal",
    "landing.footer.links.features": "Features",
    "landing.footer.links.tech": "Technology",
    "landing.footer.links.impact": "Impact",
    "landing.footer.links.about": "About",
    "landing.footer.links.blog": "Blog",
    "landing.footer.links.careers": "Careers",
    "landing.footer.links.privacy": "Privacy",
    "landing.footer.links.terms": "Terms",
    "landing.footer.links.contact": "Contact",

    // Common
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.submit": "Submit",
    "common.loading": "Loading...",
    "common.error": "An error occurred",
    "common.success": "Success",
    "common.close": "Close",
    "common.name": "Full Name",
    "common.age": "Age",
    "common.gender": "Gender",
    "common.phone": "Phone Number",
    "common.email": "Email (Optional)",
    "common.date": "Preferred Date",
    "common.time": "Preferred Time",
    "common.specialty": "Specialty",
    "common.personalInfo": "Personal Information",
    "common.appointmentDetails": "Appointment Details",
    "common.viewAppointments": "View My Appointments",
    "common.searchLocation": "Search by name or location...",
    "common.allTypes": "All Types",
    "common.myLocation": "My Location",
    "common.facilitiesFound": "Facilities Found",
    "common.directions": "Directions",
    "common.available": "Available",
    "common.startVideoCall": "Start Video Call",
    "common.currentlyUnavailable": "Currently Unavailable",
    "common.addRecord": "Add Record",
    "common.allRecords": "All Records",
    "common.prescriptions": "Prescriptions",
    "common.reports": "Reports",
    "common.visits": "Visits",
    "common.bloodGroup": "Blood Group",
    "common.height": "Height",
    "common.weight": "Weight",
    "common.allergies": "Allergies",
    "common.emergencyContact": "Emergency Contact",
  },

  hi: {
    // Header
    "header.features": "विशेषताएं",
    "header.technology": "तकनीक",
    "header.impact": "प्रभाव",
    "header.startConsultation": "परामर्श शुरू करें",
    "header.appName": "स्वास्थ्यमित्र",

    // Landing Page
    "landing.hero.tagline": "स्वास्थ्य सेवा जो कभी नहीं सोती",
    "landing.hero.title": "ग्रामीण भारत के लिए ऑफलाइन-फर्स्ट AI स्वास्थ्य सेवा",
    "landing.hero.description":
      "स्वास्थ्यमित्र वंचित ग्रामीण क्षेत्रों में स्वास्थ्य सेवा की कमी को पाटता है। तुरंत चिकित्सा सलाह, आपातकालीन अलर्ट, और संसाधन मैपिंग प्राप्त करें—बिना इंटरनेट के भी।",
    "landing.hero.tryNow": "अभी आज़माएं",
    "landing.hero.learnMore": "और जानें",
    "landing.features.title": "चुनौती और हमारा समाधान",
    "landing.features.subtitle":
      "जब फ्रंटलाइन वर्कर उपलब्ध नहीं होते तो ग्रामीण स्वास्थ्य सेवा प्रणालियों में गंभीर कमी होती है। स्वास्थ्यमित्र उस कमी को 24/7 भरता है।",
    "landing.problem.title": "समस्या",
    "landing.problem.point1":
      "जब आशा कार्यकर्ता उपलब्ध नहीं होते तो निरंतरता नहीं",
    "landing.problem.point2":
      "ग्रामीण क्षेत्रों में अविश्वसनीय इंटरनेट कनेक्टिविटी",
    "landing.problem.point3":
      "तत्काल मार्गदर्शन के बिना आपातकाल में मरीज़ घबराते हैं",
    "landing.problem.point4":
      "मातृत्व देखभाल या निवारक स्वास्थ्य जांच तक पहुंच नहीं",
    "landing.problem.point5":
      "छूटे हुए टीकाकरण और महत्वपूर्ण स्वास्थ्य रिकॉर्ड",
    "landing.solution.title": "स्वास्थ्यमित्र का समाधान",
    "landing.solution.point1": "24/7 AI चिकित्सा साथी जो ऑफलाइन काम करता है",
    "landing.solution.point2":
      "पहुंच के लिए हिंदी और अंग्रेजी में वॉयस-फर्स्ट इंटरफेस",
    "landing.solution.point3": "गंभीर आपातकाल के लिए तुरंत रेड अलर्ट सिस्टम",
    "landing.solution.point4":
      "नजदीकी स्वास्थ्य केंद्रों के लिए ऑफलाइन संसाधन मैपिंग",
    "landing.solution.point5":
      "ऑटो-सिंक क्षमताओं के साथ एसिंक अपॉइंटमेंट शेड्यूलर",

    // Technology Section
    "landing.tech.title": "तकनीकी आर्किटेक्चर",
    "landing.tech.subtitle":
      "लचीलेपन, विश्वसनीयता और वास्तविक ग्रामीण स्वास्थ्य सेवा चुनौतियों के लिए बनाया गया।",
    "landing.tech.offline.title": "ऑफलाइन-फर्स्ट आर्किटेक्चर",
    "landing.tech.offline.desc":
      "सारा मुख्य लॉजिक लोकली चलता है। AI निर्णय वृक्ष बिना क्लाउड निर्भरता के लक्षणों को प्रोसेस करते हैं।",
    "landing.tech.edgeai.title": "एज AI मॉडल",
    "landing.tech.edgeai.desc":
      "ग्रामीण कनेक्टिविटी के लिए अनुकूलित हल्का ML मॉडल। उन्नत विश्लेषण हेतु Gemini API।",
    "landing.tech.voice.title": "वॉइस प्रोसेसिंग",
    "landing.tech.voice.desc":
      "हिंदी/अंग्रेजी में स्पीच-टू-टेक्स्ट और टेक्स्ट-टू-स्पीच। ऑन-डिवाइस प्रोसेसिंग से ऑफलाइन काम करता है।",
    "landing.tech.async.title": "एसिंक डेटा सिंक",
    "landing.tech.async.desc":
      "अपॉइंटमेंट और रिकॉर्ड ऑफलाइन कतारबद्ध; कनेक्टिविटी लौटने पर डेटाबेस से ऑटो-सिंक।",
    "landing.tech.conflict.title": "कन्फ्लिक्ट रिज़ॉल्यूशन",
    "landing.tech.conflict.desc":
      "एक डिवाइस साझा करने वाले कई उपयोगकर्ताओं को संभालता है। स्मार्ट कैशिंग डुप्लिकेट एंट्री रोकती है।",
    "landing.tech.emergency.title": "आपातकालीन प्रोटोकॉल",
    "landing.tech.emergency.desc":
      "रेड अलर्ट गंभीर लक्षणों का तुरंत पता लगाता है और तत्काल कार्रवाई मार्ग देता है।",

    // Impact Section
    "landing.impact.title": "वैश्विक प्रभाव",
    "landing.impact.subtitle":
      "वंचित क्षेत्रों में स्वास्थ्य सेवा पहुंच को बदलना, एक समय में एक गांव।",
    "landing.impact.ruralPopulation": "ग्रामीण जनसंख्या तक पहुंच",
    "landing.impact.healthcareContinuity": "स्वास्थ्य सेवाओं की निरंतरता",
    "landing.impact.reductionWait": "प्रतीक्षा समय में कमी",
    "landing.impact.internetRequired": "इंटरनेट आवश्यक नहीं",

    // CTA Section
    "landing.cta.title": "स्वास्थ्य क्रांति से जुड़ें",
    "landing.cta.description":
      "स्वास्थ्यमित्र सुलभ, ऑफलाइन-फर्स्ट स्वास्थ्य सेवा के साथ ग्रामीण समुदायों को सशक्त बना रहा है। इस मिशन का हिस्सा बनें।",
    "landing.cta.button": "आज ही शुरू करें",

    // Home Page
    "home.title": "स्वास्थ्यमित्र में आपका स्वागत है",
    "home.subtitle": "आपका AI-संचालित स्वास्थ्य साथी",
    "home.description":
      "कभी भी, कहीं भी चिकित्सा परामर्श, आपातकालीन सेवाएं और स्वास्थ्य रिकॉर्ड तक पहुंच प्राप्त करें।",
    "home.consultation": "चिकित्सा परामर्श",
    "home.consultation.desc":
      "चिकित्सा सलाह के लिए हमारे AI असिस्टेंट से चैट करें",
    "home.doctors": "डॉक्टर खोजें",
    "home.doctors.desc": "नजदीकी स्वास्थ्य सेवा पेशेवरों का पता लगाएं",
    "home.emergency": "आपातकालीन सेवाएं",
    "home.emergency.desc": "आपातकालीन संपर्क और सेवाओं तक त्वरित पहुंच",
    "home.records": "स्वास्थ्य रिकॉर्ड",
    "home.records.desc": "अपना चिकित्सा इतिहास और अपॉइंटमेंट प्रबंधित करें",
    "home.schedule": "अपॉइंटमेंट शेड्यूल करें",
    "home.schedule.desc": "स्वास्थ्य सेवा प्रदाताओं के साथ अपॉइंटमेंट बुक करें",
    "home.map": "स्वास्थ्य सेवा मानचित्र",
    "home.map.desc": "नजदीकी अस्पताल और क्लिनिक खोजें",

    // Consultation Page
    "consultation.title": "चिकित्सा परामर्श",
    "consultation.subtitle": "हमारे AI चिकित्सा सहायक से चैट करें",
    "consultation.startNewConsultation": "नया परामर्श शुरू करें",
    "consultation.placeholder":
      "अपने लक्षणों का वर्णन करें या चिकित्सा प्रश्न पूछें...",
    "consultation.send": "भेजें",
    "consultation.typing": "AI टाइप कर रहा है...",
    "consultation.emergency": "आपातकाल",
    "consultation.emergency.message":
      "यदि यह चिकित्सा आपातकाल है, तो कृपया तुरंत आपातकालीन सेवाओं को कॉल करें या निकटतम अस्पताल जाएं।",
    "consultation.welcome":
      "नमस्ते! 👋 मैं **स्वास्थ्यमित्र** हूं, आपका AI स्वास्थ्य सहायक।\n\nमैं स्वास्थ्य समस्याओं, घरेलू उपचार, आहार मार्गदर्शन, और चिकित्सा जानकारी में मदद करने के लिए यहां हूं—आपकी सुरक्षा को प्राथमिकता देते हुए।\n\n**⚠️ याद रखें:** मैं एक AI हूं, डॉक्टर नहीं। जान के खतरे वाले आपातकाल के लिए, **तुरंत 108 पर कॉल करें।**\n\nआपकी बेहतर सहायता के लिए, कृपया बताएं:\n• **आपकी उम्र और लिंग**\n• **आप किन लक्षणों का अनुभव कर रहे हैं?**\n• **आपको ये लक्षण कब से हैं?**\n• **कोई ज्ञात एलर्जी?**\n\nमैं सुनने के लिए तैयार हूं। 🏥",
    "consultation.history": "इतिहास",
    "consultation.summary": "सारांश",
    "consultation.back": "वापस",
    "consultation.historyModal.title": "परामर्श इतिहास",
    "consultation.historyModal.empty": "पिछले परामर्श नहीं मिले",
    "consultation.historyModal.messagesExchanged": "संदेशों का आदान-प्रदान",
    "consultation.historyModal.firstMessage": "पहला संदेश:",
    "consultation.historyModal.soapAvailable": "✓ SOAP नोट उपलब्ध",
    "consultation.historyModal.view": "परामर्श देखें",
    "consultation.summaryModal.title": "परामर्श सारांश",

    // Doctors Page
    "doctors.title": "डॉक्टर खोजें",
    "doctors.subtitle": "योग्य स्वास्थ्य सेवा पेशेवरों से जुड़ें",
    "doctors.search": "डॉक्टर खोजें...",
    "doctors.specialty": "विशेषज्ञता",
    "doctors.location": "स्थान",
    "doctors.book": "अपॉइंटमेंट बुक करें",
    "doctors.video": "वीडियो परामर्श",
    "doctors.rating": "रेटिंग",
    "doctors.experience": "वर्ष अनुभव",

    // Emergency Page
    "emergency.title": "आपातकालीन सेवाएं",
    "emergency.subtitle": "आपातकालीन संपर्क और तत्काल सहायता तक त्वरित पहुंच",
    "emergency.call": "आपातकाल कॉल करें",
    "emergency.ambulance": "एंबुलेंस कॉल करें",
    "emergency.police": "पुलिस कॉल करें",
    "emergency.fire": "फायर डिपार्टमेंट कॉल करें",
    "emergency.nearest": "निकटतम अस्पताल",
    "emergency.directions": "दिशा निर्देश प्राप्त करें",
    "emergency.numbersTitle": "आपातकालीन संपर्क नंबर",
    "emergency.callNow": "अभी कॉल करें",
    "emergency.services.ambulance": "एंबुलेंस / चिकित्सा आपातकाल",
    "emergency.services.police": "पुलिस आपातकाल",
    "emergency.services.fire": "अग्निशमन विभाग",
    "emergency.services.womenHelpline": "महिला हेल्पलाइन",
    "emergency.services.childHelpline": "बाल हेल्पलाइन",
    "emergency.services.disaster": "आपदा प्रबंधन",
    "emergency.recognizeTitle": "चिकित्सा आपातकाल की पहचान करें",
    "emergency.symptoms": "लक्षण:",
    "emergency.whatToDo": "⚠️ क्या करें:",
    "emergency.firstAid": "मूल प्राथमिक उपचार",
    "emergency.disclaimerTitle": "महत्वपूर्ण अस्वीकरण",
    "emergency.disclaimerText":
      "यह जानकारी केवल शैक्षिक उद्देश्यों के लिए है। चिकित्सा आपातकाल की स्थिति में, हमेशा तुरंत 108 पर कॉल करें। उचित प्रशिक्षण के बिना उन्नत चिकित्सा प्रक्रियाओं का प्रयास न करें। संदेह होने पर, पेशेवर चिकित्सा सहायता लें।",
    "emergency.backToHome": "होम पर वापस जाएं",
    "emergency.banner.subtitle":
      "पूरे भारत में तुरंत एंबुलेंस सेवा के लिए 108 पर कॉल करें",
    "emergency.call108Now": "108 पर अभी कॉल करें",
    // Emergency Conditions (HI)
    "emergency.conditions.heart.title": "हार्ट अटैक",
    "emergency.conditions.heart.symptom1": "छाती में दर्द या असहजता",
    "emergency.conditions.heart.symptom2": "सांस फूलना",
    "emergency.conditions.heart.symptom3": "बांह, जबड़े या पीठ में दर्द",
    "emergency.conditions.heart.symptom4": "मतली या चक्कर आना",
    "emergency.conditions.heart.action":
      "तुरंत 108 पर कॉल करें। उपलब्ध हो तो एस्पिरिन चबाएं। स्वयं वाहन न चलाएं।",

    "emergency.conditions.stroke.title": "स्ट्रोक",
    "emergency.conditions.stroke.symptom1": "चेहरे का टेढ़ा होना",
    "emergency.conditions.stroke.symptom2": "बांह में कमजोरी",
    "emergency.conditions.stroke.symptom3": "बोलने में कठिनाई",
    "emergency.conditions.stroke.symptom4": "अचानक तेज सिरदर्द",
    "emergency.conditions.stroke.action":
      "तुरंत 108 पर कॉल करें। लक्षण शुरू होने का समय नोट करें। खाना या पानी न दें।",

    "emergency.conditions.bleeding.title": "भारी रक्तस्राव",
    "emergency.conditions.bleeding.symptom1": "रक्तस्राव नियंत्रित नहीं होना",
    "emergency.conditions.bleeding.symptom2":
      "घाव से रक्त फव्वारे की तरह निकलना",
    "emergency.conditions.bleeding.symptom3": "पट्टियों से खून रिसना",
    "emergency.conditions.bleeding.symptom4": "शॉक के लक्षण",
    "emergency.conditions.bleeding.action":
      "108 पर कॉल करें। सीधे दबाव दें। घायल हिस्से को ऊपर रखें। व्यक्ति को गर्म रखें।",

    "emergency.conditions.fracture.title": "फ्रैक्चर / गंभीर चोट",
    "emergency.conditions.fracture.symptom1": "अंग का आकार बिगड़ जाना",
    "emergency.conditions.fracture.symptom2": "तेज दर्द",
    "emergency.conditions.fracture.symptom3": "हिलाने में असमर्थ",
    "emergency.conditions.fracture.symptom4": "सूजन और चोट के निशान",
    "emergency.conditions.fracture.action":
      "108 पर कॉल करें। व्यक्ति को न हिलाएं। घायल हिस्से को स्थिर करें। उपलब्ध हो तो बर्फ लगाएं।",

    "emergency.conditions.breathing.title": "सांस लेने में समस्या",
    "emergency.conditions.breathing.symptom1": "बहुत ज्यादा सांस फूलना",
    "emergency.conditions.breathing.symptom2": "हांफना",
    "emergency.conditions.breathing.symptom3": "होठों या चेहरे का नीला पड़ना",
    "emergency.conditions.breathing.symptom4": "छाती में जकड़न",
    "emergency.conditions.breathing.action":
      "तुरंत 108 पर कॉल करें। व्यक्ति को शांत और सीधा बैठाएं। तंग कपड़े ढीले करें।",

    "emergency.conditions.poison.title": "जहर",
    "emergency.conditions.poison.symptom1": "मतली और उल्टी",
    "emergency.conditions.poison.symptom2": "सांस लेने में कठिनाई",
    "emergency.conditions.poison.symptom3": "उलझन या उनींदापन",
    "emergency.conditions.poison.symptom4": "मुंह के आस-पास जलन",
    "emergency.conditions.poison.action":
      "108 और विष नियंत्रण पर कॉल करें। उल्टी न करवाएं। पदार्थ का कंटेनर साथ रखें।",
    "emergency.cpr.title": "CPR के मूल",
    "emergency.cpr.step1": "प्रतिक्रिया की जांच करें",
    "emergency.cpr.step2": "तुरंत 108 पर कॉल करें",
    "emergency.cpr.step3": "हाथों को छाती के केंद्र पर रखें",
    "emergency.cpr.step4":
      "जोर से और तेजी से दबाव दें - 100-120 कम्प्रेशन/मिनट",
    "emergency.cpr.step5": "मदद आने तक जारी रखें",
    "emergency.choking.title": "दम घुटने में राहत",
    "emergency.choking.step1": "यदि संभव हो तो खांसने के लिए प्रोत्साहित करें",
    "emergency.choking.step2": "कंधे के ब्लेड के बीच 5 बैक ब्लो दें",
    "emergency.choking.step3": "5 पेट के धक्के दें (हैमलिक)",
    "emergency.choking.step4": "वस्तु निकलने तक दोहराएं",
    "emergency.choking.step5": "अचेत होने पर 108 पर कॉल करें",
    "emergency.burn.title": "जलन का उपचार",
    "emergency.burn.step1": "जलन को 10-20 मिनट तक बहते पानी से ठंडा करें",
    "emergency.burn.step2": "सूजन से पहले आभूषण हटा दें",
    "emergency.burn.step3": "साफ, सूखे कपड़े से ढकें",
    "emergency.burn.step4": "बर्फ या मक्खन न लगाएं",
    "emergency.burn.step5": "गंभीर जलन के लिए चिकित्सा सहायता लें",

    // Records Page
    "records.title": "स्वास्थ्य रिकॉर्ड",
    "records.subtitle": "अपना चिकित्सा इतिहास और अपॉइंटमेंट प्रबंधित करें",
    "records.add": "नया रिकॉर्ड जोड़ें",
    "records.quickStats": "त्वरित आँकड़े",
    "records.totalRecords": "कुल रिकॉर्ड",
    "records.appointments": "आगामी अपॉइंटमेंट",
    "records.history": "चिकित्सा इतिहास",
    "records.prescriptions": "पर्चे",
    "records.reports": "लैब रिपोर्ट",
    "records.loading": "रिकॉर्ड लोड हो रहे हैं...",
    "records.emptyTitle": "कोई रिकॉर्ड नहीं मिला",
    "records.emptySubtitle":
      "अपने स्वास्थ्य रिकॉर्ड जोड़ना शुरू करें ताकि अपने चिकित्सा इतिहास का ट्रैक रख सकें",
    "records.form.title.placeholder": "उदा., ब्लड टेस्ट परिणाम",
    "records.form.doctor.placeholder": "उदा., डॉ. राजेश कुमार",
    "records.form.hospital.placeholder": "उदा., अपोलो अस्पताल",
    "records.form.notes.placeholder": "इस रिकॉर्ड के बारे में विस्तृत नोट्स...",
    "records.upload.soon": "फाइल अपलोड जल्द आ रहा है...",
    "records.upload.types": "PDF, इमेज (JPG, PNG)",
    "records.editPersonalInfo": "व्यक्तिगत जानकारी संपादित करें",

    // Schedule Page
    "schedule.title": "अपॉइंटमेंट शेड्यूल करें",
    "schedule.subtitle":
      "स्वास्थ्य सेवा प्रदाताओं के साथ अपना अपॉइंटमेंट बुक करें",
    "schedule.doctor": "डॉक्टर चुनें",
    "schedule.date": "तारीख चुनें",
    "schedule.time": "समय चुनें",
    "schedule.book": "अपॉइंटमेंट बुक करें",
    "schedule.confirm": "अपॉइंटमेंट की पुष्टि करें",
    "schedule.myAppointments": "मेरे अपॉइंटमेंट",
    "schedule.gender": "लिंग",
    "schedule.selectGender": "लिंग चुनें",
    "schedule.gender.male": "पुरुष",
    "schedule.gender.female": "महिला",
    "schedule.gender.other": "अन्य",
    "schedule.phone": "फोन नंबर",
    "schedule.emailOptional": "ईमेल (वैकल्पिक)",
    "schedule.selectTime": "समय चुनें",
    "schedule.selectSpecialty": "विशेषज्ञता चुनें",
    "schedule.preferredDoctorOptional": "पसंदीदा डॉक्टर (वैकल्पिक)",
    "schedule.anyAvailableDoctor": "किसी भी उपलब्ध डॉक्टर के लिए खाली छोड़ दें",
    "schedule.reasonForVisit": "भेंट का कारण",
    "schedule.reasonPlaceholder":
      "अपने लक्षणों या अपॉइंटमेंट के कारण का संक्षेप में वर्णन करें...",
    "schedule.cancel": "रद्द करें",
    "schedule.cancelAppointment": "अपॉइंटमेंट रद्द करें",
    "schedule.confirmedTitle": "अपॉइंटमेंट की पुष्टि हो गई!",
    "schedule.confirmedSubtitle":
      "आपका अपॉइंटमेंट सफलतापूर्वक शेड्यूल कर दिया गया है",
    "schedule.detailsTitle": "अपॉइंटमेंट विवरण",
    "schedule.patient": "मरीज़",
    "schedule.status": "स्थिति",
    "schedule.pending": "पुष्टि लंबित",
    "schedule.nextStepsTitle": "📱 अगले कदम:",
    "schedule.nextStepsText":
      "आपको 2 घंटे के भीतर कॉल/एसएमएस प्राप्त होगा ताकि अपॉइंटमेंट समय की पुष्टि हो सके।",
    "schedule.done": "हो गया",
    "schedule.viewAll": "सभी अपॉइंटमेंट देखें",
    "schedule.alertFillRequired": "कृपया सभी आवश्यक फ़ील्ड भरें",
    "schedule.alertPhoneInvalid": "कृपया वैध फोन नंबर दर्ज करें",

    // Map Page
    "map.title": "स्वास्थ्य सेवा मानचित्र",
    "map.subtitle": "नजदीकी अस्पताल, क्लिनिक और स्वास्थ्य सेवा सुविधाएं खोजें",
    "map.hospitals": "अस्पताल",
    "map.clinics": "क्लिनिक",
    "map.pharmacies": "फार्मेसी",
    "map.distance": "दूरी",
    "map.open": "अभी खुला",
    "map.emergencyBanner.title": "चिकित्सा आपातकाल?",
    "map.emergencyBanner.subtitle": "तुरंत एंबुलेंस सेवा के लिए कॉल करें",

    // Video Consult Page
    "video.title": "वीडियो परामर्श",
    "video.subtitle": "वीडियो कॉल के माध्यम से डॉक्टरों से जुड़ें",
    "video.join": "कॉल में शामिल हों",
    "video.mute": "म्यूट",
    "video.camera": "कैमरा",
    "video.end": "कॉल समाप्त करें",
    "video.connected": "वीडियो कनेक्टेड",
    "video.cameraOff": "कैमरा बंद",
    "video.chatPlaceholder": "संदेश लिखें...",
    "video.connecting.title": "कनेक्ट हो रहा है...",
    "video.connecting.subtitle": "आपके वीडियो कॉल की सेटिंग हो रही है",
    "video.connecting.permission": "कृपया कैमरा और माइक्रोफ़ोन की अनुमति दें",
    "video.features.title": "वीडियो परामर्श की विशेषताएं",
    "video.features.hd.title": "HD वीडियो गुणवत्ता",
    "video.features.hd.desc":
      "एडैप्टिव स्ट्रीमिंग के साथ क्रिस्टल क्लियर वीडियो",
    "video.features.share.title": "स्क्रीन शेयरिंग",
    "video.features.share.desc":
      "परामर्श के दौरान रिपोर्ट और टेस्ट परिणाम साझा करें",
    "video.features.chat.title": "रीयल-टाइम चैट",
    "video.features.chat.desc": "बेहतर संचार के लिए वीडियो के साथ टेक्स्ट चैट",

    // Landing Footer
    "landing.footer.tagline":
      "ग्रामीण भारत के लिए ऑफलाइन-फर्स्ट AI स्वास्थ्य सेवा",
    "landing.footer.sections.product": "उत्पाद",
    "landing.footer.sections.company": "कंपनी",
    "landing.footer.sections.legal": "कानूनी",
    "landing.footer.links.features": "विशेषताएं",
    "landing.footer.links.tech": "तकनीक",
    "landing.footer.links.impact": "प्रभाव",
    "landing.footer.links.about": "हमारे बारे में",
    "landing.footer.links.blog": "ब्लॉग",
    "landing.footer.links.careers": "करियर",
    "landing.footer.links.privacy": "गोपनीयता",
    "landing.footer.links.terms": "नियम",
    "landing.footer.links.contact": "संपर्क",

    // Common
    "common.save": "सेव करें",
    "common.cancel": "रद्द करें",
    "common.submit": "सबमिट करें",
    "common.loading": "लोड हो रहा है...",
    "common.error": "एक त्रुटि हुई",
    "common.success": "सफलता",
    "common.close": "बंद करें",
    "common.name": "पूरा नाम",
    "common.age": "उम्र",
    "common.gender": "लिंग",
    "common.phone": "फोन नंबर",
    "common.email": "ईमेल (वैकल्पिक)",
    "common.date": "पसंदीदा तारीख",
    "common.time": "पसंदीदा समय",
    "common.specialty": "विशेषज्ञता",
    "common.personalInfo": "व्यक्तिगत जानकारी",
    "common.appointmentDetails": "अपॉइंटमेंट विवरण",
    "common.viewAppointments": "मेरे अपॉइंटमेंट देखें",
    "common.searchLocation": "नाम या स्थान से खोजें...",
    "common.allTypes": "सभी प्रकार",
    "common.myLocation": "मेरा स्थान",
    "common.facilitiesFound": "सुविधाएं मिलीं",
    "common.directions": "दिशा निर्देश",
    "common.available": "उपलब्ध",
    "common.startVideoCall": "वीडियो कॉल शुरू करें",
    "common.currentlyUnavailable": "वर्तमान में अनुपलब्ध",
    "common.addRecord": "रिकॉर्ड जोड़ें",
    "common.allRecords": "सभी रिकॉर्ड",
    "common.prescriptions": "पर्चे",
    "common.reports": "रिपोर्ट",
    "common.visits": "विज़िट",
    "common.bloodGroup": "रक्त समूह",
    "common.height": "ऊंचाई",
    "common.weight": "वजन",
    "common.allergies": "एलर्जी",
    "common.emergencyContact": "आपातकालीन संपर्क",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "hi")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "hi" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
