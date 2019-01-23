import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'tc',
  templateUrl: './tc.component.html',
  styleUrls: ['./tc.component.scss']
})
export class TcComponent implements OnInit {

  constructor(private seoService: SeoService, public dialog: MatDialog) { }

  ngOnInit() {
    this.seoService.addMetaTags();
  }

}
