import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  generateWhatsAppLink(groupInviteCode: string): SafeResourceUrl {
    const url = `https://chat.whatsapp.com/${groupInviteCode}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  groupInviteCode = "Fsryp4KvaMzJ7RDPxOm1Be";

  whatsappLink = this.generateWhatsAppLink(this.groupInviteCode);

  ngOnInit(): void {
  }

}