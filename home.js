


let info= ['fname','lname','email',   'profile','school','major'
,'degree',    'skill','project',    'jobTitle','company','city',
'state','dateHired', 'duty'];

for (let i = 0; i < 16; i++) {

document.getElementById(info[i]).addEventListener('blur', function(){
    let fname=document.getElementById(info[i]).value;
    
    if (typeof(Storage) !== "undedfine"){
        sessionStorage.setItem(info[i], fname);
       
    }
    else{
        alert("Sorry, your browser does not support Web Storage...");
    }
   
});
 }  