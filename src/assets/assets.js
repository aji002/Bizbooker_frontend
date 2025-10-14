import logo from './logo.svg'
import onlineApp from './onlineApp.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import profile from './profile.png'
import clinic from './clinic.jpg'
import consulting from './consulting.jpg'
import homeservice from './homeservice.jpg'
import salon from './salon.jpg'
import trainer from './trainer.webp'
import tutor from './tutor.jpg'

export const assets = {
    logo,
    onlineApp,
    googlePlay,
    appStore,
    profile
}

export const categoryData = [
    {
        category:'Clinic',
        image:clinic
    },
     {
        category:'Consultation',
        image:consulting
    },
     {
        category:'Home services',
        image:homeservice
    },
     {
        category:'Salons',
        image:salon
    },
     {
        category:'Trainers',
        image:trainer
    },
     {
        category:'Tutor',
        image:tutor
    }
]


export const dummyfacilitiesData = [
    { "name": "Advanced machines", "facility_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9i8mxvzn9KHNcJ1xGWuHoU_hvsMi6dVJFVQ&s", },
    { "name": "Good Docters", "facility_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCYltXXN8cJXB1U82iKPWlSMtkkInIcju_Q&s", },
    { "name": "Wellness", "facility_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpiii7FO7hmV_q3Zffadd_i4C1KUOh_QIwRA&s", },
    { "name": "Peacefull", "facility_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA6903cPVpMVXjfLRRsVX4J6RwCNvAbgQ_w&s", },
    { "name": "Clean", "facility_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbKYk4PU85uIhTGxXmBF5_s8VP7EzwtPqcQ&s", },
    { "name": "Well trained workers", "facility_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStor9vEAXB_4QZjTmJnggJ1H85KlvuX2ZsQw&s", },
    { "name": "In-Field Work", "facility_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRrq4TT7IGZV2s7baMV-pZLAQq4foOOjxy9g&s", },
    { "name": "Toolkits / Workstation", "facility_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_F1Jz6opxzABLaUuoe_0voZggJwzM7cunFA&s", },
    { "name": "Safety Gear", "facility_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TLgfJ2n1ihDm6DbyiEjSokaU-ARM9aey0g&s", },
    { "name": "Bookshelves / Legal Docs", "facility_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU5bkSThtmL6G5flMfl_ie1LlW6tjBwrdGaQ&s", },
    { "name": "Aromatherapy Setup", "facility_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjjruq8jY-0_U1w-hmnKVNZ41ZXG3rNJipmQ&s", },
    { "name": "Sterilization Area / Equipment", "facility_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxk1yX5E9MZIW-2lIhm-dXpGdw-9teqRASA&s", },
    { "name": "Makeup Area / Mirror Booths", "facility_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JampIHrml_g9DNFFu18yRcLbDmDL7NB-HQ&s", }
    
]

export const dummyShopsData = [
    {
        "_id": "324544",
        "id": 324544,
        "title": " Glamour Touch Salon",
        "category":" Beauty & Salons",
        "details": " A modern hair and beauty salon offering haircuts, spa, bridal makeup, and grooming services.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmi3uaAVehc4uIVmQgo3m1hGqx0F7FCo1oug&s",
        "facilities": dummyfacilitiesData,
        "location": "Kochi, Kerala",
        "vote_average": 6.4,
        "availability":"10:00 AM - 7:00 PM",
        "contact":"9453786345",
    },
    {
        "_id": "1232546",
        "id": 1232546,
        "title": "SmileBright Dental Care",
        "category":" Dental Clinic",
        "details": " Family-friendly dental clinic offering cosmetic dentistry, implants, and regular check-ups.",
        "image": "https://plus.unsplash.com/premium_photo-1663088767412-b10c8dc27ad1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRlbnRpc3R8ZW58MHx8MHx8fDA%3D",
        "facilities": dummyfacilitiesData,
        "location": " Bengaluru, Karnataka",
        "vote_average": 6.4,
        "availability":"10:00 AM - 7:00 PM",
        "contact":"9453786345",
    },
    {
        "_id": "552524",
        "id": 552524,
        "title": " LegalEase Law Consultancy",
        "category":" Law & Consultation",
        "details": " Expert legal services in family law, property disputes, and business contracts.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8XUkrj3BzF7clsEfdp3WwM1qheBwguqlOZg&s",
        "facilities": dummyfacilitiesData,
        "location": " Delhi, NCR",
        "vote_average": 6.4,
        "availability":"10:00 AM - 7:00 PM",
        "contact":"9453786345",
    },
    {
        "_id": "668489",
        "id": 668489,
        "title": " Rejuvenate Spa & Wellness",
        "category":" Spa & Salons",
        "details": " Luxury spa for massage therapy, aromatherapy, and rejuvenation packages",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUOVsFwKFpn-OmB4NXBDyqSDf3x_seUucptbJyeEkgzDLcjW4vFLkw61_Ic-JVWznwNGk&usqp=CAU",
        "facilities": dummyfacilitiesData,
        "location": "Kochi, Kerala",
        "vote_average": 6.4,
        "availability":"10:00 AM - 7:00 PM",
        "contact":"9453786345",
    },
    {
        "_id": "950387",
        "id": 950387,
        "title": " QuickFix Electricians",
        "category":" Home Services",
        "details": " Verified electricians for home repairs, rewiring, and emergency service.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JgH1xzXAXk3EZhZxSWShGL8LkD52CDcjaQ&s",
        "facilities": dummyfacilitiesData,
        "location": "Kochi, Kerala",
        "vote_average": 6.4,
        "availability":"10:00 AM - 7:00 PM",
        "contact":"9453786345",
    }
]

export const dummyDateTimeData = {
    "2025-07-24": [
        { "time": "2025-07-24T01:00:00.000Z", "dataId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T03:00:00.000Z", "dataId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T05:00:00.000Z", "dataId": "68395b407f6329be2bb45bd3" }
    ],
    "2025-07-25": [
        { "time": "2025-07-25T01:00:00.000Z", "dataId": "68395b407f6329be2bb45bd4" },
        { "time": "2025-07-25T03:00:00.000Z", "dataId": "68395b407f6329be2bb45bd5" },
        { "time": "2025-07-25T05:00:00.000Z", "dataId": "68395b407f6329be2bb45bd6" }
    ],
    "2025-07-26": [
        { "time": "2025-07-26T01:00:00.000Z", "dataId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "dataId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "dataId": "68395b407f6329be2bb45bd9" }
    ],
    "2025-07-27": [
        { "time": "2025-07-27T01:00:00.000Z", "dataId": "68395b407f6329be2bb45bda" },
        { "time": "2025-07-27T03:00:00.000Z", "dataId": "68395b407f6329be2bb45bdb" },
        { "time": "2025-07-27T05:00:00.000Z", "dataId": "68395b407f6329be2bb45bdc" }
    ]
}

export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 1517,
    "totalUser": 5,
    "activedatas": [
        {
            "_id": "68352363e96d99513e4221a4",
            "shop": dummyShopsData[0],
            "dataDateTime": "2025-06-30T02:30:00.000Z",
            "dataPrice": 59,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "shop": dummyShopsData[1],
            "dataDateTime": "2025-06-30T15:30:00.000Z",
            "dataPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "shop": dummyShopsData[2],
            "dataDateTime": "2025-06-30T03:30:00.000Z",
            "dataPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "shop": dummyShopsData[3],
            "dataDateTime": "2025-07-15T16:30:00.000Z",
            "dataPrice": 81,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "shop": dummyShopsData[4],
            "dataDateTime": "2025-06-05T15:30:00.000Z",
            "dataPrice": 49,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "shop": dummyShopsData[5],
            "dataDateTime": "2025-06-20T16:00:00.000Z",
            "dataPrice": 79,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "data": {
            _id: "68352363e96d99513e4221a4",
            shop: dummyShopsData[0],
            dataDateTime: "2025-06-30T02:30:00.000Z",
            dataPrice: 59,
        },
        "amount": 98,
        "bookedSlots": ["D1"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "data": {
            _id: "68352363e96d99513e4221a4",
            shop: dummyShopsData[1],
            dataDateTime: "2025-06-30T02:30:00.000Z",
            dataPrice: 59,
        },
        "amount": 49,
        "bookedSlots": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "data": {
            _id: "68352363e96d99513e4221a4",
            shop: dummyShopsData[2],
            dataDateTime: "2025-06-30T02:30:00.000Z",
            dataPrice: 59,
        },
        "amount": 147,
        "bookedSlots": [""],
        "isPaid": true,
    },
]