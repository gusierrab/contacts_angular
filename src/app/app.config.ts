import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"angular-contact-9d8f4","appId":"1:607659597550:web:0244bdacb8687d01e05dff","storageBucket":"angular-contact-9d8f4.appspot.com","apiKey":"AIzaSyBsyZ81AY5b4zAMTVl3lY5g4k96Aj-QCbg","authDomain":"angular-contact-9d8f4.firebaseapp.com","messagingSenderId":"607659597550"})), provideFirestore(() => getFirestore())]
};
