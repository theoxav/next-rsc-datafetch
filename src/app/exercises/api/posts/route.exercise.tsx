// 🐶 Importe la fonction `getPosts` qui va récupérer les posts en BDD
import {getPosts} from '@/db/sgbd'

export async function GET() {
  // 🐶 Appelle la fonction `getPosts` pour récupérer les posts en BDD
  //const posts = await getPosts()
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await data.json()

  // 🐶 Retourne les données en json dans la réponse http
  // ⛏️ Supprime `[]` et remplace le par la `data`
  return Response.json(posts)
  // 🐶 Constate la présence des données ici:  http://localhost:3000/exercises/api/posts

  // 🐶 N'oublie pas les exercices bonus
}
