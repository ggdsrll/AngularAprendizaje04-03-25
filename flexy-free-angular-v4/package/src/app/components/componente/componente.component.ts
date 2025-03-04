import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { ApiService } from '../../api.service';
import { Amiibo } from '../../api.service';


@Component({
  selector: 'app-componente',
  standalone: true, 
  imports: [CommonModule, HttpClientModule],
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.scss']
})
export class ComponenteComponent implements OnInit {
  amiiboList: Amiibo[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchAmiiboData();
  }

  fetchAmiiboData() {
    this.apiService.getAmiiboData()
      .subscribe(response => {
        this.amiiboList = response.amiibo;
      });
  }
}