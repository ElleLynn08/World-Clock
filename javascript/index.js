function updateTime() {
  //Seattle
  let seattleElement = document.querySelector("#seattle");
  let seattleDateElement = seattleElement.querySelector(".date");
  let seattleTimeElement = seattleElement.querySelector(".time");
  let seattleTime = moment().tz("US/Pacific");

  seattleDateElement.innerHTML = seattleTime.format("dddd, Do MMMM YYYY");
  seattleTimeElement.innerHTML = seattleTime.format(
    "h:mm:ss[<small>]A[</small]"
  );

  //Washington DC
  let washingtonDcElement = document.querySelector("#washington-dc");
  let washingtonDcDateElement = washingtonDcElement.querySelector(".date");
  let washingtonDcTimeElement = washingtonDcElement.querySelector(".time");
  let washingtonDcTime = moment().tz("US/Eastern");

  washingtonDcDateElement.innerHTML = moment().format("dddd, Do MMMM YYYY");
  washingtonDcTimeElement.innerHTML = washingtonDcTime.format(
    "h:mm:ss[<small>]A[</small]"
  );

  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("dddd, Do MMMM YYYY");
  londonTimeElement.innerHTML = londonTime.format("h:mm:ss[<small>]A[</small]");

  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("dddd, Do MMMM YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss[<small>]A[</small]");

  //Moscow
  let moscowElement = document.querySelector("#moscow");
  let moscowDateElement = moscowElement.querySelector(".date");
  let moscowTimeElement = moscowElement.querySelector(".time");
  let moscowTime = moment().tz("Europe/Moscow");

  moscowDateElement.innerHTML = moscowTime.format("dddd, Do MMMM YYYY");
  moscowTimeElement.innerHTML = moscowTime.format("h:mm:ss[<small>]A[</small]");

  //Baghdad
  let baghdadElement = document.querySelector("#baghdad");
  let baghdadDateElement = baghdadElement.querySelector(".date");
  let baghdadTimeElement = baghdadElement.querySelector(".time");
  let baghdadTime = moment().tz("Asia/Baghdad");

  baghdadDateElement.innerHTML = baghdadTime.format("dddd, Do MMMM YYYY");
  baghdadTimeElement.innerHTML = baghdadTime.format(
    "h:mm:ss[<small>]A[</small]"
  );

  //Tehran
  let tehranElement = document.querySelector("#tehran");
  let tehranDateElement = tehranElement.querySelector(".date");
  let tehranTimeElement = tehranElement.querySelector(".time");
  let tehranTime = moment().tz("Asia/Tehran");

  tehranDateElement.innerHTML = tehranTime.format("dddd, Do MMMM YYYY");
  tehranTimeElement.innerHTML = tehranTime.format("h:mm:ss[<small>]A[</small]");

  //Kabul
  let kabulElement = document.querySelector("#kabul");
  let kabulDateElement = kabulElement.querySelector(".date");
  let kabulTimeElement = kabulElement.querySelector(".time");
  let kabulTime = moment().tz("Asia/Kabul");

  kabulDateElement.innerHTML = kabulTime.format("dddd, Do MMMM YYYY");
  kabulTimeElement.innerHTML = kabulTime.format("h:mm:ss[<small>]A[</small]");

  //Beijing
  let beijingElement = document.querySelector("#beijing");
  let beijingDateElement = beijingElement.querySelector(".date");
  let beijingTimeElement = beijingElement.querySelector(".time");
  let beijingTime = moment().tz("Asia/Hong_Kong");

  beijingDateElement.innerHTML = beijingTime.format("dddd, Do MMMM YYYY");
  beijingTimeElement.innerHTML = beijingTime.format(
    "h:mm:ss[<small>]A[</small]"
  );

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("dddd, Do MMMM YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss[<small>]A[</small]");
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#cities-container");
  cityElement.innerHTML = `
    <div class = "cities">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("dddd, Do MMMM YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss[<small>]A[</small]")}</div>
      </div>

    </div>
  `;
}
updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
