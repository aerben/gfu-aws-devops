#### Aufgabenstellung
Im Rahmen dieser Aufgabe erstellen wir eine einfache Elastic Beanstalk-Anwendung auf Basis von Python Flask.

1. **Instance Profile erstellen**
- Melden Sie sich bei der AWS Management Console an und öffnen Sie die IAM-Übersicht.
- Klicken Sie im Menü links auf "Roles"
- Klicken Sie auf "Create Role"
- Wählen Sie als Trust Entity Type "AWS Service" und als Use Case "EC2" mit dem Use Case "EC2 - Allows EC2 instances to call AWS services on your behalf."
- Wählen Sie zunächst keine Permissions
- Wählen Sie als Namen "aws-elasticbeanstalk-instance-role" und schließen Sie den Wizard ab
- Klicken Sie nun auf die neu erstellte Rolle
- Klicken Sie in "Permission Policies" auf "Add Permissions - Create Inline Policy"
- Schalten Sie den Policy Editor in den "JSON"-Modus und kopieren Sie den Inhalt der Datei [policy.json](policy.json) in den Editor. Speichern Sie die Rolle.

2. **Neue Anwendung erstellen**
- Öffnen Sie über die Suchleiste den Elastic Beanstalk Service.
- Klicken Sie auf "Create a new application".
- Geben Sie einen Namen für Ihre Anwendung ein, z.B. "StudentApp".

3. **Environment erstellen**

Haupteinstellungen
- Klicken Sie in der Übersicht der neuen Anwendung auf den Button "Create new environment"
- Wählen Sie "Web server environment" und vergeben Sie einen beliebigen Namen. Die Domain können Sie ebenfalls leer lassen
- Wählen Sie den Plattformtyp "managed" mit Typ "Python"
- Unter "Application Code", wählen Sie zunächst "Sample Application"
- Lassen Sie das Preset auf "Single Instance"

Service Access
- Wählen Sie die Service Role "aws-elasticbeanstalk-service-role" aus
- Wählen Sie ein EC2 Key Pair Ihres Accounts (wenn keines existiert, legen Sie eines an. Fragen Sie mich im Zweifel, wie das geht)
- Wählen Sie das Instance Profile, das sie oben erstellt haben

Networking
- Wählen Sie die Standard-VPC, die in Ihrem Account vorhanden ist
- Aktivieren sie alle drei Subnetze der VPC im nächsten Abschnitt
- Klicken Sie unten auf "Next". Sie können den Wizard nun bis zum Ende weiter abschließen und alle Defaults aktiv lassen

Test
- Warten Sie, bis die Einrichtung der Anwendung abgeschlossen ist. Der "Health"-Status sollte sich dann grün färben
- Öffnen Sie danach den "Domain"-Link. Er sollte die Beispielanwendung zeigen

4. **Eigene Beispielanwendung bereitstellen**
- Bereiten Sie eine einfache Python-Flask-Anwendung vor oder verwenden Sie den bereitgestellten Beispielcode in [python-app](python-app)
- Klicken Sie auf "Upload & Deploy" und wählen Sie die Zip-Datei mit Ihrer Anwendung hoch (z.B. [diese Datei](python-app/flask-app.zip))
- Klicken Sie auf "Deploy"

4. **Umgebung konfigurieren**
    - Klicken Sie auf "Create a new environment".
    - Wählen Sie "Web server environment".
    - Wählen Sie die Plattform "Python" und laden Sie die `flask-app.zip` Datei hoch.
    - Lassen Sie die Standardkonfigurationen unverändert, es sei denn, Sie möchten spezifische Anpassungen vornehmen.

5. **Umgebung erstellen und Anwendung bereitstellen**
    - Klicken Sie auf "Create environment".
    - Warten Sie, bis die Umgebung erstellt und die Anwendung bereitgestellt ist. Dies kann einige Minuten dauern.

6. **Überprüfen Sie die Bereitstellung**
    - Greifen Sie auf die bereitgestellte Anwendung über die bereitgestellte URL zu, z.B. `http://studentapp-env.eba-xyz123.us-west-2.elasticbeanstalk.com`.
    - Überprüfen Sie, ob die Anwendung erfolgreich bereitgestellt wurde und die Meldung "Hello, World!" anzeigt.

7. **Skalierung und Logs überprüfen**
    - Navigieren Sie in der Elastic Beanstalk Konsole zu Ihrer Umgebung und klicken Sie auf "Configuration".
    - Überprüfen Sie die Skalierungsoptionen unter "Capacity". Sie können die Anzahl der Instanzen anpassen und Auto Scaling aktivieren.
    - Sehen Sie sich die Logs unter "Logs" an, um zu überprüfen, ob die Anwendung ordnungsgemäß läuft. Sie können "Request logs" auswählen, um detaillierte Logdateien herunterzuladen.
