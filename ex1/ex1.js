//build change theme when click
document.querySelector('#inputTheme').addEventListener('click' , () => {
    document.querySelector('body').classList = [inputTheme.checked ? 'theme-light' : 'theme-dark']
});

