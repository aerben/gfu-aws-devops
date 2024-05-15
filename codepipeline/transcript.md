# Tutorial: Erstellen einer einfachen Pipeline (S3-Bucket)

## Schritt 1: Erstellen eines S3-Buckets für Ihre Anwendung

1. Melden Sie sich bei der AWS Management Console an und öffnen Sie die S3-Konsole.
2. Wählen Sie "Bucket erstellen" und geben Sie einen eindeutigen Namen für den Bucket ein.
3. Wählen Sie die Region, in der Sie Ihre Pipeline erstellen möchten, und klicken Sie auf "Create Bucket".
4. Aktivieren Sie die Versionierung unter der Registerkarte "Properties".
5. Laden Sie die Beispielanwendung (`SampleApp_Linux.zip`) herunter: [Link zur Datei](https://docs.aws.amazon.com/de_de/codepipeline/latest/userguide/samples/SampleApp_Linux.zip)
6. Laden Sie die ZIP-Datei in Ihren S3-Bucket hoch.

## Schritt 2: Amazon EC2 Linux-Instances erstellen und den CodeDeploy Agenten installieren

1. Öffnen Sie die IAM-Konsole und erstellen Sie eine neue Rolle mit den Richtlinien `AmazonEC2RoleforAWSCodeDeploy` und `AmazonSSMManagedInstanceCore`.
2. Öffnen Sie die EC2-Konsole und starten Sie zwei neue Linux-Instances.
3. Wählen Sie eine Amazon Linux 2-AMI und den Instance-Typ `t2.micro`.
4. Erstellen Sie ein neues Schlüsselpaar oder verwenden Sie ein vorhandenes.
5. Konfigurieren Sie die Sicherheitsgruppen, um SSH- und HTTP-Zugriff zu ermöglichen.
6. Wählen Sie die erstellte IAM-Rolle für die Instances aus und starten Sie die Instances (unter "Advanced Details -> IAM Instance Profile").
7. Verbinden Sie sich per SSH mit den Instances und installieren Sie den CodeDeploy-Agenten:
    ```bash
    sudo yum update
    sudo yum install -y ruby
    cd /home/ec2-user
    wget https://aws-codedeploy-us-west-2.s3.us-west-2.amazonaws.com/latest/install
    chmod +x ./install
    sudo ./install auto
    sudo service codedeploy-agent start
    ```
    Alternativ können Sie dieses Skript als UserData hinterlegen. In diesem Fall sollten Sie dennoch per SSH auf der Maschine prüfen, ob die Installation funktioniert hat.
    Die Logs hierfür liegen in folgenden Dateien: /var/log/cloud-init.log und /var/log/cloud-init-output.log

## Erstellen Sie eine Anwendung in CodeDeploy

1. Navigieren Sie zu **CodeDeploy** in der AWS Management Console.
2. Klicken Sie auf **Create application** und wählen Sie **Compute platform** -> **Lambda**.
3. Geben Sie der Anwendung einen Namen, z.B. `my-codedeploy-application`.
4. Klicken Sie auf **Create application**.
5. Erstellen Sie zwei Deployment Groups (Staging und Production)
