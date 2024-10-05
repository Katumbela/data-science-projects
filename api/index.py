from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # Habilitar CORS

# Carregar o modelo
modelo = joblib.load('caminho/para/seu/modelo_de_rotatividade_rh.pkl')

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.json
    # Certifique-se de que os dados estão na ordem correta conforme o treinamento
    features = [
        data['satisfaction_level'],
        data['last_evaluation'],
        data['number_project'],
        data['average_montly_hours'],
        data['time_spend_company'],
        data['Work_accident'],
        data['promotion_last_5years'],
        data['Departments'],  # Já deve ser codificado
        data['salary']        # Já deve ser codificado
    ]
    
    features = np.array(features).reshape(1, -1)
    prediction = modelo.predict(features)
    
    return jsonify({'prediction': int(prediction[0])})  # Retorne como inteiro

if __name__ == '__main__':
    app.run(debug=True)  # Use debug=True durante o desenvolvimento
