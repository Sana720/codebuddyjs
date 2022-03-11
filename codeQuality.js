// level {2}
//Re-write the below code to better code quality standards.async function getUsers() {

const gUser = async()=>{
    let doc = await Promise.all(getUser(),getProfile(),getPosts());
    let user=doc[0],Profile=doc[1],p=doc[2];
    const userProfile={ user:user,profile:Profile,posts:p};  
    return userProfile; 
};