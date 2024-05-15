## Aufgabe 1
Erstellen Sie ein Cloudformation-Template mit folgenden Eigenschaften:
- Ein String-Parameter namens "s3BucketName" ist vorhanden
- Ein S3-Bucket mit dem Namen, der im Parameter übergeben wurde, wird angelegt
- Die ARN des S3-Buckets wird als Output exportiert
Erstellen Sie zuletzt einen Stack mit diesem Template

**Bonus**
Ändern Sie nun das Template. Fügen Sie eine `LifecycleConfiguration` hinzu, die jedes Objekt 30 Tage nach Anlage löscht. Updaten Sie anschließend den Stack. 

**Links**
- https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html
- https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfiguration.html

## Aufgabe 2
Erstellen Sie ein Cloudformation-Template mit folgenden Eigenschaften:
- Definieren Sie einen String-Parameter "queueName"
- Erstellen Sie im Template eine SQS-Queue mit dem Namen, der im Parameter übergeben wurde. Sie können alle optionalen Parameter ignorieren.
- Exportieren Sie die URL der Queue
- Erstellen Sie einen Stack mit dem Template

**Bonus**
Verbinden Sie sich mit CloudShell und...
- Lesen Sie die URL im Export des CFN-Stacks aus
- Schreiben Sie mit dem AWS CLI eine SQS-Message in die neue Queue.

**Links**
- https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queue.html
