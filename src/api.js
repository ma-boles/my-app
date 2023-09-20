

const fetchData = (updateTimes) => {
    fetch("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js")
    .then((response) => response.json())
    .then((data) => console.log(data))
  }
    
  useEffect(() => {
    fetchData();
  }, []);


export default function fetchAPI(date) {
        let result = [];
        
        return result
    }
    
export default function submitAPI(formData) {
        return true
    }   


