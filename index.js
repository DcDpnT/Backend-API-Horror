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
        histoire1: "Dracula Personnage célèbre de la fin du XIXème siècle, crée par l’écrivain Bram Stoker pour son roman du même nom, il s’agit certainement du Vampire le plus célèbre dans l’imaginaire collectif. Il est évident que l’écriture de son personnage est passionnante. Inspiré du Comte Vlad Tepes III de Valachie, dit l’empaleur, Dracula inspire l’effroi à quiconque croisera son regard. Même le professeur Abraham Van Helsing le craint, pourtant éminent médecin et homme de loi au courage sans faille. C’est une émouvante histoire. Mais si je vous disais que la croyance du mort se nourrissant du sang des vivants pour subsister date de bien avant le XIXème siècle? Peut-être pas les vampires tels que nous les connaissons, mais les archéologues sont tout à fait au courant de cette pratique des « enterrements Vampriques » datant au moins du 5ème siècle.",
        histoire2: "C’est un sujet sérieusement documenté. Les dîtes sépultures sont toutes similaires. Le corps, plus précisément le squelettes est exhumé avec une roche logé dans la bouche. Les scientifiques constatent également souvent une amputation de la langue. Le cas le plus récent est celui de la découverte d’un sépulcre en Italie, datant du 5ème siècle. En effet, les archéologues ont découvert le squelette d’un enfant d’environ 10 ans, une pierre logée dans la bouche. Découvert par l’archéologue et professeur David Soren, le sexe de l’enfant n’a pas pu être déterminé. Cette découverte a sensiblement troublé le chercheur, puisque exhumé dans un cimetière connu sous le nom de Nécropole de Bambini destiné aux tout-petits ou aux enfants mort né. Sa présence à cet endroit n’est pas explicable par l’archéologue et les fouilles en ce lieu ne sont toujours pas terminées. Si toutefois les noctambules vous effraient, nous pouvons vous proposer toutes sortes d’objets pour vous en protéger. Les créatures anthropophages sont peut-être une réalité, après tout, nos ancêtres étaient vraisemblablement plus attentif que nous… qui sait.",
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
        histoire1: "Le cas Vallecas Il s’agit à ce jour du seul cas de hantise dans une demeure qui soit reconnu par les forces de l’ordre de Madrid. Les événements dont furent témoins la famille Gutiérrez au 8, rue Luis Marin ne seront jamais expliqués. L’épicentre de cette violente histoire semble être la fille de Maximo Gutierrez, Estefania Lazaro Gutiérrez. Jeune lycéenne de 18 ans, tous les témoins affirment que les manifestations ont commencé après une séance de Ouija ayant mal tournée. S’adonnant souvent à cette pratique avec ses copines de classe, elle ne pouvait pas prévoir ce qu’il se passerai en ce mois de mars 1990. Jouant dans la cour de son lycée catholique avec ses amies, espérant prendre contact avec l’ex petit ami de l’une de ses camarades, la séance est soudainement interrompue par son professeur qui brise la planche de fortune fabriquée par Estefania et jette nerveusement le verre servant de goute ( objet servant à cibler les lettres) qui éclate sur l’asphalte.Peu de temps après, Estefania se plaignit auprès de ses parents que de grandes silhouettes sombres venaient la visiter. Les parents contactèrent le médecin de famille qui leur conseilla d’envoyer Estefania dans un centre de soin spécialisé. Malgré les crises de convulsions, ils ne trouvèrent rien, pas d’épilepsie ni aucune maladie. Finalement le 14 août 1991, alors qu’elle se trouvait à l’hôpital Gregorio Maranon, elle sombra dans un profond coma duquel elle ne reviendra jamais. Les médecins stupéfait ne comprennent pas et ne comprendront jamais.",
        histoire2: "Mais ce qui avait effrayé Estefania ne disparut pas avec elle. Cette fois c’est toute la famille qui en était témoins. Des silhouettes, des empreintes de mains aux dimensions improbables sur la literie, des coups qui résonnaient, des rires dans le couloir. S’en est trop pour Maximo Gutiérrez qui contacte les forces de l’ordre. Les policiers, ne prenant pas très au sérieux ce genre de requête vinrent sur les lieux la nuit du 27 novembre 1992 à 2h40 du matin. Ils firent stupéfait lorsque ils virent les parents Gutierrez mais aussi le petit frère et la soeur de Estefania devant la résidence, malgré la fraicheur automnale.L’inspecteur José Negri fit monter la famille dans la demeure, qui étaient des plus calmes. Ils ne tardèrent pas à remarquer une porte d’armoire s’ouvrant brutalement. Soupçonnant un stratagème, ils examinèrent soigneusement le meuble sans trouver d’explication. Une détonation retentit sur la terrasse. Le scepticisme des policiers commençait doucement à vaciller. Discutant et prenant des notes, une substance inconnu, tel de la vase commençait à apparaitre sur le napperon du petit guéridon qui supportait le téléphone. Dans la chambre où dormait Estefania, l’inspecteur Negri vit apparaitre trois griffures sur le papier peint.La conclusion du rapport de police veut la suivante: il y a un certain nombre de phénomènes en tous points inexplicables… Les Gutierrez finirent par vendre leur maison. Aucun phénomène ne fut jamais rapporté par leurs successeurs. Simplement une odeur étrange qui ne partait jamais",
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