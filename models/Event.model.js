const { Schema, model, SchemaType } = require("mongoose");

const eventSchema = new Schema(
    {
        eventTitle: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        guideName: {
            ref: 'User',
            type: Schema.Types.ObjectId
        },
        description: {
            type: String,
            required: true,
            max: 100
        },
        imageUrl: {
            type: String,
            default: 'https://www.nicepng.com/png/detail/125-1257327_events-icon-website-gray-events-icon-png-black.png'
        },
        location: {
            type: {
                type: String
            },
            coordinates: [Number],
            required: true
        },
        date: {                     //We think day just allow you to set a day between mon and sun but what about the month and year????
            day: {
                type: Date,
                required: true
            },
            periods: [{
                start: { Date },
                end: { Date }
            }]
        },
        // participants: {                       //Max participants of the event. How should we set it?
        //     type: [String],                   //bsonType: [Array], items: {bsonType: ['String]}, minItems: 0, maxItems: 10    
        //     maxItems: 10                      //Found this but don't really know if it's correct
        // }
        departments: {
            ref: 'Museum',                        //Museum or department reference? It's the model
            type: Schema.Types.ObjectId
        },
        language: {
            type: String,
            enum: ['ENGLISH', 'SPANISH', 'FRENCH'],
            default: 'ENGLISH'
        }
    },
    {
        timestamps: true
    }
);

const Event = model("Event", eventSchema);

module.exports = Event;