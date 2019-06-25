document.addEventListener('DOMContentLoaded', function () {
    // console.log("hello");
    let searchdata = '';
    let detailedDataTest = '';
    async function getResult() {
        document.querySelector('.first_section').innerHTML ='';
        let searchValue = document.querySelector('.search_text').value;
        if(searchValue === null || searchValue === undefined || searchValue ===''){
            searchValue = 'man';
        }
        const key = '71ecbb93';
        try{
            const res = await fetch(`http://www.omdbapi.com?s=${searchValue}&apikey=${key}`);
            const data = await res.json();
            for(let i=0; i<data.Search.length; i++){
                searchdata = `
                        <li class="list_style">
                        <a class="results__link" href="#${data.Search[i].imdbID}">
                            <figure class="results__fig">
                                <img src="${data.Search[i].Poster}" alt="${data.Search[i].Title}">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name">${data.Search[i].Title}</h4>
                                <p class="results__year">${data.Search[i].Year}</p>
                            </div>
                        </a>
                    </li>
            `;
            document.querySelector('.first_section').insertAdjacentHTML('beforeend',searchdata);
            }
            document.querySelector('.second_section').innerHTML = detailedDataTest;
            document.querySelector('.search_text').value='';
            console.log(data);
        } catch (error){
            alert(error);
        }
    }
    document.getElementById("btn_search").onclick = getResult; 
    const getDetailedData = async () =>{
                const id = window.location.hash.replace('#','');
                console.log(id);
                if(id){
                const deepData = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=71ecbb93`);
                const deepDataNew = await deepData.json();
                console.log(deepDataNew);
                }
                
            }
    window.addEventListener('hashchange',getDetailedData);
});






// 462b1cc8d4f2730081462fbc65136320
// http://food2fork.com/api/search