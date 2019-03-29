import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/components/common/messageservice';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    providers: [MessageService]
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor(private router: Router, private messageService: MessageService) {
    }

    ngOnInit() {
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

    inicio() {
        this.router.navigate(['/inicio']);
    }

    buscar(param) {
        if (param.length) {
            // this.inicio();
            setTimeout(() => {
                this.router.navigate(['/menu', btoa(param)]);
            }, 50);
        } else {
            this.messageService.add({ severity: 'error', summary: 'Validación', detail: 'Ingrese una cédula valida' });
        }
    }

    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode === 13) {
            if (event.srcElement.value.length < 10) {
                this.messageService.add({ severity: 'error', summary: 'Validación', detail: 'Ingrese una cedula válida' });
            } else {

                this.buscar(event.srcElement.value);
            }
        }
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            this.messageService.add({ severity: 'warn', summary: 'Validación', detail: 'Ingrese solo números' });
            return false;

        }
        return true;
    }
}
