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

  getContacts(page: number, PageSize: number): Observable<any> {
    return this.http.get(`${this.api}/Contacts?page=${page}&size=${PageSize}`);
  }

  addContact(contact: IContact) {
    return this.http.post(`${this.api}/Contacts`, contact);
  }

  updateContact(contact: IContact) {
    return this.http.put(`${this.api}/Contacts/${contact.idContact}`, contact);
  }

  deleteContact(id: string) {
    return this.http.delete(`${this.api}/Contacts/${id}`);
  }
}
