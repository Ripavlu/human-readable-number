module.exports = function toReadable (number) {
    const chislo = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', ''];
    let num_str = ''; 
    let a, b, c = 0;
    if (number == 0) {
       return num_str='zero';
    }
    if (number > 99) {
        a = Math.floor(number/100);
        num_str = chislo[a] + ' hundred ';
        number = number % 100;
    }
    else {
        num_str = '';
        number = number % 100;
    }
    if (number == 0) {
        num_str = chislo[a] + ' hundred ';
    }
    else if (number < 20 && number > 0) {
        num_str = num_str + chislo [number];
    }
    else if (number < 100) {
        b = Math.floor(number/10);
        if (number % 10 == 0) {
            c = 20;
        }
        else {c = number % 10};
        switch (b) {
            case 2: 
                num_str =num_str + 'twenty ' + chislo[c];
                break;
            case 3: 
                num_str = num_str + 'thirty ' + chislo[c];
                break;
            case 4: 
                num_str = num_str +'forty ' + chislo[c];
                break;
            case 5: 
                num_str = num_str +'fifty ' + chislo[c];
                break;
            case 6: 
                num_str = num_str +'sixty ' + chislo[c];
                break;
            case 7: 
                num_str = num_str +'seventy ' + chislo[c];
                break;
            case 8: 
                num_str = num_str +'eighty ' + chislo[c];
                break;
            case 9: 
                num_str = num_str +'ninety ' + chislo[c];
                break;
        }
    }

return num_str.trim();  
}
