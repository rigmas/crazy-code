const Cache = require('../repositories/Cache');
const openAi = require("../repositories/openai");
const { encodeFileToBase64 } = require("../utils/upload");

// "PROMPT": "Tolong buatkan kata-kata untuk deskripsi promosi mie ayam, buatkan deskripsi yang menarik"
// {
//   "created": 1722066913,
//   "data": [
//       {
//           "revised_prompt": "Visualize a scrumptious, mouthwatering image of chicken noodles, commonly known as Mie Ayam. It 's a popular Indonesian dish, featuring steaming hot noodles coated with a glistening savory sauce, garnished with pieces of tender, juicy chicken, sprinkled with freshly cut green onions and fried shallots. A side of crispy spring rolls is paired with it, all set on a rustic wooden table with a traditional Indonesian backdrop. The words 'Most Flavorful Chicken Noodles' shine brightly at the top of the image, engaging viewers and inviting them to taste this sensation.",
//           "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-vdO6zioRkzvfZXRXACsU4uML/user-E0q6IyPXCdeIdcoky0MatCck/img-RqLExz6FqXdVXrdkl2roa27i.png?st=2024-07-27T06%3A55%3A13Z&se=2024-07-27T08%3A55%3A13Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-07-26T23%3A26%3A07Z&ske=2024-07-27T23%3A26%3A07Z&sks=b&skv=2023-11-03&sig=1nKQ5n8oZyZdbUjlO2t0zYAT%2BZmm64JA%2BafT5ueV4HA%3D"
//       }
//   ]
// }


exports.image = async (req) => {
  const prompt = req.body.prompt;

  console.log({ prompt })

  const generated = await openAi.generateImg(prompt)

  return { data: generated }
}


exports.text = async (req) => {
  const prompt = req.body.prompt;

  console.log({ prompt })

  const generated = await openAi.generateTxt(prompt)

  return { data: generated }
}

exports.html = async (req) => {
  const { id } = req.params

  try {
    const data = await Cache.get(id)
    const parsed = JSON.parse(data)
  
    console.log(parsed.mindfile);
    console.log(parsed.photo);
  
    return { imageFile: parsed.photo, mindFile: parsed.mindfile }
  } catch (err) {
    throw new Error(`Error when generating html: ${err}`)
  }
}