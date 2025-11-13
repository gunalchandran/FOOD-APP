fetch("navbar.html")
  .then(response =>response.text()) // converting the raw data to text formated data 
  .then(data =>{
    document.getElementById('navbar-id').innerHTML = data;
  })
  .catch(error => console.error("Error loading navbar: ",error));