//ENGINEERING
function engineer(){
    var maths = parseFloat(document.getElementById('maths').value)||0;
    var physics =parseFloat(document.getElementById('physics').value)||0;
    var chemistry = parseFloat(document.getElementById('chemistry').value)||0;
    var calc = '';
    if (maths > 100 || physics > 100 || chemistry > 100) {
        alert("Marks should not be greater than 100");
        window.location.href = "engineering.html";
        return;
    }

    if (maths < 0 || physics < 0 || chemistry < 0) {
        alert("Marks should not be less than 0");
        window.location.href = "engineering.html";
        return;
    }

    var favg = (chemistry + physics) / 2;
    var ffavg = favg + maths;
    calc = "CUT-OFF MARK : " + ffavg.toFixed(2) + "%";

    document.getElementById('calc').innerText = calc;
}

//ARTS AND SCIENCE
function artsandscience(){
    var maths = parseFloat(document.getElementById('maths').value)||0;
    var physics =parseFloat(document.getElementById('physics').value)||0;
    var chemistry = parseFloat(document.getElementById('chemistry').value)||0;
    var biocom = parseFloat(document.getElementById('biocom').value)||0;
    var artsandscience = '';
    if (maths > 100 || physics > 100 || chemistry > 100 || biocom > 100) {
        alert("Marks should not be greater than 100");
        window.location.href = "artsandscience.html";
        return;
    }

    if (maths < 0 || physics < 0 || chemistry < 0 || biocom < 0) {
        alert("Marks should not be less than 0");
        window.location.href = "artsandscience.html";
        return;
    }

    var favg = (chemistry + physics + maths + biocom);
    artsandscience = "CUT-OFF MARK : " + favg.toFixed(2) + "%";

    document.getElementById('artsandscience').innerText = artsandscience;
}

//PARAMEDICAL
function medical() {
    var physics = parseFloat(document.getElementById('physics').value) || 0;
    var chemistry = parseFloat(document.getElementById('chemistry').value) || 0;
    var biology = parseFloat(document.getElementById('biology').value) || 0;
    var calc2 = '';

    if (physics > 100 || chemistry > 100 || biology > 100) {
        alert("Marks should not be greater than 100");
        window.location.href = "paramedical.html";
        return;
    }

    if (physics < 0 || chemistry < 0 || biology < 0) {
        alert("Marks should not be less than 0");
        window.location.href = "paramedical.html";
        return;
    }

    var ftot1 = biology / 2;
    var ftot2 = (chemistry + physics) / 4;
    var fsum = ftot1 + ftot2;
    var ffsum = fsum * 2;
    calc2 = "CUT-OFF MARK : " + ffsum.toFixed(2) + "%";

    document.getElementById('calc2').innerText = calc2;
}

//Pure-Science
function purescience() {
    var physics = parseFloat(document.getElementById('physics').value) || 0;
    var chemistry = parseFloat(document.getElementById('chemistry').value) || 0;
    var botany = parseFloat(document.getElementById('botany').value) || 0;
    var zology = parseFloat(document.getElementById('zology').value) || 0;
    var pure = '';

    if (physics > 100 || chemistry > 100 || botany > 100 || zology > 100) {
        alert("Marks should not be greater than 100");
        window.location.href = "purescience.html";
        return;
    }

    if (physics < 0 || chemistry < 0 || botany < 0 || zology < 0) {
        alert("Marks should not be less than 0");
        window.location.href = "purescience.html";
        return;
    }

    var ftot1 = (botany + zology) / 4;
    var ftot2 = (chemistry + physics) / 4;
    var fsum = ( ftot1 + ftot2 ) * 2;
    pure = "CUT-OFF MARK : " + fsum.toFixed(2) + "%";

    document.getElementById('pure').innerText = pure;
}

//NEET
function neet() {
    var written = parseFloat(document.getElementById('written').value) || 0;
    var correct = parseFloat(document.getElementById('correct').value) || 0;
    var wrong = parseFloat(document.getElementById('wrong').value) || 0;
    var neet = '';

    if (written > 200 || correct > 200 || wrong > 200) {
        alert("Marks should not be greater than 200");
        window.location.href = "neet.html";
        return;
    }

    if (written < 0 || correct < 0 || wrong < 0) {
        alert("Marks should not be less than 0");
        window.location.href = "paramedical.html";
        return;
    }

    var ftot1 =  written * 4;
    var ftot2 = wrong * 5;
    var fsum = Math.abs(ftot1 - ftot2);
    neet = "CUT-OFF MARK : " + fsum.toFixed(2) + "%";

    document.getElementById('neet').innerText = neet;
}

// Agri Pure-Science
function agripurescience() {
    var physics = parseFloat(document.getElementById('physics').value) || 0;
    var chemistry = parseFloat(document.getElementById('chemistry').value) || 0;
    var botany = parseFloat(document.getElementById('botany').value) || 0;
    var zology = parseFloat(document.getElementById('zology').value) || 0;
    var agripurescience = '';

    if (physics > 100 || chemistry > 100 || botany > 100 || zology > 100) {
        alert("Marks should not be greater than 100");
        window.location.href = "agripurescience.html";
        return;
    }

    if (physics < 0 || chemistry < 0 || botany < 0 || zology < 0) {
        alert("Marks should not be less than 0");
        window.location.href = "agripurescience.html";
        return;
    }

    var ftot1 = (botany / 2 )+ (zology / 2);
    var ftot2 = (chemistry / 2)+ (physics / 2);
    var fsum = ( ftot1 + ftot2 ) ;
    agripurescience = "CUT-OFF MARK : " + fsum.toFixed(2) + "%";

    document.getElementById('agripurescience').innerText = agripurescience;
}

// Agri Computer-Science

function agricomputer(){
    var maths = parseFloat(document.getElementById('maths').value)||0;
    var physics =parseFloat(document.getElementById('physics').value)||0;
    var chemistry = parseFloat(document.getElementById('chemistry').value)||0;
    var computer = parseFloat(document.getElementById('computer').value)||0;
    var calc1 = '';
    if (maths > 100 || physics > 100 || chemistry > 100 || computer > 100) {
        alert("Marks should not be greater than 100");
        window.location.href = "agricomputer.html";
        return;
    }

    if (maths < 0 || physics < 0 || chemistry < 0 || computer < 0) {
        alert("Marks should not be less than 0");
        window.location.href = "agricomputer.html";
        return;
    }

    var favg = (chemistry / 2) + (physics / 2);
    var fsum =  (maths / 2) + (computer/2);
    var ffsum = fsum + favg;
    agricomputer = "CUT-OFF MARK : " + ffsum.toFixed(2) + "%";

    document.getElementById('agricomputer').innerText = agricomputer;
}

// Agri Biology

function agribiology(){
    var maths = parseFloat(document.getElementById('maths').value)||0;
    var physics =parseFloat(document.getElementById('physics').value)||0;
    var chemistry = parseFloat(document.getElementById('chemistry').value)||0;
    var biology = parseFloat(document.getElementById('biology').value)||0;
    var agribiology = '';
    if (maths > 100 || physics > 100 || chemistry > 100 || biology > 100) {
        alert("Marks should not be greater than 100");
        window.location.href = "agribiology.html";
        return;
    }

    if (maths < 0 || physics < 0 || chemistry < 0 || biology < 0) {
        alert("Marks should not be less than 0");
        window.location.href = "agribiology.html";
        return;
    }

    var favg = (chemistry / 2) + (physics / 2);
    var fsum =  (maths / 2) + (biology/2);
    var ffsum = fsum + favg;
    agribiology = "CUT-OFF MARK : " + ffsum.toFixed(2) + "%";

    document.getElementById('agribiology').innerText = agribiology;
}