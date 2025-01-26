// This function is designed to unlock paywalled The New European articles. It does this by extracting
// the article's text that is initially hidden and not rendered to users unless they are logged in.
// The extracted text is then injected into the element that is displayed to all users.
const unlock = () => {
    console.log('Unlocking...')

    // Get the hidden element
    const hiddenContent = document.querySelector('.pp-subs__post-end');

    // Get the shown element
    const shownContent = document.querySelector('.pp-subs__post-start');

    // Inject the content of the hidden element into the content of the shown element.
    // Add an empty paragraph to the end to prevent the gradient at the bottom of the element from obscuring the final paragraph of text. 
    if (hiddenContent && shownContent) {
        shownContent.innerHTML += hiddenContent.innerHTML;
        shownContent.appendChild(document.createElement('p'));
    } else {
        console.log('Unlock failed.')
    }
    
    // Rmove the element containing the subscription advert 
    const subscriptionAdvert = document.querySelector('#view-offer');
    if (subscriptionAdvert) {
      subscriptionAdvert.remove();
    }

}

// Wait 1000ms to ensure the page content is fully loaded before unlocking the page
setTimeout(unlock, 1000)