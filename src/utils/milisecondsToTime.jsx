import React from 'react'

const milisecondsToTime = (time) => {
    var ms = time % 1000;
    console.log(ms);
    time = (time - ms) / 1000;
    console.log(time);
    var secs = time % 60;
    console.log(secs);
    time = (time - secs) / 60;
    console.log(time);
    var mins = time % 60;
    console.log(mins);
    time = (time - mins) / 60;
    console.log(time);
    var hrs = time % 60;
  
    return `${hrs}:${mins}:${secs}.${ms}`;
  }

export default milisecondsToTime