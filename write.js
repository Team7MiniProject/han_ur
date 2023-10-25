const writeFrm = document.querySelector("#writeFrm");

class Board {
  constructor(indexNum,   writerStr, contentStr) {
    this.index = indexNum;
 
    this.Writer = writerStr;
    this.Content = contentStr;
 
 
  }

  
  set Writer(value) {
    if (value.length === 0) throw new Error("작성자를 입력해주세요.");
    this.writer = value;
  }

  set Content(value) {
    if (value.length === 0) throw new Error("내용을 입력해주세요.");
    this.content = value;
  }
}

 

const submitHandler = (e) => {
  e.preventDefault();
 
  const writer = e.target.writer.value;
  const content = e.target.content.value;

  try {
    // boards 가져오기
    const boardsObj = JSON.parse(localStorage.getItem("boards"));

    // 객체 추가
    const index = boardsObj.length;
    const instance = new Board(index,   writer, content);
    boardsObj.push(instance);

    // boards 저장
    const boardsStr = JSON.stringify(boardsObj);
    localStorage.setItem("boards", boardsStr);
    location.href = "./list.html";
  } catch (e) {
    // 예외 발생시 메시지 출력
    alert(e.message);
    console.error(e);
  }
};

writeFrm.addEventListener("submit", submitHandler);