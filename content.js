
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.answer) {
    var answer = request.answer;
    var div = document.createElement("div");
    div.style.position = "fixed";
    div.style.bottom = "20px";
    div.style.right = "20px";
    div.style.zIndex = "9999";
    div.style.backgroundColor = "#fff";
    div.style.border = "1px solid #ccc";
    div.style.padding = "10px";
    div.style.borderRadius = "5px";
    div.style.boxShadow = "2px 2px 5px rgba(0,0,0,0.3)";
    div.innerHTML = "<p><strong>OpenAI says:</strong></p><p>" + answer + "</p>";
    document.body.appendChild(div);
  }
});
