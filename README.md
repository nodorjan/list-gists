## Start the application

Clone `https://github.com/nodorjan/list-gists.git`

then (from the project folder)

`npm install`

`npm start`

This will start the app on `localhost:3000`

To run the app on demo / test data instead of live, add a query parameter named demo: `localhost:3000?demo=yes`

## Testing

At this point I think it makes the most sense to test the front 
end on mocked data (`?demo=yes` in the url). This way scenarios 
that may be hard to find in the live data (forks) can be tested
and demoed.

For conversations with the UX or the business person, 
more demo cases could be added to `src\demoCalls.js`. I 
didn't really try to be complete here/

The input of the GitHub user name should be improved in some way. My temporary 
solution for quicker development, demo and qa is a user list 
to expose the owners of the 
latest public gists; you can click on them (instead of 
 typing the user name) to see their public gists.

The user list works for the demo version as well.

## Some questions and assumptions

I didn't find any way allowing pagination with the API that retrieves the gists of a user. I assumed that the list I receive is always complete. 

I am not happy with making the viewer click on every gist to see the forks. As an 
initial suggestion it might beat the 
idea of starting a request with every single gist when the forks component loads; 
I am not sure.

