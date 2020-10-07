import { Component, OnInit } from '@angular/core';
import { Hospital } from '../model/hospital';
import { Router } from '@angular/router';
import { HospitalService } from '../service/hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  hospital: Hospital = new Hospital()
  listaHospitais: Hospital[]

  constructor(
    private hospitalService: HospitalService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.findAllHospitals()
  }

  findAllHospitals() {
    this.hospitalService.getAllHospitals().subscribe((resp: Hospital[]) => {
      this.listaHospitais = resp
    })
  }

  findByIdHospital() {
    this.hospitalService.getByIdHospital(this.hospital.id).subscribe((resp: Hospital) => {
      this.hospital = resp
    })
  }

  cadastrar(){
    if (this.hospital.nome == null || this.hospital.cidade == null || this.hospital.endereco == null || this.hospital.link == null ) {
      alert('Preencha o campo de nome do hospital corretamente.')      
    } else {
      this.hospitalService.postHospital(this.hospital).subscribe((resp: Hospital) =>{
        this.hospital = resp        
        this.hospital = new Hospital()
        alert('Hospital cadastrado com sucesso!')
        this.findAllHospitals()

      })
    }
  }

}
