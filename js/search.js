// Log key press in search field #photoSearch
$("#photoSearch").keyup(function() {
    // Store the searched value
    var searchText = $(this).val();
    // Loop over each div in #gallery
    $("#gallery div").each(function() {
        // Target alt text and title text
        var altText = $(this).find("img").attr("alt");
        var titleText = $(this).find("img").attr("title");
        // If search value matches alt and title, show image(s)
        if(altText.toUpperCase().search(searchText.toUpperCase()) > -1 || titleText.toUpperCase().search(searchText.toUpperCase()) > -1) {
            // Show matches
            $(this).show();
            // Hide image(s) if no match
        } else {
            $(this).fadeOut(250);
        }
    });
});