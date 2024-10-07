const simModel = require('../models/simModel');
const { BadRequestError, NotFoundError } = require('../utils/errors');

const activateSim = async (simNumber) => {
    const sim = await simModel.getSimByNumber(simNumber);
    if (!sim) {
        throw new NotFoundError('SIM card not found.');
    }
    if (sim.status === 'active') {
        throw new BadRequestError('SIM card is already active.');
    }
    await simModel.updateSimStatus(simNumber, 'active', new Date());
};

const deactivateSim = async (simNumber) => {
    const sim = await simModel.getSimByNumber(simNumber);
    if (!sim) {
        throw new NotFoundError('SIM card not found.');
    }
    if (sim.status === 'inactive') {
        throw new BadRequestError('SIM card is already inactive.');
    }
    await simModel.updateSimStatus(simNumber, 'inactive');
};

const getSimDetails = async (simNumber) => {
    const sim = await simModel.getSimByNumber(simNumber);
    if (!sim) {
        throw new NotFoundError('SIM card not found.');
    }
    return sim;
};

module.exports = {
    activateSim,
    deactivateSim,
    getSimDetails
};
