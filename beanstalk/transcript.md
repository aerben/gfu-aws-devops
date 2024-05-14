# Transcript

1. **AWS Elastic Beanstalk Konsole öffnen**
    - Melden Sie sich bei der [AWS Management Console](https://aws.amazon.com/console/) an.
    - Suchen Sie in der Services-Liste nach "Elastic Beanstalk" und klicken Sie darauf.

2. **Neue Anwendung erstellen**
    - In der Elastic Beanstalk Konsole klicken Sie auf "Create a new application".
    - Geben Sie einen Namen für Ihre Anwendung ein, z.B. "MyFirstEBApp".
    - Optional: Geben Sie eine Beschreibung für Ihre Anwendung ein, z.B. "Dies ist eine Beispielanwendung für AWS Elastic Beanstalk".

3. **Neue Umgebung erstellen**
    - Klicken Sie auf "Create a new environment".
    - Wählen Sie "Web server environment" aus, da wir eine Webanwendung bereitstellen möchten.

4. **Plattform und Konfiguration auswählen**
    - Wählen Sie die gewünschte Plattform aus. Für dieses Beispiel nehmen wir **Node.js**.
        - Plattform: Node.js
        - Platform Branch: Node.js (aktuellste Version aussuchen)
        - Platform Version: (aktuellste Version aussuchen)
    - Optional: Sie können "Configure more options" auswählen, um erweiterte Einstellungen vorzunehmen, aber für diese Demonstration lassen wir die Standardoptionen unverändert.

5. **Anwendungscode hochladen**
    - Unter "Application code" wählen Sie "Upload your code".
    - Klicken Sie auf "Choose file" und wählen Sie eine Beispielanwendung aus, die Sie vorbereitet haben (z.B. eine einfache Node.js-App als ZIP-Datei).
        - Falls Sie keine Beispielanwendung haben, können Sie den folgenden Code in eine Datei namens `app.js` schreiben, diese zippen und hochladen:
          ```javascript
          const http = require('http');
   
          const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello World\n');
          });
   
          const port = process.env.PORT || 3000;
          server.listen(port, () => {
            console.log(`Server running at http://localhost:${port}/`);
          });
          ```
        - Packen Sie `app.js` in eine ZIP-Datei namens `app.zip`.

6. **Konfiguration überprüfen**
    - Überprüfen Sie die Standardkonfigurationen wie VPC, EC2-Instanztyp, etc. In der Regel sind die Standardwerte für eine erste Bereitstellung ausreichend.
    - Beispielkonfigurationen:
        - VPC: Default VPC
        - Instance Type: t2.micro (Free Tier)
        - Capacity: Single instance (Standard)

Es kann hier nötig sein, erst noch eine IAM-Rolle für die EC2-Instanzen anzulegen. Die Rolle braucht eine Trust Relationship zu ec2 und folgende Policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "BucketAccess",
      "Action": [
        "s3:Get*",
        "s3:List*",
        "s3:PutObject"
      ],
      "Effect": "Allow",
      "Resource": [
        "arn:aws:s3:::elasticbeanstalk-*",
        "arn:aws:s3:::elasticbeanstalk-*/*"
      ]
    },
    {
      "Sid": "XRayAccess",
      "Action": [
        "xray:PutTraceSegments",
        "xray:PutTelemetryRecords",
        "xray:GetSamplingRules",
        "xray:GetSamplingTargets",
        "xray:GetSamplingStatisticSummaries"
      ],
      "Effect": "Allow",
      "Resource": "*"
    },
    {
      "Sid": "CloudWatchLogsAccess",
      "Action": [
        "logs:PutLogEvents",
        "logs:CreateLogStream",
        "logs:DescribeLogStreams",
        "logs:DescribeLogGroups"
      ],
      "Effect": "Allow",
      "Resource": [
        "arn:aws:logs:*:*:log-group:/aws/elasticbeanstalk*"
      ]
    },
    {
      "Sid": "ElasticBeanstalkHealthAccess",
      "Action": [
        "elasticbeanstalk:PutInstanceStatistics"
      ],
      "Effect": "Allow",
      "Resource": [
        "arn:aws:elasticbeanstalk:*:*:application/*",
        "arn:aws:elasticbeanstalk:*:*:environment/*"
      ]
    }
  ]
}
```

7. **Erstellen und Bereitstellen**
    - Klicken Sie auf "Create environment".
    - Warten Sie, bis die Umgebung erstellt und die Anwendung bereitgestellt ist. Dies kann einige Minuten dauern.

8. **Zugriff auf die Anwendung**
    - Nach erfolgreicher Bereitstellung sehen Sie eine URL in der Konsole, über die Ihre Anwendung erreichbar ist, z.B. `http://myfirstebapp-env.eba-xyz123.us-west-2.elasticbeanstalk.com`.
    - Öffnen Sie die URL in Ihrem Browser, um zu überprüfen, ob die Anwendung erfolgreich bereitgestellt wurde. Sie sollten die Meldung "Hello World" sehen.
