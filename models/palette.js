const mongoose = require('mongoose');

const paletteSchema = new mongoose.Schema({
    paletteName: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    emoji: {
        type: String,
        required: true   
    },
    colors: {
        type: [{ name: String, color: String }],
        required: true
    }
})

const Palette = mongoose.model('Palette', paletteSchema);
module.exports = Palette;