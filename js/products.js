const endpoint = "http://localhost:5000"
let shoes = [];
fetch(`${endpoint}/products`)
.then(response => {
   return response.json();
})
.then(data => {shoes = data.products; init();});
function init(){
    shoes.forEach(shoe => {console.log(shoe)})
}