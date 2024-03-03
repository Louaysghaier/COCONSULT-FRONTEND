import { Component, OnInit } from '@angular/core';
import { Theme } from '@app/_models/theme';
import { ThemeService } from '@app/_services/ThemeService';

@Component({
  selector: 'app-showimg',
  templateUrl: './showimg.component.html',
  styleUrls: ['./showimg.component.scss']
})
export class ShowimgComponent implements OnInit {
  themes: Theme[] = [];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.loadThemes();
  }

  loadThemes() {
    this.themeService.getAllThemes().subscribe(
      (themes: Theme[]) => {
        this.themes = themes;

        // Extract the filename from the image path
        this.themes = this.themes.map(theme => {
          const imagePath = theme.image;
          const filename = imagePath.split('\\').pop()!;
          return { ...theme, image: filename };
        });

        console.log("Loaded images", this.themes);
      },
      error => {
        console.error('Error loading themes:', error);
      }
    );
  }
}
