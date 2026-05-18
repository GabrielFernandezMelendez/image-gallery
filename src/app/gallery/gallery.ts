import { Component, signal } from '@angular/core';
import { ImageItemComponent } from '../image-item/image-item';
import { Image } from '../interfaces/image.interface';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageItemComponent],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class GalleryComponent {
  images = signal<Image[]>([
    { id: '1', src: 'https://picsum.photos/id/237/400/400', alt: 'Un perro' },
    { id: '2', src: 'https://picsum.photos/id/238/400/400', alt: 'Una montaña' },
    { id: '3', src: 'https://picsum.photos/id/239/400/400', alt: 'Un paisaje' },
    { id: '4', src: 'https://picsum.photos/id/240/400/400', alt: 'Una ciudad' },
    { id: '5', src: 'https://picsum.photos/id/241/400/400', alt: 'Un bosque' },
  ]);

    removeImage(id: string) {
    const confirmar = window.confirm('¿Estás seguro de que quieres eliminar esta imagen?');
    if (confirmar) {
      this.images.update(imagenes => imagenes.filter(img => img.id !== id));
    }
  }
}