async function loadPage(){
    const response = await fetch("http://172.30.216.68:8080/hello-resteasy");
    let message = await response.text();
    console.log(`${message} from quarkus resteasy application`);
    document.body.innerHTML = message;
}

loadPage();
