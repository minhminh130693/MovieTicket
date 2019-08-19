import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/_core/shared/services/share-data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-modal-map',
  templateUrl: './modal-map.component.html',
  styleUrls: ['./modal-map.component.scss']
})
export class ModalMapComponent implements OnInit {

  mapLink: SafeResourceUrl = '';

  constructor(private shareDataService: ShareDataService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.shareDataService.shareMapLink.subscribe((data: any) => {
      if (data != null && data != '') {
        let link = 'http://maps.google.com/maps?q=' + data.replace(/ /g, '+') +'&z=15&output=embed';
        this.mapLink = this.sanitizer.bypassSecurityTrustResourceUrl(link);
      }
    })
  }

  closeMap() {
    $("#modalMap").on('hidden.bs.modal', () => {
      this.mapLink = '';
    });
  }

}
