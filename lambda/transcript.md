# Demo
## Einfaches Beispiel

1. **AWS Management Console öffnen**
- Melden Sie sich bei der [AWS Management Console](https://aws.amazon.com/console/) an.
- Suchen Sie in der Services-Liste nach "Lambda" und klicken Sie darauf.

2. **Erstellen einer neuen Lambda-Funktion**
- Klicken Sie auf "Create function".
- Wählen Sie "Author from scratch".
- Geben Sie der Funktion einen Namen, z.B. "HelloWorldFunction".
- Wählen Sie unter "Runtime" die Sprache aus, die Sie verwenden möchten (z.B. Python 3.12).
- Wählen Sie "Create a new role with basic Lambda permissions" unter "Permissions".

3. **Schreiben des Funktionscodes**
- Im Abschnitt "Function code" fügen Sie folgenden Code in den Code-Editor ein:

  ```python
  def lambda_handler(event, context):
      return {
          'statusCode': 200,
          'body': 'Hello, World!'
      }
  ```

4. **Bereitstellen der Funktion**
- Klicken Sie auf "Deploy".

5. **Testen der Funktion**
- Klicken Sie auf "Test".
- Erstellen Sie ein neues Testereignis mit dem Namen "TestEvent".
- Klicken Sie auf "Create" und dann auf "Test".
- Überprüfen Sie die Ausgabe, die "Hello, World!" enthalten sollte.

## SQS Example

1. **AWS Management Console öffnen**
- Melden Sie sich bei der [AWS Management Console](https://aws.amazon.com/console/) an.
- Suchen Sie in der Services-Liste nach "Lambda" und klicken Sie darauf.

2. **Erstellen einer neuen Lambda-Funktion**
- Klicken Sie auf "Create function".
- Wählen Sie "Author from scratch".
- Geben Sie der Funktion einen Namen, z.B. "SQSLambdaFunction".
- Wählen Sie unter "Runtime" die Sprache aus, die Sie verwenden möchten (z.B. Python 3.8).
- Wählen Sie "Create a new role with basic Lambda permissions".

3. **Schreiben des Funktionscodes**
- Im Abschnitt "Function code" fügen Sie folgenden Code in den Code-Editor ein:

  ```python
  import json
 
  def lambda_handler(event, context):
      for record in event['Records']:
          message = record['body']
          print(f"Received message: {message}")
 
      return {
          'statusCode': 200,
          'body': json.dumps('Messages processed successfully!')
      }
  ```

4. **Bereitstellen der Funktion**
    - Klicken Sie auf "Deploy".

5. **Erstellen einer SQS-Warteschlange**
    - Gehen Sie zur SQS-Konsole.
    - Klicken Sie auf "Create Queue".
    - Wählen Sie "Standard Queue".
    - Geben Sie der Warteschlange einen Namen, z.B. "MyQueue".
    - Klicken Sie auf "Create Queue".

6. **Rolle anpassen**
Füge die Permission "AWSLambdaSQSQueueExecutionRole" zur Policy der Execution-Role der Lambda-Funktion hinzu.

7. **Ereignisquelle hinzufügen**
    - Gehen Sie zum Abschnitt "Configuration" Ihrer Lambda-Funktion.
    - Klicken Sie auf "Add trigger".
    - Wählen Sie "SQS" als Trigger-Typ.
    - Wählen Sie die zuvor erstellte SQS-Warteschlange (`MyQueue`).
    - Klicken Sie auf "Add".

8. **Testen der Funktion**
    - Gehen Sie zur SQS-Konsole und wählen Sie Ihre Warteschlange aus.
    - Klicken Sie auf "Send and receive messages".
    - Senden Sie eine Testnachricht, z.B. "Hello from SQS".
    - Überprüfen Sie die Logs Ihrer Lambda-Funktion, um sicherzustellen, dass die Nachricht verarbeitet wurde.
