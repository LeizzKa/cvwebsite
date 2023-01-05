from flask import Flask

app = Flask(__name__)


@app.route("/data")
def data():
    return {
        "name": "Leevi Luukkonen",
        "birth_date": "06.10.2002",
        "skills": "Python, Flask, JavaScript, TypeScript",
        "experience": "PSIL"
        }

if __name__ == "__main__":
    app.run(debug=True)