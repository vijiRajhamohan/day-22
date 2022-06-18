const row = document.getElementById("row");
fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
  .then((res) => res.json())
  .then((data) => countries(data))

const countries = (data) => {
  data.forEach((country) => {
    const div = document.createElement("div")
    div.className = "col-lg-4 col-sm-12";
    div.innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-header text-center text-white" style="background-color:black">${country.name}</div>
    <img src='${country.flag}' class="card-img-top" alt="...">
    <div class="card-body text-center text-white" style="background-color:green">
      <h5 class="card-title">Capital: ${country.capital}</h5>
      <h5 class="card-title">Region: ${country.region}</h5>
      <h5 class="card-title">Country Code ${country.alpha3Code}</h5>
      <a class="text-white"href="https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=2182164aa812e8df73cc861a4d1cb33c">Click</a>
    </div>
  </div></br>`
    row.appendChild(div)
  })
}

