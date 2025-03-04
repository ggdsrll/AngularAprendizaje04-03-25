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
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.scss']
})
export class ComponenteComponent implements OnInit {
  amiiboList: Amiibo[] = [];
  apiUrl = 'https://www.amiiboapi.com/api/amiibo/?format=json';

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAmiiboData();
  }

  fetchAmiiboData() {
    this.http.get<{ amiibo: Amiibo[] }>(this.apiUrl)
      .subscribe(response => {
        this.amiiboList = response.amiibo;
      });
  }
}