import yelp from "../api/yelp";
import { useState, useEffect } from "react";
export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  console.log(results);
  // get data from yelp api
  const searchapi = async (searchTerm) => {
    const response = await yelp.get("/search", {
     params: {
       limit: 50,
       term: searchTerm,
       location: "san jose",
     },
   });
    try {
    } catch (error) {
      setErrorMsg("some error occured");
    }
    setResults(response.data.businesses);
  };

  useEffect(() => {
    searchapi("pasta");
  }, []);
  return [results, searchapi, errorMsg];
};
