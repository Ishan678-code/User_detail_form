async function viewdata() {
  try {
  
  const url=document.URL;
  const url2=url.split('?')[1];
  const id = new URLSearchParams(url2);
  let userid=0;
  for(let key of id.entries()){

    userid=key[1];
  }

    const response = await fetch(`http://localhost:8000/submit/${userid}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const userData = await response.json(); // Parse the JSON response from the server
      console.log("User Data:", userData);

      // Check if data is not empty or undefined
      if (userData) {
        // Display the user data in the pre element
        const preElement = document.getElementById("viewDetails");
        preElement.textContent = JSON.stringify(userData,null,2);
      } else {
        console.error("No data available.");
        alert("No user data found.");
      }
    } else {
      console.error("Error fetching user data.");
      alert("User not found.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}








