function slumpmassigtOrd(ordLista) {
    const index = Math.floor(Math.random() * ordLista.length);
    return ordLista.splice(index, 1)[0];
}

const lattaOrd = [];
const svåraOrd = [];

const allaOrd = [
    "viss", "ena", "mars", "dit", "sak", "rum", "tur", "maj", "fri", "val", "död", "tro", "maj", "tyckte", "val",
    "landets", "teater", "ungdomar", "plötsligt", "ryska", "kunnat", "nyligen", "möjlighet", "rollerna", "morgon", "börja", "vänner", "president", "marknaden", "behövs", "staden", "högsta", "ökat", "utveckling", "perioden", "ställer", "försöka", "socialdemokraterna", "exempelvis", "resultatet", "sätta", "arbetet", "verksamhet", "lämna", "anna", "christer", "italien", "bild", "vars", "eva", "partiet", "intresse", "samarbete", "närmare", "januari", "september", "uppgifter", "london", "sak", "fullt", "göteborgs", "michael", "pengarna", "paris", "olsson", "resultat", "boken", "södra", "juni", "fortsätta", "dra", "ingenting", "samtliga", "beror", "värld", "alltför", "danmark", "försök", "rum", "tur", "politik", "fri", "förklarar", "bilder", "svar", "öppna", "död", "tro", "maj", "tyckte", "vatten", "saker", "val", "enbart", "inne", "utbildning", "eus", "information", "arbeta", "vilja", "centrum", "europeiska", "vinna",
    "läsa", "brev", "snarare", "ekonomi", "nio", "struken", "aktier", "mat", "riksdagen", "varken", "svarar", "undan", "elever", "dags", "david", "fjol", "offentliga", "räcker", "sven", "betydelse", "vita", "månad", "uppdrag", "åka", "borta", "ton", "tag", "rent", "föll", "förr", "von", "kontakt", "tills", "regeringens", "augusti", "fallet", "lägger", "lära", "verk", "böcker", "ställning", "spelas", "sommaren", "norra", "kör", "tvingas", "fungerar", "lärare", "n", "liknande", "seger", "brott", "kallas", "minska", "saknar", "vanligt", "resa", "svarta", "universitet", "nivå", "tanke", "and", "ständigt", "vare", "privata", "bygger", "chans", "söker", "sätter", "förstå", "slag", "viktigaste", "följer", "kyrkan", "kände", "ledare", "stan", "priset", "projekt", "april", "svenskar", "tidningen", "nuvarande", "strax", "uppsala", "visat", "sent", "läser", "lyckades", "tillräckligt", "lyckas", "närmast", "st", "utländska", "börjat", "samman", "författare", "dåligt", "pappa", "företagen", "programmet", "vm", "håkan", "kvinnan", "klarar", "pris", "verksamheten", "väljer", "leda", "godstrafik", "godstransport", "godståg", "godsvagn", "godsvolym", "godsägare", "godta", "godtagbar", "godtagbarhet", "gokart",
    "gokartbana", "gola", "golf", "golfa", "golfare", "golfarmbåge", "golfbag", "golfbana", "golfbil", "golfboll", "golfbyxa",
    "golfhandske", "golfklubb", "golfklubba", "golfproffs", "golfrunda", "golfsko", "golfspel", "golfspelare"
];

while (allaOrd.length > 0) {
    const slumpatOrd = slumpmassigtOrd(allaOrd);

    if (slumpatOrd.length <= 6) {
        lattaOrd.push(slumpatOrd);
    } else {
        svåraOrd.push(slumpatOrd);
    }
}

