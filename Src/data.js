 /*    
       <script src="./Src/data.js"></script>
        <script src="./Src/models.js"></script>
        <script src="./Src/functions.js"></script>
        <script src="./Src/main.js"></script>  


*/
/*
const name = ["Asraful haqu", "mukul roy", "raju","roni","ritu","rishi",]
const roll = [1,2,3,4,5,6]
const reg = [11,22,33,44,55,66,]
const ban = [22,44,55,88,55,66,]
const eng = [77,22,55,44,55,77,]
const math = [25,88,55,44,55,77,]
const s = [22,22,55,44,55,77,]
const ss = [77,22,55,56,55,77,]
const reli = [77,22,55,44,82,77,]
*/
/*    **********************
const devs = [
    {
        name : "mukul roy", 
        age : 23, 
        skil: "ios devs", 
        location : "mirpur",
        isMarriaged: "true",
        Gender : "male",
    },
    {
        name : "roni", 
        age : 50, 
        skil: "ios devs", 
        location : "dhaka",
        isMarriaged: "true",
        Gender : "male",
    },
    {
        name : "nilu", 
        age : 80, 
        skil: "ios devs", 
        location : "dubaiy",
        isMarriaged: "true",
        Gender : "female",
    },
    {
        name : "rishi", 
        age : 23, 
        skil: "ios devs", 
        location : "thakurgaon",
        isMarriaged: "true",
        Gender : "male",
    },
    {
        name : "ono", 
        age : 23, 
        skil: "ios devs", 
        location : "mirpur",
        isMarriaged: "true",
        Gender : "female",
    },
    {
        name : "roni", 
        age : 23, 
        skil: "ios devs", 
        location : "mirpur",
        isMarriaged: "true",
        Gender : "male",
    },
    {
        name : "mukul roy-2", 
        age : 23, 
        skil: "ios devs", 
        location : "mirpur",
        isMarriaged: "true",
        Gender : "male",
    },
];

console.log(devs)
 ****************************
*/
/*/
ব্লাড ডোনার ডেটা ডিজাইন
১০ জন ব্লাড ডোনারের ডেটা নিয়ে একটি ডেটাবেইজ ডিজাইন করুন যেখানে তাদের নিম্ন উক্ত ডেটা গুলা থাকবে এবং সেখানে আপনারা কিছু ফাংসন তৈরি করার মাধ্যমে নিচের ফিচার গুলা তৈরি করুন
ফিচারস লিস্ট
ব্লাডগ্রুপ অনুযায়ী ডোনার সার্চ
ইউজার সার্চ করার সময় পূর্বে রক্ত দিয়েছেন ৪ মাস হয়েছে এমন ইউজার ডাটা এবং সামনে ১০ দিনের মাঝে রক্ত দিতে পারবেন এমন ডোনাদের ডাটা প্রিন্ট করুন
ডোনারদের ডাটা প্রথমে যারা রক্ত দিতে প্রস্তুত এবং পরে ধারাবাহিক ভাবে লিস্টে দেখান
ডোনারদের ডাটা
নাম
বয়স
ঠিকানা
ফোন
রক্তের গ্রপ
বিবাহিত কি না
সর্বশেষ রক্ত দিয়েছেন কতদিন হল
পূর্বের রক্তদানের ইতিহাস
const doner = [
    {
        name :"mukul",
        age : 24,
        location : "thakurgaon",
        phone : "01761455391" ,
        bloodGroup :" O+",
        ismarrid : true,
        lastBloodDonation : 300 ,
        lastDonatinHistory : [
            {
                name : "rishi",
                age :"22",
                problem : "road accedent",
                lastTime : "2 years",
             },
             {
                name : "rishi-2",
                age :"32",
                problem : "personal problem",
                lastTime : "1 years",
             },

        ]


    }
]
ব্লাড ডোনার ডেটা ডিজাইন
১০ জন ব্লাড ডোনারের ডেটা নিয়ে একটি ডেটাবেইজ ডিজাইন করুন যেখানে তাদের নিম্ন উক্ত ডেটা গুলা থাকবে এবং সেখানে আপনারা কিছু ফাংসন তৈরি করার মাধ্যমে নিচের ফিচার গুলা তৈরি করুন
ফিচারস লিস্ট
ব্লাডগ্রুপ অনুযায়ী ডোনার সার্চ
ইউজার সার্চ করার সময় পূর্বে রক্ত দিয়েছেন ৪ মাস হয়েছে এমন ইউজার ডাটা এবং সামনে ১০ দিনের মাঝে রক্ত দিতে পারবেন এমন ডোনাদের ডাটা প্রিন্ট করুন
ডোনারদের ডাটা প্রথমে যারা রক্ত দিতে প্রস্তুত এবং পরে ধারাবাহিক ভাবে লিস্টে দেখান
ডোনারদের ডাটা
নাম
বয়স
ঠিকানা
ফোন
রক্তের গ্রপ
বিবাহিত কি না
সর্বশেষ রক্ত দিয়েছেন কতদিন হল
পূর্বের রক্তদানের ইতিহাস
*/
const bloodDonors = [
    {
        name: "Abu Sayed khan",
        age: 25,
        Location: "Madaripur",
        phone: "01601064020",
        bloodGroup: "B+",
        marriedStates: true,
        lastDonation: 120,

        History_of_previous_blood_donation: [
            {
                how_many_times: 1,
                RecipientName: "Sovan",
                mobile: "01775486458"
            },
            
            {
                how_many_times: 1,
                RecipientName: "Sovan",
                mobile: "01775486458"
            },
        ],
        gender: "Male"
    },

    {
        name: "Hossain Ahammad",
        age: 30,
        Location: "Khulna",
        phone: "01678788020",
        bloodGroup: "A+",
        marriedStates: true,
        lastDonation: 111,

        History_of_previous_blood_donation: [
            {
                how_many_times: 1,
                RecipientName: "Aben Hossain",
                mobile: "01775778454"
            }
        ],
        gender: "Male"
    },

    {
        name: "Kalimi Sultan",
        age: 21,
        Location: "Mirpur",
        phone: "01678788020",
        bloodGroup: "O+",
        marriedStates: true,
        lastDonation: 111,

        History_of_previous_blood_donation: [
            {
                how_many_times: 1,
                RecipientName: "Abu Jehad halim",
                mobile: "01775755789"
            }
        ],
        gender: "Male"
    },

    {
        name: "Mamun Mirdha",
        age: 51,
        Location: "Barishal",
        phone: "01678764875",
        bloodGroup: "O-",
        marriedStates: true,
        lastDonation: 131,

        History_of_previous_blood_donation: [
            {
                how_many_times: 1,
                RecipientName: "Anisur Rahman",
                mobile: "01775764956"
            }
        ],
        gender: "Male"
    },

    {
        name: "Arefin Rahman",
        age: 18,
        Location: "Noakhali",
        phone: "01678755864",
        bloodGroup: "A",
        marriedStates: false,
        lastDonation: 80,

        History_of_previous_blood_donation: [
            {
                how_many_times: 1,
                RecipientName: "Anukul Mahato",
                mobile: "01755864956"
            }
        ],
        gender: "Male"
    },

    {
        name: "Md kawsar Ali",
        age: 23,
        Location: "Uttora",
        phone: "01678754744",
        bloodGroup: "B+",
        marriedStates: false,
        lastDonation: 180,

        History_of_previous_blood_donation: [
            {
                how_many_times: 1,
                RecipientName: "Asif",
                mobile: "01755474456"
            }
        ],
        gender: "Male"
    },

    {
        name: "OSman Goni",
        age: 34,
        Location: "Badda",
        phone: "01678665744",
        bloodGroup: "O+",
        marriedStates: true,
        lastDonation: 120,

        History_of_previous_blood_donation: [
            {
                how_many_times: 1,
                RecipientName: "Fahad jamil",
                mobile: "01755476656"
            }
        ],
        gender: "Male"
    },

    {
        name: "Miraz",
        age: 28,
        Location: "Gazipur",
        phone: "01678699874",
        bloodGroup: "O+",
        marriedStates: true,
        lastDonation: 90,

        History_of_previous_blood_donation: [
            {
                how_many_times: 1,
                RecipientName: "Habib Albi",
                mobile: "01755479987"
            }
        ],
        gender: "Male"
    },

    {
        name: "Mohammad Ali",
        age: 30,
        Location: "Dinajpur",
        phone: "01678699774",
        bloodGroup: "O-",
        marriedStates: true,
        lastDonation: 112,

        History_of_previous_blood_donation: [
            {
                how_many_times: 1,
                RecipientName: "Helal",
                mobile: "01755479774"
            }
        ],
        gender: "Male"
    },

    {
        name: "Sami sultan",
        age: 16,
        Location: "Rongpur",
        phone: "01678698888",
        bloodGroup: "A+",
        marriedStates: false,
        lastDonation: 100,

        History_of_previous_blood_donation: [
            {
                how_many_times: 1,
                RecipientName: "Sabbir",
                mobile: "01758888774"
            }
        ],
        gender: "Male"
    },
];
