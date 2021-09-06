import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consultas } from '../models/consultas.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultaRastreamentoService {

  consultas = new Consultas()

  constructor(
    private http: HttpClient
  ) { }

  public getConsulta(): Observable<Array<Consultas>> {
    return this.http.get<Array<Consultas>>('http://localhost:8080/rastreamento');
  }

  public consulta() { return this.consultas; }

  public consultar(codigo: number): Promise<Consultas> {
    return new Promise((resolve, reject) => {
      this.getConsulta().subscribe(resp => {
        const object = resp.find(v => v.codigo === codigo);
        if (object) {
          this.consultas = object
          resolve(object)
        } else {
          reject(null)
        }
      },
      err => {
        reject(null)
      })
    })

  }

}
