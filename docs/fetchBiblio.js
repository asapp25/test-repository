//function to fetch personnel json file and display
async function fetchAndDisplayBiblioData(){
    const url = './Biblio.json';

    try {
        //fetch the data for the biblio json file
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);

        }
        // parse the response
        const userData = await response.json();

        const pubList = document.getElementById('pub-list')

        userData.forEach(element => {
            const listItem = document.createElement('li');
            const pubDate = new Date(element.meta.parsedDate)
            const pubYear = pubDate.getFullYear();

            listItem.textContent = `${element.meta.creatorSummary}. `
                            + pubYear + `. `
                            + `${element.data.title}. `
                            + `${element.data.publicationTitle}. `
                            + `(DOI: ${element.data.DOI})` ;
            pubList.appendChild(listItem);
            
            //console.log(element.data.title)
            //console.log(element.data.publicationTitle)
        });

    } catch (error) {
        console.error('error fetching json:', error);
        document.getElementById('pub-list').innerHTML = '<li>Error loading data</li>';
    }
}

fetchAndDisplayBiblioData();
