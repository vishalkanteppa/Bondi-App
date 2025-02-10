import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'; 
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [CommonModule, IonicModule, FormsModule, RouterLink, RouterModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent  {
  constructor() { }
}
