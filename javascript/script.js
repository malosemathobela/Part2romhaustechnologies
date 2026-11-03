function searchSite() {
    let query = document.getElementById("searchInput").value.toLowerCase();
    alert("You searched for: " + query);
}
function openImage(src) {
    const box = document.createElement("div");
    box.style = "position:fixed;inset:0;background:#000e;display:grid;place-items:center;z-index:999";
    box.innerHTML = '<img src="' + src + '" style="max-width:90%;max-height:90%;">';
    box.onclick = function () { box.remove(); };
    document.body.appendChild(box);
}


function filterServices() {
    let query = document.getElementById("serviceSearch").value.toLowerCase();
    let services = document.querySelectorAll("#serviceList .service");

    services.forEach(function (service) {
        service.style.display = service.textContent.toLowerCase().includes(query) ? "" : "none";
    });
}
