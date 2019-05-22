const login = document.getElementById('login');

      login.addEventListener('click', function() {
        let mail = document.getElementById('mail').value;
        let password = document.getElementById('password').value;

        if (mail == 'aze' && password == 'aze') {
          document.location.href = "/AirNESt";
        } else {
          alert('mot de passe faux');
        }
      })