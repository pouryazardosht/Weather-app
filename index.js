const APIKey = "6271a675cd6450646f0a8245b8d63eae";
const container = document.querySelector(".container");
const search = document.querySelector('#search');
const btn = document.querySelector("button");
const result = document.querySelector("#result");
const getData = (e) => {
    const city = search.value;
    e.preventDefault();
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;
    axios.get(api)
        .then((res) => {
            let temp = res.data.main.temp;
            let status = res.data.weather[0].main;
            let highTemp = res.data.main.temp_max;
            let lowTemp = res.data.main.temp_min
            container.style.display = "none";
            result.innerHTML = `
      <div class="result-container">
        <h3>${city}</h3>
        <p id="tempValue">${temp}°</p>
        <p id="tempStatus">${status}</p>
        <div id="HighLow">
          <p>H:${highTemp}°</p>
          <p>L:${lowTemp}°</p>
        </div>
      <button onClick="location.reload()"; class="back-color">Back</button>
      </div>
            `;
        })
        .catch((e) => {
            document.querySelector('.container .invalid').style.display = "flex";
        })
}
btn.addEventListener("click", getData);
