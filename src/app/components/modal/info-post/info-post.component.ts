import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { iPost } from '../../../interfaces/post.interface';

@Component({
    selector: 'app-info-post',
    standalone: true,
    imports: [],
    templateUrl: './info-post.component.html',
    styleUrl: './info-post.component.scss',
})
export class InfoPostComponent {
    constructor(
        public dialogRef: MatDialogRef<InfoPostComponent>,
        @Inject(MAT_DIALOG_DATA) public data: iPost
    ) {}

    onClose() {
        this.dialogRef.close();
    }
}
