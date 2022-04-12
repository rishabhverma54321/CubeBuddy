// level 2 

const getUsers = () =>{
    Promise.all([getUsers(), getProfile(), getPosts()]).then((result)=>{
        return {
            user: result[0],
            profile: result[1],
            posts : result[2]
        }
    })
}