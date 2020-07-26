const list = document.getElementById("update-list");
//list.appendChild();
fetch("http://127.0.0.1:5500/assets/updates/update.txt")
  .then(res => res.text())
  .then(res => {
    const list = document.getElementById("update-list");
    const responseList = res.split("\n");
    responseList.map(function(item, index) {
      let listItem = document.createElement("li");
      listItem.innerHTML = item;
      listItem.className=listItem.className+" list-group-item";
      listItem.className=listItem.className+" update-body-item";
      list.appendChild(listItem);
    });
  });
