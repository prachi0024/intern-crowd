const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

const url = "db_users.json";
const user_id = params.user_id;

// Fetch the JSON data and parse it into a JavaScript object
function getData(id){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // Get the element with id 1 from the "users" array
        const user = data.find(user => user.user_id === id);

        // Print the user's name to the console
        document.getElementById('user_name').innerHTML = user.name;
        document.getElementById('course').innerHTML = user.course;
        document.getElementById('enrolled_date').innerHTML = user.course;
        document.getElementById('certificate_issued_date').innerHTML = user.course;
    });
}
getData(user_id);