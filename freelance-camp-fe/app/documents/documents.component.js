"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
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
        ];
    }
    DocumentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'documents',
            templateUrl: 'documents.component.html'
        })
    ], DocumentsComponent);
    return DocumentsComponent;
}());
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map