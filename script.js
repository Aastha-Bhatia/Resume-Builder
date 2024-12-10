function addNewEducationField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('edField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder","Enter Here");

    let weOb=document.getElementById("ed");
    let weAddButtonOb=document.getElementById("edAddButton");
    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewExperienceField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('exField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder","Enter Here");

    let weOb=document.getElementById("ex");
    let weAddButtonOb=document.getElementById("exAddButton");
    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewProjectsField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('pjField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder","Enter Here");

    let weOb=document.getElementById("pj");
    let weAddButtonOb=document.getElementById("pjAddButton");
    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAchievementsField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('achievementsField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder","Enter Here");

    let weOb=document.getElementById("ac");
    let weAddButtonOb=document.getElementById("acAddButton");
    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewSkillsField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder","Enter Here");

    let weOb=document.getElementById("sk");
    let weAddButtonOb=document.getElementById("skAddButton");
    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewCertificatesField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('certificatesField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder","Enter Here");

    let weOb=document.getElementById("ce");
    let weAddButtonOb=document.getElementById("ceAddButton");
    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewHobbiesField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('hobbiesField');
    newNode.setAttribute("rows",'1');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder","Enter Here");

    let weOb=document.getElementById("hobbiesContainer");
    let weAddButtonOb=document.getElementById("hobbiesAddButton");
    weOb.insertBefore(newNode,weAddButtonOb);
}

// second part of the code....
// we will take the values from our form field and set them to the template field

function generateresume(){
    document.body.style.backgroundColor = 'rgb(173, 216, 230)';
    // if name, email or phone no. is empty, alerrt
    // name
    let nameField=document.getElementById('nameField').value;
    if(!nameField.trim()) {
        alert("Name is required.");
        return;
    }
    let nameT=document.getElementById('nameT');
    nameT.innerHTML=nameField;
    let nameT2=document.getElementById('nameT2');
    nameT2.innerHTML=nameField;

    // contact
    let contactField=document.getElementById('contactField').value;
    if(!contactField.trim()) {
        alert("Contact is required.");
        return;
    }
    let contactT=document.getElementById('contactT');
    contactT.innerHTML=contactField;

    // email
    let emailField=document.getElementById('emailField').value;
    if(!emailField.trim()) {
        alert("Email Id is required.");
        return;
    }
    let emailT=document.getElementById('emailT');
    emailT.innerHTML=emailField;

    // address
    let addressField=document.getElementById('addressField').value;
    let addressT=document.getElementById('addressT');
    addressT.innerHTML=addressField;

    // links 
    // linkedin
    let linkedinField=document.getElementById('linkedinField').value;
    let linkedinT=document.getElementById('linkedinT');
    linkedinT.innerHTML=linkedinField;
    // github
    let githubField=document.getElementById('githubField').value;
    let githubT=document.getElementById('githubT');
    githubT.innerHTML=githubField;
    // other
    let otherField=document.getElementById('otherField').value;
    let otherT=document.getElementById('otherT');
    otherT.innerHTML=otherField;

    // hobbies
    let hobbies=document.getElementsByClassName('hobbiesField');
    let hobbiesList=''; 
    // Loop through all hobby fields and add non-empty values to the list
    for (let hobby of hobbies) {
        if (hobby.value.trim()!==""){
            hobbiesList+=`<li>${hobby.value}</li>`; // Add hobby as a list item
        }
    }
    // Update the HTML of the hobbies list section
    document.getElementById('hobbiesT').innerHTML = hobbiesList;

    // summary
    let summaryField=document.getElementById('summaryField').value;
    let summaryT=document.getElementById('summaryT');
    summaryT.innerHTML=summaryField;

    // for education, there are multiple fields so we need to loop over them
    let edu=document.getElementsByClassName('edField');
    let str='';
    for(let e of edu){
        if(e.value.trim()!=""){
        str=str+`<li> ${e.value} </li>`;
        }
    }
    document.getElementById('educationT').innerHTML=str;

    // for skills, there are multiple fields so we need to loop over them
    let sk=document.getElementsByClassName('skField');
    let str1='';
    for(let e of sk){
        if(e.value.trim()!=""){
        str1=str1+`<li> ${e.value} </li>`;
        }
    }
    document.getElementById('skillsT').innerHTML=str1;

    // for experience, there are multiple fields so we need to loop over them
    let ex=document.getElementsByClassName('exField');
    let str2='';
    for(let e of ex){
        if(e.value.trim()!=""){
        str2=str2+`<li> ${e.value} </li>`;
        }
    }
    document.getElementById('experienceT').innerHTML=str2;

    // for projects, there are multiple fields so we need to loop over them
    let pj=document.getElementsByClassName('pjField');
    let str3='';
    for(let e of pj){
        if(e.value.trim()!=""){
        str3=str3+`<li> ${e.value} </li>`;
        }
    }
    document.getElementById('projectsT').innerHTML=str3;

    // for achievements, there are multiple fields so we need to loop over them
    let ac=document.getElementsByClassName('achievementsField');
    let str4='';
    for(let e of ac){
        if(e.value.trim()!=""){
        str4=str4+`<li> ${e.value} </li>`;
        }
    }
    document.getElementById('achievementsT').innerHTML=str4;

    // for certificates, there are multiple fields so we need to loop over them
    let ce=document.getElementsByClassName('certificatesField');
    let str5='';
    for(let e of ce){
        if(e.value.trim()!=""){
        str5=str5+`<li> ${e.value} </li>`;
        }
    }
    document.getElementById('certificatesT').innerHTML=str5;

    // code for setting picture
    let file=document.getElementById('imageField').files[0];
    if (!file) {
        alert("Please upload an image.");
        return;
    }
    // reader
    let reader=new FileReader();
    reader.readAsDataURL(file);

    // setting image into our template
    reader.onloadend=function(){
        document.getElementById('myimg').src=reader.result;
    }
    // if everything is filled,
    document.body.style.backgroundColor = 'rgb(255, 255, 255)';
    document.getElementById('resume-form').style.display = 'none';
    document.getElementById('resume-template').style.display = 'block';
}
function printresume(){
    // to generate pdf
    if (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
        // Show a warning for mobile users
        alert("Printing is only supported in desktop browsers. Please switch to a desktop for better functionality.");
        return;
    }
    let printButton = document.getElementById('printResumeButton');
    printButton.style.display = 'none';
    window.print();
}
