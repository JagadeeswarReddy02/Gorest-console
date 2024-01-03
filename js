let consoleFormEl = document.getElementById("consoleForm");
let requestUrlEl = document.getElementById("requestUrl");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");
let sendRequestBtnEl = document.getElementById("sendRequestBtn");

consoleFormEl.addEventListener("submit", function(event) { 
    event.preventDefault();
});

let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let responseStatusEl = document.getElementById("responseStatus");
let responseBodyEl = document.getElementById("responseBody");
let requestMethodValue = "POST";
let bodyValue = null;

requestMethodEl.addEventListener("change", function(event){
    requestMethodValue = event.target.value;
});

requestBodyEl.addEventListener("change", function(event) {
    bodyValue = event.target.value;
});


function createAndAppendHttpRequest() {
    let url = requestUrlEl.value;
    let options = {
        method: requestMethodValue,
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 9bfbd993e9b9cf81a8b7eaf1dfd32b274409b116b275172164a7803e9a9d1dd5",
        },
        body:bodyValue
    };

    fetch(url, options)
    .then(function(response) {
        return response.json();
    })

    .then(function(jsonData) {
        console.log(jsonData);

        responseStatusEl.value = jsonData.code;
        responseBodyEl.value = JSON.stringify(jsonData);
    });
}

sendRequestBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    if (requestUrlEl.value === "") {
        requestUrlErrMsgEl.textContent = "Required*";
    } else {
        requestUrlErrMsgEl.textContent = "";
    }

    createAndAppendHttpRequest();
});
