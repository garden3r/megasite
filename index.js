function greeting() {
  usr = window.prompt("Enter usrname");
  window.alert(`Hello ${usr}`);

}
greeting()
   document.addEventListener('DOMContentLoaded', (event) => {
        const savedName = localStorage.getItem('userName');
        if(savedName){
            document.getElementById('nameForm').style.display = 'none';
            document.getElementById('loginForm').style.display = 'block';
        }
    });
    document.getElementById('nameForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;
        if (!name || !password) {
            window.alert("enter a password and a user please");
            return;
        }
        localStorage.setItem('userName', name);
        localStorage.setItem('password', password);
        location.reload();
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const password = document.getElementById('loginPassword').value;
        const savedPassword = localStorage.getItem('password');
        if (password !== savedPassword) {
            window.alert("password does not exist");
            return;
        }
        document.getElementById('loginForm').style.display = 'none';
        const savedName = localStorage.getItem('userName');
        document.getElementById('welcomeMessage').textContent = 'Hello, ' + savedName; 
        document.getElementById('userName').innerText = savedName;
    });
