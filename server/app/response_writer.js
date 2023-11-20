
function WriteRepsonse() {};

function WriteError(error, res) {
    res.status(error.code).json({
        type: error.type,
        message: error.message,
    });
};
