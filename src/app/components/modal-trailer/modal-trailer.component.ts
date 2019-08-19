import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from 'src/app/_core/shared/services/share-data.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-modal-trailer',
  templateUrl: './modal-trailer.component.html',
  styleUrls: ['./modal-trailer.component.scss']
})
export class ModalTrailerComponent implements OnInit {

  link: SafeResourceUrl = '';

  constructor(private shareDataService: ShareDataService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.shareDataService.shareTrailerMovie.subscribe((data: any) => {
      if (data != null && data != '') {
        this.link = this.sanitizer.bypassSecurityTrustResourceUrl(data.replace('watch?v=', 'embed/') + '?autoplay=1');
      }
    })
  }

  closeTrailer() {
    $("#modalTrailer").on('hidden.bs.modal', () => {
      this.link = '';
    });
  }
}
