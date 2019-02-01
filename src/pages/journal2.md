---
title: 'Work journal 28/1 - 3/2'
date: '2019-02-01'
icon: 'journal.svg'
---

Back for another work journal update. I'm posting this a few days early as I am going skiing tomorrow, and will be gone the entirety of next week (so no update next week).

## Animate on Scroll

I found this cool library called Animate on Scroll (AOS). It allows you to use cool CSS transitions / animations by adding attributes to the HTML elements that you want to animate. The animation will trigger when the HTML element scrolls into the viewport, which is super handy. There is a number of different transitions, and they are customizeable in terms of duration, delay before activating etc. The transitions are easy to use and make your website feel much more alive. They are cool enough so you notice them, but not so fancy that it distracts from the content.

The library did cause a small bug on my website - because I was using it to animate an element in from the side, it made the surrounding container too large which allowed the user to scroll to the side, breaking the design. However, this was easily fixed by adding

```css
overflow: hidden;
```

to the `body` element.

## React meetup

I went to a React meetup which had two interesting talks:

1. Forms in React
1. Hooks in Production

The first talk mentioned the different approaches and libraries for handling forms in React, and presented a lot of the issues and complexity related to forms. Mostly how it is difficult to have a form with nice user experience without the code getting messy and out of hand.

The second talk was about the new feature coming to React, hooks. Hooks are a way to add state to functional React components, which means you don't need a class component to keep state anymore. The most common hooks are:

1. `useState`, which is a clean way of keeping state in a component.
1. `useEffect`, which can run whenever a variable changes or a component mounts/unmounts and allow for the use of side effects (like setting the title of the webpage).
1. `useContext`, which allow you to keep your state in a Context Object to be used throughout your application.

Both talks were interesting and well done, and involved a lot of practical usage (code), which helps me better understand a topic.

## Inventing on Principle talk

Finally, I came across a mind-blowing talk by Bret Victor called [Inventing on Principle](https://www.youtube.com/watch?v=PUv66718DII). Bret goes into detail about how to form a principle to guide your future work - and how it has helped him create amazing applications that empower his users. An example from his talk is his own principle about how creators need an immediate connection to what they are creating. For example, writing some code and running it through a compiler in order to see the work isn't good enough. There is a lot of room for improvement to make creating more visual and to provide instant feedback.

Really, there's not much use for me to describe the examples he mentions - watch the talk and you will be hooked immediately. The things that his principle allow him to focus on are truly groundbreaking, and I am so happy that I stumbled across his talk.

That's it for this week. As mentioned, next week I will be on holidays, so no update there - looking forward to be back in 2 weeks :)
