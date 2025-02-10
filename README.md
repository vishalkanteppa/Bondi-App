# Bondi Companion

Bondi Companion is a small mobile application built using Ionic and Angular that combines two core functionalities: a todo list and a weather information page. This simulates a part of the Bondi Superapp, providing a daily companion to help you plan your day and access real time weather updates.


### Prerequisites

- **Node.js** (v14 or later) – [Download Node.js](https://nodejs.org/)
- **Ionic CLI** – Install if you haven't yet:
  ```bash
  npm install -g @ionic/cli
    ```
### Installation

1. Clone the repository
    ```bash
    https://github.com/vishalkanteppa/Bondi-App.git
    ```
2. Enter the project directory
    ```bash
    cd bondi-companion
    ```
3. Install dependencies
    ```bash
    npm install
    ```

### Running the App
- In browser:
    ```bash
    ionic serve
    ```
    This will launch the app in your web browser at `http://localhost:8100`

- If you would like to access the application from a mobile device:
    ```bash
    ionic serve --host=0.0.0.0
    ```
    The app will then be accessible via your computer's local IP address. You can open the URL `http://192.168.x.x:8100` in your mobile browser.

### Additional Notes
- Weather API key: \
    The weather route uses the OpenWeatherMap API. Ensure the API key in `src/app/services/weather.service.ts` is still valid. Else, update the key with your own.
