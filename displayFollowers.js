const container = document.querySelector('.container')


const display = (followers) => {
    const newFollower = followers.map(({login, html_url, avatar_url})=>{
        return `
        <article class="card">
            <img src="${avatar_url}" alt = "${login}"/>
            <h4>${login}</h4>
            <a href = "${html_url}" class="btn">view profile</a>
        </article>
        `
    }).join('')
    container.innerHTML = newFollower
}

export default display