# Cloudformation

## Live-Präsentation

### Erstes Beispiel
[Link zur Datei](./001-simple-ec2-no-sg.cloudformation.yaml)
Dieses Beispiel setzt eine einfache EC2-Instanz ohne SG auf.

### Zweites Beispiel
[Link zur Datei](./002-simple-ec2-sg.cloudformation.yaml)
Hier wird eine SG hinzugefügt. Man kann den Stack des ersten Beispiels damit updaten.

### Fehlerfall zeigen
AMI durch eine nicht existierende ersetzen, Status anzeigen, dann reparieren. Rollback-Optionen erklären.

### Drittes Beispiel
[Link zur Datei](./003-ec2-userdata-params-outputs.cloudformation.yaml)
Neu in diesem Beispiel:
- Parameter
- Userdata für einen Nginx-Webserver
- SG, der Port 80 erlaubt
- Ausgabe/Export

### Drift
- Manipulieren Sie absichtlich SG, zeigen Sie die Drift-Erkennung
 
## Viertes Beispiel
[Link zur Datei](./010-simpleec2asg.cloudformation.yaml)

In diesem Beispiel wird eine ASG angelegt mit zunächst einer EC2-Instanz.

## Fünftes Beispiel
[Link zur Datei](./011-simpleec2asg-rollingupdate.cloudformation.yaml)
Hier kommen hinzu:
- cfn-init und cfn-signal
- UpdatePolicy für AutoscalingGroup
- Metadata für AutoscalingGroup
- Größere MaxSize wegen Rolling Update

```shell
aws cloudformation create-change-set \
    --stack-name gfu-asg-stack \
    --template-body file://010-simpleec2asg.cloudformation.yaml \
    --parameters ParameterKey=SSHKeyPair,ParameterValue=instructor-keypair       \
                 ParameterKey=Subnet1,ParameterValue=subnet-09fbf916df8c2bc1d    \
                 ParameterKey=Subnet2,ParameterValue=subnet-082ab7c28f3003b5a    \
                 ParameterKey=Subnet3,ParameterValue=subnet-0fecee2dc59289bd3    \
    --change-set-name with-http-sg

aws cloudformation list-change-sets --stack-name gfu-asg-stack
aws cloudformation execute-change-set --change-set-name with-http-sg --stack-name gfu-asg-stack

aws cloudformation update-stack \
    --stack-name gfu-asg-stack \
    --template-body file://010-simpleec2asg.cloudformation.yaml \
    --parameters ParameterKey=SSHKeyPair,ParameterValue=instructor-keypair       \
                 ParameterKey=Subnet1,ParameterValue=subnet-09fbf916df8c2bc1d    \
                 ParameterKey=Subnet2,ParameterValue=subnet-082ab7c28f3003b5a    \
                 ParameterKey=Subnet3,ParameterValue=subnet-0fecee2dc59289bd3
```

## Sechstes Beispiel
[Link zur Datei](./012-simpleec2asg-alb.cloudformation.yaml)
Dieses Beispiel enthält zusätzlich alles, um eine ASG aufzusetzen, sowie Parametervalidierung.

```shell
aws cloudformation update-stack \
    --stack-name gfu-asg-stack \
    --template-body file://010-simpleec2asg.cloudformation.yaml \
    --parameters ParameterKey=SSHKeyPair,ParameterValue=instructor-keypair       \
                 ParameterKey=Subnet1,ParameterValue=subnet-09fbf916df8c2bc1d    \
                 ParameterKey=Subnet2,ParameterValue=subnet-082ab7c28f3003b5a    \
                 ParameterKey=Subnet3,ParameterValue=subnet-0fecee2dc59289bd3    \
                 ParameterKey=VpcId,ParameterValue=vpc-08df5a764504ca261
```

## Snippets

```shell
# To create, inspect and perform a changeset
aws cloudformation deploy --no-execute-changeset --template-file 001-simple-ec2-no-sg.cloudformation.yaml --stack-name gfu-001-simple-ec2-no-sg
aws cloudformation describe-change-set --change-set-name arn:aws:cloudformation:eu-central-1:290486675607:changeSet/awscli-cloudformation-package-deploy-1715584003/70494146-70e6-40ac-b385-8b451be5dfd2
aws cloudformation execute-change-set --change-set-name arn:aws:cloudformation:eu-central-1:290486675607:changeSet/awscli-cloudformation-package-deploy-1715584003/70494146-70e6-40ac-b385-8b451be5dfd2
```
```shell
aws cloudformation create-change-set \
    --stack-name MyStack \
    --template-body file://template.yaml \
    --parameters ParameterKey=SSHKeyPair,ParameterValue=my-key-pair \
                 ParameterKey=Subnet1,ParameterValue=subnet-12345678 \
                 ParameterKey=Subnet2,ParameterValue=subnet-23456789 \
                 ParameterKey=Subnet3,ParameterValue=subnet-34567890 \
    --change-set-name MyChangeSet
```
