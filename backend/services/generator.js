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

  const reqHost = req.headers?.['x-forwarded-host'] ?? req.headers['host']
  const reqProtocol = req.headers?.['x-forwarded-proto'] ?? req.protocol
  const reqProxy = `${reqProtocol}://${reqHost}`

  try {
    const data = await Cache.get(id)
    const parsed = JSON.parse(data)

    return {
      imageFile: `${reqProxy}/api/uploads/${parsed.photo}`,
      mindFile: `${reqProxy}/api/uploads/${parsed.mindfile}`
    }
  } catch (err) {
    throw new Error(`Error when generating html: ${err}`)
  }
}
