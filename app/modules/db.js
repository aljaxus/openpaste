console.log(`
  + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  '
  '  MODULE db: loaded module db.js
  '
  + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
`)

const Paste = require('../models/paste')

module.exports = {
  create: async ( content ) => {
    const paste = new Paste({ content })
    const savedPaste = await paste.save()
    if (!savedPaste) return new Error('Failed to save the paste!')
    return savedPaste._id
  },
  get: async ( id ) => {
    try {
      const paste = await Paste.findById(id)
      if (!paste) return { status: 400, content: 'Paste not found!' }
      return {
        ...paste.toObject(),
        status: 200,
      }
    } catch (error) {
      return {
        status: 500,
        content: JSON.stringify(error, null, 2)
      }
    }
  }
}
