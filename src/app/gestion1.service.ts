import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Gestion1Service {

  private baseUrl = "http://127.0.0.1:8080/back"; // Base URL commune pour les requêtes

  constructor(private http: HttpClient) {}

 

  // Ajouter un restaurant avec un fichier image
  addRestaurant(rest: any, image: File) {
    const data = new FormData();
    data.append("rest", JSON.stringify(rest));  // Détails du restaurant en JSON
    data.append("file", image);  // Fichier image
    // Envoi de la requête POST avec les données du restaurant et l'image
    return this.http.post(`${this.baseUrl}/addRestaurant`, data);
  }
}
