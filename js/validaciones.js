function view() {
  const url = "https://api-node-products.herokuapp.com/products/";
  
  fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      let html = '';
      for(let i = 0; i < json.length; i++){
        html += `<tr><td>${json[i].id}</td><td>${json[i].name}</td><td>${json[i].existence}</td></tr>`;
      }
      document.querySelector('#result').innerHTML = html;
    });
    
}
window.load = view();
