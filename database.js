
const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", (req,res)=>{
db.all("SELECT * FROM articles ORDER BY date DESC",(err,rows)=>{
res.json(rows);
});
});

router.get("/:slug",(req,res)=>{
db.get("SELECT * FROM articles WHERE slug=?",[req.params.slug],(err,row)=>{
res.json(row);
});
});

router.post("/",(req,res)=>{
const a=req.body;
db.run(`INSERT INTO articles
(title,image,summary,content,author,date,category,slug,tags)
VALUES(?,?,?,?,?,?,?,?,?)`,
[a.title,a.image,a.summary,a.content,a.author,a.date,a.category,a.slug,a.tags],
function(err){
res.json({id:this.lastID});
});
});

router.delete("/:id",(req,res)=>{
db.run("DELETE FROM articles WHERE id=?",[req.params.id],
()=>res.json({deleted:true}));
});

module.exports=router;
