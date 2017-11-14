import * as azStore from 'azure-storage'
import * as uuid from 'uuid';
import * as fs from 'fs';
import * as http from 'http';
import * as url from 'url';
import * as azcore from './azureCore';

const containerName = 'assets';

export function storeFile(
    fileName: string,
    req: http.IncomingMessage,
    cb: (name: string) => void,
    errcb: (err: Error) => void) {

    let blobSvc = azStore.createBlobService(azcore.getAzConnectionString());

    blobSvc.createContainerIfNotExists(containerName, (err, res, resp) => {
        if (err) {
            errcb(err);
        } else {
            let newName: string = uuid.v4() + '_' + fileName;
            let stream = blobSvc.createWriteStreamToBlockBlob(containerName, newName);
            console.log('created a new stream called ' + newName);
            req.pipe(stream);
            req.on('error', (err) => errcb(err));
            req.once('end', () => {
                cb(newName);
            });
        }
    });

}

export function getFile(fileName: string, callback: (err: Error, stream: any) => void): void {
    let blobSvc = azStore.createBlobService(azcore.getAzConnectionString());
    let readStream = blobSvc.createReadStream(containerName, fileName, (err, result, response) => {
        if (err)
            callback(err, null);
    });
    // (error: Error, result: azStore.BlobService.BlobResult, response: azStore.ServiceResponse): void=>{
    //     callback(error,result.st)
    // });
    callback(null, readStream);

}