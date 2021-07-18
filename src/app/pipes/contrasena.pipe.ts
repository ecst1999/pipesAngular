import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean = true): string {        

    let encriptado = '*';
    let repeticion = '';

    if (activar){  
          
      repeticion = encriptado.repeat(value.length);
      return repeticion;
    }
    else{
      return value;
    }    
  }

}
