function addMultipli (arrayOfNumbers) {
    let array = [1,2,3,4,5,6]

    let sum = 0;
    for( i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log('Suma: ' + sum);

    let multipli = 1;
    for( j = 0; j < array.length; j++) {
        multipli *= array[j];
    }
    console.log('Iloczyn: ' + multipli);

}
addMultipli();

