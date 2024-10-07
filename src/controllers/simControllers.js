const Sim = require('../models/simModel'); // Ensure this path is correct

// Activate SIM
const activateSim = async (req, res) => {
    const { simNumber, phoneNumber } = req.body;

    try {
        
        const newSim = new Sim({
            simNumber,
            phoneNumber,
            status: 'active',
            activationDate: new Date()
        });
        
        await newSim.save();
        res.status(200).json({ message: 'SIM card activated successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error activating SIM card.', error });
    }
};

// Deactivate 
const deactivateSim = async (req, res) => {
    const { simNumber } = req.body;

    try {
        const sim = await Sim.findOne({ simNumber });
        if (!sim) {
            return res.status(404).json({ message: 'SIM card not found.' });
        }
        sim.status = 'inactive'; 
        await sim.save();
        res.status(200).json({ message: 'SIM card deactivated successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deactivating SIM card.', error });
    }
};


const getSimDetails = async (req, res) => {
    const { simNumber } = req.params;

    try {
        const sim = await Sim.findOne({ simNumber });
        if (!sim) {
            return res.status(404).json({ message: 'SIM card not found.' });
        }
        res.status(200).json(sim);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving SIM details.', error });
    }
};

module.exports = {
    activateSim,
    deactivateSim,
    getSimDetails,
};
