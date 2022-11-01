import { Component, OnInit, Input } from '@angular/core';
import CepDto from '../dto/CepDto';
import { BuscarCepService } from '../buscar-cep/buscar-cep.service';

@Component({
  selector: 'app-buscando-cep',
  templateUrl: './buscando-cep.component.html',
  styleUrls: ['./buscando-cep.component.css']
})
export class BuscandoCepComponent implements OnInit {

  constructor(
    public service: BuscarCepService
  ) { }

  ngOnInit(): void {
  }

  dto: CepDto = new CepDto();
  dados: CepDto = new CepDto();


  @Input() cep: string = "";

  buscandoCep(): void{
    this.service.buscarCep(this.cep)
    .subscribe(dto => {
        this.dados = dto;
    });
  }
}
