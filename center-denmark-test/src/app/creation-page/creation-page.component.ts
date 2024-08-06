import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/shared/movie.model';
import { MovieService } from 'src/shared/movie.service';

@Component({
  selector: 'app-creation-page',
  templateUrl: './creation-page.component.html',
  styleUrls: ['./creation-page.component.scss']
})
export class CreationPageComponent implements OnInit {

  newMovie: Movie = { id: '', title: '', director: '', year: 0, rating: '' };

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit(): void {
  }

  createMovie(): void {
    this.movieService.createMovie(this.newMovie)
      .subscribe({complete: () => this.router.navigate(['/overview'])});
  }

  goToOverviewPage(): void {
    this.router.navigate(['/overview']);
  }
}
