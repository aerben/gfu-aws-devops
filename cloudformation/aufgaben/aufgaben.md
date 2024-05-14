## Aufgabe 1
Erstelle ein Cloudformation-Template mit folgenden Eigenschaften:
- Definiere einen String-Parameter "s3BucketName"
- Erstelle im Template einen S3-Bucket mit dem Namen, der im Parameter übergeben wurde. Du kannst alle optionalen Argumente ignorieren.
- Exportiere die ARN des S3-Buckets, den du angelegt hast

**Bonus**
- Nachdem du das Template angewandt hast, ändere es
- Füge eine `LifecycleConfiguration` hinzu, die jedes Objekt 30 Tage nach Anlage löscht

**Links**
- https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html
- https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfiguration.html

## Aufgabe 2
Erstelle ein Cloudformation-Template mit folgenden Eigenschaften
- Definiere einen String-Parameter "queueName"
- Erstelle im Template eine SQS-Queue mit dem Namen, der im Parameter übergeben wurde. Du kannst alle optionalen Argumente ignorieren.
- Exportiere die URL der Queue, die du angelegt hast

**Bonus**
Verbinde dich mit CloudShell und...
- Lese die URL im Export des CFN-Stacks aus
- Schreibe mit dem AWS CLI eine SQS-Message in die neue Queue.

**Links**
- https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queue.html
