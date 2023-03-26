# GitHub user search app

This is a solution to the [GitHub Jobs API challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-jobs-api-93L-NL6rP). In this project, I have used the GitHub users API to pull profile data and display it.

You can view the app <a href="https://github-user-search-ht1pfp574-sazzledazzle.vercel.app/" target="_blank">here</a>.

## Tools

- Semantic HTML5 markup
- Tailwind CSS
- CSS Flexbox and Grid
- `prefers-color-scheme`
- JavaScript
- Fetch API
- Figma
- Vercel - hosting

## What I learnt

I learnt how integrate Tailwind CSS into a simple app without using a framework. I learnt about Tailwind's dark mode feature and how to use the CSS `prefers-color-scheme` feature which detects if a user has indicated a preference through an operating system setting or a user agent setting. This challenge was also a good opportunity to practice with CSS Grid. I also learnt how to implement Fetch API using vanilla JavaScript, how to display an error message and how to show a different UI depending on whether a GitHub user has completed certain sections of their profile or not.

## The challenge

The challenge was to build out this GitHub user search app using the [GitHub users API](https://docs.github.com/en/rest/reference/users#get-a-user) and to get it looking as close to the design (below) as possible. A figma file was also provided by Frontend Mentor.

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences.

### Expected behaviour

- On first load, show the profile information for Octocat.
- Display an error message (as shown in the design) if no user is found when a new search is made.
- If a GitHub user hasn't added their name, show their username where the name would be without the `@` symbol and again below with the `@` symbol.
- If a GitHub user's bio is empty, show the text "This profile has no bio" with transparency added (as shown in the design). The lorem ipsum text in the designs shows how the bio should look when it is present.
- If any of the location, website, twitter, or company properties are empty, show the text "Not Available" with transparency added (as shown in the design).
- Website, twitter, and company information should all be links to those resaources. For the company link, it should remove the `@` symbol and link to the company page on GitHub. For Octocat, with `@github` being returned for the company, this would lead to a URL of `https://github.com/github`.

![Design preview for the GitHub user search app coding challenge](./preview.jpg)

