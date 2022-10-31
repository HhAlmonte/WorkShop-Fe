import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseModel } from '../../models/base.models';
@Injectable({
  providedIn: 'root',
})
export class ApiService<T extends BaseModel> {
  constructor(
    private http: HttpClient,
    @Inject('controller') private controller: string
  ) {}

  gets() {
    return this.http.get<T[]>(`http://localhost:3000/${this.controller}`);
  }

  get(id: any) {
    return this.http.get<T>(`http://localhost:3000/users/${id}`);
  }

  post(entity: T) {
    return this.http.post(`http://localhost:3000/${this.controller}`, entity);
  }

  put(entity: T) {
    return this.http.put(
      `http://localhost:3000/${this.controller}/${entity.id}`,
      entity
    );
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:3000/${this.controller}/${id}`);
  }
}
