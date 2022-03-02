const loadCity = () => {
    const API_KEY = 'a2db471b06f5fdfa155ea97e9694e318';
    const searchField = document.getElementById('search-box');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=${API_KEY}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTempareture(data));
}
const setAttributeText = (id, value) => {
    document.getElementById(id).innerText = value;
}
const displayTempareture = tempareture => {
    // console.log(tempareture);
    // document.getElementById('city').innerText = tempareture.name;
    setAttributeText('city', tempareture.name);
    setAttributeText('temp', tempareture.main.temp);
    setAttributeText('condition', tempareture.weather[0].main);
    const url = `https://openweathermap.org/img/wn/${tempareture.weather[0].icon}@2x.png`;
    // console.log(url);
    document.getElementById('icon').setAttribute('src', url);
}   