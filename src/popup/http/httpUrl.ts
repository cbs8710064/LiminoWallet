
const isProduct = process.env.NODE_ENV == 'production'
// Cloud services
export const wormholesApi = 'https://www.wormholestest.com'
// Block browser  
export const wormholesscanApi = 'https://www.wormholesscan.com'
const exchantest = 'c0x5051580802283c7b053d234d124b199045ead750'


export const contractApi = 'https://api.wormholesscan.com'
// Test url
export const snftUrl = 'http://43.132.176.185:3001'
export const snftUrl2 = 'http://192.168.1.235:9006'
export const snftUrl3 = 'http://snft.wormholestest.com'
// export const snftUrl4 = 'https://192.168.1.237:9012'
// export const snftUrl4 = isProduct ? snftUrl3 :`http://192.168.1.235:9006/${exchantest}`
export const snftUrl4 = `http://192.168.1.235:9006/${exchantest}`