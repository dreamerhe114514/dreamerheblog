var icat = {
    submitInfo: function() {
        var submitBox = document.querySelector('.submit-box');
        var followElement = document.querySelector('#follow');

        if (submitBox) {
            submitBox.classList.toggle('display');
        }

        if (followElement) {
            followElement.classList.toggle('display');
        }
    }
 }