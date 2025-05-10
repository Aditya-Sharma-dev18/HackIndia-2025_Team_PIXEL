from flask import *
from Main import *
from flask_cors import *

app = Flask(__name__)
CORS(app)


@app.get('/')
def Indexx():
    return render_template('base.html')

@app.post("/predict")
def Chat_With_GreenPicker():
    print()
    text = request.get_json().get("message")
    print(text)
    response = PredifineChat(text)
    message = {"answer" : response}
    return jsonify(message)
    
if __name__ == "__main__":
    app.run()
    



