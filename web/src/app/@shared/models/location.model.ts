export interface LocationDetails {
    ID?: number;
    postcode?: string;
    address?: string;
    doorNumber?: string;
    place?: string;
    parish?: string;
    county?: string;
    countyCode?: number;
    district?: string;
    latitude?: number;
    longitude?: number;
}

// create class from LocationDetails interface
export class LocationModel implements LocationDetails {
    ID?: number;
    postcode?: string;
    address?: string;
    doorNumber?: string;
    place?: string;
    parish?: string;
    county?: string;
    countyCode?: number;
    district?: string;
    latitude?: number;
    longitude?: number;

    constructor() {

        this.ID = undefined;
        this.postcode = '';
        this.address = '';
        this.doorNumber = '';
        this.place = '';
        this.parish = '';
        this.county = '';
        this.countyCode = undefined;
        this.district = '';
        this.latitude = undefined;
        this.longitude = undefined;
    }
}

export interface LocationPTAPI {
    ID: number;
    CodigoPostal: string;
    Morada: string;
    NumeroPorta: string;
    Localidade: string;
    Freguesia: string;
    Concelho: string;
    CodigoDistrito: number;
    Distrito: string;
    Latitude: number;
    Longitude: number;
}