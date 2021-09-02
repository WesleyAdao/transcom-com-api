import { Component, OnInit } from '@angular/core';
import { ConsultaRastreamentoService } from './../../services/consulta-rastreamento.service';
import { Consulta } from '../../interfaces/consulta.interfaces';
import { Consultas } from '../../models/consultas.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.scss']
})
export class AcompanhamentoComponent implements OnInit {

  consultas = new BehaviorSubject<Array<Consultas>>([])

  constructor(
    private consultaRastreamentoService: ConsultaRastreamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getter();
  }

  getter() {
    this.consultas.next([this.consultaRastreamentoService.consulta()])
  }

  return() {
    this.router.navigate(['/rastreamento']);
  }

}
