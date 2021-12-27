const profileForm = document.querySelector('.profileForm');



//listening event
profileForm.addEventListener('submit', function(event){
    event.preventDefault();
    const profileData = {
        Name: document.querySelector('#Name').value ,
        Email: document.querySelector('#email').value ,
        PhoneNumber: document.querySelector('#number').value
    };
    const jsonArray = [];
    jsonArray.push(profileData);
    const jsonAraayConvert = JSON.stringify (jsonArray);
    if (localStorage.getItem.profiles == null){
        
        localStorage.setItem ('profiles',  jsonAraayConvert );
    }
    else{
        jsonArray.push(profileData);
    }
    
    // const jsonAraayConvert = JSON.stringify (jsonArray);
    // localStorage.setItem ('profiles',  jsonAraayConvert );
    

    // const profiledisplay = document.querySelector('.table')
    // const text = `
    //     <tr>
    //     <th scope="row">1</th>
    //     <td>${cnvttoobj.Name}</td>
    //     <td>${cnvttoobj.Email}</td>
    //     <td>${cnvttoobj.PhoneNumber}</td>
    //      </tr>`;

    //      profiledisplay.innerHTML += text ;

 });




// var Form = document.querySelector('.form');

// Form.addEventListener('submit', function(event){
//     event.preventDefault();
//     let Number1 = document.getElementById('number1').value;
//     let Number2 = document.getElementById('number2').value;
//     let Total = parseInt (Number1) + parseInt(Number2)  ;
//     let result = document.querySelector('.result');
//     result.innerHTML =`the sumation of the ${Number1} and  ${Number2} is : ${Total}`;

//     console.log(Total);
// })