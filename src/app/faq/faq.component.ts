import { Component, OnInit } from '@angular/core';
import { OrdenGastoService } from '../services/OrdenGasto.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  OrdenGastoService: any;
  ordenGastos: any;
  date: Date;
  constructor(
    private http: HttpClient,
    private ordenGastoDataService: OrdenGastoService,
  ) { }

  ngOnInit() {
    this.buscarOrdenGasto();
  }
  buscarOrdenGasto(){
    this.ordenGastoDataService.buscarOrdenGasto().subscribe(respuesta=>{
      this.ordenGastos = respuesta;
      console.log(this.ordenGastos);
    },
    err =>{

    }
    );
  }

}
