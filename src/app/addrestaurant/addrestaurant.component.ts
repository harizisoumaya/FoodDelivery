import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css'] // Correction de styleUrl à styleUrls
})
export class AddrestaurantComponent {
  rest: any = { id: 0, titre: "", description: "", adresse: "", specialite: "" };

  /*
  constructor(private get: GestionService1, private route: Router) {}

  add(imageInput: any) {

    this.get.addRestaurant(this.rest,imageInput ).subscribe(
      (res) => {
        console.log('Restaurant ajouté avec succès', res);
        this.route.navigateByUrl('/restaurant'); // Redirection vers la page des restaurants
      },
      (err) => {
        console.log('Erreur lors de l\'ajout du restaurant', err);
      }
    );
  }*/
}