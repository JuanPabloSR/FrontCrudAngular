import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  //Url listado empleados
  private baseURl = "http://localhost:8080/api/v1/empleados";

  constructor(private httpClient : HttpClient) { }


  obtenerListaEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURl}`);
  }

  registrarEmpleado(empleado:Empleado) : Observable<Object> {
    return this.httpClient.post(`${this.baseURl}`,empleado);
  }

  actualizarEmpleado(id:number, empleado:Empleado) : Observable<Object>{
    return this.httpClient.put(`${this.baseURl}/${id}`,empleado);
  }

  obtenerEmpleadoId(id:number) : Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURl}/${id}`);
  }

  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURl}/${id}`);
  }
}
