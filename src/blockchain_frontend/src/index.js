import {blockchain_backend} from "../../declarations/blockchain_backend"

window.addEventListener("load",async function(){
  // console.log("finished loading");
  const currentAmount= await blockchain_backend.checkBalance();
  document.getElementById("value").innerText=currentAmount 
})

document.querySelector("form").addEventListener("submit", async (event)=>{
  event.preventDefault()
  // console.log("submitted");
  const inputAmount=parseFloat(document.getElementById("input-amount").value)
  const outputAmount=parseFloat(document.getElementById("withdrawal-amount").value)

  // console.log(inputAmount,outputAmount);
  if (!isNaN(inputAmount)) {
  await blockchain_backend.topUp(inputAmount)
  document.getElementById("input-amount").value=""
  }
   if (!isNaN(outputAmount)) {
  await blockchain_backend.withdraw(outputAmount)
  document.getElementById("withdrawal-amount").value=""
   }

   await blockchain_backend.compound();

const currentAmount= await blockchain_backend.checkBalance();
  document.getElementById("value").innerText=Math.round(currentAmount*100) / 100;

})