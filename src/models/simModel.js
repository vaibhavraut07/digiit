const mongoose = require('mongoose');

const simSchema = new mongoose.Schema({
    simNumber: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    status: { type: String, required: true },
    activationDate: { type: Date }
});

const Sim = mongoose.model('Sim', simSchema);

const getSimByNumber = async (simNumber) => {
    return await Sim.findOne({ simNumber });
};

const updateSimStatus = async (simNumber, status, activationDate = null) => {
    return await Sim.findOneAndUpdate(
        { simNumber },
        { status, activationDate },
        { new: true }
    );
};

module.exports = {
    getSimByNumber,
    updateSimStatus
};
module.exports = Sim;