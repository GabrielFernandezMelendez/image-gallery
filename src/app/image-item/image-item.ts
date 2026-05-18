import { Component, input } from '@angular/core';
import { Image } from '../interfaces/image.interface';

@Component({
  selector: 'app-image-item',
  standalone: true,
  templateUrl: './image-item.html',
  styleUrl: './image-item.css'
})
export class ImageItemComponent {
  image = input.required<Image>();
  isFeatured = input(false);
}