dubaiStations = [
    [ "etisalat", "al qusais", "dubai airport freezone", "al nahda", "stadium",
    "al qiyadah", "abu hail", "abubakar al siddique", "salahuddin", "union",
    "center point", "emirates", "airport terminal 3", "airport terminal 1",
    "ggico", "city center deira", "al rigga", "union", "baniyas square",
    "gold souk", "al ras"],
  ["creek", "jaddaf", "healthcare city", "oud metha", "burjuman", "adcb",
    "max fashion", "world trade center", "emirates center", "financial center",
    "dubai mall", "burj khalifa", "business bay", "sharaf dg", "al ghubaiba"],
 ["onpassive", "equiti", "mall of the emirates", "mashreq",
    "dubai internet city", "al khail", "sobha realty", "dmcc", "jlt",
    "jebel ali", "ibn batuta", "the gardens"],
  
["expo2020", "dubai investment park", "jumeirah golf estates", "al furjan",
    "discovery gardens", "energy", "danube", "uae exchange"]
]

function findStationZone(starting, destination, card) {
    let startingZone = 0;
    let destinationZone = 0 ;

    for (let i = 0; i < dubaiStations.length; i++){
        if(dubaiStations[i].includes(starting)){
            startingZone = i;
        }
    }
    for (let j = 0; j < dubaiStations.length; j++){
        if(dubaiStations[j].includes(destination)){
            destinationZone = j;
        }
    }
    if(Math.abs(destinationZone - startingZone) === 3){
        if (card === 'silver'){
            return 7.5;
        }
        else if (card === 'gold'){
            return 15;
        }
    }
    else if (Math.abs(destinationZone - startingZone) === 2){
        if (card === 'silver'){
            return 7.5;
        }
        else if (card === 'gold'){
            return 15;
        }
    }
    else if (Math.abs(destinationZone - startingZone) === 1){
        if (card === 'silver') {
            return 5;
        }
        else if (card === 'gold'){
            return 10;
        }
    }
    else if (Math.abs(destinationZone - startingZone) === 0){
        if (card === 'silver'){
            return 3;
        }
        else if (card === 'gold'){
            return 6;
        }
    }
  }
console.log(findStationZone("dubai internet city", "al nahda", 'gold'))