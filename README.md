# WallOfAnonymity

A web application that allow users to create posts (anonymously) and chat with anyone! The specific problem we aim to tackle is social isolation and mental well-being in this difficult time of COVID-19. During this time, people are very disconnected and the lack of face-to-face interactions makes it difficult to forge deep connections with people, thus people may feel very lonely and helpless. This is where Wall of Anonymity comes in, it's a place where people can freely spill their troubles or worries when they think that there's no one that they can speak or talk to. They can also post something when they are in need of encouraging messages/advice/support by posting a note and the idea is that a kind stranger, perhaps with similar experiences, can leave some advice or just leave an encouraging note (unimplemented). Alternatively, people who are lonely and just want to have someone to talk to can use the chatbox to make conversations as a community. Having a place to throw emotional baggage is important because it helps an individual's mental health, so this is what our web application is made for! While this web app is not made for maintaining relationships, in a way it revolutionises making new relationships and friendships. The traditional idea is that when you make new relationships  

We think that our hack is relevant to both the Social and Education Problem Statements. While it seems that it's more related to social, this space can even be used (or be further developed) to provide a space where people can learn from one another about anything under the sun. For example, students who have problems related to their academic lives can post their questions up. Adults who are facing issues in their working life can post their issues and seek advice from others. Admittedly however, perhaps categorisation of post-its or creating new spaces specific for these target groups will be more helpful in terms of organisation. 


This web application is currently not deployed.

## Getting Started

### Prerequisites

- Node.js
- Any modern web browser (Google Chrome, Safari, Firefox etc.)

## Installation (running on local host)

1. Clone this repository.

2. Navigate to the root directory of this project in terminal.

3. Run ```node multiServerExpress.js [portNumber] [&]```
  * If no ```[portNumber]``` is given, ```3000``` will be the default port number used
  * Use ```&`` to run the program in the background

4. Open two different browsers and key ```localhost:[portNumber]``` in the address bar
  * If no ```[portNumber]``` was used, key ```localhost:3000``` instead.


## Built With

* HTML, CSS, Javascript, Bootstrap (frontend)
* Node.js, Socket.io, express (backend)

# Wishlist Features
Due to the constraint of time, there were several features that we had like to see implemented in our web application but was unable to: 
1. The original idea is that kind strangers can come along to comment on a post to give advice/help/support, especially if they have similar experiences, or just simply leave an encouraging note. Perhaps a possible approach to implement this was to implement mini "chatboxes" on each post-it note similar to how we implemented the "Chat with Community" feature. 
2. Another potential feature could have been a time-limit for these post-its. For example, if someone simply wanted to rant anonymously (with no intention of obtaining specific help), the post-it can be taken down after 24 hours (inspired by the idea of Instagram Stories). Or if a person was genuinely seeking for help and advice for a period of time, perhaps they could set a time limit of how long the post will be up o 

## Authors

* [Chua Yan Xin, Elicia](https://github.com/iileesha)
* [Ngoh Wei Yue](https://github.com/nweiyue)
