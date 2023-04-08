/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
        screens: {
          "mn": "1140px",
          "lg": "1024px",
          "smo": "425px",
          "xs": "480px",
          "custom": "1140px",
          "truncate": "860px",
          "truncate2": "530px",
        },
        width:{
          'content':'1140px',
          "set": "calc(100% - 300px)",
          "show": "1140px",
          "item": "1080px",
          "header": "140px",
          "text": "100px",
          "arrow": "80px",
        },
        height:{
          "transaction": "668px",
          "head": "64px",
          "main": "460px",
          "item": "120px",
        },
        backgroundColor:{
          'main':'background: rgba(255, 255, 255, 0.25)'
        },
        borderColor:{
          'main': 'rgba(241, 241, 241, 0.5)'
        },

        borderWidth:{
          "1": "1px",
        },
        
        padding: {
          "content": "11px 18px",
        },
        lineHeight: {
          "pending": "61px",
        },
        fontSize: {
          "pending": "64px",
          "sxs": "10px",
        },
        margin: {
          "pending": "31px",
          "pendend": "60px",
        },
    },
  },
  plugins: [],
}