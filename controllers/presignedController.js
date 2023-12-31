
const Minio = require('minio');

class PresignedController {
    static putPresignObject(req, res) {
        const s3Client = new Minio.Client({
            endPoint: 's3.amazonaws.com',
            accessKey: process.env.accesskey,
            secretKey: process.env.secretKey,
        });
        s3Client.presignedPutObject(process.env.bucketName, 'Sustainability.jpeg', 24 * 60 * 60, (err, presignedUrl) => {
            if (err) {
                res.send(err);
            }
            res.send(presignedUrl);
        })
    }
}
module.exports = PresignedController;