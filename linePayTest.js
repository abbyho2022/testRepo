const linePay = document.querySelector('#linePay')
let s5 = new Date() // 今天算起五天後
s5.setDate(new Date().getDate() + 7)

const postPurchaseApi = 'https://api-evo-staging.eztable.com/purchase'
// const postLinePayApi = 'https://payment-mark3.eztable.com/payment/linePay'
// const postPurchaseApi = 'http://localhost:10093/purchase'
const postLinePayApi = 'http://localhost:80/payment/linePay'


const headers = {
  access_token: 'xiFvKmBlY7B6MSakDYB4jR7PB6DUzuZyj7kEptvt',
  new_format: 'new_format',
  'Content-Type': 'application/json'
}

const linePayHeaders = {
  access_token: 'xiFvKmBlY7B6MSakDYB4jR7PB6DUzuZyj7kEptvt',
  new_format: 'new_format',
  'Content-Type': 'text/html'
}

const purchaseData = {
  name: 'test1234',
  email: 'it@eztable.com',
  tel: '+886700000000',
  purpose: '請選擇',
  reservedDate: `${s5.toISOString().slice(0, 10)} 18:00:00`,
  gender: 'F',
  specialRequest: '',
  people: 2,
  memberId: 6527704,
  products: [
    {
      id: 33215,
      quantity: 2
    }
  ],
  planId: 15982,
  sponsorId: 1,
  sponsorData: {},
  payment: 'LINEPAY',
  pointOffset: 0,
  couponCode: '',
  restaurantId: 11731,
  source: 'mobile.eztable.com',
  invoicePublishType: 'E-INVOICE',
  invoiceType: 'donate_1',
  invoiceLoveCode: '8888',
  invoiceVatNumber: '12345678',
  bin: '99999999',
  campaignInfo: {
    'campaign.name': '',
    'campaign.source': '',
    'campaign.medium': '',
    'campaign.term': '',
    'campaign.content': ''
  }
}

async function linePayTest() {
  const checksumData = await getChecksum(postPurchaseApi, purchaseData, headers)
  const postLinePayBody = {
    checksum: checksumData.data.checksum
  }
  // checksum: 'kZPCQN0ihfwEnWCH7ZUqLK7dqBDH4zxlvfaLy74c'
  // const postLinePayRes = await postLinePay(postLinePayApi, checksumData.data.checksum, headers)
  location.href = `http://localhost:80/payment/linePay?checksum=${checksumData.data.checksum }`
}

async function getChecksum(url, purchaseData, purchaseHeaders) {
  try {
    let response = await fetch(url, {
      method: 'POST',
      headers: purchaseHeaders,
      body: JSON.stringify(purchaseData)
    })

    let data = await response.json()
    return data
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

async function postLinePay(url, postLinePayData, postLinePayHeaders) {
  try {
    // let response = await fetch(url, {
    //   method: 'POST',
    //   headers: postLinePayHeaders,
    //   body: JSON.stringify(postLinePayData)
    // })
    let postLinePayApi = `http://localhost:80/payment/linePay?checksum=${postLinePayData}`
    let response = await fetch(postLinePayApi, {
      method: 'GET'
    })

    let data = await response.text()
    return data
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
