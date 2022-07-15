import { Component, Input, OnInit } from '@angular/core';
import { TypeOfRequest } from '@app/@shared/models/item.model';

@Component({
  selector: 'app-request-type',
  templateUrl: './request-type.component.html',
  styleUrls: ['./request-type.component.scss']
})
export class RequestTypeComponent implements OnInit {
  @Input()
  typeOfRequest: TypeOfRequest;

  TypeOfRequestEnum = TypeOfRequest;

  textClass: string;
  typeOfRequestText: string;

  constructor() { }

  ngOnInit(): void {
    this.typeOfRequestText = this.getRequestTypeName(this.typeOfRequest);
    this.textClass = this.getRequestTypeClass(this.typeOfRequest);
  }

  getRequestTypeName(requestType: TypeOfRequest) {
    switch (requestType) {
      case TypeOfRequest.Request:
        return 'Request';
      case TypeOfRequest.Trade:
        return 'Trade';
      case TypeOfRequest.Offer:
        return 'Offer';
    }
  }

  // detects the type of request and returns a class name for every type
  getRequestTypeClass(requestType: TypeOfRequest) {
    switch (requestType) {
      case TypeOfRequest.Request:
        return 'request';
      case TypeOfRequest.Trade:
        return 'trade';
      case TypeOfRequest.Offer:
        return 'offer';
    }
  }

}
