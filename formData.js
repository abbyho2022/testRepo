const FormData = require('form-data')
const axios = require('axios')

const form = new FormData();
form.append('MerchantID', 'MS3256516')
form.append('Version', '2.0')
form.append('TradeInfo', 'cf9c3980e385614347c9bdf9b52d7fd1e99c394a454dcc0036a25668016610dd663a5259a14ff50878bf061243938706c6a7b80668392917013cf7b1e1c8c1c60c20c92ec5f1beaff55f39ab3f7f4df5e92032534a564d95b8134c18d8375c548ac8cd291968d23ad25eba4ad35749e9447063868c3cb80c1b0256ec157834e686954a03d464e9c73884b55657cfe30b57679baea6a0e9bb3f8715b5d9ef32bf')
form.append('TradeSha', 'A2403B2B22609AEE5FAE7063C8585E3FB52860D74FECAB1AF8BE17DAA8569EAE')

const result = getData(form)

async function getData(form) {
const response = await axios.request({
    url: 'https://ccore.newebpay.com/MPG/mpg_gateway',
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    data: form
})

return response
}