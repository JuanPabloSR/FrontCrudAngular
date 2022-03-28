import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import swal from 'sweetalert2';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css'],
})
export class RegistrarEmpleadoComponent implements OnInit {
  empleado: Empleado = new Empleado();
  constructor(
    private empleadoService: EmpleadoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  guardarEmpleado() {
    this.empleadoService.registrarEmpleado(this.empleado).subscribe(
      (dato) => {
        console.log(dato);
        this.irListaEmpleados();
      },
      (error) => {
        this.handleError(error);
      }
    );
  }

  irListaEmpleados() {
    this.router.navigate(['/empleados']);
  }

  onSubmit() {
    this.guardarEmpleado();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      swal({
        title: 'No se ha podido agregar al empleado',
        text: `error de servidor: ${error.status}`,
      });
      console.error('Ah ocurrido un error inesperado', error.error);
    } else {
      console.error(`backend retorna ${error.status}, body `, error.error);
    }
    return throwError(() => swal({
      title: 'Algo salio mal',
      text: `no se puede agregar el empleado servidor: ${error.status}`,
    }));

  }
}
