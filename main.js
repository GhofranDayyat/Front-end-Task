import data from './assetes/data.json' assert { type: 'json' };


var tableBody = data.reduce(function (acc, obj) {
   return acc + "<tr><td>" + '<div class="container d-flex"><div class="row"><div class="col px-0"><img id="img"src="' + obj.image + '"class="rounded-circle" style="width: 30px; height: 30px;" alt="Avatar" /></div><div class="col px-0 mx-1 text-white d-flex flex-column"><span style="font-size: 12px; font-weight: 500">Dash</span><span style="font-size: 8px;">@randomdash</span></div></div></div>'
      + "</td><td>"
      + '<div class="col"></div><span class="row" style="font-size: 8px; color: gray;">Created</span><span class="row" style="font-size: 8px; color: #E4FA71;">' + obj.nfts + 'NFTs</span>'
      + "</td><td>"
      + '<button type="button" class="btn btn-outline-secondary btn-sm font-weight-bold"><div class="px-3 d-flex align-items-center"><span class="px-1 " style="font-size: 10px">Follow</span><i class="bi bi-plus "></i></div></button>' + "</td></tr>";
}, "");

document.getElementById("table").innerHTML = tableBody;



