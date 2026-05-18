import { Component } from '@angular/core';
import { GalleryComponent } from './gallery/gallery';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}