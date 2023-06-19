const { mongoose } = require('mongoose');

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'Please add user name'],
        },
        lastName: {
            type: String,
            required: [true, 'Please add user name'],
        },
        email: {
            type: String,
            required: [true, 'Please add email'],
            unique: [true, 'Email adress already registerd'],
        },
        password: {
            type: String,
            required: [true, 'Please add contact Passwrod'],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);
