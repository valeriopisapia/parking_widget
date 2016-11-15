class API {
    constructor() {
        this.fileJSON = 'data/model.json';
    }

    createRequest() {
        let request = new XMLHttpRequest();
        request.open('GET', this.fileJSON);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(null);

        return request;
    }
}

export default API;
