# TOV : Trusted Online Voting

> '🧑🏽‍🎓 IT Graduation Project 2022'

## Tasks List

- [X] index 
- [X] about
- [X] team
- [X] faq
- [X] sign up
- [X] login
- [X] privacy and policy
- [X] 404
- [X] contact

Static front end (marketing and auth pages) for **TOV**, an online voting platform built as an IT graduation project.

**Live demo:** https://tov-fe.vercel.app

## Run locally

Plain HTML/CSS/JS with no build step. Serve the repository root and open `index.html`:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
*.html          pages (index, about, team, FAQ, contact, sign-in, sign-up, privacy-policy, 403, 404)
css/style.css   site styles
js/script.js    preloader, AOS scroll animations, Slick sliders, scroll-to-top
plugins/        vendored Bootstrap 4, jQuery, Slick, AOS, Themify icons
images/
```

Animations, slider autoplay and smooth scroll-to-top are switched off when the OS *reduce motion* setting is on.

## License

[MIT](LICENSE)
