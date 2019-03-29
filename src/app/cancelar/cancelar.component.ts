import { OrdenGastos } from './../model/OrdenGasto';
import { OrdenGastoService } from './../services/OrdenGasto.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { RouterModule, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.css'],
  // providers: [OrdenGastoService]
})
export class CancelarComponent implements OnInit {
  OrdenGastoService: any;
  ordenGasto: OrdenGastos;
  // ordenGastos: any;

  date: Date;
  constructor(
    private router: Router,
    private http: HttpClient,
    private ordeGastoDataService: OrdenGastoService,

  ) {}

  ngOnInit() {
    // this.crearOActualizarOrdenGasto();
    this.ordenGasto = new OrdenGastos();
  }
  crearOActualizarOrdenGastos(ordenGasto: OrdenGastos) {
    this.ordeGastoDataService.crearOActualizarOrdenGasto(this.ordenGasto)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['faq']);
      alert( 'creado exitosamente' );
    });
  }
  // resetForm(formNew: NgForm) {
  //   if (formNew ! = null) {
  //   formNew.reset();
  //   }
  //   this.OrdenGastoService.selectOrdenGasto = new crearOActualizarOrdenGasto();
  // }

}
