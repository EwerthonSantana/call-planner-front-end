import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';
import { ContactService } from '../../../../core/services/contact.service';
import { ToastService } from '../../../../core/services/toast.service';
import { phoneValidator } from '../../../../core/Validators/phone.validator';
import { FormFeedbackComponent } from '../../../../shared/components/form-feedback/form-feedback.component';
import { TranslateColumnPipe } from '../../../../shared/pipes/translate-column.pipe';
import { IContact } from '../../interfaces/contact.interface';

@Component({
  selector: 'app-contact-table',
  imports: [
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    TranslateColumnPipe,
    CommonModule,
    MatCardModule,
    FormFeedbackComponent,
    MatCheckboxModule,
    NgxMaskDirective,
    ReactiveFormsModule,
  ],
  templateUrl: './contact-table.component.html',
  styleUrl: './contact-table.component.css',
})
export class ContactTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'cellPhone', 'phone', 'favorite', 'active', 'actions'];
  dataSource = new MatTableDataSource<IContact>();
  totalContacts = 0;
  selectedContact: IContact;
  contactForm: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('deleteModal') deleteModal: any;

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      cellPhone: ['', [Validators.required, phoneValidator()]],
      phone: ['', [Validators.required, phoneValidator()]],
      favorite: [false],
      active: [false],
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getContacts().subscribe((res) => {
      this.dataSource.data = res;
      this.totalContacts = res.lenght;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSubimit() {
    if (!this.contactForm.valid) return;

    const payload: IContact = {
      id: this.contactForm.get('id').value,
      name: this.contactForm.get('name').value,
      email: this.contactForm.get('email').value,
      cellPhone: this.contactForm.get('cellPhone').value,
      phone: this.contactForm.get('phone').value,
      favorite: this.contactForm.get('favorite').value,
      active: this.contactForm.get('active').value,
    };

    if (!!payload['id']) {
      this.contactService.updateContact(payload).subscribe((res) => {
        this.toastService.showToast({
          message: 'O contato foi alterado com sucesso!',
          title: 'Sistema',
          type: 'success',
        });
      });
      return;
    }

    this.contactService.addContact(payload).subscribe((res) => {
      this.toastService.showToast({
        message: 'O contato foi criado com sucesso!',
        title: 'Sistema',
        type: 'success',
      });
    });
  }

  editRow(row: any): void {}

  openDeleteDialogModal(selectedRow: IContact) {
    this.selectedContact = selectedRow;
  }

  deleteContact(): void {
    const id: number = this.selectedContact.id;
    this.contactService.deleteContact(id).subscribe((res) => {
      this.toastService.showToast({
        message: 'O contato foi EXCLUIDO com sucesso!',
        title: 'Sistema',
        type: 'info',
      });
    });
  }
}
