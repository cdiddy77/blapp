import * as azStore from 'azure-storage'
import * as uuid from 'uuid';

const containerName = 'blappshares';
const azConnectionString = 'DefaultEndpointsProtocol=https;AccountName=blappstore;AccountKey=Bl7d2kFRBGQsjqZ8OGRUbRqnxgy2X/2k4z3nGRYh6lQMJ5AFWNMlKdmR59reoBW8CpemmXj040Ryt3gmCNuiYA==;EndpointSuffix=core.windows.net';

export function storeSession(
    nameHint: string,
    data: any,
    cb: (name: string) => void,
    errcb: (err: Error) => void): void {
    let blobSvc = azStore.createBlobService(azConnectionString);

    blobSvc.createContainerIfNotExists(containerName, (err, res, resp) => {
        if (err) {
            errcb(err);
        } else {
            findUniqueName(blobSvc, nameHint, false, (result, err) => {
                if (result) {
                    blobSvc.createBlockBlobFromText(
                        containerName,
                        result, JSON.stringify(data),
                        {},
                        (err, res) => {
                            if (err) {
                                errcb(err);
                            } else {
                                cb(result);
                            }
                        });
                } else {
                    errcb(err);
                }
            })

        }
    });
}

export function restoreSessionAsync(sid: string, cb: (data: any, err: Error) => void): void {
    let blobSvc = azStore.createBlobService(azConnectionString);
    blobSvc.getBlobToText(containerName, sid, (error, text, result, response) => {
        if (error) {
            cb(null, error);
        } else {
            cb(JSON.parse(text), error);
        }
    });
}

function createSuffix(): string {
    return uuid.v4().substr(0, 4);
}

function findUniqueName(
    blobSvc: azStore.BlobService,
    nameHint: string,
    useSuffix: boolean,
    cb: (result: string, err: any) => void) {
    let suffix = useSuffix ? createSuffix() : '';
    let blobName = nameHint + suffix;
    blobSvc.doesBlobExist(containerName, blobName, (err, res) => {
        if (err) {
            cb(null, err);
        } else if (res.exists) {
            findUniqueName(blobSvc, nameHint, true, cb);
        } else {
            cb(blobName, null);
        }
    });
}