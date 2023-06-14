import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CepService } from '../services/consulta/cep.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  constructor(
    private router: Router,
    private cepService: CepService
    ) { }
    
    
  ngOnInit(): void {

  }

  consultaCEP(ev: any){
    const cep = ev.target.value;
    return this.cepService.getConsultaCep(cep).subscribe(resultado => console.log(resultado));
  }

  cadastrar(form: NgForm){
    if(form.valid){
      this.router.navigate(['sucesso']);
    }else{
      console.log(form.controls);
    }
    console.log(form.controls);
  }

}
