import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-security-demo',
  standalone: true,
  template: `
    <div class="demo-container">
      <h3>1. Injection HTML (TrustHtml)</h3>
      <!-- Si on ne passait pas par le Sanitizer, Angular bloquerait le style en ligne -->
      <div [innerHTML]="htmlDeConfiance"></div>

      <h3>2. Intégration YouTube (TrustResourceUrl)</h3>
      <!-- Si on mettait directement la chaîne de caractères brute ici, Angular générerait 
           une erreur de sécurité dans la console "unsafe value used in a resource URL context" -->
      <iframe [src]="videoUrlDeConfiance" width="560" height="315" frameborder="0"></iframe>
    </div>
  `
})
export class SecurityDemoComponent {
  // 1. On injecte le service de sécurité
  private sanitizer = inject(DomSanitizer);

  // 2. On déclare les variables avec des types "Safe" spécifiques
  htmlDeConfiance: SafeHtml;
  videoUrlDeConfiance: SafeResourceUrl;


  constructor() {
    // ---- SCÉNARIO 1 : HTML ----
    const rawHtml = '<span style="color: red; font-size: 20px;">Texte important formaté</span>';
    // On valide manuellement ce HTML
    this.htmlDeConfiance = this.sanitizer.bypassSecurityTrustHtml(rawHtml);

    // ---- SCÉNARIO 2 : IFRAME ----
    // URL brute de la vidéo YouTube https://www.youtube.com/embed/h5OJUSS_8IA?si=LMF6ldKiluBIsp1g
    const rawUrl = 'https://www.youtube.com/embed/h5OJUSS_8IA';
    // Attention : Ne pas confondre TrustUrl (pour les <a href>) et TrustResourceUrl (pour les <iframe src>)
    this.videoUrlDeConfiance = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  }
}

