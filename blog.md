# 🍳 How Beatrix Built Food Bloom SMS Feature (meal reminder and food recipe generator) 🍳
<img src = "https://drive.google.com/uc?export=view&id=1hOUoEsktI31PyzrRE5ZzXBsSSTwVucoK" alt = "My picture" width = 600/>

## Tagline
API, Timer trigger, Azure function, HTTP function, Food API

## About Me
Beatrix Cendana is a business student, UX designer/Writer, and tech writer based in Seattle, WA, US. She got a bachelor's degree in medicine from Indonesia and an Associate degree in Mathematics from Pierce College. She decided to switch her career path to tech after graduating from Pierce. She is passionate about fast-paced career development, which inspires the way the world functions and lives. 

## Introduction
As a UX designer, tech writer, and international student that works or studies from home due to the pandemic, I need a product that can help me to generate a random recipe for daily cooking. Also, I need a reminder when it is time for me to eat lunch or breakfast. The reason is that I always focus on working without thinking about having a meal on the proper schedule. Before creating this idea or solution, I researched by asking ten people in my Discord group. 
> 6 out of 10 always eat instant noodles or instant foods because they have no idea what to cook or prepare.

So, I decided to create the SMS feature that can remind people to eat based on a proper schedule and add the feature to help them get the random recipe.

## Behind the scenes (include and describe flowchart)
I made two flowcharts. In case the Tasty API doesn't work (sometimes it has an issue with the key), I can use another API which is called [Spoonacular Food API](https://spoonacular.com/food-api?ref=apilist.fun).

<img src = "https://drive.google.com/uc?export=view&id=1LxSrKuqnbWs-hFxVCxPIu98NP6tnn_XX" alt = "Flowchart of Food Bloom Reminder and Recipe Suggestion v1" width = 450/><img src = "https://drive.google.com/uc?export=view&id=1rAEJWcS5ZiZkwBjKvWJg_NKZLsNPhhYo" alt = "Flowchart of Food Bloom Reminder and Recipe Suggestion v2" width = 450/>

<br>

## The Technologies (Azure services, APIs, etc.)
### Azure Functions
- [x] Timer trigger function: to give the reminder to the user when it is time to cook/eat.
  <img src = "https://drive.google.com/uc?export=view&id=1JGWzWfogGGCHqITHdlK-EeiuwDrhvlr7" alt = "Tech 1 picture" width = 600/>
- [x] Food API: Search and understand the users' food preferences by pulling out relevant and detailed food recipes.
  <img src = "https://drive.google.com/uc?export=view&id=1RCz9jyAqGXBzgKpbhvMRnzD_yL4x2qVU" alt = "Tech 2 picture" width = 600/>
<br> <br>

### Twilio SMS API and Webhook
- [x] The Technologies (Azure services, APIs, etc.)
- [x] By saving the environment variable in Azure configuration, I can call the timer trigger function to send a message to my phone
  <img src = "https://drive.google.com/uc?export=view&id=1sZttBVuxt2ZoKQJalzro9m-woTmNYcuW" alt = "Tech 3 picture" width = 600/>
<br>

### Front-end languages
No front end or UI in this feature. The language that I applied is Node.js.

### Packages
- [x] Node-fetch
- [x] Express
- [x] HTTP

<br>

## Step by step (with code snippets)
### The two reminders (breakfast and lunch) 
Based on the timezone that people choose, they can get notifications when to prepare the meals. 
<img src = "https://drive.google.com/uc?export=view&id=1kXfsDLvE3YDZ6JR6jAgIG7FnBDJNEcpU" alt = "Azure timer code" width = 700/>
<br>
<img src = "https://drive.google.com/uc?export=view&id=1moDiHEi1GfpT645FWwM_aQ90-P4z6aSo" alt = "Timer reminder in SMS" width = 600/>
<br>
<br>

### Choose one ingredient you would like to have
You can type any ingredients that you would like to have and get one random recipe (including the name of the recipe, description, and link). 
<br>
<img src = "https://drive.google.com/uc?export=view&id=1itBp2TOt-oT-yhdXn2ZNNIlPRMKVfSsQ" alt = "HTTP function" width = 700/>

### Satisfied or not?
You can re-type the random ingredient again if you are not satisfied enough with the random recipe that API generates for you :) Easy, right?

<br>

## Challenges + lessons learned
The challenges that I ran into were mostly figuring out the best documentation to help me work on the APIs. Also, debugging the code was the most challenging part for me due to the limited knowledge regarding serverless functions. 
During my time at the camp, I learned a lot about `using the time wisely, being patient, and not giving up doing more research`. If one thing doesn't work, it doesn't mean this will be the end of the world. 
I also realize that I couldn't finish the final project perfectly due to the limited time working on the code. I also had to juggle campus stuff and work. Sometimes, I wanted to give up and thought that this thing is not for me. But in my mind, I believe there is something I can reach if I want to dig more. 
> There is no failure except in no longer trying. <br/>
> -- *Elbert Hubbard*

<br>

## Thanks and Acknowledgements
Thanks to BitProject for giving me such a huge opportunity to learn more about API or serverless function, participate in the tech conferences, and practice my presentation skills. I never thought that I would work on the development process or backend stuff. Also, I appreciate Jonah for spending time mentoring me and debugging the code together. Her strong coding passion opens my eyes that being a developer is fun! Thanks Jonah!

I hope in the future that this feature can be useful for people that have problem with eating schedule and problem to choose food recipe. 

<br>

## What to do next?
I think I will take a break for two weeks then I will probably fix some bugs, such as timezone problem with Twilio (because it is always default in CET) and change all functions to Azure Durable Functions because this project is easier to be implemented with that. I didn't do this earlier because I still have limited knowledge regarding how Durable functions work. If this project successfully get the best result, I plan to implement this feature in the Android apps. It will require more work to do since I have to do more research and design/UI stuff, but I think this project will be more fun! I would be so glad to earn more experience working as a designer and developer at the same time. 

## Final Thoughts
The camp was such a wonderful experience! I never thought that I would have a chance to work on this big project. Something that relates to serverless always amazes me! I don't know that one API can change anything and create a real product that can benefit others. :) 

<img src = "https://drive.google.com/uc?export=view&id=1HmlnO6sg0h95H9sxvtRAIkJ-O1vfVrNh" alt = "Final thoughts hello world" width = 600/>



> Last but not least, let's say 🥂🥂 thank you for all BitProject team and mentors for all your hardwork! 🥂🥂 Cheers! -- Beatrix Cendana

<img src = "https://drive.google.com/uc?export=view&id=1_bgzBAHAqzV6ZVILLz49fLY2njJHvWSH" alt = "Huge thanks" width = 600/>
