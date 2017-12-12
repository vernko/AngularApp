import { Component } from '@angular/core';
import { Document } from './document';

@Component({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: 'documents.component.html',
    styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
    pageTitle: string = "Document Dashboard"

    documents: Document[] = [
        {
            title: "My First Doc",
            description: 'asdf lkajsdflk',
            file_url: 'http://google.com',
            updated_at: '12/08/17',
            image_url: 'https://blog.getmagic.com/wp-content/uploads/2017/05/freelancer-hire-1.jpg',
        },
        {
            title: "My Second Doc",
            description: 'asdf lkajsdflk',
            file_url: 'http://google.com',
            updated_at: '12/08/17',
            image_url: 'http://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2016/04/02/Photos/Computerpic-kXYB--621x414@LiveMint.jpg',
        },
        {
            title: "My Last Doc",
            description: 'asdf lkajsdflk',
            file_url: 'http://google.com',
            updated_at: '12/08/17',
            image_url: 'https://egyptianstreets.com/wp-content/uploads/2015/11/freelance-work-ftr.jpg',
        }
    ]
}