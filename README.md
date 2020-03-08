# Day Planner

### Description

This is an exercise in creating a day planner, using the Moment.js library.

- [User-Story](##User-Story)
- [Challenge](##Challenge)
- [Screenshots](##Screenshots)
- [Results](##Results)
- [Lessons-Learned](##Lessons-Learned)

## User-Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Challenge

There were a few challenges with this exercise. One was in making sure the Moment.js library was properly installed, in the browser. Other challenges included making the hourly blocks of content editable, by using local storage.

## Screenshots

We were provided with the below gif as a reference for our work.

![homework demo](./documents/homework-demo.gif)

Upon completion of the task, my web application can be seen in the image below.

![homework finished](./documents/homework-completed.gif)

## Results

The required outputs of this project, including this README, the url of the deployed web application and the url of this repo.

- Deployed App - https://spatiality-dc.github.io/day-planner/

- Github Repo - https://github.com/spatiality-dc/day-planner

## Lessons Learned

- Javascript is still hard.

- I ran into some trouble with my renderEvents function. The lock button was initially propogating content from the active edit box to ALL boxes. To circumvent this, I added in another call call of parent(), though I'm not sure this was the best way. It works though.

- Stacking bootstrap rows still results in cramping on smaller screens. I'm going to have to learn how to have each column in small screen rows be full width. At the moment, they are not stacking properly.
