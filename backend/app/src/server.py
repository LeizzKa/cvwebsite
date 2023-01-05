from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)


@app.route("/data")
def data():
    Data = {
        "name": "Leevi Luukkonen",
        "birth_date":"06.10.2002",
        "skills":
            [
                "React",
                "Python",
                "JavaScript",
                "TypeScript"
            ]
    }
    return json.dumps(Data)
if __name__ == "__main__":
    app.run(debug=True)