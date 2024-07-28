const Cache = require('../repositories/Cache');
const { uploadFileBase64 } = require('../utils/upload');

exports.create = async (req) => {
  const { id, name, long, lat, mindfile, photo } = req.body

  try {
    const storedMindfile = uploadFileBase64(`${id}_mindfile`, mindfile, '.mind')
    const storedPhoto = uploadFileBase64(`${id}_photo`, photo, '.png')

    const data = { id, name, long, lat, mindfile: `${id}_mindfile.mind`, photo: `${id}_photo.png` }

    const saved = await Cache.set(id, JSON.stringify(data))
    return { message: saved }
  } catch (err) {
    throw new Error(`Error when create merchant: ${err}`)
  }
}

exports.getById = async (req) => {
  const { id } = req.params
  try {
    const data = await Cache.get(id)
    return { 
      data: JSON.parse(data)
    }
  } catch (err) {
    throw new Error(`Error when get merchant data: ${err}`)
  }
}

exports.getAll = async () => {
  try {
    const cacheData = await Cache.getAll()
    const data = []

    if (!cacheData) return { data: null }

    cacheData.map(item => {
      data.push(JSON.parse(item))
    })

    return { data }
  } catch (err) {
    throw new Error(`Error when get all merchants: ${err}`)
  }
}