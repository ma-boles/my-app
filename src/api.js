/*import { useEffect } from "react";*/
import React from "react";

const currentDate = getDate();

const seededRandom = (seed) => {
  var m = 2**35-31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s= s* a % m)/m;
  };
};

 function getDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  return {
    year: year,
    month: month,
    day: day
  };
}


export function fetchAPI(date) {
    let result = [];
    let random = seededRandom(date.getDate());

     for (let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
        result.push (i + ":00");
      }
      if(random() > 0.5) {
        result.push(i + ":30");
      }
  }
     return result;    
};

export function submitAPI(formData) {
    return true;
}   

export default function FetchData() {
  const [data, setData] = React.useState([]);

  console.log("component rendered")

  const fetchData = () => {
    fetch("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js")
    .then(response => response.json())
    .then(data => console.log(data))
  }
  React.useEffect(() => {
    fetchData();
  }, []);

  return Object
}
 
 


 


/*
export default function fetchAPI(date) {
 
    // Make a request to your reservation API or data source.
    const response =  fetch("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js");
    
    // Parse the response as JSON.
    const data =  response.json();

    // Extract the available reservation times from the data.
    const reservationTimes = data.availableTime;

    // Return the array of available reservation times.
    return reservationTimes;
 
    return []; // Return an empty array or handle the error in some way.
  }
*/


