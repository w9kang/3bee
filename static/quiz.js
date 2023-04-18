// Track time.
let time = 0;

let updateTime = () => {
    time += 1;
    document.getElementById('time').innerHTML = time + 's';
}

let showResult = () => {
    location.href = '/result/' + time + '/' + total;
}

let interval = setInterval(updateTime, 1000);

// Track total.
let total = 0;
let i = 0;

let select3 = () => {
    updateTotal('3');
    updateImage();
}

let selectB = () => {
    updateTotal('b');
    updateImage();
}

let updateTotal = (selection) => {
    if (i >= order.length) return;

    if (selection == order[i][1]) total += 1;
    i += 1;
    document.getElementById('total').innerHTML = total + '/' + i;
}

let updateImage = () => {
    if (i >= order.length) {
        clearInterval(interval);
        document.getElementById('result').onclick = showResult;
        document.getElementById('result').style.display = 'inline';
        return;
    }

    document.getElementById('image').src = '/static' + order[i];
}

updateImage();
