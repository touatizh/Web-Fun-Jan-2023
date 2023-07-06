function increaseLikes(element) {
  var likes = document.querySelectorAll(".likes span");

  // loop over all the spans containing the number of likes
  likes.forEach((post) => {
    let btnParent = element.parentElement.parentElement;
    let postParent = post.parentElement.parentElement.parentElement;
    // Test if the button and span correspond to the same post, if true increment likes
    if (btnParent == postParent) {
      post.innerText = Number(post.innerText) + 1;
    }
  });
}
