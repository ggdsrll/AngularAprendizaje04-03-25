import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Importa CommonModule

interface Amiibo {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  head: string;
  image: string;
  name: string;
  release: {
    au: string;
    eu: string;
    jp: string;
    na: string;
  };
  tail: string;
  type: string;
}

@Component({
  selector: 'app-componente',
  standalone: true, // Añade standalone: true si es un componente standalone
  imports: [CommonModule, HttpClientModule], // Importa CommonModule y HttpClientModule
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.scss']
})
export class ComponenteComponent implements OnInit {
  amiiboList: Amiibo[] = [];
  apiUrl = 'https://www.amiiboapi.com/api/amiibo/?format=json';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log('ngOnInit se está ejecutando'); 
    this.fetchAmiiboData();
  }

  fetchAmiiboData() {
    console.log('fetchAmiiboData se está ejecutando'); 
    this.http.get<{ amiibo: Amiibo[] }>(this.apiUrl)
      .subscribe(response => {
        console.log('Respuesta de la API recibida:', response); 
        this.amiiboList = response.amiibo;
        console.log('amiiboList actualizado:', this.amiiboList); 
      });
  }
}