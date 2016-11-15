'use strict';

/***
 * ParkingComponend allows to build the parking html
 */
class ParkingComponent {
    constructor(parkingObj) {
        this.parkingObj = parkingObj;
        this.vendor = parkingObj.vendor;
        this.dict = parkingObj.dictionary;
        this.parkings = parkingObj.parkings;

        this.showDetailTemplateHTML = `<div class="parking_div exploded"><div class="widget-title">${this.dict.featuresTitle}</div><div class="row"><div class="column-1-2"><img class="image" src="${this.vendor.map}" alt=""/></div><div class="column-1-2">${this.getFeatures(this.vendor.features)}</div></div>${this.getParkings(this.parkings)}</div>`;
        this.baseTemplateHTML = `<aside id="parking_div" class="widget widget_parking"><h3 class="widget-title">${this.dict.bookYourParking} ${this.vendor.departureAirport}</h3><ul><li><a href="#">Mostra Dettagli</a><i class="fa fa-angle-down"></i><div>${this.showDetailTemplateHTML}</div></ul></aside>`;
    }

    /***
     * Get the final html
     * @returns {*}
     */
    getTemplate () {
        return this.baseTemplateHTML.toString();
    }

    /***
     * Get the features html
     * @param features
     * @returns {string}
     */
    getFeatures (features) {
        let html = '<ul>';

        features.map ( (feature) => {
            html += `<li> ${feature} </li>`;
        });

        return html;
    }

    /***
     * Get the parkings html
     * @param parkings
     */
    getParkings (parkings) {
        let html = '<div class="row parkings">';
        let index = 0;
        parkings.map ( (parking) => {
            index ++;
            html += `<div class="column-1-${index} custom-column">${parking.price}<br>${this.isIndoor(parking.indoor)}<br>${this.isInsurance(parking.insurance)}</div>`;
        });

        html += '</div>';

        return html;
    }

    /***
     * Check if the parking is indoor or not and get the corrected message
     * @param indoor
     * @returns {*}
     */
    isIndoor (indoor) {
        if (indoor) {
            return this.dict.indoorSpace;
        }

        return this.dict.outdoorSpace;
    }

    /***
     *Check if the parking has an insurance or not and get the corrected message
     * @param insurance
     * @returns {*}
     */
    isInsurance (insurance) {
        if (insurance) {
            return this.dict.insuranceIncluded;
        } else {
            return this.dict.insuranceExcluded;
        }
    }

    /***
     * Add Event Listener to the parking places
     * @param parkings
     */
    addParkingElementListener (parkings) {
        for (var i = 0; i < parkings.length; i++) {
            parkings[i].addEventListener("click", (e) => {
                var index = e.target.className.split(' ')[0].split('-')[2];
                let parking_selected = this.parkingObj.parkings[index - 1];
                let message = `You've selected this parking - price: ${parking_selected.price}, indoor: ${parking_selected.indoor}, insurance: ${parking_selected.insurance}`;
                window.alert(message);
            });
        }
    }

    /***
     * Add logic for the collapse
     */
    addCollapse () {
        var el = document.getElementById("parking_div");
        var hook = el.getElementsByClassName("fa");
        var a = el.getElementsByTagName("a")[0];

        var rotated;

        for (var i = 0; i < hook.length; i++) {
            hook[i].addEventListener("click", Toogle);
        }

        function Toogle() {

            if (this.nextElementSibling.nodeType === 1 && hasClass(this.nextElementSibling,"hide")) {
                if (this.nextElementSibling.classList) {
                    this.nextElementSibling.classList.remove('hide');
                    a.text = 'Mostra Dettagli';
                } else {
                    this.nextElementSibling.className = this.nextElementSibling.className.replace(new RegExp('(^|\\b)' + "hide" + '(\\b|$)', 'gi'), ' ');
                }
                rotated = false;
            }
            else {
                this.nextElementSibling.className += " " + "hide";
                a.text = 'Nascondi Dettagli';
                rotated = true;
            }

            var deg = rotated ? 0 : 180;

            this.style.transform = 'rotate('+deg+'deg)';
        }

        function hasClass (el, className){
            return el.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(el.className);
        }
    }
}

export default ParkingComponent;