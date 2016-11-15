import API from './api/api';
import Store from './store/store';
import ParkingComponent from './components/parking';

//Init classes
let api = new API();
let store = new Store();

//Get the data from JSON (in this case the json is locale but it's possible to add the remote json)
let request = api.createRequest();

request.onreadystatechange = () => {
    var DONE = 4; // readyState 4 means the request is done.
    var OK = 200; // status 200 is a successful return.
    if (request.readyState === DONE) {
        if (request.status === OK) {
            store.setParkingObj(JSON.parse(request.response));

            let parkingObj = store.getParkingObj();
            let parkingcomponent = new ParkingComponent(parkingObj);

            var divParking = document.createElement('div');
            divParking.innerHTML = `<div>${parkingcomponent.getTemplate()}</div>`;
            var htmlParking = divParking.firstChild;

            //In this point appending the parking html to somewhere (where you want)
            document.body.appendChild(htmlParking); //In this example the html is appended to the body.

            let parkingElements = document.getElementsByClassName('custom-column');

            //Adding the eventListeners
            parkingcomponent.addCollapse();
            parkingcomponent.addParkingElementListener(parkingElements);
        }
    } else {
        return JSON.parse(request.status || {});
    }
};