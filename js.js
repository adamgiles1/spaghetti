const loginForm = document.getElementById("theform");
const output = document.getElementById("output");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let lyrics = document.getElementById("input").value;

    let arr = lyrics.split(/(\s)/);

    let res = "";
    let rate = .95;
    let offset = 5;
    if (document.getElementById("too-spaghetti").checked) {
        rate = .70
        offset = 1;
    }
    if (document.getElementById("more-spaghetti").checked) {
        rate = .90
        offset = 3;
    }
    if (document.getElementById("dear-god").checked) {
        rate = .50;
        offset = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== " " && Math.random() > rate) {
            res += "Mom's Spaghetti ";
            i += offset;
        } else {
            res += arr[i];
        }
    }

    output.innerHTML = res;
});