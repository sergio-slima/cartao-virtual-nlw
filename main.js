const linksSocialMedia = {
  github: 'sergio-slima',
  youtube: 'channel/UCQUUSF4-DdDX80IJZ8ZggNg',
  facebook: 'sergio.silvalima',
  instagram: 'sergio_silva_',
  linkedin: 'in/sergio-silva-lima-b99237140/'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitGubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLogin.textContent = data.login
      userLink.href = data.html_url
      userImage.src = data.avatar_url
    })
}

getGitGubProfileInfos()
