// This function is designed to unlock paywalled Economist articles. It does this by extracting
// the article's text that is initially hidden in the JSON object, and not rendered to users unless they are logged in.
// The extracted text is then injected into a paragraph that is displayed to all users.
const unlock = () => {
    console.log('Unlocking...')

    // Get the JSON string from a script tag with the id '__NEXT_DATA__'
    // This script tag is usually used in Next.js applications to store initial page data.
    const JsonString = document.querySelector('#__NEXT_DATA__').textContent;

    console.log('All text in #__NEXT_DATA__:\n\n' + JsonString)

    // Parse the JSON string to a JavaScript object for easier maniupulation.
    const data = JSON.parse(JsonString);

    // Safely navigate through the 'data' object to find 'bodyText'
    // 'bodyText' contains the full article text, which isn't rendered unless the user is logged in with a premium account.
    const text = data.props?.pageProps?.content?.bodyText;

    console.log('Only text in bodyText of #__NEXT_DATA__:\n\n' + text)

    // Select the paragraph that is visible to all users, irrespective of their login status.
    const paragraph = document.querySelector("p.article__body-text.article__body-text--dropcap");

    // Inject the hidden article text into the visible paragraph content.
    if (text && paragraph) {
        paragraph.innerHTML = text.replace(/\n/g, '<br><br>');
    } else {
        console.log('Unlock failed.')
    }
}

// Wait 1000ms to ensure the page content is fully loaded before unlocking the page
setTimeout(unlock, 1000)
