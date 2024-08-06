import { Movie } from './movie.model';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  backendUrl = 'http://localhost:8082/movies';

  // private movies: Movie[] = [
  //   { id: 1, title: 'The Dark Knight', director: 'Christopher Nolan', year: 2008, rating: '10/10' },
  //   { id: 2, title: 'Godzilla Vs. Kong', director: 'Adam Wingard', year: 2021, rating: '5/10'},
  //   { id: 3, title: 'Star Wars Episode IV: A new hope', director: 'George Lucas', year: 1977, rating: '8/10' }
  // ];

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.backendUrl);
  }

  getMovieById(id: string): Observable<Movie> {
    return this.http.get<Movie>(this.backendUrl+"/"+id);
  }
  createMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.backendUrl+"/add", movie);
    //movie.id = this.generateRandomId();
    // this.movies.push(movie);
  }

  // private generateRandomId(): number {
  //   // Generate a random number between 1 and 1000
  //   return Math.floor(Math.random() * 1000) + 1;
  // }

}
