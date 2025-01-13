

// let temperatura = prompt('Inserisci qui la temperatura')

// if (temperatura < 20 && temperatura > 0) {
//     console.log('non ci sono piu le mezze stagioni');
// }else if(temperatura >= 30){
//     console.log('lu mare, lu sole, lu ientu');
// }else  if(temperatura < 30 && temperatura >= 20){
//     console.log('mi dia una peroni sudata');
// }else if(temperatura < 0 && temperatura > -10){
//     console.log('non e’ tanto il freddo quanto l’umidità');
// }else if(temperatura < -10){
//     console.log('copriti…ancora ti raffreddi');
// }

let temperatura = prompt('Inserisci qui la temperatura')

switch (true) {
    case (temperatura < 20 && temperatura > 0):
        console.log('non ci sono piu le mezze stagioni');
        break;

    case (temperatura >= 30):
        console.log('lu mare, lu sole, lu ientu');
        break;

    case (temperatura < 30 && temperatura >= 20):
        console.log('mi dia una peroni sudata');
        break;

    case (temperatura < 0 && temperatura > -10):
        console.log('non e’ tanto il freddo quanto l’umidità');
        break;

    case (temperatura < -10):
        console.log('copriti…ancora ti raffreddi');
        break;
}