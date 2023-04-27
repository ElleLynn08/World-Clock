function updateTime() {
  //Washington DC
  let washingtonDcElement = document.querySelector("#washington-dc");
  let washingtonDcDateElement = washingtonDcElement.querySelector(".date");
  let washingtonDcTimeElement = washingtonDcElement.querySelector(".time");
  let washingtonDcTime = moment().tz("America/New_York");

  washingtonDcDateElement.innerHTML = moment().format("dddd, Do MMMM YYYY");
  washingtonDcTimeElement.innerHTML = washingtonDcTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("dddd, Do MMMM YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("dddd, Do MMMM YYYY");
  londonTimeElement.innerHTML = londonTime.format("h:mm:ss[<small>]A[</small]");

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("dddd, Do MMMM YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss[<small>]A[</small]");
}
updateTime();
setInterval(updateTime, 1);
