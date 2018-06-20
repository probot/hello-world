Welcome to Probot on Glitch
=========================

This is the Glitch equivalent of running `create-probot-app` to generate a new probot app locally. Updates to your code will instantly deploy and update live.

---

## Getting Started

To get your own Glitch-hosted Probot up-and-running:

1. Head on back to our [Devlopment Docs](https://probot.github.io/docs/development/#configuring-a-github-app) to configure your GitHub App.

2. Click the **New File** button (at left on Glitch) and type `.data/private-key.pem`. Then click **Add File**. Open the private key you downloaded during your Github App creation, and copy/paste the contents into your new file.

3. Edit the `.env` file (at left) with your app credentials. 
    - `APP_ID` can be found in the About section of your Github app.
    - `WEBHOOK_SECRET` is the value you generated in Step 2.
    - `PRIVATE_KEY_PATH=` should be set to `.data/private-key.pem`. 
    - `NODE_ENV=` should be set to `production`. 

4. Wait for app to load. A green `Live` label should show up next to the **Show** button when it's finished loading.

5. Head back to our [Webhook Docs](https://probot.github.io/docs/webhooks/) to learn how to start building your app.
---
      
#### About Glitch

**Glitch** is the friendly commmunity where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).

Glitch is made by [Fog Creek](https://fogcreek.com/)
\ ゜o゜)ノ
