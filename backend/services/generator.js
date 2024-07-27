const { URL_LOCAL } = require('../constants/constants');
const Cache = require('../repositories/Cache');
const openAi = require("../repositories/openai");

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

    return { 
      imageFile: `${URL_LOCAL.UPLOADS}/${parsed.photo}`,
      mindFile: `${URL_LOCAL.UPLOADS}/${parsed.mindfile}` 
    }
  } catch (err) {
    throw new Error(`Error when generating html: ${err}`)
  }
}