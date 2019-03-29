import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ContratoService } from './../services/Contrato.service';
import { Contrato } from './../model/Contrato';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.scss']
})
export class ContratoComponent implements OnInit {
  ContratoService: any;
  contrato: Contrato;
  date: Date;
  constructor(
    private router: Router,
    private http: HttpClient,
    private contratoDataService: ContratoService,
  ) { }

  ngOnInit() {
    this.contrato = new Contrato();
  }
  crearOActualizarContrato(contrato: Contrato) {
    this.contratoDataService.crearOActualizarContrato(this.contrato)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['cancelar']);
      alert( 'enviado' );
    });
}
}
