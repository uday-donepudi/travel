let globalParam; // Global variable to store the parameter value

function fun(p) {
    globalParam = p; // Assign the parameter value to the global variable
     // Output the parameter value
    localStorage.setItem('globalParam', globalParam);
    window.location.href="sample.html";
}
document.addEventListener('DOMContentLoaded', () => {
    var flag = localStorage.getItem('flag');
    if (flag !== null && flag === '0') { // Use strict equality and compare with '0'
        var btn1 = document.getElementById('btun');
        btn1.value = "logout";
        btn1.addEventListener('click', () => {
            localStorage.setItem('flag', '1'); // Set flag to '1'
            window.location.href = 'index.html'; // Correct redirection method
        });
    } else {
        var btn1 = document.getElementById('btun');
        btn1.addEventListener('click', () => {
            window.location.href = 'login.html'; // Redirect to login page
        });
    }
});

