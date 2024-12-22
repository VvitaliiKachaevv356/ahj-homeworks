export default function paySystem(number) {
  const cardItems = document.querySelectorAll(".card-item");
  cardItems.forEach((el) => el.classList.remove("active"));
  const cardMir = document.querySelector(".cardMir");
  const cardAmericanExpress = document.querySelector(".cardAmericanExpress");
  const cardVisa = document.querySelector(".cardVisa");
  const cardMaestro = document.querySelector(".cardMaestro");
  const cardMastercard = document.querySelector(".cardMastercard");
  const cardUnionPay = document.querySelector(".cardUnionPay");
  const firstNum = number.slice(0, 1);
  const twoNum = number.slice(0, 2);
  if (firstNum === "2") {
    cardMir.classList.add("active");
  } else if (firstNum === "3") {
    cardAmericanExpress.classList.add("active");
  } else if (firstNum === "4") {
    cardVisa.classList.add("active");
  }
  if (twoNum === "50" || twoNum === "56" || twoNum === "57" || twoNum === "58" || twoNum === "67" || twoNum === "63") {
    cardMaestro.classList.add("active");
  } else if (twoNum === "51" || twoNum === "52" || twoNum === "53" || twoNum === "54" || twoNum === "55") {
    cardMastercard.classList.add("active");
  } else if (twoNum === "62") {
    cardUnionPay.classList.add("active");
  } else {
    console.warn("Unknown card type");
  }
}