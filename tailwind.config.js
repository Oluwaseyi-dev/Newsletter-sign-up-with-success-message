/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./style.css", "./index.html", "./app.js", "./dist/output.css"],
  theme: {
    extend: {
      colors: {
        'darkSlateGrey': 'hsl(234, 29%, 20%)',
        'Charcoal Grey': 'hsl(235, 18%, 26%)',
        'Grey': 'hsl(231, 7%, 60%)',
        'Tomato': 'hsl(4, 100%, 67%)',
        'TomatoErr': 'hsla(4, 100%, 67%, 0.2)',
        'TomatoActive': 'hsl(346, 100%, 66%)'
      },
      fontSize: {
        '4.5xl': '2.5rem'
      },
      content: {
        'desktop': 'https://github.com/Oluwaseyi-dev/Newsletter-sign-up-with-success-message/blob/main/assets/images/illustration-sign-up-desktop.svg',
        'mobile': 'https://github.com/Oluwaseyi-dev/Newsletter-sign-up-with-success-message/blob/main/assets/images/illustration-sign-up-mobile.svg',
        'list': 'https://github.com/Oluwaseyi-dev/Newsletter-sign-up-with-success-message/blob/main/assets/images/icon-list.svg',
        'success': 'https://github.com/Oluwaseyi-dev/Newsletter-sign-up-with-success-message/blob/main/assets/images/icon-success.svg'
      },
      boxShadow: {
        '3xl': '0 25px 50px -12px hsla(4, 100%, 67%, 0.7)'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    },
    fontFamily: {
      'body': ['Roboto', 'ui-sans-serif']
    },
  },
  plugins: [],
}

// npx tailwindcss -i ./style.css -o ./dist/output.css --watch
