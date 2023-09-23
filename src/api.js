/*import { useEffect } from "react";*/
import React from "react";





const seededRandom = (seed) => {
  var m = 2**35-31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s= s* a % m)/m;
  };
};

  function getDate(date) {
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
const currentDateObj = getDate();
console.log(currentDateObj)

const currentDate = new Date(); // Get the current date.
const timeSlots = fetchAPI(currentDate); // Generate time slots based on the current date.
console.log(timeSlots);


export function fetchAPI(date) {
    let result = [];
    /*let random = seededRandom(date.getDate());*/


    if(date instanceof Date) {
      let random = seededRandom(date.getDate());
    } else {
      console.log("Invalid date", date);
      
    }
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
 


 
const availableTimesByDate = {
  '2023-09-29': ['10:00', '11:00', '12:00'],
  '2023-10-01': ['10:00', '11:00', '12:00'],
  '2023-10-02': ['14:00', '15:00', '16:00'],
  '2023-10-03': ['10:00', '11:00', '12:00'],
  '2023-10-04': ['14:00', '15:00', '16:00'],
  '2023-10-05': ['10:00', '11:00', '12:00'],
  '2023-10-06': ['14:00', '15:00', '16:00'],
  '2023-10-07': ['10:00', '11:00', '12:00'],
  '2023-10-08': ['14:00', '15:00', '16:00'],
  '2023-10-09': ['10:00', '11:00', '12:00'],
  '2023-10-10': ['14:00', '15:00', '16:00'],
  '2023-10-11': ['10:00', '11:00', '12:00'],
  '2023-10-12': ['14:00', '15:00', '16:00'],
  '2023-10-13': ['10:00', '11:00', '12:00'],
  '2023-10-14': ['14:00', '15:00', '16:00'],
  '2023-10-15': ['10:00', '11:00', '12:00'],
  '2023-10-16': ['14:00', '15:00', '16:00'],
  '2023-10-17': ['10:00', '11:00', '12:00'],
  '2023-10-18': ['14:00', '15:00', '16:00'],
  '2023-10-19': ['10:00', '11:00', '12:00'],
  '2023-10-20': ['14:00', '15:00', '16:00'],
};


const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
      setTimeout(() =>{
          if(availableTimesByDate[date]){
              resolve(availableTimesByDate[date])
          }
          else{
              reject(new Error('No available times for the selected date.'));
          }
      } , 1000)
  })
}

const submitAPI = (formData) => {
  
  availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true); // Simulate successful submission
      } else {
        reject(new Error('Form submission failed.'));
      }
    }, 1000); // Simulate API delay
  });
};

export{fetchAPI,submitAPI}
*/




