import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/shared/movie.model';
import { MovieService } from 'src/shared/movie.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {

  // movies: Movie[] = [];
  movies$: Observable<Movie[]> | undefined;

  constructor(private router: Router, protected movieService: MovieService) { }

  ngOnInit(): void {
    this.movies$ = this.movieService.getMovies();
  }

  goToDetailPage(movieId: string): void {
    this.router.navigate(['/detail', movieId]);
  }

  goToCreatePage(): void {
    this.router.navigate(['/create']);
  }
}
