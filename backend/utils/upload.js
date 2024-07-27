const fs = require('fs');
const path = require('path');

const TYPE = {
  PHOTO: {
    SUFFIX: '_photo',
    EXTENSION: '.png'
  },
  MINDFILE: {
    SUFFIX: '_mindfile',
    EXTENSION: '.mind'
  }
}

exports.uploadFileBase64 = (name, content, extension) => {
  const fileBuffer = Buffer.from(content, 'base64')

  const filePath = path.join(uploadsDir, name + extension);
  fs.writeFileSync(filePath, fileBuffer);

  if (!fs.existsSync(filePath)) {
    console.error(`Failed to write file: ${filePath}`)
  }

  return filePath
}

exports.encodeFileToBase64 = (name, type) => {
  const filePath = path.join(uploadsDir, name + TYPE[type].SUFFIX + TYPE[type].EXTENSION);

  let base64FileContent = '';

  if (fs.existsSync(filePath)) {
    const fileBuffer = fs.readFileSync(filePath);
    base64FileContent = fileBuffer.toString('base64');
  }

  return base64FileContent
}

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, '..', 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}