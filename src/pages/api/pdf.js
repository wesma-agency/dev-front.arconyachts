const puppeteer = require('puppeteer')


const uri = process.env.NEXT_PUBLIC_HOST

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const browser = await puppeteer.launch({ headless: true })

    const webPage = await browser.newPage()
    await webPage.goto(`${uri}${JSON.parse(req.body).url}`, {
      waitUntil: 'networkidle0',
    })
    const pdf = await webPage.pdf({
      printBackground: true,
      // format: 'Letter',
      width: '1440px',
      margin: {
        top: '0px',
        bottom: '0px',
        left: '20px',
        right: '20px',
      },
    })
    await browser.close()
    res.send(pdf)
  }
}
