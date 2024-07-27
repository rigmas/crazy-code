const { OpenAI } = require('openai')

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.generateImg = async (prompt = "", size = "1792x1024", quality = "standard", model = "dall-e-3", n = 1) => {
  const response = await openai.images.generate({
    model,
    prompt,
    size,
    quality,
    n
  })

  return response
}

exports.generateTxt = async (prompt, role = "user") => {
  const response = await openai.chat.completions.create({
    messages: [{ role, content: prompt }],
    model: "gpt-4o-mini"
  })

  return response.choices[0].message
}