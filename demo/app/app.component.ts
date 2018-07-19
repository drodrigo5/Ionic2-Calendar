import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';


@Component({
    template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
    rootPage = TabsPage;

    }
}
