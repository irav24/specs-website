function toggleChat() {
    const container = document.getElementById('chat-container');
    if (container) {
        container.classList.toggle('chat-hidden');
    }
}


const knowledgeBase = [
   
    { 
        keys: ['who are you', 'what is electra', 'introduction', 'society'], 
        ans: "The <b>Electra Society</b> is the official student body of the Electrical Engineering Department at NIT Silchar. We act as a bridge between academic curriculum and industrial requirements." 
    },
    { 
        keys: ['established', 'legacy', 'years', 'history', 'old'], 
        ans: "The society was established over a decade ago. We have a rich legacy of <b>10+ years</b>, fostering technical excellence and producing alumni who lead in global industries." 
    },
    { 
        keys: ['motto', 'tagline', 'slogan'], 
        ans: "Our motto is <b>'Illuminating Minds'</b>. We strive to spark innovation and technical curiosity in every student." 
    },

   
    { 
        keys: ['about us', 'description'], 
        ans: "We are a vibrant community of Electrical Engineering students dedicated to holistic development. We organize workshops, tech-fests, and coding competitions to enhance practical skills." 
    },
    { 
        keys: ['mission', 'goal', 'aim', 'objective'], 
        ans: "<b>Our Mission:</b> To provide a platform for students to explore their potential, develop technical expertise, and build soft skills through collaborative projects and leadership roles." 
    },
    { 
        keys: ['vision', 'future'], 
        ans: "<b>Our Vision:</b> To create a network of skilled engineers who contribute to technological advancements and society. We aim to be the premier technical society in the region." 
    },

    { 
        keys: ['patron', 'director', 'baidya'], 
        ans: "Our Patron is <b>Prof. Dilip Kumar Baidya</b>, the honorable Director of NIT Silchar. His guidance steers our vision." 
    },
    { 
        keys: ['head of department', 'hod', 'malakar', 'tanmoy'], 
        ans: "Our HOD is <b>Dr. Tanmoy Malakar</b>, . He oversees all departmental activities." 
    },
    { 
        keys: ['fic', 'faculty in charge', 'sreejith'], 
        ans: "<b>Dr. Sreejith S.</b> is the Faculty In-Charge (FIC). He works closely with the student body to execute events and technical initiatives." 
    },

   
    { 
        keys: ['events', 'activities', 'what happens'], 
        ans: "We conduct 5 flagship events annually:<br>• <b>Udvega:</b> Freshers' party<br>• <b>Off the Hook:</b> showcase your inner talents<br>• <b>Blitzsurge:</b> Gaming & Creative event<br>• <b>Power Surge:</b> Technical event<br>• <b>Electra Cup:</b> Sports Championship" 
    },
    { 
        keys: ['udvega'], 
        ans: "<b>Udvega:</b> The grand entry for freshers! It's a fun night featuring dance, drama, and music to welcome the new batch into the EE family." 
    },
    { 
        keys: ['power surge',], 
        ans: "<b>Power Surge:</b> Power surge is a technically focused event. It includes 'Crack the Job' (Mock Placements), Circuit Design competitions, and Technical Paper Presentations." 
    },
    { 
        keys: ['blitzsurge',], 
        ans: "<b>Blitzsurge:</b> Blitzsurge is Electra's gaming and creative event. It includes competetive gaming, meme making and more."
    },
    
    { 
        keys: ['location', 'address', 'where are you'], 
        ans: "<b>Address:</b> Department of Electrical Engineering, National Institute of Technology Silchar, Cachar, Assam - 788010." 
    },
    { 
        keys: ['contact', 'email', 'phone', 'reach'], 
        ans: "You can reach us at: <b>electrasociety.nits@gmail.com</b>. We are also active on social media handles." 
    },
    { 
        keys: ['social', 'instagram', 'linkedin', 'facebook'], 
        ans: "Connect with us:<br>• <a href='https://www.instagram.com/electrasocietynits/' target='_blank' style='color:#3E63DD;'>Instagram</a><br>• <a href='https://www.linkedin.com/company/electra-society-nits/' target='_blank' style='color:#3E63DD;'>LinkedIn</a>" 
    },
    { 
        keys: ['developer', 'who made this site', 'credits'], 
        ans: "This website was designed and developed by the <b>Electra-Dev Wing</b> (2025-26 Team)." 
    }
];


function handleChat() {
    const inputField = document.getElementById('user-input');
    const rawQuery = inputField.value.trim().toLowerCase();
    
    if (!rawQuery) return;

    appendMsg(inputField.value, 'user');
    inputField.value = '';

    
    setTimeout(() => {
        const response = findBestMatch(rawQuery);
        appendMsg(response, 'bot');
    }, 400);
}


function findBestMatch(query) {
    let bestMatch = null;
    let maxScore = 0;

    for (let item of knowledgeBase) {
        for (let key of item.keys) {
            if (query.includes(key)) {
                let score = key.length; 

                const regex = new RegExp(`\\b${key}\\b`, 'i');
                if (regex.test(query)) {
                    score += 15; 
                }

                if (score > maxScore) {
                    maxScore = score;
                    bestMatch = item.ans;
                }
            }
        }
    }

    if (bestMatch) {
        return bestMatch;
    } else {
        return "I couldn't find that on the homepage. Try asking about 'Wings', 'Mission', 'Patron', or 'Events'.";
    }
}

function appendMsg(text, type) {
    const chatBox = document.getElementById('chat-box');
    const msgDiv = document.createElement('div');
    msgDiv.className = `msg ${type}`;
    msgDiv.innerHTML = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('user-input').addEventListener('keypress', (e) => { 
        if(e.key === 'Enter') handleChat(); 
    });

    setTimeout(() => {
        const container = document.getElementById('chat-container');
        if(container && container.classList.contains('chat-hidden')) {
            toggleChat();
        }
    }, 3000);
});


const galleryData = [
    
    { 
        keys: ['gallery', 'photos', 'pictures', 'images', 'pics', 'memories'], 
        ans: "The <b>Electra Gallery</b> is our visual archive. It houses high-quality moments from every major event, sorted by category and year. <br><a href='https://www.electrasocietynits.com/Gallery' target='_blank' style='color:#3E63DD; font-weight:600; text-decoration:none;'>[OPEN GALLERY]</a>" 
    },


    { 
        keys: ['udvega photo', 'udvega pic', 'freshers photo', 'orientation pic'], 
        ans: "<b>Udvega Archives:</b> Relive the stage performances, ramp walks, and crowd energy from the freshers' orientation. <br><a href='https://www.electrasocietynits.com/Gallery#udvega' target='_blank' style='color:#3E63DD;'>[VIEW UDVEGA ALBUM]</a>" 
    },
    { 
        keys: ['power surge photo', 'tech fest photo', 'technical pic'], 
        ans: "<b>Power Surge Archives:</b> Capture the intensity of the 'Crack the Job' interviews and technical competitions. <br><a href='https://www.electrasocietynits.com/Gallery#powersurge' target='_blank' style='color:#3E63DD;'>[VIEW TECH ALBUM]</a>" 
    },
    { 
        keys: ['blitzsurge photo', 'gaming pic', 'meme photo'], 
        ans: "<b>Blitzsurge Archives:</b> Highlights from the E-Sports tournaments and creative arts showcases. <br><a href='https://www.electrasocietynits.com/Gallery#blitzsurge' target='_blank' style='color:#3E63DD;'>[VIEW BLITZSURGE ALBUM]</a>" 
    },
    { 
        keys: ['electra cup photo', 'sports photo', 'cricket pic', 'futsal pic', 'match photo'], 
        ans: "<b>Electra Cup Archives:</b> Action shots from the inter-batch Cricket, Futsal, and Badminton matches. <br><a href='https://www.electrasocietynits.com/Gallery#sports' target='_blank' style='color:#3E63DD;'>[VIEW SPORTS ALBUM]</a>" 
    },
    { 
        keys: ['carvaan photo', 'farewell pic', 'senior photo', 'outgoing batch'], 
        ans: "<b>Carvaan Archives:</b> Emotional moments, group photos, and tributes from the farewell ceremony. <br><a href='https://www.electrasocietynits.com/Gallery#carvaan' target='_blank' style='color:#3E63DD;'>[VIEW FAREWELL ALBUM]</a>" 
    },

 
    { 
        keys: ['old photo', 'archive', '2023', '2022', '2024', 'year'], 
        ans: "<b>Yearly Archives:</b> To view photos from a specific year (e.g., 2021-2024), please visit the main Gallery page and use the <b>'Filter by Year'</b> dropdown menu." 
    },
    { 
        keys: ['upload photo', 'submit photo', 'send photo'], 
        ans: "To contribute photos to the society gallery, please contact the <b>Electra-Dev Team</b> or the Media Head via email at electrasociety.nits@gmail.com." 
    }
];


knowledgeBase.push(...galleryData);
console.log("Gallery Module Loaded: " + galleryData.length + " new entries added.");

const resourcesData = [

    {
        keys: ['pyq', 'question paper', 'previous year', 'paper', 'syllabus', 'curriculum', 'notes'], 
        ans: "Which semester are you looking for? (Enter '1' to '8')",
        setContext: 'waiting_for_sem'
    },

 
    { 
        keys: ['sem 1', 'semester 1', '1st sem', 'ch 101', 'chemistry', 'ee 101', 'basic electrical', 'ma 101', 'maths 1', 'me 101', 'mechanics'], 
        ans: "<b>1st Semester Resources:</b> Access materials for Chemistry, Maths-I, Basic Electrical, and Mechanics here: <br><a href='https://www.electrasocietynits.com/Resources/1' target='_blank' style='color:#3E63DD; font-weight:600;'>[OPEN SEM 1 FOLDER]</a>" 
    },

    { 
        keys: ['sem 2', 'semester 2', '2nd sem', 'ph 101', 'physics', 'ma 102', 'maths 2', 'cs 101', 'c programming', 'ec 101', 'basic electronics'], 
        ans: "<b>2nd Semester Resources:</b> Access materials for Physics, Maths-II, C-Programming, and Basic Electronics here: <br><a href='https://www.electrasocietynits.com/Resources/2' target='_blank' style='color:#3E63DD; font-weight:600;'>[OPEN SEM 2 FOLDER]</a>" 
    },

  
    { 
        keys: ['sem 3', 'semester 3', '3rd sem', 'ee 201', 'circuit theory', 'networks', 'ma 201', 'maths 3', 'ee 203', 'signals', 'signals and systems', 'cs 201', 'dsa', 'data structures'], 
        ans: "<b>3rd Semester Resources:</b> Access notes for Circuit Theory, Maths-III, Signals & Systems, and DSA here: <br><a href='https://www.electrasocietynits.com/Resources/3' target='_blank' style='color:#3E63DD; font-weight:600;'>[OPEN SEM 3 FOLDER]</a>" 
    },

  
    { 
        keys: ['sem 4', 'semester 4', '4th sem', 'ee 202', 'digital electronics', 'logic design', 'ee 204', 'machines 1', 'ee 206', 'emft', 'electromagnetic', 'ee 208', 'measurements'], 
        ans: "<b>4th Semester Resources:</b> Access materials for Digital Electronics, Machines-I, EMFT, and Measurements here: <br><a href='https://www.electrasocietynits.com/Resources/4' target='_blank' style='color:#3E63DD; font-weight:600;'>[OPEN SEM 4 FOLDER]</a>" 
    },

    { 
        keys: ['sem 5', 'semester 5', '5th sem', 'ee 301', 'control systems', 'cs', 'ee 303', 'power systems 1', 'ee 305', 'microprocessors', 'ee 307', 'machines 2'], 
        ans: "<b>5th Semester Resources:</b> Access PYQs and notes for Control Systems, Power Systems-I, Microprocessors, and Machines-II here: <br><a href='https://www.electrasocietynits.com/Resources/5' target='_blank' style='color:#3E63DD; font-weight:600;'>[OPEN SEM 5 FOLDER]</a>" 
    },

   
    { 
        keys: ['sem 6', 'semester 6', '6th sem', 'ee 302', 'power electronics', 'pe', 'ee 304', 'dsp', 'ee 306', 'power systems 2', 'protection'], 
        ans: "<b>6th Semester Resources:</b> Access materials for Power Electronics, DSP, and Power Systems-II here: <br><a href='https://www.electrasocietynits.com/Resources/6' target='_blank' style='color:#3E63DD; font-weight:600;'>[OPEN SEM 6 FOLDER]</a>" 
    },

    { 
        keys: ['sem 7', 'semester 7', '7th sem', 'ee 401', 'electric drives', 'drives', 'ee 403', 'switchgear', 'hvdc'], 
        ans: "<b>7th Semester Resources:</b> Access PYQs and materials for Electric Drives and Switchgear here: <br><a href='https://www.electrasocietynits.com/Resources/7' target='_blank' style='color:#3E63DD; font-weight:600;'>[OPEN SEM 7 FOLDER]</a>" 
    },

    
    { 
        keys: ['sem 8', 'semester 8', '8th sem', 'major project', 'thesis', 'management', 'ethics'], 
        ans: "<b>8th Semester Resources:</b> Access guidelines for Major Projects and Electives here: <br><a href='https://www.electrasocietynits.com/Resources/8' target='_blank' style='color:#3E63DD; font-weight:600;'>[OPEN SEM 8 FOLDER]</a>" 
    }
];


knowledgeBase.push(...resourcesData);
console.log("Academic Resources Loaded Successfully.");


if (typeof chatContext === 'undefined') {
    var chatContext = null; 
}


handleChat = function() {
    const inputField = document.getElementById('user-input');
    
    const rawQuery = inputField.value.trim().toLowerCase().replace(/-/g, ' '); 
    
    if (!rawQuery) return;

    appendMsg(inputField.value, 'user');
    inputField.value = '';

    setTimeout(() => {
        let response = null;

        
        if (chatContext === 'waiting_for_sem') {
            const semMatch = rawQuery.match(/[1-8]/); 
            if (semMatch) {
                const semNumber = semMatch[0];
                const semData = knowledgeBase.find(item => item.keys.includes(`sem ${semNumber}`));
                if (semData) {
                    response = semData.ans;
                    chatContext = null; 
                }
            } else {
                chatContext = null; 
            }
        }

        if (!response) {
            response = findBestMatch(rawQuery);
        }

        appendMsg(response, 'bot');
    }, 400);
};


findBestMatch = function(query) {
    let bestMatch = null;
    let maxScore = 0;

    for (let item of knowledgeBase) {
        for (let key of item.keys) {
            if (query.includes(key)) {
                let score = key.length; 
                
                
                const safeKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regex = new RegExp(`\\b${safeKey}\\b`, 'i');
                if (regex.test(query)) score += 20; 

                if (score > maxScore) {
                    maxScore = score;
                    bestMatch = item.ans;
                    
                   
                    if (item.setContext) {
                        chatContext = item.setContext;
                    } else {
                        chatContext = null;
                    }
                }
            }
        }
    }
    return bestMatch || "I couldn't find that in the database. Try asking about 'PYQs', 'Events', or specific subjects.";
};


const resourceDatabase = [
    {
        id: 'sem1',
        keywords: ['sem 1', 'semester 1', '1st sem', 'first sem'],
        ans: "<b>1st Semester Resources:</b> <br><a href='https://www.electrasocietynits.com/Resources/1' target='_blank'>[OPEN SEM 1 FOLDER]</a>"
    },
    {
        id: 'ch101',
        keywords: ['ch 101','ch-101', 'ch101', 'chemistry', 'chem'],
        ans: "<b>Chemistry (CH-101):</b> <br><a href='https://www.electrasocietynits.com/Resources/1/ch-101' target='_blank'>[OPEN FOLDER]</a>"
    },
    {
        id: 'ma101',
        keywords: ['ma 101', 'ma-101','ma101', 'maths 1', 'math 1', 'mathematics 1', 'calculus'],
        ans: "<b>Maths-I (MA-101):</b> <br><a href='https://www.electrasocietynits.com/Resources/1/ma-101' target='_blank'>[OPEN FOLDER]</a>"
    },
    
   
    {
        id: 'ec101',
        keywords: ['ec 101', 'ec101', 'basic electronics', 'electronics'],
        ans: "<b>Basic Electronics (EC-101):</b> <br><a href='https://www.electrasocietynits.com/Resources/2' target='_blank'>[OPEN FOLDER]</a>"
    },
    {
        id: 'cs101',
        keywords: ['cs 101', 'cs101', 'c programming', 'cpp', 'coding', 'computer programming'],
        ans: "<b>C-Programming (CS-101):</b> <br><a href='https://www.electrasocietynits.com/Resources/2' target='_blank'>[OPEN FOLDER]</a>"
    },
    {
        id: 'ce102',
        keywords: ['ce 102', 'ce-102','ce102', 'environmental science', 'evs', 'environmental'],
        ans: "<b>Environmental Science and Engineering (CE-102):</b> <br><a href='https://www.electrasocietynits.com/Resources/1/ce-102' target='_blank'>[OPEN FOLDER]</a>"
    },
    


    {
        id: 'sem2',
        keywords: ['sem 2', 'semester 2', '2nd sem', 'second sem'],
        ans: "<b>2nd Semester Resources:</b> <br><a href='https://www.electrasocietynits.com/Resources/2' target='_blank'>[OPEN SEM 2 FOLDER]</a>"
    },
    {
        id: 'ee101',
        keywords: ['ee 101', 'ee-101','ee101', 'basic electrical', 'beee', 'bee'],
        ans: "<b>Basic Electrical (EE-101):</b> <br><a href='https://www.electrasocietynits.com/Resources/1/ee-101' target='_blank'>[OPEN FOLDER]</a>"
    },
     {
        id: 'me101',
        keywords: ['me 101', 'me101', 'me-101','mechanics', 'engineering mechanics'],
        ans: "<b>Engineering Mechanics (ME-101):</b> <br><a href='https://www.electrasocietynits.com/Resources/1/me-101' target='_blank'>[OPEN FOLDER]</a>"
    },
    {
        id: 'ph101',
        keywords: ['ph 101', 'ph101', 'physics', 'phy'],
        ans: "<b>Physics (PH-101):</b> <br><a href='https://www.electrasocietynits.com/Resources/2' target='_blank'>[OPEN FOLDER]</a>"
    },
    {
        id: 'ma102',
        keywords: ['ma 102', 'ma102', 'maths 2', 'math 2', 'mathematics 2', 'differential'],
        ans: "<b>Maths-II (MA-102):</b> <br><a href='https://www.electrasocietynits.com/Resources/2' target='_blank'>[OPEN FOLDER]</a>"
    },
    {
        id: 'ce101',
        keywords: ['ce 101', 'ce-101','ce101', 'engineering graphics and design', 'egd', 'drawing','engineering drawing'],
        ans: "<b>Engineering Graphics and Design (CE-101):</b> <br><a href='https://www.electrasocietynits.com/Resources/1/ce-101' target='_blank'>[OPEN FOLDER]</a>"
    },
    {
        id: 'hs101',
        keywords: ['hs 101', 'hs-101','hs101', 'english', 'communicative english'],
        ans: "<b>Communicative English (HS-101):</b> <br><a href='https://www.electrasocietynits.com/Resources/1/hs-101' target='_blank'>[OPEN FOLDER]</a>"
    },
   
    {
        id: 'sem3',
        keywords: ['sem 3', 'semester 3', '3rd sem', 'third sem'],
        ans: "<b>3rd Semester Resources:</b> <br><a href='https://www.electrasocietynits.com/Resources/3' target='_blank'>[OPEN SEM 3 FOLDER]</a>"
    },
    
    {
        id: 'ee201',
        keywords: ['ee 201', 'ee-201','ee201', 'signals', 'signal system', 'signals and systems', 'sns'],
        ans: "<b>Signals & Systems (EE-201):</b> <br><a href='https://www.electrasocietynits.com/Resources/3/ee-201' target='_blank'>[OPEN FOLDER]</a>"
    },
    {
        id: 'ma201',
        keywords: ['ma 201','ma-201', 'ma201', 'maths 3', 'math 3', 'mathematics 3', 'pde', 'partial differential'],
        ans: "<b>Maths-III (MA-201):</b> <br><a href='https://www.electrasocietynits.com/Resources/3/ma-201' target='_blank'>[OPEN FOLDER]</a>"
    },
     {
        id: 'ee205',
        keywords: ['ee 205', 'ee205', 'emft', 'electromagnetic', 'field theory', 'electromagnetics'],
        ans: "<b>EMFT (EE-205):</b> <br><a href='https://www.electrasocietynits.com/Resources/3/ee-205' target='_blank'>[OPEN FOLDER]</a>"
    },
    {
        id: 'ee204',
        keywords: ['ee 204', 'ee204','ee-204', 'measurements', 'instrumentation', 'measuring', 'mim', 'transducers'],
        ans: "<b>Measurements (EE-204):</b> <br><a href='https://www.electrasocietynits.com/Resources/3/ee-204' target='_blank'>[OPEN FOLDER]</a>"
    },
    {
        id: 'ee202',
        keywords: ['ee 202', 'ee202','ee-202','analog electronics', 'analog'],
        ans: "<b>Analog Electronics (EE-202):</b> <br><a href='https://www.electrasocietynits.com/Resources/3/ee-202' target='_blank'>[OPEN FOLDER]</a>"
    },
    {
        id: 'ee203',
        keywords: ['ee 203','ee-203', 'ee203', 'est', 'energy science and tecnology'],
        ans: "<b>Energy Science and Technology(EE-203):</b> <br><a href='https://www.electrasocietynits.com/Resources/3/ee-203' target='_blank'>[OPEN FOLDER]</a>"
    },
    

   
    {
        id: 'sem4',
        keywords: ['sem 4', 'semester 4', '4th sem', 'fourth sem'],
        ans: "<b>4th Semester Resources:</b> <br><a href='https://www.electrasocietynits.com/Resources/4' target='_blank'>[OPEN SEM 4 FOLDER]</a>"
    },
    {
        id: 'ee209',
        keywords: ['ee 209','ee-209', 'ee209', 'circuit theory', 'networks', 'network analysis', 'circuit analysis', 'ct', 'nt'],
        ans: "<b>Circuit Theory (EE-209):</b> <br><a href='https://www.electrasocietynits.com/Resources/4/ee-209' target='_blank'>[OPEN FOLDER]</a>"
    },
    {
        id: 'cs221',
        keywords: ['cs 221', 'cs221','cs-221', 'dsa', 'data structures', 'algorithm', 'data structure'],
        ans: "<b>Data Structures (CS-221):</b> <br><a href='https://www.electrasocietynits.com/Resources/4/cs-221' target='_blank'>[OPEN FOLDER]</a>"
    },
    
    {
        id: 'ee208',
        keywords: ['ee 208','ee-208', 'ee208', 'digital', 'digital electronics', 'logic design', 'digital circuit', 'de'],
        ans: "<b>Digital Electronics (EE-208):</b> <br><a href='https://www.electrasocietynits.com/Resources/4/ee-208' target='_blank'>[OPEN FOLDER]</a>"
    },
    {
        id: 'ee206',
        keywords: ['ee 206', 'ee-206', 'ee206', 'machine 1','machines', 'machines 1', 'electrical machine 1', 'transformer', 'dc machine'],
        ans: "<b>Electrical Machines-I (EE-206):</b> <br><a href='https://www.electrasocietynits.com/Resources/4/ee-206' target='_blank'>[OPEN FOLDER]</a>"
    },
   
    
    {
        id: 'ee207',
        keywords: ['ee 207','ee-207', 'ee207','power system','power systems', 'power system 1','ps', 'power systems 1', 'ps 1', 'ps1', 'transmission', 'distribution'],
        ans: "<b>Power Systems-I (EE-207):</b> <br><a href='https://www.electrasocietynits.com/Resources/4/ee-207' target='_blank'>[OPEN FOLDER]</a>"
    },
     {
        id: 'ee210',
        keywords: ['ee 210', 'ee210', 'micro', 'mpmc','microcontroller','microcontrollers','microprocessor and microcontroller','microprocessors and microcontrollers','microprocessor', 'microprocessors', '8085', 'mp'],
        ans: "<b>Microprocessors (EE-210):</b> <br><a href='https://www.electrasocietynits.com/Resources/4/ee-210' target='_blank'>[OPEN FOLDER]</a>"
    },

    {
        id: 'sem5',
        keywords: ['sem 5', 'semester 5', '5th sem', 'fifth sem'],
        ans: "<b>5th Semester Resources:</b> <br><a href='https://www.electrasocietynits.com/Resources/5' target='_blank'>[OPEN SEM 5 FOLDER]</a>"
    },
    {
        id: 'ee301',
        keywords: ['ee 301','ee301', 'ee-301', 'control', 'control system', 'control systems', 'cs'],
        ans: "<b>Control Systems (EE-301):</b> <br><a href='https://www.electrasocietynits.com/Resources/5/ee-301' target='_blank'>[OPEN FOLDER]</a>"
    },
    
    
    {
        id: 'ee303',
        keywords: ['ee 303','ee-303', 'ee303', 'machine 2', 'machines 2', 'electrical machine 2', 'induction motor', 'synchronous'],
        ans: "<b>Electrical Machines-II (EE-303):</b> <br><a href='https://www.electrasocietynits.com/Resources/5/ee-303' target='_blank'>[OPEN FOLDER]</a>"
    },
    {
        id: 'ee302',
        keywords: ['ee 302','ee-302', 'ee302', 'power system 2', 'power systems 2', 'ps 2', 'ps2', 'protection', 'switchgear', 'relays'],
        ans: "<b>Power Systems-II (EE-302):</b> <br><a href='https://www.electrasocietynits.com/Resources/5/ee-302' target='_blank'>[OPEN FOLDER]</a>"
    },
     {
        id: 'ee304',
        keywords: ['ee 304','ee-304','ee-304', 'ee304', 'power electronics', 'pe', 'thyristor', 'converters'],
        ans: "<b>Power Electronics (EE-304):</b> <br><a href='https://www.electrasocietynits.com/Resources/5/ee-304' target='_blank'>[OPEN FOLDER]</a>"
    },
     {
        id: 'ee305',
        keywords: ['ee 305', 'ee305','ee-305', 'dsp', 'digital signal', 'signal processing', 'filters'],
        ans: "<b>Digital Signal Processing (EE-305):</b> <br><a href='https://www.electrasocietynits.com/Resources/5/ee-305' target='_blank'>[OPEN FOLDER]</a>"
    },

   
    {
        id: 'sem6',
        keywords: ['sem 6', 'semester 6', '6th sem', 'sixth sem'],
        ans: "<b>6th Semester Resources:</b> <br><a href='https://www.electrasocietynits.com/Resources/6' target='_blank'>[OPEN SEM 6 FOLDER]</a>"
    },
   
    
    {
        id: 'ee306',
        keywords: ['ee 306','ee-306', 'ee306', 'switchgear', 'protection', 'switchgear and protection'],
        ans: "<b>Switchgear & Protection (EE-306):</b> <br><a href='https://www.electrasocietynits.com/Resources/6/ee-306' target='_blank'>[OPEN FOLDER]</a>"
    },
    {
        id: 'ee307',
        keywords: ['ee 307','ee-208', 'ee307', 'industrial drives'],
        ans: "<b>Industrial Drives (EE-307):</b> <br><a href='https://www.electrasocietynits.com/Resources/6/ee-307' target='_blank'>[OPEN FOLDER]</a>"
    },
    {
        id: 'ee308',
        keywords: ['ee 308', 'ee308','ee-308', 'modern control systems'],
        ans: "<b>Modern Control Systems (EE-308):</b> <br><a href='https://www.electrasocietynits.com/Resources/6/ee-308' target='_blank'>[OPEN FOLDER]</a>"
    },
    {
        id: 'ec327',
        keywords: ['ec 327', 'ee327','ec-327', 'analog and digital communication','analog communication','digital communication','adc'],
        ans: "<b>Switchgear & Protection (EC-327):</b> <br><a href='https://www.electrasocietynits.com/Resources/6/ec-327' target='_blank'>[OPEN FOLDER]</a>"
    },
    
    

    {
        id: 'sem7',
        keywords: ['sem 7', 'semester 7', '7th sem', 'seventh sem'],
        ans: "<b>7th Semester Resources:</b> <br><a href='https://www.electrasocietynits.com/Resources/7' target='_blank'>[OPEN SEM 7 FOLDER]</a>"
    },
    
    {
        id: 'sem8',
        keywords: ['sem 8', 'semester 8', '8th sem', 'eighth sem'],
        ans: "<b>8th Semester Resources:</b> <br><a href='https://www.electrasocietynits.com/Resources/8' target='_blank'>[OPEN SEM 8 FOLDER]</a>"
    },
    {
        id: 'project',
        keywords: ['project', 'major project', 'thesis', 'report'],
        ans: "<b>Major Project Guidelines:</b> Found in Sem 8. <br><a href='https://www.electrasocietynits.com/Resources/8' target='_blank'>[OPEN FOLDER]</a>"
    }
];
handleChat = function() {
    const inputField = document.getElementById('user-input');
    
    
    let rawQuery = inputField.value.trim().toLowerCase();
    rawQuery = rawQuery.replace(/-/g, ' '); 
    
    if (!rawQuery) return;

    appendMsg(inputField.value, 'user');
    inputField.value = '';

    setTimeout(() => {
       
        if (typeof chatContext !== 'undefined' && chatContext === 'waiting_for_sem') {
            const numMatch = rawQuery.match(/[1-8]/);
            if (numMatch) {
                const semNum = numMatch[0];
                appendMsg(`<b>${semNum}th Semester Resources:</b> <br><a href='https://www.electrasocietynits.com/Resources/${semNum}' target='_blank'>[OPEN FOLDER]</a>`, 'bot');
                chatContext = null;
                return;
            }
        }

        let bestResource = null;
        let highestScore = 0;
        
        resourceDatabase.forEach(item => {
            let score = 0;
            item.keywords.forEach(keyword => {
                if (rawQuery.includes(keyword)) {
                    score += keyword.length * 2; 
                    if (keyword.match(/[a-z]{2}\s\d{3}/)) score += 50; 
                    if (rawQuery === keyword) score += 30; 
                }
            });
            if (score > highestScore) {
                highestScore = score;
                bestResource = item;
            }
        });

       
        if (highestScore > 5) {
           
            appendMsg(bestResource.ans, 'bot');
            chatContext = null;
        } else {
           
            if (rawQuery.match(/pyq|notes|syllabus|paper|question/)) {
                appendMsg("Which semester are you looking for? (Enter '1' to '8')", 'bot');
                chatContext = 'waiting_for_sem';
            } else {
                
                let oldMatch = findBestMatch(rawQuery); 
                appendMsg(oldMatch, 'bot');
            }
        }
    }, 400);
};
// ── Conversation history for AI ──────────────────────────────
let conversationHistory = [];


// ── Typing indicator ─────────────────────────────────────────
function showTypingIndicator() {
    const chatBox = document.getElementById('chat-box');
    const el = document.createElement('div');
    el.className = 'msg bot typing-indicator';
    el.id = 'typing-indicator';
    el.innerHTML = '<span></span><span></span><span></span>';
    chatBox.appendChild(el);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTypingIndicator() {
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
}


// ── AI Fallback (replaces the last handleChat definition) ─────
handleChat = async function() {
    const inputField = document.getElementById('user-input');
    let rawQuery = inputField.value.trim().toLowerCase().replace(/-/g, ' ');
    if (!rawQuery) return;

    appendMsg(inputField.value, 'user');
    inputField.value = '';
    inputField.disabled = true;

    conversationHistory.push({ role: 'user', content: rawQuery });
    if (conversationHistory.length > 40) conversationHistory = conversationHistory.slice(-40);

    // ── LAYER 1: Semester context follow-up ──────────────────
    if (typeof chatContext !== 'undefined' && chatContext === 'waiting_for_sem') {
        const numMatch = rawQuery.match(/[1-8]/);
        if (numMatch) {
            const semNum = numMatch[0];
            const reply = `<b>${semNum}th Semester Resources:</b><br><a href='https://www.electrasocietynits.com/Resources/${semNum}' target='_blank' style='color:#3E63DD;font-weight:600;'>[OPEN FOLDER]</a>`;
            conversationHistory.push({ role: 'assistant', content: reply });
            appendMsg(reply, 'bot');
            chatContext = null;
            inputField.disabled = false;
            return;
        }
        chatContext = null;
    }

    // ── LAYER 2: Resource database (subject-level) ───────────
    let bestResource = null;
    let highestScore = 0;
    resourceDatabase.forEach(item => {
        let score = 0;
        item.keywords.forEach(keyword => {
            if (rawQuery.includes(keyword)) {
                score += keyword.length * 2;
                if (keyword.match(/[a-z]{2}\s\d{3}/)) score += 50;
                if (rawQuery === keyword) score += 30;
            }
        });
        if (score > highestScore) { highestScore = score; bestResource = item; }
    });

    if (highestScore > 5) {
        conversationHistory.push({ role: 'assistant', content: bestResource.ans });
        appendMsg(bestResource.ans, 'bot');
        chatContext = null;
        inputField.disabled = false;
        return;
    }

    // ── LAYER 3: Your original knowledge base ────────────────
    const kbMatch = findBestMatch(rawQuery);
    const isUnmatched = kbMatch.startsWith("I couldn't find");

    if (!isUnmatched) {
        conversationHistory.push({ role: 'assistant', content: kbMatch });
        appendMsg(kbMatch, 'bot');
        inputField.disabled = false;
        return;
    }

    // ── LAYER 4: AI fallback ─────────────────────────────────
    showTypingIndicator();

    try {
        const response = await fetch('https://bot-api-orpin.vercel.app/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: conversationHistory })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error?.message || 'API error');

        const botReply = data.content
            .filter(b => b.type === 'text')
            .map(b => b.text)
            .join('');

        conversationHistory.push({ role: 'assistant', content: botReply });
        removeTypingIndicator();
        appendMsg(botReply, 'bot');

    } catch (err) {
        removeTypingIndicator();
        console.error('ElectraBot AI error:', err);
        appendMsg(
            "Hmm, I couldn't find that one! Try asking about our <b>events</b>, <b>resources</b>, or <b>team</b> — or reach us at <b>societyelectra@gmail.com</b> ⚡",
            'bot'
        );
        conversationHistory.pop();
    } finally {
        inputField.disabled = false;
        inputField.focus();
    }
};
