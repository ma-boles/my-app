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

const currentDate = new Date(); 
const timeSlots = fetchAPI(currentDate); 
console.log(timeSlots);


export function fetchAPI(date) {
    let result = [];  
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
 