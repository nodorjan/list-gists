## Start the application

Clone `https://github.com/nodorjan/list-gists.git`

then (from the project folder)

`npm install`

`npm start`

This will start the app on `localhost:3000`

To run the app on demo / test data instead of live, add a query parameter named demo: `localhost:3000?demo=yes`

## Testing

At this point of loose ended specs I think it makes the most sense to 
allow for demo runs (`?demo=yes` in the url) to play with different 
scenarios that may or may not show up with the live data. 

For conversations with the UX or the business person, 
more demo scenes and could be added to `src\demoCalls.js`. I 
didn't really try to be complete here/

The input of the GIT user name should be improved in some way. My temporary 
solution for quicker development, demo and qa is to expose the owners of the 
latest public gists as buttons of selecting that user. 

The user list works for the demo version as well.

## Some questions and assumptions

I didn't find any way allowing pagination with the API that retrieves the gists of a user. I assumed that the list I receive is always complete. 

I am not happy with making the viewer click on every gist to see the forks. As an 
initial suggestion it might beat the 
idea of starting a request with every single gist when the forks component loads; 
I am not sure.

