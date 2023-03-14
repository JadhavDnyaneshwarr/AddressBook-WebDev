var citiesByState = {
    Gujarat: ["Choose City","Ahmedabad", "Jamnagar", "Rajkot", "Vadodara",],
    Maharashtra: ["Choose City", "Mumbai", "Pune", "Nagpur", "Nashik", "Ahamadnagar"],
    Rajasthan: ["Choose City","Jaipur", "Udaipur", "Bikaner", "Kota","jaisalmer"],
    Karnataka: ["Choose City","Banglore", "Hubli", "Mysore"]
}
function makeCitySubmenu(value) {
    if (value.length == 0) document.getElementById("city").innerHTML = "<option></option>";
    else {
        var citiesOptions = "";
        for (cityId in citiesByState[value]) {
            citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
        }
        document.getElementById("city").innerHTML = citiesOptions;
    }
}