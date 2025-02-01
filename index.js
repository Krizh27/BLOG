import express from "express";
const app = express();
const port = 3000;
app.set("view engine", "ejs");

// Middleware to serve static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
const posts = [];
// Set up a simple route
app.get('/', (req, res) => {
    res.render('home.ejs',{posts});
});

app.get('/create', (req, res) => {
    res.render('create.ejs');
});

app.get('/about',(req,res)=>{
    res.render("about.ejs")
})
 // Store posts in memory

app.post("/create", (req, res) => {
    const newPost = {
        id: Date.now().toString(), // Generates a unique string ID
        author: req.body.author,
        post: req.body.post
    };
    console.log(newPost);
    posts.push(newPost);
    res.redirect("/");
});

app.get("/posts/:id", (req, res) => {
    console.log("Requested ID:", req.params.id); // Debugging
    console.log(posts);
    const post = posts.find(p => p.id === req.params.id);
    if (!post) {
        return res.status(404).send("Post not found");
    }

    res.render("posts.ejs", { post });
});

app.get("/edit/:id", (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    if (!post) return res.status(404).send("Post not found");
    res.render("edit.ejs", { post });
});

// Route to handle editing (for simplicity, using a GET request instead of POST)
app.post("/edit/:id", (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    if (post) {
        post.post = req.body.post; // Assume form submission
    }
    res.redirect("/");
});

// Route to delete post
app.post("/delete/:id", (req, res) => {
    const index = posts.findIndex(p => p.id === req.params.id);
    if (index !== -1) posts.splice(index, 1);
    res.redirect("/");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
