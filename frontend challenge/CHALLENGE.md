# Challenge

Create a small application that shows information about 10 of the original pokemons in a table.

## Prerequisites

You need to have node installed on your computer
Download from here https://nodejs.org/en/

## Overview

Create a small application that shows information about 10 of the original pokemons in a table. The column of the table should be dynamic and support showing the following attributes from each pokemon

- Name
- Picture
- Id
- Weight
- Height
- Types

Id and Name is mandatory and should always be shown, while a user should be able to configure if the other columns should be displayed or not. Configuration should be persistent through page reloads. It should be possible for a user to obtain detailed stats(hp, defence, attack etc) about each pokemon in the table by selecting it from the table. All columns displaying numeric data should be sortable.

## Requirements

1. All components must be located in the ./component directory
2. Application should start without type errors
3. The logic that determines what is displayed in the table should be covered by at least 1 test.

When finished, the application should:

1. Render some sort of loading indicator while fetching data
2. Render information about 10 pokemons after data fetching
3. Provide the user with the possibility to chose which columns is displayed
4. Provide the user with the possibility to view detailed stats(hp, defence, attack etc) about each pokemon in the table

## Tips:

**Material-UI**

You can use all the components available in the @material-ui/core or @material-ui/lab packages.

Try to follow material-ui's [API design approach](https://v4.mui.com/guides/api/)

Think about the API of your components. Make them as flexible and extendable as possible.

**Testing**

A good starting point for setting up / writing test in this application would be [create react app -> Testing -> Running Tests](https://create-react-app.dev/docs/running-tests)

## Notes

Do not worry about making this a perfect display. The most important thing is so make informed choices which you are able to talk about when we discuss your solution with you :) If you get stuck, don't hesitate to send a question to ulrik@mnemonic.no.
If you are not able to finish the challenge before your interview, just send a message and ask for a postponed interview and we will set a new date.

## Usable links:

React component library - https://v4.mui.com/

Redux Toolkit Query - https://redux-toolkit.js.org/rtk-query/overview

Pokemon api - https://pokeapi.co/

Material design specification - https://material.io/

Create react app - https://create-react-app.dev/
