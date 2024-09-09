from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

# Allowing CORS for your frontend (localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust this to match your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Load the model
model = joblib.load('path_to_model.pkl')

# Define the input data model
class PredictionInput(BaseModel):
    Capacity: float
    Production: float
    Mine_size: float
    Mine_Depth: float
    Workforce_Size: float
    Total_Reserves: float
    Total_Resource: float
@app.get('/')
def index():
    return {'message': 'Hello, World'}
@app.post("/predict/")
def predict(input_data: PredictionInput):
    try:
        # Convert input data to a numpy array
        input_features = np.array([
            input_data.Capacity,
            input_data.Production,
            input_data.Mine_size,
            input_data.Mine_Depth,
            input_data.Workforce_Size,
            input_data.Total_Reserves,
            input_data.Total_Resource
        ]).reshape(1, -1)

        # Make prediction
        prediction = model.predict(input_features)
        return {"prediction": prediction[0]}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
#uvicorn MLapi:app --reload