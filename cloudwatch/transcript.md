## EC2 Dashboard erstellen
- Gehen Sie in die CloudWatch-Übersichtsseite
- Öffnen Sie unter "Metrics" den Explorer
- Wählen Sie als Template links oben "EC2"
- Unter "From", wählen Sie den Schlüssel "VpcId" und als Wert den einzigen, der verfügbar ist

Es sollten nun eine Reihe von Widgets erscheinen.

- Klicken Sie auf "Add to dashboard"
- Wählen Sie "Create New" und vergeben Sie einen beliebigen Namen

## EC2 CPU-Alert erstellen

Das Cloudformation-Template in [dieser Datei](./ec2-cw-agent-dashboard-alert.cloudformation.yaml) enthält eine Alert-Definition die auslöst, wenn eine Instanz mehr als 60% Cpu konsumiert. Sie sendet per SNS eine E-Mail.

