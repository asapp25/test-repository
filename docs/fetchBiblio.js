//function to fetch personnel json file and display
async function fetchAndDisplayBiblioData(){
    const url = './Biblio.json';

    try {
        //fetch the data for the biblio json file
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('HTTP error! status: ${response.status}');

        }
        // parse the response
        const userData = await response.json();

        const pubList = document.getElementById('pub-list')

        userData.array.forEach(element => {
            const listItem = document.createElement('li');
            listItem.textContent = 'Title: ${element.name}, Publication Title: ${element.publicationTitle}';
            pubList.appendChild(listItem);
            
        });

    } catch (error) {
        console.error('error fetching json:', error);
        document.getElementById('pub-list').innerHTML = '<li>Error loading data</li>';
    }
}

fetchAndDisplayBiblioData();
