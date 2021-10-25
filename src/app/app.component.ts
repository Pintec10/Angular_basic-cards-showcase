import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: "Neat Tree",
      imageUrl: "assets/tree.jpeg",
      username: "nature",
      content: "This is a nice tree I saw today"
    },
    {
      title: "Snowy Mountain",
      imageUrl: "assets/mountain.jpeg",
      username: "mountainlover",
      content: "Here's a pic of a snowy mountain"
    },
    {
      title: "Mountain Biking",
      imageUrl: "assets/biking.jpeg",
      username: "biker101",
      content: "It was good to be out on my bike today!"
    },
  ]
}
