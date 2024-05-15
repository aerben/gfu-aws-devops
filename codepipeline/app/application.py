from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'This app has been deployed with CodePipeline!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)

application = app
