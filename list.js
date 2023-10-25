let boardsStr = localStorage.getItem("boards");

if (boardsStr === null) {
  const listStr = JSON.stringify([]);
  localStorage.setItem("boards", listStr);
  boardsStr = listStr;
}

const boardsObj = JSON.parse(boardsStr);

const template = (index, objValue) => {
  return `
  <tr>
  <td>${index + 1}</td>
  <td>${objValue.writer}</td>
  <td>${objValue.content}</td>
  </tr>
  `;
};

const tbody = document.querySelector("tbody");

for (let i = 0; i < boardsObj.length; i++) {
  tbody.innerHTML += template(i, boardsObj[i]);
}