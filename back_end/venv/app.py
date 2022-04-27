from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/nlp/<string:message>')
def nlp(message):
    return {'result': message}
