import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ import this

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'Personal site built with Angular.',
      link: '#',
    },
    {
      title: 'CRUD App',
      description: 'Manage items with create, read, update, delete.',
      link: '#',
    },
  ];
}
