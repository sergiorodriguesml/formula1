var myTable = document.getElementById("table-drivers");

var myRequest = new Request('http://ergast.com/api/f1/drivers.json');

fetch(myRequest)
  .then(function (response) {
    if (response.status != 200) {
      return false;
    }
    return response.json();
  }).then(function (data) {
    for (let i = 0; i < data.MRData.DriverTable.Drivers.length; i++) {
      let tablerow = document.createElement('tr');
      tablerow = '<td>'+data.MRData.DriverTable.Drivers[i].givenName+ ' ' +data.MRData.DriverTable.Drivers[i].familyName+'</td>'
                +'<td>'+((data.MRData.DriverTable.Drivers[i].permanentNumber != undefined) ? data.MRData.DriverTable.Drivers[i].permanentNumber : '--' )+ '</td>'
                +'<td>'+data.MRData.DriverTable.Drivers[i].nationality+'</td>'
                +'<td>'+data.MRData.DriverTable.Drivers[i].dateOfBirth+'</td>'
                +'<td> <a class="link-table-drivers" href="'+data.MRData.DriverTable.Drivers[i].url+'"> Information </a></td>';
      myTable.insertAdjacentHTML("beforeend",tablerow)
    }
  })