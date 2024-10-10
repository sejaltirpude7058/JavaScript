const insert = document.getElementById('insert');

window.addEventListener('keydown', function(e){
 let keyTable = insert.innerHTML = `
  <div class = "color"  >
  <table border: 1px solid white;>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `;
  
});