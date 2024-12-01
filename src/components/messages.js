
// const messages =
// {
//     "testUser": {
//         "aditi": [
//             { direction: "to", text: "Hi, How are you?", timestamp: "09:35:36" },
//             { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42" },
//             { direction: "to", text: "I am good too. What are you doing these days?", timestamp: "09:36:45" },
//             { direction: "from", text: "It's been very long since we have met.", timestamp: "09:45:42" },
//             { direction: "to", text: "Yes, we should catch up soon!", timestamp: "10:01:00" },
//             { direction: "from", text: "Sure, let me know when you are free.", timestamp: "10:05:15" },
//             { direction: "to", text: "How about this weekend?", timestamp: "10:15:30" },
//             { direction: "from", text: "Perfect! Let's plan it out.", timestamp: "10:20:05" },
//             { direction: "to", text: "I will text you the details.", timestamp: "10:22:50" },
//             { direction: "from", text: "Sounds good. See you soon!", timestamp: "10:30:00" }
//         ],
//         "aditya23": [
//             { direction: "to", text: "Hi Aditya, what's up?", timestamp: "11:15:12" },
//             { direction: "from", text: "Hey! Not much, just working. You?", timestamp: "11:16:05" },
//             { direction: "to", text: "Same here, caught up with deadlines.", timestamp: "11:17:22" },
//             { direction: "from", text: "I know the feeling! Let's grab coffee soon.", timestamp: "11:20:00" },
//             { direction: "to", text: "Sure, let's plan for next week.", timestamp: "11:25:18" },
//             { direction: "from", text: "Cool. I'll check my schedule.", timestamp: "11:30:05" },
//             { direction: "to", text: "By the way, did you finish that project?", timestamp: "11:45:50" },
//             { direction: "from", text: "Yes, finally! It was a tough one.", timestamp: "11:50:35" },
//             { direction: "to", text: "Great to hear that. Congrats!", timestamp: "12:00:10" },
//             { direction: "from", text: "Thanks! Catch you later.", timestamp: "12:15:25" }
//         ],
//         "anushka": [
//             { direction: "to", text: "Hey Anushka! Long time no see.", timestamp: "09:00:12" },
//             { direction: "from", text: "Yeah, it's been ages. How have you been?", timestamp: "09:05:45" },
//             { direction: "to", text: "Busy as usual, you?", timestamp: "09:10:22" },
//             { direction: "from", text: "Same here. We should meet up soon!", timestamp: "09:15:00" },
//             { direction: "to", text: "Absolutely. Let's plan something.", timestamp: "09:20:18" },
//             { direction: "from", text: "I'll talk to others as well.", timestamp: "09:25:05" },
//             { direction: "to", text: "Great! Looking forward to it.", timestamp: "09:30:10" },
//             { direction: "from", text: "Same here. Let's finalize the date soon.", timestamp: "09:40:35" },
//             { direction: "to", text: "Will do. Take care till then.", timestamp: "09:45:22" },
//             { direction: "from", text: "You too. Bye!", timestamp: "09:50:00" }
//         ],
//         "varun": [
//             { direction: "to", text: "Hi Varun, how's work going?", timestamp: "10:05:30" },
//             { direction: "from", text: "Hey! It's hectic but manageable. You?", timestamp: "10:10:10" },
//             { direction: "to", text: "Same here. How's the new project?", timestamp: "10:15:22" },
//             { direction: "from", text: "Challenging but exciting. Loving it so far.", timestamp: "10:20:15" },
//             { direction: "to", text: "Good to hear. Let's catch up soon.", timestamp: "10:25:18" },
//             { direction: "from", text: "Sure, let's plan for a weekend.", timestamp: "10:30:05" },
//             { direction: "to", text: "Perfect. I'll text you later.", timestamp: "10:35:50" },
//             { direction: "from", text: "Alright. Take care!", timestamp: "10:40:35" }
//         ],
//         "aditya": [
//             { direction: "to", text: "Hey Aditya! How's life?", timestamp: "08:30:15" },
//             { direction: "from", text: "Hi! Life is good. How about you?", timestamp: "08:32:45" },
//             { direction: "to", text: "I'm doing well. Are you free this evening?", timestamp: "08:35:12" },
//             { direction: "from", text: "Not really, got some work. What's up?", timestamp: "08:40:00" },
//             { direction: "to", text: "Wanted to discuss our new project.", timestamp: "08:42:18" },
//             { direction: "from", text: "Let's connect tomorrow morning instead?", timestamp: "08:45:35" },
//             { direction: "to", text: "Sure, tomorrow works for me.", timestamp: "08:50:00" },
//             { direction: "from", text: "Cool. Let's sync up at 10.", timestamp: "08:55:22" },
//             { direction: "to", text: "Perfect. See you then.", timestamp: "09:00:00" }
//         ],
//         "shraddha": [
//             { direction: "to", text: "Hey Shraddha! Did you watch the game?", timestamp: "19:10:30" },
//             { direction: "from", text: "Hi! Yes, it was amazing. What a finish!", timestamp: "19:15:00" },
//             { direction: "to", text: "I know, right? That last goal was crazy.", timestamp: "19:20:10" },
//             { direction: "from", text: "Absolutely. It kept me on the edge of my seat!", timestamp: "19:25:45" },
//             { direction: "to", text: "We should plan a watch party for the next match.", timestamp: "19:30:00" },
//             { direction: "from", text: "Totally. Count me in.", timestamp: "19:35:12" },
//             { direction: "to", text: "Great! I'll coordinate with everyone.", timestamp: "19:40:22" },
//             { direction: "from", text: "Perfect. Looking forward to it.", timestamp: "19:45:00" }
//         ],
//         "hritik": [
//             { direction: "to", text: "Hey Hritik, how's your health now?", timestamp: "10:10:15" },
//             { direction: "from", text: "Much better now. Thanks for asking.", timestamp: "10:12:30" },
//             { direction: "to", text: "Good to hear. Take it easy for a while.", timestamp: "10:15:45" },
//             { direction: "from", text: "Yes, I will. How's work going for you?", timestamp: "10:20:00" },
//             { direction: "to", text: "It's busy but manageable.", timestamp: "10:25:10" },
//             { direction: "from", text: "Great. Let me know if you need any help.", timestamp: "10:30:00" },
//             { direction: "to", text: "Thanks! I will.", timestamp: "10:35:20" },
//             { direction: "from", text: "Take care and stay in touch.", timestamp: "10:40:00" }
//         ],
//         "akshay": [
//             { direction: "to", text: "Akshay, did you check the new updates?", timestamp: "11:05:00" },
//             { direction: "from", text: "Hey! Yes, I did. They're pretty cool.", timestamp: "11:10:15" },
//             { direction: "to", text: "I agree. Let me know your thoughts.", timestamp: "11:15:22" },
//             { direction: "from", text: "I think it's a step in the right direction.", timestamp: "11:20:30" },
//             { direction: "to", text: "True. Are you joining the meeting later?", timestamp: "11:25:45" },
//             { direction: "from", text: "Yes, I'll be there.", timestamp: "11:30:00" },
//             { direction: "to", text: "Cool. See you in the call.", timestamp: "11:35:00" }
//         ],
//         "priyanka": [
//             { direction: "to", text: "Priyanka, have you submitted the report?", timestamp: "15:30:00" },
//             { direction: "from", text: "Hey! Not yet. I'm still working on it.", timestamp: "15:35:15" },
//             { direction: "to", text: "Let me know if you need any help.", timestamp: "15:40:20" },
//             { direction: "from", text: "Thanks, I will. It's almost done.", timestamp: "15:45:00" },
//             { direction: "to", text: "Great. Make sure to submit it by evening.", timestamp: "15:50:10" },
//             { direction: "from", text: "Will do. Thanks for the reminder.", timestamp: "15:55:00" }
//         ],
//         "tiger": [
//             { direction: "to", text: "Tiger, let's go for a run tomorrow morning.", timestamp: "06:00:00" },
//             { direction: "from", text: "Sure. What time?", timestamp: "06:05:10" },
//             { direction: "to", text: "Let's meet at 6:30.", timestamp: "06:10:20" },
//             { direction: "from", text: "Sounds good. See you then.", timestamp: "06:15:00" }
//         ],
//         "rohit": [
//             { direction: "to", text: "Rohit, did you see the new movie?", timestamp: "20:00:00" },
//             { direction: "from", text: "Not yet. Is it good?", timestamp: "20:05:10" },
//             { direction: "to", text: "Yes, it's a must-watch. You should go this weekend.", timestamp: "20:10:30" },
//             { direction: "from", text: "I'll book tickets for Saturday. Thanks for the recommendation.", timestamp: "20:15:00" }
//         ],
//         // Additional contacts follow the same pattern...
//     },
//     // "testUser": {
//     //     "aditi": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }, { direction: "from", text: "Its been very long since we have met. ", timestamp: "09:45:42" }],
//     //     "aditya23": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//     //     "anushka": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//     //     "varun": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//     //     "aditya": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//     //     "hritik": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//     //     "shraddha": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//     //     "akshay": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//     //     "priyanka": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//     //     "tiger": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//     //     "rohit": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//     // },
//     "aditi": {
//         "testUser": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//         "aditya23": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//         "anushka": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//         "varun": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//         "aditya": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//         "hritik": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//         "shraddha": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//         "akshay": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//         "priyanka": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//         "tiger": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//         "rohit": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//     },
//     "aditya23": {
//         "aditi": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//         "testUser": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//         "anushka": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//         "varun": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//         "aditya": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//         "hritik": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//         "shraddha": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//         "akshay": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//         "priyanka": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//         "tiger": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//         "rohit": [{ direction: "to", text: "Hi, How are you", timestamp: "09:35:36 AM" }, { direction: "from", text: "I am good. How are you?", timestamp: "09:36:42 AM" }, { direction: "to", text: "I am good too. What are you doing these days", timestamp: "09:36:45 AM" }],
//     }
// }

const messages = 
{
    "testUser": {
        "aditi": [
            {
                "direction": "to",
                "text": "Hi, How are you?",
                "timestamp": "09:35:36",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days?",
                "timestamp": "09:36:45",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "It's been very long since we have met.",
                "timestamp": "09:45:42",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Yes, we should catch up soon!",
                "timestamp": "10:01:00",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Sure, let me know when you are free.",
                "timestamp": "10:05:15",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "How about this weekend?",
                "timestamp": "10:15:30",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Perfect! Let's plan it out.",
                "timestamp": "10:20:05",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I will text you the details.",
                "timestamp": "10:22:50",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Sounds good. See you soon!",
                "timestamp": "10:30:00",
                "read": "read"
            }
        ],
        "aditya23": [
            {
                "direction": "to",
                "text": "Hi Aditya, what's up?",
                "timestamp": "11:15:12",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Hey! Not much, just working. You?",
                "timestamp": "11:16:05",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Same here, caught up with deadlines.",
                "timestamp": "11:17:22",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I know the feeling! Let's grab coffee soon.",
                "timestamp": "11:20:00",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Sure, let's plan for next week.",
                "timestamp": "11:25:18",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Cool. I'll check my schedule.",
                "timestamp": "11:30:05",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "By the way, did you finish that project?",
                "timestamp": "11:45:50",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Yes, finally! It was a tough one.",
                "timestamp": "11:50:35",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Great to hear that. Congrats!",
                "timestamp": "12:00:10",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Thanks! Catch you later.",
                "timestamp": "12:15:25",
                "read": "read"
            }
        ],
        "anushka": [
            {
                "direction": "to",
                "text": "Hey Anushka! Long time no see.",
                "timestamp": "09:00:12",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Yeah, it's been ages. How have you been?",
                "timestamp": "09:05:45",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Busy as usual, you?",
                "timestamp": "09:10:22",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Same here. We should meet up soon!",
                "timestamp": "09:15:00",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Absolutely. Let's plan something.",
                "timestamp": "09:20:18",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I'll talk to others as well.",
                "timestamp": "09:25:05",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Great! Looking forward to it.",
                "timestamp": "09:30:10",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Same here. Let's finalize the date soon.",
                "timestamp": "09:40:35",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Will do. Take care till then.",
                "timestamp": "09:45:22",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "You too. Bye!",
                "timestamp": "09:50:00",
                "read": "unread"
            }
        ],
        "varun": [
            {
                "direction": "to",
                "text": "Hi Varun, how's work going?",
                "timestamp": "10:05:30",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Hey! It's hectic but manageable. You?",
                "timestamp": "10:10:10",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Same here. How's the new project?",
                "timestamp": "10:15:22",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Challenging but exciting. Loving it so far.",
                "timestamp": "10:20:15",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Good to hear. Let's catch up soon.",
                "timestamp": "10:25:18",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Sure, let's plan for a weekend.",
                "timestamp": "10:30:05",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Perfect. I'll text you later.",
                "timestamp": "10:35:50",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Alright. Take care!",
                "timestamp": "10:40:35",
                "read": "read"
            }
        ],
        "aditya": [
            {
                "direction": "to",
                "text": "Hey Aditya! How's life?",
                "timestamp": "08:30:15",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Hi! Life is good. How about you?",
                "timestamp": "08:32:45",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I'm doing well. Are you free this evening?",
                "timestamp": "08:35:12",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Not really, got some work. What's up?",
                "timestamp": "08:40:00",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Wanted to discuss our new project.",
                "timestamp": "08:42:18",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Let's connect tomorrow morning instead?",
                "timestamp": "08:45:35",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Sure, tomorrow works for me.",
                "timestamp": "08:50:00",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Cool. Let's sync up at 10.",
                "timestamp": "08:55:22",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Perfect. See you then.",
                "timestamp": "09:00:00",
                "read": "unread"
            }
        ],
        "shraddha": [
            {
                "direction": "to",
                "text": "Hey Shraddha! Did you watch the game?",
                "timestamp": "19:10:30",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Hi! Yes, it was amazing. What a finish!",
                "timestamp": "19:15:00",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I know, right? That last goal was crazy.",
                "timestamp": "19:20:10",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Absolutely. It kept me on the edge of my seat!",
                "timestamp": "19:25:45",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "We should plan a watch party for the next match.",
                "timestamp": "19:30:00",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Totally. Count me in.",
                "timestamp": "19:35:12",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Great! I'll coordinate with everyone.",
                "timestamp": "19:40:22",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Perfect. Looking forward to it.",
                "timestamp": "19:45:00",
                "read": "unread"
            }
        ],
        "hritik": [
            {
                "direction": "to",
                "text": "Hey Hritik, how's your health now?",
                "timestamp": "10:10:15",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Much better now. Thanks for asking.",
                "timestamp": "10:12:30",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Good to hear. Take it easy for a while.",
                "timestamp": "10:15:45",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Yes, I will. How's work going for you?",
                "timestamp": "10:20:00",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "It's busy but manageable.",
                "timestamp": "10:25:10",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Great. Let me know if you need any help.",
                "timestamp": "10:30:00",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Thanks! I will.",
                "timestamp": "10:35:20",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Take care and stay in touch.",
                "timestamp": "10:40:00",
                "read": "unread"
            }
        ],
        "akshay": [
            {
                "direction": "to",
                "text": "Akshay, did you check the new updates?",
                "timestamp": "11:05:00",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Hey! Yes, I did. They're pretty cool.",
                "timestamp": "11:10:15",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I agree. Let me know your thoughts.",
                "timestamp": "11:15:22",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I think it's a step in the right direction.",
                "timestamp": "11:20:30",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "True. Are you joining the meeting later?",
                "timestamp": "11:25:45",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Yes, I'll be there.",
                "timestamp": "11:30:00",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Cool. See you in the call.",
                "timestamp": "11:35:00",
                "read": "read"
            }
        ],
        "priyanka": [
            {
                "direction": "to",
                "text": "Priyanka, have you submitted the report?",
                "timestamp": "15:30:00",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Hey! Not yet. I'm still working on it.",
                "timestamp": "15:35:15",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Let me know if you need any help.",
                "timestamp": "15:40:20",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Thanks, I will. It's almost done.",
                "timestamp": "15:45:00",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Great. Make sure to submit it by evening.",
                "timestamp": "15:50:10",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Will do. Thanks for the reminder.",
                "timestamp": "15:55:00",
                "read": "unread"
            }
        ],
        "tiger": [
            {
                "direction": "to",
                "text": "Tiger, let's go for a run tomorrow morning.",
                "timestamp": "06:00:00",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Sure. What time?",
                "timestamp": "06:05:10",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Let's meet at 6:30.",
                "timestamp": "06:10:20",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Sounds good. See you then.",
                "timestamp": "06:15:00",
                "read": "read"
            }
        ],
        "rohit": [
            {
                "direction": "to",
                "text": "Rohit, did you see the new movie?",
                "timestamp": "20:00:00",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "Not yet. Is it good?",
                "timestamp": "20:05:10",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "Yes, it's a must-watch. You should go this weekend.",
                "timestamp": "20:10:30",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I'll book tickets for Saturday. Thanks for the recommendation.",
                "timestamp": "20:15:00",
                "read": "unread"
            }
        ]
    },
    "aditi": {
        "testUser": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ],
        "aditya23": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ],
        "anushka": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ],
        "varun": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ],
        "aditya": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ],
        "hritik": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ],
        "shraddha": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ],
        "akshay": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ],
        "priyanka": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ],
        "tiger": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ],
        "rohit": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ]
    },
    "aditya23": {
        "aditi": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ],
        "testUser": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ],
        "anushka": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ],
        "varun": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ],
        "aditya": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ],
        "hritik": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ],
        "shraddha": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ],
        "akshay": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ],
        "priyanka": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ],
        "tiger": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ],
        "rohit": [
            {
                "direction": "to",
                "text": "Hi, How are you",
                "timestamp": "09:35:36 AM",
                "read": "unread"
            },
            {
                "direction": "from",
                "text": "I am good. How are you?",
                "timestamp": "09:36:42 AM",
                "read": "unread"
            },
            {
                "direction": "to",
                "text": "I am good too. What are you doing these days",
                "timestamp": "09:36:45 AM",
                "read": "unread"
            }
        ]
    }
}

export default messages;