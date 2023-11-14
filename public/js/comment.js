document.querySelector(".btn").addEventListener("click", async(e)=>{
   console.log(e.target.dataset);
    const description = document.querySelector("input").value
    const post_id = e.target.dataset.postid;
    const user_id = e.target.dataset.userid;
    console.log(description, post_id);
    const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({description, post_id, user_id}),
        headers: {"Content-Type":"application/json"}
    })
    if (response.ok){
        document.location.reload()
    }
    else alert("comment posting error")
})