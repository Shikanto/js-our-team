const membersTeam = [

    {name: "Wayne Barnett", role: "Founder & CEO", image: "wayne-barnett-founder-ceo.jpg"},
    {name: "Angela Caroll", role: "Chief Editor", image: "angela-caroll-chief-editor.jpg"},
    {name: "Walter Gordon", role: "Office Manager", image: "walter-gordon-office-manager.jpg"},
    {name: "Angela Lopez", role: "Social Media Manager", image: "angela-lopez-social-media-manager.jpg"},
    {name: "Scott Estrada", role: "Developer", image: "scott-estrada-developer.jpg"},
    {name: "Barbara Ramos", role: "Graphic Designer", image: "barbara-ramos-graphic-designer.jpg"}
]

const teamContainer = document.querySelector(".team-container");

function addCardMember(memberName, memberRole, memberImage) {
    teamContainer.innerHTML += `<div class="team-card">
                                        <div class="card-image">
                                            <img
                                                src="img/${memberImage}"
                                                alt="${memberName}"
                                            />
                                        </div>
                                        <div class="card-text">
                                            <h3>${memberName}</h3>
                                            <p>${memberRole}</p>
                                        </div>
                                    </div>`
}

function addNewMember() {
    
    const newName = document.getElementById("name").value;
    const newRole = document.getElementById("role").value;
    const newImage = document.getElementById("image").value;  
    const infoNewMember = {

    } ;

    infoNewMember.name = newName;
    infoNewMember.role = newRole;
    infoNewMember.image = newImage;
    console.log(infoNewMember);
    
    membersTeam.push(infoNewMember);
    
    addCardMember(newName, newRole, newImage);
    
}




for (let i= 0; i < membersTeam.length; i++){

    const singleMember = membersTeam[i];
    /* console.log(singleMember) */

    let memberName = singleMember.name;
    /* console.log(memberName); */

    let memberRole = singleMember.role;
    /* console.log(memberRole); */

    let memberImage = singleMember.image;
    /* console.log(memberImage); */

    addCardMember(memberName, memberRole, memberImage);

}

const btnAdd =  document.getElementById("addMemberButton");

btnAdd.addEventListener("click", addNewMember);




/* cardNewMember = addCardMember(); */

