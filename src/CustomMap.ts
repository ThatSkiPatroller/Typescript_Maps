import { User } from './User';
import { Company } from './Company';

// Instructions to every other class on how they
// can be an argument to 'addMarker'
interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor (divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
    });
}

addMarker(mappable: Mappable): void {
    mappable
    new this.googleMap.maps.Marker({
        map: this.googleMap,
        position: {
            lat: mappable.location.lat,
            lng: mappable.location.lng
        }
    });
}

// This is a bad approach
// addMarker(mappable: User | Company): void {
//     mappable
//     new this.googleMap.maps.Marker({
//         map: this.googleMap,
//         position: {
//             lat: mappable.location.lat,
//             lng: mappable.location.lng
//         }
//     });
// }

// addCompanyMarker(company: Company): void {
//     new this.googleMap.maps.Marker({
//         map: this.googleMap,
//         position: {
//             lat: company.location.lat,
//             lng: company.location.lng
//         }
//     });
// }
}