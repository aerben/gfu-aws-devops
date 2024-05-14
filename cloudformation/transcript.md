# Cloudformation

## Show
- Richten Sie ein einfaches EC2 ohne SG ein
- SG hinzufügen, um auf EC2 zuzugreifen
- AMI durch eine nicht existierende ersetzen, Status anzeigen, dann reparieren. Erklären Sie die Rollback-Optionen.
- Hinzufügen:
  - Parameter
  - Userdata für einen Nginx-Webserver
  - SG, der Port 80 erlaubt
  - Ausgabe/Export
- Manipulieren Sie absichtlich SG, zeigen Sie die Drift-Erkennung
- Überarbeiten zu einer ASG
  - Erklären Sie die UpdatePolicy nach Änderung von UserData
  - 
## Snippets

```shell
# To create, inspect and perform a changeset
aws cloudformation deploy --no-execute-changeset --template-file 001-simple-ec2-no-sg.cloudformation.yaml --stack-name gfu-001-simple-ec2-no-sg
aws cloudformation describe-change-set --change-set-name arn:aws:cloudformation:eu-central-1:290486675607:changeSet/awscli-cloudformation-package-deploy-1715584003/70494146-70e6-40ac-b385-8b451be5dfd2
aws cloudformation execute-change-set --change-set-name arn:aws:cloudformation:eu-central-1:290486675607:changeSet/awscli-cloudformation-package-deploy-1715584003/70494146-70e6-40ac-b385-8b451be5dfd2
```
