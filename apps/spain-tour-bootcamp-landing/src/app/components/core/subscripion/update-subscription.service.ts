import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { UpdateSubscriptionFormPayload } from './update-subscription-form.component';
import {
  UpdateSubscriptionModalComponent,
  UpdateSubscriptionModalData,
} from './update-subscription-modal.component';

@Injectable({ providedIn: 'root' })
export class UpdateSubscriptionService {
  private readonly _matDialog = inject(MatDialog);

  async updateSubscription(payload: UpdateSubscriptionModalData) {
    return await lastValueFrom(
      this._matDialog
        .open<
          UpdateSubscriptionModalComponent,
          UpdateSubscriptionModalData,
          UpdateSubscriptionFormPayload
        >(UpdateSubscriptionModalComponent, { data: payload })
        .afterClosed(),
    );
  }
}
