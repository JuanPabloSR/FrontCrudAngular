import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit {

  id:number;
  empleado:Empleado;

  constructor(private route:ActivatedRoute, private empleadoService:EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoService.obtenerEmpleadoId(this.id).subscribe(dato => {
      this.empleado = dato;
      swal(`Detalles del empleado ${this.empleado.nombre}`);
    });
  }



}
