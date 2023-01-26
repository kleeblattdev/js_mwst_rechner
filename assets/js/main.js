//Input
const nettoBrutto = document.querySelector("#nettoBrutto");
const bruttoNetto = document.querySelector("#bruttoNetto");

const mwst19 = document.querySelector("#mwst19");
const mwst7 = document.querySelector("#mwst7");

const labelChange = document.querySelector("#labelChange");
const nettoBetrag = document.querySelector("#nettoBetrag");

// Output
const resultText = document.querySelector("#resultText");
const mwstResult = document.querySelector("#mwstResult");
const bruttoResult =document.querySelector("#bruttoResult");

//functions variables

const nettoToBrutto = () => {
    resultText.innerHTML = "Bruttobetrag (Endpreis)";
    labelChange.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro";
}

const bruttoToNetto = () =>{
    resultText.innerHTML = "Nettobetrag";
    labelChange.innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro";
}

const calculate = () => {
    let input = Number(nettoBetrag.value);

    if(nettoBrutto.checked === true && mwst19.checked === true){
        let output1 = input * 0.19;
        let output2 = output1 + input;
        console.log('test');
        mwstResult.innerHTML = output1.toFixed(2);
        bruttoResult.innerHTML = output2.toFixed(2);
    }
    else if(nettoBrutto.checked === true && mwst7.checked === true){
        let output1 = input * 0.07;
        let output2 = output1 + input;
        
        mwstResult.innerHTML = output1.toFixed(2);
        bruttoResult.innerHTML = output2.toFixed(2);
    }
    else if (bruttoNetto.checked === true && mwst19.checked === true){
        let output1 = input -(input / 1.19);
        let output2 = input / 1.19;

        mwstResult.innerHTML = output1.toFixed(2);
        bruttoResult.innerHTML = output2.toFixed(2);
    }
    else if (bruttoNetto.checked === true && mwst7.checked === true){
        let output1 = input - (input / 1.07);
        let output2 = input / 1.07 ;
    
        mwstResult.innerHTML = output1.toFixed(2);
        bruttoResult.innerHTML = output2.toFixed(2);
    }
    else{}
}



