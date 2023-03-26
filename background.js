
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "openai",
    title: "Ask OpenAI",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "openai") {
    var selectionText = info.selectionText;
    var openaiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";
    var openaiApiKey = "YOUR_API_KEY_HERE";
    var prompt = "What is " + selectionText + "?";
    var data = {
      prompt: prompt,
      max_tokens: 60,
      n: 1,
      stop: "\n",
      temperature: 0.7
    };
    fetch(openaiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + openaiApiKey
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      var answer = data.choices[0].text.trim();
      chrome.tabs.sendMessage(tab.id, {answer: answer});
    })
    .catch(error => console.error(error));
  }
});
