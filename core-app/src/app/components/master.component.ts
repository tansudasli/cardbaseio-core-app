import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Master } from './master.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthenticationComponent } from './authz/authentication.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit, AfterViewInit {
  title: string = 'Home';
  masterCards: Master[];

  constructor(private bottomSheet: MatBottomSheet,
              private router: Router) { }

  ngOnInit() {
    // TODO: init dummy data
    this.masterCards = [
    {
      id: 123,
      cardContent: {title: 'title',
                    subTitle: 'subtitle',
                    imageSrcURL: 'https://dummyimage.com/600x400/fefefe/969396.jpg&text=card',
                    imageAltText: 'hint',
                    routerLink: '/detail/123'},
      cardHeader: {title: '', avatarURL: ''},
      cardActions: []
    },
    {
      id: 124,
      cardContent: {title: 'title',
                    subTitle: 'subtitle',
                    imageSrcURL: 'https://dummyimage.com/600x400/fefefe/969396.jpg&text=card',
                    imageAltText: 'hint',
                    routerLink: '/detail/124'},
      cardHeader: {title: '', avatarURL: ''},
      cardActions: []
    }];

  }

  ngAfterViewInit() {
    // TODO: put a logic, to control below fn.
    //  onFirstLoad, show
    //  if users backs from another page, don't show
    this.openBottomSheet();

  }

  /**
   * opens authentication.component as a bottom sheet (dialog),
   * and inside this, login or signin logic are handled !
   *
   * Once you pressed login or continued-as, you should not see bottomSheet anymore. Esp. after back navigation
   */
  openBottomSheet(): void {

      this.bottomSheet.open(AuthenticationComponent);
  }

}
