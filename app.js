async function loadPage(){
    const response = await fetch("http://quarkuscors-quarkus.apps.openshift4rdu.lab.upshift.rdu2.redhat.com:8080/hello-resteasy");
    let message = await response.text();
    console.log(`${message} from quarkus resteasy application`);
    document.body.innerHTML = message;
}

loadPage();
