var img1 = ["https://images-na.ssl-images-amazon.com/images/I/91zbi9M+mKL.jpg",
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Peter_Griffin.png/220px-Peter_Griffin.png",
        "https://upload.wikimedia.org/wikipedia/en/a/a5/Lois_Griffin.png",
        "https://upload.wikimedia.org/wikipedia/en/c/c7/Meg_Griffin.png",
        "https://i.pinimg.com/originals/db/f5/08/dbf508e27715f8ed3730bec349092789.jpg",
        "https://static.wikia.nocookie.net/villains/images/7/7f/Bertram_Griffin.png/revision/latest?cb=20181227114443"];

var text1 = ["Family","Manish Gandotra","Monika Gupta","Manyata Gandotra","Rama Gandotra","Mhotsav Gandotra"];
var i = 0;
function change() {
    document.getElementById("img").src = img1[i];
    document.getElementById("name").innerHTML = text1[i];
    i++;
    if (i == 6) {
        i = 0;
    }
}
