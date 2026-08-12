let count = 0;

function changeMessage() {
    count++;

    document.getElementById("message").innerText =
        "Button clicked successfully!";

    document.getElementById("count").innerText = count;
}