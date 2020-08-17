# Recaptcha v3 with Javascript

## How to run

1. Go to `server` folder and run:

    ```
    npm install

    npm start
    ```

    The server side will run on port 3333.


2. Then go to `client` folder and run:

    ```
    npm install

    npm start
    ```

    The client side will run on port 3000. Access `http://localhost:3000/`.


3. Get your keys from `https://www.google.com/recaptcha/admin` and set them on
    - client/index.html
    - client/js/controllers/RecaptchaController.js
    - server/app/api/index.js

    More information about how to get these keys check 

    >_reCAPTCHA v3 returns a score for each request without user friction. The score is based on interactions with your site and enables you to take an appropriate action for your site. Register reCAPTCHA v3 keys [here](https://www.google.com/recaptcha/admin/create)._

    _https://developers.google.com/recaptcha/docs/v3_