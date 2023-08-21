export default interface DataTypes {
  posts: [{title: string, content: string, src: string, date: string, likes: number, _id: string}],
  links: [{title: string, url: string}]
}