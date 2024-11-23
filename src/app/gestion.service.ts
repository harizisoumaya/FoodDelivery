import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root'
})
export class GestionService {
  private baseUrl = "http://127.0.0.1:8080/back"; // Base URL commune pour les requêtes

  constructor(private http: HttpClient) {}

  // Récupérer tous les restaurants
  getAllRestaurants() {
    return this.http.get(`${this.baseUrl}/restaurants`);
  }

  // Récupérer tous les items de menu d'un restaurant par ID
  getAllItemsMenuByRest(id: number) {
    return this.http.get(`${this.baseUrl}/menu/restaurant/${id}`);
  }

  // Ajouter un restaurant avec un fichier image
  addRestaurant(rest: any, image: File) {
    const data = new FormData();
    data.append("rest", JSON.stringify(rest));  // Détails du restaurant en JSON
    data.append("file", image);  // Fichier image
    // Envoi de la requête POST avec les données du restaurant et l'image
    return this.http.post(`${this.baseUrl}/addRestaurant`, data);
  }
  /*

  // Ajouter un item de menu
  addItemMenu(item: any) {
    return this.http.post(`${this.baseUrl}/addMenu`, item);
  }

  // Supprimer un restaurant par ID
  deleteRestaurant(id: number) {
    return this.http.delete(`${this.baseUrl}/deleteRestaurant/${id}`);
  }
  */
}