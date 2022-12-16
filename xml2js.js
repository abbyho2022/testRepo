const xml2js = require('xml2js')

let obj = {
    feed: {
        $: {
            xmlns: 'http://www.w3.org/2005/Atom',
            'xmlns:g': 'http://base.google.com/ns/1.0'
        },
        title: 'EZTABLE', 
        link: {
            $:{
                rel:'self',
                href:'https://tw.eztable.com/'
            }
    }, 
    updated: '(yyyy-MM-ddTHH:mm:ss)',
    entry: []
    }
}

let entry = {
    'g:id': '(餐廳編號)',
    'g:title':'(餐廳名稱)',
    'g:description':'(餐廳描述)',
    'g:link':'(餐廳連結)',
    'g:image_link':'(餐廳圖片)',
    'g:additional_image_link':'(餐廳其他圖片，可重複使用此 tag，最多 10 次)',
    'g:availability':'in_stock',
    'g:price':'(最低價) TWD',
    'g:google_product_category':'商業與各產業 > 飯店與餐飲',
    'g:brand':'(餐廳品牌)',
    'g:identifier_exists':'no',
    'g:condition':'new',
    'g:is_bundle':'no'
}

let entries = [entry,entry]

obj.feed.entry = entries

let builder = new xml2js.Builder({ 
    xmldec: {'version': '1.0'},
    explicitRoot: false
})
let xml = builder.buildObject(obj);

console.log(xml)