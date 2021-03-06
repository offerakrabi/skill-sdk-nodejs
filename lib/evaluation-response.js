const ErrorCodes = require('./response-codes');

function EvaluationResponse(callback) {
    this.callback = callback;
    this.response = {
        responseCode: ErrorCodes.ok,
        requestResult: {},
        intentities: [],
        handleUtterance: true,
        context: {
        }

    };
}

EvaluationResponse.prototype.send = function(result) {
    this.response.requestResult = result;
    this.callback(this.response);
};

EvaluationResponse.prototype.rejectUtterance = function() {
    this.response.handleUtterance = false;
    return this
};

module.exports = EvaluationResponse;
