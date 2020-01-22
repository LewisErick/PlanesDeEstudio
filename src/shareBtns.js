function shareTwitter() {

}

function shareFacebook() {

}

function addShareListeners() {
    $("#share-twitter").on("click", function(e) {
        e.preventDefault();
        shareTwitter();
    });

    $("#share-facebook").on("click", function(e) {
        e.preventDefault();
        shareFacebook();
    });
}

addShareListeners();