"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var azStore = require("azure-storage");
var uuid = require("uuid");
var azcore = require("./azureCore");
var containerName = 'assets';
function storeFile(fileName, req, cb, errcb) {
    var blobSvc = azStore.createBlobService(azcore.getAzConnectionString());
    blobSvc.createContainerIfNotExists(containerName, function (err, res, resp) {
        if (err) {
            errcb(err);
        }
        else {
            var newName_1 = uuid.v4() + '_' + fileName;
            var stream = blobSvc.createWriteStreamToBlockBlob(containerName, newName_1);
            console.log('created a new stream called ' + newName_1);
            req.pipe(stream);
            req.on('error', function (err) { return errcb(err); });
            req.once('end', function () {
                cb(newName_1);
            });
        }
    });
}
exports.storeFile = storeFile;
function getFile(fileName, callback) {
    var blobSvc = azStore.createBlobService(azcore.getAzConnectionString());
    var readStream = blobSvc.createReadStream(containerName, fileName, function (err, result, response) {
        if (err)
            callback(err, null);
    });
    // (error: Error, result: azStore.BlobService.BlobResult, response: azStore.ServiceResponse): void=>{
    //     callback(error,result.st)
    // });
    callback(null, readStream);
}
exports.getFile = getFile;
//# sourceMappingURL=assetStorage.js.map