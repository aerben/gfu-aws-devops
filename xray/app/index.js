import { S3Client, HeadObjectCommand } from "@aws-sdk/client-s3";
import xray from 'aws-xray-sdk-core';

const s3Client = xray.captureAWSv3Client(new S3Client({ region: "eu-central-1" }));

export async function handler(event) {
    const results = [];

    for (const record of event.Records) {
        const bucketName = record.s3.bucket.name;
        const objectKey = record.s3.object.key;

        const headObjectParams = {
            Bucket: bucketName,
            Key: objectKey
        };

        try {
            const response = await s3Client.send(new HeadObjectCommand(headObjectParams));
            results.push({
                Bucket: bucketName,
                Key: objectKey,
                Size: response.ContentLength,
                ContentType: response.ContentType,
                Metadata: response.Metadata
            });
        } catch (error) {
            console.error(`Error processing S3 headObject: ${error}`);
            return {
                statusCode: 500,
                body: JSON.stringify({ message: "Failed to process S3 object", error: error.message })
            };
        }
    }
    console.log(JSON.stringify(results));

    return {
        statusCode: 200,
        body: JSON.stringify(results)
    };
}
