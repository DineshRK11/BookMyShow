const express=require('express')
const app = express()
 app.set('view engine', 'ejs')

 app.use(express.static('./images'))
 app.use(express.static('./styles'))

app.get('/',(req,res)=>{
    let movies=[{
        poster:"/movie1.avif",
        title:"Vikrant Rona",
        Genere:"Adventure/Mystery/Thriller"
    },{
        poster:"/movie2.avif",
        title:"Laal Singh Chaddha",
        Genere:"Comedy/Drama/Romantic"
    },{
        poster:"/movie3.avif",
        title:"Bimbisara",
        Genere:"Action/Drama/Fantasy/Period"
    },{
        poster:"/movie4.avif",
        title:"Sita Ramam",
        Genere:"Action/Drama/Romantic"
    },{
        poster:"/movie5.avif",
        title:"Raksha Bandhan",
        Genere:"Comedy/Drama/Family"
    }]
    let premere=[
        {pre:"/pre1.avif"},
        {pre:"/pre2.avif"},
        {pre:"/pre3.avif"},
        {pre:"/pre4.avif"},
        {pre:"/pre5.avif"}

    ]
     let best=[
        {best:"/best1.avif"},
        {best:"/best2.avif"},
        {best:"/best3.avif"},
        {best:"/best4.avif"},
        {best:"/best5.avif"}

     ]
    
        
    
    res.render('home',{movies,crsl1:"/crsl1.avif",crsl2:"/crsl2.avif",crsl3:"/crsl3.avif",crsl4:"/crsl4.avif",crsl5:"/crsl5.avif",book:"/logo.svg",best,premere,premiere:"/premiere.avif",rupay:"/rupay.avif"})
})
app.listen(4000, ()=>{
    console.log('listening');
})