var myTable = document.getElementById("table-current-seasion");
var anoSeasion = document.getElementById("ano-seasion");
var myRequest = new Request('http://ergast.com/api/f1/2017.json');

fetch(myRequest)
    .then(function (response) {
        if (response.status != 200) {
            return false;
        }
        return response.json();
    }).then(function (data) {
        let text_seasion = data.MRData.RaceTable.season;
        anoSeasion.insertAdjacentText('afterbegin', text_seasion);
        for (let i = 0; i < data.MRData.RaceTable.Races.length; i++) {
            let tablerow = document.createElement('tr');
            tablerow = "<td>" + data.MRData.RaceTable.Races[i].round + "</td>"
                + "<td>" + data.MRData.RaceTable.Races[i].raceName + "</td>"
                + "<td>" + data.MRData.RaceTable.Races[i].date + "</td>"
                + "<td>" + data.MRData.RaceTable.Races[i].time + "</td>"
                + "<td>" + data.MRData.RaceTable.Races[i].Circuit.circuitName + "</td>"
                + "<td>" + data.MRData.RaceTable.Races[i].Circuit.Location.locality + "</td>"
                + "<td>" + data.MRData.RaceTable.Races[i].Circuit.Location.country + "</td>"
                + '<td> <a class="link-table-drivers" href="' + data.MRData.RaceTable.Races[i].url + '"> Report </a></td>';
            myTable.insertAdjacentHTML("beforeend", tablerow);
        }
    });