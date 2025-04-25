

function showSection(params) {

  document.querySelectorAll('.main-content > div').forEach(element => {
    element.classList.add('hidden')

  });
  
  
  document.getElementById(params + 'Section').classList.remove("hidden");
}






