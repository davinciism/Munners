import { Component, OnInit } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { moveInOut } from '../shared/animations';
import { MunsService } from './muns.service';

@Component({
  selector: 'muns',
  templateUrl: './muns.component.html',
  styleUrls: ['./muns.component.scss'],
  animations: [moveInOut],
  // host: {'[@moveInOut]': ''}
})
export class MunsComponent implements OnInit {

  constructor(private seoService: SeoService, munsService: MunsService) { }

  ngOnInit() {
    this.seoService.addMetaTags();
  }

 
}
