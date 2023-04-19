let adjustedTime = time + (60 - total) * 5;

if (adjustedTime <= 60) {
    document.getElementById('image').src = '/static/pass.gif';
    document.getElementById('resultHeader').innerHTML = "Result: \
        <span id='pass'>PASS</span>";
    document.getElementById('comment').innerHTML = "Wow! You are an \
        outstanding student bot! So outstanding, in fact, that we may \
        <a href='https://uwaterloo.ca/secretariat/policies-procedures-guidelines/policy-71'>\
        investigate</a> your performance.";
} else if (adjustedTime <= 120) {
    document.getElementById('image').src = '/static/fail.png';
    document.getElementById('resultHeader').innerHTML = "Result: \
        <span id='fail'>FAIL</span>";
    document.getElementById('comment').innerHTML = 'You had a decent \
        performance. Keep up the work, and we may keep you for the next ... \
        iteration.';
} else {
    document.getElementById('image').src = '/static/incinerator.png';
    document.getElementById('resultHeader').innerHTML = "Result: \
        <span id='fail'>FAIL</span>";
}

document.getElementById('time').innerHTML = 'Time: ' + time + ' seconds';
document.getElementById('total').innerHTML = 'Total: ' + total + '/60';
document.getElementById('adjustedTime').innerHTML = 'Adjusted Time: ' + time +
    '-second duration + ' + (60 - total) * 5 + '-second penalty = ' +
    adjustedTime + ' seconds';
