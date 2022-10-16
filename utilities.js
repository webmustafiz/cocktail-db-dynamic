

const processSearch = (datalimit) => {
    toggoleSpiner(true)
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    if (searchText === '') {
        swal.fire({
        title: 'Please Type A phone name',
        text: 'Please Search a valid Phone Name',
        icon: 'warning',
        confirmButtonText: 'Cool'
        })
        toggoleSpiner(false)
        return 
    
    }
loadMeals(searchText, datalimit)
}