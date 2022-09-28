const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")


const dolar = 5.15
const euro = 5.8
const bit_coin = 103280.60


const convert_values = () => {
   const input_real = document.getElementById("real-value").value
   const real_value_text = document.getElementById("real-value-text")
   const currency_value_text = document.getElementById("currency-value-text")

   real_value_text.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency', currency: 'BRL'
   }).format(input_real)

   if (select.value === "US$ Dolar americano") {

      currency_value_text.innerHTML = new Intl.NumberFormat('en-US', {
         style: 'currency', currency: 'USD'
      }).format(input_real / dolar)

   }

   if (select.value === "€ Euro") {

      currency_value_text.innerHTML = new Intl.NumberFormat('de-DE', {
         style: 'currency', currency: 'EUR'
      }).format(input_real / euro)

   }

   if (select.value === "BitCoin") {
      currency_value_text.innerHTML = (input_real / bit_coin / 1000).toFixed(8)
   }



}

change_currency = () => {
   const currency_name = document.getElementById("currency-name")
   const currency_img = document.getElementById("currency-img")

   if (select.value === "US$ Dolar americano") {
      currency_name.innerHTML = "US$ Dolar americano"
      currency_img.src = "./assests/estados-unidos.png"
   }

   if (select.value === "€ Euro") {
      currency_name.innerHTML = "€ Euro"
      currency_img.src = "./assests/€ Euro.png"
   }

   if (select.value === "BitCoin"){
      currency_name.innerHTML= "BitCoin"
      currency_img.src="./assests/bitCoin.png"
   }
   convert_values()
}


button.addEventListener("click", convert_values)
select.addEventListener("change", change_currency)