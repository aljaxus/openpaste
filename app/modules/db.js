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
    const paste = await Paste.findById(id)
    if (!paste) return new Error('Paste with such ID does not exist')
    return paste.content
  }
}
