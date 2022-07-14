// let repliedTo = referToComment(a){a = getElementsByClassName("user-name").value}
// let commentNumber = document.querySelector("comment-number")



// function replyFunction(){

//     let userComment = document.getElementsByClassName("text-field")
//     let userCommentNumber = 2

//     const newComment = document.createElement("div");
//     newComment.appendChild(userComment);
//     const currentComment = document.getElementsByClassName('comment-container');
//     document.body.insert

//     for (let i = 2, i++)

// }



// ---------------------------------------------------------------------

const commentContainer = document.getElementsByClassName("comment")

document.getElementsByClassName('reply-button').addEventListener('click', function (comm) {
    addComment(comm);});

    function addComment(comm) {

        const textBox = document.createElement('div');
        const replyButton = document.createElement('button');
        replyButton.className = 'reply-button';
        replyButton.innerHTML = 'Reply';

        commentText = document.getElementsByClassName("text-field").value;
    document.getElementsByClassName("text-field").value = '';
    textBox.innerHTML = commentText;
    commentContainer.append(textBox, replyButton);
    commentContainer.appendChild(commentText);
    }






// --------------------------------------------------------------





// function setOnLocalStorage() {
//     localStorage.setItem('template', document.getElementById('Comments').innerHTML);
// }