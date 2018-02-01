
/*var clearBtn = document.querySelector("#clearBtn");
    clearBtn.addEventListener('click', clearBookmarks, false);*/




var bookmarks;

function initialize(){
    fetchBookmarks ();//this will populate the glabal bookmarks[] array on load.
    renderBookmarks();//immediately after, render the UI.
    wireupListeners();
}

function saveBookmark(){
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}


function deleteBookmark(id){
    for(var i = 0; i <= bookmarks.length-1; i++){
        if(bookmarks[i].id == id) {
            bookmarks.splice(i, 1);
            break;
        }
    }

    saveBookmark();
    initialize();
}


function clickHandler(e){
    //console.log(e.target);
    var button = e.target;
    if(button.classList.contains("delete-button")){
        var id = button.getAttribute("id");
        deleteBookmark(id);
    }
}




function wireupListeners(){
    var bookmarkResults = document.querySelector('#bookmarksResults');
    bookmarkResults.addEventListener("click", clickHandler, false)
}



// Fetch Bookmarks
function fetchBookmarks(){
    bookmarks = JSON.parse(localStorage.getItem('bookmarks'))||[];
}


function renderBookmarks(){
    var bookmarkResults = document.querySelector('#bookmarksResults');

    bookmarkResults.innerHTML = '';
    for(var i = 0; i < bookmarks.length; i++){
        var bookmark = bookmarks[i];
        bookmarkResults.innerHTML += '<div class="well">'+
                                        '<h3><a href="' + bookmark.url + '">' + bookmark.name + '</a><span class="btn-primary delete-button" id="' + bookmark.id + '">X</span</h3>'+
                                     '</div>';         
    }

}

