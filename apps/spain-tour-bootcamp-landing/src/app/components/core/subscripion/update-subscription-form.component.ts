import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface UpdateSubscriptionFormModel {
  email: string | null;
}

export interface UpdateSubscriptionFormPayload {
  email: string;
}

@Component({
  selector: 'bootcamp-update-settings-form',
  template: `
    <form #form="ngForm" (ngSubmit)="onSubmit(form)">
      <mat-form-field appearance="fill" class="w-full">
        <mat-label>Shyft API Key</mat-label>
        <input
          matInput
          name="shyftApiKey"
          [(ngModel)]="model.email"
          #emailControl="ngModel"
          required
        />
        @if (form.submitted && emailControl.errors?.['required']) {
          <mat-error> Email is required. </mat-error>
        }

        @if (form.submitted && emailControl.errors) {
          <mat-error>
            @if (emailControl.errors['required']) {
              Email is required.
            }
          </mat-error>
        }
      </mat-form-field>

      <div>
        <button
          type="submit"
          [disabled]="disabled"
          mat-raised-button
          color="primary"
        >
          Save
        </button>
      </div>
    </form>
  `,
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class UpdateSubscriptionFormComponent {
  private readonly _matSnackBar = inject(MatSnackBar);

  @Input() model: UpdateSubscriptionFormModel = {
    email: null,
  };
  @Input() disabled = false;
  @Output() updateSettings = new EventEmitter<UpdateSubscriptionFormPayload>();

  onSubmit(form: NgForm) {
    if (form.invalid || this.model.email === null) {
      this._matSnackBar.open('Invalid data, review form entries.', 'close', {
        duration: 3000,
      });
    } else {
      this.updateSettings.emit({
        email: this.model.email,
      });
    }
  }
}
