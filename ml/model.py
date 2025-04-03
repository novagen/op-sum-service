
from sklearn.linear_model import LinearRegression
import joblib

X = [[1,2], [2,3], [3,4], [4,5]]
y = [3, 5, 7, 9]

model = LinearRegression()
model.fit(X, y)

joblib.dump(model, "model.pkl")
