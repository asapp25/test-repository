//function to fetch personnel json file and display
async function fetchAndDisplayPersonnelData(){
    const url = './Personnel.json';

    try {
        //fetch the data for the personnel json file
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);

        }
        // parse the response
        const userData = await response.json();

        const gradList = document.getElementById('grad-list')
        const piList = document.getElementById('pi-list')

        userData.forEach(element => {
            const listItem = document.createElement('li');
            const friendName = element.FriendlyName;
            const webCaption = element.WebCaption;
            const email = element.Email;           
            const nameID = element.NameID;
            const roleCode = element.RoleCode;



            
            const baseUrl = "https://gce-lter.marsci.uga.edu/public/app/personnel_bios.asp";
            

            listItem.innerHTML += '<a href="'  + baseUrl + '?id=' + nameID + '"> ' + friendName + '</a>, ' + webCaption + 'email: ' + email + '. ' 

            if(roleCode == "COPI"){
                piList.appendChild(listItem);
            } 
            
           if(roleCode == "GSP"){
                gradList.appendChild(listItem);
            }

            
            


            
            //console.log(element.data.title)
            //console.log(element.data.publicationTitle)
        });

    } catch (error) {
        console.error('error fetching json:', error);
        document.getElementById('personnel-list').innerHTML = '<li>Error loading data</li>';
    }
}

fetchAndDisplayPersonnelData();
