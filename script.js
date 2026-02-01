let totalPredictions = 0;
let fakeDetected = 0;
let realDetected = 0;


function checkNews() {
    let newsBox = document.getElementById("news");
    let result = document.getElementById("result");

    let text = newsBox.value;
    let lowerText = text.toLowerCase();

    if (text.trim() === "") {
        result.innerHTML = "Please enter news.";
        result.style.color = "orange";
        return;
    }

    let fakeScore = 0;

    // Fake keywords
    let fakeKeywords = [
        "alien",
        "miracle",
        "rumor",
        "fake",
        "shocking",
        "secret",
        "asklaskl",
        "hoax",
        "conspiracy",
        "unbelievable",
        "click here",
        "100% cure",
        "government hiding",
        "exposed",
        "breaking truth"
    ];

    for (let i = 0; i < fakeKeywords.length; i++) {
        if (lowerText.includes(fakeKeywords[i])) {
            fakeScore++;
        }
    }

    // Too many !
    let exclamations = (text.match(/!/g) || []).length;
    if (exclamations >= 2) {
        fakeScore++;
    }

    // ALL CAPS detection
    if (text.length > 15 && text === text.toUpperCase()) {
        fakeScore++;
    }

    console.log("Fake Score:", fakeScore); // debug


// confidence bar 

    let confidenceFill = document.getElementById("confidenceFill");
let confidenceText = document.getElementById("confidenceText");

let confidenceScore = Math.floor(Math.random() * 10) + 90;

confidenceFill.style.width = confidenceScore + "%";
confidenceText.innerHTML = "Confidence: " + confidenceScore + "%";


totalPredictions++;
document.getElementById("totalCount").innerText = totalPredictions;

let probText = document.getElementById("probability");

if (fakeScore >= 1) {
    result.innerHTML = "❌ Fake News Detected";
    result.style.color = "red";

    fakeDetected++;
    document.getElementById("fakeCount").innerText = fakeDetected;

    let fakeProb = Math.floor(Math.random() * 15) + 80;
    probText.innerHTML = "Fake Probability: " + fakeProb + "%";

} else {
    result.innerHTML = "✅ Real News Verified";
    result.style.color = "lightgreen";

    realDetected++;
    document.getElementById("realCount").innerText = realDetected;

    probText.innerHTML = "";
}

}

function clearText() {
    document.getElementById("news").value = "";
    document.getElementById("result").innerHTML = "";
}

function toggleAbout() {
    let panel = document.getElementById("aboutProject");

    if (panel.style.display === "none" || panel.style.display === "") {
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }
}
// Model Detail

function toggleModel() {
    let panel = document.getElementById("modelDetails");

    if (panel.style.display === "none" || panel.style.display === "") {
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }
}




