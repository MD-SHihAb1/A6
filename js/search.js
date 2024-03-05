const loadAllPost = async (query) =>{
    const url = ``
    console.log(url);
    const respone = await fetch(url);
    const data = await respone.json();

    console.log(data);
};


const handleSearch = () => {
    const value = document.getElementById('search-box').value;
   loadAllPost =
    console.log(value);

};

loadAllPost('');