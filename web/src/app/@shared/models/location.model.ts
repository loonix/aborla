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