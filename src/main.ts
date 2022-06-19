import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  /*const slide1 = document.getElementById('slide1')
  const SupUtil1 = ["54 m"]
  SupUtil1.forEach(item => {
      slide1.innerHTML += `<p class="Sup-Utildepto-21" >${item}</p>` })
  
  const SupTerraza1 = ["3 m"]
  SupTerraza1.forEach(item => {
      slide1.innerHTML += `<p class="Sup-Terrazadepto-21" >${item}</p>` })
      
  const SupTotal1 = ["57 m"]
  SupTotal1.forEach(item => {
      slide1.innerHTML += `<p class="Sup-Totaldepto-21" >${item}</p>` })
  
  const PrecioCyber1 = ["UF 6.200*"]
  PrecioCyber1.forEach(item => {
      slide1.innerHTML += `<p class="PrecioCyberdepto-21" >${item}</p>` })
      
  */
  
  