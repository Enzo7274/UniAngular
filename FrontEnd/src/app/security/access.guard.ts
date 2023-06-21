import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';


export const accessGuard: CanActivateFn = (route, state) => {

  return true;
};
