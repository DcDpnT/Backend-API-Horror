const express = require ("express");

const port = 4242;

const app = express();
app.use(express.static('assets'));
const homeData = [
    {
        id: 1,
        name: "Lord Dracula",
        imgsrc: "/VampireSecondaire.png",
    },
    {
        id: 2,
        name: "Loups Garous",
        imgsrc: "/LoupsGarous.png",
    },
    {
        id: 3,
        name: "Le cas Vallecas",
        imgsrc: "/Spirits.png",
    },
    {
        id: 4,
        name: "Revenants",
        imgsrc: "/Revenants.png",
    },
];
  
const storiesData =[
    {
        id: 1,
        name: "Lord Dracula",
        imgsrc1: "/VampirePrincipal.png",
        imgsrc2: "/VampireSecondaire.png",
        imgsrc3: "/ChateauDracula.png",
        imgsrc4: "/VieilleFemmeVampire.png",
        URL: "https://www.youtube.com/watch?v=Jhmnvk4YMU8",
        histoire: "",
    },
    {
        id: 2,
        name: "Loups Garous",
        imgsrc1: "/LoupGarouPrincipal.png",
        imgsrc2: "/LoupsGarous.png",
        imgsrc3: "/LoupsGarousForet.png",
        imgsrc4: "/LoupsGarousCreatures.png",
        histoire:"",
    },
    {
        id: 3,
        name: "le cas Vallecas",
        imgsrc1: "/casVallecasPrincipal.png",
        imgsrc2: "/leCasVallecasSecondaire.png",
        imgsrc3: "/maisonHantée.png",
        imgsrc4: "/casVallecsEnfants.png",
        histoire: "",
    },
    {
        id: 4,

    },
];

const boutiqueData = [
    {
        id: 1,
        catégorie: "leCasVallecas",
        name: "Grimoire",
        imgsrc: "/assets/Grimoire.png",
        prix: 1300,
    },
    {
        id: 2,
        catégorie: "revenants",
        name: "amulette émeraude",
        imgsrc: "/amuletteEmeraude.png",
        prix: 2600,
    },
    {
        id: 3,
        catégorie: "revenants",
        name: "scarabée egyptien",
        imgsrc: "/assets/ancient_egyptian_scarab.png",
        prix: 800,
    },
    {
        id: 4,
        catégorie: "loupsGarous",
        name: "balles en argent au détail",
        imgsrc: "https://i.ebayimg.com/images/g/qM8AAOSwgMdkVRUK/s-l1200.webp",
        prix: 10,
    },
    {
        id: 5,
        catégorie: "lordDracula",
        name: "sauge blanche Amérindiene",
        imgsrc: "https://i.etsystatic.com/36349093/r/il/afdb89/4012290846/il_1588xN.4012290846_qlr0.jpg",
        price: 15,
    },
    {
        id: 6,
        catégorie: "lordDracula",
        name: "Coffret XIXe Chasse Vampires",
        imgsrc: "https://www.parismatch.com/lmnr/f/webp/r/1440,960,FFFFFF,forcex,center-middle/img/var/pm/public/styles/paysage/public/media/image/2022/07/04/12/une-mallette-de-chasseur-de-vampires-vendue-aux-encheres.jpg?VersionId=cyjYFENytWhFPz_vkINtnK5ILubH_5W8",
        price: 2000,
    },
    {
        id: 7,
        catégorie: "lordDracula",
        name: "Poster Chateau Dracula",
        imgsrc: "/ChateauDracula.png",
        price: 13,
    },
    {
        id: 8,
        name: "Poster Chat maléfique",
        imgsrc: "/ChatDiabolique.png",
        price: 13,
    },
    {
        id: 9,
        catégorie: "hauntedHouses",
        name: "Detecteur EMF",
        imgsrc: "https://www.spiritshack.co.uk/wp-content/uploads/black-k2-emf-meter-ghost-hunting-equipment-ghost-detector-paranormal-investigation.jpg",
        price: 500,
    },
    {
        id: 10,
        catégorie: "Spirits",
        name:"Amélia",
        imgsrc: "https://www.mindshadow.fr/wp-content/uploads/2014/07/amelia.jpg",
        price: 300,
    },
];

app.get("/", (req, res) => {
    res.send('je suis sur la route "/" ');
});

app.get("/home", (req, res) => {
    res.sendStatus(200).json(homeData);
});

app.get("/stories", (req, res) => {
    res.sendStatus(200).json(storiesData);
});

app.get("/boutique", (req, res) => {
    res.sendStatus(200).json(boutiqueData);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});


  // {
    //     id: 4,
    //     name: "Maison Hantée",
    //     imgsrc: "https://cdn.britannica.com/38/182638-050-43D922CC/Vlad-III.jpg",
    //     fonction: "Prince de Valachie",
    // },