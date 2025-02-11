import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContact } from '../../features/contact/interfaces/contact.interface';
import { environment } from './../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private api: string = environment.api;

  constructor(private http: HttpClient) {}

  getContacts(): Observable<any> {
    return this.http.get(`${this.api}/contacts`);
  }

  addContact(contact: IContact) {
    return this.http.post(`${this.api}/contacts`, contact);
  }

  updateContact(contact: IContact) {
    return this.http.put(`${this.api}/contacts/${contact.id}`, contact);
  }

  deleteContact(id: number) {
    return this.http.delete(`${this.api}/contacts/${id}`);
  }
}
