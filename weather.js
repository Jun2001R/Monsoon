async function weatherupdate(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e700c1d513f35d6080e1339e8e13a0cc`);
    const result = await data.json();
    if (data.status == 404) {
        popup.innerHTML = `<div class="alert alert-danger" role="alert">
 <i class="bi bi-emoji-frown"></i> Sorry  City Not Found
</div>`
        setTimeout(() => {
            popup.innerHTML = ``;
        }, 3000)
    }
    else {
        const obj = {
            Thunderstorm: `<i class="bi bi-tropical-storm"></i>`,
            Drizzle: `<i class="bi bi-cloud-drizzle"></i>`,
            Rain: `<i class="bi bi-cloud-hail"></i>`,
            Snow: `<i class="bi bi-snow"></i>`,
            Clear: `<i class="bi bi-brightness-high-fill">`,
            Clouds: `<i class="bi bi-cloud"></i>`,
            Mist: `<i class="bi bi-cloud-fog"></i>`,
            Smoke: `<i class="bi bi-cloud-fog"></i>`,
            Haze:`<i class="bi bi-cloud-fog"></i>`,
            Dust:`<i class="bi bi-cloud-fog"></i>`,
            Fog:`<i class="bi bi-cloud-fog"></i>`,
            Sand:`<i class="bi bi-cloud-fog"></i>`,
             Dust:`<i class="bi bi-cloud-fog"></i>`,
             Ash:`<i class="bi bi-cloud-fog"></i>`,
            Squall:`<i class="bi bi-cloud-fog"></i>`,
            Tornado: `<i class="bi bi-cloud-fog"></i>`,
            clear:`<i class="bi bi-moon"></i>`
        }
        let t = new Date();
        let h = t.getHours();
        var val = result.weather[0].main
        if (val == "Clear" && h >= 18)
            val = "clear";
        weathericon.innerHTML = `<h1> ${obj[val]}
            <h5 class="my-3">${val}</h5>
</h1>`
        location__name.innerHTML = result.name;
        setInterval(() => {
            const date = new Date();
            let hours = date.getHours();
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1; // Months start at 0!
            let dd = today.getDate();

            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;

            const formattedToday = dd + '/' + mm + '/' + yyyy;
            date__today.innerHTML = `<i class="bi bi-calendar"></i> ${formattedToday} <br>  <i class="bi bi-clock-fill"></i> ${date.toLocaleTimeString()}`
        }, 1000)
        temperature.innerHTML = `<i class="bi bi-thermometer-half"></i> ${Math.round(result.main.temp - 273)} °C`
    }
    // console.log(data.status);
    // console.log(val);
    // console.log(result.main.temp - 273);
}
let popup = document.querySelector(".popup");
let weatherdivs = document.querySelector(".weatherdivs");
let donebtn = document.querySelector(".donebtn");
let weathericon = document.querySelector(".weathericon");
let location__name = document.querySelector(".location__name");
let date__today = document.querySelector("#date__today");
let temperature = document.querySelector(".temperature");
donebtn.addEventListener('click', () => {
    let form_select = document.querySelector(".form-select");
    // console.log(form_select.value);
    if (form_select.value != "Select City")
        weatherupdate(form_select.value);
    form_select.value = "Select City";
})
weatherupdate("Kanpur");

