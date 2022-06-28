function addLike(id) {
    var element = document.querySelector(id);
    let likeCount = Number(element.innerText);
    likeCount++;
    element.innerText = likeCount;
}