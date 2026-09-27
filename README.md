# The original Natours project

I want to start out by saying this is entirely written by me, and not by any AI agent. This also applies to all the other READMEs.

Setting this aside, this project was done when following the Node.js course of Jonas Schmedtmann on Udemy during this last summer and was the final and biggest project of the course.

## Project's URL

https://original-natours.onrender.com/

## The project

It is a full-stack project, including both the API and the pug templates used for the frontend.

The course included a lot of very useful lectures about express, the framework used for Node.js, and mongoose, the ODM for MongoDB in Node.js.

Lastly it also included the frontend part done with the pug templates which enabled the dynamic server side rendering of the various pages of the website.

### The API

There is not much to say about it, a "lot" of error handling (it could and maybe should be more at times, even tho nobody likes this part), a lot of boilerplate code we're used to now delegate to agents and a lot of protected routes. The API isn't really meant to be a public API, as I said most of the routes are protected behind a login and only the routes which expose tours aren't.

### The frontend

Done with pug templates makes us go back in time to the old days where no libraries like React existed and when JavaScript wasn't as used as it is today (probably too much by some). It is a decently looking frontend from my point of view, but unfortunately not responsive. As said before it is always dynamically server side rendered and we don't have any statically rendered page. This is obviously not the best way to do it and was pretty much revisited in the new Next.js frontend.

## Conclusions

The project was pretty nice and fun to do, Jonas has been a very good teacher and I can say I've learnt more than enough for the money spent. Hope you'll like it and I hope you'll like even more what you'll see in the newer Natours that I've created these last few weeks.

Best,
Edoardo Antili
