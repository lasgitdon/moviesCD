import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/shared/movie.model';
import { MovieService } from 'src/shared/movie.service';
import {Observable} from "rxjs";


@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  movie$: Observable<Movie> | undefined;
  errorMessage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    const movieId = String(this.route.snapshot.paramMap.get('id'));
    this.movie$ = this.movieService.getMovieById(movieId);
      // if (!this.movie) {
      //   this.errorMessage = "Movie not found, please return to the overview";
      // }
  }

  goBack(): void {
    this.router.navigate(['/overview']);
  }
}
