import { BuscarCepService } from './buscar-cep.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import CepDto from '../dto/CepDto';

@Component({
  selector: 'app-buscar-cep',
  templateUrl: './buscar-cep.component.html',
  styleUrls: ['./buscar-cep.component.css']
})
export class BuscarCepComponent implements OnInit {

  constructor(
    public service: BuscarCepService
  ) { }

  ngOnInit(): void {
  }

  dto: CepDto = new CepDto();
  dados: CepDto = new CepDto();


  @Input() cep: string = "";

  @Output() cepOut = new EventEmitter<string>();

  buscarCep(): void{
    this.service.buscarCep(this.cep)
    .subscribe(dto => {
        this.dados = dto;
        this.devolverLogradouroParaOPai(dto.logradouro);
    });
  }

  devolverLogradouroParaOPai(logradouro: string): void{
    this.cepOut.emit(logradouro);
  }
}
