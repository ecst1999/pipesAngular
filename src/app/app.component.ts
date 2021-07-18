import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = "Steve Carvajal";
  nombre2: string = "steVe jaViEr carvAJal zambrAnO"
  personajes: string[] = ['IronMan', 'SpiderMan', 'Thor', 'Loki', 'Groot'];
  PI: number = Math.PI;
  porcentaje: number = 0.235;
  salario: number = 1234.5;
  fecha: Date = new Date();
  activar: boolean = true;
  idioma: string = 'es';
  videoURL: string = "https://www.youtube.com/embed/vLYpk_mh9kY";

  valorPromesa = new Promise<string>((resolve) =>{

    setTimeout(()=>{
      resolve('Llego la data');
    }, 4500);

  })

  heroe = {
    
    nombre: 'Logan', 
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa:20
    }

  }

}
