import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { NgIf } from '@angular/common';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { PushPipe } from '@ngrx/component';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import {
  EMPTY,
  concatMap,
  exhaustMap,
  firstValueFrom,
  of,
  tap,
  withLatestFrom,
} from 'rxjs';
import { CloseIconComponent } from '../icons'

interface ViewModel {
  isOpen: boolean;
  disableClose: boolean;
  ref: DialogRef | null;
  error: unknown;
}

const initialState: ViewModel = {
  isOpen: false,
  disableClose: false,
  ref: null,
  error: null,
};

@Component({
  selector: 'bootcamp-hd-dialog',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
  exportAs: 'hdDialog',
  standalone: true,
  imports: [NgIf, PushPipe, CloseIconComponent],
})
export class DialogComponent
  extends ComponentStore<ViewModel>
  implements AfterViewInit
{
  private readonly _dialog = inject(Dialog);

  @ViewChild(TemplateRef) templateRef: TemplateRef<unknown> | null = null;

  readonly isOpen$ = this.select(({ isOpen }) => isOpen);
  readonly ref$ = this.select(({ ref }) => ref);
  readonly error$ = this.select(({ error }) => error);
  readonly disableClose$ = this.select(({ disableClose }) => disableClose);

  @Output() closed = new EventEmitter();

  @Input() set disableClose(value: boolean) {
    this._setDisableClose(value);
    this._handleDisableClose();
  }

  @Input() set isOpen(value: boolean) {
    this._setIsOpen(value);

    if (this.templateRef !== null) {
      if (value) {
        this._handleOpen();
      } else {
        this._handleClose();
      }
    }
  }

  private readonly _setIsOpen = this.updater<boolean>((state, isOpen) => ({
    ...state,
    isOpen,
  }));

  private readonly _setDisableClose = this.updater<boolean>(
    (state, disableClose) => ({
      ...state,
      disableClose,
    })
  );

  private readonly _handleOpen = this.effect<void>(
    exhaustMap(() => {
      const templateRef = this.templateRef;

      if (templateRef === null) {
        return EMPTY;
      }

      return of(null).pipe(
        withLatestFrom(this.disableClose$),
        concatMap(([, disableClose]) => {
          const ref = this._dialog.open(templateRef, { disableClose });

          this.patchState({ ref, isOpen: true });

          return ref.closed.pipe(
            tapResponse(
              () => {
                this.closed.emit();
                this.patchState({ isOpen: false, ref: null });
              },
              (error) => this.patchState({ error, ref: null })
            )
          );
        })
      );
    })
  );

  private readonly _handleClose = this.effect<void>(
    concatMap(() =>
      of(null).pipe(
        withLatestFrom(this.ref$),
        tap(([, ref]) => {
          if (ref !== null) {
            ref.close();
          }
        })
      )
    )
  );

  private readonly _handleDisableClose = this.effect<void>(
    concatMap(() =>
      of(null).pipe(
        withLatestFrom(this.ref$, this.disableClose$),
        tap(([, ref, disableClose]) => {
          if (ref !== null) {
            ref.disableClose = disableClose;
          }
        })
      )
    )
  );

  constructor() {
    super(initialState);
  }

  ngAfterViewInit() {
    firstValueFrom(this.isOpen$).then((isOpen) => {
      if (isOpen) {
        this._handleOpen();
      }
    });
  }

  open() {
    this._setIsOpen(true);
    this._handleOpen();
  }

  close() {
    this._setIsOpen(false);
    this._handleClose();
  }

  setDisableClose(disableClose: boolean) {
    this._setDisableClose(disableClose);
    this._handleDisableClose();
  }
}
