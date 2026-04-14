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

        const pubList = document.getElementById('personnel-list')

        userData.forEach(element => {
            const listItem = document.createElement('li');
            const friendName = element.FriendlyName;
            const webCaption = element.WebCaption;
            const email = element.Email;           
            const nameID = element.NameID;



            //const pubYear = pubDate.getFullYear();
            //const doiUrl = element.data.url;
            //const doiText = element.data.DOI;
            const baseUrl = "https://gce-lter.marsci.uga.edu/public/app/personnel_bios.asp";
            //const a = document.createElement('a');
            //a.href = "https://gce-lter.marsci.uga.edu/public/app/personnel_bios.asp";
            //a.textContent = friendName;
            //a.target = "_blank";
            //a.setAttribute('href',doiUrl);
            //a.innerHTML = doiText;
            //const authors = element.meta.creatorSummary;
            //const title = element.data.title;
            //const pubTitle = element.data.publicationTitle;

            listItem.innerHTML += '<a href="'  + baseUrl + '?id=' + nameID + '"> ' + friendName + '</a> ' + webCaption + 'email: ' + email + '. ' 

            //listItem.textContent = `${element.meta.creatorSummary}. `
            //                + pubYear + `. `
            //               + `${element.data.title}. `
            //               + `${element.data.publicationTitle}. `
            //                + `(DOI: `;
            //listItem.appendChild(a);
            //listItem.appendChild(")");
            
            pubList.appendChild(listItem);

            
            


            
            //console.log(element.data.title)
            //console.log(element.data.publicationTitle)
        });

    } catch (error) {
        console.error('error fetching json:', error);
        document.getElementById('personnel-list').innerHTML = '<li>Error loading data</li>';
    }
}

fetchAndDisplayPersonnelData();
