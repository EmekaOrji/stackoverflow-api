// const apiUrl = 'https://api.stackexchange.com/2.3/users?page=25&pagesize=100&order=desc&sort=reputation&site=stackoverflow';
const apiUrl = './stack.json';
fetch(apiUrl)
	.then((data) => data.json())
	.then((answer) => generateHTML(answer));


function generateHTML(data) {

  const tableHead = () => {
    return `
      <tr>
        <th></th>
        <th>Name</th>
        <th>Image</th>
        <th>Reputation</th>
        <th>Approval</th>
        <th>Profile Link</th>
      </tr>
    `;
  }
	const content = (ID) => {
    return `
      <td>${ID + 1}</td>
      <td>${data.items[ID].display_name}</td>
      <td><img src="${data.items[ID].profile_image}"></td>
      <td>${data.items[ID].reputation}</td>
      <td>${data.items[ID].user_type}</td>
      <td><a href="${data.items[ID].link}" id='profile'>Profile</a></td>
    `;
  }

  const html = `
    <table id='stackUsers'>
      ${tableHead()}
    </table>
  `;
  var head = document.getElementById("app");
  head.innerHTML = html;

  data.items.forEach((e, i) => {
    var userID = i;
    var row = document.createElement('tr');
    row.innerHTML = content(userID);
    document.getElementById("stackUsers").append(row);
  });

}
