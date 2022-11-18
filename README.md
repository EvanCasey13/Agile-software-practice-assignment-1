# Assignment 1 - Agile Software Practice

Name: Evan Casey

## Setup requirements.

To use this application you will need to install [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) and create the cypress.env.json file in the movies folder of the project and include your TMDB API key inside of it.

To add your api you can include it in cypress.env.json like so:
```
TMDB_KEY=<YOUR_TMDB_API_KEY>
```

To use this application you will first need to create a .env file in the movies folder of the project and add your api key from [TMDB](https://developers.themoviedb.org/3/getting-started/introduction).

To add your api you can include it in the .env like so:
```
REACT_APP_TMDB_KEY=<YOUR_TMDB_API_KEY>
FAST_REFRESH=false
```

### Work Carried out.

I created eight end to end tests that demonstrates the new functionality in the application.

### Continuous integration 

Using GitLab I created a pipeline which includes jobs to Install, Build and Test, these jobs are specific to each branch, on the main branch, the jobs to Install, Build and Test are performed whereas on the develop branch only the jobs to Install and build are performed. 

### Branching policy 

I followed the given branching policy in which the repository has two core branches main and develop with feature branches emanating from the develop branch which were merged into the develop branch & then the develop branch was merged into the main branch. This can be seen in the commit history of this repository.

I also followed the given branching policy for the CI pipeline with the develop branch executing only Install and Build jobs and the main branch executing Install, Build & Test jobs.

### Source control 

As mentioned before you can check the log history of this repository to see my work effort and informative messages where I used a Branch-Edit-Merge workflow set out in the Branching policy for this assignment.

### Custom commands and Error/Exception Handling.

All tests in this test suite use Cypress custom commands located in the commands.js file inside of the support folder of the cypress folder. Inside of each of these custom commands I also have included Error & Exception handling related to the tests. 

### Bundling/Code splitting

I updated the application to use Bundling and Code splitting which can be seen in the index.js file located in the src folder & inside of the templateActorListPage, 
templateMovieListPage & templateShowListPage index.js files.

### E2E Tests (Functionality)

+ deleteFavourite.cy.js - Demonstrates removing a movie from your favourites list.
+ login.cy.js - Demonstrates login functionality using firebase authentication.
+ pagination.cy.js - Demonstrates the pagination functionality implemented using react query.
+ registration.cy.js - Demonstrates the registration functionality using firebase authentication.
+ review.cy.js - Demonstrates the review functionality for a movie.
+ searchActors.cy.js - Demonstrates the searching functionality implemented for actors using react query.
+ searchMovies.cy.js - Demonstrates the searching functionality implemented for movies using react query.
+ searchShows.cy.js - Demonstrates the searching functionality implemented for shows using react query.

### Automated testing - Cypress component testing

I also configured [Cypress component testing](https://docs.cypress.io/guides/component-testing/react/quickstart), here I followed the link given in the assigment specification and then went on to create three component tests based on functionality of the e2e tests. I did this for the Login, Register & Review components to demonstrate my understanding of component testing I did not do it for all e2e test as I felt it irrelevant.

