Welcome to Probot on Glitch
=========================

This is the Glitch equivalent of running `create-probot-app` to generate a new probot app locally. Updates to your code will instantly deploy and update live.

To get your own Glitch-hosted Probot up-and-running, follow these steps. If you need more detail, the [Probot Docs](https://probot.github.io/docs/development/#configuring-a-github-app) are a great place to go to learn more.



## Step 1: Remix this Glitch app
When you [Remix](https://glitch.com/help/remix/) an app on Glitch you get your own **🤖Glitch Probot App**. You'll start with a randomly generated **🎏Glitch app name** ([created using friendly-words](https://friendly-words.glitch.me/)) that determines your url. Like `friendly-rabbit` which has a url of `friendly-rabbit.glitch.me`. This is your **🐠Glitch app URL**. You can [change it](https://glitch.com/help/how-do-i-change-my-projects-name-description-avatar/) and if you do your **🐠Glitch URL** will change. 


## Step 2: Create a 😸 Github App
The next step is to create a Github app. Probot now has a handy button that does this for you automatically! Click the **Glitch 🕶 Show** button. In the editor it's right up top next to your  **🎏Glitch app name**.

It will take you to your **🐠Glitch app URL** + `/probot`. And you'll see a button that says "Register Github App." Click it and it will take you to **Github** where you'll create a unique name for your **😸Github App**.

It will ask you to install to your Github account or one of your teams. It will say the permissions are " No access to code" for now but we'll fix that in step 3. Head back to **Glitch** and check your **🗝[Glitch .env](https://glitch.com/help/env/)** – you'll see the values for your private key, app ID, and webhook secret have been automatically filled in for you!


### Manually create a 😸 Github App 
If you'd prefer to do this manually or the automatic set-up doesn't work, here is how to do it: 

1. Head to your [GitHub Apps settings](https://github.com/settings/apps). You might want to do this in a new window, because we will be copying-and-pasting information back and forth between Github and Glitch.
2. Click "New Github App"
3. You'll be taken to "Register new GitHub App"
4. Put your **🐠Glitch app URL** in the "User authorization callback URL
" and "Webhook URL" fields - should look like `https://your-app-name.glitch.me`
5. Fill in "Webhook secret (optional)" with a **🤐Webhook secret password**. Use any password you'd like. 
6. Scroll down to the bottom and click the "Create GitHub App" button. You'll be taken to your **⚙️Github App's General Settings page**
7. Head back to your **🤖Glitch Probot App** and put that **🤐Webhook secret password** value in **🗝[Glitch .env](https://glitch.com/help/env/)** in the `WEBHOOK_SECRET` line after the `=`
8. Now go back to **⚙️your Github App's General Settings page** and you'll see some info. You should see an **🆔App ID value** which should be a few numbers
9. Head back to your **🤖Glitch Probot App** and put that **🆔App ID value** value in **🗝[Glitch .env](https://glitch.com/help/env/)** in the `APP_ID` line after the `=`
10. Whew, now we need to go back to **⚙️your Github App's General Settings page** and scroll to the "Private keys." You'll need to generate and download a **🔑 private key** to **💻  your computer**
11. Now that key is like a password, so we **don't** want to drag it in to your Glitch app to get it in here. Instead we'll get it to our clipboard and paste it into Glitch. To copy from the command like, open a terminal on your **💻 your computer** (not Glitch). `cd` to your download folder  and run `cat your-key-name.pem | pbcopy` for Linux/Mac or `clip < /path to key` for Git Bash in Windows. You can also open the file in a plain text editor like Notepad, VScode, or Sublime Text and copy from there. Now your **🔑 private key** is in your clipboard so you can paste it.
12. Head back to your **🤖Glitch Probot App** and click "New File" on the left side file tree and type `.data/private-key.pem`. Then click "add file." Paste your  **🔑 private key** into it. 

### Step 3: Give your Probot permissions! 
Sadly your Probot is not allowed to do anything. It's not allowed to read any info either. Let's give it the right permissions to be able to do those things. 

Head to your **⚙️Github App's General Settings page**. Click on the "Permissions & events" tab. 

Go to the "Permissions" section and add the following permissions:
- Issues - read & write 

Once you've done that, scroll down and you'll see a "Subscribe to events" section. This section allows Probot to "subscribe" to events so that Github knows to tell Probot about code. Check the following:
- Issues

### Step 4: Add your Probot to a repository
Now head to the "Install app" tab on your  **⚙️Github App's General Settings page**. 

From here you'll see a list of your Github Accounts and can install your **🤖Glitch Probot App** on any of your repositories. 

If you already installed it in an account check the ⚙️ gear button to update your permissions and install it to a specific repository. 

### Step 5: Try it out! 
Open a new issue in the repository where you installed your app, and watch for your **🤖Glitch Probot App** to reply!

Head back to our [Webhook Docs](https://probot.github.io/docs/webhooks/) to learn how to start building your app.

## Glossary 
- **🤖Glitch Probot App**: Your Probot, hosted on Glitch
- **🎏Glitch app name**: The name of your app on Glitch
- **🐠Glitch URL**: the URL of your Glitch Probot app
- **😸Github App**: A Github App that your **🤖Glitch Probot App** uses to commicate with Github.
- **🤐Webhook secret password**: A password that your **😸Github App** will expect from your **🤖Glitch Probot App**
- **⚙️your Github App's General Settings page**: The settings page on Github for your **😸Github App**
- **💻 your computer**: Your own computer
- **🆔App ID value**: Your **😸Github App**'s unique ID number, find it on **⚙️your Github App's General Settings page**
- **🔑 private key**: A secret key you download from **⚙️your Github App's General Settings page** and need to put in your **😸Github App** that allows it to talk to Github 
- **🗝[Glitch .env](https://glitch.com/help/env/)**: A file in your **🤖Glitch Probot App** used for storing keys, passwords, and other secure info
      
#### About Glitch

**Glitch** is the friendly commmunity where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).

Glitch is made by [Fog Creek](https://fogcreek.com/)
\ ゜o゜)ノ
