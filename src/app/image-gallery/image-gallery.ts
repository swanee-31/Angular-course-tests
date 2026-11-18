import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'; // 1. Import de la directive

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [NgOptimizedImage], // 2. Ajout dans le tableau des imports
  template: `
    <div class="gallery-container">
      
      <!-- 
        CAS N°1 : L'IMAGE CRITIQUE (LCP - Largest Contentful Paint)
        C'est l'image qui s'affiche tout en haut de l'écran. 
        - 'ngSrc' remplace 'src'.
        - L'attribut 'priority' est VITAL ici. Il indique à Angular d'insérer une balise 
          <link rel="preload"> dans le <head> de la page et de désactiver le lazy-loading.
        - Les dimensions 'width' et 'height' empêchent le CLS (saut de mise en page).
      -->
      <section class="hero-section">
        <h2>Image Principale (Prioritaire)</h2>
        <img 
          ngSrc="https://picsum.photos/id/1018/800/400" 
          width="800" 
          height="400" 
          priority 
          alt="Paysage de montagne"
        />
      </section>

      <!-- 
        CAS N°2 : L'IMAGE STANDARD (Lazy-loaded par défaut)
        Cette image est plus bas dans la page.
        - SANS l'attribut 'priority', Angular active automatiquement le Lazy Loading.
        - Le navigateur ne la téléchargera que lorsque l'utilisateur scrollera vers elle.
        - L'attribut 'placeholder' permet d'afficher un flou ou une image très basse qualité
          pendant le téléchargement de la vraie image.
      -->
      <section class="standard-section">
        <h2>Image Standard (Lazy-loaded)</h2>
        <img 
          ngSrc="https://picsum.photos/id/1015/600/400" 
          width="600" 
          height="400" 
       //   placeholder="blur"
          alt="Paysage de forêt"
        />
      </section>
       
      <!-- 
        CAS N°3 : L'IMAGE FLUIDE (Responsive / Background)
        Parfois, on ne connaît pas la taille exacte de l'image (ex: image de fond).
        - L'attribut 'fill' remplace 'width' et 'height'.
        - RÈGLE STRICTE : Le conteneur parent DOIT avoir 'position: relative' (ou absolute/fixed).
        - L'image prendra 100% de la taille de son parent. On utilise 'object-fit: cover' en CSS
          pour éviter qu'elle ne soit déformée.
      -->
      <section class="fluid-section">
        <h2>Image Fluide (Attribut 'fill')</h2>
        
        <div class="image-container-relative">
          <img 
            ngSrc="https://picsum.photos/id/1016/1000/600" 
            fill 
            style="object-fit: cover;"
            alt="Paysage de canyon"
          />
        </div>
      </section>

    </div>
  `,
  styles: [`
    .gallery-container { font-family: sans-serif; max-width: 900px; margin: 0 auto; padding: 20px; }
    section { margin-bottom: 50px; padding-bottom: 20px; border-bottom: 1px solid #eee; }
    
    /* Le parent absolu pour le CAS N°3 (fill) */
    .image-container-relative {
      position: relative; /* OBLIGATOIRE pour utiliser l'attribut 'fill' */
      width: 100%;        /* Largeur dynamique */
      height: 300px;      /* Hauteur fixe pour l'exemple */
      border-radius: 8px;
      overflow: hidden;
      background-color: #e0e0e0;
    }
  `]
})
export class ImageGalleryComponent {}