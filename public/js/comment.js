document.querySelector(".btn").addEventListener("click", async()=>{
   
    const description = document.querySelector("textarea").value
    const post_id = document.querySelector("input").value
    console.log(description, post_id);
    const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({description, post_id}),
        headers: {"Content-Type":"application/json"}
    })
    if (response.ok){
        document.location.reload()
    }
    else alert("comment posting error")
})