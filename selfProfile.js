function changeColorScheme(scheme){
colorChangedBox = document.getElementById('colorChangedBox');
colorChangedBox.classname = '';
colorChangedBox.classList.add(scheme);
}