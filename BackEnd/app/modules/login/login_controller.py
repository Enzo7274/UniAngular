from app.modules.login.errors.username_invalid_error import UsernameInvalidError
from app.modules.login.errors.password_invalid_error import PasswordInvalidError
from app.config import config
import jwt

class LoginController():
    def login(self, username, password):
        if username == config.USERNAME:
            if password ==config.PASSWORD:
                token = jwt.encode({"username":username},config.JWT_ENCRYPTION_KEY,algorithm="HS256")
                return token
            else:
                raise PasswordInvalidError
        else:
            raise UsernameInvalidError