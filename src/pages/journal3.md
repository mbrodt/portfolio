---
title: 'Work journal 11/2 - 17/2'
date: '2019-02-17'
icon: 'journal.svg'
type: 'journal'
---

Back again from my holidays! Had a lot of stuff to catch up on after having been gone a week, so didn't have much time to work on personal projects. However, I did make a few interesting changes to my [Reddit browser](https://reddit-browser.netlify.com/).

## Reddit Browser

Since React Hooks are now officially out and ready for production (!!!) I implemented a useLocalStorage hook. This hook saves the subreddits of the user in localstorage, including whether they are active or not. I figure this will be a nice feature as people are likely to always want to browse the same subreddits, so it makes sense to store those. And using localstorage as a make-shift database for small things like this is perfect to avoid having to deal with a server.

I also added some minor usability optimizations like being able to remove a subreddit (before you could only mark it as inactive) and disabling the "Get Posts" button when no subreddits are active. Lastly, I added a "See More" button to expand a selftext post if it has more than 50 words. This was possible before by clicking on the post excerpt, but having it as a button is more indicative to the user. In the future I'd like to animate this "folding out", but animating height transitions in CSS is a bit tricky, and I havent yet found the best solution for my usecase.

## Portfolio site

I added a new page to my portfolio website to display all of my writing. Before, the front page would display the 5 newest entries in my blog, even if those were work journal entries. I figure these aren't as interesting, and will quickly drown out more useful blog posts for the users. So now the front page only displays "real" blog posts, with the work journals being available on the new "Articles" page.

This also provided the opportunity to refactor the old list of posts into a component, as I now need to display it in 3 different locations (the blog posts on the front page, the blog posts on the "Articles" page and the work journals on the "Articles" page). Components like this is exactly where React and other JS framework shines, as refactoring was super easy and I can just pass the proper props (I'm sorry) and have 3 different lists from the same markup.

That's it for this week! Thanks for reading and I'll see you next week.
