from flask import Flask
from flask_cors import CORS
from routes.analyze_route import analyze_bp

app = Flask(__name__)
CORS(app)  # Enable CORS so frontend can access the API

# Register the API blueprint
app.register_blueprint(analyze_bp, url_prefix='/analyze')

if __name__ == '__main__':
    app.run(debug=True)