import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}
  // Funcion para guardar datos en la sesion
  setKeyWithValue(key: string, value: any) {
    sessionStorage.setItem(key, value);
  }
  // Funcion para obtener datos de la sesion
  getValueByKey(key: string): any {
    return sessionStorage.getItem(key);
  }
  // Funcion para borrar datos de la sesion
  removeKey(key: string) {
    sessionStorage.removeItem(key);
  }
}
