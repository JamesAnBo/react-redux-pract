# React Kata

## Patience grasshopper

Clone down the repo and run ```npm i``` first because it takes a long time to install.
make sure you have the React Developer Tools ([chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) | [firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)) installed.

## Wax on, Wax off

- Watch this sweet video by Raquel if you haven't already: https://egghead.io/lessons/react-core-concepts-of-react-components-props-and-state
- Start a project in a new folder, use this generator to get a starting setup : https://www.npmjs.com/package/slush-pages-react
- Read the package.json and see what the generator made. Anything new?
- Recreate Raquel's setup and extend it a little
  - see if you can nest a component inside another component


## Don't know. First time you, first time me

- Read [thinking in react](https://facebook.github.io/react/docs/thinking-in-react.html)  
- Do the [react tutorial](https://facebook.github.io/react/docs/tutorial.html)


## Paint house

Study the structure of the react components in this repo.
See if you can understand what html should be generated. 


## Go, find balance

```npm run dev``` and load localhost:8080.

Your job is to pass the tests we have provided. As you make the tests pass the kata-app will update and you will be able to see your components update on localhost:8080. 

Try to understand how the `state` in `client/components/app.js` is passed down as `props` to its child components.  

Run `npm run test` for the tests and in a separate terminal run `npm run dev` to start the app.


The tests use a react testing library [enzyme](http://airbnb.io/enzyme/) and [ava](https://www.npmjs.com/package/ava).  To get a good grasp on how the tests work you will need to refer the enzyme and ava docs. At this stage, just get used to reading enzyme tests, not reproducing them. 
The tests should be attempted in the following order. 

1. Header - Render static markup.  
2. Better header - Render text using props.  
3. Best list - Map through props to generate dynamic html.  
4. Form text area - Pass classes down as props.  
5. Show and hider - Conditionally display content.  
6. Style and button - Render inline styles.  
7. Special filter - Map through props and conditionally display content.  


## Addendum: Different styles of React

You will encounter react code written in a number of different ways. Take a look at `client/components/table-4-ways.js` to see the same component written in 4 different styles. Try importing the component into app.js and passing props into it.  

