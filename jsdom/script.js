function SubmitEvent(){
    console.log("submit button clicked");

    const fn = document .getElementById("FullName").value;
    console.log(fn);

    document.getElementById("myData").innerText = fn;
    document.getElementById("FullName").value = "";
}
