import { HttpClient } from '@angular/common/http';
import { DetallePagoService } from './../services/DetallePago.service';
import { Detalle_Pago } from './../model/DetallePago';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalle-pago',
  templateUrl: './detalle-pago.component.html',
  styleUrls: ['./detalle-pago.component.scss']
})
export class DetallePagoComponent implements OnInit {
  DetallePagoService: any;
  detalle_Pago: Detalle_Pago;
  date: Date;
  constructor(
    private router: Router,
    private http: HttpClient,
    private detalle_PagoDataService: Detalle_Pago,
  ) { }

  ngOnInit() {
    this.detalle_Pago = new Detalle_Pago();
  }
  // crearOActualizarDetalle_Pago(detalle_Pago: Detalle_Pago) {
  //   this.detalle_PagoDataService.crearOActualizarDetallePago(this.detalle_Pago)
  //   .subscribe(data => {
  //     console.log(data);
  //     this.router.navigate(['cancelar']);
  //     alert( 'enviado' );
  //   });
}
