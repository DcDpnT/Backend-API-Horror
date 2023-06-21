const express = require ("express");

const port = 4242;

const app = express();
app.use(express.static('assets'));
const data = [
    {
        id: 1,
        name: "SPIRITS",
        imgsrc: "/src/assets/Spirits.png",
    },
    {
        id: 2,
        name: "Count Dracula",
        imgsrc: "src/assets/Vampiries.png",
    },
    {
        id: 3,
        name: "Vlad Tepes",
        imgsrc: "https://cdn.britannica.com/38/182638-050-43D922CC/Vlad-III.jpg",
        fonction: "Prince de Valachie",
    },
    {
        id: 4,
        name: "REVENANTS",
        imgsrc: "/src/assets/Revenants.png",
    },
    {
        id: 5,
        name: "Grimoire",
        imgsrc: "/src/assets/Grimoire.png",
        prix: 1300,
    },
    {
        id: 6,
        name: "amulette émeraude",
        imgsrc: "/src/assets/amuletteEmeraude.png",
        prix: 2600,
    },
    {
        id: 7,
        name: "scarabée egyptien",
        imgsrc: "/src/assets/ancient_egyptian_scarab.png",
        prix: 800,
    },
    {
        id: 8,
        name: "balles en argent au détail",
        imgsrc: "https://i.ebayimg.com/images/g/qM8AAOSwgMdkVRUK/s-l1200.webp",
        prix: 10,
    },
    {
        id: 9,
        name: "sauge blanche Amérindiene",
        imgsrc: "https://i.etsystatic.com/36349093/r/il/afdb89/4012290846/il_1588xN.4012290846_qlr0.jpg",
    },
    {
        id: 10,
        name: "Coffret XIXe Chasse Vampires",
        imgsrc: "https://www.parismatch.com/lmnr/f/webp/r/1440,960,FFFFFF,forcex,center-middle/img/var/pm/public/styles/paysage/public/media/image/2022/07/04/12/une-mallette-de-chasseur-de-vampires-vendue-aux-encheres.jpg?VersionId=cyjYFENytWhFPz_vkINtnK5ILubH_5W8"
    },
    {
        id: 11,
        name: "Poster"
    }
];
app.get("/", (req, res) => {
    res.send('je suis sur la route "/" ');
});
app.get("/nhelsheitandata", (req, res) => {
    res.send(data);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});


