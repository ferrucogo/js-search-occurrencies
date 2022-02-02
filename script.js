const text = "L'Ateniese Milziade, figlio di Cimone, spiccava fra tutti sia per l'antichità della stirpe, sia per la gloria degli antenati, sia per la propria saggezza ed aveva un'età tale che i suoi concittadini potevano non più solo concepire buone speranze su di lui, ma anche confidare che sarebbe stato quale ebbero poi modo, alla prova, di riscontrare, quando gli Ateniesi decisero di inviare dei coloni nel Chersoneso. Ce n'era un grande numero e molti chiedevano di partecipare alla spedizione, tra loro ne furono scelti alcuni e inviati a Delfi per consultare l'oracolo di Apollo su chi dovessero preferire come comandante. Quelle regioni infatti le occupavano allora i Traci e con loro bisognava combattere. La Pizia in risposta a chi la interrogava, ordinò espressamente che si prendessero come capo Milziade: se lo avessero fatto, l'impresa avrebbe avuto buon esito. In seguito al responso dell'oracolo, Milziade con truppe scelte parti con la flotta per il Chersoneso e, approdato a Lemno voleva ridurre gli abitanti dell'isola sotto il dominio degli Ateniesi e chiese ai Lemnii di arrendersi spontaneamente; quelli, schernendolo, risposero che lo avrebbero fatto quando lui, salpato con la flotta da casa sua, avesse raggiunto Lemno con il vento di tramontana. Questo vento infatti sorgendo da settentrione tiene la direzione contraria per chi parte da Atene. Milziade, non avendo tempo di trattenersi, indirizzò la rotta verso la sua meta e arrivò nel Chersoneso."

function totalWordCount(string){
    let wordsCount = text.split(" ").length;
    document.getElementById("words-text").innerHTML = ("Il testo è composto da " + wordsCount + " parole");
}



function totalLetterCount(){
    let spaceCount = (text.split(" ").length - 1);
    let totalLetters = text.length - spaceCount;
    document.getElementById("letters-text").innerHTML = ("Il testo è composto da " + totalLetters + " lettere");
}

function totalCharCount(){
    document.getElementById("chars-text").innerHTML = ("Il testo è composto da " + text.length + " caratteri");
}

function customSearch(){
    let stringToMatch = document.getElementById("search-box").value;
    console.log(stringToMatch);

    let textToLower = text.toLowerCase();
    if (stringToMatch.length > 0){
        document.getElementById("search-text").innerHTML = `La parola '${stringToMatch}' ${textToLower.includes(stringToMatch.toLowerCase()) ? 'è' : 'non è'} presente nel testo`;
    }else{
        document.getElementById("search-text").innerHTML = "Inserisci un'espressione di testo valida";
    }
}