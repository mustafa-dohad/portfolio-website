var sideMenu = document.getElementById("sidemenu");

function openMenu()
{
    sideMenu.style.right = "0";
}
function closeMenu()
{
    sideMenu.style.right = "-12.5rem";
}
const options = {
    bottom: '40px', // default: '32px'
    right: '20px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.4s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }

  const darkmode = new Darkmode(options);
darkmode.showWidget();