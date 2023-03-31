## Table of contents

  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://github.com/gitname/react-gh-pages)
- Live Site URL: [Add live site URL here](https://muminaa.github.io/fylo-landing-page-react/)

### Built with

- TailwindCSS
- [React](https://reactjs.org/) - JS library
- [React Icons](https://muminaa.github.io/fylo-landing-page-react/) - For icons

### What I learned

How to use react better and the use of components and useState

To see how you can add code snippets, see below:

```JS
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
      setEmail(e.target.value);
    };

    const handleClick = () => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!regex.test(email)) {
        setError("Please enter a valid email address");
      } else {
        setError("");
        // console.log("vaild email")
      }
  }
```

### Continued development

I want to continue focusing on the use of components and useState

## Author

- Website - [Mumina Abdi](http://muminaabdi.com/)
- Frontend Mentor - [@MuminaA](https://www.frontendmentor.io/profile/MuminaA)
