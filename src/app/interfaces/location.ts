export interface Location {
    [index: number]: {
        lat: number;
        lng: number;
        placeName: string;
        dir: string;
    };
}
