from app.config import config
import jwt

def jwtDecode(encoded):
    return jwt.decode(encoded, config.JWT_ENCRYPTION_KEY, algorithms=["HS256"])