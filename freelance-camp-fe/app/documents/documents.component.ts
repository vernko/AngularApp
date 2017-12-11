import { Component } from '@angular/core';
import { Document } from './document';

@Component({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
    documents: Document[] = [
        {
            title: "My First Doc",
            description: 'asdf lkajsdflk',
            file_url: 'http://google.com',
            updated_at: '12/08/17',
            image_url: 'http://google.com',
        },
        {
            title: "My Second Doc",
            description: 'asdf lkajsdflk',
            file_url: 'http://google.com',
            updated_at: '12/08/17',
            image_url: 'http://google.com',
        },
        {
            title: "My Last Doc",
            description: 'asdf lkajsdflk',
            file_url: 'http://google.com',
            updated_at: '12/08/17',
            image_url: 'http://google.com',
        }
    ]
}