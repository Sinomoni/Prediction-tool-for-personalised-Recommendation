from joblib import load

# Load the trained model from the file
model_filename = "random_forest_model.joblib"
clf = load(model_filename)

# Sample input data for a student
student_data = {
    'Mathematics': 85,
    'Physical Sciences': 78,
    'Life Sciences': 90,
    'Geography': 70,
    'English': 80
}

# Convert input data into a DataFrame
import pandas as pd
student_df = pd.DataFrame([student_data])

# Make prediction for the student
prediction = clf.predict(student_df)

# Display the prediction result
print("Prediction for the student:", prediction[0])
