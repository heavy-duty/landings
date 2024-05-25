import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {
  UpdateSubscriptionFormComponent,
  UpdateSubscriptionFormPayload,
  UpdateSubscriptionFormModel
} from './update-subscription-form.component';

export interface UpdateSubscriptionModalData {
  shyftApiKey: string;
}

@Component({
  selector: 'bootcamp-update-settings-modal',
  template: `
    <header class="flex gap-4 items-center px-4 pt-4">
      <h2 class="grow">Update Settings</h2>
      <button (click)="onClose()" mat-icon-button>
        <mat-icon> close </mat-icon>
      </button>
    </header>

    <div class="p-4 min-w-[350px]">
      <bootcamp-update-settings-form
        [model]="{
          email: data.email
        }"
        (updateSettings)="onUpdateSettings($event)"
      ></bootcamp-update-settings-form>
    </div>

    <footer class="flex gap-2 justify-center items-center pb-4">
      <p>RPC and API Powered by</p>
      <a href="https://shyft.to" target="_blank">
        <img src="assets/shyft-logo.png" class="w-8 h-8" />
      </a>
    </footer>
  `,
  standalone: true,
  imports: [MatButtonModule, MatIconModule, UpdateSubscriptionFormComponent],
})
export class UpdateSubscriptionModalComponent {
  private readonly _matDialogRef = inject(
    MatDialogRef<UpdateSubscriptionModalComponent>,
  );

  readonly data = inject<UpdateSubscriptionFormModel>(MAT_DIALOG_DATA);

  async onUpdateSettings(payload: UpdateSubscriptionFormPayload) {
    this._matDialogRef.close(payload);
  }

  onClose() {
    this._matDialogRef.close(false);
  }
}
