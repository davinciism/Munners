import { Component, OnInit } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { moveInOut } from '../shared/animations';
import { MatDialog } from '@angular/material';
import { TcComponent } from '../splash-screen/tc/tc.component';
@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  animations: [moveInOut],
  // host: {'[@moveInOut]': ''}
})
export class InfoComponent implements OnInit {

  constructor(private seoService: SeoService, public dialog: MatDialog) { }

  ngOnInit() {
    this.seoService.addMetaTags();
  }
  openDialog() {
    const dialogRef = this.dialog.open(TcComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }


}
