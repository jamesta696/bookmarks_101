var form = document.querySelector('#myForm');
    form = document.addEventListener('submit', saveBookmark, false);
var siteName = document.querySelector('#siteName');
var siteUrl  = document.querySelector('#siteUrl');

/*var clearBtn = document.querySelector("#clearBtn");
    clearBtn.addEventListener('click', clearBookmarks, false);*/

var bookmarks;





function initialize(){
    fetchBookmarks ();//this will populate the glabal bookmarks[] array on load.
    renderBookmarks();//immediately after, render the UI.
}

function generateID(){
    return Math.uuid()
}

function saveBookmark(e){
    var bookmark = {
        name : siteName.value,
        url  : siteUrl.value,
        id: generateID()
    };

    bookmarks.push(bookmark);//add to global array
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); //now override storage with whatever is in global array.

    renderBookmarks(); //render UI right after saving.
    e.preventDefault();//prevents form from submitting to backend.
}
 
// clear Bookmarks
/*function clearBookmarks(){
    siteName.value = "";    //reset form
    siteUrl.value = "";     //reset form
    localStorage.setItem('bookmarks',null); //reset to null
    bookmarks = []; //reset to empty []
    renderBookmarks(); // render UI, should show nothing.
}
*/

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
                                        '<h3><a href="' + bookmark.url + '" id="' + bookmark.id + '">' + bookmark.name + '</a></h3>'+
                                     '</div>';         
    }
}

