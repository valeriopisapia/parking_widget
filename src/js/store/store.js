class Store {
    constructor() {
        this.parkingObj = null;
    }

    setParkingObj (obj) {
        this.parkingObj = obj;
    }

    getParkingObj () {
        return this.parkingObj || {};
    }

    setParking (parking) {
        console.info('Parking selected', parking);
        //Eventually it could be saved in localstorage.
    }
}

export default Store;
