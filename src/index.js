// import "styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liタグの生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-low";

  // pタグの生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // divタグの子要素
  div.appendChild(p);

  // liタグの子要素に各要素を設定
  li.appendChild(div);
  console.log(li)
  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li)
}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
