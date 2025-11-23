function sendMessage() {
    let input = document.getElementById("messageInput");
    let text = input.value.trim();
    if (text === "") return;

    let box = document.createElement("div");
    box.className = "message";
    box.innerText = text;

    document.getElementById("messages").appendChild(box);

    input.value = "";
}
