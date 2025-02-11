import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ContactService } from '../../../../core/services/contact.service';
import { ToastService } from '../../../../core/services/toast.service';
import { ContactTableComponent } from './contact-table.component';

describe('ContactTableComponent', () => {
  let component: ContactTableComponent;
  let fixture: ComponentFixture<ContactTableComponent>;
  let contactServiceSpy: jasmine.SpyObj<ContactService>;
  let toastServiceSpy: jasmine.SpyObj<ToastService>;

  beforeEach(() => {
    contactServiceSpy = jasmine.createSpyObj('ContactService', ['addContact', 'updateContact']);
    toastServiceSpy = jasmine.createSpyObj('ToastService', ['showToast']);

    TestBed.configureTestingModule({
      declarations: [ContactTableComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: ContactService, useValue: contactServiceSpy },
        { provide: ToastService, useValue: toastServiceSpy },
      ],
    });

    fixture = TestBed.createComponent(ContactTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call addContact if form is valid and no id is present', () => {
    component.contactForm.setValue({
      name: 'John Doe',
      email: 'john.doe@example.com',
      cellPhone: '123456789',
      phone: '987654321',
      favorite: true,
      active: true,
      id: null, // Sem id para adicionar o contato
    });

    contactServiceSpy.addContact.and.returnValue(of({}));

    component.onSubimit();

    expect(contactServiceSpy.addContact).toHaveBeenCalled();
    expect(toastServiceSpy.showToast).toHaveBeenCalledWith({
      message: 'O contato foi criado com sucesso!',
      title: 'Sistema',
      type: 'success',
    });
  });

  it('should call updateContact if form is valid and id is present', () => {
    component.contactForm.setValue({
      name: 'John Doe',
      email: 'john.doe@example.com',
      cellPhone: '123456789',
      phone: '987654321',
      favorite: true,
      active: true,
      id: 1, // id presente para atualizar o contato
    });

    contactServiceSpy.updateContact.and.returnValue(of({}));

    component.onSubimit();

    expect(contactServiceSpy.updateContact).toHaveBeenCalled();
    expect(toastServiceSpy.showToast).toHaveBeenCalledWith({
      message: 'O contato foi alterado com sucesso!',
      title: 'Sistema',
      type: 'success',
    });
  });

  it('should not call any service if form is invalid', () => {
    component.contactForm.setValue({
      name: '',
      email: '',
      cellPhone: '',
      phone: '',
      favorite: false,
      active: false,
      id: null,
    });

    component.onSubimit();

    expect(contactServiceSpy.addContact).not.toHaveBeenCalled();
    expect(contactServiceSpy.updateContact).not.toHaveBeenCalled();
  });
});
