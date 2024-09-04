const paginate = (followers) => {
    const itemsPerPage = 20
    const numberOfPages = Math.ceil(followers.length / itemsPerPage)
    const followersPerPage = Array.from({length: numberOfPages}, (_, index)=>{
        const start = index * itemsPerPage
        return followers.slice(start,start + itemsPerPage)
    })
    return followersPerPage
}
export default paginate