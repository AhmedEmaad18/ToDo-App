import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogActions, MatDialogContent } from '@angular/material/dialog';
@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [MatDialogActions,MatDialogContent],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css'
})
export class ConfirmDialogComponent {
 constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: string }
  ) {}
  onCancel(): void {
    this.dialogRef.close();
  }
  onConfirm(): void {
    this.dialogRef.close('confirm');
  }
}
