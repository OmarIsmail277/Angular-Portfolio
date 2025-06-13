import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, About, Projects, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'first-project';
}
