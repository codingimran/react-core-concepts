import React from "react";
async function GetName() {
  const api = "https://api.namefake.com";
  const cors = "https://cors-anywhere.herokuapp.com";
  const apiData = await fetch(`${cors}/${api}/random/random`);
  const data = await apiData.json();
  const fullName = data.name;
  return fullName;
}
export default GetName;
