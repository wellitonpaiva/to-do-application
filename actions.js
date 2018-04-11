'use strict';

function changeTab(evt, tab) { // eslint-disable-line no-unused-vars
  var i, tabcontent, tablinks, tabForms;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  tabForms = document.getElementsByClassName('belowTab');
  for (i = 0; i < tabForms.length; i++) {
    tabForms[i].className = tabForms[i].className.replace(' active', '');
    tabForms[i].style.display = 'none';
  }
  document.getElementById(tab).style.display = 'block';
  document.getElementById(tab + '-form').className += ' active';
  document.getElementById(tab + '-form').style.display = 'block';
  evt.currentTarget.className += ' active';
}
// Get the element with id='defaultOpen' and click on it
document.getElementById('add').click();
