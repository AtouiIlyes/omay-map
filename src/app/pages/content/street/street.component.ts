import { Component, Inject, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.css'],
})
export class StreetComponent implements OnInit {
  url: SafeResourceUrl;
  isLoading = false;
  constructor(
    public sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<StreetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    let url =
      'https://www.google.com/maps?layer=c&cbll=' +
      this.data.lat +
      ',' +
      this.data.lon;
      console.log(url)
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.isLoading = true;

  }
}
