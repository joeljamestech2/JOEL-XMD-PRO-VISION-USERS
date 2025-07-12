const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// codes by old coder lord joel
const users =       [
    {
        "username": "joelXtec",
        "wa_number": "+255781144539",
        "session_id": ""
    },
    {
        "username": "mr front",
        "wa_number": "+923156864074",
        "session_id": "JOEL-XMD~8MoGiCRL#6TUKqM2Q1Edokax4V00tDe30zAeafA8MaYAZ6X_tf8E"
    },
    {
        "username": "alone",
        "wa_number": "+92 318 9969873",
        "session_id": "JOEL-XMD~ZEhjgSCK#mg1Lx0MMygMJkLKCQLcmpt54mOpGR_GtR50Tza8xvFk"
    },
    {
        "username": "lover boi",
        "wa_number":  "+255695508791",
        "session_id": "JOEL-XMD~cAhFzTiC#mIhYe9TNtMI-kUlt8ORcnlqelocgzOLmtUUz1a-k8GI"
    },
    {
        "username": "alein",
        "wa_number": "+92 316 0695963",
        "session_id": "JOEL-XMD~sUJWnCTL#wTocGbY3DKCEx_pqJfrafeW63b-phiaS_ePIF-8sIdk"
    },
    {
        "username": "user6",
        "wa_number": "+255700000006",
        "session_id": "session-6"
    },
    {
        "username": "user7",
        "wa_number": "+255700000007",
        "session_id": "session-7"
    },
    {
        "username": "user8",
        "wa_number": "+255700000008",
        "session_id": "session-8"
    },
    {
        "username": "user9",
        "wa_number": "+255700000009",
        "session_id": "session-9"
    },
    {
        "username": "user10",
        "wa_number": "+255700000010",
        "session_id": "session-10"
    },
    {
        "username": "user11",
        "wa_number": "+255700000011",
        "session_id": "session-11"
    },
    {
        "username": "user12",
        "wa_number": "+255700000012",
        "session_id": "session-12"
    },
    {
        "username": "user13",
        "wa_number": "+255700000013",
        "session_id": "session-13"
    },
    {
        "username": "user14",
        "wa_number": "+255700000014",
        "session_id": "session-14"
    },
    {
        "username": "user15",
        "wa_number": "+255700000015",
        "session_id": "session-15"
    },
    {
        "username": "user16",
        "wa_number": "+255700000016",
        "session_id": "session-16"
    },
    {
        "username": "user17",
        "wa_number": "+255700000017",
        "session_id": "session-17"
    },
    {
        "username": "user18",
        "wa_number": "+255700000018",
        "session_id": "session-18"
    },
    {
        "username": "user19",
        "wa_number": "+255700000019",
        "session_id": "session-19"
    },
    {
        "username": "user20",
        "wa_number": "+255700000020",
        "session_id": "session-20"
    },
    {
        "username": "user21",
        "wa_number": "+255700000021",
        "session_id": "session-21"
    },
    {
        "username": "user22",
        "wa_number": "+255700000022",
        "session_id": "session-22"
    },
    {
        "username": "user23",
        "wa_number": "+255700000023",
        "session_id": "session-23"
    },
    {
        "username": "user24",
        "wa_number": "+255700000024",
        "session_id": "session-24"
    },
    {
        "username": "user25",
        "wa_number": "+255700000025",
        "session_id": "session-25"
    },
    {
        "username": "user26",
        "wa_number": "+255700000026",
        "session_id": "session-26"
    },
    {
        "username": "user27",
        "wa_number": "+255700000027",
        "session_id": "session-27"
    },
    {
        "username": "user28",
        "wa_number": "+255700000028",
        "session_id": "session-28"
    },
    {
        "username": "user29",
        "wa_number": "+255700000029",
        "session_id": "session-29"
    },
    {
        "username": "user30",
        "wa_number": "+255700000030",
        "session_id": "session-30"
    },
    {
        "username": "user31",
        "wa_number": "+255700000031",
        "session_id": "session-31"
    },
    {
        "username": "user32",
        "wa_number": "+255700000032",
        "session_id": "session-32"
    },
    {
        "username": "user33",
        "wa_number": "+255700000033",
        "session_id": "session-33"
    },
    {
        "username": "user34",
        "wa_number": "+255700000034",
        "session_id": "session-34"
    },
    {
        "username": "user35",
        "wa_number": "+255700000035",
        "session_id": "session-35"
    },
    {
        "username": "user36",
        "wa_number": "+255700000036",
        "session_id": "session-36"
    },
    {
        "username": "user37",
        "wa_number": "+255700000037",
        "session_id": "session-37"
    },
    {
        "username": "user38",
        "wa_number": "+255700000038",
        "session_id": "session-38"
    },
    {
        "username": "user39",
        "wa_number": "+255700000039",
        "session_id": "session-39"
    },
    {
        "username": "user40",
        "wa_number": "+255700000040",
        "session_id": "session-40"
    },
    {
        "username": "user41",
        "wa_number": "+255700000041",
        "session_id": "session-41"
    },
    {
        "username": "user42",
        "wa_number": "+255700000042",
        "session_id": "session-42"
    },
    {
        "username": "user43",
        "wa_number": "+255700000043",
        "session_id": "session-43"
    },
    {
        "username": "user44",
        "wa_number": "+255700000044",
        "session_id": "session-44"
    },
    {
        "username": "user45",
        "wa_number": "+255700000045",
        "session_id": "session-45"
    },
    {
        "username": "user46",
        "wa_number": "+255700000046",
        "session_id": "session-46"
    },
    {
        "username": "user47",
        "wa_number": "+255700000047",
        "session_id": "session-47"
    },
    {
        "username": "user48",
        "wa_number": "+255700000048",
        "session_id": "session-48"
    },
    {
        "username": "user49",
        "wa_number": "+255700000049",
        "session_id": "session-49"
    },
    {
        "username": "user50",
        "wa_number": "+255700000050",
        "session_id": "session-50"
    },
    {
        "username": "user51",
        "wa_number": "+255700000051",
        "session_id": "session-51"
    },
    {
        "username": "user52",
        "wa_number": "+255700000052",
        "session_id": "session-52"
    },
    {
        "username": "user53",
        "wa_number": "+255700000053",
        "session_id": "session-53"
    },
    {
        "username": "user54",
        "wa_number": "+255700000054",
        "session_id": "session-54"
    },
    {
        "username": "user55",
        "wa_number": "+255700000055",
        "session_id": "session-55"
    },
    {
        "username": "user56",
        "wa_number": "+255700000056",
        "session_id": "session-56"
    },
    {
        "username": "user57",
        "wa_number": "+255700000057",
        "session_id": "session-57"
    },
    {
        "username": "user58",
        "wa_number": "+255700000058",
        "session_id": "session-58"
    },
    {
        "username": "user59",
        "wa_number": "+255700000059",
        "session_id": "session-59"
    },
    {
        "username": "user60",
        "wa_number": "+255700000060",
        "session_id": "session-60"
    },
    {
        "username": "user61",
        "wa_number": "+255700000061",
        "session_id": "session-61"
    },
    {
        "username": "user62",
        "wa_number": "+255700000062",
        "session_id": "session-62"
    },
    {
        "username": "user63",
        "wa_number": "+255700000063",
        "session_id": "session-63"
    },
    {
        "username": "user64",
        "wa_number": "+255700000064",
        "session_id": "session-64"
    },
    {
        "username": "user65",
        "wa_number": "+255700000065",
        "session_id": "session-65"
    },
    {
        "username": "user66",
        "wa_number": "+255700000066",
        "session_id": "session-66"
    },
    {
        "username": "user67",
        "wa_number": "+255700000067",
        "session_id": "session-67"
    },
    {
        "username": "user68",
        "wa_number": "+255700000068",
        "session_id": "session-68"
    },
    {
        "username": "user69",
        "wa_number": "+255700000069",
        "session_id": "session-69"
    },
    {
        "username": "user70",
        "wa_number": "+255700000070",
        "session_id": "session-70"
    },
    {
        "username": "user71",
        "wa_number": "+255700000071",
        "session_id": "session-71"
    },
    {
        "username": "user72",
        "wa_number": "+255700000072",
        "session_id": "session-72"
    },
    {
        "username": "user73",
        "wa_number": "+255700000073",
        "session_id": "session-73"
    },
    {
        "username": "user74",
        "wa_number": "+255700000074",
        "session_id": "session-74"
    },
    {
        "username": "user75",
        "wa_number": "+255700000075",
        "session_id": "session-75"
    },
    {
        "username": "user76",
        "wa_number": "+255700000076",
        "session_id": "session-76"
    },
    {
        "username": "user77",
        "wa_number": "+255700000077",
        "session_id": "session-77"
    },
    {
        "username": "user78",
        "wa_number": "+255700000078",
        "session_id": "session-78"
    },
    {
        "username": "user79",
        "wa_number": "+255700000079",
        "session_id": "session-79"
    },
    {
        "username": "user80",
        "wa_number": "+255700000080",
        "session_id": "session-80"
    },
    {
        "username": "user81",
        "wa_number": "+255700000081",
        "session_id": "session-81"
    },
    {
        "username": "user82",
        "wa_number": "+255700000082",
        "session_id": "session-82"
    },
    {
        "username": "user83",
        "wa_number": "+255700000083",
        "session_id": "session-83"
    },
    {
        "username": "user84",
        "wa_number": "+255700000084",
        "session_id": "session-84"
    },
    {
        "username": "user85",
        "wa_number": "+255700000085",
        "session_id": "session-85"
    },
    {
        "username": "user86",
        "wa_number": "+255700000086",
        "session_id": "session-86"
    },
    {
        "username": "user87",
        "wa_number": "+255700000087",
        "session_id": "session-87"
    },
    {
        "username": "user88",
        "wa_number": "+255700000088",
        "session_id": "session-88"
    },
    {
        "username": "user89",
        "wa_number": "+255700000089",
        "session_id": "session-89"
    },
    {
        "username": "user90",
        "wa_number": "+255700000090",
        "session_id": "session-90"
    },
    {
        "username": "user91",
        "wa_number": "+255700000091",
        "session_id": "session-91"
    },
    {
        "username": "user92",
        "wa_number": "+255700000092",
        "session_id": "session-92"
    },
    {
        "username": "user93",
        "wa_number": "+255700000093",
        "session_id": "session-93"
    },
    {
        "username": "user94",
        "wa_number": "+255700000094",
        "session_id": "session-94"
    },
    {
        "username": "user95",
        "wa_number": "+255700000095",
        "session_id": "session-95"
    },
    {
        "username": "user96",
        "wa_number": "+255700000096",
        "session_id": "session-96"
    },
    {
        "username": "user97",
        "wa_number": "+255700000097",
        "session_id": "session-97"
    },
    {
        "username": "user98",
        "wa_number": "+255700000098",
        "session_id": "session-98"
    },
    {
        "username": "user99",
        "wa_number": "+255700000099",
        "session_id": "session-99"
    },
    {
        "username": "user100",
        "wa_number": "+255700000100",
        "session_id": "session-100"
    }
];

// Root Endpoint: Send formatted JSON
app.get('/', (req, res) => {
    const data = {
        title: 'joel xmd users sessions',
        bot_name: 'xmd bot',
        creator: 'joeljamestech',
        channel_link: 'https://whatsapp.com/channel/0029Vak2PevK0IBh2pKJPp2K',
        channel_jid: '120363317462952356@newsletter',
        total_users: users
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, null, 4));
});

// Start server
app.listen(PORT, () => {
    console.log(`joel xmd server running on port ${PORT}`);
});
