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
      description: 'A collection of responsive landing pages inspired by Frontend Mentor designs and others, built with HTML, CSS, SASS, and JavaScript. These pages are fully responsive, adapting seamlessly across various devices. I utilized APIs to integrate dynamic content and enhance interactivity. Each design is optimized for user experience, with clean code and attention to detail.',
      link: '#'
    },
    {
      title: 'User Activity Monitoring Dashboard',
      description: 'Admin dashboard with dynamic tables, date filters, theme switch, and sliding sidebar using Vanilla JS and jQuery',
      link: '#'
    },
    {
      title: 'Post Management System',
      description: 'Login/post interaction app with API integration tested via Postman, built with structured components.',
      link: '#'
    },
    {
      title: 'Big Ramy Fitness Web App UI',
      description: 'A responsive homepage, courses listing, and course overview from Figma design with complex UI elements like tab switching and FAQ accordion for a fitness education platform.',
      link: '#'
    },
    {
      title: 'Forkify - Recipe Search using API - Course Project',
      description: 'A recipe search and management app built with JavaScript (MVC architecture). It fetches real recipes from the Forkify API, allows users to search, view cooking instructions, adjust servings, bookmark recipes, and even upload their own. Fully responsive with local storage support.',
      link: '#'
    },
    {
      title: 'Todo App',
      description: 'A simple CRUD (Create, Read, Update, Delete) task management app where users can add, view, update (mark as complete), and delete tasks. The app uses unique task IDs and stores data persistently with localStorage. It incorporates Regex validation for correct input formats and offers a clean, responsive UI for task tracking.',
      link: '#'
    },
    {
      title: 'Personal Portfolio Website - Freelance Project',
      description: 'A responsive and visually appealing portfolio website crafted for a friend to display their work and skills. Designed with a clean, modern UI and optimized for all screen sizes to ensure a smooth, professional user experience across devices.',
      link: '#'
    }
  ];
}
