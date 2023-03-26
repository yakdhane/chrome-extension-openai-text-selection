# Chrome Extension to Ask OpenAI

![GitHub last commit](https://img.shields.io/github/last-commit/username/chrome-extension-openai)
![GitHub repo size](https://img.shields.io/github/repo-size/username/chrome-extension-openai)
![GitHub top language](https://img.shields.io/github/languages/top/username/chrome-extension-openai)

This is a simple Chrome extension that allows you to select text from any web page and ask OpenAI about it. The extension uses the OpenAI API to generate a response to your question, and displays the answer in a popup window.

## Installation

To install the dependencies, run:

```
npm install
```

## Usage

To run the extension, follow these steps:

1. Open Google Chrome.
2. Navigate to `chrome://extensions`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click the "Load unpacked" button and select the directory where you cloned this repository.
5. The extension should now be installed and ready to use.

To use the extension, simply select some text on a web page and right-click to open the context menu. Click "Ask OpenAI" and wait for the answer to be displayed in a popup window.

## Files

- `manifest.json`: This file contains the configuration for the Chrome extension, including its name, version, and permissions.
- `background.js`: This file contains the logic for the extension's background script, which listens for context menu clicks and sends requests to the OpenAI API.
- `content.js`: This file contains the logic for the extension's content script, which receives messages from the background script and displays the answer in a popup window.
- `Dockerfile`: This file contains the instructions for building a Docker image of the application.