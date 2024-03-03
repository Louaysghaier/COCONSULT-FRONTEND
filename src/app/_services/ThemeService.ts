// theme.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theme } from '@app/_models/theme';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  apiUrl = 'http://localhost:8082/theme/';
  apiUrl1='http://localhost:8082/'
  constructor(private http: HttpClient) {}

  uploadImage(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl1 + 'uploadimage', formData);
  }



  createTheme(theme: Theme): Observable<Theme> {
    return this.http.post<Theme>(this.apiUrl + 'createtheme', theme);
  }
  getAllThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(this.apiUrl + 'getalltheme');
  }



}
