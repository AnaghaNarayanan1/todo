import express from"express"
let todolist=[]
let finished=[]
let aborted=[]
const router=express.Router()
router.get("/page",(req,res)=>{
    res.render("page",{data:todolist,data1:finished,data2:aborted})
})
router.get("/",(req,res)=>{
    res.render("home")
})
router.get("/finished/:id",(req,res)=>{
    const id=req.params.id
    console.log(id);
    todolist.forEach((task)=>{
        if(task.id==id)
        {
            finished.push(task)
        }
    })
    todolist=todolist.filter((task)=>{
        return task.id!=id
    })
    console.log(finished);
    res.redirect("/page")

})
router.get("/aborted/:id",(req,res)=>{
    const id=req.params.id
    console.log(id);
    todolist.forEach((task)=>{
        if(task.id==id)
        {
            aborted.push(task)
        }
    })
    todolist=todolist.filter((task)=>{
        return task.id!=id
    })
    console.log(aborted);
    res.redirect("/page");
})
router.post("/",(req,res)=>{
    const{id,name,time}=req.body
    let note={
        id:id,
        name:name,
        time:time
    }
    todolist.push(note)
    console.log(todolist);
    res.redirect("/page")
})
export default router;
