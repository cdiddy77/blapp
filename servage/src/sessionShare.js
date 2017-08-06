"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var azStore = require("azure-storage");
var uuid = require("uuid");
var containerName = 'blappshares';
var azConnectionString = 'DefaultEndpointsProtocol=https;AccountName=blappstore;AccountKey=Bl7d2kFRBGQsjqZ8OGRUbRqnxgy2X/2k4z3nGRYh6lQMJ5AFWNMlKdmR59reoBW8CpemmXj040Ryt3gmCNuiYA==;EndpointSuffix=core.windows.net';
function storeSession(nameHint, data, cb, errcb) {
    var blobSvc = azStore.createBlobService(azConnectionString);
    blobSvc.createContainerIfNotExists(containerName, function (err, res, resp) {
        if (err) {
            errcb(err);
        }
        else {
            findUniqueName(blobSvc, nameHint, false, function (result, err) {
                if (result) {
                    blobSvc.createBlockBlobFromText(containerName, result, JSON.stringify(data), {}, function (err, res) {
                        if (err) {
                            errcb(err);
                        }
                        else {
                            cb(result);
                        }
                    });
                }
                else {
                    errcb(err);
                }
            });
        }
    });
}
exports.storeSession = storeSession;
function restoreSessionAsync(sid, cb) {
    var blobSvc = azStore.createBlobService(azConnectionString);
    blobSvc.getBlobToText(containerName, sid, function (error, text, result, response) {
        if (error) {
            cb(null, error);
        }
        else {
            cb(JSON.parse(text), error);
        }
    });
}
exports.restoreSessionAsync = restoreSessionAsync;
function createSuffix() {
    return uuid.v4().substr(0, 4);
}
function findUniqueName(blobSvc, nameHint, useSuffix, cb) {
    var suffix = useSuffix ? createSuffix() : '';
    var blobName = nameHint + suffix;
    blobSvc.doesBlobExist(containerName, blobName, function (err, res) {
        if (err) {
            cb(null, err);
        }
        else if (res.exists) {
            findUniqueName(blobSvc, nameHint, true, cb);
        }
        else {
            cb(blobName, null);
        }
    });
}
//# sourceMappingURL=sessionShare.js.map