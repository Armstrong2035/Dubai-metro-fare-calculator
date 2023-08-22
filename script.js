const dubaiStations = [
    [ "etisalat", "al qusais", "dubai airport freezone", "al nahda", "stadium",
    "al qiyadah", "abu hail", "abubakar al siddique", "salahuddin", "union",
    "center point", "emirates", "airport terminal 3", "airport terminal 1",
    "ggico", "city center deira", "al rigga", "union", "baniyas square",
    "gold souk", "al ras"],
  ["creek", "jaddaf", "healthcare city", "oud metha", "burjuman", "adcb",
    "max fashion", "world trade center", "emirates center", "financial center",
    "dubai mall / burj khalifa", "business bay", "sharaf dg", "al ghubaiba"],
 ["onpassive", "equiti", "mall of the emirates", "mashreq",
    "dubai internet city", "al khail", "sobha realty", "dmcc", "jlt",
    "jebel ali", "ibn batuta", "the gardens"],
  
["expo2020", "dubai investment park", "jumeirah golf estates", "al furjan",
    "discovery gardens", "energy", "danube", "uae exchange"]
];

function findStationZone(starting, destination, card) {
    let startingZone = 0;
    let destinationZone = 0;

    for (let i = 0; i < dubaiStations.length; i++) {
        if (dubaiStations[i].includes(starting.toLowerCase())) {
            startingZone = i;
        }
    }

    for (let j = 0; j < dubaiStations.length; j++) {
        if (dubaiStations[j].includes(destination.toLowerCase())) {
            destinationZone = j;
        }
    }

    let zonesApart = Math.abs(destinationZone - startingZone);

    switch(zonesApart) {
        case 0: 
            if (card === 'Silver') {return 3}
            else if (card === 'Gold') {return 6}
        case 1:
            if (card === 'Silver') {return 5}
            else if (card === 'Gold') {return 10}
        case 2:
            if (card === 'Silver') {return 7.5}
            else if (card === 'Gold') {return 15}
        case 3:
            if (card === 'Silver') {return 7.5}
            else if (card === 'Gold') {return 15}
        default: return 0; // handle an unexpected case, though this shouldn't happen
    }
}

function getSelectedValues() {
    return {
        starting: document.getElementById("startingPoint").value,
        destination: document.getElementById("destinationPoint").value,
        card: document.getElementById("nolCard").value
    }
}

const popUpButton = document.getElementById('popupbutton');
    popUpButton.addEventListener('click', () => {
        popUpBox.style.display = 'none';
    });

window.addEventListener('load', () => {
    const button = document.getElementById('calculateFareButton');
    const popUpBox = document.getElementById('popupbox');
    const theFare = document.getElementById('fare');


    button.addEventListener('click', () => {
        const { starting, destination, card } = getSelectedValues();
        const finalValue = findStationZone(starting, destination, card);
        printedValue = `The fare is ${finalValue} AED`;
        theFare.innerHTML = printedValue;
        popUpBox.style.display = 'block';   
    });
});











