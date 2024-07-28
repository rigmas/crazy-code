const Cache = require('../repositories/Cache');
const { uploadFileBase64 } = require('../utils/upload');

exports.create = async (req) => {
  const { id, name, long, lat, mindfile, photo } = req.body

  try {
    uploadFileBase64(`${id}_mindfile`, mindfile, '.mind')
    uploadFileBase64(`${id}_photo`, photo, '.png')

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

    for (const jsonCache of cacheData) {
      try {
        const parsed = JSON.parse(jsonCache)
        data.push(parsed)
      } catch (e) {
        console.warn(`Failed to parse json: ${jsonCache}`)
        await handleInvalidCache()
      }
    }

    return { data }
  } catch (err) {
    throw new Error(`Error when get all merchants: ${err}`)
  }
}

const handleInvalidCache = async () => {
  const allKey = await Cache.getAllKey()

  for (key of allKey) {
    if (key.length < 20 || key.length > 21) {
      await Cache.del(key);
      console.warn(`Failed to parse JSON. Skip and delete these cache key: ${key}`)
    }
  }
}