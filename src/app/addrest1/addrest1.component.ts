import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Gestion1Service } from '../gestion1.service';

@Component({
  selector: 'app-addrest1',
  templateUrl: './addrest1.component.html',
  styleUrl: './addrest1.component.css'
})
export class Addrest1Component {
  rest: any = { id: 0, titre: "", description: "", adresse: "", specialite: "" };

  constructor(private get1: Gestion1Service, private route: Router) { }

  add(imageInput: any) {


    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.get1.addRestaurant(this.rest, file).subscribe(
        (res) => { this.route.navigate(['/liste']) },
        (err) => { console.log(err) }
      )
    });
    reader.readAsDataURL(file);

  }
}
