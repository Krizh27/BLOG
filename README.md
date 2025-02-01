# Blog Post App

A simple blog post web application built using **Node.js, Express, and EJS**. Users can create, view, edit, and delete blog posts.

## Features
- 📝 Create new blog posts
- 📖 View all posts with a "Read More" option
- ✏️ Edit existing posts
- 🗑️ Delete posts
- 🎨 Styled with Bootstrap & custom CSS

## Technologies Used
- **Backend:** Node.js, Express.js
- **Templating Engine:** EJS
- **Frontend:** HTML, CSS, Bootstrap
- **Storage:** In-memory array (for demo purposes)

## Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/blog-post-app.git
cd blog-post-app
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the Server
```bash
node index.js
```
The app will run on **http://localhost:3000**

## Folder Structure
```
blog-post-app/
│-- public/
│   ├── styles/
│   │   ├── main.css
│-- views/
│   ├── partials/
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   ├── home.ejs
│   ├── create.ejs
│   ├── post.ejs
│-- index.js
│-- package.json
```

## Routes
| Method | Route          | Description |
|--------|--------------|-------------|
| GET    | `/`          | Show all posts |
| GET    | `/create`    | Show post creation form |
| POST   | `/create`    | Add new post |
| GET    | `/posts/:id` | View a single post |
| GET    | `/edit/:id`  | Show edit form |
| POST   | `/edit/:id`  | Update post |
| POST   | `/delete/:id` | Delete post |

## Deployment
You can deploy this app on:
- [Render](https://render.com/)
- [Railway](https://railway.app/)
- [Cyclic.sh](https://www.cyclic.sh/)

## Contributing
Feel free to fork this repository and submit pull requests. Any contributions are welcome! 🚀

## License
This project is licensed under the MIT License.

