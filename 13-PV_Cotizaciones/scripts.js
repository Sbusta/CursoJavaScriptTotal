function contenido(){
    callAPIs();
    cargaInicial();
    cargaContenido();
}

async function callAPIs(){
   let copInfoRes = await fetch('https://open.er-api.com/v6/latest/COP')
   let copInfo = await copInfoRes.json();

   let eurInfoRes = await fetch('https://open.er-api.com/v6/latest/EUR')
   let eurInfo = await eurInfoRes.json();

   let btcInfoRes = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
   let btcInfo = await btcInfoRes.json();

   document.getElementById('UsdCop').append(copInfo.rates.USD);
   document.getElementById('UsdEur').append(eurInfo.rates.USD);
   document.getElementById('UsdBtc').append(btcInfo.bpi.USD.rate);

   document.getElementById('imgEspera').style.visibility = 'hidden';

}

function cargaContenido(){
    document.getElementById('UsdEur').append("EUR (€) a USD: ");
    document.getElementById('UsdCop').append("COP ($) a USD: ");
    document.getElementById('UsdBtc').append("BTC (฿) a USD: ");
}

function cargaInicial() {
    document.getElementById('titulo').append("Precio EUR - COP - BTC a USD")
    document.getElementById('imgEspera').setAttribute('src', 'loading.gif');
    document.getElementById('imgEspera').style.visibility = 'visible';
}

