import { Component, input, output } from '@angular/core';
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
  isSelected = input(false);

  deleteImage = output<string>();
  selectImage = output<string>();

  onDeleteClick(event: MouseEvent) {
    event.stopPropagation();
    this.deleteImage.emit(this.image().id);
  }

  onImageClick() {
    this.selectImage.emit(this.image().id);
  }
}