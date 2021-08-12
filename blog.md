# 🍳 How Beatrix Built Food Bloom SMS Feature (meal reminder and food recipe generator) 🍳
<img src = "https://drive.google.com/uc?export=view&id=1kEJEOER8He9wkvh0p2N3IYJbSDtSeTbQ" alt = "My picture" width = 600/>

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

<img src = "https://drive.google.com/uc?export=view&id=1lmgwj8-GlpT8pP0QMIsnQymw4j_hbO8V" alt = "Flowchart of Food Bloom Reminder and Recipe Suggestion" width = 600/>
<br>

## The Technologies (Azure services, APIs, etc.)
### Azure Functions
- [x] Timer trigger function: to give the reminder to the user when it is time to cook/eat.
  <img src = "https://drive.google.com/uc?export=view&id=1QEyfILJ4wwdVVUe2sG2FPSeBs6L6c14H" alt = "Tech 1 picture" width = 600/>
- [x] Food API: Search and understand the users' food preferences by pulling out relevant and detailed food recipes.
  <img src = "https://drive.google.com/uc?export=view&id=13VVGxtr29AI-U78FbCpDqacZ8qp-tfmY" alt = "Tech 2 picture" width = 600/>
<br> <br>

### Twilio SMS API and Webhook
- [x] The Technologies (Azure services, APIs, etc.)
- [x] By saving the environment variable in Azure configuration, I can call the timer trigger function to send a message to my phone
  <img src = "https://drive.google.com/uc?export=view&id=1p_I4dkiVXeIx9LfLhB0Hb4K5vSD7NpZM" alt = "Tech 3 picture" width = 600/>
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
<img src = "https://drive.google.com/uc?export=view&id=1dmTKq8nK752ZHPlMMeEJluyQ_zFRsN-l" alt = "Azure timer code" width = 700/>
<br>
<img src = "https://drive.google.com/uc?export=view&id=1_CmxslBP9EfJQlZc3DzDlGbwTwURbS9N" alt = "Timer reminder in SMS" width = 700/>
<br>
<br>

### Choose one ingredient you would like to have
You can type any ingredients that you would like to have and get one random recipe (including the name of the recipe, description, and link). 
<br>
<img src = "https://drive.google.com/uc?export=view&id=120JSwVZPrAzWmPVKiVAyHAwV4SnA662v" alt = "HTTP function" width = 700/>

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
Thanks to BitProject for giving me such a huge opportunity to learn more about API or serverless function, participate in the tech conferences, and practice my presentation skills. I never thought that I would work on the development process or backend stuff. 

I hope in the future that this feature can be useful for people that have problem with eating schedule and problem to choose food recipe. 

I will probably embed this feature in future apps after I successfully embed it in the SMS feature. It will require more work to do since I have to do more research and design, but I think this project will help me earn more experience working as a designer and developer at the same time.

<img src = "https://drive.google.com/uc?export=view&id=11V7yE2P4ECIAth4R8fkN1qH0HqoHPan3" alt = "Huge thanks" width = 600/>
