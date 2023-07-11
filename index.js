const express = require("express");
const cors = require("cors");

const port = 4242;

const app = express();
app.use(cors("*"));
app.use(express.static("assets"));
const homeData = [
  {
    id: 1,
    name: "Count Dracula",
    imgsrc: "/VampireSecondaire.png",
    imgsrc1: "/VampirePrincipal.png",
    imgsrc2: "/ChateauDracula.png",
    imgsrc3: "/ChateauDracula.png",
    imgsrc4: "/chateauAbdou.png",
    url: "https://www.youtube.com/embed/Jhmnvk4YMU8",
    histoire1:
      "Dracula Personnage célèbre de la fin du XIXème siècle, crée par l’écrivain Bram Stoker pour son roman du même nom, il s’agit certainement du Vampire le plus célèbre dans l’imaginaire collectif. Il est évident que l’écriture de son personnage est passionnante. Inspiré du Comte Vlad Tepes III de Valachie, dit l’empaleur, Dracula inspire l’effroi à quiconque croisera son regard. Même le professeur Abraham Van Helsing le craint, pourtant éminent médecin et homme de loi au courage sans faille. C’est une émouvante histoire. Mais si je vous disais que la croyance du mort se nourrissant du sang des vivants pour subsister date de bien avant le XIXème siècle? Peut-être pas les vampires tels que nous les connaissons, mais les archéologues sont tout à fait au courant de cette pratique des « enterrements Vampriques » datant au moins du 5ème siècle.",
    histoire2:
      "C’est un sujet sérieusement documenté. Les dîtes sépultures sont toutes similaires. Le corps, plus précisément le squelettes est exhumé avec une roche logé dans la bouche. Les scientifiques constatent également souvent une amputation de la langue. Le cas le plus récent est celui de la découverte d’un sépulcre en Italie, datant du 5ème siècle. En effet, les archéologues ont découvert le squelette d’un enfant d’environ 10 ans, une pierre logée dans la bouche. Découvert par l’archéologue et professeur David Soren, le sexe de l’enfant n’a pas pu être déterminé. Cette découverte a sensiblement troublé le chercheur, puisque exhumé dans un cimetière connu sous le nom de Nécropole de Bambini destiné aux tout-petits ou aux enfants mort né. Sa présence à cet endroit n’est pas explicable par l’archéologue et les fouilles en ce lieu ne sont toujours pas terminées. Si toutefois les noctambules vous effraient, nous pouvons vous proposer toutes sortes d’objets pour vous en protéger. Les créatures anthropophages sont peut-être une réalité, après tout, nos ancêtres étaient vraisemblablement plus attentif que nous… qui sait.",
  },
  {
    id: 2,
    name: "Loups Garous",
    imgsrc: "/LoupsGarous.png",
    imgsrc1: "/LOUPGAROU.png",
    imgsrc2: "/LoupsGarousForet.png",
    imgsrc3: "/LoupsGarousForet.png",
    imgsrc4: "/LOUPGAROUS2.png",
    url: "https://www.youtube.com/embed/qDJvoucVOkA",
    histoire1:
      "Le lycanthrope, plus connu en français sous le nom de loup garou est, dans les mythologies européennes, un humain possédant la capacité de se transformer en loup ( partiellement ou complètement ) ou en créature anthropophage proche de celui-ci. Contrairement à ce que beaucoup de personnes pensent, cette transformation n'est pas due à la morsure ou la griffure d’un autre lycanthrope. Cette croyance est tout à fait récente et très certainement imaginée pour le cinéma. Dans la mythologie, il s’agit plus d’une malédiction ou d’un rituel volontaire. La frontière entre la légende et la réalité est cependant fine. L’humanité depuis sa naissance à toujours été une proie, et les animaux anthropophages sont une réalité. Qu’il s’agisse d’une réminiscence de la partie reptilienne de notre cerveau, ou d’une constatation documenté comme, très proche de chez nous, la bête du Gevaudan qui alarma même le Roi Louis XV en personne, toutes les civilisations humaines de la planète ont leur folklore, intégrant systématiquement des créatures anthropomorphes.",
    histoire2:
      "Il est évident que de nos jours, ces sujets peuvent faire sourire, mais prenez le cas Bill Ramsey, faisant partie des dossiers du célèbre couple Warren. Si la lycanthpopie existe, il en est la preuve concrète. Son histoire est pourtant des plus banale. Un simple charpentier de 38 ans qui lors de crises inexpliquées, pouvait se morfondre et agir comme un canidé, pour ne pas dire un loup. Lors de l’une de ses fameuses crise, il fit voler dans les airs les trois officiers de police venu le maitriser, dont l’un témoigna aux journalistes qu’il était impossible qu’un homme si frêle puisse le déplacer de la sorte. En effet, l’officier pesait 89 kg pour 1m80. De plus Mr Ramsey retroussait sa lèvre supérieure et montrait ses dents tel un animal. Se réveillant groggy, il ne se souvenaient jamais des attaques et sa personnalité différait complètement. Les policiers conversèrent alors avec un homme doux et gentil, toujours navré de ce qu’il avait pu provoquer.Surtout si vous croisez une personne étrange agissant bizarrement, munissez vous des protections nécessaire pour être en toute sécurité.",
  },
  {
    id: 3,
    name: "Le cas Vallecas",
    imgsrc: "/CASVALLECAS.png",
    imgsrc1: "/CASVALLECAS.png",
    imgsrc2: "/leCasVallecasSecondaire.png",
    imgsrc3: "/maisonHantée.png",
    imgsrc4: "/casVallecsEnfants.png",
    url: "https://www.youtube.com/embed/T9kdY5vqhzs",
    histoire1:
      "Le cas Vallecas Il s’agit à ce jour du seul cas de hantise dans une demeure qui soit reconnu par les forces de l’ordre de Madrid. Les événements dont furent témoins la famille Gutiérrez au 8, rue Luis Marin ne seront jamais expliqués. L’épicentre de cette violente histoire semble être la fille de Maximo Gutierrez, Estefania Lazaro Gutiérrez. Jeune lycéenne de 18 ans, tous les témoins affirment que les manifestations ont commencé après une séance de Ouija ayant mal tournée. S’adonnant souvent à cette pratique avec ses copines de classe, elle ne pouvait pas prévoir ce qu’il se passerai en ce mois de mars 1990. Jouant dans la cour de son lycée catholique avec ses amies, espérant prendre contact avec l’ex petit ami de l’une de ses camarades, la séance est soudainement interrompue par son professeur qui brise la planche de fortune fabriquée par Estefania et jette nerveusement le verre servant de goute ( objet servant à cibler les lettres) qui éclate sur l’asphalte.Peu de temps après, Estefania se plaignit auprès de ses parents que de grandes silhouettes sombres venaient la visiter. Les parents contactèrent le médecin de famille qui leur conseilla d’envoyer Estefania dans un centre de soin spécialisé. Malgré les crises de convulsions, ils ne trouvèrent rien, pas d’épilepsie ni aucune maladie. Finalement le 14 août 1991, alors qu’elle se trouvait à l’hôpital Gregorio Maranon, elle sombra dans un profond coma duquel elle ne reviendra jamais. Les médecins stupéfait ne comprennent pas et ne comprendront jamais.",
    histoire2:
      "Mais ce qui avait effrayé Estefania ne disparut pas avec elle. Cette fois c’est toute la famille qui en était témoins. Des silhouettes, des empreintes de mains aux dimensions improbables sur la literie, des coups qui résonnaient, des rires dans le couloir. S’en est trop pour Maximo Gutiérrez qui contacte les forces de l’ordre. Les policiers, ne prenant pas très au sérieux ce genre de requête vinrent sur les lieux la nuit du 27 novembre 1992 à 2h40 du matin. Ils firent stupéfait lorsque ils virent les parents Gutierrez mais aussi le petit frère et la soeur de Estefania devant la résidence, malgré la fraicheur automnale.L’inspecteur José Negri fit monter la famille dans la demeure, qui étaient des plus calmes. Ils ne tardèrent pas à remarquer une porte d’armoire s’ouvrant brutalement. Soupçonnant un stratagème, ils examinèrent soigneusement le meuble sans trouver d’explication. Une détonation retentit sur la terrasse. Le scepticisme des policiers commençait doucement à vaciller. Discutant et prenant des notes, une substance inconnu, tel de la vase commençait à apparaitre sur le napperon du petit guéridon qui supportait le téléphone. Dans la chambre où dormait Estefania, l’inspecteur Negri vit apparaitre trois griffures sur le papier peint.La conclusion du rapport de police veut la suivante: il y a un certain nombre de phénomènes en tous points inexplicables… Les Gutierrez finirent par vendre leur maison. Aucun phénomène ne fut jamais rapporté par leurs successeurs. Simplement une odeur étrange qui ne partait jamais",
  },
  {
    id: 4,
    name: "Roswell",
    imgsrc: "/RoswellHome.png",
    imgsrc1: "/SoucoupeVIOLENTE.png",
    imgsrc2: "/SoucoupeAlien.png",
    imgsrc3:
      "https://i.pinimg.com/564x/36/4e/b6/364eb6bd1e4d6f9018b95115d15e9117.jpg",
    imgsrc4: "/SoucoupeRouge.png",
    url: "https://www.youtube.com/embed/73ZnZpAB6M8",
    histoire1:
      "Juillet 1947, le shérif Jess Slaughter et son adjoint Charles Fogus roulent tous deux vers Roswell, au Nouveau-Mexique pour transporter un prisonnier. Arrivé sur les lieux de l’interpellation, ils sont stupéfait en découvrant le nombre de soldats présents sur place. Ne comprenant pas et demandant des explications, ils aperçoivent ce qui semble être un corps avec des proportions étranges, transporté dans un sac mortuaire. Les soldats ne les laissent pas approcher plus que cela mais l’adjoint ne peut s’empêcher de remarquer des débris au sol, comme si un avion s’était écrasé. Ils rentrent donc avec le prisonnier lorsque la radio de police stipule qu’un objet de taille raisonnable s’était écrasé dans le désert non loin de Roswell. Pour beaucoup d’ufologies, il s’agit d’une preuve réelle d’un contact avec une espèce extra-terrestre. Pour les militaires et scientifique plutôt d’un mythe. La majorité penche vers le mythe et nous ne pouvons qu’être d’accord. En effet, si un tel événement avait eu lieu, il n’aurait pas été tant documenté par les autorités et l’armée des Etats-unis aurait fait le maximum pour le dissimuler.",
    histoire2:
      "Il existe cependant des témoignages, de pilotes professionnels, de simples inconnus se trouvant au bon endroit, au bon moment que nous de devons pas occulter. L’un de ces témoignage à d’ailleurs été pris très au sérieux par le CNES ( centre national d’études spatial ). Le 28 janvier 1994, le pilote d’un vol Air France remarque, par le hublot de sont Airbus A320, volant à une altitude de 12 000 mètres avec des conditions météo excellentes, ce qu’i pense d’abord être un ballon météorologique. L’objet ers question se trouve plus bas, à environ 10 500 mètres d’altitude. S’approchant de plus en plus de l’objet, les contours se dessinent. Un taille immense, de l’ordre de 1000 mètres de diamètre et de 100 mètres d’épaisseur. Pas de détail apparent, pas de gouverne, pas de moteur. La copilote, elle, décrit une lentille, qui évolue vers une forme de « chevron » et se déplace à la même vitesse que l’avion. L’objet disparaîtra une minute plus tard. Capté par les radars au sol, ils ont la confirmation qu’aucun ballon météo ne se situé sur la trajectoire de l’avion. Au début honteux d’avoir à témoigner d’un phénomène inexpliqué, ils finissent par en parler à la gendarmerie. C’était la première fois q’une observation visuelle de qualité et une confirmation radar furent enregistré. Sommes-nous la seule espèce intelligente de ce système solaire.",
  },
  {
    id: 5,
    name: "Exorcisme",
    imgsrc: "/exor_second.png",
    imgsrc1: "/exorc_first.png",
    imgsrc2: "/exor_third.png",
    imgsrc3: "/exorc_fifth.png",
    imgsrc4: "/exor_fourth.png",
    url: "https://www.youtube.com/embed/a_Fmn5Y6zAM",
    histoire1:
      "Anneliese Michel. Voila un sujet très délicat à aborder. De tous les sujets mystérieux, les exorcismes sont certainement les plus populaires et les plus documentés. Sujet de nombreux débats, il s’agit dans la plupart des cas de pathologie mentales. Sans être exhaustif, nous pourrions citer l’épilepsie, la dépersonnalisation psychique, la schizophrénie… Culturellement parlant, nous pensons que l’exorcisme est un acte anodin et pratiqué systématiquement dès que les parents d’une « victime » sont croyants. Il n’en est rien. L’exorcisme n’est pas si fréquent et le Vatican n’accepte que très rarement de procéder à un rituel d’exorcisme. Préférant orienter les parents des malades vers un centre de soins, un neurologue. Dans 98% des cas, il s’agit bien d’une pathologie psychiatrique. Pour qu’un prêtre spécialisé obtienne réellement l’accord du Vatican pour procéder     à un exorcisme, il faut que la personne potentiellement possédée réponde à des critères bien spécifiques. Selon le rituel, pour être considéré comme possédé, un individu doit comprendre et parler des langues inconnues, souvent mortes mais aussi connaître des faits cachés. Pour finir, la manifestation d’un décuplement de la force physique du sujet. Le Vatican peut toutefois, malgré tous ces critères ne pas accéder à la requête des familles.",
    histoire2:
      "L’un des cas les plus connus de l’histoire et sans équivoque celui d’une allemande, Anneliese Michel né en 1952 à Leibfling en ex Allemagne de l’Ouest. Un jour de 1967, la jeune fille fût victime de violent tremblements et les médecins diagnostiquèrent un cas d’épilepsie. Malgré tous, les médicaments supposé contrôler sa maladie ne firent qu’empirer les choses. Elle parlait aux médecins de voix qu’elle entendait ainsi que de vision de visages grimaçant lors de sa prière quotidienne. Devant l’embarras et l’impuissance des médecins, les parents de la jeune Anneliese décide de contacter plusieurs prêtres de pratiquer un exorcisme. Il refusaient systématiquement, les invitants à être plus rigoureux concernant le traitement médicamenteux. 1974, la santé d’Anneliese décroit. Elle ne s’alimente plus et ses crises deviennent de plus en plus violentes. L’archevêché autorisa  en 1975 un exorcisme fondé sur le rituel romain. Trois hommes étaient nécessaires pour la maitriser. On pratiqua sur celle-ci un ou deux exorcismes par semaine. Elle put reprendre un semblant de vie normale, continuer sa scolarité. Les crises ne cessèrent cependant pas. Anneliese reçu son dernier exorcisme ( le 67ème ) le 30 juin 1976. Souffrant de pneumonie et d’une grande fièvre, elle mourut le lendemain. Les parents d’Anneliese ainsi que les deux prêtres qui avaient pratiqués les exorcismes furent inculpés de négligence ayant entrainé sa mort. Les enregistrements disponibles de certaines séances peuvent heurter la sensibilité des personnes les plus sensibles.",
  },
  {
    id: 6,
    name: "Club des 27",
    imgsrc: "/Club_.png",
    imgsrc1: "/Club_1.png",
    imgsrc2: "/Club_2.png",
    imgsrc3: "/Club_3.png",
    imgsrc4: "/Club_4.png",
    url: "https://www.youtube.com/embed/x5Lr4sMXUCU",
    histoire1:
      "Dans le monde de la musique, aucun mélomane un tant soit peu puriste n’a jamais entendu parlé du club des 27. C’est passionnant et tragique à la fois. Comme les peintres impressionnistes et expressionnistes qui ne rencontraient le succès qu’une fois décédé, nous sommes la face à la dévotion et au don de soi, ainsi que de sa vie, pour la musique. Le « Forever 27 club » se dessine dans l’imaginaire collectif suite aux morts rapprochées de Brian Jones, Jimi Hendrix, Janis Joplin et Jim Morrison entre juillet 1969 et juillet 1971. Tous issues du monde ru rock et du blues et bien sûr, morts à l’âge de 27 ans. L’idée du club des 27 s’est imposée après la mort de Kurt Cobain en 1994. Sensiblement oublié par la suite, il connaît un regain de notoriété en juillet 2011, après la mort de Amy Winehouse. Ces légendes de malédictions autour d’artistes, de musiciens n’est pas non plus nouveau. Nous pouvons par exemple citer l’histoire de Robert Johnson, guitariste et chanteur de Blues né le 8 mai 1911, qui, selon la légende aurait donné son âme pour devenir un musicien de talent et, par la même devenir célèbre. Peut-être moins connu c’est une source d’inspiration inépuisable pour les scénaristes de series et films traitant de l’étrange. ",
    histoire2:
      "Devil at the Cross Road. Il s’agit d’une légende selon laquelle Johnson a pris sa guitare et se soit rendu au carrefour des autoroutes 49 et 61 ( au fin fond du Mississippi ), où il aurait fait un pacte avec le Diable, pour devenir un guitariste virtuose en échange de son âme. Il en parle d’ailleurs dans sa chanson « Cross Road Blues ». En réalité, il s’agissait d’une légende que plusieurs chanteurs de Blues colportaient au même moment pour leur propre compte, pour ajouter un peu de mystère et de mythologie autour d’eux. Inspiré du mythe de Papa Legba, un esprit vaudou haïtien qui seraient présent près des portes ou à la croisée des chemins, les bluesmen trouvaient simplement que le fait citer le Diable ajoutait une aura sur leur musique Il est cependant vrai que la première fois que le bluesman Son House rencontra Johnson, il ne reconnu en lui aucun talent. Très bon à l’harmonica mais un très mauvais guitariste. Ce n’est que deux ans après, lorsque les deux musiciens se retrouvèrent qu’il constata un bond immense en terme de dextérité et technique à la guitare. Robert Johnson meurt à 27 ans empoisonné à la strychnine par un mari jaloux. En effet, profitant de sa popularité, comme beaucoup de musiciens, il ne put s’empêcher de séduire la femme de trop. Cette mort n’a fait que renforcer sa légende.",
  },
];

const boutiqueData = [
  {
    id: 1,
    catégorie: "Le cas Vallecas",
    name: "Grimoire",
    imgsrc1:
      "https://i.pinimg.com/originals/c6/10/6d/c6106d4a91213acfa97609a1767c793b.jpg",
    imgsrc2: "/assets/Grimoire.png",
    price: 1300,
  },
  {
    id: 2,
    catégorie: "Count Dracula",
    name: "Amulette émeraude",
    imgsrc1: "/amuletteEmeraude.png",
    imgsrc2:
      "https://i.pinimg.com/564x/88/5a/19/885a19a25438236f23f4ffc214e448e2.jpg",
    price: 2600,
  },
  {
    id: 3,
    catégorie: "revenants",
    name: "Statuette emauraude",
    imgsrc1: "/PoulpeEmeraude.png",
    imgsrc2: "/assets/ancient_egyptian_scarab.png",
    price: 800,
  },
  {
    id: 4,
    catégorie: "Loups Garous",
    name: "Balles en argent calibre 44 ",
    imgsrc1: "https://i.ebayimg.com/images/g/qM8AAOSwgMdkVRUK/s-l1200.png",
    imgsrc2:
      "https://i.pinimg.com/564x/c7/c2/f3/c7c2f36f9b32c1250ce146e04147ca5b.jpg",
    price: 19,
  },
  {
    id: 5,
    catégorie: "Le cas Vallecas",
    name: "Sauce  blanche Amérindiene",
    imgsrc1:
      "https://i.etsystatic.com/36349093/r/il/afdb89/4012290846/il_1588xN.4012290846_qlr0.jpg",
    imgsrc2:
      "https://i.pinimg.com/564x/20/00/36/2000367e2c213f084637b2854a2f83c2.jpg",
    price: 15,
  },
  {
    id: 6,
    catégorie: "Count Dracula",
    name: "Coffret XIXe Chasse Vampires",
    imgsrc1:
      "https://i.pinimg.com/564x/70/d6/ca/70d6ca07c52e476e307015676f958eff.jpg",
    imgsrc2:
      "https://i.pinimg.com/564x/48/6a/89/486a893f0f7262e3d785ed78d4a7fa99.jpg",
    price: 2000,
  },
  {
    id: 7,
    catégorie: "Count Dracula",
    name: "Poster Chateau Dracula",
    imgsrc1: "/ChateauDracula.png",
    price: 13,
  },
  {
    id: 8,
    name: "Poster Chat maléfique",
    imgsrc1: "/ChatDiabolique.png",
    price: 13,
  },
  {
    id: 9,
    catégorie: "Le cas Vallecas",
    name: "Detecteur EMF",
    imgsrc1: "/ChatDiabolique.png",
    price: 500,
  },
  {
    id: 10,
    catégorie: "Le cas Vallecas",
    name: "Amélia",
    imgsrc1: "/PoupeANNABELLE.png",
    price: 300,
  },
  {
    id: 11,
    catégorie: "Loups Garous",
    name: "Dague enchantée",
    imgsrc1: "/dagueEnchantée.png",
    price: 300,
  },
];

app.get("/", (req, res) => {
  res.send('je suis sur la route "/" ');
});

app.get("/home", (req, res) => {
  res.json(homeData);
});

app.get("/home/:id", (req, res) => {
  const result = homeData.find((elem) => elem.id == req.params.id);
  // console.log(result)
  res.json(result);
});

app.get("/home/:id", (req, res) => {
  res.json(boutiqueData);
});

app.get("/home/:id", (req, res) => {
  res.json(boutiqueData);
});

app.get("/boutique", (req, res) => {
  res.json(boutiqueData);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
