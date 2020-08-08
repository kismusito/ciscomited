const { Schema , model } = require('mongoose')

const appreticeSchema = new Schema({
    programas_formacion: Array,
    tipo_documento: {
        type: String,
        required: true
    },
    numero_documento: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    primer_apellido: String,
    segundo_apellido: String,
    estado_aprendiz: String
})

module.exports = model('Appretice' , appreticeSchema)