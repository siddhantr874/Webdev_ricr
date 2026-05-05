function SubmitEvent(){
    console.log("submit button clicked");

    const fn = document .getElementById("FullName").value;
    console.log(fn);

    document.getElementById("myData").innerText = fn;
    document.getElementById("FullName").value = "";
    document.getElementById("fullName").value = "";

    document.getElementById("dataCard").classList.add("divshow");
    document.getElementById("dataCard").classList.remove("divhide");
}
