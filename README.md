Welcome to Probot on Glitch
=========================

This is the Glitch equivalent of running `create-probot-app` to generate a new probot app locally. Updates to your code will instantly deploy and update live.

To get your own Glitch-hosted Probot up-and-running, follow these steps. If you need more detail, the [Probot Docs](https://probot.github.io/docs/development/#configuring-a-github-app) are a great place to go to learn more.

## Step 1: Remix this Glitch app
When you [Remix](https://glitch.com/help/remix/) an app on Glitch you get your own __🤖Glitch Probot App__. You'll start with a randomly generated __🎏Glitch app name__ ([created using friendly-words](https://friendly-words.glitch.me/)) that determines your url. Like `friendly-rabbit` which has a url of `friendly-rabbit.glitch.me`. This is your __🐠Glitch URL__. You can [change it](https://glitch.com/help/how-do-i-change-my-projects-name-description-avatar/) and if you do your __🐠Glitch URL__ will change. 


## Step 2: Create a 😸 Github App
The next step is to create a Github app. Probot now has a handy button that does this for you automatically! Click the __Glitch 🕶 Show__ button. In the editor it's right up top next to your  __🎏Glitch app name__.

It will take you to your __🐠Glitch URL__ + `/probot`. And you'll see a button that says "Register Github App." Click it and it will take you to __Github__ where you'll create a unique name for your __😸Github App__.

It will ask you to install to your Github account or one of your teams. It will say the permissions are " No access to code" for now but we'll fix that in step 3. Head back to __Glitch__ and check your __🗝[Glitch .env](https://glitch.com/help/env/)__ – you'll see the values for your private key, app ID, and webhook secret have been automatically filled in for you!


### Manually create a 😸 Github App 
If you'd prefer to do this manually or the automatic set-up doesn't work, here is how to do it: 

1. Head to your [GitHub Apps settings](https://github.com/settings/apps). You might want to do this in a new window, because we will be copying-and-pasting information back and forth between Github and Glitch.
2. Click "New Github App"
3. You'll be taken to "Register new GitHub App"
4. Put your __🐠Glitch URL__ in the "User authorization callback URL
" and "Webhook URL" fields - should look like `https://your-app-name.glitch.me`
5. Fill in "Webhook secret (optional)" with a __🤐Webhook secret password__. Use any password you'd like. 
6. Scroll down to the bottom and click the "Create GitHub App" button. You'll be taken to your __⚙️Github App's General Settings page__
7. Head back to your __🤖Glitch Probot App__ and put that __🤐Webhook secret password__ value in __🗝[Glitch .env](https://glitch.com/help/env/)__ in the `WEBHOOK_SECRET` line after the `=`
8. Now go back to __ ⚙️your Github App's General Settings page__ and you'll see some info. You should see an __🆔App ID value__ which should be a few numbers
9. Head back to your __🤖Glitch Probot App__ and put that __🆔App ID value__ value in __🗝[Glitch .env](https://glitch.com/help/env/)__ in the `APP_ID` line after the `=`
10. Whew, now we need to go back to __ ⚙️your Github App's General Settings page__ and scroll to the "Private keys." You'll need to generate and download a __ 🔑 private key__ to __💻  computer__
11. Now that key is like a password, so we __don't__ want to drag it in to your Glitch app to get it in here. Instead we'll get it to our clipboard and paste it into Glitch. To copy from the command like, open a terminal on your __💻 your computer__ (not Glitch). `cd` to your download folder  and run `cat your-key-name.pem | pbcopy` for Linux/Mac or `clip < /path to key` for Git Bash in Windows. You can also open the file in a plain text editor like Notepad, VScode, or Sublime Text and copy from there. Now your __ 🔑 private key__ is in your clipboard so you can paste it.
12. Head back to your __🤖Glitch Probot App__ and click "New File" on the left side file tree and type `.data/private-key.pem`. Then click "add file." Paste your  __ 🔑 private key__ into it. 

### Step 3: Give your Probot permissions! 
Sadly your Probot is not allowed to do anything. It's not allowed to read any info either. Let's give it the right permissions to be able to do those things. 

Head to your __⚙️Github App's General Settings page__. Click on the "Permissions & events" tab. 

Go to the "Permissions" section and add the following permissions:
- Issues - read & write 


Once you've done that, scroll down and you'll see a "Subscribe to events" section. This section allows Probot to "subscribe" to events so that Github knows to tell Probot about code. Check the following:
- Issues

### Step 4: Add your Probot to a repository
Now head to the "Install app" tab on your  __⚙️Github App's General Settings page__. 

From here you'll see a list of your Github Accounts and can install your __🤖Glitch Probot App__ on any of your repositories. 

If you already installed it in an account check the ⚙️ gear button to update your permissions and install it to a specific repository. 

### Step 5: Try it out! 
Open a new issue in the repository where you installed your app, and watch for your __🤖Glitch Probot App__ to reply!

Head back to our [Webhook Docs](https://probot.github.io/docs/webhooks/) to learn how to start building your app.

      
#### About Glitch

**Glitch** is the friendly commmunity where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).

Glitch is made by [Fog Creek](https://fogcreek.com/)
\ ゜o゜)ノ
