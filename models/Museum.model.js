const { Schema, model, SchemaType } = require("mongoose");

const musueumSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true,
            max: 100
        },
        imageUrl: {
            type: String,
            default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/BSicon_MUSEUM.svg/1200px-BSicon_MUSEUM.svg.png'
        },
        location: {
            type: {
                type: String
            },
            coordinates: [Number],
            required: true
        },
        departments: {                                      //Coming from API
            ref: 'department',
            type: Schema.Types.ObjectId
        }
    },
    {
        timestamps: true
    }
);

const Museum = model("Museum", musueumSchema);

module.exports = Museum;