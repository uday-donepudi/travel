let globalParam; // Global variable to store the parameter value

function fun(p) {
    globalParam = p; // Assign the parameter value to the global variable
     // Output the parameter value
    localStorage.setItem('globalParam', globalParam);
    window.location.href="sample.html";
}

