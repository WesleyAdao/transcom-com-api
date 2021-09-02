import { ConsultaRastreamentoService } from './../../services/consulta-rastreamento.service';
import { Component, OnInit } from '@angular/core';
import { Consulta } from '../../interfaces/consulta.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rastreamento',
  templateUrl: './rastreamento.component.html',
  styleUrls: ['./rastreamento.component.scss']
})
export class RastreamentoComponent implements OnInit {

  consultas!: Consulta;
  codigo!: string;
  notFound = false;

  constructor(
    private consultaRastreamentoService: ConsultaRastreamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  consultar(form: any) {

    this.consultaRastreamentoService.consultar(Number.parseInt(this.codigo, 0)).then(
      result => {
        this.router.navigate(['/acompanhamento']);
      }
    ).catch(
      err => {
        this.notFound = true;
      }
    )
  }
}

