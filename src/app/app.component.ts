import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LocalStorageService } from './Services/local-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  cells: string[] = Array(16).fill(''); // Inicializa las 16 celdas vacías
  private localStorageServices = inject(LocalStorageService);

  cantidadAzules: number = 0;
  cantidadRojas: number = 0;
  cantidadVerdes: number = 0;
  objeto: any = {};

  ngOnInit(): void {
    let object = this.localStorageServices.getValueByKey('colorin');
    if (object) {
      let obj = JSON.parse(object);
      this.objeto = obj;
      this.cantidadAzules = obj.azul;
      this.cantidadRojas = obj.rojo;
      this.cantidadVerdes = obj.verde;
    }
  }

  Save() {
    let object = {
      azul: this.cantidadAzules,
      rojo: this.cantidadRojas,
      verde: this.cantidadVerdes,
    };

    this.localStorageServices.setKeyWithValue(
      'colorin',
      JSON.stringify(object)
    );
    alert('Guardado correctamente');
    this.cells = Array(16).fill('');
  }

  onInputChange(): void {
    let cantidadAzules = 0;
    let cantidadRojas = 0;
    let cantidadVerdes = 0;

    this.cells.forEach((x) => {
      if (x == 'azul') {
        cantidadAzules++;
      }
      if (x == 'verde') {
        cantidadVerdes++;
      }
      if (x == 'rojo') {
        cantidadRojas++;
      }
    });
    if (this.objeto.azul != null) {
      cantidadAzules += this.objeto.azul;
      cantidadRojas += this.objeto.rojo;
      cantidadVerdes += this.objeto.verde;
    }

    this.cantidadAzules = cantidadAzules;
    this.cantidadVerdes = cantidadVerdes;
    this.cantidadRojas = cantidadRojas;
  }
}
