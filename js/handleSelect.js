var citiesByState = {
    Gujarat: ["Choose City","Ahmedabad", "Jamnagar", "Rajkot", "Vadodara",],
    Maharashtra: ["Choose City", "Mumbai", "Pune", "Nagpur", "Nashik", "Ahamadnagar"],
    Karnataka: ["Choose City","Banglore", "Hubli", "Mysore", "Hampi","Shivamogga"],
    Kerla: ["Choose City","Thiruvananthapuram", "Kochi", "Kollam", "Kozhikode","Kannur"]
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