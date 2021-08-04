# Project explanation

The project falls under one track, which is `productivity, health, and medicine`

## How it works

Get a reminder to eat breakfast and lunch (two timer trigger functions), choose your favorite ingredients (using Tasty API), and get the food recipe name, description, and link via SMS. 

### Abstract

- **Target user**

    The users work from home (teleworker) and always stay in front of the computer (such as developers, accountants, or designers).

- **What problem you are solving**

    Many teleworkers don't eat on time because of the overloading work. When it is time to eat, they don't know what to cook or to eat. I want to create an app that can help people figure out what healthy foods they can eat.

- **Why this problem matters**

    Many people don't usually eat based on the proper schedule (including me) even though they work from home. It can affect their gut health and productivity at work. 

- **What technologies you are using to solve it**

    I will use Timer Trigger Functions on Azure, Twilio SMS API, and Food REST API (Tasty API). 

- **What the solution is**

    I will create an eating reminder (twice a day) and ask what specific ingredients or foods they want to have in their foods. After users type something (for example, cheese), it will direct them to different healthy foods that contain cheese.

- **Where you got the inspiration for this solution**

    As an international student that works or studies from home due to the pandemic, I need a product that can help me to generate a random recipe for daily cooking. Also, I need a reminder when it is time for me to eat lunch or breakfast. The reason is that I always focus on working without thinking about having a meal on the proper schedule.
    Before creating this idea or solution, I researched by asking ten people in my Discord group.
    `6 out of 10 always eat instant noodles or instant foods because they have no idea what to cook or prepare.`
    

# Technologies

### Azure Services

**Azure Cognitive Services**

- Timer trigger function: to give the reminder to the user when it is time to cook/eat.
- Food API: Search and understand the users' food preferences by pulling out relevant and detailed food recipes.

### APIs

**Twilio SMS API**

- Users will receive the reminders (and the links or images) in their phone.

### Front-end Languages

**Node.js and Javascript**

- Creating time-based reminder.

### Flowchart
<img src = "https://drive.google.com/uc?export=view&id=1iziGo1hok-8pJKzcjbSDzCyiBb2LdIHx" alt = "Flowchart of Food Bloom Reminder and Recipe Suggestion" width = 600/><img src = "https://drive.google.com/uc?export=view&id=1OAw2UzD6rKhNl-UoFHTRCieHYHJ-ogNb" alt = "The user flow of the app should look like" width = 350/>
