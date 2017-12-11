import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component ({
    moduleId: module.id,
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
    proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://portoflio.vernkofford.com', 'Ruby on Rails', 150, 120, 15, 'vern.kofford@gmail.com')
    proposalTwo: Proposal = new Proposal(3, 'XYZ Company', 'http://portoflio.vernkofford.com', 'Ruby on Rails', 150, 120, 15, 'vern.kofford@gmail.com')
    proposalThree: Proposal = new Proposal(300, 'That Company', 'http://portoflio.vernkofford.com', 'Ruby on Rails', 150, 120, 15, 'vern.kofford@gmail.com')

    proposals: Proposal[] = [
        this.proposalOne,
        this.proposalTwo,
        this.proposalThree
    ]
}