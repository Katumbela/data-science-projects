"use client"

import { useState } from 'react';
import axios from 'axios';

const Predict: React.FC = () => {
  const [inputData, setInputData] = useState({
    satisfaction_level: 0,
    last_evaluation: 0,
    number_project: 0,
    average_montly_hours: 0,
    time_spend_company: 0,
    Work_accident: 0,
    promotion_last_5years: 0,
    Departments: 0, // deve ser preenchido corretamente
    salary: 0,      // deve ser preenchido corretamente
  });

  const [prediction, setPrediction] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: Number(value) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/predict', { features: Object.values(inputData) });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <h2 className="text-2xl mb-5">Previsão de Rotatividade</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(inputData).map((key) => (
          <div key={key} className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {key.replace(/_/g, ' ')}:
            </label>
            <input
              type="number"
              name={key}
              value={inputData[key as keyof typeof inputData]}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Prever</button>
      </form>
      {prediction !== null && (
        <div className="mt-4">
          <h3 className="text-xl">Predição de Rotatividade: {prediction}</h3>
        </div>
      )}
    </div>
  );
};

export default Predict;
