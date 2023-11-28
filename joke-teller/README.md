# Joke Teller

Joke Teller is a web application that fetches programming-related jokes from an API and converts them into audio using the VoiceRSS API. Users can click a button to hear a random joke.

## Features

- Fetches programming jokes from [JokeAPI](https://sv443.net/jokeapi/)
- Converts jokes into audio using VoiceRSS API
- Play and pause audio functionality
- Responsive design

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/joke-teller.git
    ```

2. Open the `index.html` file in your web browser.

3. Click the "Tell Me a Joke" button to hear a programming joke.

## Dependencies

- [VoiceRSS API](https://www.voicerss.org/): Used for converting text to speech.

## Usage

- Click the "Tell Me a Joke" button to fetch and play a programming joke.

## Configuration

To use this project, you need to obtain a VoiceRSS API key. Replace the placeholder API key in the `tellMe` function with your own key:

    ```javascript
    key: "your-voice-rss-api-key",
    ```

## API Reference
- JokeAPI: https://sv443.net/jokeapi/
- VoiceRSS API: https://www.voicerss.org/

## Acknowledgments
- This project uses the VoiceRSS API for text-to-speech conversion.
- Jokes are sourced from JokeAPI.
