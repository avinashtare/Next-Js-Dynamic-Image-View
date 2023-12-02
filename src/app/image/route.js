const path = require('path');
const fs = require('fs').promises;
const { NextResponse } = require('next/server');
const { headers } = require("next/headers");

// load random images from "src/assets/images"
const loadFile = async (path) => {
  const fileContent = await fs.readFile(path);
  // return random image
  return fileContent;
}
const readRandomFile = async () => {
  const randomNumber = Math.floor(Math.random() * 7) + 1;
  const imagePath = path.join(process.cwd(), "src", "assets", "images", `${randomNumber}.png`);

  const fileContent = await loadFile(imagePath);

  // return random image
  return fileContent;
}

// load html file static 
const loadhtmlfile = async () => {
  const htmlPath = path.join(process.cwd(), "src", "app", "image", `render.html`);
  console.log(htmlPath)

  const fileContent = await loadFile(htmlPath);
  // return random html
  return fileContent;
}


export async function GET(req, res) {
  // read headers 
  const headersList = headers()
  const referrer = headersList.get('Referer');
  const secFetchUser = headersList.get("sec-fetch-user");

  // use to same origin or and file checking 
  if (!referrer || secFetchUser) {
    let response = { headers: { 'Content-Type': 'text/html', } }
    return new NextResponse(await loadhtmlfile(), response);
  }
  // this is use to laod image
  else {
    // load image
    let randImgData = await readRandomFile();
    let response = { headers: { 'Content-Type': 'image/png', } }

    return new NextResponse(randImgData, response);
  }
}
